MESSAGE BROKER
 	kasus:
 		kita punya 2 aplikasi mandiri "order" dan "notifikasi"
 		2 aplikasi tersebut berhubungan dan saling menggantungkan
 		jika mati satu maka yang lainya ikut mati
 		untuk mengatasi itu di butuhkan "aplikasi perantara"
 		yaitu "massage broker"

 	bagaimana karakteristiknya dan plus minus
 		- "sifatnya kirim dan lupakan" / kalau tidak pakai ini kan "kirim dan tunggu response"
 		- s
 		- plus:
	 		- tidak ketergantungan -> saat salah satu aplikasi terganggu lainya masih nerjalan normal
	 		- maessage broker akan menampung semua pesanan dari order yang akan di kirimkan 
	 			nanti secara bersamaan saat notifikasi berjalan normal
	 		- load balance -> saat satu node lambat yang lainya tetep cepat -> sebelumnya semua ikutan lambat
	 		- 
	 	- minus:
	 		- apabila aplikasi massage broker ini bermasalah maka semua 
	 		  node yang berhubungan akan ikut  bermasalah
	 		- saran saya adalah jangan sampai kita pakai aplikasi yang buruk
	 		- untuk saat ini pakai APACHE KAFKA dan RABBITMQ  

SERVICE DISCOVERY
	ada folder presentation "service discovery"
	slide1
		sebagai contoh kasus kita punya 3 node service
	slide2
		normalnya clien akan request ke 1 -> 2 -> 3
	slide3
		tapi order service lemot karena banyak request order service kwalahan
		maka double kan node service
	slide4
		namun problemnya siapa yang ngatur 
		node mana yang harus di request maka gunakan:
	slide5
		proxi server= dia yang ngatur "load balancer" dan "list service"
	slide6
		aplikasinya namanya Nginx, Apache HTTPD, HaProxy 
	slide7
		tapi sekarang node ke 3
		juga mengalami kwalahan
	slide8
		maka bikin juga node ke 3 juga doble node tapi masalahnya:
		proxy server yang jadi kwalahan sekarang :
	slide9
		maka proxy server juga kita buat pada masing2 service
	slide10
		tapi bagaimana kalau salah satu proxy server mati maka
	slide11
		kita duplikat juga proxy servernya
	slide12
		tapi sekarang semua node service dan registri menjadi banyak solusinya:
	slide13
	 	kita bikin service discoveri 
	slide14
	 	yaitu kita bikin "kode list service" di setiap servicenya 
	slide15
		tapi bagaimana kalau ada double service salah satunya mati maka biar mati akan kena request terus
	slide16
		belum lagi kalau satu service menerima request lebih dari 1 service 
	slide17
		maka gunakan service registri
	slide18
		ada consul eureka
	slide19
		sekarang semua service akan langsung request ke service nya langsung namun
		untuk "list service" saja, tidak untuk "load balancer"
	slide20
		keuntunganya jika ada salah satu double service mati kita sudah tidak di request lagi
	slide21
		karena ada sistem cek kesehatan service
	slide22
		tantangan nya "load balancer" kita buat di klien
	slide23

JSON WEB TOKEN (JWT)
	slide1
		dulu aplikasi itu di buat secara monolithic
	slide2
		sekarang mengarah beralih ke microservice
	slide3
		tapi yang menjadi kesulitan adalah cara memecah aplikasi, 
		referensi lihat di "ddd"
	slide4
		dulu aplikasi di bedakabn dengan url
	slide5
		sekarang di bedakan dengan service
	slide6
		namun pada service bagaimana menangani session user dll ???
	slide7
		di JWT ada service sentralisasi session dan di konsumsi mirip session
	slide8
		tapi sentralisasi ini membuat nya berat maka di buatlah cookies
	slide9
		namun cookies itu harus di buat disisi clien kayaknya maka:
	slide10
		dibuatlah penyimpanan session ini di database
	slide11
		db nya di HD bisa pakai my sql dll
	slide12
		atau di RAM menggunakan redis
	slide13
		JWT itu apa ??? 
	slide14
		adalah standard RFC 7519
	slide15
		cari website resminya
	slide16
		yaitu: metode standard untuk pertukaran data antara dua titik secara aman 
	slide17
		apa itu token adalah kode id ditulis secara random string dari string JSON
	slide18
		JWT adalah token terdiri dari header, payload, signatur(scret key)
	slide19
		header : token berisi base64 (algoritma: HS256, type: JWT) 
	slide20
		payload : (base64) berisi array data komunikasi (nama dan service) 
	slide21
		cara kerjannya user login -> lalu masukkan ke session service -> lalu masukkan 
		ke 
		method penerimanya tinggal pakai ini.
	slide22
		kekurangannya adalah : sedikit berat tapi kelebihan lebih banyak 
	slide23

	slide24

