RINGAKASAN        
----------------------------------------------------------------------------------------------------------
CONFIG DASAR PADA INTERFACE
- jika config dasar sudah di lakukan maka skip langkah ini
---------------------------
- ISP ,dapatkan internet dari ISP:
- IP > 
    1. DHCP client > add > interface ether 1 > centang DNS dan NTP > default route: yes > Apply - OK > bound
    2. butikan: terminal ping: 8.8.8.8, DNS, ping google.com
---------------------------
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
----------------------------------------------------------------------------------------------------------
BUAT VLAN
- interface > add > VLAN > 
    1. name : "VLAN-10"                      // nama dan angka sesuaikan ID 
    2. vlan ID : 10                          // 10 samakan dg nama engkja terserah 10,11,12 atau 100 200 300
    3. loop protect : default(opt : on)      // supaya selalu on saja silahkan
    4. interface : ether2                    // pilih interface "pilih port, bridge" jika banyak bikin vlan tumpuk di ether ini saja
    5. apply > Ok
        - kalau mau kasih comment            // optional
==========================================================================================================
DESKRIPSI
- fungsi utama vlan adalah : membawa 2> alamat(2ip, 2service) pada 1 interface(port, bridge)
- intinya hanya pada 1 langkah ini saja (dalam garis tebal) selebihnya hanya config dasar dibawah 
- vlan bisa di kombinasikan pada BRIDGE kayakknya - tinggal pilih BRIDGE pada saat bikin interface VLAN
==========================================================================================================
IP ADDRESS VLAN
vlan ini dibuat 2 buah yang akan menjadi server yang berbeda ke bawah maka kita harus buatkan IP gateway (pakai slash)
- tips pakai slash: buat satu IP pada port atau bridge nganggur untuk dihapus lagi nantinya > saat bikin IP pakai slah 22 miasalnya
- lalu berikutnya buatkan DHCP server pada IP port tersebut > pada saat next2 ada rentang yang di berikan akan terlihat silahkan coba
pada masing2 vlan 10.10.10.10/22 dan 20.20.20.20/24 misalnya
    1. IP > Adresses > add > address :10.10.10.10/22  > interace : VLAN-10 // interface dalam kasus ini pilih vlan-10
    2. bikin IP untuk vlan berikutnya juga
----------------------------------------------------------------------------------------------------------
DHCP SERVER
- setiap interface jika mau di bagikan kebawah maka buatkan IP server pada Interface bersangkutan (ETHER BRIDGE VLAN)
  seperti IP DINAMIC DHCP SERVER, IP STATIS, HOTSPOT sesuai kebutuhan, dalam kasus ini dinamis
    1. IP > DHCP Server > DHCP > tombol DHCP Setup > interace : VLAN-10 > next2 // dalam kasus ini pilih VLAN10 (port, bridge, vlan)
        - terpenting perhatikan IP address ya (biasanya sih otomatis)
__________________________________________________________________________________________________________
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

