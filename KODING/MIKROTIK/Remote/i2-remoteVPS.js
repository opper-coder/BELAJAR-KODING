/* REMOTE MIKROTIK VPN via VPS
---------------------------------------------------------------------------------------------------
Daftar isi:
	langganan VPS 						-> langganan VPS
	Install winbox cloud (CHR)			-> Install winbox cloud (CHR) di VPS
	config CHR: 						-> konfig CHR ada beberapa type server client: L2TP, SSTP, PPTP
	- L2TP
		config L2TP Server
			config di CHR				-> konfig CHR agar jadi server untuk mikrotik di lapangan
		config L2TP client
			config di Mikrotik			-> konfig mikrotik di lapangan
		akses
			akses mode L2TP				-> akses
	- SSTP		
		sama							-> confignya mirip saja maka hanya saya tulis sekali
	- PPTP
		sama							-> 
	- kesimpulan 						-> fungsi remote mikrotik bisa banyak sesuai jumlah yang ada 
---------------------------------------------------------------------------------------------------
BIKIN VPN di VPS 
	langganan dulu VPS di manapun contonya di
		rumehweb.com -> 50.000
		niagahoster.com -> 90.000
		nanti kita akan di berikan parameter:
			- dapat IP
			- OS ubuntu (sesuai pilihan kita saat daftar)
			- username pass
			- label
			- dll
	remote vps
	- download putty di putty.com > install > buka > config:
		hostname: IP dari VPS langganan
		port: 22
		conn type: SSH
		close window on exit: only on clean on exit > open > terminal putty terbuka > if alert > yes
		terminal putty:
			login: username vps langganan
			pass: sama
			setelah masuk update dulu VPS ubuntu: sudo apt-get update && upgrade
			install winbox cloud di VPS pada terminal putty ini pada langkah berikut
	- install winbox di cloud (CHR)
		- download CHR(cloud hosted router) di mikrotik.com				
		- buka microtik.com > software > CHR > pilih versi RAW DISK IMAGE(long term) >
		  > pada tombol download klik kanan salin link address > buka terminal putty yg sudah login tadi 
		  :> wget [spasi] url download > paste di terminal putty > tunggu sampai selesai download
		- kemudian ketik >: ls > maka terlihat daftar file terdownload > ada satu yaitu CHR.zip 
		- extract :> unzip [spasi] nama file terlihat di ls tadi > oya belum ada winzip ya :> apt install unzip
		- :> unzip lagi :> ls :> terlihat 2 file : zip dan img > hapus yang zip(opt) :> rm [spasi] nama file zip
		- install image :> dd if=chr-x.xx.x.img of=/dev/vda > xx.img itu di ganti dengan nama file.img > enter > selesai
	- sekarang restart VPS dari halaman dashboard langganan VPS cari restart
	- login lagi putty 
		- buka terminal putty yang tadi > terputus karena restart > klik (kanan) pojok kiri atas terminal putty > 
		  restart session > kita yes lagi alert > login > username dan password pakai mikrotik punya ya (admin, "")
		  pertanyaan licence >: no
		- selesai
	- akses winbox CHR (belum terhubung ke hardware mikrotik)
		- buka winbox desktop biasa > login > Connect To: IP address VPS langganan > connect > agak lama karena latency 
		- lihat status VPS di winbox > system > resource 
		- atur segera time zone 
		- atur NAT > add > Chain: srcnat > action: masquerade
	- tips karena online harus segera atur keamanan segera(lihat di basic)
	--------------------------
	MODE REMOTE ADA BEBERAPA:
	- L2TP:
		--------------------------
		BIKIN L2TP SERVER (config winbox cloud CHR di cloud):
			- daftarkan akun VPN untuk koneksi ke sebuah perangkat mikrotik dalam CHR
				PPP > interface > L2TP Server > enable:yes > apply ok
				PPP > tab screts > add  			// penambahan screts ini adalah sama dengan menambah akun remote (bisa bikin banyak) 
					name: test_l2tp
					pass: 1234
					service: l2tp (lebih gampangnya agar dialnya pakai mikrotik yg di rumah, pakai eny)
					profile: default encryption 
					profile(optional): 
						PPP > tab profile > add > general name: 1MBku > tab limit > rate limit: 1M/1M > only one:yes
						profile: gunakan 1MBku 		// kan hanya di gunakan untuk remote seberapa sih bandwidthnya
					local address: 25.25.25.1 		// contoh bebas
					remot address: 25.25.30.1 		// contoh bebas
					apply - OK
		--------------------------
		BIKIN L2TP CLIENT (config winbox di mikrotik hardware dirumah):
			buka winbox dan masuk ke mikrotik hardware(di rumah) anda
				PPP > interface > add > L2tp client
					tab general
						name: l2tp-test (beda nama gak apa2 dg server)
					tab dial
						connect To: IP (diambil dari session IP di CHR (kiri atas CHR))
						user: test_l2tp (ambil di PPP/screts CHR tadi.)
						pass: sama
						profile: biarkan
						apply - OK > cek sudah aktif
						akan telihat muncul daftar disini > dclick > 
						lihat tab status > link down:O > local dan remot address : sesuai dg atas> 
		--------------------------
		CONFIG TAMBAHAN LAGI CHR
			server dan client sudah selesai di config tinggal bagaimana cara remote dari internet
			buka winbox yang ke CHR 
			IP > firewall > NAT > add >
				tab general
					Chain: dstnat 
					Dst. address: IP (session CHR)
					protocol: 6(tcp)
					Dst. port: 1000 (tentukan sendiri, ini yang nantinya membedakan bbrp mikrotik di lapangan)
					any port: biarkan (sepertinya port IP/services/winbox/port di rumah) 
					  	// tergantung mau remot apa IP mikmon dsb
				tab action
					action: dst-nat
					To. Address: 25.25.25.1 		// dari remote address PPP tadi
					To. Ports: xxxx(8291)			// IP/services/winbox/port di rumah
					Apply OK > maka akan muncul di list firewall
		--------------------------
		REMOTE DARI INTERNET CHR
			buka winbox > login
				Connect To: IP VPS:1000 dari port NAT/Dst.port CHR
				admin: username mikrotik dirumah
				pass: sama
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
	- kita bisa membuat banyak akun screts kita bisa meremote beberapa mikrotik, bahkan bisa di jual kalau mau
	- endpoint nya adalah:
		IP VPS (CHR):port (yg di buat sendiri)
		username dan pass


*/
