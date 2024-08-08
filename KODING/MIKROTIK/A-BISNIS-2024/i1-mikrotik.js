BASIC CONFIG
------------------------------------------------------------------------------
1. Reset config
2. Bridge: 
	- bridge1-WAN 
	- bridge2-HOTSPOT
		- VLAN200-HS: (VLAN200-299) 
			- tiap SFP: berisi 60 rumah dan satu ODN buat satu server-hotspot
			- 1100ahx4: kapasitas 600 orang: sekitar 10 vlan
	- bridge3-PPPoE
		- VLAN100-PP (100-199)
			- PPPoE: remote dan register semua PPPoE
			- tiap wilayah boleh bikin pppoe lagi (pertimbangkan)
	- bridge3-Remote
		- VLAN10-remote: OLT, ONU, IPTV, Listrik, Pfsense, LB
2.1. bikin VLAN
	- hotspot, pppoe, remote
3. porting Bridge - ether dan VLAN 
4. IP bridge-WAN (DHCP client-bound, satu ether saja menuju ke Mikrotik LB, atau langsung ISP nanti kalau LB tinggal renew saja)
5. IP bridge-HOTSPOT > VLAN200-HS 
	- 192.168.40.1/22 (hotspot. 	interface: bridge-LAN)  pool 100 akan di binding (karena hotspot per sfp pilih /24(256) pas satu segment)
	- 192.168.60.1/24 (pppoe. 	interface: VLAN60-PPPoE) dibuat saat bikin secret, tidak dibuat pada interface)
	- 192.168.80.1/24 (remote OLT. 	interface: VLAN80-OLT)
	- pada tutorial di global hotspot juga menggunakan VLAN, jadi tidak langsung di bridge
6. DNS
	- 8.8.8.8, 8.8.4.4, (ip gateway ISP jg boleh) allow remote ok
7. NAT masquerade
	- chain: srcnat, out: WAN, act: masquerade
-----------------------------------------------------------------------------------
8. HOTSPOT
	- IP > HOTSPOT > Interface
		- interface: konsepnya
			- tiap SFP satu hotspot segment /24
			- tiap SFP satu frame ODN > ODC > ODP > ONT
			- maksimal 100 client sesuai OLT epon 
			- pool skip start di 100 - 255
			- static 1-99
	- name server - HS1-komp12, HS2-Bone, HS3-dst
	- link.net, link2.net
	- admin, 1001
	- server profile > login 
		- 3 saja: chap, pap, mac coockie, 
	- servers
		- idle dan login timeout: kosongkan
		- keepalive: 10 detik (berjamaah)
	- users, profil: di buat nanti di mikbotam
	- profile user: (semua yang di mikbotam setting seperti di bawah,opt) 
		- lakukan penyesuaian pada: name, pool, share, limit 
		- session, idle, keepalive: disable, sbg gantinya setting pada "servers" (berjamaah)
-----------------------------------------------------------------------------------
9. PPPoE server
	- add server. interface: VLAN tujuan
	- add pppoe profile, limit, only one, local addr(gateway), remote addr(pool) bisa di buat disini jika kita memiliki ip pool xx - xx
	- add secret: name, pass, IP PPPoE(gateway), IP perangkat(static) jika maunya statik, jika dinamik pakai pool pada profile saja  
	- bisa di buat di mikbotam aja
-----------------------------------------------------------------------------------
10. Security: 
	- user: administrator1212 grup full
	- pass: passmikro
	- identity: Surya-Hotspot
	- services: api:8074, winbox:7273, (bukan default) (ini hanya saya simpan saja siapa tahu ada gunanya port API VPN : 6263)
	- matikan semua service kecuali: winbox dan api
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
	- dengan ratio 1:4 Up:Do sudah tidak perlu lagi pisah traffic
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
