/* REMOTE MIKROTIK VPN via VPS
bisa untuk remote "beberapa" mikrotik, mikhmon, router client, OLT dll
sumber utama: https://citraweb.com/artikel/274/
sumber video: Bilhanet youtube
---------------------------------------------------------------------------------------------------
Daftar isi:
	- langganan VPS 					-> langganan VPS
	- Install winbox cloud (CHR)		-> Install winbox cloud (CHR) di VPS
	- config CHR: 						-> konfig CHR ada beberapa type server client: L2TP, SSTP, PPTP
		- L2TP
			config L2TP Server
				config di CHR			-> konfig CHR agar jadi server untuk mikrotik di lapangan
			config L2TP client
				config di Mikrotik		-> konfig mikrotik di lapangan
			akses
				akses mode L2TP			-> akses
		- SSTP		
			sama						-> confignya mirip saja maka hanya saya tulis sekali
		- PPTP
			sama						-> 
		- kesimpulan 					-> fungsi remote mikrotik bisa banyak sesuai jumlah yang ada 
	- Remote Mikrotik 					-> cara akses login session VPN
	- Remote Mikhmon(mikbotam) 			-> cara config dan login session VPN di mikhmon
	- Remote Router Client 				-> cara remote client dengan VPN
	- Remote OLT 						-> cara remote OLT dengan VPN
---------------------------------------------------------------------------------------------------
BIKIN VPN di VPS 
	langganan dulu VPS di manapun contonya di
		rumehweb.com -> 50.000
		niagahoster.com -> 90.000
		nanti kita akan di berikan parameter:
			- dapat IP VPS
			- OS ubuntu (sesuai pilihan kita saat daftar)
			- username dan pass
			- label
			- dll
	remote VPS dengan PuTTY untuk konfig (Windows)
	remote VPS dengan TERMIUS untuk konfig (Linux)
	
	- download PuTTY di PuTTY.com > install > buka > config:
		hostname: IP dari VPS langganan
		port: 22
		conn type: SSH
		close window on exit: only on clean on exit > open > terminal PuTTY terbuka > if alert > yes
		terminal PuTTY:
			login: username VPS langganan
			pass: pass VPS langganan
			setelah masuk update dulu VPS ubuntu: sudo apt-get update && upgrade
			install winbox cloud di VPS ubuntu pada terminal PuTTY ini pada langkah berikut:
	- install RouterOS include winbox(CHR) di cloud 
		- download CHR(cloud hosted router) di mikrotik.com				
		- buka microtik.com > software > CHR > pilih versi RAW DISK IMAGE(long term) >
		  > pada tombol download klik kanan salin link address > buka terminal PuTTY yg sudah login tadi 
		  terminal PuTTy:> wget [spasi] url download > paste di terminal PuTTY > tunggu sampai selesai download
		- kemudian ketik >: ls > maka terlihat daftar file terdownload > ada satu file yaitu CHR.zip 
		- extract 
			- :> unzip [spasi] nama file terlihat di ls tadi > oya belum ada winzip ya 
			- :> apt install unzip
			- :> unzip lagi :> ls :> terlihat 2 file : zip dan img > 
			- hapus yang zip(opt) :> rm [spasi] nama file zip
		- install image 
			- :> dd if=chr-x.xx.x.img of=/dev/vda > xx.img itu di ganti dengan nama file.img > enter > selesai
	- sekarang restart VPS dari halaman dashboard langganan VPS > cari restart
	- login lagi PuTTY 
		- buka terminal PuTTY yang tadi > terputus karena restart server > klik (kanan) pojok kiri atas terminal putty > 
		  restart session > alert, kita yes lagi > login > username dan password sesuai winboxCHR default (admin, "")
		  pertanyaan licence >: no
		- Instalasi winbox dengan PuTTy selesai saatnya login winboxCHR cloud:
	- akses winbox CHR
		- buka winbox desktop biasa > login > Connect To: IP address VPS langganan > connect > agak lama karena latency 
		- lihat status VPS di winbox > system > resource 
		- atur segera time zone 
		- atur NAT > add > Chain: srcnat > action: masquerade
	- tips karena online harus segera atur keamanan segera(lihat di basic)
	--------------------------
	KONFIGURASI CHR MODE REMOTE
	ada tiga type server dan client VPN akun remote, yiatu: L2TP, SSTP, PPTP
	======================================================inti========================================================= 
	- L2TP:
		--------------------------
		SERVER: BIKIN L2TP (config winbox cloud CHR di cloud):
			- Hidupkan server L2TP
				PPP > interface > L2TP Server > enable:yes > apply ok
			- Tambahkan Akun VPN untuk satu mikrotik:
				- penambahan screts ini, berarti: menambah sebuah VPN 
				- parameter screts ini akan di berikan ke config mikrotik di winbox client
				- jika mau meremote beberapa mikrotik client, buatkan akun VPN di screts pada msing2 client 
				  di bedakan dengan nama, pass, local n remote address, serta port
			- langkah 1 (bikin secrets / akun VPN)
				PPP > tab screts > add  
					name: test_l2tp
					pass: 1234
					service: l2tp (lebih gampangnya agar dialnya pakai mikrotik yg di rumah(l2tp,sstp,pptp), pakai "any")
					profile: default encryption > atau
					profile(optional): 
						PPP > tab profile > add > general name: 1MBku > tab limit > rate limit: 1M/1M > only one:yes
						profile: gunakan 1MBku 		// kan hanya di gunakan untuk remote seberapa sih bandwidthnya
					local address: 25.25.25.1 		// contoh bebas (bikin saja seperti contoh ini nanti saat bikin banyak tinggal 25,26 - 254 VPN )
					remot address: 25.25.30.1 		// contoh bebas (agar terlihat mirip kasih selih 5 )
					apply - OK
			- langkah 3 (arahkan portnya)
				IP > firewall > NAT > add >
					tab general
						Chain: dstnat 
						Dst. address: IP (session CHR)
						protocol: 6(tcp)
						Dst. port: 1000 (tentukan sendiri, ini yang nantinya membedakan bbrp mikrotik di lapangan)
										(nanti kalau ada vpn lainya 1001,1002,1003 dst sesuai VPN yang di buat berapa)
						any port: biarkan (sepertinya port IP/services/winbox/port di rumah) 
						  	// tergantung mau remot apa IP mikmon dsb
					tab action
						action: dst-nat
						To. Address: 25.25.30.1 		// dari remote address PPP tadi
						To. Ports: 1000(8291)			// IP/services/winbox/port di rumah boleh (kita samakan saja juga boleh)
						Apply OK > maka akan muncul di list firewall
					ini dapat diartikan:
						- saat user akses ke IP VPS:port dgn port 1000 tersebut: 
						- CHR akan melakukan redirect ke IP remote address 25.25.30.1:1000               ????????? periksa dulu
							- IP (25.25.30.1:1000) ini akan di gunakan(diberikan) untuk connection di IP private kita (winbox rumah)
						- Winbox rumah akan mengkonsumsi IP remote di dalam dirinya(L2TP client)
		--------------------------
		CLIENT: BIKIN L2TP (config winbox di mikrotik hardware dirumah):
			- langkah 2 (bikin dulu langkah2 di client spt di video (langkah123), tapi coba saja (langkah132)) di bwah ini:
				buka winbox dan masuk ke mikrotik hardware(di rumah, buka berdampingan dg CHR) anda
					ambil parameter AKUN VPN()screts:
						- IP VPS
						- username, pass
				PPP > interface > add > L2tp client
					tab general
						name: l2tp-test (beda nama gak apa2 dg server)
					tab dial
						connect To: IP (diambil dari session IP VPS di CHR (kiri atas CHR))
						user: test_l2tp (dari scrests CHR terkait)
						pass: 1234 (dari screts terkait)
						profile: biarkan
						apply - OK > cek sudah aktif
						akan telihat muncul daftar disini > dclick > 
						atau lihat status di pojok kanan bawah : connected
						lihat tab status > link down:O > local dan remot address : sesuai dg atas> 
		--------------------------
		REMOTE DARI INTERNET CHR
			buka winbox > login
				Connect To: IP VPS:1000 dari port NAT/Dst.port CHR
				admin: username mikrotik dirumah
				pass: pass mikrotik dirumah
	======================================================/inti========================================================= 
	--------------------------
	- SSTP:
		Server: 
			secrets caranya sama saja dengan L2TP tapi 
			nama: sstp-test
			local: 26.26.26.1
			remote: 26.26.31.1
	--------------------------
	- PPTP:
		server secrets samasama enable saja
			nama: pptp-test
			local: 27.27.27.1
			remote: 27.27.32.1
---------------------------------------------------------------------------------------------------
KESIMPULAN
	- kita bisa membuat banyak akun screts kita bisa meremote beberapa mikrotik di CHR, 
	  bahkan bisa di jual kalau mau
	- lalu koneksikan akun screts di winbox di rumah menggunakan parameter akun screts
	- login akun session dengan IP VPS:"port(screts)" dengan username password milik mikrotik di rumah
		- endpoint di mikrotik client adalah:
		config winbox client berisi:
			PPP > interface > add > L2tp client
								tab general
									name: l2tp-test (atau boleh VPN-Bgi-Lompio)
								tab dial
									connect To: IP (diambil dari session IP di CHR (kiri atas CHR))
									user: test_l2tp (ambil di PPP/screts CHR tadi.)
									pass: **** (ambil di PPP/screts CHR tadi.)
		login session:
			- IP VPS (CHR):"port(yg di buat sendiri)" contoh: 192.168.111.234:1000
			- username dan pass: dari mikrotik client
	- cara nya seperti diatas

*/
/* REMOTE MIKHMON
---------------------------------------------------------------------------------------------------
di mikrotik client:
copy config milik mikrotik yang sama pada VPN PPP di winbox mikrotik yang akan di remote juga dgn mikmon ini
dblclict PPP milik VPN-mikrotik-ini(yg bersangkutan)
	PPP > interface > add > L2tp client
								tab general
									name: l2tp-test (VPN-Bgi-Lompio)(ganti dengan VPN-Mikhmon-Bgi-Lompio)
								tab dial
									connect To: IP (diambil dari session IP di CHR (kiri atas CHR))
									user: test_l2tp (ambil di PPP/screts CHR tadi.)
									pass: **** (ambil di PPP/screts CHR tadi.)
		login session:
			- IP VPS (CHR):port (yg di buat sendiri) contoh: 192.168.111.234:1000
			- username dan pass: dari mikrotik client
MIKHMON:
	- buka mikhmon di localhost xampp (mungkin mikbotam, jg bs) > 
	- sidebar mikhmon > add router > 
		session name: bebas 
		IP mikrotik: IP VPN anda dari VPN
		username pass: sesuai mikrotik ya
		-----
		Hotspot name: bilha.net (bebas)
		DNS: sesuai setingan teman2 
		save > ping > OK 
		connect (koneksi dari luar jaringan sudah bisa) 
*/

