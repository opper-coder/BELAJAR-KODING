periksa loadbalance tplink tlr470t+ 

WAN
1. namai port dan bridge
2. DHCP client
3. IP DNS 8.8.8.8 8.8.4.4 allow remote
6. IP > firewall NAT > masquerade ISP1-2
LAN
4. IP LAN isi 192.168.50.1/24
5. DHCP server > LAN > DNS 2 gateway ISP1-2

LOAD BALLANCE

LAN
mark connection
mark connection
---
LAN
mark routing
mark routing
---
ISP
mark connection
mark connection
---
OUTPUT
mark routing output
mark routing output
---
1. mark connection
	mangle
		- ISP 1
		general > chain: prerouting | in interface: LAN | conn mark: nomark 
		advance > PCC: both address n port | 2 | 0
		action > mark conn | new ISP 1 > apply OK
		- ISP 2 sama kecuali: 
		> PCC: both address n port | 2 | 1
2. mark routing
	mangle
		ISP 1
		general > chain: prerouting | in interface: LAN | conn mark: ISP 1 
		action > mark routing | new ke-ISP 1 | passthrough > apply OK
		ISP 2 sama sesuai ISP
3. mark connection	
	mangle
		ISP 1
		general > chain: prerouting | in interface: ether1-ISP 1 | conn mark: nomark 
		action > mark conn | ISP 1 | passthrough > apply OK
		ISP 2 sama sesuai ISP
4. mark routing output
	mangle
		ISP 1
		general > chain: output | conn mark: ISP 1 
		action > mark routing | ke-ISP 1 | passthrough > apply OK
		ISP 2 sama sesuai ISP
---
ATUR ROUTE
IP > routes > add 
	ISP 1
	Dst. Add: 0000/0 | gateway: copas dhcpclient status gateway | check gateway: ping | distance:1 | routing mark: KE-ISP 1 | apply ok
	ISP 2 sama sesuai ISP
---
Tambah gateway masing2 ISP
IP > routes > add 
	ISP 1
	Dst. Add: 0000/0 | gateway: copas dhcpclient status gateway | check gateway: ping | distance:1 | apply OK
	ISP 2 sama sesuai ISP
---
speedtest
	run ok > speed total
coba matikan salah satu ISP
	interface > pilih isp > tombol x (disable) > lalu speed test > speed satu ISP
