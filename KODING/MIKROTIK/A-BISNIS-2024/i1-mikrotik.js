BASIC CONFIG
------------------------------------------------------------------------------
1. RESET config:
	a. system user grup=full
	b. system identity
	c. ip service
	d. tool RoMON: pasmikromon
	e. loginpage: edit HTML pada script input diatas password=username, matikan kolom password UI 
2. BRIDGE: 
	- bridge1-WAN 
	- bridge2-LAN
	- bridge3-Remote
3. VLAN & IP: - hotspots, pppoes, remotes
4. PORTING: 
5. DHCP client: bound, release, renew
	server: distribusi paling sederhana hanya queue saja ini atau pemilik rumah pribadi saja pengganti pppoe (kalau mau sih)
6. DNS: 8.8.8.8, 8.8.4.4, 1.1.1.1 (ip gateway ISP jg boleh) allow remote=y
7. NAT: chain: srcnat, out: WAN, act: masquerade
-----------------------------------------------------------------------------------
8. HOTSPOT
	- IP > HOTSPOT > Interface
	- name server - HS1-komp12, HS2-Bone, HS3-dst
	- link.net, link2.net
	- admin10x, admin10x
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
		- session, idle, keepalive: disable, sdh ada pada "servers" (berjamaah)
		- user ada 3 kategori: adm-mahmud, surya-nur, tokopadang(ISP), end users(vocer)
	- PERHATIAN:
		- profil dan user yang di buat NATIVE jangan sampai di EDIT atau bahkan sekedar di buka di MIKBOTAM dst. bisa kena script 
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
13. Restart 1 hari sekali terminal
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


========================================================================================================

DI ROS 7 sudah test jalan tetapi ada yang harus di cek manual
1. matikan sytem clock timezone auto detect (auto reboot)
2. cek sebaiknya yang mengarah ke bridge-WAN replace (ganti) dengan ether1 saja (hardware lebih optimal)
3. selebihnya sudah jalan kayaknya 
4. jika perlu penyesuaian tinggal copas di text editor dan sesuaikan paling hanya interface dan dan ROS6 dan 7 saja tapi kayaknya tidak ada masalah   

# ---------------------------------
# 1. KONFIGURASI INTERFACE & BRIDGE

/interface bridge
add name=bridge-WAN comment="Bridge ke ISP"
add name=bridge-LAN comment="Bridge ke LAN"

/interface bridge port
add bridge=bridge-WAN interface=ether1
add bridge=bridge-LAN interface=ether2
add bridge=bridge-LAN interface=ether3
add bridge=bridge-LAN interface=ether4
add bridge=bridge-LAN interface=ether5
add bridge=bridge-LAN interface=ether6
add bridge=bridge-LAN interface=ether7
add bridge=bridge-LAN interface=ether8

# --------------------------------- 
# VLAN DI ATAS bridge-LAN
/interface vlan
add name=vlan100-Banggai vlan-id=100 interface=bridge-LAN comment="pppoe-Banggai"
/interface vlan
add name=vlan200-Kendek vlan-id=200 interface=bridge-LAN comment="pppoe-Kendek"
/interface vlan
add name=vlan300-Lambako vlan-id=300 interface=bridge-LAN comment="pppoe-Lambako"
/interface vlan
add name=vlan400-Tinakin vlan-id=400 interface=bridge-LAN comment="pppoe-Tinakin"
/interface vlan
add name=vlan500-SMA2 vlan-id=500 interface=bridge-LAN comment="pppoe-SMA2"
/interface vlan
add name=vlan600-Adean vlan-id=600 interface=bridge-LAN comment="pppoe-Adean"

# --------------------------------- 
/ip dhcp-client
add interface=bridge-WAN use-peer-dns=no use-peer-ntp=no add-default-route=yes comment="DHCP Client for ISP"

/ip dns
set servers=8.8.8.8,1.1.1.1 allow-remote-requests=yes

/ip firewall nat
add chain=srcnat out-interface=bridge-WAN action=masquerade comment="NAT keluar ke ISP"

# --------------------------------- 
# Ganti identity
/system identity set name=Mikrotik-Server1

# --------------------------------- 
# Tambahkan user administrator
/user add name=administrator1212 group=full password=pasmikro

# --------------------------------- 
# Aktifkan RoMON
/tool romon set enabled=yes secrets=pasmikromon

# ---------------------------------  
# Batasi TTL (mencegah sharing internet ke perangkat lain)
/ip firewall mangle add chain=prerouting action=change-ttl new-ttl=set:1 passthrough=yes

# --------------------------------- 
# DHCP Rogue Detection & Blocking
# Terima DHCP server sah dari interface ether1 (misalnya WAN)
/ip firewall filter add chain=forward in-interface=bridge-WAN protocol=udp dst-port=67 action=accept

# --------------------------------- 
# Blok DHCP server dari interface lain (rogue)
/ip firewall filter add chain=forward protocol=udp dst-port=67 action=drop

# --------------------------------- 
# reboot tiap jam 4, 4 hari sekali
/system scheduler
add name=restart_router start-time=04:00:00 interval=4d on-event="/system reboot"

# --------------------------------- 
# matikan semua service
/ip service
set telnet disabled=yes
set ftp disabled=yes
set www disabled=yes
set ssh disabled=yes
set www-ssl disabled=yes
set api-ssl disabled=yes
set winbox disabled=no
set api disabled=no

# ---------------------------------
# pembatasan akses dari ISP ke Winbox/SSH

/ip firewall filter
# 1. Drop akses Winbox dari ISP (kecuali IP admin)
add chain=input in-interface=bridge-WAN protocol=tcp dst-port=8291 action=drop comment="Blok Winbox dari luar"
# 2. Drop akses SSH dari ISP
add chain=input in-interface=bridge-WAN protocol=tcp dst-port=22 action=drop comment="Blok SSH dari luar"
# 3. Drop koneksi invalid
add chain=input connection-state=invalid action=drop comment="Drop invalid connections"
# 4. Allow koneksi yang sudah established/related
add chain=input connection-state=established,related action=accept comment="Allow established connections"
# 5. Allow dari jaringan lokal
add chain=input src-address=192.168.0.0/16 action=accept comment="Allow LAN access"
# 6. Drop semua sisanya (default deny)
add chain=input action=drop comment="Drop all other traffic"

# ---------------------------------
/ip firewall filter
# blok API dan APISSL dari luar
add chain=input in-interface=bridge-WAN protocol=tcp dst-port=8728 action=drop comment="Blok API dari luar"
add chain=input in-interface=bridge-WAN protocol=tcp dst-port=8729 action=drop comment="Blok API-SSL dari luar"

# ================================= 
# jalan kan sendiri atau manual saja
# Aktifkan SNTP Client di versi 7 (jalan)
# matikan dulu system clock time zone autodetect, 
# dapatkan dulu ip pool watu di: www.ntppool.org > cari lokasi server indonesia   
# ping 0.id.pool.ntp.org
# ping 1.id.pool.ntp.org

/system ntp client 
set enabled=yes
servers add address=103.105.49.219
servers add address=103.105.49.220
servers add address=pool.ntp.org

# test 
/system clock print
/system ntp client print


