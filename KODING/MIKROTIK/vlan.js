RINGAKASAN
vlan adalah port secara virtual yang dapat di kirim sacara banyak dalam satu port fisik(satu kabel)
kemudian di terima dan di pecah kembali menjadi banyak fisik port
kita akan config 2 mikrotik
1 untuk server vlan (mikrotik biasa)
2 untuk menerima vlan (mikrotik sebagai switch> yaitu yang memiliki chip switch manageable)
3 bisa juga langsung diterima dengan ONT(support vlan) namun kita harus setting ke vlan accessnya
--------------------------------------------------------------------------------------
CONFIG DASAR PADA INTERFACE (mikrotik pertama)
jika config dasar sudah di lakukan maka skip langkah ini
---------
ISP
    1. IP > DHCP client > add > interface ether-1 > centang DNS dan NTP > default route: yes > Apply - OK > bound
    2. butikan: terminal ping: 8.8.8.8, DNS, ping google.com
---------
NAT MASQUERADE dan DNS:
agar bisa di bagikan sekaligus bisa akses internet untuk client maka kita kasih config dasar padanya
    1. NAT:
       IP > firewall > tab NAT > pilih list mungkin ini port1 > tab general > chain: srcnat > out Interface: 'ether-1(ISP)' 
            tab action > action: masquerade
    2. DNS:
       IP > DNS > centang 'allow remote request'
--------------------------------------------------------------------------------------
BUAT VLAN
akan kita buat distribusi ke bawah dg 2 vlan: VLAN-10 dan VLAN-20
--------------------------------------------------------------------------------------
- interface > add > VLAN > 
    1. name: "VLAN-10"                      // nama dan angka sesuaikan vlan-ID 
    2. vlan ID: 10                          // 10 samakan dg nama engkja terserah 10,11,12 atau 100 200 300
    3. interface: ether2                    // INTInya berada disini. interface(ether2 atau bridge misalnya) di gunakan untuk beberapa vlan yang akan di buat
    -  apply > Ok
    -  buatkan juga untuk VLAN-20 nya di ether/bridge yang sama(ether2)
    -  loop protect: default(opt : on)      // supaya selalu on saja silahkan (di penjelasan lain kayaknya tidak usah)
----------
IP ADDRESS VLAN
kasih IP gateway pada kedua vlan: 10.10.10.0/22 dan 20.20.20.0/24
    1. IP > Adresses > add > address :10.10.10.0/22  > interace : VLAN-10        // jangan salah pada interface
---------
DHCP SERVER
    1. IP > DHCP Server > DHCP > tombol DHCP Setup > interface : VLAN-10 > next2 // dalam kasus ini pilih vlan-10
        - terpenting perhatikan IP address ya (biasanya sih otomatis)
        - buatkan juga untuk server lainya (VLAN-20): boleh DHCP server, hotspot, atau manual
______________________________________________________________________________________
TERIMA VLAN (mikrotik kedua)
--------------------------------------------------------------------------------------
pada vlan kita kenal dengan type port:
port/intervace VLAN TRUNC  = port yg membawa multi service
port/intervace VLAN ACCESS = port yg membawa single service 

- pada OS versi 6 kebawah tidak suport hardware-offload oleh karena itu gunakan v6 keatas
- sebelum melakukan pembuatan vlan kita harus tahu dulu apakah RB kita terdapat CHIP switch nya
    - switch > type dan lihat vlan list. kemampuanya di www.wiki.mikrotik.com. tiap RB chip nya berbeda2, salah satu kemampuanya "table vlan"
    - port > semua port tergabung dalam "switch1" > sehingga bisa di lewatkan access oleh chip ke "switch1" tersebut
      "switch1" di gunakan untuk setting vlan access dan trunc nantinya
    - kalau v6 kebawah ada "master port", v6 keatas di gantikan dengan "hardware offload"
    - hal ini menghaaruskan kita bikin bridge yang ada hardware offloadnya agar bridge bisa di bagi ke hardware ether 
-------------------------
- hubungkan laptop di mikrotik penerima (sbg switch) di ether4 misalnya untuk remote 
  karena ether 123 akan di pakai vlan - makanya pastikan reset dulu routernya
- BIKIN BRIDGE
    1. bridge > add > name: bridge1-VLAN (misal)
    2. tab port > add > masukan ether-1, 2 dan 3 > centang "hardware ofload" (sebagai ganti dari master port di v6 kebawah)
- VLAN ACCESS(memecah vlan keluar)
    1. Switch > tab VLAN > add 
       > swich: switch1 > vlan ID: 10 (sesuaikan panggil setingan yg ada di server)
       > port: ether1                                           // sebagai trunc (sumber vlan)
       > tambahkan port lagi (panah kebawah):  port: ether2     // sebagai port access
    2. buatkan juga vlan ID: 20 
- SWITCH / vlan mode
    TRUNC:
        switch > tab port > dclick ether1(vlan trunc) > VLAN MODE : secure > vlan Header: "add if missing" 
    ACCESS:
        switch > tab port > dclick ether2 dan 3 (vlan access) > VLAN MODE : secure > vlan Header: "always strip" > VLAN ID : 10  
        buatkan juga pada ether3
- UJI
    - tancapkan laptop di ether 2 atau 3 di mikrotik switch
    - lihat sambungan ether gunakan otomatic dhcp/obtain > maka kita akan dapatkan IP dari server sesuai range yang di berikan
    - coba akses internet
-------------------------
