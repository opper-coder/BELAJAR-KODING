========================================================================================================
RINGKASAN PRAKTEK 
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
    9.ganti identity
    10.user admin password

=========================================================================================================
REFERENSI
1. MASUKAN INTERNET KE MIKROTIK
	1.1 topologi		
	1.2 Clien Server / manual-auto IP
2. MANAGEMEN BANDWIDTH
	2.1 interface
	2.2 sekuriti
	2.3 pembagian bandwidt
	2.4 routing/alokasi ether(port)
	2.5 limitasi 
	2.6 switch function
3. KELUARKAN INTERNET/JARINGAN
	3.1 manual IP
	3.2 auto IP
=========================================================================================================
KONTEN REFERENSI
--------------------------------------------------------------------------------------------------------
	1.1 Topologi
		- di dalam topologi terkandung 3 unsur penting
			1. IP address/alamat/seperti nomor HP
			2. server - client
			3. wiring/net/network
		1. IP adalah alamat di tiap simpul/node 
			1.1- cara penulisan standard 
				- pada dasar nya boleh menggunakan angka manapun di bawah ini untuk pengalamatan IP
				- tapi karena ada standard internasional maka kita ikuti saja Class yang dai tentukan
				- class meliputi ABCDE
				- untuk bermain mikrotik selalu gunakan saja 192
				- 10.0.0.0 (minimal)
				- 255.255.255.255 (maksimal)
				- 172.168.0.0 (untuk jaringan WAN) 
				- 192.168.0.1/22 (untuk jaringan LAN) IPv4 IPv6
				- (untuk jaringan dunia/www)
		2. kalau clien kita dapat jatah IP dari server, sebaliknya server bikin rentang IP /24 dst
		3. media transmisi meliputi kabel, radio, gsm, lampu, kabel PLN, satelit, FO, dsb
		   port meliputi: in, out, ether, vlan, bridge
		
--------------------------------------------------------------------------------------------------------
- praktek:
	1 ISP (boleh dari "indiehome", indosat, telkomsel, TIS)
	2 MIKROTIK
	3 LAPTOP
	4 HTB A/B 
	5 kabel FO
	6 ODP
	7 ROUTER
	  - gonggong 7
			- 10 pengguna
	  - mongsongan 10
			- 11 pengguna
--------------------------------------------------------------------------------------------------------
konfigurasi hardware
	1 pasang ISP di ether1
	2 pasang kabel UTP di ether2 dan sambungkan ke rj45 laptop untuk akses seting
	3 pasang kabel UTP ke HTB A dan nyalakan HTB dengan power
	4 pasang kabel FO ke HTB B
	5 pasang 2 ROUTER dari HTB dengan ODP (lihat di lapangan)
--------------------------------------------------------------------------------------------------------
konfigurasi winbox	
	1 buka winbox > login dengan MAC > user:admin, pwd: "" >
	2 lakukan hapus konfig baawaan > tool > remove config 
	3 bikin bridge dengan nama WAN, LAN, HOTSPOT, RUMAH
	4 bikin client
	5 bikin hotspot
	6 
	
	
	
	
	
=========================================================================================================
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
 Sebab belum punya DNS. Maka kita bikin DNS dulu, caranya: IP -> DNS -> server = 10. 10. 10. 1 (didapat dari ISP)
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
   

