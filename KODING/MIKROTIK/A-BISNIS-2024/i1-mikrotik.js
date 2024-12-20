BASIC CONFIG
------------------------------------------------------------------------------
 - Loadbalance
      topology
      ECMP
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
		- loginpage : buatkan folder default, HS1, HS2, HS3 dst
	- servers
		- idle dan login timeout: kosongkan
		- keepalive: 10 detik (berjamaah)
	- users, profil: di buat nanti di mikbotam
	- profile user: (semua yang di mikbotam setting seperti di bawah,opt) 
		- lakukan penyesuaian pada: name, pool, share, limit 
		- limit Up:Do = 1:4 sudah pasti aman dari pisah traffic (contoh: 360k/1000k )
		- session, idle, keepalive: disable, sbg gantinya setting pada "servers" (berjamaah)
		- user ada 3 kategori: adm-mahmud, surya-nur, tokopadang(ISP), end users(vocer)
	- PERHATIAN:
		- profil dan user yang di buat NATIVE jangan sampai di EDIT atau bahkan sekedar di buka di MIKBOTAM dst. 
		  bisa ada masalah(logout sendiri dan anomali, ada intervensi dari MIKBOTAM dan sejenisnya)
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
		cara3: (berhasil terbaru)
			go www.ntppool.org > cari lokasi server indonesia 
			dapatkan server NTP:  server 0.id.pool.ntp.org, server 1.id.pool.ntp.org, server 2, 3 dst 
			ambil IP server >: ping 0.id.pool.ntp.org dan  ping 1.id.pool.ntp.org
			primary NTP : IP yg anda dapatkan 
			secondary NTP : sda
				
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
14. Restart 30 hari sekali terminal
	/system script
	add name=restart-router policy=ftp,reboot,read,write,policy,test,password,sniff,sensitive source="/system reboot"

	/system scheduler
	add name=restart-scheduler interval=30d start-time=04:00:00 on-event=restart-router

	-- atau ini saja
	/system scheduler
	add name=restart_router start-time=04:00:00 interval=1d on-event="/system reboot"


15. AUTO RECONNECT VPN DDNS
------------------------------------------------------------------------------------------------------ 
- :tools > netwatch > add 
	tab HOST
	- host: [IP VPN server IP public]
	- interval: 30-60 detik
	- timeout: 1000 ms
	tab UP script:
		:log warning "sudah up kembali"
	tab DOWN script:
		/interface disable [nama INTERFACE] (misal:  panda@mytunnel.id, IP VPN CHR cloud kita)
		/interface enable [nama INTERFACE] (misal:  panda@mytunnel.id, IP VPN CHR cloud kita)

16. DHCP ROGUE
-------------------
adalah ada DHCP tandingan pd jaringan local kita 
hal ini bisa membuat Connect tidak dapat internet, 
atau bahkan susah login tapi tidak dapat loginpage, 
cara atasi DHCP ROUGE dg filter Bridge, atau mengatifkan DHCP snooping 
atau ini cara filter bridge caranya:

1. setelah bikin bridge dan porting, maka bikin role filter bridge
2. tab filter:
// bikin jalur sah atau original
add new
	- chain: forward
	- in interface: ether1 (WAN)
	- mac. protocol num: 800(ip) atau ip saja
	- src port: 67
	- protocol: 17(udp) atau udp saja
	- tab action: accept
	apply OK
// Blokir jalur tidak sah rogue (mirip beda in interface, dan action)
add new
	- chain: forward

	- mac. protocol num: 800(ip) atau ip saja
	- src port: 67
	- protocol: 17(udp) atau udp saja
	- tab action: drop
	apply OK