/* REMOTE ROUTER CLIENT
---------------------------------------------------------------------------------------------------
- remote Router Clien dengan IP static dalam jaringan local tinggal panggil IP nya saja
- kalau untuk handle matikan restart blokir router, bisa di tangani di OLT
- point satu dalam luar area ya butuh VPN langkahnya
	- buatkan akun screts dalam CHR bernama remote-router-client
	- tautkan dengan mikrotik di rumah 
		> action nya teruskan ke IP perangkat client 
	   	> saat akun VPN dan config di mikrotik dah connected
	- gunakan VPN untuk akses : IP VPS:"port(hasil dari screts)"
	--------------------------
	- KONFIG ROUTER CLIENT
		- pastikan dan catat untuk diperlukan nanti
			- remote management di router: enable(tenda)
				- enable ping access on WAN dan - Enable web server access on WAN (totolink)
			- catat IP mode: static xxx.xxx.xxx.xxx
			- catat port(web server): 80 misalnya
	- VPN SERVER: KONFIG CHR VPS untuk membuat akun VPN L2TP sendiri
		- caranya sama dengan diatas
		- berikan nama, pass, port, IP local, IP Remote tersendiri
	- VPN CLIENT: KONFIG MIKROTIK DIRUMAH
		- caranya sama dengan diatas
		- bikin dial up clent dengan parameter konsumsi dari server L2tp tersebut
	- BIKIN REDIRECT VPN KE PERANGKAT (Router Client, OLT, DLL)(disini ada tambahan redirec untuk client mikrotik rumah)
		- untuk redirect lagi ke perangkat (router client) kita bisa tambahkan config berikut di mikrotik rumah:
	IP > Firewall > NAT > add > 
		tab general >
			Chain: dstnat
			Dst. Address: 25.25.30.1 			// (IP remote dari secrets)
			protocol: 6(tcp)
			dst.port: 1000 						// (ports dari secrets) 
		tab action
			action: dstnat
			to address: xxx.xxx.xxx.xxx			// IP dari perangkat client mikrotik kita (IP router client)
			to port: 80 						// port dari perangkat client mikrotik kita (port router client)
		comment: kasih comment ini adalah remote VPN untuk client Mikrotik gonggong misalnya:
			sehingga saat kita punya banyak perangkat klien pada mikrotik ini kita bisa remote dengan 
			hanya mengganti destinasi IP pada action NAT ini beserta portnya 
			(sesuaikan dengan IP static dan port pada konfigurasi perangkat tersebut)
		tips: semua perangkat Mikrotik, OLT, router client, catat pada data sheet di google sheet
			berupa identitas, agar kita dengan mudah mengontrol seluruh perangkat hanya dengan meminta datasheets tesebut:
			nama, pass, IP, port, pemilik, lokasi, merk, type, dll
--------------------------
		ini dapat diartikan:
						- saat user akses ke IP VPS:port dgn port 1000 tersebut: 
						- CHR akan melakukan redirect ke IP remote address 25.25.30.1:1000               ????????? periksa dulu
							- IP (25.25.30.1:1000) ini akan di gunakan(diberikan) untuk connection di IP private kita (winbox rumah)
						- Winbox rumah akan mengkonsumsi IP remote di dalam dirinya(L2TP client)
						- kemudian saat di akses winbox akan meredirect kemabli ke IP client
--------------------------

*/

