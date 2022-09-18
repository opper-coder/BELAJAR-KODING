===========================================================================================================
PISAH TRAFIK
-----------------------------------------------------------------------------------------------------------
di channel bilhanet ada methode alternative

di bawah ini adalah yang berjalan : 
-----------------------------------------------------------------------------------------------------------
- coba terapkan pisah trafik ini ke dalam bridge (bridge-LAN1)
BUAT BRIDGE
- bridge-ADMIN 		-> ip:192.168.1.1/24
- bridge-HOTSPOT 	-> ip:192.168.2.1/24
- bridge-PPPoE 		-> ip:192.168.3.1/24 
-------------------------------------
jika sudah punya Bridge silahkan skip dan menuju langkah berikut:
-------------------------------------
TAMBAHKAN NETWORK PADA IP ADDRESS LIST
- IP > firewall > tab adress list > add > name: <bikin nama:"LOCAL-IP">  
  > adress: <isi IP bridge yang kita punya td tp start 0 dg slash>
- lakukan ke 3 bridge > isinya : 192.168.1.0/24, 192.168.2.0/24, 192.168.3.0/24
- periksa kenapa start 0?
TAMBAHKAN DAFTAR URL PEMISAHAN
- IP > firewall > tab Raw > add > 
	> tab General > chain:prerouting 
	> tab Advance > src address list: LOCAL-IP (milik kita tadi) 
		> dst address list: LOCAL-IP jg dan juga centang
		> content:<url web yang di traffic> youtube.com
	> tab Action > action: add dst to address list
		> address list: IP-YOUTUBE
		> Timeout: 01:00:00 (berapa lama IP di simpan:1jam)
	> Ok
TAMBAHKAN DAFTAR URL PEMISAHAN BERIKUTNYA (KOPI)
- IP > firewall > dklik pada daftar teratas > klik tombol Copi <agar tidak setting ulang dr awal>
	> tab advanced > Content: <isikan url lainya> > apply
	> lakukan untuk setiap url yang di pisah
	> beri keterangan (komentar (berfungsi sbg judul)) > tombol komen > YOUTUBE (kapital)
	> dibawah ada banyak daftar kontent url silahkan masukkan 1 per 1
MANGLE 
- bikin network:
- IP > firewall > tab mangle > add > tab
	> general > chain: prerouting
	> advanced > src addresslist: LOCAL-IP > Dst addresslist: IP-YOUTUBE (pilih conten)
	> action: mark connection > new conn mark: beri nama 'koneksi-youtube' > "cek passtrough" > ok
- Bikin paket:
	> general > chain: forward > connection mark: 'koneksi-youtube' (tadi di buat)
	> action > action: mark packet > new paket mark: beri nama 'paket youtube' > "uncek passtrough"
- di mangle konektion dan paket youtube sudah berhasil di buat (akan terlihat di daftar)
  lakukan pada paket dan connection lainya dan berikan kometar tombol kuning untuk setiap paket
MENGUJI KONEKSI DAN PAKET
- IP > firewall > address list > lihat daftar akan di tambahkan ip saat langkah berikut di lakukan
- buka youtube di browser
- artinya saat URL di akses maka akan di buatkan adress list disini

-----------------------------------------------------------------------------------------------------------
URL

YOUTUBE

youtube.com
googlevideo.com
ytimg.com

SOSMED

whatsapp.com
whatsapp.net
fbabx.com
fbcdn.net
instagram.com
cdninstagram.com
line.me
naver.jp
line-scdn.net ???
spotify.com
joox.com
langitmusik.co.id
resso.app
vidio.com
iflix.com
.twitter.com
.twimg.com

TIKTOK BIGO

bigo.ag ???
tiktokcdn.com
tiktoktv.com
tiktok.com

MARKET PLACE

shopee.co.id
shopeemobile.com
content.garena.com

GAME

cari lagi untuk
PUBG
mobile legend 
dll

-
ZOOM
-
REMOTE
-
lanjutkan nanti ada di video ada daftar nya
-----------------------------------------------------------------------------------------------------------
SKRIP RAW
- saat masukan RAW butuh waktu lama maka dari pada lama jalan kan scrip di bawah ini
- saat masukan RAW di IP > firewall > tab Raw >  jalankan NEW TERMINAL DAN copas script di bawah 
-----------------------------------------------------------------------------------------------------------

