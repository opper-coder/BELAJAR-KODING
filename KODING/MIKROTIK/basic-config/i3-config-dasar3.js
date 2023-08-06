setting dasar mikrotik

---------------------------------------
RESET
- Reset mikrotik 
- login
- biarkan setting default
- reset dari system, no backup, no default config
---------------------------------------
BRIDGE-IP
- bridge-WAN (port 1)
- bridge-LAN (semua port kecuali terkhir)
- bridge-speedtest (port terakhir)
- add ip bridgelan 192.168.50.1/24
- add ip bridge-speedtest 192.168.52.1/24
---------------------------------------
DHCP CLIENT
- ADD > bound
- add NAT masquerade
- add DNS 8888, 8844, allow 
- :> ping google.com 
---------------------------------------
HOTSPOT
- hopspot server hotspot-setup > next2
- dns: halaman login local: ITS.net
- login pertama "admin", "admin1234"
---------------------------------------
SETUP TAMBAHAN
---
- hospot>server>dblc>
- addresspool: none, idle timeout:5 menit, keepalive: 6 menit, adrees per mac:1, 
	tab login: HTTP CHAP,HTTP PAP,MAC COOKIE=true, other:no
---
- DHCP server > dblc > lease-time: 10 mnt > add
---
system > clock
> system zone auto detect: matikan
> system SNTP client > enable > primary NTP : 202.65.114.202 > secondary NTP : 212.26.18.41 > server dns: "asia.pool.ntp.org"
> apply maka mode akan berubah beserta parameter lain 
---------------------------------------
SECURITY
- sistem user > add user > grup full > name: its.net > pass: pasmikro > lalu login ulang dg admin baru > kemudian disable yang bawaan   
- system > identity > ITS.net >  
- IP > services > ada list > disable dan sisakan 'www, winbox, ssh'
  - dklik u/ config masing2 > available from isikan ip target (misalnya milik laptop petugas) 
  - tambahkan IP local kita 192. 168. 1. 0/24 (tentu saja karena kalau tidak di isi kita malah gak bisa remote winbox)
  - Terus www > edit port 80 kita ubah jadi 8080 > Nanti kalau remote tinggal www.ip:8080 
- Tips yang ini jangan dilakukan terlalu cepat nanti tidak bisa connect sendiri
Langkah amanya tiap perubahan ping dst
---------------------------------------
loginpage
-> files > hapus smua kecuali hotspot lalu ambil login page milik anda paste di "dalam" folder /hotspot


------------------------------------------------------
AGENDA
--- 
bikin profile yang baik
- voucher umum
- voucher cepat
- voucher data
- voucher bonus
--- 
- pppoe
- vlan 
- speed test
- netwhatch monitoring AP
--- 




