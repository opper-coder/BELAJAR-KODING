MODE ROUTER:
-----------------------------------------------------------------------------------------------------------------------
secara garis besar kemampuan router adalah:
1. menangkap intenet
2. mendistribusikan internet yang di miliki
secara lengkap memiliki kemampuan:
	WAN 			: menangkap(internet) dari server via "kabel" di port WAN(tdk semua router ada)
	WWAN 			: menangkap(internet) dari server via "wireless" 
	LAN 			: mendistribusikan(internet) pengguna via port LAN
	WLAN 			: mendistribusikan(internet) pengguna via wireless
	DHCP Server 		: kemapuan mendistribusikan dengan generate IP, sehingga bisa membaca MAC clientnya di router
	remote 			: biasanya satu segmen dan harus eneble kan mode remote
	baca MAC di winbox	: baca perangakat yang terhubung pada client apakah roter atau device 
-----------------------------------------------------------------------------------------------------------------------
MODE:
- mode router
  adalah mode default pabrik: masuk keluar via PORT
  memasukan internet via PORT-WAN ke PORT-LAN, dg DHCP server ON. shg keluar via LAN dg IP yang berbeda
	- dari mikrotik dikirim internet dengan 192.168.88.1
	- di router di terima 88.1 di port WAN > pada dhcp server terlihat ON > 
	  sehingga di kirim ke laptop dengan IP 192.168.0.1 melalui ether LAN (sudah beda segmen)
	- mode ini bisa membaca di router > saat di lihat di dhcp client router perangkat terlihat
	- di winbox tidak bisa lihat perangkat> melainkan router saja
- ROUTER		: keluar masuk ETHER to ETHER. dhcp server(beda segmen)(WAN masih support jg)
- ACCESS POINT		: sama tapi DHCP: OFF
- WISP 			: keluar masuk WIRELESS to WIRELESS. (mirip router) 
- CLIENT		: tangkap dari Wireless. distrib ke kabel LAN(wifi, dhcp: off) tidak semua router support client
- UNIVERSAL REPEATER	: mode perpanjang saja (SSID ikut sumber, remote g bisa)
- BRIDGE		: internet masuk di LAN(bukan WAN mirip switch yang memiliki wifi)di sebar lewat LAN(kehilangan WAN dan WWAN)remote bisa
	- mode bridge bisa di akali(jika tdk support): ganti IP satu segmen dengan mikrotik(sumber), DHCP server di matikan
tabel perbandingan:
-----------------------------------------------------------------------------------------------------------------------------------------------------------
mode			WAN		WWAN		LAN 		WLAN 		DHCP server 	baca MAC (di router dan mikrotik)	remote 		SSID		WINBOX dhcp server > leases
ROUTER 			true 		-		true 		true 		true		true 					true		true		router 
ACCESS POINT 		true 		- 		true 		true 		-		-					-				router, client
WISP 			-		true		true 		true		true		true					true		true 		router
CLIENT			-		true		true 		-		-		-(tp device trkonek ada di mikro)	true		true		client
UNIVERSAL REPEATER	-		true		true 		true 		- 		- 					-		- 		router, client
BRIDGE			-		- 		true 		true		-(bisa di ON kan)-					true 		-		client
-----------------------------------------------------------------------------------------------------------------------------------------------------------
