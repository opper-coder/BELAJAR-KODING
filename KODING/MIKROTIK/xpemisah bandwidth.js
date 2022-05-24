===========================================================================================================
PISAH TRAFIK
-----------------------------------------------------------------------------------------------------------
di channel bilhanet ada methode alternative

di bawah ini adalah yang berjalan : 
-----------------------------------------------------------------------------------------------------------
- coba terapkan pisah trafik ini ke dalam bridge (bridge-LAN1)
BUAT BRIDGE
- bridge-ADMIN
- bridge-HOTSPOT
- bridge-PPPoE
BIKIN IP MASING2 bridge
- IP > address > add > address: 192.168.1.1/24 > interface:<pilih bridge>  
- lakukan ke 3 bridge 192.168.1.1/24, 192.168.2.1/24, 192.168.3.1/24
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
- IP > firewall > tab mangle > add > tab
	> general > chain: prerouting
	> advanced > src addresslist: LOCAL-IP > Dst addresslist: IP-YOUTUBE (pilih conten)
	> action: mark connection > new conn mark: beri nama 'koneksi-youtube' > "cek passtrough" > ok
- lakukan lagi
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
