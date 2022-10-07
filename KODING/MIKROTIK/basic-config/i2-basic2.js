
Daftar Isi:
	- Ringkasan1
	- Ringkasan2
	- corat coret di bawah untuk bacaan saja
	- daftar DNS tercepat Rea
========================================================================================================
  SHORTHAND
  1. login dengan MAC > user:admin, pwd: "" > bisa remote, bisa 
  2. buka tool > remove config 
  3. bikin topologi: LAN, WAN, BRIDGE, VLAN(di sarankan pakai bridge)
  4. buka bridge > add > nama : sesuai Topologi > apply OK > masukan port nya
  5. IP > address > add > address: 'IP subnet' > interface: 'pilih' > kasih IP (192.168.1.1/24) masing2 interface
  6. Buka IP > DHCP Client > add > pilih interface > bound > periksa IP 
  7. IP > DNS > server = 10. 10. 10. 1 (didapat dari ISP atau IP Client ISP) dan tambahkan DNS public 8.8.8.8, 8.8.0.0 
     - Allow remote request: true
  8. IP > firewall > tab NAT > add > tab general > chain : srcnat > out interface : 'bridge-WAN' >  
     - Pada tab action >  pilih masquerade > apply > OK 
  9. cek sambungan: terminal > ping 8.8.8.8 
     - atau ping gateway di : IP > routes > ada routeslist gateway 
  10. IP > DHCP Server > tombol DHCP setup > interface : 'pilih LAN' > next2 > Apply-Ok
  11. IP > HOTSPOT > tombol HOTSPOT setup > interface : 'pilih LAN' > next2 > Apply-Ok
    - profile hotspot:
	IP > HOTSPOT > hsprof1 > dblclk tab login > sisakan HTTP CHAR, trial juga boleh 
    - 
  12. Tekan queues > pada queue list klik add > nama biarkan > target IP laptop tujuan
      > 192.168.1.254  (ip laptop tergenerate diatas) isi max dan min limit. Lebih lanjut bab QoS
  13. - ganti nama: sistem > identity > nama nya ROUTER-Gonggong
      - ganti password: sistem > user > bikin user baru klik + > nama aqil > group full > password isikan >
      - IP > services > ada list > disable dan sisakan 'www, winbox, ssh'
          - dklik u/ config masing2 > available from isikan ip target (misalnya milik laptop petugas) 
          - tambahkan IP local kita 192. 168. 1. 0/24 (tentu saja karena kalau tidak di isi kita malah gak bisa remote winbox)
	  - Terus www > edit port 80 kita ubah jadi 8080 > Nanti kalau remote tinggal www.ip:8080
     - Tips yang ini jangan dilakukan terlalu cepat nanti tidak bisa connect sendiri
       Langkah amanya tiap perubahan ping dst
========================================================================================================
RINGKASAN KONFIGURASI BASIC
0. TOPOLOGI (Petakan penggunaan port untu: Ether, Bridge, Vlan, wlan, LAN, SFP, guna untuk penugasan WAN dan LAN)
	ISP	: port: Ether1	IP: 192.10.10.10 (DHCP client) 		// ISP bisa dari loadbalance beberapa port 
	winbox	: ether2						// pakai mac juga bisa
	Client 	: port: Ether3	IP: 10/20/30/1/24 			// Bridge ke semua port misalnya di 
-----------------------------
1. INTERFACE 
	pilihan interface ada beberapa
	- beri nama langsung ke Ether
	- Bikin Folder Ether dengan Bridge
	- Vlan Satu Ether muat dua Jalur > nanti dipecah Kembali di ujung pakai switch managable (router support vlan)
	- wlan jika portnya ada
	- saran selalu gunakan menggunakan bridge meskipun tidak di pakai 
	  (untuk keperluan mendandak seperti ganti port ke SFP dll, atau ada port yang nganggur mau di pakai akses tinggal masukin bridge)
-----------------------------
2. IP
	- ether3 kalau masukkan ke bridge silahkan tapi ini langsung saja sebagai CLIENt
	  IP > address > add > IP: 10/20/30/1/24 > interface: Ether3 > apply Ok
