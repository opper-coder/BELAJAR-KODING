APLICATION PROGRAMING INTERFACE

adalah method komunikasi antar aplikasi, antar bahasa pemrograman, antar hardware driver dll
rest API adalah api lewat method protokol http:
	jenis lainya:
		- Rest full API
		- soap
		- grpc -> golang
		- apache thrift -> facebook elastic search, cassandra
		- Socket -> low level -> semua bahasa pemrograman

HTTP
	- protokol tarnsmisi file html css js dll yng support web
	- protokol untuk 'klien-server' atau 'request-resposnse' klien: web, mobile app, service, server dll 
	- protokol yang state less, server tidak menyimpan data
	- kenapa http: independen, stateless, familiar, aman (https)
HTTP Header
	- adalah info tambahan untuk clien dan server berupa key value
	- contoh header di html itu
	- ada beberapa standard ada juga buatan kita contoh standard
		- header : accept
		- "accept" untuk tentukan jenis data yng dikirim misalnya "application JSON"
		- penerima harus menerima dalam bentuk json juga kalau tidak bisa ditolak
		- header : content-type
		- format data json atau apa 
		- header : accept-language en-US atau id-id
		- menggunakan bahasa apa aplikasi kita jika mendukung 
		- kalau mau tau yang lain coba buka http header di w3-schools
		- contoh : user-agent
			untuk melihat OS browser, bahasa system, dll
HTTP RESPONSE CODE
	- sebenarnya di gunakan untuk request dan response, disini kita kita bicarakan yang response
	- jenis response CODE
		2xx success di prossess oleh server (CRUD)
		3xx dah tdk di gunakan karena dah di pindah ke url/untuk redirect
		4xx bermasalah perlu diperbaiki pada clien
		5xx ada masalah di server 
	- referensi di: mozilla http status
HTTP METHOD 
	- metode permintaan pada server 
		- GET, POST, PUT, PATCH, DELETE 
		- minta, kirim, gantireplace, tambal, hapus
		- sebenarnya melakukan crud kita boleh pakai GET saja tapi aneh
		- itu kan key dalam method globals
URL 
	- locator resource = lokasi file html atu css dll
	- http:// = "protokol" (rest full hanya jalan di http dan https)
		- lainya : https, ftp, ssh dll
	- www.contoh.com = "domain" name atau ip adress = 192.168.0.0
	- www.contoh.com:80 = "port" default (opt) https = :45 
	- /user.html = "path"   //
	- ?key=value&key2=value2 // parameter
	- #latihan = anchor jarang di pakai
HTTP Message
	- adalah metode komunikasi client - server
	- request dan response
	- format standard:
		- body (data (opt)) disini boleh html json xml plaintext multipart application
		  dll dan jngn lupa harus nyambung di header nya dengan content-type
AUTENTICATION/AUTORIZATION 
	- pada API 
	- autentication = validasi kredential
	- authorisasi = hak akses aplikasi
	Basic Auth
		- cukup di header ini dah standard di tools.ieft.org/html/rfc7617
		- cocok di gunakan server ke server
		- kalau di rest kita kirim via request 
		  di https sih aman tapi kan expose jangan di gunakan di client
		- Autorization:Basic base64(user:password)
	API-Key
		- sama dengan di atas tapi user password nya di ganti dengan token json
		- ini lebih aman 
	Oauth 2
		- ini populer standard dan aman 
		- dipakai di client misalnya mobile app
		- sangat di sarankan cara kerjanya ok
		- lihat di vid restfull menit terakhir
	selebihnya silahkan cari sendiri autentication untuk api di google

RESOURCE NAMING
	- agar mudah dimengerti dan punya standard maka sebaiknya ikuti ini:
	- pakai bahas inggris, dan menganut tunggal jamak "product", "products"
	- gunakan kata benda jangan kerja "product" jngn "getproduct"
	- gunakan hirarchi. jangan pakai properti milik api lain
	- gunakan action pada resource contoh halo.com/user/login (jangan independen action nya)
	- gunakan - dan lowercase 
	- jangan pakai spasi (walau bisa)
	- jangan camelcase
	- jangan underscore
	- gunakan http method untuk untuk action jangan di url 
		cth + GET http:// 
		cth - GET http://get-product-by-id/{id}
	- kalau filter pakai query param jangan url
		cth + http://nama?key=value
		cth - http:/key/value   //

VERSIONING
	- saat ada perubahan API jangan sampai merusak kompatibilitasnya dg klien
	- kalau tepaksa lakukan versi baru tanpa menghapus yang lama agar bisa dipilih
	- bisa lakukan pada url:
		http://api.contoh.com/v1/product 	//
		http://api.contoh.com/v2/product 	//
	- bisa lakukan pada header:
		biasanya kalau kita lupa pakai yng url bisa pilih header
		karena kalau pakai header di klien maka kita juga harus pakai response 
		kalau pakai update url ya nggak apa2, nggak pakai header
		HTTP header => API-Version:1
		HTTP header => API-Version:2
	- api yang baik tidak akan pernah merusak api 
	  yaitu tidak akan pernah membutuhkan versi baru
	- yaitu bikin nama field harus baku dan bahasa inggris baku seperti di atas
	- nambah field nggak apa namun jangan mengganti //

