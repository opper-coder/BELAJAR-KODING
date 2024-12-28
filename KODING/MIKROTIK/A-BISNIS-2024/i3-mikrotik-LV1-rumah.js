DISTRIBUSI VLAN
-----------------------------------------------------------------------------------
BASIC CONFIG
konsep topologi ISP
	1. ISP (di mikrotik ini, awal pengumpulan ISP dan encapsulasi QinQ)
		Mikrotik-A (vlan1000)
			ISP13 DHCPserver vlan1000 vlan13
			ISP14 DHCPserver vlan1000 vlan14
			ISP15 DHCPserver vlan1000 vlan15
		Mikrotik-B (vlan1000)
			ISP16 DHCPserver vlan1000 vlan16
			ISP17 DHCPserver vlan1000 vlan17
			ISP18 DHCPserver vlan1000 vlan18
		Mikrotik-C (vlan1000)
			ISP19 DHCPserver vlan1000 vlan19
			ISP20 DHCPserver vlan1000 vlan20
	2. MIKROTIK-QINQ (vlan1000)
		vlan1000 (hanya jembatan ke bawah) 
	3. mikroBA (menerima QinQ1000 dan memecahnya lalu di loadbalance)
		vlan13 - 20 terima
		LB ECMP > 
===================================================================================
BASIC
1. RESET config:
	a. system user grup full
	b. system identity
	c. system service
	d. tool RoMON: pasmikromon
	e. loginpage: edit HTML pada script input diatas password=username, matikan kolom password UI 
2. BRIDGE: 
	- bridge1-balang  port: ether1
	- bridge2-msroji1 port: ether2
	- bridge3-kayatri port: ether3
	- bridge4-RMH  	  port: ether4, wlan1
	- bridge5-DIST    port: ether5
d. VLAN & IP:
	vlanQinQ:1000 > bridge1-DIST (semua mikrotik pengirim QinQ pakai ID=1000)
		vlanIs13:13	 10.10.13.1/29
		vlanIs14:14 	 10.10.14.1/29
		vlanIs15:15	 10.10.15.1/29
		brige4-RMH 	192.168.5.1/28
3. DHCP: 
	- Client semua bridge-ISP > bound 
	- Server semua vlan
4. DNS:
	- 8.8.8.8, 8.8.4.4, 1.1.1.1, 192.168.1.1 allow remote ok
5. NAT masquerade: 
	- chain=srcnat out-interface=bridge-ISP action=masquerade (copy semua bridge-ISP)
6. PING:
	- masing-masing gateway ISP
-----------------------
7. HOTSPOT rumah:
	- hotspot set di=bridge4-RMH selebihnya lihat basic config hotspot
	+queue1-Rumah limit=1M/5M priority=1
	+profile1-Rumah limit=1M/2M parent=+queue1-Rumah
	+user="nama terserah" profil=profile1-Rumah
-----------------------
8. POLICY BASED ROUTE: 
	/ip route rule 
		+src-address=<gatewayvlanIs13> action=lookup table="to-ISP13"
		+src-address=<gatewayvlanIs14> action=lookup table="to-ISP14"
		+src-address=<gatewayvlanIs15> action=lookup table="to-ISP15"
		+src-address=<bridgeLAN> action=lookup table="to-ISP13"
	/ip route routes
		+dst=0.0.0.0/0 gateway=<ISP1%bridge1> mark-conn="to-ISP13"
		+dst=0.0.0.0/0 gateway=<ISP1%bridge1> mark-conn="to-ISP14"
		+dst=0.0.0.0/0 gateway=<ISP1%bridge1> mark-conn="to-ISP15"
===================================================================================
MIKROTIK-QINQ Terminal
	1. Reset config 
    	2. Bridge
        	BRIDGE 	: bridge1 > vlan-filtering=y
       		PORT 	: ether1(in) 
        		  ether2(in) 
        		  ether3(in) 
        		  ether4(in) 
        		  ether5(out) tab vlan PVID=1000 tag-stacking=y 
        	VLANs 	: bridge1 vlan-ID=1000 tagged=ether1,2,3,4 untagged=ether5 