-----------------------------
3. DHCP CLIENT:
	IP > DHCP client  > add > name: ether1-ISP1 > interface: ether1 > DNS dan NTP: yes > add default route:yes > Apply Ok > bound
	dblclk IP client  > tab status > ada data bounding IP, gateway, DHCP server gateway dll 
-----------------------------
4. DNS
	IP > DNS > server: 8.8.8.8, 8.8.4.4, 1.1.1.1 > allow remote reques: yes > apply Ok > (tambah gateway ISP kita juga boleh)
-----------------------------
5. MASQUERADE
	Ip > firewall > tab NAT > add > tab general > Chain: srcnat Out.interface: ether1 (WAN) > action: masquerade > apply Ok 
-----------------------------
6. TEST INTERNET
	terminal > ping google.com > time 34 > OK
---------------------------------------------------------------------------------------------------------
7. HOTSPOT/DISTRIBUSI
	IP > Hotspot > server > hotspot setup > interface: ether3(client) > next2 > 
	- Distribusi ada beberapa pilihan DHCP SERVER, PPPoE, Wlan, HOTSPOT. contoh hotspot:
	- jangan lupa tentukan pool untuk perangkat dan DNS name (seperti aafiber.net)(hotspot ada user pass) IP per mac: 1
	- jika menu hotspot atau ppp tidak ada maka enablekan dulu di:
	  system > package > pilih hotspot > klik tbl enable > reboot winbox
---------------------------------------------------------------------------------------------------------
Langkah berikut nya:
	- Queue parent
	- User profile Parent
	- Security
	- pisah traffic
	- load balance
---------------------------------------------------------------------------------------------------------
Catatan
	- jika kita client dari ISP dengan cara manual (bukan DHCP client) maka IP ether WAN kita harus isi manual
	- gateway juga harus di i isi manual di > IP > routes > add > Gateway > isi dengan rentang IP index pertama > Dst. address: 0.0.0.0/0
========================================================================================================
RINGKASAN PRAKTEK 2
1.BRIDGE
   - bikin sekurang-kurangnya 3 bridge WAN LAN HOTSPOT
   - masukan port2 yang di tuju
2.VLAN
   - ini optional kalau mau di gunakan
   - bikin VLAN dengan menggunakan BRIDGE yang ada
   - selebihnya tinggal baca pada halamanya yang bersangkutan
3.IP
   - bikin alokasi ip untuk wan dari DHCP
   - LAN misalnya 192. 168. 22. 1/24
   - HOTSPOT misalnya 192. 168. 33. 1/24
4.DHCP Client (Setting WAN)
   - DHCP Client - > add (tunggu sampai bound)
   - coba periksa di IP - > addresses                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
5.DNS
   - server tambahkan 8. 8. 8. 8 add 1. 1. 1. 1 add 8. 8. 4. 4  add  1. 0. 0. 1
     centang allow remote
6.NAT
   - tambahkan NAT pada WAN dan masquerade
7.DHCP Server LAN
   - bikin secara wizard jangan add manual - > DHCP Setup -> next2 jadi
8.DHCP Server HOTSPOT
   - sama bikin HOTSPOT secara wizard- Hotspot Setup -> next2 jadi 
   - settingh 2 parameter hotspot
      - doubleklik isi adress per mac 1 orang saja
      - server profile -> buka 2 profile samakan parameternya ->  tab login hilangkan centang Cookie -> centang pada HTTP chap, PAP, MAC
      - pada user profile -> isi rate limit 1M/2M atau 1M/1M
    
--------- SECURITY
9. ganti identity
10. user admin password    
--------------------------------------------------------------------------------------------------------
tips IP gateway atau IP range untuk server slash 24, 22, 36 dst cari di internet
- tips pakai slash: buat satu IP pada port atau bridge nganggur untuk dihapus lagi nantinya > saat bikin IP pakai slah 22 miasalnya
- lalu berikutnya buatkan DHCP server pada IP port tersebut > pada saat next2 ada rentang yang di berikan akan terlihat silahkan coba
- kalau sudah di temukan maka hapus kembali settingan tersebut	

========================================================================================================	

PERSIAPAN PERANGKAT
1 ISP (boleh dari "indiehome", indosat, telkomsel, TIS)
2 MIKROTIK
3 LAPTOP
4 HTB A/B 
5 kabel FO
6 ODP
7 ROUTER
  - gonggong 7 titik
  - mongsongan 10 titik
