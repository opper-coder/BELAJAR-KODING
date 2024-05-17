BASIC CONFIG VOUCHER + PPPoE mikrotik, OLT, ONU
---------------------------------------
1. Reset config
2. Bridge: WAN, LAN
3. bridge-LAN:
	3a. VLAN60-PPPoE 	: ID 60
	3b. VLAN80-OLT 		: ID 80 
4. IP bridge-WAN (DHCP client-bound)
5. IP bridge-LAN 
	- 192.168.40.1/22 (hotspot. 	interface: bridge-LAN)
	- 192.168.60.1/24 (pppoe. 		interface: VLAN60-PPPoE)
	- 192.168.80.1/24 (remote OLT. 	interface: VLAN80-OLT)
	- pada tutorial di global hotspot juga menggunakan VLAN, jadi tidak langsung di bridge
6. DNS
	- 8.8.8.8, 8.8.4.4, allow ok
7. NAT masquerade
	- chain: srcnat, out: WAN, act: masquerade
8. HOTSPOT
	- bridge-LAN
	- link.net
	- admin, 1000
	- profile user: 
		- keepalive: 10 detik
		- cookie timeout: sesuai masa voucher
	- server profile > login
		- chap, pap, mac, cookie
9. PPPoE server
	- add server. interface: vlan60-PPPoE
	- add pppoe profile, limit, only one, local addr(gateway), remot addr(pool) bisa di buat disini jika kita memiliki ip pool xx - xx
	- add secret: name, pass, IP PPPoE(gateway), IP perangkat(static) jika maunya statik, jika dinamik pakai pool pada profile saja  
10. security: 
	- admin
	- identity
	- services: www:8080, winbox:8292, 
11. CLOCK 
	system > clock
	> system zone auto detect: matikan
	> system SNTP client > enable > 
		cara1:
			primary NTP : 202.65.114.202 > 
			secondary NTP : 212.26.18.41 > 
			server dns: "asia.pool.ntp.org"
		cara2:
		untuk mendapat kan ntp: keyword sntp client: pilih : indonesia_id.pool.ntp.org
			primary NTP: id.pool.ntp.org 
			secondary NTP: 1.id.pool.ntp.org 
	> apply maka mode akan berubah beserta parameter lain 
		atur jam cara2
			hidupkan zone auto detect:
				tab manual time zone
					WITA +8 
12. pisah traffic
	- WA
	- freefire, mobile legend (caritahu dengan monitoring aktifitas)
13. no share again 

---------------------------------------
OLT
	- hubungkan port mgmn 
	- connect satu segmen (192.168.0.88)
	- tab switch port vlan
		tab vlan > add satu per satu 40, 60, 80
		tab port vlan > 
		- vlan terima
			interface: uplink 1  
			mode: hybrid
			apply dulu biar valid > lalu tag di bawah
			tag vlan: 40, 60, 80
			add > akan tertambahkan ke uplink 1
			---
		- vlan teruskan
			interface: pon 1  
			mode: hybrid
			apply dulu biar valid > lalu tag di bawah
			tag vlan: 60, 80
			add > akan tertambahkan ke pon 1
			--- 
			jika pon2 dan uplink2 jg dilakukan hal yang sama jg bisa
	- tab inbond (tambah ip management)
		add vlan id 80 Ip perangkat 192.168.90.5, gateway 192.168.90.1 
		(periksa dengan ping IP di mikrotik)
---------------------------------------
MODEM ONU 
	- connect modem satu segmen
	- network
		create connection VLAN 
		PPPoE 
			mode pppoe 
			mode vlan: tag 60 
			connection: internet
			port binding: SSID1, ether1
			name: secret
			pass: secret
			apply
		(periksa ppp active di mikrotik saat koneksi berhasil di buat, klik kanan ip adres > ping)
		Hotspot 
			mode: bridge
			(disini Jika interface hotspot pada mikrotik di assign di vlan maka "mode vlan: tag". pada kasus ini tidak ada tag)  
			security: open system
			connection: Other
			port binding: SSID2, ether2
---------------------------------------
