/* WEB HOSTING RASPBERRY PI 4 */
/* daftar isi
---------------------------------------------------------------------------------------------------
 */

/* RASPBERRY PI
---------------------------------------------------------------------------------------------------
	
download ISO
- buka raspberrypi.com
	download yang versi lite 64 terbaru > raspberrypi OS lite 64 with desktop  > pilih yang zip
- install OS
	- download dan install raspberry pi imager di website raspberrypi.com > software > di linux atau windows
	- siapkan SDcard 16GB kecepatan bagus > masukkan
	- jalankan raspberrypi imager > next2 ikuti instruksi 
 */

/* AAPANEL
---------------------------------------------------------------------------------------------------
kita biasa kenal cpanel pada penyedia web hosting. sekarang kita buat web hosting juga seperti cpanel 
tapi alternative nya yaitu aapanel di rap berry pi untuk server pribadi keren bukan

buka aapanel di browser:
aapanel di google atau
https://www.aapanel.com atau
https://www.aapanel.com/new/index.html

- buka raspberry lalu update dan upgrade > terminal:
	sudo apt update && upgrade -y
- usahakan raspberry fresh (belum pernah instal xampp dll)
- pada halaman home aapanel > free install > copas script install versi debian(ingat, meski ubuntu juga bisa)
- terminal > sudo su > passsword > paste > tunggu sampai selesai (lama 78 menit kayaknya)
- masih di terminal > congratulations > di kasih dua IP: 1. ip internet 2. ip internal. jg username dan pass
- buka browser akses IP internal
- saat di akses IP nya maka langsung dapat di akses aapanelnya
	- tapi ada hal2 yangh perlu di instal lagi seperti PHP, mysql, php myadmin, nginx dll
	- atau install manual di side bar > appstore > php 7.4 dst wajibnya:
		- ftpd
		- php myadmin
		- ddns manager (cloudflare)
		- file@band
		- open ligthspeed (web server)
		- firewall
		- apache 
		cukup lama waktunya

- setting aa panel > sidebar > setting
	- port: 1412 (edit saja sesuai kesukaan dan tidak tabrakan port yg akan anda akses)
	  lebih aman biarkan saja (7800)
	- security entrance: /namahostingku , karena aksesnya nanti: IP:port/entrance > submit
	- panel user: aqilhost
	- panel pass: 1234 free
- sehingga saat akses lagi sekarang pake:
	IP internal:port/namahostingku
 */

/* AKSES/REMOTE HOSTING pakai VPN seperti mikrotik
---------------------------------------------------------------------------------------------------
sampai disini aapanel sudah bisa diu akses di local tugas kita bagaimana bisa di akses di internet
lihat VPN REMOT pada MIKROTIK (mungkin juga bisa)
 */