/* REMOTE OLT
---------------------------------------------------------------------------------------------------
- OLT adalah Perangkat untuk FTTH(fiber to the home) digital ke fiber optic
- OLT dapat di konfigurasi untuk tujuan 
	- monitoring 
		- traffic
		- jumlah clien trdaftar
		- jumlah aktif
		- jumlah bandwidth yang lewat
		- kekuatan db yang lewat
		- jumlah yang user yng aktif(ada g ya?)
	- aksi
		- disable/enable client
		- restart client
- ada 4 cara remote OLT HIOSO
	- remote langsung ke komputer
	- remote ke jaringan local satu segment
	- remote ke jaringan local beda segmen
	- remote ke jaringan public/WAN/internet
---------------------------------------------------------------------------------------------------
- remote OLT jaringan langsung ke komputer
	- setting komputer di IP 1 segmen
		change adapter option > ethernet > properties > internet protocol IPv4 > static > IP samakan segmen dg hioso
		192.168.0.99
	- IP HIOSO default: 192.168.0.88
		- boleh di ganti namun harus ingat, atau jk lupa reset ke dafault lg
		- ingat untuk remote OLT harus pada ether MGMN
	- buka browser di laptop: akses IP HIOSO: 192.168.0.88
--------------------------
- remote OLT pada jaringan local 'satu' segmen
	- jika kita akan connect kita tinggal setting pada OLT maupun laptop mengikuti pada jaringan segment jaringan local
	- pada laptop akses wifi atau jaringan hospot dengan DHC client saja boleh (agar masuk kesegmen yang sama dengan OLT)
	- pada OLT 
		system > network > IP device: 10.10.10.88 		// buatkan IP static pada segmen yg di tuju
		gateway IP: 10.10.10.1 
	- 
--------------------------
- remote OLT pada jaringan local 'beda' segmen
	- hubungkan OLT di ether tersendiri(rename ether OLT manajemen) di mikrotik
	- buatkan IP segmen pada ether tersebut misalnya: 192.168.10.1/24
	- setting IP OLT pada segment ether di OLT, misalnya
		IP device : 192.168.10.88 
		Gateway : 192.168.10.1
	- test > terminal > IP OLT  ping 192.168.10.88 > replay OK
- buka laptop di jaringan local milik mikrotik tesebut di segmen manapun untuk mengakses OLT di browser: 192.168.10.88
--------------------------
- remote OLT pada jaringan WAN
	- sama kayak Remote router client di WAN di atas pakai VPN 
	- tinggal ganti destination IP dan port pada NAT action pada akun VPN PPP anda
	- atau lebih baiknya bikin kan VPN khusus untuik remote OLT
	- jadi remote khusus OLT dan Router Clien berbeda  
---------------------------------------------------------------------------------------------------  
KESIMPULAN PRAKTEK REMOTE PERANGKAT
	jika kita memiliki banyak mikrotik, dan masing masing memiliki OLT, dan memiliki banyak Router client, maka:
	1. Sewa 1 VPS
	2. buatkan VPN pada masing masing Mikrotik (sesuai jumlah mikrotik)
	3. buatkan 1 VPN untuk remote Router Client
	4. buatkan 1 VPN untuk remote OLT
	5. Buat datasheet pada semua perangkat meliputi
		nama, pass, IP, port, pemilik, lokasi, merk, type, dll
	6. Buatkan pedoman ringkas handle Remote OLT
	7. Buatkan pedoman ringkas handle Remote Router Client 
	8. simpan pedoman praktis pada file yang sama dengan data sheets










	
CARA SHARING FOLDER JARINGAN SESAMA PC
*/
