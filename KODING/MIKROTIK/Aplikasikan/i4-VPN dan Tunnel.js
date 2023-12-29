-----------------------------------------------------------
29 desember 2023  

VPN
vpn adalah jika ada dua jaringan local yang akan akan terhubung
sehingga client2 yang berada pada masing masing server bisa saling terhubung
biasanya dua server ini terhubung dengan kabel, jika memungkinkan. 
namun jika berjauhan maka tidak mungkin kabel 
sebagai ganti alternatifnya kita gunakan sambungan VPN via Internet
oya perlu di ingat sambungan di internet itu banyak macam protokol nya dengan berbagai keperluan
FTP, UDP, STP, HTTP, HTTPS, SSL, SSH, telnet, dll termasuk VPN ini 

serverA sebagai VPN server 
serverB sebagai VPN client

VPN singkatanya adalah (virtual private network)(atau sambungan pribadi kabel virtual)

VPN ada beberapa macam: 
PPTT, point to point tunneling protocol (lawas, sudah tdk secure)
SSTP, secure socket tunneling protocol (port sama dg HTTP, maka ISP jarang yng ngeblok HTTP)
L2TP, layer 2 tunneling protocol (layer 2)
OVPN, open vpn (terbaru, lbh secure)

TUJUAN VPN DI BUAT
- sebuah kantor agar data-datanya aman maka lalu lintas data hanya boleh dilakukan pada jaringan lokal tertutup
- sehingga orang luar tidak mungkin bisa mengakses karena tertutup, tidak ada jalan keluar-masuk
- tapi jika kantor dan pegawainya ada yang berjauhan maka harus pakai kabel sendiri untuk mengakses data tersebut
- tapi kalau jauhnya kelewatan maka mungkin "terpaksa" harus ada jalur masuk lewat internet
- tapi syaratnya harus secure dan masih seperti jaringan local(local yg semu)  
- maka dibuatlah protokol jaringan local semu ini yang di sebut VPN
SEKURITI
- bagaimana jk orang mencoba masuk lewat VPN: jawab, VPN ada autentikasi nya, data dikirim dg encryption  
SYARAT
	- memiliki IP public, 
	- terhubung ke internet
	- konfig VPN protocol
	- akun sekuriti
	- IP VPN (karena kita tidak menghubungkan langsung ke antar IP public, melainkan antar IP VPN yang kita buat)
	- ada Server
	- ada Client
	- Client ada 2:
		1. client berupa server mikrotik (setting client di mikrotik)
		2. client berupa mobile laptop windows linux android atau HP (setting client di OS) 
	- Clien mobile 
		1. ada yang support VPN 
		2. ada yang Instalasi client VPN dari pihak ketiga 

-----------------------------------------------------------
SIMULASI TOPOLOGY 
serverA: IP public: 100.100.100.100 LAN: 10.10.10.0/24 jadikan VPN server
serverB: IP public: 200.200.200.200 LAN: 20.20.20.0/24 jadikan VPN client
dengan asumsi sudah di basic config pada ke dua mikrotik tersebut

