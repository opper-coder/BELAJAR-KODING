MIKBOTAM
------------------------------------------------------------------------------

=================================
ini tidak dipakai pernah daftar disini
MIKBOTAM LOGAM ID
nama: admin9999
pass: admin8888

✳ Winbox   : vr1.logam.id:2112
✳ Forward 1: vr1.logam.id:3112
✳ Forward 2: vr1.logam.id:4112
=================================

Setelah mikrotik sudah di konfigurasi dasar, hotspot, pppoe, time, 
dapatkan konfig dan data di bawah ini 

=================================
VPN DDNS SEKARANG
suryatam@mytunnel.id = id-2.hostddns.us:10347  8074
suryatik@mytunnel.id = id-2.hostddns.us:10346  7273
=================================

------------------------------------------------------------------------------
Daftar Isi:
- persiapkan data di notepad/sublime
	- milubot 	: caritahu ID telegram
	- botfather : bikin bot untuk mikbotam
	- mikrotik  : data koneksi ke mikbotam
- dasboard langganan MIKBOTAM
	- daftar dan beli layanan
- DDNS 
	- login > 
	- beli VPN dengan port koneksi di mikrotik  
	- instalasi scrip dari ddns ke mikrotik 
	- konfig mikrotik agar VPN tidak mudah macet
- setting koneksi mikbotam - mikrotik - telegram
	- isi parameter data yg di persiapkan ke mikbotam
------------------------------------------------------------------------------

PERSIAPAN DATA
------------------------------------------------------------------------------
buka telegram dan cari name di bawah ini
"milubot" atau "miluserverbot" telegram gambar bunga dan ada data "rhea vlog"
	/start
	/info
	dikasih data berikut
	---
	ID TELEGRAM ANDA : 829979995  (data dipakai)
	CHAT ID INI : 829979995 (tidak ---)
	NAMA ANDA : Sony Harsono (tidak ---)
	USERNAME ANDA : aqilizza (data dipakai)

lalu buat bot di botfather
	/start
	/newbot
		nama: suryabot
		username: surya_hotspot_bot
		token: 7029769985:AAFFChV4NHXus98vF8h9OTu6AXuYPj3K5P8

data mikrotik
	identity: Surya-Hotspot
	dns hotspot: link.net (untuk qrcode)
	user : administrator1212
	pass : passmikro

----------------------------------
login ke rumahmitha.com, lalu input data di dashboard LANGGANAN
	name: soni harsono
	user: sony
	pass: 
		admin8888, 
		admin9999,
	- top up pakai dana
	- beli product mikbotam
	- tunggu hingga proses selesai
	kita di kasih link DASHBOARD MIKBOTAM 
	login:
	user: mitha
	pass: admin8888
----------------------------------
login ke hostddns.us 
	first: sony 
	last: sola
	---
	user: sony1212
	pass: admin9999

	beli coin
	buat vpn remote
	tab VPN remote

		- order VPN (bukan order DDNS)
			- user: secret 
			- pass: secret
			- port: samakan dengan service API mikrotik

		- order dua buah: untuk mikrotik dan mikbotam
		- lalu masuk ke tab list VPN 
			- ada dua produk pesanan kita tadi klik manage > di kasih scrip masing2
			- kopas di terminal mikrotik masing2 VPN > enter > amati di interface akan muncul interface baru dari ddns dan flag R 
		 	- biasanya akan mati R nya maka ini tidak bisa connect untuk mengatasinya
		lihat "documentasi ddns" resmi ada cara menangani nya sbb: 

		- tools > netwatch > add 
		tab HOST
		- host: [IP VPN server IP public]
		- interval: 30-60 detik
		- timeout: 1000 ms
		tab UP script:
			:log warning "sudah up kembali"
		tab DOWN script:
			/interface disable [nama INTERFACE] (misal:  panda@mytunnel.id, IP VPN CHR cloud kita)
			/interface enable [nama INTERFACE] (misal:  panda@mytunnel.id, IP VPN CHR cloud kita)

		cek di github ku: mikrotik/remote

----------------------------------	
Telegram
- cari botfather atau @botfather yang ada badge biru 
- start
- /newbot
- kirim "namabot bebas satu kata" dan "userbot harus pakai kata bot di belakang"
- jika berhasil kita di kasih link bot, dan API Tokenbot ini masukkan ke parameter di 

----------------------------------	
KONEKSI MIKBOTAM DASHBOARD
	- login
	- isi parameter berikut
		ip mikrotik: ddns mikrotik
		port: ddns port sebelahnya
		user: administrator1212
		pass: pasmikro

		test koneksi jika sudah benar maka CONNECTED
		---
		dns hotspot: link.net
		routername: identity
		---
		data telegram dari botfather (dibawah nanti) inputkan juga
		maka konfig koneksi telegram akan terbentuk > nanti kita enablekan service telegram dengan webhook di bawah 

- jika sudah dinputkan semua data yang sudah di siapkan maka DASHBOARD sudah dapat dibuka
	dan langsung menginformasikan data terkait
- aktifkan bot telegram di mikbotam webhook
	tab setting webhook > klik set webhook > akan ada tampilan info webhook, berarti tinggal test response telegram
----------------------------------
TEST TELEGRAM BOT

- cari username yang diberikan tadi berupa link surya_hotspot_bot di contact telegram
- ada response 
	"selamat datang ADMIN"
- /my bot
- pilih: surya_hotspot_bot
- /editpic	: gambar contact bot
- /editcommand : 

	kirim pesan dibawah ini (beserta enter dan bagian kanan huruf kecil semua)
	
================================
	menu - VOUCHER
	ceksaldo - Sisa saldo
	deposit - TopUp saldo
	cekvcr - Status vocer
	help - Lainya ->
================================

----------------------------------	
selanjutnya

- cari @surya_hotspot_bot
- start
- /daftar (yang pertamakali daftar adalah admin)
- /daftar (yang daftar berikutnya menunggu verifikasi dari admin, dan menjadi reseller)
- /deposit (isi saldo dulu sebagai admin, reseller akan butuh verifikasi admin) 
- /menu (saat kita sudah membuat profil voucher dan template voucher di tab setting maka daftar harga akan terlihat di telegram)
- pilih paket akan muncul voucher

------------------------------------------------------------------------------ 
BIKIN PROFIL DAN TEMPLAT-VOUCHER
- /hotspot/profil
	jelaskan nanti
- /setting/voucher
	jelaskan nanti

------------------------------------------------------------------------------
CETAK DAN GENERATE VOUCHER
	bikin role code voucher mandiri, walau sharing profile bersama template-voucher 
	
