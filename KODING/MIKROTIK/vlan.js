RINGAKASAN

CARA BUAT VLAN
- interface > tab VLAN > add > 
    - isikan tab general:
        - name : "aqil-VLAN-10" > vlan ID : "number (terserah sbg pengenal boleh ngka 10,11,12 dst )" > 
        interface pilih interface : "pilih port, bridge, vlan" (vlan tidak kayaknya) > 
    - tab loop :
        - loop protect : default(opt : on) supaya selalu on saja silahkan
    - tab lainya biarkan
    - kalau mau kasih comment
    - apply >  OK
==========================================================================================================
DESKRIPSI
- fungsi utama vlan adalah : membawa 2> alamat(2ip, 2service) pada 1 interface(port, bridge)
- intinya hanya pada 1 langkah ini saja (dalam garis tebal) selebihnya hanya config dasar dibawah 
- vlan bisa di terapkan pada BRIDGE ya
    - tinggal pilih BRIDGE pada saat bikin interface VLAN
==========================================================================================================        
----------------------------------------------------------------------------------------------------------
CONFIG DASAR PADA INTERFACE
- jika config dasar sudah di lakukan maka skip langkah ini
---------------------------
- ambil internet dari ISP
- IP > DHCP client > add > interface ether 1 > centang DNS dan NTP > Apply - OK > bound
---------------------------
IP ADDRESS VLAN
- setelah interface vLAN di buat lalu buatkan IP ADDRESS ALOKASI untuknya
  untuk disebar nantinya ke luar sbg anggotanya 
- caranya:
    - IP > Adresses > add > 
        - address : 'alokasi ke bawah/pakai slash 24' > interace : 'pilih port, bridge, vlan' 
---------------------------
- agar bisa di bagikan sekaligus bisa akses internet untuk client maka kita kasih config dasar padanya
    - DNS:
        IP > DNS > centang 'allow remote request'
    - FIREWALL:
        tab NAT > add
            tab general > 
                chain : srcnat
                out Interface : 'pilih port, bridge, vlan' 
            tab action >
                action : masquerade
----------------------------------------------------------------------------------------------------------
DHCP SERVER
- setiap interface jika mau di bagikan kebawah maka buatkan IP DINAMIC seperti DHCP SERVER
- caranya:
    - IP > DHCP Server > add > 
        DHCP > tombol DHCP Setup > interace : 'pilih port, bridge, vlan' > next2
    - terpenting perhatikan IP address ya (biasanya sih otomatis)

----------------------------------------------------------------------------------------------------------
TERIMA VLAN
- cara kirim jaringan 1 port dengan 2 IP sudah di lakukan di atas (kirim VLAN)
- sekarang bagaimana menerima 1 port dengan 2 IP (terima VLAN)
- karena yang kita terima 1 port akan di bagi dengan 2 IP maka kita membutuh kan alat SWITCH MANAGEABLE 
  atau mikrotik yang memiliki chip switch manajebel
- sekarang kita gunakan microtik saja:
- pada mikrotik ke 2 ini pastikan sudah di hapus setting defaultnya 
      - kita hanya mengatur 'bridge' dan 'switch'
      - karena kita hanya butuhkan sebagai switch maka kita bridge kan dulu 2 port 
      - BRIDGE : 
        - interface > BRIDGE > add > interface bridge1 misalnya > port 1 >
        - buatkan juga untuk bridge 2 dan 3 
          (karena kita butuhkan 3 port dalam bridge 1 untuk masuk 2 untuk keluar) 
      - SWITCH:
        - SWITCH > tab vlan > add
            - switch : biarkan
            - VLAN ID : 10 (Sesuaikan dengan VLAN ID pengirim (diatas))
            - port : ether 1 biarkan sbg trunc lalu tambahkan ether2 dengan klik panah ke bawah (sebagai access)
                1 port "mode trunc" 2 dan port "mode access"
            - lalu buatkan juga port access pada port3 seperti port 2 barusan dan vlan ID 20
        - tab PORT:
            - setting port1 > double klik pd ether1 
                - VLAN mode : secure
                - VLAN header : add missing
            - setting port2 > double klik pd ether2
                - VLAN mode : secure
                - VLAN header : always strip
                - VLAN ID : 10 (Sesuaikan dengan VLAN ID pengirim (diatas))  
            - setting port3 > double klik pd ether2
                - VLAN mode : secure
                - VLAN header : always strip
                - VLAN ID : 20 (Sesuaikan dengan VLAN ID pengirim (diatas))  
----------------------------------------------------------------------------------------------------------
- CEK IP
    - untuk memastikan kita cek IP yang dikirimkan dari server
    - cara nya
        - sambungkan LAN laptop pd ether yang ingin kita lihat IP nya 
        - buka terminal :> ipconfir > baca info yang di berikan 
        - jika sama dengan IP yang dikirimkan sesuai dg ip port vlan maka berhasil
            
__________________________________________________________________________________________________________