-----------------------------------------------------------
PPTP
	---
	serverA
	- enable
			ping google.com 													// pastikan tersambung ke internet tidak
			PPP > tab interface > tombol PPTP server
				enable: true
				default profile: default encryption 
				apply ok
	- bikin akun VPN PPTP untuk client
			PPP > tab secrets > add
				name: user1 														// nama/istilah nya "AKUN SECRET"
				pass: 1
				service: pptp 													// default any, boleh pilih manapun sebenarnya
				default profile: default encrypt
				local address: 1.1.1.1 									// jika PPTP terjalin maka IP VPN "server" ini
				remot address: 1.1.1.2 									// jika PPTP terjalin maka IP VPN "client" ini
	---
	serverB
		ping 100.100.100.100 												// sebelum koneksi ping dulu ip public serverA di internet
		PPP > add > pptp client >  									// dialOut ke serverA
			tab dialOut
				connect to: 100.100.100.100 						// ip public serfverA
				user: user1
				pass: 1
				profile: default encryption
	---
		cek di serverB
			tab interface 
				ada role interface baru dengan flag R 
		cek di serverA
			PPP > tab active connection
				ada role user scret baru yang dial dengan encryp MPPE128, cek juga di IP address
			IP > adresses > 
				ada IP dg flag D 1.1.1.1 dari 1.1.1.2
	---
	koneksi sudah terjalin tinggal lakukan jalur komunikasi kita buat dengan routing 
	ceritanya kita akan komunikasi dengan jaringan dari "local serverA" ke "local serverB" 
		serverA
			IP > routes > add
				dst address: 20.20.20.0/24 (jaringan local serverB)
				gateway: 1.1.1.2 (IP VPN Client)(atau langsung gateway interface: pilih pptp ) seperti saat di cek di interface
				apply ok
		serverB (caranya sama)
			IP > routes > add
				dst address: 10.10.10.0/24 							// jaringan local serverA)
				gateway: 1.1.1.1 (IP VPN server) 				// atau langsung gateway interface: pilih pptp ) seperti saat di cek di interface
				apply ok
	komunikasi
	ping 20.20.20.1 (ping ke gateway local B jika replay berhasil, sebaliknya dari B ping ke A)
------------------------
koneksi PPTP dari serverA dari mobile (laptop hp windows, buka dari serverB) 
yang di atas adalah PPTP dari server ke server, sedang ini dari server ke laptop atau HP langsung ke client enduser
karena enduser biasanya jumlahnya banyak maka kita buatkan dulu range IP pool untuk enduser VPN ini
---
	IP > pool > add
		name: poolVPN
		address: 1.1.1.2 - 1.1.1.120
---
	PPP > tab profiles > add 											// bikin profile dulu sebelum bikin akun VPN
		general
			name: ProfileVPN
			Local Address: 1.1.1.1
			remote Address: poolVPN
		protocol
			use encryp: yes (atau required sama)
		limit
			only one: no 															// supaya bisa akses semua pool nya, bukan hanya satu orang
			apply ok
	bikin akun secret VPN PPTP untuk client mobile 
	tab secret 
			PPP > tab secrets > add
				name: user2-Mobile
				pass: 1
				service: pptp 													// default any, boleh pilih manapun sebenarnya
				default profile: pilih profileVPN 
				local address:  												// kosongkan saja karena sudah di wakili oleh profileVPN tadi
				remot address:  												// kosongkan
	// di secret tambahkan komentar remote "side by side" dan "side by mobilePool"
	---
	koneksi dari windows laptop
		- klik network dan sharing center kanan bawah
		- setup new connection
		- pilih connect to work place > next > pilih No(karena kita bikin baru) > pilih connect using VPN 
		 		internet address: 100.100.100.100  (IP publict VPN server)
				name: isi dengan VPNserverA > next
				username: user2-mobile (akun VPN tadi)
				pass: 1 (akun vpn tadi)
				klik: connect > tunggu > connected
	---
	tips
	- pada pptp kalau bisa server memiliki ip public statis
	- pptp server memiliki internet dedicated dan stabil
	- pada client windows7 hanya bisa terkoneksi jika pptp server mengaktifkan default encryption 

-----------------------------------------------------------
SSTP
	mirip saja sebenarnya dengan PPTP, 
	bedanya ada pengelolaan sertificate, 
	protocol ini jarang di pakai, karena tidak semua OS support secara native

