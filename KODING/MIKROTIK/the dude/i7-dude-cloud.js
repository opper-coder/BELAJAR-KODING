-----------------------------------------------------------
THE DUDE CLOUD
Monitoring Jaringan Dengan DUDE On Cloud - MIKROTIK TUTORIAL palylist 14 the dude

kita akan simulasikan the dude dengan 
	topology: CHR(monitoring cloud) -> CCR(router gateway local) -> haplite(child device)
	bagaimana CHR memonitoring 2 perangkat secara online CCR sebagai gateway sedang haplite sebagai clien local CCR

yang dilakukan:
	1. buat monitoring dude cloud di vps
	2. sambungkan VPN ke perangkat CCR gateway
	3. buatkan static routing ke haplite dan kasih VPN juga 

kelebihan: kita bisa monitoring perangkat walau tidak satu jaringan (public)
	syaratnya dude harus bisa menjangkau perangkat local seperti dibuatkan static routing dan di kasih VPN

kelemahanya: 
	saat koneksi lemah atau terputus antar perangkat maka akan di deteksi sebagai down

solusi: 
	kita harus buatkan notifikasi tiap server ke telegram sebagai parameter awal deteksi

-----------------------------------------------------------
Persiapan

1. kita harus punya CHR cloud di VPS  
2. install the dude di CHR
3. aktifkan the dude
4. buatkan VPN dari CHR untuk perangkat2 yang di monitoring
5. sambungkan VPN ke masing2 perangkat
6. buka dude client 
7. masukkan perangkat untuk di monitoring di dude client

-----------------------------------------------------------
buatkan koneksi VPN DI CHR untuk Perangkat 
	- VPN untuk CCR
		sidebar winbox > ppp > klik tombol l2tp server > 
			tab interface
				enable:true
				use IPsec: yes
				IPSec Scret: rahasia
			tab secret > add
				name: ccr-gateway
				pass: ccr-gateway123
				service: l2tp
				profile: default-encryption
				local address: 10.1.1.1
				remote adress: 10.1.1.2
				disarankan jangan gunakan segmen yang sudah di gunakan di local
	- VPN untuk router di bawah CCR (membuat interface l2tp server binding)
		tab interface > add > [pilih l2tp server binding] 
			name: ccr-gateway-A
			user: ccr-gateway
5. dial VPN dari CHR ke CCR (Konneksi VPN yang sudah di sediakan)
	- winbox CCR client > sidemenu > ppp > add > l2tp Client > 
			tab dial Out 
				connect to: IP public CHR nya
				user: ccr-gateway (konfig scret tadi) 
				pass: ccr-gateway123
				IPsec: rahasia
				apply ok 
				tunggu status flag R
			- jika sudah R maka sekarang CHR sudah memiliki koneksi dengan CCR via VPN (mirip di tancep langsung direct)
			- cek di IP > address > lihat kita dapatkan koneksi CCR di kasih IP 10.1.1.2 sesuai yang di kasih di VPN tadi 
			- IP 10.1.1.2 ini lah yang akan kita berikan ke the dude yang akan di monitoring nantinya 

-----------------------------------------------------------
dude client
	login dulu dude client, mirip login ke winbox 
		connect to: IP public CHR
		port: isikan portnya 
		username: admin
		pass: passCHR
-----------------------------------------------------------
tambah perangkat
	setelah masuk 
	sidemenu > network maps > add 
		tab general 
			name: network kantor A
		tab background
			globe2 biar kelihatan kayak grid striming 
			tile: true
	maka di sidemenu network map kiri akan muncul satu sheet map baru "network kantor A"
	---
	tambahkan CCR sbg gateway menuju jaringan local
		add device
			address: 10.1.1.2 IP VPN CCR (ip public)
			user
			pass
			routerOS: TRUE
			next
				klik discover
				maka muncul banyak layanan monitoring yang bisa di buat
				hapus semua sisakan "ping" saja
			dblclk pada ping 
				ubah paramaeter
					interval: 3 
					timeout: 3
					count: 3
				kalau di kecilin semua jadi responsif tapi bandwidth nya banyak 
				appply ok dah tampil
			kalau mau ubah tampilan silahkan ubah klik kanan appearance 
	---
	tambahkan haplite sebagai perangkat local di bawah mikrotik CCR  
		winbox CCR > bikin route static pada haplite
			IP > address > 
				(cek ether dan IP yang di gunakan untuk koneksi perangkat dibawahnya)
				ether: 7
				Address: 192.168.50.0/24
				apa bila kita berikan secara DHCP silqahkan cek IP perangkat ini dengan
					IP > dhcp client > di situ ada IP kita. tapi jika setting pakai static routing maka cek IP nya kayaknya seperti ini
				cek IP > routes > dblclk IP pada ether pool client > tab general > prev.source: disinilah IP perangkat ini 
				misal hasilnya: 192.168.50.11
				gunakan untuk dimasukkan ke CHR cloud untuk bisa di monitoring
		winbox CHR
			IP > routes > add
				dst: 192.168.50.0/24	>
				gateway: ccr-gateway-A (ini perlunya di atas tadi dibuatkan interface l2tp server binding)
				apply ok sampai reachable
	---
	dude client 
		kini haplite sudah punya static routing maka sudah bisa di jangkau oleh client
		tambahkan haplite sudah bisa seperti biasa. nah pada hap lite cek berapa IP static yang di gunakan koneksi ke CCR-gateway
			add device
				address:  192.168.50.11
				name: admin
				pass: ""
				routerOS: true
				next
					add probing
						prob: ping
						interval: default
						timeout:default
						count: default 
						finish > akan muncul perangkat 
				tinggal ubah tampilan > klik kanan appearance 
			add link
				device : ccr-gateway (ubah dari mana sudut pandangnya)
				mastering type : routerOS
				interface: pilih ether3 (sesuai ether untuk jaringan local tadi)
				type: gigabit ether 
				finish
-----------------------------------------------------------
