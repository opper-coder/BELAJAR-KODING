/*
LOAD BALANCE FAILOVER
---------------------------------------------------------------------------------------------------
yaitu load balance sistem induk dan cadangan
seperti misalnya ISP1 10M sebagai induk, ISP2 10M sebagai cadangan. 
maka habiskan dulu ISP1 jika tidak mencukupi maka gunakan cadangan sehingga
habisnya tidak sama dan tidak berbarengan 
---------------------------------------------------------------------------------------------------
Daftar isi
	- konfig dasar 								-> basicnya sedikit beda jadi harus di desain dari awal jika load balance
	- konfig failover recursive					-> mode dasar load balance recursive (agak lambat pindahnya)
	- konfig failover netwatch					-> mode alternative (lebih cepat)
	- speed test pada salah satu ISP			-> satu jalur saja
	- Pisah jalur Youtub ke ISP cadangan ISP2	-> prioritas
---------------------------------------------------------------------------------------------------
SETTING DASAR KEPERLUAN FAILOVER
TOPOLOGI
	ISP1: IP: 192.10.10.10 (tergantung ISP) port: Ether1
	ISP1: IP: 192.20.20.20 (tergantung ISP) port: Ether2
	Client: Bridge ke semua port misalnya di 	: Ether3
-----------------------------
DHCP CLIENT:
	IP > DHCP client  > add > name: ether1-ISP1 > interface: ether1 > DNS dan NTP: no > add default route:no (kalau setting dasar basic, DNS NTP default route: yes)
	IP > DHCP client  > add > name: ether2-ISP2 > interface: ether2 > DNS dan NTP: no > add default route:no > Apply Ok > bound
	dblclk IP client  > tab status > ada data bounding IP, gateway, DHCP server gateway dll 
-----------------------------
DNS
	IP > DNS > server: 8.8.8.8, 8.8.4.4 > allow remote reques: yes > apply Ok
-----------------------------
MASQUERADE
	Ip > firewall > tab NAT > add > tab general > Chain: srcnat Out.interfc: ether1-ISP1 > action: masquerade > appl Ok 
	Ip > firewall > tab NAT > add > tab general > Chain: srcnat Out.interfc: ether2-ISP2 > action: masquerade > appl Ok 
-----------------------------
IP ROUTES
	karena kita tadi route di no maka kita wajib bikin manual untuk keperluan failover (ada di "distance")
	IP > rotes > add > 
		dst adress: 0.0.0.0/0
		gateway: 192.10.10.10 	// gateway ISP1 lihat di DHC CLIENT > pilih ISP > dblclk > tab status
		check gateway: ping
		distance: 1 			// karena di buat sebagai bandwidth ISP utama isi 1
		comment: ISP1-induk > apply OK
	IP > routes > add > 
		dst adress: 0.0.0.0/0
		gateway: 192.20.20.20 	// gateway ISP2
		check gateway: ping
		distance: 2				// isi 1 ISP cadangan
		comment: ISP2-cadangan > apply OK
-----------------------------
TEST INTERNET
	terminal > ping google.com > time 34 > OK
-----------------------------
HOTSPOT
	catatan jika menu hotspot atau ppp tidak ada maka enablekan dulu di:
		system > package > pilih hotspot > klik tbl enable > reboot winbox
	ether3 kalau masukkan ke bridge silahkan tapi ini langsung saja sebagai CLIENt
		IP > address > add > IP: 10/20/30/1/24 > interface: Ether3 > apply Ok
	IP > Hotspot > server > hotspot setup > interface: ether3 > next2 > 
	jangan lupa tentukan pool untuk perangkat dan DNS name (seperti aafiber.net)(hotspot ada user pass) IP per mac1
-----------------------------
TEST FAILOVER
	- saat di ping di terminal maka internet sudah jalan
	- saat di li lihat di IP > routes > terlihat list ISP1 dan ISP2 namun di ISP2 berwarna biru(muted/tidak aktif)
		- posisi kedua ISP ter tancap di portnya masing2
		- saat port ISP1 di lepas maka bandwidth otomatis berpindah ke ISP2, ISP1 gantian yg muted(timeout)(karena PORT lepas)
		- berbeda saat kabel di putus (dengan kabel di port1 tetap tertancap)(sebagai simalasi internet down atau gangguan dari ISP1)
			- yang terjadi adalah internet tidak berpindah melainkan mati(timeout)(hal ini di sebut failover belum recursive)
---------------------------------------------------------------------------------------------------
FAILOVER RECURSIVE GATEWAY
	setting IP ROUTES YANG DI ATAS BOLEH DI HAPUS ATAU EDIT DENGAN CONFIG DI BAWAH INI
- recursive ISP1:
	- IP > routes > list ISP1 dan ISP2 terlihat > dblclk ISP1 > edit dst. address dari: 0.0.0.0/0 menjadi 1.1.1.1 > apply Ok
		(carikan DNS favorite 1111 dari cloudfire, 8844, 8888,  )nanti tempatnya akan berpindah kebawah di list abaikan dulu, lanjut
		gateway: ISP1 biarkan
		Check gateway: ping
		Distance: 1 				// 1 sebagai ISP utama
		scoop: 30 					// default
		target scoop: 10        	// default
		comment: Cek ke ISP1 > apply Ok
	- add > tab general >
		dst. address : 0.0.0.0/0
		gateway: 1.1.1.1/1 			// jangan lagi dari gateway ISP melainkan dari routes yang kita buat tadi
		Check gateway: ping
		Distance: 1
		scoop: 30
		target scoop: 30 			// ganti 30 samakan dengan scoop pada cek yang di atas (30) cek ke 1111 cloudflare
		comment: Recursive ISP1 (utama) > apply Ok
- recursive ISP2:
	- IP > routes > list ISP1 dan ISP2 terlihat > dblclk ISP1 > dst. address 8.8.8.8 > apply Ok
		gateway: ISP2 biarkan
		Check gateway: ping
		Distance: 1 				// 1 untuk keperluan cek
		scoop: 30 					// default
		target scoop: 10        	// default
		comment: Cek ke ISP2 > apply Ok
	- add > tab general >
		dst. address : 0.0.0.0/0
		gateway: 8.8.8.8 			// jangan lagi dari gateway ISP melainkan dari routes yang kita buat tadi
		Check gateway: ping
		Distance: 2 				// 2 untuk ISP cadangan
		scoop: 30
		target scoop: 30 			// ganti 30 samakan dengan scoop pada cek yang di atas (30) cek ke 1111 cloudflare
		comment: Recursive ISP2 (backup) > apply Ok
-----------------------------
TEST FAILOVER2
	lakukan pemutusan ke kabel modem (jangan yang di ether1) maka akan terjadi rekursive (pindah jalur) sekitar 26 detik
-----------------------------
CATATAN 
	load balance dengan recursive hanya cocok untuk 2 ISP karena perpindahanya cukup lama kalau 3 - 5 ISP maka gunakan
	load balance failover netwatch di bawah
---------------------------------------------------------------------------------------------------
FAILOVER NETWATCH
	- untuk melakukan config netwhatch kita harus hapus semua config routelist untuk recursive ISP1 dan ISP2 (biar fresh config)
	- netwatch ini adalah alternative dari recursive di atas hanya lebioh cepat dalam perpindahanya sesuai waktu yang kita tentukan
	- buat Routes untuk ISP1 dan ISP2:
		IP > Routes > add > tab general 
			Dst. Address: 0.0.0.0/0 
			Gateway: Gateway ISP1 		// IP > DHCP client > dblclk ISP1 > tab status gataway: copas 
			Check gateway: ping
			Distance: 1 				// 1 untuk keperluan cek
			scoop: 30 					// default
			target scoop: 10        	// default
			comment: ISP 1 (UTAMA) > apply Ok
		IP > Routes > add > tab general 
			Dst. Address: 0.0.0.0/0 
			Gateway: Gateway ISP2 		// ISP2
			Check gateway: ping
			Distance: 1 				// 2 
			scoop: 30 					// default
			target scoop: 10        	// default
			comment: ISP 2 (BACKUP) > apply Ok
	----------------------------
 	- buat recursive buat ISP1 dan ISP2
 		IP > Routes > add > tab general 
			Dst. Address: 1.1.1.1 
			Gateway: Gateway ISP1 		// dari ISP1 
			Check gateway: kosongkan 	// yg terpenting ini jangan di kasih ping alias kosongkan
			Distance: 1 				// 
			scoop: 30 					// default
			target scoop: 10        	// default
			comment: cek ke ISP1 > apply Ok
		IP > Routes > add > tab general 
			Dst. Address: 8.8.8.8 
			Gateway: Gateway ISP2 		// 
			Check gateway: kosongkan
			Distance: 1 				// 
			scoop: 30 					// default
			target scoop: 10        	// default (beda dengan di atas)
			comment: cek ke ISP2  > apply Ok
	----------------------------
	- agar recursive masuk ke sistem netwach untuk ISP1 dan ISP2
		TOOLS > netwatch > add > 
			tab Host >
				host: 1.1.1.1 				// ke cek ISP1
				interval: 00.01.50			// tiap 1,5 detik ping ke 1111, delay ini yang menentukan berapa lama interval cek nya 
				Timeout:1000 				// kalau saya sih 5000
			tab down > tulis script ini:
				/ip route disable [find comment="ISP 1 (UTAMA)"] 
			tab Up:
				/ip route enable [find comment="ISP 1 (UTAMA)"] 
			comment: failover ISP1
		TOOLS > netwatch > add > 
			tab Host >
				host: 8.8.8.8				
				interval: 00.01.50	
				Timeout:1000 						
			tab down > tulis script ini:
				/ip route disable [find comment="ISP 2 (BACKUP)"] 
			tab Up:
				/ip route enable [find comment="ISP 2 (BACKUP)"] 
			comment: failover ISP2
	-----------------------------
	TEST FAILOVER2
		lakukan pemutusan ke kabel modem (jangan yang di ether1) maka akan terjadi rekursive (pindah jalur) sekitar 26 detik
		pada list netwatch akan tejadi down dan up berpinadah jalur
---------------------------------------------------------------------------------------------------
SPEED TEST KE SATU ISP SAJA
	- menandai speedtest
	IP > firewall > 
		tab layer7 protocol > add
			name: SpeedTest
			regexp: 

				^.+(speedtest-+[a-z0-9.]+[a-z]+.net.id|nflxvideo.net|ooklaserver.net|speedtestcustom.com|speedtest.net|fast.com|speedtest.+[a-z]+.id|.speedtest.|openspeedtest.com).*$ 

		tab address list > add > 	
			IP-LOCAL-CLIENT: 10/20/30/1/24 // nama misalnya itu: masukkan semua IP local
			IP-LOCAL-CLIENT: 192.10.10.10 	// dengan nama yang sama masukkan juga Ip-Ip isp
			IP-LOCAL-CLIENT: 192.20.20.20
		tab mangle > add > 
			general 
				chain: prerouting
			Advance
				src. address list: 
				dst. address list : (!) > IP-LOCAL-CLIENT
				layer7 Protocol: SpeedTest
			action: add dst to address list
				Address list: SpeedTest-List
				TimeOut: 01:00:00
				Apply Ok
			comment: SpeedTest
		tab mangle > add > 
			general 
				chain: prerouting
			Advance
				src. address list: IP-LOCAL-CLIENT
				dst. address list: SpeedTest-List
			action
				action: markrouting
				new routing mark: Lewat-ISP-2
				passtrought: no
				apply OK

			???????????????? belum selesai menit ke 6 speed test failoffer bilhanet youtube


---------------------------------------------------------------------------------------------------
????????????????

		Mangle/Raw Content SpeedTest
	
			speedtest.net
			speedest.
			speedtest-
			.speedtest.
			ooklaserver.net
			nflxvideo.net
			speedtestcustom.com
			speedtestcustom.
			speedtest.cbn.id
			fast.com
			speedcheck.org
			speedof.me
			openspeedtest.com
????????????????
---------------------------------------------------------------------------------------------------




*/