--------------------------------------------------------------------------------------------------------
KONFIGURASI HARDWARE
  1. pasang ISP di ether1
  2. pasang kabel UTP di ether2 dan sambungkan ke rj45 laptop untuk akses seting
  3. pasang kabel UTP ke HTB A dan nyalakan HTB dengan power
  4. pasang kabel FO ke HTB B
  5. pasang 2 ROUTER dari HTB dengan ODP (lihat di lapangan)
--------------------------------------------------------------------------------------------------------
LOGIN
bisa pakai salah satu: mac, ip, remote
  1. login via MAC > user:admin, pwd: ""
  2. tool > remove config 
-----------
BIKIN INTERFACE
interface ada beberapa type: ether, bridge, vlan, hotspot
  3. buka bridge > add > nama : sesuai konsep > apply OK > 
  4. masukan port pada bridge pada bridge > tab port > pilih port yang akan di gabungkan dlm bridge 
-----------
IP ISP client
  5. IP > DHCP Client > add > pilih interface > centang DNS dan NTP > default route: yes > Apply - OK > bound > periksa IP 
     - butikan: terminal ping internet: 8.8.8.8, ping DNS: google.com 
     - atau ping gateway di : IP > routes > ada routeslist gateway
  6. IP > DNS > server = 10. 10. 10. 1 (didapat dari ISP atau IP Client ISP) dan tambahkan DNS public 8.8.8.8, 8.8.0.0 
     - centang Allow remote request agar bisa di akses dari client
-----------
NAT MASQUERADE
agar internet dapat dikirim ke bawah maka bikin dulu IP gateway dg nat masquerade berikutnya bikin ip DHCP server
  7. IP > firewall > tab NAT > add(pilih di list) > tab general > chain : srcnat > out interface : 'bridge-WAN' >  
     - Pada tab action >  pilih masquerade > apply > OK
-----------
IP gateway
  8. IP > address > add > address: 'IP beri slash ip gateway namanya' > interface: 'interface keluar' (192.168.1.1/24) atau (192.168.2.1/24),10.10.10.1/24, 10.20.30.1/24 dst
-----------
DISTRIBUSI
  kita kan mau bikin service ke client maka kita boleh pilih mode server: DHCP, STATIC, HOTSPOT, WLAN.
  9. IP > DHCP Server > tombol DHCP setup > interface : 'pilih LAN keluar' > next2 > Apply-Ok
-----------
QUEUE
  10. Tekan queues > pada queue list klik add > nama biarkan > target IP laptop tujuan
      > 192.168.1.254  (ip laptop tergenerate diatas) isi max dan min limit. Lebih lanjut bab QoS
-----------
SECURITY
   - ganti nama: sistem > identity > nama nya ROUTER-Gonggong 
   - ganti password: sistem > user > bikin user baru klik + > nama aqil > group full > password isikan >
   - IP > services > ada list > disable dan sisakan 'www, winbox, ssh'
   	- dblclck pada masing masing www,winbox,ssh. > isikan IP local kita misalnya 1.1.1.1/24. dan 
  	- dklik > available from isikan ip target IP perangkat yang diizinkan mis: 11.11.11.11 
	  (misalnya di akses oleh IP laptop kantor)
   	- Dan tambahkan ip local private nya juga 192. 168. 1. 0/24 
     	  jangan di kosongkan nanti malah di perboleh kan semua jadinya
   	- Terus www nya juga edit ke Ip local yang sama > lalu port 80 kita ubah jadi 8081 >
     	- Nanti kalau remote tinggal www.ip:8080  
   - Tips yang ini jangan dilakukan terlalu cepat nanti tidak bisa connect sendiri
     Langkah amanya tiap perubahan ping dst
     Dan paling tidak setting port2 yang terbuka untuk ip privatenya supaya kita bisa remote           
-----------------------------------------------------------------------------------------------------------
	     

       
SETTING MIKROTIK DASAR	

Kalau kita beli mikrotik di awal tidak langsung bisa di koneksikan, kita mesti config terlebih dahulu
saat kita daftar ISP biasanya kita di kasih IP dari ISP namun IP untuk jaringan lokal kita (LAN)
Kitalah yang tentukan ip private nya ada 3 range yang bisa kita pilih
10.0.0.0/8
172.16.0.0/12
192.168.0.0/16

