==========================================================================================================
==========================================================================================================
----------------------------------------------------------------------------------------------------------
DESKRIPSI
- fungsi utama vlan adalah : membawa 2 alamat pada 1 interface(port, bridge) 
- 
----------------------------------------------------------------------------------------------------------
CARA BUAT VLAN
- interface > tab VLAN > add > 
    - isikan tab general:
        - name : "nama" > vlan ID : "number (terserah sbg pengenal boleh ngka 10,11,12 dst )" > 
        interface pilih interface : "pilih port, bridge, vlan" (vlan tidak kayaknya) > 
    - tab loop :
        - loop protect : default(opt : on) supaya selalu on saja silahkan
    - tab lainya biarkan
    - kalau mau kasih comment
    - apply >  OK
----------------------------------------------------------------------------------------------------------
IP ADDRESS
- setelah interface vLAN di buat lalu buatkan IP ADDRESS ALOKASI untuknya
  untuk disebar nantinya ke luar sbg anggotanya 
- caranya:
    - IP > Adresses > add > 
        - address : 'alokasi ke bawah' > interace : 'pilih port, bridge, vlan' 
        
----------------------------------------------------------------------------------------------------------
DHCP SERVER
- setiap interface jika mau di bagikan kebawah maka buatkan IP DINAMIC seperti DHCP SERVER
- caranya:
    - IP > DHCP Server > add > 
        DHCP > tombol DHCP Setup > interace : 'pilih port, bridge, vlan' > next2
    - terpenting perhatikan IP address ya (biasanya sih otomatis)
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
KALAU VLAN 





