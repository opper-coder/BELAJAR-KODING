setting OLT
----------------------------------------------------
HARDWARE:
skema pengkabelan
1. MIKROTIK		: ether1 ke ISP > ether2 ke OLT > ether 3 untuk remote
2. OLT			: Uplink1 dari MIKROTIK > PON1 ke ONT 
3. HOTSPOT		: ONU/ONT > pilih mode bridge > setting vlanID ke vlan-10
----------------------------------------------------
SETTING MIKROTIK
1. config dasar
	- interface: ether1-ISP, ether2-OLT, ether3-LOCAL
	- ip: 
		- ether1 dapat DHCP client (setting dasar dulu sampai nat masquerade, ada tutorialnya)
		- ether2 tidak ada IP, nanti setting vlan baru dapat IP(setting vlan, ada tutorialnya)
		- ether3 kasih IP: 30.30.30.0/24 (setting DHCP server, ada tutorialnya)
	- coba akses internet lewat ether3 > klik dunia > change adapter > pilih eternet > disable dan enable > 
2. bikin vlan (ada tutorialnya silahkan baca) tapi singkatnya disini:
	- ceritanya kita akan bikin VLAN untuk HOTSPOT(vlan-10) dan RUMAHAN(vlan-20) 
	- interface > add > vlan > name: VLAN-10, VLAN ID: 10, interface: ether2-OLT
	- interface > add > vlan > name: VLAN-20, VLAN ID: 20, interface: ether2-OLT (samakan port ini)
	- kasih address > IP > address > 10.10.10.0/24(VLAN-10) dan 20.20.20.0/24 (VLAN-20)
	------
	jadikan HOTSPOT untuk vlan-10
	IP > hotspot > tab servers > tombol hotspot setup > interface: VLAN-10(jangan ether2-OLT)
	> next2 sampai selesai > oya pada DNS isi ITS-hotspot.net > kalu dah jadi > dclick > adresses per MAC:1
	------
	jadikan PPPoE untuk vlan-20 
3.  kalau mau ke OLT tanpa vlan ya pakai hotspot biasa saja di ether4 misalkan lalu kirim ke OLT di uplink2
    dan keluarkan ke kabel SFP2 jangan di campur dengan vlan tadi maka akan lelet semua
    karena tidak ada hubunganya dengan VLAN diatas tadi ini independen
----------------------------------------------------
SETTING OLT
login ke OLT
	- tancap ether dari laptop ke OLT port MGMT
	- akses OLT di browser dg IP default bawaan di dosbook atau label
	- 


----------------------------------------------------
setting HOTSPOT		: ONU/ONT > pilih mode bridge > setting vlanID ke vlan-10
