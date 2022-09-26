/* REMOTE MIKROTIK, OLT, ROUTER, CCTV, MIKBOTAM
---------------------------------------------------------------------------------------------------
daftar isi:
-------------------
- remote VPN freeDDNS
	- config
	- akses winbox mikrotik URL		-> via vpn ddns URL
	- akses winbox mikrotik IP		-> via vpn ddns IP
	- akses winbox mikrotik Android		-> via app android
- remote VPN tunnel.my.id
	- config 				-> 
	- akses 				-> 
- remote mikrotik pakai webfig			-> via browser
- remote mikrotik pakai teamviewer		-> via teamviewer
- remote mikrotik dengan putty 			-> berbasis CLI via telnet terminal OS atau SSH terminal bawaan mikrotik
- remote router client				-> untuk pengaturan saja. kalau restart matikan bisa lewat OLT 
- remote OLT					-> dalam dan luar jaringan, remote router juga(matikan, restart dll) ???????  
---------------------------------------------------------------------------------------------------

- MIKBOTAM online				-> koneksi, hosting, operasional ??????????????
- Remote Finasial 				-> party, kumpulkan, accouting, deviden, gaji, operasional ????????
- remote smart plug bardi 			-> kontrol power elektrik perangkat ????????
---------------------------------------------------------------------------------------------------
REMOTE WINBOX MIKROTIK: 
prosesnya kita sewa dulu VPN dari penyedia 
lalu config VPN untuk terhubung dengan mikrotik/router/OLT 
utk dpt diremote dari WAN/publik/internet
---------------------------------------------------------------------------------------------------
VPN1 FREEDDNS
	- buka https://www.hostddns.us/
	- login > topup dompet (dikasih gratis C2000 ) > 
	- sidebar > VPN remote > order VPN > 
		- vpn server: pilih (vpn harga:2000 sg9 server singapore)
		- username: kasih nama (remote-ITS)(free)
		- pass: 123456 (free)
		- port: xxxx (masukan port mikrotik caranya ada di "cari port" di bawh)
		- perpanjang otomastis: true > create > sampai success
		- klik go back to list > akan tampil list VPN yg sudah kita pesan > 
			> klik datail > manage > kopi script role config mikrotik
		  	> paste ke terminal winbox > enter ( caranya ada di "tambah VPN" di bawah)
	--------------------------
	setting di winbox:
		- cari port
			IP > services > winbox port: cari(8291 bisa di ganti) 
		- tambah VPN
			- sebelum di eksekusi di terminal buka IP > address > lihat daftar IP yg ada 
			- saat VPN di eksekusi di terminal, akan terlihat tambahan baru
			  berupa VPN remote DDNS nya
			- terminal > paste VPN dari config dari website > enter > selesai
	setelah di config tinggal akses dg beberapa cara berikut:
	--------------------------
	cara akses di winbox1 (pake url)
		pada sidebar > VPN remote > list vpn > terlihat daftar mikrotik VPN yng sudah kita order
		copas "url remote" > lalu gunakan masuk ke winbox > yaitu
		masukkan ke connect to: di winbox > user password ikut default winbox > 
		maka masuk ke session remote (bukan mac atau ip)
	--------------------------
	cara akses di winbox2 (pakai ip:port)
		sidebar > VPN remote > list vpn > terlihat daftar > klik detail > manage > 
		information > kopi "IP server" > ":" tanpa spasi  > port (diambil dari port pada URL remote)
		> bentuknya seperti ini: 
		45.125.192.30:3554 
		> gunakan ip ini untuk masuk ke connect to: di winbox
---------------------------------------------------------------------------------------------------
VPN2 TUNNEL.MY.ID
	- login website > sidebar > add VPN account
		lokasi server: vpn remote id7(terserah)
		username: banggaiVPN
		pass: kasihpass > save and go back to list > diarahkan ke list daftar VPN yg sudah kita daftarkan
	- disitu terlihat parameter VPN yg dikasih
	--------------------------
	setting di winbox:
		- ppp > interface > add > OVPN client > 
			- tab general
				Name: vpn-remote(kasih nama)
			- tab dial out
				connect to: id7.tunnel.my.id		// copas url di config dari parameter vpn tunnel.my.id
				port: 1000 							// copas port di config jg (id7-1000.conf)
				mode: Ethernet
				user: banggaiVPN					// dari parameter
				pass: *** 							// dari parameter
				profile: default encryption > apply OK
			- lihat di pojok kiri bawah > status: connected
		- tools > NetWatch > add
			tab host
				host: IP netwatch VPN remote 		// sidebar > VPN > tips > ip netwach > vpn remote: copy disini
				apply > OK
	--------------------------
	cara akses:
	di parameter di bawah kita di kasih ling dengan port yang berbeda
	- port 80 				-> di akses dari browser
	- port 8291 			-> akses via winbox
--------------------------
CARA AKSES DI HP ANDROID
	download aplikasi MikroTik googleplay > masuk menggunakan url atau IP VPN seperti di PC di atas
--------------------------
REMOTE PAKAI TEAM VIEWER
	seperti biasa yaitu meremote PC pada dasarnya
--------------------------
REMOTE VIA WEBFIG
	hubungkan komputer dengan mikrotik > ketik di browser IP mikrotik(tidak bisa mac address) > terbuka webfig > login
	ini bisa di remote juga pakai VPN freeDDNS 
	(alternative winbox, bagusnya tidak usah install, bisa multi platform, bisa ganti tema) 
--------------------------
REMOTE VIA PUTTY
	download putty di putty.org > download > install > akses // bagusnya ada versi arm, x86
	buka aplikasi :  remote bisa lewat telnet atau SSH caranya pilih metode misalnya SSH
	> masukkan IP mikrotik (tidak bisa via mac adress) > OK maka terbuka terminal 
---------------------------------------------------------------------------------------------------
REMOTE ROUTER CLIENT
	- dari dalam jaringan
	pada dasarnya tinggal akses IP nya sudah jadi. tapi ada cara lain sbb:
		1. setting dulu router agar siap diremote dari web
			- login ke router (tenda) > administration > remote web managemen: remote mngn: true/enable
			- port: 8080 boleh di ganti yang nantinya untuk akses
		2. akses hubungkan laptop ke internet satu segmen dg router > 
			buka brouser akses url: ip router bersangkutan dan port: 192.168.0.10:8080 
	- dari IP PUBLIC
		sama seperti di atas kita gunakan IP Public seperti remote mikrotik:
		sewa dulu VPN dari penyedia lalu setting untuk di gunakan remote 
		caranya sama dengan remote mikrotik di atas sampai eksekusi di terminal.
		jika sudah selesai menambahkan VPN kedua(yg untuk router)(yg pertama untuk mikrotik misalnya)
		maka beri config tambahan sbb:
		IP > firewall > NAT > add > 
			tab general:
				chain: dstnat
				dst adress: IP VPN dari VPN "ip server" di DDNS
				            (caranya mirip diatas "pakai IP:port" tp yg IP VPN ya)
				protocol: 6(tcp)
				dst. port: ambil dari port di list vpn ddns field URL remote (warna hijau)
			tab action:
				action:dst-nat
				to address: ip static router (OLT, CCTV, dll)yg mau di remote
				to port: 80 (port milik router juga tp belum tahu di ambil dari mana ini)
						(kayaknya remote via web port memang 80)
	- cara akses:
		buka ddns > sidebar > VPN remote > order list > url REMOTE > copas
		buka browser: masukkan url yang di berikan dari DDNS > enter 
	- TIPS :
		buat 3 VPN di ddns 
		1. untuk remote mikrotik 
		2. untuk remote OLT
		3. untuk remote router
		jadi caranya tinggal config lagi saat di gunakan pada perangkat yg di tuju
---------------------------------------------------------------------------------------------------
REMOTE OLT
	mirip remote router IP PUBLIC. bedanya ada tambahan langkah terakhir (gateway vpn di routes):
		- routes > add > tab general > gatewai:  gateway vpn dari ddns. cara melihatnya:
		- sidebar DDNS > VPN remote > list vpn > terlihat daftar > klik detail > manage > 
			information > Usenamae VPN: disinilah gatewai vpn nya
	cara remote
		buka browser: copas url remote dari ddns 


 */
