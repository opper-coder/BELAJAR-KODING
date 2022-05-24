
===========================================================================================================
PEMISAHAN TRAFIK
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
		> Timeout: 01:00:00 (beraapa lama IP di simpan:1jam)
	> Ok

TAMBAHKAN DAFTAR URL PEMISAHAN BERIKUTNYA (KOPI)
- IP > firewall > dklik pada daftar teratas > klik tombol Copi <agar tidak setting ulang dr awal>
	> tab advanced > Content: <isikan url lainya> > apply
	> lakukan untuk setiap url yang di pisah
	> beri keterangan (komentar (berfungsi sbg judul)) > tombol komen > YOUTUBE (kapital)
	> dibawah ada banyak daftar kontent url silahkan masukkan 1 per 1

MANGLE 
- IP > tab mangle > add > tab
	> general > chain: prerouting
	
-----------------------------------------------------------------------------------------------------------
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
lanjutkan nanti ada di video
