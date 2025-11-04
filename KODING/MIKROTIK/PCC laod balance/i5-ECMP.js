ECMP
-------------------------------------------------
DEFINISI
loadbalance ECMP (Equal Cost Multy Path)
- membagi bandwidth secara seimbang di layer 3 (memainkan IP)
- sederhana mirip basic config
- bedanya hanya:
	- DHCP client masing-masing ISP
	- NAT masquerade masing-masing ISP 
	- Pengaturan Routes Untuk pembagian dan ratio
-------------------------------------------------
Untuk memulai maka buka jendela berikut
	1. Interface
	2. DHCP client
	3. mangle
	4. routes
-------------------------------------------------
1. Namakan ether sesuai ISP langsung di interface tanpa Bridge di Eth2 dst (ether1-SERVER untuk LAN)
2. DHCP Client pada masing masing ISP (Default route=no, akan di buatkan di routes)
3. DNS 8.8.8.8, 1.1.1., allow remote request=yes
4. NAT masquerade pada masing-masing DHCP Client (ISP)
-------------------------------------------------
ROUTE (inti ECMP, ratio) v6
    dst-address=0.0.0.0/0 gateway=<gateway-ISP>  distance=1 (add-arrow-down-gateway=<ISP2 - 3 dst>) comment="default route ECMP" 
-------------------------------------------------
ROUTE (inti ECMP, ratio) v7
    dst-address=0.0.0.0/0 gateway=<gateway-ISP1>  distance=1 comment="default route ECMP" 
    dst-address=0.0.0.0/0 gateway=<gateway-ISP2>  distance=1 comment="default route ECMP" 
    dst-address=0.0.0.0/0 gateway=<gateway-ISP3 dst>  distance=1 comment="default route ECMP" 
-------------------------------------------------
ECMP  
    pada V6
    - anda tinggal add dengan "panah bawah" gateway-gateway sesuai jumlah ratio. 40: 20: 10 = 4:2:1
    - contoh 4:2:1
        192.168.3.1  			    -> ISP1 
        192.168.3.1                 -> ISP1 
        192.168.3.1  			    -> ISP1 
        192.168.3.1  			    -> ISP1 
        192.168.1.1%bridge2-ISP2  	-> ISP2
        192.168.1.1%bridge2-ISP2  	-> ISP2
        192.168.1.1%bridge3-ISP3  	-> ISP3
    - pada V7 
        Tambahkan jumlah default-route dengan jumlah stream-ratio 
-------------------------------------------------
SESSION ISP
    sampai disini sudah ECMP, 
    tapi agar setiap aplikasi harus keluar dan masuk pada satu ISP yang sama, 
    maka perlu di buatkan routing-mangle menghindari session breaking,

	mangle (mangle chain input output untuk tiap per ISP)
		chain=input in-interface=dari-ISP1 action=mark-connection new-mark="ISP1-Conn" pastrhough=true (tips: copy per ISP)
		chain=output connection-Mark=ISP1-Conn action=mark-routing new-mark="ISP1-routing" pastrhough=false (tips: copy per ISP)
	routes (buat per ISP)
		dst-adress=0.0.0.0/0 gateway=<IP-ISP1 (boleh pakai%)> routing-mark=ISP1-routing (tips: copy per ISP)
-------------------------------------------------
FAILOVER
    pada semua route yang di buat untuk "mangle session"(role route yang ada routing mark: ISP-routing nya)  
	check-gateway=ping 
-------------------------------------------------
TEST
	- buka interface
	- torch arahkan ke LAN > start 
	- buka fast.com > hasilnya akumulasi > jika ingin yg sebenarnya maka config 1 ISP saja MAX: 1 
-------------------------------------------------
DHCP Server 
Ether1 dengan IP 200.200.200.1/29 (7 Client)
=================================================================================




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
	- dhcp client semua ISP, default route:no
	- dhcp server /28 (15org) pemilik rumah 
	- dhcp server /29 (7org) pemilik loadb
-------------------
DNS
	- 8.8.8.8, 8.8.4.4
-------------------
NAT masquerade
	- lakukan ke semua ISP
-------------------
ROUTE (inti ECMP, ratio)
	- satu dafault route 0000/0, lebih satu gateway dalam role default route ini
	- stream ratio, atur jumlah gateway
	- ISP % (jk IP satu segmen)
-------------------
MANGLE session ISP
	- routing mark session di mangle
-------------------
FAILOVER
	- check: ping semua route mark-con ISP
=================================================================================
TOPOLOGI
menggunakan rb750 gr3
bikin BRIDGE dan porting dulu boleh, 
ISP fix tidak boleh pindah2 port. jika pindah maka ubah pada role routes gateway, dan ratio nya, 
kecuali jika gateway satu segment semua, maka tinggal ubah pada ratio saja
- ether1(bridge1-ISP1)		= ISP1 		192.168.3.1 	beda segmen
- ether2(bridge2-ISP2) 		= ISP2 		192.168.1.1 	satu segmen
- ether3(bridge3-ISP3) 		= ISP3 		192.168.1.1 	satu segmen
- ether5(bridge5-LAN boleh) 	= LAN 		192.168.100.1 	(DHCP server)
- ratio				= ISP1: 40mb, ISP2: 20mb, ISP3: 10mb
				= 40: 20: 10 = 4:2:1
-------------------------------------------------
IP
	- dhcp client bridge1-ISP1, bound  add default route: no (uniq biasanya yes)
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
ringkasnya ECMP itu mirip basic config: yaitu 
	- dhcp client, dhcp server
	- dns, nat masquerade masing2
	- bedanya pada ECMP default route satu, dengan gateway lebih dari satu
	- tambahan bisa ratio dan mangle session
ip > routes 
	default route gateway
		- saat dhcp client dengan <default route: yes> 
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
		- maka akan dibuatkan default routes gateway baru dengan flag AS 
		- tips: beri komentar "default route ECMP"
	ECMP Ratio
		- ubah role ECMP jika terjadi perubahan ratio misal kena FUP atau tambah ISP, upgrade kecepatan ISP dll
		- anda tinggal add dengan "panah bawah" gateway-gateway sesuai jumlah ratio. 40: 20: 10 = 4:2:1
		- contoh 4:2:1
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
	- check gateway: ping -> pada semua route yang di buat untuk "mangle session"(role route yang ada routing mark: ISP nya)  
-------------------------------------------------
TEST
	- buka interface
	- torch arahkan ke LAN > start 
	- buka fast.com > hasilnya akumulasi > jika ingin yg sebenarnya maka config 1 ISP saja MAX: 1 

============================================================
TIPS
Untuk melakukan  load balance pada ether berikutnya 3 dan 4

maka buka jendela
	1. Interface
	2. DHCP client
	3. mangle
	4. routes

aktifkan semua role terkait dengan ether bersangkutan secara berurutan diatas
-----------------------------------------------------------
Untuk mengatur kecepatan ratio
	1. speedtest pada masing2 ISP secara mandiri
	2. temukan ratio 
	3. buka routes > tambahkan ratio pada default routes
-----------------------------------------------------------
