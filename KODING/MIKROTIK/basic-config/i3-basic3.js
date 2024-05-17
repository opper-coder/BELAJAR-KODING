BASIC CONFIG
==================================================================================
1. reset config
2. security 
3. Bridge
4. VLAN
5. IP
--- mulai dari sini juga boleh
6. DHCP client (ISP)
7. DNS
8. NAT masquerade
9. HOTSPOT (dhcp server)
--- tambahan
10. CLOCK 
11. PPPoE
12. pisah traffic
13. no share again 
==================================================================================
---------------------------------------
RESET
- Reset mikrotik 
- login
- biarkan setting default
- reset dari system, no backup, no default config
---------------------------------------
SECURITY
- saran dilakukan di awal, dan pastikan setting IP private sudah bisa di akses dilocal atau webfig
- sistem user > add user > grup full > name: its.net > pass: pasmikro > lalu login ulang dg admin baru > kemudian disable yang bawaan   
- system > identity > ITS.net >  
- IP > services > ada list > disable dan sisakan 'www, winbox'
  - dklik u/ config ssh > available from isikan ip target 
    public dari DDNS misalnya,202.11.1.1 -lalu tambahkan IP local kita 192.168.50.0/24 lalu tambahkan ip statik spesifik 192.168.50.5
  - dclick winbox > available from isikan   192.168.50.0/24, lalu tambahkan  192.168.50.5 
  - Terus www > edit port 80 kita ubah jadi 8080 > Nanti kalau remote tinggal www.ip:8080 
- Tips yang ini jangan dilakukan terlalu cepat nanti tidak bisa connect sendiri
Langkah amanya tiap perubahan ping dst
---------------------------------------
WEB FIG
http://ip:8080
samakan satu segment pada laptop
???
---------------------------------------
BRIDGE-IP
- bridge-WAN (port 1)
- bridge-LAN (semua port kecuali terakhir)
- bridge-speedtest (port terakhir)
---------------------------------------
IP
- add ip bridge-LAN 192.168.50.1/24
- add ip bridge-speedtest 192.168.52.1/24
catatan:
1. ip bisa di berikan kepada ether langsung
2. ip bisa di berikan ke bridge (portnya tidak usah)
3. ip bisa diberikan kepada vlan (port dan bridgenya tidak usah, nanti saat bikin DHCP server, hotspot, PPPoE dll tinggal masukkan ke interface VLAN saja)
---------------------------------------
VLAN
- interface VLAN add name:bebas100; VlanID:100 ;interface: bridge saja langsung ke ether juga bisa sih
- nanti di clientnya tinggal buat entiti vlan juga dan tag(tandai) vlan id nya (100)
---------------------------------------
DHCP CLIENT
- ADD > bound
---------------------------------------	
DNS
ip/dns
- add DNS 8888, 8844, allow remote
- :> ping google.com 
---------------------------------------
NAT
ip/firewall/nat
- add NAT > srcnat:out interface:WAN, tab action:  masquerade
---------------------------------------
DHCP SERVER
- IP > DHCP Server > tombol DHCP setup > interface : 'pilih BRIDGE-LAN' > next2 > Apply-Ok
---------------------------------------
HOTSPOT
- hopspot server hotspot-setup > next2
- dns: halaman login local: ITS.net
- login pertama "admin", "admin1234"
---------------------------------------
SETUP TAMBAHAN
---
- hospot>server>dblc>
- addresspool: none, idle timeout:5 menit, keepalive: 6 menit, adrees per mac:1, tab login: HTTP CHAP,HTTP PAP,MAC COOKIE=true, other:no
- DHCP server > dblc > lease-time: 10 mnt > add
---
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

---------------------------------------
LOGINPAGE
-> files > hapus smua kecuali hotspot lalu ambil login page milik anda paste di "dalam" folder /hotspot
---------------------------------------
WIRELESS
- wireless > Tsecurity profile > add > name:"satu" > wpa-wpa2 key:"isikan password sama" 
- wireless > Tgeneral select > mode: ap-bridge > band:5gb > freq:5725-5825
- klik advance mode > pilih security profile:"satu" 
- klik enable
------------------------------------------------------
AGENDA
--- 
bikin profile yang baik
- voucher umum (jam)
- voucher spesial (jam bandwidth besar)
- voucher cepat 
- voucher data (data)
- voucher bonus 
- PPPoE
--- 
- pppoe
- vlan 
--- 
integrasi
- wallet-garden
- VPN VPS CHR
- traffic voucher
- speedtest
- netwatch monitoring AP
- monitoring speed enduser average
---
- burst
- script auto down/up ISP
- skeduller restart

	
	
	dimas alfaruq


?????
---------------------------------------
MIKBOTAM


---------------------------------------
MIKHMON


---------------------------------------
RADBOX
