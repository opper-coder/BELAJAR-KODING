-----------------------------------------------------------
TOPOLOGI dan LOAD BALANCE
      topologi distribusi: ODN > ODC > ODP > ONT
      topologi ISP: SWITCH, VLAN, MIKROTIK
      ECMP
-----------------------------------------------------------
IP ADDRESS DESIGN
bridge1-WAN				= auto
	vlan40-HS0-LOC		= 192.168.40.1/24       : hotspot vlan
	vlan60-PP0-LOC		= 192.168.60.1/24       : pppoe vlan 
bridge2-HOTSPOT			= 192.168.80.1/24       : hotspot bridge
bridge3-PPPOE			= 192.168.100.1/24      : pppoe bridge
vlan500-ISPBalang 		= 192.168.222.1/24 	: vlan500+ (ISP dimulai dari 500)
bridge4-RUMAH			= 192.168.5.1/28		: 0-15/1-14
bridge5-LB				= 222.222.222.1/30 	: loadbalance

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
-----------------------------------------------------------