-----------------------------------------------------------
L2TP
	adalah pengembangan PPTP dan L2F, 
	sehingga network dan encrypsi sama dengan PPTP
		- encryp NPPE128
		- network L2TP port udp1701, sedang pptp port 1773, tapi protocol L2TP ini lebih aman:
		- karena bisa di kombinasikan dengan Internet Protocol secure atau (IPsec)
		- konfigurasi yang aman biasanya susah, tapi kombinasi Ipsec tidak susah, lihat saja 
		- satu Router bisa di konfig jadi "L2TP server", "L2TP client", atau "keduanya" 
	contoh:
		- serverA memiliki Ip Public: 100.100.100.100 LAN: 10.10.10.1/24, dijadikan SERVER
		- serverB memiliki IP Public: 200.200.200.200 LAN: 20.20.20.1/24, dijadikan CLIENT

	---
	serverA 
	- enable L2TP
		ping: google.com 										// pastikan ada internet tidak
		PPP > tombol L2TP
			enable: true
			dafault profile: default encryption
			use IPsec: no 										// biarkan no dulu agar membedakan dengan yg yes nantinya (yg mudah dulu)
			apply Ok
	- bikin akun L2TP untuk client
		PPP > tab secrets > add
			name: user1
			pass: 1
			service: L2TP											// default any, boleh pilih manapun sebenarnya
			default profile: default encrypt
			local address: 1.1.1.1 						// jika L2TP terjalin maka  IP VPN "server" ini
			remot address: 1.1.1.2 						// jika L2TP terjalin maka  IP VPN "client" ini
	---
	serverB
	- koneksi
		ping 100.100.100.100
		PPP > interface > add > L2TP client 
			general
				name: L2TP ServerA
			dialOut
				connect to: 100.100.100.100 		// ip public serverA
				username: user1 								// dari akun secret
				pass: 1
				profile: default encryption
				apply OK
			cek di serverB
				tab interface 
					ada role interface baru dengan flag R 
			cek di serverA
				PPP > tab active connection
					ada role user scret baru yang dial dengan encryp MPPE128, cek juga di IP address
				IP > adresses > 
					ada IP dg flag D 1.1.1.1 dari 1.1.1.2
		---
	koneksi sudah terjalin tinggal lakukan jalur komunikasi kita buat dengan routing 
	ceritanya kita akan komunikasi dengan jaringan dari "local serverA" ke "local serverB" 
		serverA
			IP > routes > add
				dst address: 20.20.20.0/24 (jaringan local serverB)
				gateway: 1.1.1.2 (IP VPN Client)(atau langsung gateway interface: pilih pptp ) seperti saat di cek di interface
				apply ok
		serverB (caranya sama)
			IP > routes > add
				dst address: 10.10.10.0/24 				// jaringan local serverA)
				gateway: 1.1.1.1 (IP VPN server) 	// atau langsung gateway interface: pilih pptp ) seperti saat di cek di interface
				apply ok
	komunikasi
	ping 20.20.20.1 (ping ke gateway local B jika replay berhasil, sebaliknya dari B ping ke A)
	------------------------
	diatas tadi adalah konfig dasar server client L2TP
	jika kita kombinasikan dengan IPsec 
		server
			saat membuat server L2TP di server:
			use IPsec : yes
			IPsec Screet: aqil123 							// kayak passwordnya nanti 
		client
		saat membuat L2TP client
			use IPsec: true
			IPsec Screet: aqil123 							// isi password yang tadi
	---
	saat di cek di serverA, encripnya sudah ganti jadi <cbc(aes) + hmac(sha1)>
	------------------------
	serverA ke clien Mobile (laptop)
		konfig laptop windows
		cmd ping ke 100.100.100.100
		- start menu > search  "VPN" > 
			add a VPN connection
			VPN provider: windows
			connection name: VPN serverA (nama terserah)
			server name: 100.100.100.100 (IP public)
			VPN type: L2TP (pilih)
			type sign in: user pass
			user: user1			// dari akun secret
			pass: 1
			save
		- beralih ke menu: change adapter options
			pilih "VPN serverA" > klik kanan > properties > tab security > advance setting > 
				use shared key :
				isikan IPsecret : 12345 semacam passwordnya tadi
				OK
			sekarang klik kanan lagi > connect 
	------------------------	
	jika menggunakan IPsec ini agak lebih berat maka sebaiknya gunakan hardware accelerator yang memadai. seperti gr3 dan gx4 1100 dan ccr series
