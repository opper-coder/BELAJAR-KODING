/* REMOTE MIKROTIK, OLT, ROUTER, CCTV, MIKBOTAM
---------------------------------------------------------------------------------------------------
daftar isi:
- remote winbox mikrotik URL
- remote winbox mikrotik IP
- remote winbox mikrotik Android
- remote router client
- remote OLT
- remote CCTV
- MIKBOTAM online		
- remote mikrotik belajar versi lama
---------------------------------------------------------------------------------------------------
remote winbox mikrotik: 
prosesnya kita sewa dulu VPN dari penyedia 
lalu config VPN untuk terhubung dengan mikrotik/router/OLT utk dpt diremote dari publik/internet
--------------------------
daftar vpn di layanan hosting
	- buka https://www.hostddns.us/
	- login > topup dompet (dikasih gratis C2000 ) > 
	- sidebar > VPN remote > order VPN > 
		- vpn server: pilih (vpn harga:2000 sg9 server singapore)
		- username: kasih nama (remote-ITS)(free)
		- pass: 123456 (free)
		- port: xxxx (masukan port mikrotik caranya ada di "cari port" di bawh)
		- perpanjang otomastis: true > create > sampai success
		- klik go back to list > akan tampil list VPN yg sudah kita pesan > 
			> klik datail > manage > kopi script role config
		  	> paste ke terminal winbox > enter ( caranya ada di "tambah VPN" di bawah)
	--------------------------
	setting di winbox:
		- cari port
			IP > services > winbox port: cari(8291 bisa di ganti) 
		- tambah VPN
			- sebelum di eksekusi di t6erminal buka IP > address > lihat daftar IP yg ada 
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
cara akses di winbox2 (pakai IP:port)
	sidebar > VPN remote > list vpn > terlihat daftar > klik detail > manage > 
	information > kopi "IP server" > ":" tanpa spasi  > port (diambil dari port pada URL remote)
	> bentuknya seperti ini: 
	45.125.192.30:3554 
	> gunakan ip ini untuk masuk ke connect to: di winbox
--------------------------
cara akses di HP Android
	download aplikasi winbox di android dan masuk menggunakan url atau IP seperti di PC di atas
---------------------------------------------------------------------------------------------------
remote router client
	- dari dalam jaringan
	pada dasarnya tinggal akses IP nya sudah jadi. tapi ada cara lain sbb:
		1. setting dulu router agar siap diremote dari web
			- login ke router (tenda) > administration > remote web managemen: remote mngn: true/enable
			- port: 8080 boleh di ganti yang natinya untuk akses
		2. akses hubungkan laptop ke internet satu segmen dg router > 
			buka brouser akses url: ip router bersangkutan dan port: 192.168.0.10:8080 
	- dari IP PUBLIC
		sama seperti di atas kita gunakan IP Public seperti remote mikrotik:
		sewa dulu VPN dari penyedia lalu setting ungtuk di gunakan remote 
		caranya sama dengan remote mikrotik di atas sampai eksekusi di terminal.
		jika sudah selesai menambahkan VPN kedua(yg untuk router)(yg pertama untuk mikrotik misalnya)
		maka beri config tambahan sbb:
		IP > firewall > NAT > add > 
			tab general:
				chain: dstnat
				dst adress: IP VPN dari VPN ip server di DDNS
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
remote OLT
	mirip remote router IP PUBLIC. bedanya ada tambahan langkah terakhir (gateway vpn di routes):
		- routes > add > tab general > gatewai:  gateway vpn dari ddns. cara melihatnya:
		- sidebar DDNS > VPN remote > list vpn > terlihat daftar > klik detail > manage > 
			information > Usenamae VPN: disinilah gatewai vpn nya
	cara remote
		buka browser: copas url remote dari ddns 

 */






========================================================================================
REMOTE 
ada beberaaapa cara remote mikrotik 
1. dengan IP public
2. tanpa IP Public
----------------------------------------------------------------------------------------
DENGAN IP PUBLIC
1. pastikan mikrotik sudah jadi clien (punya IP clien) 
   - cek > IP > Adress > pilih IP pada WAN
   - Jika IP nya tidak diawali dengan 192.168. atau 10. dan 172.16. maka anda mendapat IP Public dari ISP.
2. Mengatasi IP Public dari ISP selalu Berubah (IP Public Dynamic)
   - IP > Cloud > centang DDNS enable > update interval isi 00:02:00 > centang juga update time > apply - Ok
   - pada public address kita di kasih IP public (IP ini yang kita kunci) 
   - nah di bawah nya kita di kasih DNS name: randomcharacter.sn.mynetname.n
   - DNS name ini yang kita gunakan untuk login
3. cara akses copas DNS name pada connec to. login: admin pass:""
----------------------------------------------------------------------------------------
TANPA IP PUBLIC MENGGUNAKAN VPN
MASUK KE PENYEDIA DDNS
kita sewa dulu DNS server di freeddns.com > daftar ddns > deposit (Rp 2000/bln)> lalu kita konfig freeddns > di layanan vpn
   kita suruh masukan informasi MIKROTIK spt api port yg di ambil dari mikrotik
   caranya: IP > services
- jika remote untuk winbox pilih port "winbox"
- jika remote mikmon pilih port "api"

DI MIKROTIK
interface > add > ovpn client > tab general ganti nama: 'terserah'
- tab dial OUT > connect  to : 'DNS server yang di kasih server DNS' > isi user dan password
___________________________________________________________________________________________________________