===================================================================================
MIKROTIK-QINQ Rumah
	1. Reset config, topologi:
		ether1 	: qinq-A 
		ether2 	: qinq-B 
		ether3 	: qinq-C 
		ether4 	: ISP-rumah 
		wlan1 	: HOTSPOT-rumah 
		ether5 	: DIST-qinq 
    	2. Bridge 
       		BRIDGE 	: bridge1-QinQ > vlan-filtering=y 
        	PORT 	: ether1(in) 
        		  ether2(in) 
        		  ether3(in) 
        		  vlanQinQ:1000(in)(new create)
        	  	  vlanIs16:16 ip: 10.10.16.1/29  
        		  ether5(out) tab vlan PVID=1000 tag-stacking=y 
        	VLANs 	: bridge1 vlan-ID=1000 
        		  tagged=ether1 
        		  tagged=ether2 
        		  tagged=ether3 
        		  tagged=vlanQinQ 
        		  vlan untagged=ether5 
    	----------------------- 
    	3. bridge-RMH port=wlan1 Ip: 192.168.5.1/28 
    	----------------------- 
    	DHCP 
	    	client=ether4-IspRumah default-route=yes 
	    	server=vlanIs16 
	    	DNS=8.8.8.8 
	    	NAT=masquerade 
    	-----------------------
	HOTSPOT 
		- to bridge-RMH 
		- +profile1-Rumah limit=1M/2M parent="queue1-Rumah" 
	-----------------------
	QUEUE 
		+queue1-Rumah limit=1M/5M priority=1 
===================================================================================
MikroBa
ECMP
---------------------------
	1. Reset config  
		- DHCP: dhcp client semua ISP, default route:NO (ingat ECMP)
		- DNS: 8888, 8844
---------------------------
    	2. Bridge
		vlanIs13 - vlanIs20
        	BRIDGE: bridge1 > vlan-filtering=y
        	PORT:   ether1(in) 
        		vlanIs13(out)
        		vlanIs14(out)
        		vlanIs15(out)
        		vlan100(dst sampai habis);
        VLANs:  bridge1 vlan-ID=13 tagged=ether1 untagged=vlanIs13
                bridge1 vlan-ID=14 tagged=ether1 untagged=vlanIs14
                bridge1 vlan-ID=15 tagged=ether1 untagged=vlanIs15
                bridge1 vlan-ID=16 tagged=ether1 untagged=vlanIs16
                bridge1 vlan-ID=17 tagged=ether1 untagged=vlanIs17
                bridge1 vlan-ID=18 tagged=ether1 untagged=vlanIs18
                bridge1 vlan-ID=19 tagged=ether1 untagged=vlanIs19
                bridge1 vlan-ID=20 tagged=ether1 untagged=vlanIs20
----------------------------
	3. NAT= masquerade ke semua vlanIsp
----------------------------
 	4. ECMP ROUTE
 		tambahkan satu rule comment=ECMP
	 		+dst=0.0.0.0/0 
	 		+gateway=<ip vlanIs13>, 
	 		+gateway=<ip vlanIs14>, 
	 		+gateway=<ip vlanIs-Habis>, 
	 		+gateway=<ip%ether1 jika IP sama>, 
			distance: 1
-------------------------------------------------
MANGLE SESSION ISP (agar tidak mudah logout)
	mangle mark connection
		- chain=input in-interface=vlanIs13 action=mark-connection new-mark="ISP1-Conn" pastrhough=true
		- copy semua vlanISP
	mangle mark routing
		- chain=output connection-Mark=vlan13 action=mark-routing new-mark="to-ISP1" pastrhough=false
		- copy semua vlanISP
	routes
		/ip routes add  
			dst-adress=0.0.0.0/0 gateway=<ip vlanIp13 (%jg boleh)> routing-mark="to-ISP1" 
		- copy semua
-------------------------------------------------
FAILOVER
	- check gateway: ping -> yang ada routing-mark: to-ISP nya)  
-------------------------------------------------