# IP LOCAL-IP YANG ADA DI MIKROTIK
/ip firewall address-list
add address=192.168.0.0/24 list=LOCAL-IP
add address=192.168.1.0/24 list=LOCAL-IP
add address=192.168.2.0/24 list=LOCAL-IP



# IP RAW UNTUK PISAH TRAFIC YOUTUBE , CHAT, GAME, MEETING, UMUM & SOSMED
/ip firewall raw add action=add-dst-to-address-list address-list=IP-YOUTUBE address-list-timeout=1d chain=prerouting comment=YOUTUBE content=.youtube.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-YOUTUBE address-list-timeout=1d chain=prerouting content=.googlevideo.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-YOUTUBE address-list-timeout=1d chain=prerouting content=.ytimg.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-GAME address-list-timeout=6h chain=prerouting comment="MOBILE LEGENDS" dst-address-list=!LOCAL-IP dst-port=5001-5099,5501-5520,5551-5559,9000-9010,9443,10003,30000-30221 protocol=tcp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-GAME address-list-timeout=6h chain=prerouting dst-address-list=!LOCAL-IP dst-port=5001-5059,5501-5512,5105-5109,9992,30000-30220 protocol=udp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-GAME address-list-timeout=6h chain=prerouting comment="FREE FIRE" dst-address-list=!LOCAL-IP dst-port=6006,6674,7006,7889,8001-8012,9006,10006,10012,11006,12006,13006,39003,39698,39800 protocol=tcp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-GAME address-list-timeout=6h chain=prerouting dst-address-list=!LOCAL-IP dst-port=2000,6006,6008,7008,8008,9008,10001-10008,10012,10100,11008,12008,13008,20001 protocol=udp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-GAME address-list-timeout=6h chain=prerouting comment=PUBG dst-address-list=!LOCAL-IP dst-port=1400,3013,8082,9001-9035,17000,17500,18081,20000-20002,20371 protocol=tcp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-GAME address-list-timeout=6h chain=prerouting dst-address-list=!LOCAL-IP dst-port=3013,8081-8090,9030-9031,15692,17000,17500,18081,20000-20002,20371 protocol=udp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-GAME address-list-timeout=6h chain=prerouting comment=COD dst-address-list=!LOCAL-IP dst-port=3013,8013,8085,10000-10020,18082,50000,65010,65050 protocol=tcp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-GAME address-list-timeout=6h chain=prerouting dst-address-list=!LOCAL-IP dst-port=7500-7700,8700,9030,10010-10019,17000-20100 protocol=udp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-GAME address-list-timeout=6h chain=prerouting comment="SAUSAGE MAN" dst-address-list=!LOCAL-IP dst-port=6001,9000,9001,8013 protocol=tcp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-GAME address-list-timeout=6h chain=prerouting dst-address-list=!LOCAL-IP dst-port=8000,50233,58272 protocol=tcp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-GAME address-list-timeout=6h chain=prerouting comment="HIGGS DOMINO" dst-address-list=!LOCAL-IP dst-port=50001-50500,26000-26050,26666 protocol=tcp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-CHAT address-list-timeout=6h chain=prerouting comment="CHAT / VoIP" dst-address-list=!LOCAL-IP dst-port=4244,5222,5223,5228,5242,5349,50318,59234 protocol=tcp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-CHAT address-list-timeout=6h chain=prerouting dst-address-list=!LOCAL-IP dst-port=3478,34784,45395,50318,59234 protocol=udp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-CHAT address-list-timeout=6h chain=prerouting content=whatsapp.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-CHAT address-list-timeout=6h chain=prerouting content=whatsapp.net dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-MEETING address-list-timeout=1d chain=prerouting comment="ZOOM & GOOGLE MEET" dst-address-list=!LOCAL-IP dst-port=3478,3479,5090,5091,8801-8810 protocol=tcp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-MEETING address-list-timeout=1d chain=prerouting dst-address-list=!LOCAL-IP dst-port=3478,3479,5090,5091,8801-8810 protocol=udp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-MEETING address-list-timeout=1d chain=prerouting dst-address-list=!LOCAL-IP dst-port=19305,19302 protocol=tcp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-MEETING address-list-timeout=1d chain=prerouting dst-address-list=!LOCAL-IP dst-port=19305,19302 protocol=udp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-MEETING address-list-timeout=6h chain=prerouting dst-address-list=!LOCAL-IP dst-port=5060,5061 protocol=udp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-MEETING address-list-timeout=6h chain=prerouting content=classroom.google.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-UMUM address-list-timeout=1d chain=prerouting comment=REMOTE dst-address-list=!LOCAL-IP dst-port=5938,6568,7070,2112 protocol=tcp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-UMUM address-list-timeout=1d chain=prerouting dst-address-list=!LOCAL-IP dst-port=5938,6568,7070,2112 protocol=udp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-UMUM address-list-timeout=1d chain=prerouting content=anydesk.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-UMUM address-list-timeout=1d chain=prerouting comment=MARKETPLACE content=shopee.co.id dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-UMUM address-list-timeout=1d chain=prerouting content=shopeemobile.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-UMUM address-list-timeout=1d chain=prerouting content=content.garena.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-UMUM address-list-timeout=1d chain=prerouting content=cdngarenanow-a.akamaihd.net dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-UMUM address-list-timeout=1d chain=prerouting dst-address-list=!LOCAL-IP dst-port=20443,12030 protocol=tcp src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-UMUM address-list-timeout=6h chain=prerouting comment="APPS UMUM" content=snackvideo dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-UMUM address-list-timeout=6h chain=prerouting content=like.video dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-UMUM address-list-timeout=6h chain=prerouting content=likeevideo dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-UMUM address-list-timeout=6h chain=prerouting content=bigo.sg dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-UMUM address-list-timeout=6m chain=prerouting comment=PLAYSTORE content=play.google.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-UMUM address-list-timeout=6m chain=prerouting content=*.gvt2.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-UMUM address-list-timeout=6m chain=prerouting content=*.gvt3.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-UMUM address-list-timeout=6m chain=prerouting content=*.googleapis. dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-SOSMED address-list-timeout=6h chain=prerouting comment=SOSMED content=facebook.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-SOSMED address-list-timeout=6h chain=prerouting content=fbsbx.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-SOSMED address-list-timeout=6h chain=prerouting content=fbcdn.net dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-SOSMED address-list-timeout=6h chain=prerouting content=instagram.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-SOSMED address-list-timeout=6h chain=prerouting content=cdninstagram.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-SOSMED address-list-timeout=6h chain=prerouting content=tiktokcdn.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-SOSMED address-list-timeout=6h chain=prerouting content=tiktokv.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-SOSMED address-list-timeout=6h chain=prerouting content=etslive-2-vidio-com.akamaized dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-SOSMED address-list-timeout=6h chain=prerouting content=iflix.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-SOSMED address-list-timeout=6h chain=prerouting content=viu.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-SOSMED address-list-timeout=6h chain=prerouting content=gcpvuclip-a.akamaihd dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-SOSMED address-list-timeout=6h chain=prerouting content=vuclip-eip-th.akamaized dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-SOSMED address-list-timeout=6h chain=prerouting content=hbogoasia dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-SOSMED address-list-timeout=6h chain=prerouting content=telkomsel.com dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-SOSMED address-list-timeout=6h chain=prerouting content=genflix-prd-uploads.s3.ap-southeast-1.amazonaws dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/ip firewall raw add action=add-dst-to-address-list address-list=IP-SPEEDTEST address-list-timeout=6h chain=prerouting comment=SPEEDTEST content=speedtest dst-address-list=!LOCAL-IP src-address-list=LOCAL-IP
/
	
