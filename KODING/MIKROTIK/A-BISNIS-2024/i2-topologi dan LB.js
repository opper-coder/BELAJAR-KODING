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
vlan-QinQ level		: 1000 only (nomor urut ada di segmen puluhan ke2 dari blkg)
	vlanIsp10 	: 10.10.10.1/29
	vlanIsp11	: 10.10.11.1/29
	vlanIsp255	: 10.10.255.1/29 end
vlanHotSpot
	vlanHs20 	: 20.20.21.1/24
	vlanHs21 	: 20.20.22.1/24
	vlanHs255 	: 20.20.255.1/24 end
vlanPPPoE
	vlanPp30 	: 30.30.30.1/24
	vlanPp31 	: 30.30.31.1/24
	vlanPp255 	: 30.30.255.1/24 end
hotspot rumah:         	
			: 192.168.5.1/28  (15)
VLAN OTHER 		: gunakan di angka 40+ dan hindari 100-199,200-299,300-399,1000 itu aja  
IP segment 		: lihat di atas tetap 10,20,30 - 255
--------------------------------------------------------------------------------------------------------------------------------
DAFTAR NAMA 
slash/29 (1-7 user) 
________________________________________________________________________________________________________________________________
NAMA              : 
--------------------------------------------------------------------------------------------------------------------------------
SURYA-A 	  : K12 	: hotspot1 
MENTARI 	  : jl baru 	: hotspot2 
PANDAWA 	  : boneaka 	: hotspot3 
AMEL 		  : buton 	: hotspot4 
BEBANGGAI 	  : bebang 	: hotspot5 
PASARR 		  : pasar tua 	: hotspot6 
__________________________________________________________________________________________________________________________
NAMA              : HP           | TELKOM       | BIAYA 	| INTERFACE IP        	  | (users) PASS      | AKSES POINT    |
--------------------------------------------------------------------------------------------------------------------------------
1. torikul huda   : 081          | 172723801994 | Rp 374.350 	| vlanIs10 10.10.10.1/29  | (5) surya10       |                |
2. soni harsono   : 081334797878 | 172723804062 | Rp 655rb  	| vlanIs11 10.10.11.1/29  | (5) tokopadang2   |                |
3. armed          : 081xxxxxxxxx | 172723801366 | Rp 429.570	| vlanIs12 10.10.12.1/29  | (5)               |                |
4. nur afiyah     : 081xxxxxxxxx | 172723803710 | Rp 358.200	| vlanIs13 10.10.13.1/29  | (5) Kopiko        | vovo y12       |
5. saeroji1       : 081xxxxxxxxx | 17272380xxxx | 		| vlanIs14 10.10.14.1/29  | (5)               |                |
6. kayatri        : 081xxxxxxxxx | 17272380xxxx | 		| vlanIs15 10.10.15.1/29  | (7) Relaxa        | oppo a3        |
7. kayatri2       : 081xxxxxxxxx | 17272380xxxx | 		| vlanIs16 10.10.16.1/29  | (6)               |                |
8. regita cahyani : 081xxxxxxxxx | 172723803529 | Rp 477.300	| vlanIs17 10.10.17.1/29  | (6)               |                |
================================================================================================================================