Untuk tool nya bisa pakai winbox atau web base / webfix milik mikrotik bersangkutan
Kita sekarang pakai winbox aja colokan kabel confignya menggunakan kabel utp rj45 biasa
Di port 2 sampai 10 bisa kalau punya 10 port. Port 1 nya untuk isp 
dan pertama kali masih di protek oleh mikrotiknya



Tapi untuk lebih wizardnya ganti pakai saja dengan 10. 0. 0. 0/24 ini cukup untuk 256 client
- Koneksikan dengan laptop di ether selain 1, sebab di protek oleh pabrik untuk ISP
- gunakan remote mikrotik dengan winbox download yng dulu terbaru atau remot via web alamatnya:
- setelah terkoneksi buka aplikasi winbox dan tampilkan connect to, login, password
	- connec: to pilih MAC address untuk keperluan setting, boleh ip adress tapi lebih disaran
	kan untuk setting di MAC saja (kalau sudah tersetting dan akan beroperasi maka 
	lakukan login dengan koneksi via IP lebih di sarankan supaya tidak putus nyambung)
	- login: default admin
	- password: kosong
	- connect
- akan terbuka halaman awal yang menampilkan default config (IP adress tadi berasal dari sini)
- untuk memulai config ini harap di hapus saja alasanya kita belajar config dari nol saja lagian 
kalau kita biarkan tidak di hapus malah beresiko bentrok dengan konfig kita sendiri 
- caranya klik remove configuration -> tunggu reboot sesaat -> login - > reconect
- maka sudah bersih confignya. Sekarang eteher satu sudah tidak di blok lagi namun tetap jangan
Di gunakan sebab biasanya kita gunakan untuk connect ke sumber

1 GANTI PASSWORD
- lakukan ini dulu karena ip public dari ISP langsung bisa kena attact dari orang jail
- caranya : sistem -> user -> bikin user baru klik + -> nama aqil - > group full -> password isikan ->
-> admin default nonaktifkan dengan klik tombol x. 
- sekarang login ulang dengan user password baru "aqil" 
- jangan sampai lupa ini kalau lupa semua config harus rela di hapus semua

2 GANTI NAMA 
- nama ini sebagai nama MIKROTIK yanagb akan tampil saat login dan tampil di top bar
Atau pas di remote
- caranya : sistem - > identity -> nama nya ROUTER-UTARA 

3 INTERFACE
Kita tahu ada beberapa ether di mikrotik kita (1-10 misalkan sesuai type)  
Nah yang ether 1 itu biasanya di gunakan untuk ISP kalau maunya 3 ISP di gabung
Ya alokasikan 1, 2, 3 untuk ISP WAN, Selebihnya gunakan sebagai LAN

Di interface ini kita perlu menentukan PORT mana yang akan kita gunakan untuk
WAN yaitu ambil sumberdaya internet, dan menentukan mana yanag akan kita konsumsi
Sumberdaya untuk LAN, WAN KELUAR dan LAN MASUK 

4 BRIDGE dan PORT
Trik untuk agar lebih fleksibel jangan setting 1 per 1 tiap port nya secara mandiri
Melainkan masukkan port ke dalam bridge(wadah/rumah). Supaya saat ubah konfig
Maka cukup bridgenya saja yang di setting tidak harus semua port 

Cara bikin bridge : bridge - >tab bridge -> +(add) -> nama misal: bridge-WAN (wadah untuk port2 dari ISP) -> OK
Cara masukan port ke bridge: bridge -> tab ports  -> + -> interface: ether 1 misalnya -> bridge pilih bridge-WAN tadi yg di buat -> OK

Setiap profider memberi sambungan ke kita sebagai klien berbentuk macam2 type client
Bisa (automatic)DHCP, (ada juga static) hotspot, access point, PPPoE dll

5 CLIENT DHCP(automatic)
Sekarang asumsinya type client DHCP ya
Caranya: IP -> DHCP Client -> add -> pilih interface bridge-WAN tadi(jangan ether 1 lagi 
sebab sudah dimasukan ke bridge, meskipun mungkin bisa) -> tunggu status bound(artinya kita dapat IP dari ISP)

