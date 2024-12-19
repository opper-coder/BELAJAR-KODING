BASIC CONFIG
------------------------------------------------------------------------------
1. Reset config
	a. system user grup full
	b. system identity
	c. system service
	d. IP address
		vlan1-kayatri 	192.168.168.10/29
		vlan2-balang 	192.168.168.11/29
		vlan3-msroji1 	192.168.168.12/29
		brige4-RMH 	192.168.5.1/28
	e. tool RoMON: pasmikromon
	f. loginpage: pada script input diatas password=username, matikan kolom password UI 
2. Bridge: 
	- bridge1-ISP1 port: ether1
	- bridge2-ISP2 port: ether2
	- bridge3-ISP3 port: ether3
	- bridge4-RMH  port: ether4
	- bridge5-DISP port: ether5
3. DHCP Client
	- semua bridge-ISP
4. DNS
	- 8.8.8.8, 8.8.4.4, (ip gateway ISP jg boleh) allow remote ok
5. NAT masquerade 
	- chain: srcnat, out: WAN, act: masquerade
	- semua bridge-ISP
------------------------------------------------------------------------------
6. VLAN
	- vlan1 - 3. di atas
	- bridge5-DISP 
-----------------------------------------------------------------------------------
7. DHCP server
	- masing masing vlan
-----------------------------------------------------------------------------------
8. HOTSPOT
	- Bridge4-RMH
	- link.net
	- profil 1000k/2500k keepalive dll matikan
	- profil hotspot, login HTTPCHAP, HTTP, MACcookie aja
	- server hotspot
	- keepalive 10 detik
	- user: Permen
-----------------------------------------------------------------------------------
10. mangle
	untuk ISP1 keluar sebagi ISP1
	untuk ISP2 keluar sebagi ISP2 dst
-----------------------------------------------------------------------------------
11. queue
	- buat simple queue untuk bridgeHOTSPOT 2M/5M priority 3, pindah urutan teratas
-----------------------------------------------------------------------------------
	
-----------------------------------------------------------------------------------	
