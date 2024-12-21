BASIC CONFIG
-----------------------------------------------------------------------------------
MIKROTIK-A
topologi
MikroTik A:
    ISP1, ISP2, ISP3
    vlan1 (10), vlan2 (20), vlan3 (30)
MikroTik B:
    ISP4, ISP5
    vlan4 (40), vlan5 (50)
MikroTik C:
    ISP6, ISP7
    Load balancing 7 ISP dengan ECMP
    Distribusi ke lokal (192.168.100.0/24) melalui ether10
-----------------------------------------------------------------------------------
1. Reset config MikroTik A, B :
	a. system user grup full
	b. system identity
	c. system service
	d. IP address
		untuk vlan silahkan lihat standard di file 
		vlan1-kayatri 	192.168.168.10/29 : (PENTING: langsung kasih comment nama vlan)
		vlan2-balang 	192.168.168.20/29
		vlan3-msroji1 	192.168.168.30/29
		brige4-RMH 	192.168.5.1/28
	e. tool RoMON: pasmikromon
	f. loginpage: edit HTML pada script input diatas password=username, matikan kolom password UI 
2. Bridge: 
	- bridge1-ISP1 port: ether1
	- bridge2-ISP2 port: ether2
	- bridge3-ISP3 port: ether3
	- bridge4-RMH  port: ether4
	- bridge5-DISP port: ether5
3. DHCP Client
	- semua bridge-ISP > bound
4. DNS
	- 8.8.8.8, 8.8.4.4, (ip gateway ISP jg boleh) allow remote ok
5. NAT masquerade 
	- chain=srcnat out-interface=WAN action=masquerade
	- (semua bridge-ISP)
-----------------------------------------------------------------------------------
6. VLAN
	/interface vlan
	add name=vlan1 interface=bridge5-DIST vlan-id=10
	add name=vlan2 interface=bridge5-DIST vlan-id=20
	add name=vlan3 interface=bridge5-DIST vlan-id=30
-----------------------------------------------------------------------------------
7. mangle
	/ip firewall mangle add chain=prerouting in-interface=vlan1 action=mark-routing new-routing-mark=to-isp1
	/ip firewall mangle add chain=prerouting in-interface=vlan2 action=mark-routing new-routing-mark=to-isp2
	/ip firewall mangle add chain=prerouting in-interface=vlan3 action=mark-routing new-routing-mark=to-isp3
-----------------------------------------------------------------------------------
8. routes
	/ip route add dst-address=0.0.0.0/0 gateway=<gateway-isp1> distance=1 routing-mark=to-isp1 
	/ip route add dst-address=0.0.0.0/0 gateway=<gateway-isp2> distance=1 routing-mark=to-isp2
	/ip route add dst-address=0.0.0.0/0 gateway=<gateway-isp3> distance=1 routing-mark=to-isp3
	pakai (%) jika sama
-----------------------------------------------------------------------------------
9. DHCP server
	- masing masing vlan
-----------------------------------------------------------------------------------
10. HOTSPOT
	- Bridge4-RMH
	- link.net
	- profil 1000k/2500k keepalive dll matikan
	- profil hotspot, login HTTPCHAP, HTTP, MACcookie aja
	- server hotspot
	- keepalive 10 detik
	- user: Permen
-----------------------------------------------------------------------------------	
11. queue
	- buat simple queue untuk bridgeHOTSPOT 2M/5M priority 3, pindah urutan teratas
-----------------------------------------------------------------------------------

MIKROTIK-B

VLAN TRUNK
	- buat vlan yang sama dengan TAG pada ETHER1(TRUNC/UNTAG) 
		vlan1, vlan2, vlan3 di ether1
	- bikin bridge untuk masing2 vlan
		bridge1, bridge2, bridge3, porting masing masing bridge
		vlan1, vlan2, vlan3 
	- bridge lalu porting ether mana yang mau di jadikan tag 
-----------------------------------------------------------------------------------
VLAN UNTAG
	- tag 


























	



	