DATABASE SCALING
	kalau data base kalau masih kecil nggak ada masalah tapi kalau dah besar
	maka rawan; lemot, korupt, perawatan dan masalah lainya

	ada 2 cara mengatasinya yaitu 
		vertikal : yaitu nambah/ kapasitas ram hdd dan prosessor 
			contoh : 1 tera sudah lemot upgrade hardware saja
		horizontal : nambah node PC 1 tera jadi 4 PC "SHARDing"
			tapi problemnya: ROUTING, SEARCH, PAGING, NODE GAGAL(mati), REPLIKASI
			DATA, 
			untuk menangani ini jangan menggunakan cara manual pasti akan sangat berat
			dan jangan juga dilakukan oleh logic aplikasinya juga berat
			sebaiknya lakukan di databasenya, contoh data base 
			yang bisa nangani masalh di atas adalah: mongoDB, CASSANDRA, dll
			data 
			CACHING; kalau nembak langsung ke db itu lama karena hardis 
			maka solusinya kita bikin di antara mesin dan db caching agar ke memori namun masalahnya 
			ram itu terbatas 
			contoh : 1 tera bagi 4 jadi 250 gb jadi cepat 

API GATEWAY
	dulu: 
		system: dibuat berdasarkan platform web, desktop, mobile
		dan logicnya di buat langsung di clienya
		managemen informasi di buat berdasarkan URL
	sekarang:
		system:
			logicnya kita buat sesuai dengan jumlah servicenya dan 
			logicnya kita buat di backend ini untuk siap di konsumsi oleh front end manapun
			managemen informasi sekarang di tangani oleh 'proxy server' atau 'service registri' atau kode 'list service manual'\
			dan inilah yang kita gunakan disebut implementasi sistem API GATEWAY
			disini yang di lakukan biasanya:
				routing
				centralisasi authentikasi
					- supaya tidak nulis berulang di tiap node service
					- beda platform beda system; session, allout dll
					- autorization roles
					- Rate Limiter / load balancer distribusi dan pengantrian request
					- termasuk mengatur trafic user 10 kali, jangan DDOs
				- orchestrator:  
					misalnya kita mau info inventory dan inventory butuh payee
					kalau serial maka akan ketergantungan nah disini bisa paralel
				- melakukan standar API 
					- konversi standar DATA 
						misalnya: xml, soap, rcp, json, kita konversi jadi JSON semua
				- backend for frontend 
					- ngatur bandwidth,besaran data, jenis api platform. (desktop, mobile, third party)
					- alternatifnya GRAPH QL = tidak usah pakai backend for frontend
		kekurangannya:
			- lebih lambat karena ada layer API GATEWAY

APLICATION SCALING
	scaling vertikal sama dengan di database
	scaling horizontal
		- mudah kalau aplikasi beda dengan di db
			- tinggal tambah node dan tambahin di depanya load balancer, selesai
		- stateless
		- non blocking
		- teknologi reactiveX
			- standar yang hampir semua bahasa program
		- split aplikasi
		- scaling database
		- gunakan tool bantuan
		- optimize code
		- aggressive caching
		- scaling itu di buat saat sudah mulai ada gejala bootlenect

CACHING CACHE
	- adalah menyimpan data sementara di media cepat (RAM)
	- tapi kalau di scaling aplikasi jadi tidak efektive 
		- mengatasinya simpanya di redist atau memcache
	- ttl isu aupdate data kalau aplikasi kita dah scaling
	- delete priority terkait dengan RAM terbatas
	- key : value atau mungkin variabel, array
	- di sarankan mysql punya caching sendiri jangan bikin 
	  manual susah banget dan tidak mungkin

INTEGRASI ANTAR APLIKASI 
	- file sharing db -> manual
		karena alasan koneksi, keamanan public, birokrasi
	- sharing  -> bahaya, jangan utak atik db
		karena aplikasi jadul 
		sharing db ini mestinya harus di gabungin dengan API kalau mau aman 
	- remote procedural invocation -> yaitu API -> yaitu service penyedia membuat method endpoin 
		tinggal nantinya di konsumsi oleh aplikasi pembacanya 
		kelemahanya blocking -> syncronus atau serial antrian data sampai dapat response -> ketergantungan
	- messaging
		kelebihanya fire and forget -> asyncronus -> tidak ketergantungan
		kelemahanya nggak tahu response nya apa
	- keterangan ada di micro service juga messaging dan rpc
	- RPC/RPI = 
		- untuk satu process satu service
		- untuk process yang segera dapat response
	- messaging =
		- untuk order = 1 process nembak 4 services
	-  
DATABASE TRANSAKSIONAL
	adalah : kalau success harus sukses semua kalau gagal juga gagalin semua
	kasus : ada satu transaksi melkukan pencatatan Query 4 ke db kalau 1 gagal maka gagalin semua
	carakerja nontransaksi 4 query : transaksi -> 1 kurangi saldo - 2 kurangi transaksi 3 tambah saldo 4  tambah transaksi
		bahaya nya kalau mati salah satu query eksekusi tetap di jalankan. solusinya:
	transaksional 4 query : bungkus 4 (semua) query diantara: "begin transaksi", dan "kommit transaksi"
		keuntunganya: kalau ada salah satu yang gagal maka semua di gagal kan (roll back) transaksi 

