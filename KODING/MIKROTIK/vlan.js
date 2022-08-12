RINGAKASAN        
--------------------------------------------------------------------------------------
CONFIG DASAR PADA INTERFACE
--------------------------------------------------------------------------------------
- jika config dasar sudah di lakukan maka skip langkah ini
---------
- ISP, dapatkan internet dari ISP:
- IP > 
    1. DHCP client > add > interface ether 1 > centang DNS dan NTP > default route: yes > Apply - OK > bound
    2. butikan: terminal ping: 8.8.8.8, DNS, ping google.com
---------
NAT MASQUERADE:
- agar bisa di bagikan sekaligus bisa akses internet untuk client maka kita kasih config dasar padanya
    1. DNS:
        IP > DNS > centang 'allow remote request'
    2. FIREWALL:
        tab NAT > add
            tab general > 
                chain : srcnat
                out Interface : 'pilih port, bridge, vlan' 
            tab action >
                action : masquerade
--------------------------------------------------------------------------------------
BUAT VLAN
--------------------------------------------------------------------------------------
- interface > add > VLAN > 
    1. name : "VLAN-10"                      // nama dan angka sesuaikan ID 
    2. vlan ID : 10                          // 10 samakan dg nama engkja terserah 10,11,12 atau 100 200 300
    3. loop protect : default(opt : on)      // supaya selalu on saja silahkan
    4. interface : ether2                    // pilih interface "pilih port, bridge" jika banyak bikin vlan tumpuk di ether/bridge ini saja
    5. apply > Ok
        - kalau mau kasih comment silahkan   // optional
    6. buatkan juga untuk VLAN-20 nya di ether atau bridge yang sama dg interface VLAN-10
----------
IP ADDRESS VLAN
kasih IP gateway pada kedua vlan 
    1. IP > Adresses > add > address :10.10.10.10/22  > interace : VLAN-10
       misalnya : IP VLAN-10 : 10.10.10.10/22 dan IP VLAN-20 : 20.20.20.20/24
---------
DHCP SERVER
- setiap interface jika mau di bagikan kebawah maka buatkan IP server pada Interface bersangkutan (ETHER BRIDGE VLAN)
  seperti IP DINAMIC DHCP SERVER, IP STATIS, HOTSPOT sesuai kebutuhan, dalam kasus ini dinamis
    1. IP > DHCP Server > DHCP > tombol DHCP Setup > interace : VLAN-10 > next2 // dalam kasus ini pilih VLAN10 (port, bridge, vlan)
        - terpenting perhatikan IP address ya (biasanya sih otomatis)
______________________________________________________________________________________
--------------------------------------------------------------------------------------
TERIMA VLAN
--------------------------------------------------------------------------------------
pada vlan kita kenal dengan type port:
port/intervace VLAN TRUNC  = port yang mebawa multi servevice
port/intervace VLAN ACCESS = port membawa single service 

- pada OS versi 6 kebawah tidak suport hardware-offload oleh karena itu gunakan 6> keatas
- sebelum melakukan pembuatan vlan kita harus tahu dulu apakah RB kita terdapat CHIP switch
    - switch > type dan lihat vlan table kemampuanya di www.wiki.mikrotik.com > tiap RB chip nya berbeda2
    - port > semua port tergabung dalam "switch1" > sehingga bisa di lewatkan access oleh chip ke swith tersebut
      "switch1" di gunakan untuk setting vlan access nantinya
    - kalau v6 kebawah ada "master port", v6 keatas di gantikan dengan "hardware ofload"
-------------------------
- BIKIN BRIDGE
    1. bridge > add > name.
    2. tab port > add > pilih port dari trunc ether-1 untuk masuk 2 dan 3 untuk keluar dan bridge yang di buat > 
       centang "hardware ofload" (sebagai ganti dari master port di v6 kebawah)
- BIKIN VLAN ACCESS(memecah vlan keluar)
    1. Switch > tab VLAN > add 
       > swich: switch1 > vlan ID: 10 (sesuaikan panggil setingan yg ada di server)
       > buatkan juga vlan ID: 20 
       > port trunc: port: ether1 
       > port access: > tambahkan port lagi (panah kebawah):  port:ether2
- VLAN MODE
    TRUNC:
        switch > tab port > dclick ether1(vlan trunc) > VLAN MODE : secure > vlan Header: "add if missing" 
    ACCESS:
        switch > tab port > dclick ether2 dan 3 (vlan access) > VLAN MODE : secure > vlan Header: "always strip" > VLAN ID : 10  
        buatkan juga pada vlan2
- UJI
    - tancapkan laptop di ether 2 atau 3 di mikrotik switch
    - lihat sambungan ether gunakan otomatic dhcp/obtain > maka kita akan dapatkan IP dari server sesuai range yang di berikan
    - coba akses internet
-------------------------