-----------------------------------------------------------------------------------------------------------

	
	
/*
PISAH GAME DARI B ILHANET
-----------------------------------------------------------------------------------------------------------
dari bilhanet kita di kasih 2 paramater untuk satu koneksi dan lakukan penyetingan 2 langkah:
- koneksi mobile legend:
	- tcp : xxxx
	- udp : xxxx
1. langkah pertama:
mangle > add > general
		chain: prerouting
		protocol: tcp
		dst port: copas tcp dari bilhanet
	action  >
		action: mark connection
		new connection mark: kasih nama (misalnya: "game") 
		pastrought: cek
		comment: mobile legend
2. langkah kedua:
mangle > add > general
		chain: prerouting
		protocol: udp
		dst port: copas udp dari bilhanet
	action  >
		action: mark connection
		new connection mark: kasih nama (ambil dropdown: "game") 
		pastrought: cek
		comment: mobile legend
-------------------------------------------------------
 https://bilhanet.com/daftar-port-game-online-untuk-mikrotik-firewall/

Beranda » Tutorial » Daftar Port Game Online untuk MikroTik Firewall
Daftar Port Game Online untuk MikroTik Firewall

Bilhanet.com – MikroTik biasa digunakan sebagai alat untuk managemen bandwidth kepada client. Meski sudah dibagi sesuai keinginan, terkadang untuk urusan game online tidak selalu stabil. Nah, salah satu cara meminimalisir lag saat ngegim, berikut daftar port game online untuk mikrotik firewall guna keperluan pisah trafik.

Konten

Daftar Port Game Online untuk MikroTik Firewall
Daftar Port Game Online untuk MikroTik Firewall
Di bawah ini adalah kumpulan port game yang saya gunakan untuk server BILHANET, dan untuk port yang saya tandai warna merah artinya tidak saya pasangkan.

UPDATE 03 Agustus 2022.

MOBILE LEGEND (ML)
tcp: 5000-5221,5224-5227,5229-5241,5243-5287,5289-5352,5354-5509,5517,5520-5529
tcp: 5551-5559,5601-5700,8443,9000-9010,9443,10003,30000-30300
udp: 2702,3702,4001-4009,5000-5221,5224-5241,5243-5287,5289-5352,5354-5509
udp: 5517-5529,5551-5559,5601-5700,8001,8130
udp: 8443,9000-9010,9120,9992,10003,30000-30300
FREE FIRE (FF)
tcp: 6006,6008,6674,7006-7008,7889,8001-8012,9006,9137,10000-10012,11000-11019
tcp: 12006,12008,13006,15006,20561,39003,39006,39698,39779,39800
udp: 6006,6008,6674,7006-7008,7889,8008,8001-8012,8130,8443,9008,9120
udp: 10000-10015,10100,11000-11019,12008,13008
PUBG MOBILE
tcp: 7889,10012,13004,14000,17000,17500,18081,20000-20002,20371
udp: 8011,9030,10491,10612,12235,13004,13748,17000,17500,20000-20002
udp: 7086-7995,10039,10096,11455,12070-12460,13894,13972,41182-41192
CALL OF DUTY (COD MOBILE)
tcp: 3013,10000-10019,18082,50000,65010,65050
udp: 7085-7995,8700,9030,10010-10019,17000-20100
ARENA OF VALOR (AOV)
tcp: 10001-10094
udp: 10101-10201,10080-10110,17000-18000
STUMBLE GUYS
tcp: – (atau bisa diisi sama dengan UDP)
udp: 5055-5058 (atau bisa diisi dengan format manual: 5055,5056,5057,5058)
GENSHIN IMPACT
tcp: 42472
udp: 42472,22101-22102
CLASH OF CLANS (COC) DAN CLASH ROYALE
tcp: 9330-9340
udp: 9330-9340
LEAGUE OF LEGENDS (LOL) MOBILE
tcp: 2080-2099
udp: 5100
DOTA2
tcp: 9100-9200,8230-8250,8110-8120,27000-28998
udp: 27000-28998,39000
FIFA ONLINE
tcp: 7770-7790
udp: 16300-16350
POINT BLANK MOBILE (PB-MOBILE)
tcp: 44590-44610
udp: 40000-40010
LINE LET’S GET RICH
tcp: 10500-10515
udp: –
DREAM LEAGUE SOCCER
tcp: –
udp: 60970-60980
AMONG US
tcp: 27015-27030,27036-27037
udp: 4380,27000-27031,27036

Untuk sementara BILHANET hanya kumpulan daftar port game online tersebut di atas. Untuk anda yang punya port TCP dan UDP untuk games lain, silakan share di kolom komentar ya.

Port Umum Mikrotik
Daftar port umum atau port browsing yang banyak beredar adalah sebagai berikut:

TCP/UDP: 80,81,443,8000-8081,21,22,23,81,88,5050,843,182,53
Untuk versi admin BILHANET menggunakan port umum di bawah ini:

TCP/UDP: 21,22,23,53,80,81,443,853,5353,8000,8008,8080,8081,8090,8443,8888
Catatan: untuk anda yang sudah membuat firewall khusus DNS, sebaiknya kecualikan port 53, 853, dan 5353 dari “Port Umum”!
 */
