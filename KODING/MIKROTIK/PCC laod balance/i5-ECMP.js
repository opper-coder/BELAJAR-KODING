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
	- ether = bridge
	- ISP 	= bridge
	- IP 	= bridge
-------------------
IP
	- bound semua ISP
	- jika IP sama pakai % di route nantinya
-------------------
DNS
	- 8.8.8.8, 8.8.4.4
-------------------
NAT masquerade
	- semua ISP
-------------------
ROUTE
	- dafault 0000/0
	- stream ratio
	- routing mark session
	- ISP % (jk IP sama)
-------------------
MANGLE session ISP
-------------------
FAILOVER
	- ping semua ISP
=================================================================================
TOPOLOGI
menggunakan rb750 gr3
- ether1(bridge boleh)	= ISP1 		192.168.3.1 	beda
- ether2(bridge boleh) 	= ISP2 		192.168.1.1 	sama
- ether3(bridge boleh) 	= ISP3 		192.168.1.1 	sama
- ether5(bridge boleh) 	= LAN 		192.168.100.1 	(DHCP server)
- ratio		= ISP1: 40mb, ISP2: 20mb, ISP3: 10mb
			= 40: 20: 10 = 4:2:1
-------------------------------------------------
IP
	- dhcp client ether1, bound
	- dhcp client ether2, bound
	- dhcp client ether3, bound
	- jika ip sama maka lakukan routing % dibawah
	- jika ip sama maka add default route: no (agar bisa modifikasi manual % pada route)
	- buat LAN IP 192.168.100.1/28 
----
uji IP
	- terminal:> ping masing2 ip pada topologi di atas, ip yang sama biasanya error
-------------------------------------------------
DNS
	8.8.8.8 dan 8.8.4.4 atau tambahkan ip gateway masing2 ISP juga boleh, allow remote: true
-------------------------------------------------
NAT masquerade
	(PENTING ECMP) pada masing2 out interface WAN: ISP1, ISP2, ISP3 dst
-------------------------------------------------
DEFAULT ROUTE
ip > routes 
	default route gateway
		- pada Load balance ECMP(semua LB) semua ISP harus di DHCP client dahulu 
		- dan pastikan <default route: yes> maka dibuatkan default routes otomatis pada semua DHCP client
		  dan langsung jadi failover 
	route ECMP satu segment
		- namun pada ISP "satu segment", <default route: no> agar bisa di buat routes secara manual dibawah: 
		- add 
			dst address	: 0000/0
			gateway		: 192.168.1.1%bridge2-ISP2  -> <ip><%><interface>
			distance 	: 1 (1 ISP1, 2 ISP2, 3 ISP3)
		- tambahkan lagi gateway ISP3 dengan panah bawah 
		- apply ok
	ECMP Ratio
		- pada routelist pilih yang ada gateway1, gateway2, gateway3
		- kopas dengan panah bawah gateway-gateway sesuai jumlah ratio
-------------------------------------------------
MANGLE session ISP
sampai disini sudah ecmp, tapi agar setiap aplikasi harus keluar dan masuk pada satu ISP yang sama maka perlu di tandai
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
		copy: untuk ISP2, ISP3
-------------------------------------------------
FAILOVER
	pada route list, pilih IP gateway yang ada routing mark ISP nya(dbl click) lihat di field tabel  
	- check gateway: ping (pilih ping)
-------------------------------------------------
TEST
	- buka interface
	- torch arahkan ke LAN > start 
	- buka fast.com > hasilnya akumulasi > jika ingin yg sebenarnya maka config 1 ISP saja MAX: 1 
-------------------------------------------------


