ECMP
-------------------------------------------------
DEFINISI
loadbalance ECMP 
- equal cost multy path
- membagi bandwidth secara seimbang di layer 3 (memainkan IP)
- sederhana mirip basic config
- IP segment sama lakukan dengan % 
- jika terjadi perubahan kecepatan, jumlah ISP, FUP, 
  kita hanya memainkan rasio pada satu role route di: 
	- routelist
=================================================================================
TOPOLOGI
	IP, Bridge, port, ratio ISP, DHCP client server
-------------------
IP
	- bound semua ISP
	- jika IP sama pakai <%> di route nantinya
-------------------
DNS
	- 8.8.8.8, 8.8.4.4
-------------------
NAT masquerade
	- lakukan ke semua ISP
-------------------
ROUTE (inti ECMP, ratio)
	- dafault 0000/0
	- stream ratio
	- ISP % (jk IP satu segmen)
	- routing mark session di mangle
-------------------
MANGLE session ISP
-------------------
FAILOVER
	- check ping semua ISP
=================================================================================
TOPOLOGI
menggunakan rb750 gr3
bikin BRIDGE dan porting dulu boleh
- ether1(bridge1-ISP1)		= ISP1 		192.168.3.1 	beda segmen
- ether2(bridge2-ISP2) 		= ISP2 		192.168.1.1 	satu segmen
- ether3(bridge3-ISP3) 		= ISP3 		192.168.1.1 	satu segmen
- ether5(bridge5-LAN boleh) 	= LAN 		192.168.100.1 	(DHCP server)
- ratio				= ISP1: 40mb, ISP2: 20mb, ISP3: 10mb
				= 40: 20: 10 = 4:2:1
-------------------------------------------------
IP
	- dhcp client bridge1-ISP1, bound  add default route: yes (uniq sementara yes, akhirnya no)
	- dhcp client bridge2-ISP2, bound  add default route: no (satu segmen)
	- dhcp client bridge3-ISP3, bound  add default route: no (satu segmen)
	- dhcp server bridge5-LAN dengan IP 192.168.100.1/28
-------------------------------------------------
DNS
	8.8.8.8 dan 8.8.4.4 atau tambahkan ip gateway masing2 ISP juga boleh, allow remote: true
-------------------------------------------------
NAT masquerade
	(PENTING ECMP) copy/duplikat pada masing2 out interface WAN: menuju ISP1, ISP2, ISP3 dst
-------------------------------------------------
DEFAULT ROUTE (inti ECMP)
ip > routes 
	default route gateway
		- saat dhcp client <default route: yes> 
		- maka dibuatkan default routes gateway otomatis dengan flag DAS, dst address: 0000/0
	route gateway satu segment
		- namun jika ada beberapa ISP yang memiliki "IP satu segment", 
		- maka masukkan gateway manual satu-persatu, caranya: 
		- ubah dhcp client <default route: no> untuk semua ISP
		- add 
			dst address	: 0.0.0.0/0
			gateway		: isi ip gateway ISP, tambahkan semua ISP, dengan add "panah bawah" saat menambahkan ISP lagi
				192.168.3.1  			-> uniq segment ISP1 format biasa
				192.168.1.1%bridge2-ISP2  	-> satu segment ISP2 format: <ip><%><interface>
				192.168.1.1%bridge3-ISP3  	-> satu segment ISP3 format: <ip><%><interface>
			distance 	: 1
		- apply ok
		- maka dibuatkan default routes gateway baru dengan flag AS  
	ECMP Ratio
		- ubah role ECMP jika terjadi perubahan ratio misal kena FUP atau tambah ISP, upgrade kecepatan ISP dll
		- anda tinggal add dengan "panah bawah" gateway-gateway sesuai jumlah ratio. 40: 20: 10 = 4:2:1

				192.168.3.1  			-> ISP1 
				192.168.3.1  			-> ISP1 
				192.168.3.1  			-> ISP1 
				192.168.3.1  			-> ISP1 
				192.168.1.1%bridge2-ISP2  	-> ISP2
				192.168.1.1%bridge2-ISP2  	-> ISP2
				192.168.1.1%bridge3-ISP3  	-> ISP3
-------------------------------------------------
MANGLE session ISP
sampai disini sudah ecmp, tapi agar setiap aplikasi harus keluar dan masuk pada satu ISP yang sama maka perlu di tandai dengan mark-conn dan mark-routing
	mangle:
		chain: input
		in interface: menuju ISP1
		action: mark connection
		new mark: "ISP1-Con"
		pastrhough: true
		- buatkan juga copy ISP2, ISP3
		---
		chain: output
		connection Mark: ISP1
		action: mark routing
		new mark: "ISP1-routing"
		pastrhough: false
		- buatkan juga copy ISP2, ISP3
	routes
		IP > Routes > add  
		dst adress: 0.0.0.0/0
		gateway: IP ISP1 (pakai <%> jk satu segment)
		routing mark: "ISP1" 
	copy routes: untuk ISP2, ISP3
-------------------------------------------------
FAILOVER
	- check gateway: ping -> pada semua route yang di buat untuk mangle session(yang ada routing mark ISP nya)  
-------------------------------------------------
TEST
	- buka interface
	- torch arahkan ke LAN > start 
	- buka fast.com > hasilnya akumulasi > jika ingin yg sebenarnya maka config 1 ISP saja MAX: 1 
-------------------------------------------------

