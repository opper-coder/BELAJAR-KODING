-----------------------------------------------------------
THE DUDE CLOUD
Monitoring Jaringan Dengan DUDE On Cloud - MIKROTIK TUTORIAL palylist 14 the dude

kita akan simulasikan the dude dengan 
	topology: 
		CHR(dude on cloud) -> CCR(router gateway local) -> haplite(device clien CCR)
	bagaimana CHR memonitoring server CCR secara online, dan bagaimana memantau jaringan LAN nya
	(haplite sebagai clien local CCR)

kelebihan: kita bisa monitoring perangkat walau tidak satu jaringan (public)
	syaratnya dude harus bisa menjangkau perangkat local seperti dibuatkan static routing dan di kasih VPN

kelemahanya: 
	saat koneksi lemah atau terputus antar perangkat maka akan di deteksi sebagai down

solusi: 
	kita harus buatkan notifikasi tiap server ke telegram sebagai parameter awal deteksi

-----------------------------------------------------------
Persiapan

1. kita harus punya CHR cloud di VPS (memiliki IP Public)
2. install the dude di CHR
3. aktifkan the dude server
4. buatkan VPN untuk CCR (beserta secret)
5. buatkan VPN untuk CCR LAN (beserta secret)
6. routing dari CHR ke 2 VPN
7. aktifkan dude clien di CCR 
8. routing CCR ke LAN 

9. buka dude client 
10. masukkan perangkat untuk di monitoring di dude client

-----------------------------------------------------------
enable
	dude > setting > enable: true > 
-----------------------------------------------------------
buatkan koneksi VPN DI CHR untuk Perangkat 
	- VPN untuk CCR
		// enable VPN
		PPP > tombol L2TP server > 
			tab interface
				enable:true
				use IPsec: yes
				IPSec Scret: rahasia
		// buatkan secret (tiap secret punya local dan remot IP)
			tab secret > add
				name: ccr-gateway
				pass: ccr-gateway123
				service: l2tp
				profile: default-encryption
				local address: 10.1.1.1
				remote adress: 10.1.1.2
				disarankan jangan gunakan segmen yang sudah di gunakan di local, karena ini terowongan 2+ LAN
		// VPN CCR LAN(L2TP Server Binding)
		// gunanya saat mau akses di bawahnya tinggal gunakan 1 VPN ini saja meskipun di bawahnya banyak
			tab interface > add > [pilih l2tp server binding] 
				name: ccr-gateway-A
				user: ccr-gateway (samakan dengan secret CCR gateway, )
dial/connect CCR ke CHR
	- winbox CCR 
	 	ppp > add > l2tp Client > 
			tab dial Out 
				connect to: IP public CHR nya
				user: ccr-gateway (konfig scret tadi) 
				pass: ccr-gateway123
				IPsec: rahasia
				apply ok 
				tunggu status flag R
			- jika sudah R maka sekarang CHR sudah memiliki koneksi dengan CCR via VPN (mirip di tancep langsung direct)
			- cek di IP > address > lihat kita dapatkan koneksi CCR di kasih IP 10.1.1.2 dari 10.1.1.2 sesuai yang di kasih di VPN tadi 
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
			user: admin
			pass: pasmikro
			routerOS: true
			next
				klik discover
				maka muncul banyak layanan monitoring yang bisa di buat
				hapus semua sisakan "ping" saja
			dblclk pada ping 
				ubah parameter
					interval: 3 
					timeout: 3
					count: 3
				kalau di kecilin semua jadi responsif tapi bandwidth nya banyak 
				apply ok dah tampil
			kalau mau ubah tampilan silahkan ubah klik kanan appearance 
-----------------------------------------------------------
ROUTING KE CCR LAN
pada CCR pasti memiliki LAN dibawahnya dengan IP segmen 172.10.10.1/24
agar LAN di CCR juga bisa di monitoring semua, maka bnuatkan routing ke VPN Server Binding tadi 
ini dilakukan di CHR:
	tambahkan haplite sebagai perangkat local di LAN CCR  
		winbox CCR > // cek IP LAN di CCR
			IP > address > ether: 7 Address: 192.168.50.0/24 
			dan distribusikan dalam bentuk HOTSPOT
			buat pool 100-254 = sekitar 254 anggota 
			untuk 2-49 biarkan jadi static = 50 titik  
		nanti di perangkat router AP buatkan IP static, dan nyalakan snmp kalau ada, atau remote management 
		winbox CHR
			IP > routes > add
				dst: 192.168.50.0/24 
				gateway: ccr-gateway-A (ini perlunya di atas tadi dibuatkan interface l2tp server binding)
				apply ok sampai reachable
		winbox haplite (sekarang kita mau ambil IP haplite untuk di monitoring)
			IP > dhcp client > 192.168.50.7 (misal kita dapat alokasi ini) 
			// tapi jika setting pakai static routing maka cek IP nya kayaknya seperti ini
			IP > routes > dblclk IP pada ether pool client > tab general > prev.source: disinilah IP perangkat ini 
			// misal hasilnya: 192.168.50.11
			// gunakan di THE DUDE untuk bisa di monitoring
-----------------------------------------------------------
	dude client 
		kini haplite sudah punya static routing maka sudah bisa di jangkau oleh THE DUDE
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



