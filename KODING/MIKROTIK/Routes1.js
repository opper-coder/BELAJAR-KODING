  
POLICY BASED ROUTE DENGAN ROUTE RULES
routing ISP ke ETHER tertentu


- topologi
	ether1= 192.168.1.1
	ether2= 192.168.1.1
	ether3= 192.168.100.1/24 LAN1
	ether4= 192.168.200.1/24 LAN2 
- jalur
ISP1 -> ether1
ISP2 -> ether2
---------------------------------------------------------
DARI CHAT GPT MENGGUNAKAN  MANGLE

/ip address
add address=192.168.100.1/24 interface=ether3

/ip firewall nat
add chain=srcnat src-address=192.168.100.0/24 out-interface=ether1 action=masquerade // nat ip masuk keluar

/ip firewall mangle
add chain=prerouting src-address=192.168.100.0/24 action=mark-routing new-routing-mark=to-ISP1 passthrough=yes // ip masuk

/ip route
add dst-address=0.0.0.0/0 gateway=<gateway-ISP1> routing-mark=to-ISP1 // ip keluar

---------------------------------------------------------
DARI CITRAWEB MENGGUNAKAN ROUTE RULE

- basic config
- sampai di NAT=masquerade kasih masing-masing ISP
- route intinya disini dua rule ini saja:
	/ip route rule
		+src-address=<gateway LAN1(ether3)> dst-address=<gateway LAN1(ether4)> action=lookup table="main" // komunikasi lokal jangan lupa taruh di paling atas
		+src-address=<gateway LAN2(ether4)> dst-address=<gateway LAN2(ether3)> action=lookup table="main" 
		+src-address=<gateway LAN1(ether3)> action=lookup table="to-ISP1" tandai pengguna untuk ISP1
		+src-address=<gateway LAN2(ether4)> action=lookup table="to-ISP2" 
	/ip route routes
		+dst=0.0.0.0/0 gateway=<ISP1%ether1> mark-conn="to-ISP1"
		+dst=0.0.0.0/0 gateway=<ISP2%ether2> mark-conn="to-ISP2"
		+dst=0.0.0.0/0 gateway=<ISP1%ether1> // tanpa routing mark untuk cek intenet local saja

---------------------------------------------------------