Sekarang lihat IP nya : IP -> Address -> pada adress list kita bisa mmelihat 
Ada IP yang di berikan dari ISP dan interface nya ada di bridge-WAN bukan di port ya
 
Sekarang kita cek dulu sudah connect belum gateway nya (gerbang internetnya)
Caranya :IP -> routes -> pada route list ada gateway -> 10. 10. 10. 1 -> ini sebagai akses masuk ke internet
Coba test sekarang 

caranya : terminal :> ping 10. 10. 10. 1 - > jika konek ada response
Ketik escape untuk mengakhiri
Atau ping ke google langsung bukan hanya internet gateway saja 
:> ping 8. 8. 8. 8 jika ada respons berarti roter ini sudah connect internet
Gampang !!!

6. CLIENT STATIC manual
Tadi yang di atas kan connect client ke server ISP menggunakan DHCP Client (automatic dapatkan IP nya)
Sekarang kita coba yang manual, namun sebelum melakukan yang manual non aktifkan dulu connect DHCP clientnya
Yang sudah kita bikin tadi

Caranya: IP -> DHCP Client -> pilih di list -> disable -> X 
Maka kayak IP adress yang tadi diberikan oautomatik jadi hilang -> cek -> IP -> Address

- saat kita daftar ISP profider kita dapat info tentang IP public, gateway, DNS
- buat IP address baru manual: IP -> address -> pada contoh 0. 10. 10. 200/24
-> lalu interface pilih : bridge-WAN -> apply -> OK  
Sekarang kita sudah punya sambungan -> ke internet -> coba buka terminal
:> ping 10. 10. 10. 1 (yaitu gateway sambungan yang kita dapatkan dari ISP tadi)
-> jika ada respons maka jalan tersambung namun masih belum punya gateway belum bisa akses "internetweb"
internet sudaah tersambung namun belum bisa akses web
Sekarang kita setting gateway, caranya: IP -> routes -> add -> destination address biarkan default 0. 0. 0. 0
-> klik gateway  10. 10. 10. 1 (dari gateway yang di peroleh dari DHCP tadi)
Oya IP dan gateway bukan karangan, dia harus tanya dari ISP nya 
 nah setelah ada gateway maka sudahg bisa akses web, caranya: 
 :> ping 8.8.8.8 ke google sudah bisa tembus ke google gateway, tapi masih belum bisa browsing
 Sebab belum punya DNS. 
->Maka kita bikin DNS dulu, caranya: IP -> DNS -> server = 10. 10. 10. 1 (didapat dari ISP)
 (kok mirip dengan gateway ya itu dalm contoh) kita juka dapat menambahkan server lebih dari satu DNS public seperti 8. 8. 8. 8
 Tapi kalau slot DNS tidak terpakai ya jangan lupa di tutup kembali. 
 Router ini memiliki configurasi DNS untuk melayani LAN jaringan di bawahnya maka aktifkan (centang)
 Allow remote request agar AP di bawah tidak usah memanggil di atas nya lagi cukup di DNS laptop ini di arahkan ke IP router ini saja
- sekarang coba akses DNS google sudah bisa, terminal :> ping google.com -> maka ada respons 

KONFIG LAN

Tipsnya untuk PORT konsumen (pengguna)/LAN kita bungkus di dalm bridge juga
seperti halnya PORT WAN. Jadi kita bikin bridge baru untuk LAN caranya
Bridge -> tab bridge -> add -> name bridge-LAN (penamaan terserah)  -> lalu
Masukkan port yang di tuju ke bridge-LAN dalam hal ini port 2 yang sedang kita pakai 
Koneksi konfigurasi ini sekarang -> OK dan reboot (untuk pindah jalur dari port ke bridge)
 
Untuk bridge-WAN dan bridge-LAN sekarang sudah memiliki masing masing 1 port
In dan out sekarang kita bisa menambahkan port2 lainya kedalam Bridge tersebut
Misalnya port 123 kita masukan ke bridge-WAN sedang 45678 kita masukan ke bridge-LAN
Kita juga bisa masukan wlan ke bridge-LAN ini, caranya sda pilih bridge-LAN 

