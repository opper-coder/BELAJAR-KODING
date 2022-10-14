MODE ROUTER:
-----------------------------------------------------------------------------------------------------------------------
secara garis besar kemampuan router adalah:
1. menangkap intenet
2. mendistribusikan internet yang di miliki
secara lengkap memiliki kemampuan:
	WAN 				: menangkap wifi (internet) dari server 
	WWAN 				: 
	LAN 				: mendistribusikan wifi ke pengguna melui ETHER
	WLAN 				: mendistribusikan wifi ke pengguna melui wifi lagi
	DHCP Server 		:
	baca MAC 			:
	remote 				: biasanya satu sgmen dan harus eneble kan mode remote
-----------------------------------------------------------------------------------------------------------------------
MODE:
- mode router
	adalah mode default pabrik: adalah mode yang memasukan internet via ether WAN dan keluar via LAN dg IP yng berbeda
	- dari mikrotik dikirim iinternet dengan 192.168.88.1
	- di router di terima 88.1 di port WAN > pada dhcp server terlihat ON > 
	   sehingga di kirim ke laptop dengan IP 192.168.0.1 melalui ether LAN
	- beda segmen
	- mode ini bisa membaca di router > saat di lihat di dhcp client router perangkat terlihat
	- di winbox tidak bisa lihat erangkat> melainkan router saja
	
- ROUTER			: 			
- ACCESS POINT		: 
- WISP 				: 		
- CLIENT			: tangkap dari wifi. distrib ke kabel LAN(wifi, dhcp: off) tidak semua router support client
- UNIVERSAL REPEATER: exstend saja (SSID ikut sumber, remote g bisa)
- BRIDGE			: internet masuk di LAN(bukan WAN mirip switch yang memiliki wifi)di sebar lewat LAN(kehilangan WAN dan WWAN)remote bisa

tabel perbandingan:
-----------------------------------------------------------------------------------------------------------------------
mode					WAN			WWAN		LAN 		WLAN 		DHCP server 		baca MAC (di router dan mikrotik)		remote 		SSID
ROUTER 					true 		-			true 		true 		true				true 									true		
ACCESS POINT 			true 		- 			true 		true 		-					-										-			
WISP 					-			true		true 		true		true				true									true	
CLIENT					-			true		true 		-			-					-(tp device trkonek ada di mikro)		true		
UNIVERSAL REPEATER		-			true		true 		true 		- 					- 										-			-
BRIDGE					-			- 			true 		true		-(bisa di ON kan)	-										true 		-
-----------------------------------------------------------------------------------------------------------------------
