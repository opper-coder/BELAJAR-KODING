ISP-LV1-Rumah
-----------------------------------------------------------------------------------
TOPOLOGI
	- maksimal 2 ISP @50 mbps
	- distribusi pemilik hotspot/dhcp/pppoe
	- queue pemilik priority
	- vlan1, vlan2, dhcpServ, bridgeDIST
	- mangle vlan 
	- perangkat: RB951UI-2HnD, RB951UI-2nD, sama beda memory, max 100 mbps 

BASIC CONFIG
------------------------------------------------------------------------------
1. Reset config:
	a. system user grup=full
	b. system identity = ISP-Armed
	c. ip service=winbox
	d. tool RoMON: pasmikromon
2. Bridge: 
	- bridge1-ISP1 port=ether1
	- bridge2-ISP2 port=ether2 
	- bridge3-ISP3 port=ether3 
	- bridge4-LAN  port=ether4
	- bridge5-DIST port=ether5
3. vlan: 	
	/interface vlan
		add name=vlan10-QINQ interface=bridge5-DIST vlan-id=10 10.10.10.1/29
			add name=vlan1-kayatri interface=bridge5-DIST vlan-id=100 10.10.10.1/29
			add name=vlan2-balang  interface=bridge5-DIST vlan-id=101 10.10.10.10/29
			add name=vlan3-msroji1 interface=bridge5-DIST vlan-id=102 10.10.10.20/29
4. DNS:  - 8.8.8.8, 8.8.4.4, 1.1.1.1 allow remote=y
5. NAT: 
	- chain: srcnat, out: bridge1-ISP1, act: masquerade // masing2 bridge1-ISP
	- chain: srcnat, out: bridge1-ISP2, act: masquerade
	- chain: srcnat, out: bridge1-ISP3, act: masquerade
6. IP:	
	- lihat topologi untuk dhcpServer, ISP dan RUMAH  
------------------------------------------------------------------------------
7. dhcp client:
	- bridge-ISP1,2,3
8. dhcp server:
	- vlan1,2,3
9.hotspot
	- bridge4-LAN > user=RUMAH > mac=5 orang > profil 3mb/s > simple queue 3mb/s pcq
------------------------------------------------------------------------------
9. routes 
	/routes rules
		src-address=ip-bridge4-LAN/28 action=lookup table="ISP-A"
		src-address=ip-vlan1/28 action=lookup table="ISP-A"
		src-address=ip-vlan2/28 action=lookup table="ISP-B"
		src-address=ip-vlan3/28 action=lookup table="ISP-C"
	/routes
		dst=0000/0 gateway="bridge4-LAN" routing-mark=ISP-A
		dst=0000/0 gateway="ip ISP1" routing-mark=ISP-A
		dst=0000/0 gateway="ip ISP2" routing-mark=ISP-B
		dst=0000/0 gateway="ip ISP3" routing-mark=ISP-C
10. (opt) routes local supaya antar koneksi dalam router ini bisa terhubung (bypass local)
	/routes rules
		src-address=ip-bridgeLAN/28 dst-address="ip lan tujuan/24 buatkan semua koneksi jika mau" action=lookup table="main"
		src-address=ip-vlan1/28 dst-address="ip lan tujuan/24 buatkan semua koneksi jika mau" action=lookup table="main"
		src-address=ip-vlan2/28 dst-address="ip lan tujuan/24 buatkan semua koneksi jika mau" action=lookup table="main"
		src-address=ip-vlan3/28 dst-address="ip lan tujuan/24 buatkan semua koneksi jika mau" action=lookup table="main"
	lalu letakkan rule local ini paling atas
	/routes
		dst=0000/0 gateway="ip ISP1" // tambahkan satu gateway isp cek local
------------------------------------------------------------------------------