-----------------------------------------------------------
OVPN
-----------------------------------------------------------
	mirip saja sebenarnya dengan PPTP, SSTP, L2TP 
	bedanya ada pengelolaan sertificate, dan menyediakan encrypt lebih banyak
	protocol ini terbilang terbaru dan banyak di tawarkan pada vendor
	jadi kita bisa generate sertificate dulu atau beli sertificate di internet kemudian gunakan encryp sertificate ini untuk koneksi VPN
-----------------------------------------------------------
IP Tunnel
	- IP tunnel disebut juga IP IP, yaitu encapsulasi paket di IP kedalam IP  
	- paket header sebesar 20-40 byte setiap pengiriman, yaitu sangat ringan
	- IP tunnel memiliki tujuan yang sama bedanya sambungan ini tidak menggunakan autentikasi, 
	- sama sama tunnel ini data dikirim dengan encrypsi sebenarnya
	- support berbagai perangkat meskipun non mikrotik (cross platform)
sekenario TOPOLOGI
	- serverA memiliki Ip Public: 100.100.100.100 LAN: 11.11.11.1/24, dijadikan SERVER
	- serverB memiliki IP Public: 200.200.200.200 LAN: 22.22.22.1/24, dijadikan CLIENT
tapi kita bisa sekenario kan seperti ini
	harusnya memilik IP public, tapi karena kita tidak punya maka kita gunakan saja IP alokasi yang diberikan ISP pada DHCP CLient
	cek 
		IP > address > ether1-WAN > ip: misal: 11.22.33.44/24 
		IP LAN serverA   
-----------------------------------------------------------
	serverA 
		bikin IP tunel
		Interfaces > tab IP Tunnel > add 
			general 
				name: tunnelA-B 											// nama interface A
				local address: 100.100.100.100				// ip public serverA
				remote address: 200.200.200.200 			// ip public serverB (jadi head to head)
				apply OK
			ada row baru berisi interface IP Tunnel: serverA
		---
		kasih IP pada IPtunnel
		IP > address > add 
			address: 10.10.10.1 										// kasih ip tunnel server (sendiri)
			network: 10.10.10.2 										// kasih ip tunnel client (lawan)
			interface: tunnelA-B 										// 
	serverB
		bikin ip tunnel juga
		Interfaces > tab IP Tunnel > add 
			general 
				name: tunnelB-A 											// nama interface B
				local address: 200.200.200.200				// ip public serverB sendiri
				remote address: 100.100.100.100 			// ip public serverA (jadi dibalik)
				apply OK
			ada row baru berisi interface IP Tunnel: serverB dan sekarang ada Flag R (artinya koneksi terjalin)
		---
		kasih IP pada IPtunnel
		IP > address > add 
			address: 10.10.10.2 										// kasih sendiri
			network: 10.10.10.1 										// kasih lawan
			interface: tunnelB-A 										// 
---------------------
tunnel sudah terjalin tinggal agar bisa komunikasi antar perangkat masing2 LAN, maka buatkan static routing
	static routing di serverA
	IP > routes > add
		Dst address: 22.22.22.1/24								// IP LAN lawan nya serverB 
		gateway: 10.10.10.2 											// IP tunnel serverB
---
	static routing di serverB
	IP > routes > add
		Dst address: 11.11.11.1/24								// IP LAN lawan nya serverA 
		gateway: 10.10.10.1 											// IP tunnel serverA
---
coba komunikasi
dari serverA ping gateway LAN serverB

ping 22.22.22.1
tracert 22.22.22.7 														// ke laptop teman, maka akan terlihat tahapan, route
-----------------------------------------------------------
