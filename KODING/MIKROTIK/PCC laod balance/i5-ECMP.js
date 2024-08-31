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
	- dhcp client bridge1-ISP1, bound  add default route: yes
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
		- saat dhcp client <default route: yes> maka dibuatkan default routes gateway otomatis dan langsung jadi failover pada semua dhcp client ISP
	route gateway satu segment
		- namun pada ISP "satu segment", <default route: no> agar bisa di buat routes secara manual dibawah: 
		- add 
			dst address	: 0000/0
			gateway		: 192.168.1.1%bridge2-ISP2  -> <ip><%><interface> format penulisan pakai % untuk menandai ether atau bridge yg dipakai ISP
			distance 	: 1 (1 ISP1, 2 ISP2, 3 ISP3)
			copy ISP2, ISP3 dst
		- apply ok
		- maka akan ada role warna biru langit dengan flag S, sedang yang auto flag DS
	ECMP role
		sepertinya saat bikin route gateway barusan sudah di buatkan otomatis role gateway load balance failover(yang ada ISP1, ISP2 dst dengan flag AS)
		namun jika tidak ada maka bikin satu role ini: 
		- add 
			dst address	: 0000/0
			gateway		: 192.168.1.1%bridge2-ISP2  -> <ip><%><interface> format % untuk menandai interface yg dipakai ISP satu segmen
			distance 	: 1 (default)
			tambahkan "panah bawah" IP ISP2, ISP3 dst 
		- apply ok
	ECMP Ratio
		- ubah role ECMP jika terjadi perubahan ratio misal kena FUP atau tambah ISP, upgrade kecepatan ISP dll
		- anda tinggal add dengan "panah bawah" gateway-gateway sesuai jumlah ratio. 40: 20: 10 = 4:2:1
-------------------------------------------------
Ping
	jika routes manual dan auto berhasil dibuat maka ping harus berjalan
	terminal:> ping masing2 ip pada topologi di atas tak terkecuali ini <192.168.1.1%bridge2-ISP2>
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
	pada routelist yang di buat untuk mangle(yang ada routing mark ISP nya)  
	- check gateway: ping (pilih ping) pada semua role route ISP nya
-------------------------------------------------
TEST
	- buka interface
	- torch arahkan ke LAN > start 
	- buka fast.com > hasilnya akumulasi > jika ingin yg sebenarnya maka config 1 ISP saja MAX: 1 
-------------------------------------------------


