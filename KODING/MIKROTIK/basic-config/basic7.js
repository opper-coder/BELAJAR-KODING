BASIC CONFIG
------------------------------------------------------------------------------
1. Reset config
2. Bridge: WAN, LAN
3. Bridge-LAN:
	3a. VLAN60-PPPoE 	: ID 60
	3b. VLAN80-OLT 		: ID 80 
	3c. porting Bridge
4. IP bridge-WAN (DHCP client-bound)
5. IP bridge-LAN 
	- 192.168.40.1/22 (hotspot. 	interface: bridge-LAN)  pool 100 akan di binding
	- 192.168.60.1/24 (pppoe. 		interface: VLAN60-PPPoE) dibuat saat bikin secret, tidak dibuat pada interface)
	- 192.168.80.1/24 (remote OLT. 	interface: VLAN80-OLT)
	- pada tutorial di global hotspot juga menggunakan VLAN, jadi tidak langsung di bridge
6. DNS
	- 8.8.8.8, 8.8.4.4, allow ok
7. NAT masquerade
	- chain: srcnat, out: WAN, act: masquerade
8. HOTSPOT
	- bridge-LAN
	- link.net
	- admin, 1001
	- profile user: 
		- session, idle, keepalive: kosongkan sbg gantinya setting pada "servers" (berjamaah)
		- cookie timeout: sesuai masa voucher
	- server profile > login 
		- chap, pap, mac coockie, 
	- servers
		- idle dan login timeout: kosongkan
		- keepalive: 30 detik (berjamaah)
	- users, profil: di buat nanti di mikbotam
9. PPPoE server
	- add server. interface: vlan60-PPPoE
	- add pppoe profile, limit, only one, local addr(gateway), remote addr(pool) bisa di buat disini jika kita memiliki ip pool xx - xx
	- add secret: name, pass, IP PPPoE(gateway), IP perangkat(static) jika maunya statik, jika dinamik pakai pool pada profile saja  
10. Security: 
	- user: administrator1212 grup full
	- pass: passmikro
	- identity: Surya-Hotspot
	- services: api:8074, winbox:7273, (bukan default) (ini hanya saya simpan saja siapa tahu ada gunanya port API VPN : 6263)
11. CLOCK 
	system > clock
	> system zone auto detect: matikan
	> system SNTP client > enable > 
		cara1: (berhasil)
		untuk mendapat kan ntp: keyword sntp client: pilih : indonesia_id.pool.ntp.org
			primary NTP: id.pool.ntp.org 
			secondary NTP: 1.id.pool.ntp.org 
		cara2:
			primary NTP : 202.65.114.202 > 
			secondary NTP : 212.26.18.41 > 
			server dns: "asia.pool.ntp.org"
	> apply maka mode akan berubah beserta parameter lain 
		atur jam cara2
			hidupkan zone auto detect:
				tab manual time zone
					WITA +8 
12. pisah traffic
	- WA
	- freefire, mobile legend (caritahu dengan monitoring aktifitas)
13. no share again 
	+ batasi share kembali ke perangkat lain
	- berdampak pada repeter, HTB estafet, wisp dll (cekidot)
	ip > firewall > mangle 
		chain: postrouting
		out interface: bridge-LAN (jalur distribusi)
		action > change TTL
		new TTL: 1 (boolean)
		passtrhrough: false (citraweb), true (channel lain)
		Apply
14. Restart 30 hari sekali 
	/system script
	add name=restart-router policy=ftp,reboot,read,write,policy,test,password,sniff,sensitive source="/system reboot"

	/system scheduler
	add name=restart-scheduler interval=30d start-time=02:00:00 on-event=restart-router

------------------------------------------------------------------------------
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
		add vlan id 80 Ip perangkat 192.168.80.5, gateway 192.168.80.1 
		(periksa dengan ping IP di mikrotik)
	- test
		- ganti ip ke segmen 80.1 dan akses 80.5
		- coba remote mikrotik dengan static routing (lihat routing nya di dokumentasi the dude )
------------------------------------------------------------------------------
MODEM ONU SARANGAN VISION
	segment IP 192.168.1.1 
	name: superadmin, pass: suportadmin
	WAN:
		ip: v4
		mode: bridge/pppoe
		bisnis: INTERNET/VOICE
		vlan: untag/tag (60)
		(pppoe): secret
	WLAN: 
		bandwidth: 20
		channel: 1, 7, 13
		tab ssid: ssid1, ssid2, name
		scurity: ssid1, 2: open system

------------------------------------------------------------------------------
REMOTE ONU VLAN 1010
	buatkan semua router ada vlan 

REMOTE DI BAWAH MIKROTIK lihat the dude


