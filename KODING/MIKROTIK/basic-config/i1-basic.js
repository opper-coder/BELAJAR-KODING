
// CONFIG DASAR ---------------------------------------

bikin configurasi awal kita bikin topologi
1. ISP		: ethernet1 ISP WAN 192.168.1.2/24
2. ROUTER	: ethernet2 LAN LAN 192.168.40.1/24
3. SWITCH	: 
4. ACCESS 	: AP1 192.168.40.3/24   AP2 192.168.40.4/24 

ip modem dan DNS biasanya di kasih ISP

1. setting ip adress di laptop 192.168.40.100 router 192.168.40.1 
2. login ke mikrotik biasanya kita dapatkan error, 
solving hapus sementara 'router' di laptop, tapi di windows tidak mengalami 
hal seperti ini
3. hapus semua config bawaan, dan matikan windows firewall dan antivirus sementara
4. setting AP lompati dulu ??????

5. tambahkan IP ADDRESS ke WAN dan LAN 
IP -> adress -> add -> WAN IP 192.168.1.2 (tergantung ISP)
IP -> adress -> add -> LAN IP 192.168.40.2/24
6. default gateway 
IP -> router -> dst biarkan kosong dulu -> dan gateaway berikan nilai sesuai range dari ISP
dlm contoh: 192.168.1.1 -> kalau dah connect internet pastikan sudah AS dan reachable
7. DNS 
IP -> DNS -> add -> server isi sesuai alokasi ISP: 192.168.1.1
atau open DNS 8.8.8.8 atau 8.8.2.2 -> atau centang allow remote 
(ini dns server sederhana cliaen bisa mengarah kan ke dns sederhana ke arah router)
8. cek koneksi dari router -> buka terminal router -> ketik ping 8.8.8.8 -> ctrl C 
sampai disini harusnya sudah bisa connect dan silahkan lakukan backup
9. ping dari windows juga melalui terminal di windows -> pingh 8.8.8.8
dan jangan lupa kembalikan setting router di laptop yang tadinya di hapus 
-> pada tab dns nya juga harus di configurasi menjadi mengarah
kepada roter gateway : 192.168.40.1
saat di ping masih belum bisa connect ternyata ada config yang belum terjadi
10. firewall NAT 
IP -> firewall -> NAT -> chain: srcnat -> out interface: port yang menuju internet (WAN)->
-> action masquerade
11. coba ping dari sisi laptop -> ping 8.8.8.8 
12. berhasil masukkan internet dari ISP dan keluarkan 
13. sampai disini lakukan backup
file -> backup -> beri nama -> password -> backup -> 
simpan di laptop dengan klik kanan -> download
14. identity, kasih identity supaya punya nama pada perangkat ini saat remote

// HOTSPOT -------------------------------------------

1. IP -> hotspot -> hotspot setup (ini wizard) -> pilih bridge hotspot next
2. nanti dikasih ip subnet otomatis di interface bridgehotsponya (tidak perlu di ubah) ->
3. masquerade di centang -> next kita di kasih range ip dari setup awal (jika kita punya
port2 di perangkat yang menggunakan range ini maka alokasikan sekalian 
yaitu lompati range 2 yang akan di gunakan tersebut) -> next kalau punya sertifikat SSL 
silahkan di load, kalau tidak ya none saja (g wajib, bisa di set kelak juga)->  
next server email lokal, kalau tidak butuh kosongkan saja -> isikan saja 8.8.8.8 
atau berapa yang di berikan otomatis 
4. DNS, berikan penamaan yang belum ada di internet misalnnya ITS-Hotspot.com 
jangan sampai bentrok dengan internet 
5. username password untuk pertama kali sebelum ada user manager lanjutan 
misalnya : admin, admin123 -> OK  
6. biasanya akan reboot, karena semua akses akan di blok dan pindah ke hotspot

// sekarang kita tinggal buka internet di client misalnya google.com

-> maka kita akan di sajikan login page standard default
-> cek status -> ip hotspot/status atau bisa dengan ITS-Hotspot.com/status

7. hapus chache agar saat logout tidak bisa akses internet -> 
IP -> hotspot -> tab server profile -> pilih dklik hsprof1 -> tab login -> uncheck cookie 
8. TRIAL login -> check pada trial setup trial time limit di bawah 
/ bisa dilihat dari client di ITS-Hotspot.com/status
9. RADIUS (bisa integrasi dengan user manager/pengaturan user dengan sekaligus) 
pilih radius di tab radius (tapi yang ini abaikan dulu lah ada pembahasan berikutnya)
10. aktive users -> untuk melihat berapa yang aktif login -> pilih tab active
yang trial di tab users dengan nama T-mac adress
11. Host -> ada ip static ATAU DHCP -> DOUBLE KLIK SALAH SATU IP -> akan kelihatan 
di adress = IP asli dan to address = ip yang sudah di NAT kan (seperti keterangan 
bahwa berapapun user IP adresnya akan di NAT kan di IP network, mau dinamic,static, DHCP atau lainya
tetap di NAT kan opomatis di network hotspot (hal ini di sebut "plug n play access"))
12. sekarang kita coba set laptop dengan DHCP atau di windows obtain 
-> maka kita akan dapatkan alokasi IP otomatis -> sekarang coba login kembali menggunakan user password tadi
-> maka tetap bisa login
-> lihat hotspot -> aktive (maka terlihat IP adress kita yg baru) -> sekarang buka tab host : terlihat 
ip kita dan di depan nya ada flag AH (autorize DHCP) -> doubleklik : address dan to address nya kelihatan
13. di settingan ini pada dasarnya bisa menerima semua settingan alokasi IP dengan static dinamic DHCP dll:
meskipun kita setting IP kita manual dengan IP yang ber beda sama sekali seperti 10.10.10.10 dan DNS nya kita samakan 
maka jika kita lihat di Tab host ip 10.10.10.10 tersebut di NAT kan 
ke IP yang di buatkan alokasinya di network bridge hotspot tersebut
14. jadi kalau mau magemen user maka yang di pakai adalah NAT ini bukan di IP ASLI nya
15. sebagai catatan halaman login ini hanya bisa menampilkan website yang HTTP bukan yang HTTPS 

// USERMAN -------------------------------------------

kita bisa managemen user, pengelompokan, dan kebijakan

1. ip -> hotspot -> tab user profile -> add -> name "tamu" 
-> share user: 10 (jumlah user bersamaan untuk tamu) -> rate limit: u/d (256k/256k) 
-> pada v6 ke atas ada tab queue -> setting queue yang kita buat barusan kita tempatkan pada urutan ke berapa
apakah pertama atau setelah settingan simple queue lainya (queue before) atau langsungh kita ikutkan ke
parent queue yang mana gitu (di simple queue urutan sangat berpengaruh1)
2. username password untuk login tamu -> hotspot -> tab user add -> name dan password 
-> profile : ke profile tamu yang barusan kita buat -> pada tab limit, uptime : misal 15 menit 
-> limit byte total : 500 mb = kuota (hal ini boleh di limit atau tidak sesuai kebutuhan)
3. silahkan login menggunakan user password tamu tadi -> apa bila user password sudah di gunakan dan mencapai limit 
maka user password tersebut tidak bisa di gunakan kembali -> kecuali kalau mau di reset -> caranya 
-> hotspot tab user -> pilih dan klik tombol reset couter ->
4. selesai untuk basic hotspot
-> berikut nya kita setting wireless hotspot nya di ujung distribusinya  
// -----------

