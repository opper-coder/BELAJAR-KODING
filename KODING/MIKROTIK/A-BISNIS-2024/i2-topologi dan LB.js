-----------------------------------------------------------
TOPOLOGI dan LOAD BALANCE
       	topologi distribusi	: ODN > ODC > ODP > ONT
	topologi hotspot	: server > OLT > ONT > OLT > ONT vlan
      	topologi ISP		: Rumah, 2ISP, TERMINAL, LB, MIKROTIK
      	topologi mesin		: (2 ISP)rb951ui-2nd, rb951ui-2hnd, (6 ISP) rb750gr3, (12 ISP+ECMP) rb450gx4 
-----------------------------------------------------------
HOTSPOT
      - SFP 8db > 5:95 > 10:90 > 50:50 > ODC > ODP > ONT     = +8 -> 5:10:50
      - SFP 9db > 3:97 >  5:95 > 50:50 > ODC > ODP > ONT     = +9 -> 3: 5:50
      - 4 > 4 > 8 
      - 4 > 4 > 2 > 4
      - 4 > 4 > 2 > 8
Ketentuan
      - masing2 SFP memiliki satu server hotspot (loginpage masing2) 
      - semua SFP memiliki satu server hotspot 
-----------------------------------------------------------
TERMINAL ISP DHCP MIKROTIK
      - dikirim HTB
      - di terima RB750 second oleh 4 ether1234 > DHCP server /30 pada vlan1234 > 
      - ether5 > bridgeLAN > porting semua vlan1234 
      - kirim HTB gigabit
-----------------------------------------------------------
TERMINAL ISP pakai VLAN trunch pada SWITCH
      - dikirim HTB
      - diterima di switch di ether1234 bikin vlan lalu kirim ke trunch di ether5
      - terima dari HTB ke mikrotik vlan tag pada mikrotik mode switch 
      - atau terima pakai vlan pakai switch biasa
-----------------------------------------------------------
lalu jadikan load balance ECMP seperti repo PCC load balance LB ECMP
------------------------------------------------------------------------------------------------------------------------------------------
STANDARD IP DESIGN
bridge1-WAN		: auto
vlan-QinQ level		: 1000, 1100, 1200 
	IP ISP 		: 10.10.10.1/29 atau 192.168.1.1 - 192.168.10.1
	vlanISP 	: 100
	vlanISP		: 101
vlanHotSpot
	IP 		: 20.20.20.1/24 
	vlanHS200 	: 200
	vlanHS201 	: 201
vlanPPPoE
	IP 		: 30.30.30.1/24
	vlanPP300 	: 300
	vlanPP301 	: 301
hotspot rumah:         	
			: 192.168.100.1/28  (15)
------------------------------------------------------------------------------------------------------------------------------------------
DAFTAR NAMA
slash/29 (1-7 user) 
___________________________________________________________________________________________________________________________________________________
NAMA              : HP           | TELKOM       | BIAYA 	| INTERFACE IP         sgmt1 |sgmt2|sgmt3|sgmt4|sgmt5| (users) PASS      | AKSES POINT    |
---------------------------------------------------------------------------------------------------------------------------------------------------
1. torikul huda   : 081          | 172723801994 | Rp 374.350 	| vlan1   192.168.168.1/29   | 200 | 210 | 220 | 222 | (5) surya10       |                |
2. soni harsono   : 081334797878 | 172723804062 | Rp 655rb  	| vlan20  192.168.168.20/29  | 200 | 210 | 220 | 222 | (5) tokopadang2   |                |
3. armed          : 081xxxxxxxxx | 172723801366 | Rp 429.570	| vlan40  192.168.168.40/29  | 200 | 210 | 220 | 222 | (5)               |                |
4. nur afiyah     : 081xxxxxxxxx | 172723803710 | Rp 358.200	| vlan60  192.168.168.60/29  | 200 | 210 | 220 | 222 | (5) Kopiko        | vovo y12       |
5. kayatri        : 081xxxxxxxxx | 17272380xxxx | 		| vlan80  192.168.168.80/29  | 200 | 210 | 220 | 222 | (7) Relaxa        | oppo a3        |
6. kayatri2       : 081xxxxxxxxx | 17272380xxxx | 		| vlan100 192.168.168.100/29 | 200 | 210 | 220 | 222 | (6)               |                |
7. saeroji1       : 081xxxxxxxxx | 17272380xxxx | 		| vlan120 192.168.168.120/29 | 200 | 210 | 220 | 222 | (5)               |                |
8. regita cahyani : 081xxxxxxxxx | 172723803529 | Rp 477.300	| vlan140 192.168.168.140/29 | 200 | 210 | 220 | 222 | (6)               |                |
===================================================================================================================================================
