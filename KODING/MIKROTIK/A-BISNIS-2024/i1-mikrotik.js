BASIC CONFIG
------------------------------------------------------------------------------
1. Reset config:
	a. system user grup=full
	b. system identity
	c. ip service
	d. tool RoMON: pasmikromon
	e. loginpage: edit HTML pada script input diatas password=username, matikan kolom password UI 
2. Bridge: 
	- bridge1-WAN 
	- bridge2-LAN
	- bridge3-Remote
3. vlan: - hotspots, pppoes, remotes
4. porting: - ether, vlan
5. DNS:  - 8.8.8.8, 8.8.4.4, 1.1.1.1 (ip gateway ISP jg boleh) allow remote=y
6. NAT: - chain: srcnat, out: WAN, act: masquerade
7. IP:	- lihat topology
-----------------------------------------------------------------------------------
8. IP bridge-WAN (DHCP client-bound, release, renew saja)
-----------------------------------------------------------------------------------
9. HOTSPOT
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
10. PPPoE server
	- add server. interface: VLAN tujuan
	- add pppoe profile, limit, only one, local addr(gateway), remote addr(pool) bisa di buat disini jika kita memiliki ip pool xx - xx
	- add secret: name, pass, IP PPPoE(gateway), IP perangkat(static) jika maunya statik, jika dinamik pakai pool pada profile saja  
	- bisa di buat di mikbotam aja
-----------------------------------------------------------------------------------
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
12. no share again 
	+ batasi share kembali ke perangkat lain
	- berdampak pada repeter, HTB estafet, wisp dll (cekidot)
	ip > firewall > mangle 
		chain: postrouting
		out interface: bridge-LAN (jalur distribusi)
		action > change TTL
		new TTL: 1 (boolean)
		passtrhrough: false (citraweb), true (channel lain)
		Apply
13. Restart 30 hari sekali terminal
	/system script
	add name=restart-router policy=ftp,reboot,read,write,policy,test,password,sniff,sensitive source="/system reboot"

	/system scheduler
	add name=restart-scheduler interval=30d start-time=04:00:00 on-event=restart-router

	----- atau ini saja
	/system scheduler
	add name=restart_router start-time=04:00:00 interval=1d on-event="/system reboot"

14. AUTO RECONNECT VPN DDNS
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

15. DHCP ROGUE
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

