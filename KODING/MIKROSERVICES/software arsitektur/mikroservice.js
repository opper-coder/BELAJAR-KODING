MICROSERVICES

arsitektur mikroservices
	- adalah aplikasi2 kecil yang saling bekerjasama. 
	  (namun biasanya disebut "service" bukan "aplikasi")
	- fokus mengerjakan satu pekerjaan dengan baik 
	- independen, dapat di deploy dan di ubah 
	  tanpa ketergantungan dengan aplikasi yang lain secara server ataupun sistem db dll
	- setiap komponen pada system di buat dalam service
	- komunikasi antar service biasanya melalui network-call
	- ilustrasi gambarb 1
kelebihan
	- mudah di mengerti karena relative kecil ukuran servicenya
	- lebih mudah di develop, di maintain, di test dan di deploy
	- lebih mudah bergonta ganti teknologi/bahasa php golang dll salah satu atau semua
	- mudah di scale sesuai kebutuhan satu atau semua service
	- bisa dikerjakan dalam tim tim kecil
kekurangan
	- distributed system melalui jaringan internet
	- network-call rawan error, masalah transmisi, listrik, latency, 
	- banyak logic untuk koneksi dan port interface
	- testing interaksi antar service lebih sulit karena mesin dan teamnya beda
cara bagi aplikasi gimana
	- biasanya displit berdasar domain bisnis bukan berdasar url
	- saran nya 1 service mnghandle 1 hal
	- atau di split berdasar 1 split bisa di pahami 1 orang
	- bisa di kerjakan oleh x developer. (sesuai jumlah orang develop)
monolith vs microservices
	monolith
		simple
		konsisten
		easy refactor
	microservices
		partial deploy
		availability
		multiple platform
		easy to scale
DATABASE 
	- mysql, oracle, postgre, mongodb
	- database per services harus dimiliki oleh masing2 service g boleh sharing
	- kalau service punya 2 db boleh
	- karena scalable dan simplicity
SHARE DATABASE
	- problem: karena independen bagaimana cara sharingnya
	- migrasi itu susah dari monolith ke microservices lebih baik develop dari awal
	- lakukan hanya saat terdesak saja
NoSQL
	jenis dan pengertian
		- Not Only SQL
		- ber orientasi dokumen = seperti array atau object = yaitu JSON
		- bukan table 
		- basis key : value
		- cepat di memory makanya cache pake ini 
		- colom family database
		- graph database
		- search db/kencang
		- time series database
	contoh
		- mongodb: document oriented database
		- elasticsearch: search db -> pencarian lebih cepat
		- redis: key value
		- apache cassandra: colum families database -> penulisan lebih cepat
		- neo4j:graph db
		- influxdb: time series database 
REMOTE MICROSERVICES INVOCATION
	-
		- komunikasi antar service idealnya paaki RPC remote procedural call. (nama lainya)
		- bukan langsung nembak
		- yaitu bikin API RESTful API, grpc, dll di api 
	- kelebihan
		- sederhana
		- mudah
		- request dan response
		- sync (butuh response)
	- kekurangan
		- kalau nembak 4 service kita akan lama waktunya si akumulasi
		- bisa double call walau isinya sama
		- kalau paralel sangat rumit, belum lagi kalau gagal salah satunya
	- kegunaan di get product
MESSAGING
	- kelebihan
		- asincronus
		- tidak nunggu response jadi cepat
		- fire and forget
	- contoh
		- redis
		- kafka
		- rabbitMq
		- NSQ 
		- GOOGLE PUB SUB
		- amazon web services SQS
	- kegunaan di notifikasi user : sms email dll yang terpenting adalah untuk order 
TYPE MICROSERVICES
	STATELESS
		biasanya tidak memiliki db
		tugas sederhana
		utility aplikasi untuk service lainya (helper)
		independen tidak bergantung
		contoh: email services sms services
	STATEFULL persistence microservices
		- biasanya memiliki database
		- pengolah data / master database
		- tugasnya CRUD
		- contoh: CS, product, order
		-
	AGREGATION MICROSERVICES
			- tergantung dengan service lain tidak independen
			- service orkhestrator, pusat bisnis logic
			- boleh pakai data base atau tidak
			- terminal bagi semua services
			- contoh: cart services, payment services
		metode orkestrasi patern. (komunikasi pakai remote RPL )
			- cara manage service di bawahnya 
			- call semua service di bawahnya (child)
			- semua service di komando oleh pusat service
			- bisnis logic berada di parent
			+ simple mudah di baca developer 
			- terlalu tergantung 
			- lambat karena ketergantungan tadi
			- ikut error jika error di bag lain
			- kalau ada service baru maka terminal harus di ubah
		metode koreografi. (komunikasi pakai MESSAGING)
			- hampir kebalikanya di atas
			- komunikasi tidak direct call tapi messeging
			- service2 di bawahnya harus smart bereaksi dengan message yang di terima
			  tidak di komando oleh service parent
			- logic bisnis berada di masing2 service
			+ cepat 
			+ tidak ketergantungna sehingga mati satu service g masalah
			+ tambah service juga g masalah
			+ scalable
			- sulit di debug karena g ada response
			- sulit di mengerti oleh karyawan baru karena logic tersebar
			- sangat tergantung sama message broker