Config IP address untuk bridge-LAN
Cara memberi IP address bridge-LAN 
Buka daftar IP yang kita miliki baik untuk LAN maupun yang WAN caranya 
IP -> address ->  di dalam list adress kita sudah memiliki IP untuk bridge-WAN 
sekarang tambahkan yang untuk bridge-LAN -> caranya -> klik ADD -> masukan address
Misalnya 192.168.1.1/24 (ip harus uniq ya) -> interface : bridge-LAN  (jangan di portnya)

Setelah kita config port untuk LAN saatnya kita jadikan port2 tersebut manjadi server untuk di konsumi
Oleh pengguna di bawahnya (AP di LAN) -> untuk cara otomatis nya kita buatkan server DHCP(agar bagi jaringan bisa otomatis, 
caranya:
IP -> DHCP server -> tab DHCP Setup  -> pilih bridge-LAN (jangan kebalik) next2 ok jadi secara wizard
Tapi kalau mau setting sendiri ya "range starnya" boleh di lompati 10 angka untuk persiapan perangkat lain jg bisa
Gateway sudah benar dll, DNS pakai rooter punya 10. 10. 10. 1 atau 192. 168. 1. 1 atau 1. 10 juga bisa 
Yang jelas DNS ini untuk di berikan kepada klient. Next -> OK 

sekarang laptop atau perangkat penerimanya sudah diberikan IP otomatis sesuai range yang kita berikan
Coba buka network dan periksa ip di laptop

Coba ping laptop ke router :> ping 192. 168. 1. 1 (IP LAN kita) harusnya ada response 

Berikutnya agar kita dapat terhubung ke internet maka butuh firewall NAT maskurade
IP -> firewall -> NAT -> add -> out interface -> bridge-WAN ->  
Pada tab action ->  pilih masquerade -> apply -> OK 

Sampai disini sudah connect, coba:> ping 8. 8. 8. 8 ke google

Sekarang tinggal best practice : seperti QoS (limiter), 
Tekan queues -> pada queue list klik add -> nama biarkan -> target IP laptop tujuan
-> 192.168.1.254  (ip laptop tergenerate diatas) isi max dan min limit. Lebih lanjut bab QoS

Security
Pada IP -> services -> ada list  ada port yang ada di mikrotik terbuka dan dapat diremote dari port manapun dari LAN atau WAN
Oleh karena itu disable bagian yang tidak di gunakan 
Sisakan www, winbox, ssh 
Atau bisa di hidupkan pada ip tertentu saja : dklik -> available from isikan ip target 
Dan tambahkan ip local private nya juga 192. 168. 1. 0/24 jangan di kosongkan nanti malah di perboleh kan semua jadinya

Terus www nya juga edit ke Ip local yang sama -> lalu port 80 kita ubah jadi 8080 ->
Nanti kalau remote tinggal www.ip:8080 

Tips yang ini jangan dilakukan terlalu cepat nanti tidak bisa connect sendiri
Langkah amanya tiap perubahan ping dst
Dan paling tidak setting port2 yang terbuka untuk ip privatenya supaya kita bisa remote

CONFIG WIRELESS BAWAAN MIKROTIK JIKA ADA

Wireless -> dklik wlan1 -> tab wireless -> mode ap bridge ->  band 5 ghz misalnya nanti wlan2 yang 2 ghz 
Band nya pilih kompatible dg indonesia biasanya rangenya sempit antara: di mikrotik 51 - 58 bisa semua
Tapi kan perangkat yang terdaftar di indo seperti: laptop, HP dll. kan hanya di range 5725 5825
Ambil contoh 57851

Namun sebelum itu harap bikin sekurity dulu di wifi kembali ke wireless tables -> tab security -> add ->  
name -> isi pass di wpa pre-shared key:
Sekarang kembali lagi pada settingan di interface wlan1 tadi -> aktifkan mode advance -> security profile ->
Pilih profile security yang telah kita buat -> enable -> apply -> OK 
Maka sekarang wifi sudah terproteksi dengan password 

Berikutnya kita config juga wlan2 dengn 2,5 ghz, langkahnya mirip saja 
Hanya saja pada SSID tambahkan angka "2" dibelakang agar membedakan mana yg 5 ghz dan 2 ghz aja

CLIENT PPPoE

Pada provider ISP kadang memberiikan tipe coneksi client dengan PPPoE
Biasanya kita diberi user name dan password
Cara setting port WAN nya sbb:

Interface -> add ->  PPPoE client -> pada interface pilih bridge-WAN 
Pada tab dial out  -> isikan user dan pass dari ISP -> centang use DNS jika kita menggunakan DNS di WAN nya -> OK 
Maka pada port sudah R artinya running -> pada IP -> address kita sudah memiliki IP baru juga

Sedang bridge-WAN nya harus kita disable -> alasanya kalau kita sudah menggunakan PPPoE maka 
Sudah tidak perlu pakai DHCP atau static atau dinamic Client lagi pilih saja salah satu nya

Cek koneksi terminal :>ping 8. 8. 8. 8 harusnya ada response
Tapi saat ping di terminal laptop kok gak connect -> buka terminal milik windows dan ping 8. 8. 8. 8 tidak ada respon
alasanya masquerade nya belum -> sebelumnya pada bridge-WAN kita sudah atur masquerade -> karena WAN nya 
Sekarang pindah type dari DHCP jadi PPPoE maka masquerade nya harus kita buat baru lagi yang untuk PPPoE ini
Yang lama di disable aja

Firewall -> NAT -> add -> out interface isi pppoe-out1 -> action -> masquerade -> apply -> OK
Sekarang sudah siap ping 8888 di terminal laptop. 
Jadi kalau kita nanti kembali ke bridge-WAN lagi masquerade nya harus kita sesuaikan lagi gitu

BRIDGE HOTSPOT
Agar kalau sambungan kita punya login page seperti di voucher dan langganan rumahan di RT RW net
Maka yang sering kita gunakan Bridge hotspot ini. caranya:

bridge -> add -> name bridge-HOTSPOT
Pada tab port nya kita masukkan ether 10 misalnya isi port dan interface bridge nya -> sekarang kita dah punya bridge
Saatnya setup hotspotnya, 
Caranya : IP -> hotspot -> hotspot setup -> pilih interface -> next2 finish sda 

TIPS BRIDGE

Kalau kita mau tukar2 port dari LAN biasa atau HOTspot kita tinggal gonta ganti interface nya saja pada port nya 
Ini sangat flexible : interface - > tab port - > dklik port yang ber sangkutan
Kalau kita sudah punya bridge masing2 typenya kita mau masukan baru atau tukar type pada ether sangat flexible
Usahakan koneksi winbox di awal pakai mac address untuk config awal saja selanjutnya pakai IP adress karena terjamin kesetabilanya
Update software yang sudah di setting : sistem -> package -> chec for update -> jika ada download install 
   

==============================================================================
DNS tercepat di rhea 
Cloudflare
1.1.1.1
1.0.0.1
– CF Family Anti Malicious Content
1.1.1.2
1.0.0.2
– CF Family Anti Malware and Adult Content
1.1.1.3
1.0.0.3
Google
8.8.8.8
8.8.4.4
OpenDNS
208.67.222.222
208.67.220.220
Quad9
9.9.9.9
149.112.112.112
– Quad Nine Secure
9.9.9.11
149.112.112.11
Secured w/ECS: Malware blocking, DNSSEC Validation, ECS enabled.

– Quad Nine Unsecure
9.9.9.10
149.112.112.10
Unsecured: No Malware blocking, no DNSSEC validation (for experts only!)

Level 3 DNS
4.2.2.1
4.2.2.2
4.2.2.3
4.2.2.4
4.2.2.5
4.2.2.6
AdGuard
94.140.14.14
94.140.15.15
Neustar UltraDNS
64.6.64.6
64.6.65.6
Yandex DNS
– Yandex.DNS Basic
77.88.8.8
77.88.8.1
– Yandex.DNS Safe
77.88.8.88
77.88.8.2
Yandex DNS Safe: Protection from infected sites, fraudulent sites, and from bots.

– Yandex.DNS Family
77.88.8.7
77.88.8.3
Yandex DNS Family: Yandex.DNS Safe + blocking adult sites and advertising, with Family Search.

Freenom World DNS
80.80.80.80
80.80.81.81
