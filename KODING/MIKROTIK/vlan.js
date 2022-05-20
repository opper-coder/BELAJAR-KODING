==========================================================================================================
DESKRIPSI
- fungsi utama vlan adalah : membawa 2 alamat pada 1 interface(port, bridge) 
----------------------------------------------------------------------------------------------------------
CARA BUAT VLAN
- intinya hanya pada 1 langkah ini saja (dalam garis tebal) selebihnya hanya config dasar dibawah 
- interface > tab VLAN > add > 
    - isikan tab general:
        - name : "nama" > vlan ID : "number (terserah sbg pengenal boleh ngka 10,11,12 dst )" > 
        interface pilih interface : "pilih port, bridge, vlan" (vlan tidak kayaknya) > 
    - tab loop :
        - loop protect : default(opt : on) supaya selalu on saja silahkan
    - tab lainya biarkan
    - kalau mau kasih comment
    - apply >  OK
==========================================================================================================
----------------------------------------------------------------------------------------------------------
IP ADDRESS
- setelah interface vLAN di buat lalu buatkan IP ADDRESS ALOKASI untuknya
  untuk disebar nantinya ke luar sbg anggotanya 
- caranya:
    - IP > Adresses > add > 
        - address : 'alokasi ke bawah' > interace : 'pilih port, bridge, vlan' 
        
----------------------------------------------------------------------------------------------------------
CONFIG DASAR PADA INTERFACE
- jika config dasar sudah di lakukan maka skip langkah ini
---------------------------
- ambil internet dari ISP
- IP > DHCP client > add > interface ether 1 > centang DNS dan NTP > Apply - OK > bound
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
      - 