JSON 
	- standard baru tukar data -> type data object js
	- {:}
	- {"key" : "value", "key2",2}
	- [{"key" : "value", "key2",2},{"key" : "value", "key2",2}]
	- basson = bool,array,string,s,object,number
	- properti,readable,cross language,lightweight,internet client-server,
	  di sarankan gunakan stsndart walau fleksible, agar konsisten format data json
	  cth standard data: kalau memang bentuknya begini ya begini saja terus konsisten
	  {
	  	"took": 123,
	  	"status": "OK",
	  	"data":{
	  		"name": "eko",
	  		"address": "indonesia"
	  	},
	  	"error": null
	  }
	- atau 
	  {
	  	"took": 87,
	  	"status": "ValiodationError",
	  	"data": null,
	  	"error": {
	  		"name": "is not blank",
	  		"address": "is not blank"
	  	}
	  }
HATEOAS
	- adalah semacam response yang memberikan content link/endpoint ke source yg di sediakan
	- ga da aturan baku di generate di bahasa manapun akan punya standard masing2
	- gunaya: informatif bagi client. jadi client tidak usah kode menuju end point. 
	  karena sudah disediakan di json nya. kalau mau rubah end point juga klebih gampang
	- tapi kalau mau bikin disarankan tidak usah bikin sendiri, tinggal google ketik "kotlin HATEOAS"
	  nanti ada solusi nya

	- cth ada link
		{
			"id": 1,
			"name": "Eko",
			"email": "eko@contoh.com",
			"_links": {
				"self": "/customers/1"
			}
		}
	- cth ada link
		{
			"account": "3131",
			"balance": 1000000,
			"links": {
				"deposit": "/accounts/3131/deposit",
				"withdraw": "/accounts/3131/withdraw",
				"transfer": "/accounts/3131/transfer",
				"close": "/accounts/3131/close"
			}
		}
JSON API
	- jsonapi adalah format standard dan support HATEOAS
	- dari pada bertengkar satu sama lain lebih baik ikuti standard saja di www.jsonapi.org  b dfcv
	- implementasinya tinggal tab implementasi di situs ini (di atas)
CACHE
	- data sementara yang di simpan di media simpan 
	  yng di ambil dari sata asli utk keperluan kecepatan misalnya/menurunkan data transfer
	  client-server
	- ada yang di buat di server ataupun di klien. tapi di rest di buat di klien
	- konsep dan cara kerja ada di video ada diagramnya
	- minta data ke db - di beri data dan itag - simpan di local - cek itag - if -
ITEMPOTENT
	- adalah request yang sama berkali2 itu mestinya di handle sekali saja
	- triknya harus pakai id yang kita generate sendiri dari client jangan pakai autoincrement (pakai uid/uuid = unitid)
	- ini hanya terjadi pada POST kayaknya untuk PUT, PATCH, DELETE, GET otomatis sudah idempotent
STATELESS
	- bukan standard sih tapi sangat menguntungkan
	- pada RESTfull sedearhananya tidak menyimpan data /state
	- disini maksudnya tidak menyimpan session user misalnya
	- request harusnya datanya dah lengkap
	- klien harus punya management state sendiri sebelum "di requestkan" ke REST
	- stiap reaquest harus independen tidak ketergantungan dengan request lainya (mungkin session)
	- server juga tidak boleh ketergantungan dengan request sebelumnya dll (pure independen)
	- intinya request harus bersih (makanya harus lengkap dan independen)
	- kalau di video contohnya kalau server lebih dari 2 maka kode session akan di generate jadi token
	- server nanti tinggal validasi
	- keuntungan stateless:
		- mudah di scaling horizontal sebab request bebas masuk ke server manapun
		- sederhana karena tidak harus tahu state sebelumnya yang kompleks
		- mudah di track, karena request dah lengkap
API DOCUMENTATION
	- sebaiknya kita menyediakan dokumentasi untuk client karena tidak standard
	- gunakan tool dokumentasi API : Swagger, Stoplight, Redoc
	- ... ada yang menarik mengenai generate ke bahasa pemrograman yang banyak lainya
	- 
TAHAPAN MEMBUAT RESTfull API
	- kesalahan sering:
		- selalu bikin CRUD db  (ini belum tentu di butuhkan)
		- bikin response sama dengan table (ini belum tentu sama)
		- bikin api dulu baru bikin web(kebalik)
		- return data selengkap2 nya (tidak perlu buang waktu)
		- kadang api di buat tapi tidak di pakai (rugi)
	- sebaiknya berdasarkan;
		- bisnis flow -> UIUX -> API documentation -> baru develop
		- API Dokumentasi lebih ke documentasi hirarchi screen -> dalam screen ada "method api dan ke url mana aja"
		- contoh ada di screen shot
		- dalam membuat api request response nya juga perlu di desain success atau gagalnya
		-
MAINTENANCE
	- boleh:
		- nambah data field
		- nambah endpoint baru di api baru
		- mempercepat api
		- menggabungkan beberapa api dg end point baru tanpa hapus yang lama masih di pakai
		- intinya jangan ganggu API yang lama
	- jangan:
		- mengubah total response api yang sudah ada(di publish)
		- mengubah field
		- hapus api yang ada
		- split api lama jadi baru dan lama di hapus
		- gabung api jadi satu dan hapus yang lama
TINGGAL IMPLEMENTASI 
	- perhatikan cache, idempotent, HATEOAS, stateless
	- pelajari format json api dan response

================ SELESAI ================

akses api 
	- di android pakai = retrofit
	- request node js
	- tanpa klient = postman
	- di javascript = express.()