API GATEWAY
	- semua service jangan di ekspose keluar nanti merepotkan
		seperti isu: keamanan bug, otentikasi, session dll
	- sebaiknya cara aman untuk akses keluar adalah menggunakan API GATEWAY
	- API GATEWAY adalah gerbang dari luar, semacam jadi proxy server lah gitu, API GATEWAY
	  yang akan meneruskan kemana service di tuju
	+ aman karena 1 gerbang
	+ tidak perlu auth semua cukup 1 API GATEWAY
	+ berfungsi sbg load balancer
	+ rate limiter juga
	+ jadi proxy server
	+ sebagai pengaman error dalam service tidak terekspos
	contoh:
	- sebenarnya kita bisa bikin sendiri tapi PR karena banayak tugas yang sudah template
	- gunakan framework
		- nginx basic	-> hanya load limiter
		- apache HTTPD	-> dah lawas
		- KONG advance dari nginx -> ada auth dan semua fungsi di atas
		- netflix zuul	-> java khusus
		- spring cloud gateway -> java juga
		- traffic 
		- pyton juga punya API GATEWAY
		- php API GATEWAY
		- golang API GATEWAY
		- cari di GOOGLE
AUTHENTICATION AUTORIZATION
	- pertama gunakan API GATEWAY sebagai pintu masuk dari luar
	- bikin satu services yang khusus nanganin auth service sebagai pintu masujk antar service
	- cara kerjanaya API akan minta izin ke auth service -> jika valid API akan forward ke tujuan
	- jangan banyak tanya, gunakan cache
	- lalu "service penerima" akan minta info otoritas akses ke "auth service" istilahnya midleware
	- auth service jadi sangat sibuk -> solusinya 
		- API GATEWAY tanya 2 tugas yaitu AUTHENTICATION + AUTORIZATION dan forward membawa 2 data ke 
		  service tujuan
		- lakukan di header atau di query param
		- komunikasi ini akan di transmisi kan dengan JWT
		- contoh auth antar service:
			- secure cookie
			- Oauth
			- JSON web token
			- basic auth
			- APi key / screet key
			- user name password biasa
BACKEND FOR FRONTEND
	- gambar 2 lebih jelas
	- jadi kalau ada front end lebih dari 1 platform: mobil, web, third party
	- maka buatkan service khusus buat menghandle masing2, biasanya untuk keperluan rooting dan end point
	- otentikasi servicenya tetap 1 
	+ pengembangan bisa fokus
	+ logic tidak tercampur
	ALTERNATIVE
		pakai graphQL
		- framework sebagai pengganti service frontend for backend
		- adalah query language untuk API
		- bisa untuk manipulasi response API secara runtime
		- frontend bebas nentukan data apa saja yang ingin di dapatkan 
		- backend hanya perlu menyediakan data lengkap dan front end dapat memilih mana yang diinginkan
		+ tidak perlu bikin 3 service 
		+ graph akan memfilter keperluan
		- belum matang di beberapa bahasa
		- hanya di node js yang bagus
		- graph ql jadi sibuk kalau ini bermasalah semua platform juga akan terganggu
		- kayaknya bagusan backend for frontend kalau teamnya banyak
CQRS.(commond query responsibility segregation) konsep
	konsep masalah dan problem solving masalah search dan commond
	- common = C UD 
	- query = R
	- konsep ideal gambar kombinasi pemisahan dan message 3
	- lanjutkan ???????????????????????????????????? vid 15 microservices 





                
CATATAN
pembagian service biasanya. :
	product	-> mongodb -> banyak atribut yang beda array electro dan mobil beda atribut spec
	catalog -> elasticsearch -> 
	order -> postgre -> gagal roll back relational
	users -> neo4j -> 
	activity -> influxdb - history
	payment
	courier
	message
	finance
	report
	cart
	search -> ini bikin banyak node service(4-8)karena paling sibuk -> pakai masseging

	api gateway
	auth dan auto
	backend for frontend 

STRUKTUKU

PLAFORM 
	mobile app
	dashboard
	third party
APIGATEWAY
	api gateway
AUTHENTICATION
	oauth2
BACKEND for FRONTEND
	mobile app
	dashboard
	third party
SERVICES -> golang, laravel, codeigniter: logic, api server, api client, query, db conn n manage
	api spec
	endpoint -> di atas
UTILITY
	auth
	transmisi data.: messeging RPC
	loadbalance
	list service
	router.: proxy server
	limiter.: 
	node scaling.: 
ARSITETUR TYPE MICROSERVICES
	CQRS -> search product, search merchant, search, layanan,  
	STATEFULL
	STATEFULL
	AUTHENTICATION
CACHE
	memcache
	redis
DATABASES -> mysql, mongodb, postgre, elasticsearch
	db
	table
