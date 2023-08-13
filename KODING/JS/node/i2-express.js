_________________________________________________________________________________________________________
RINGKASAN
-------------------------------------------------
:> 			: terminal
>>   			: go browser
??> 			: cekidoc
 > 			: lanjut
 - 			: item
=> 			: return
/  			: root
/nama 			: folder
*.js 			: file
-> new  		: create 
-> /folder/file		: go file
--> console.log()	: tulis
-------------------------------------------------
persiapan
	:> node -v, npm -v 			: pastikan ada node, npm
	-> new ~project/app.js 			: bikin folder project, dan file app
	-- console.log("halo") 			: isi code
	:> cd project 				: masuk
	:> node app.js 				: jalankan app di nodejs
-------------------------------------------------
express
	>> npmjs.com > search: express 		: 
	>> expressjs.com > doc 			: 
	:> npm init -y 				: init npm
	:> npm i express 			: install
	:> npm i nodemon -g 			: server refresh
	-> package.json 			: cek
	--> {script:{"dev": "nodemon app.js"}} 	: tambahin script
	:> npm run dev 				: start pakai npm
	:> npx nodemon app 			: start pakai nodemon
-------------------------------------------------
Basic 
	const express = require('express') 		
	const app = express() 				
	const port = 3000 				

	app.get('/', (req, res) => { 			
	  res.send('Hello World!') 			
	})

	app.listen(port, () => {
	  console.log(`Example app listening on port ${port}`) 	: 
	})
	---
	:> npx nodemon app, npm run dev, npm dev
	>> localhost:3000/
	=> hello world
-------------------------------------------------
Route
	--> code
		const express = require('express') 		
		const app = express() 				
		const port = 3000 				

		app.get('/', (req, res) => { 			
		  res.send('Hello World!') 			
		})

		app.get('/about', (req, res) => { 			
		  res.send('Hello about!') 			
		})

		app.get('/contact', (req, res) => { 			
		  res.send('Hello contact!') 			
		})

		// route lain, dengan method: 
		app.get('/', (req, res) => {})		
		app.post('/', (req, res) => {})		
		app.put('/', (req, res) => {})		
		app.delete('/', (req, res) => {})

		// middleware route 404, paling akhir
		app.use('/', (req, res) => { 			
		  res.status(404) 					
		  res.send('404 page not found') 			
		})
				
		// jalankan server port
		app.listen(port, () => {
		  console.log(`Example app listening on port ${port}`) 	: 
		})
	
	>> browser
		localhost:3000 			: ke route		
		localhost:3000/about 		: ke about		
		localhost:3000/contact		: ke kontact	
		localhost:3000/lalala 		: ke halaman kosong

-------------------------------------------------
response  
	- cekidoc https://expressjs.com/en/ tab API ref / response  
		- response.send() 						// => "string"
		- response.json() 						// => "json"
		- response.sendfile() 						// => halaman html, pdf dll  
	
		app.get('/coba', (req, res) => { 			
		  res.json({
		  	nama: "aqil", 
		  	alamat: "saiti", 
		  	email: "aqil@gmail.com", 
		  }) 			
		})
		>> localhost:3000/coba 	 	 				// => json
		- response.sendfile( '/coba.html', { root: __dirname } ); 	// => halaman web
-------------------------------------------------
request
	- cekidoc https://expressjs.com/en/ tab API ref / request  
		- params: 	parameter dari url misalnya id, name, address dll (product/:1)
		- query: 	query string (mahasiswa?name="aqil")
		- ip: 		ip address user 

		app.get('/product/:id', (req, res => { 				// params /:id
			res.send( "product: " + req.params.id ) 		// ambil data req
		})	

	>> localhost/product/1 							// /1 : params id 
	>> localhost/product?name="aqil"					// ?nama : query.name 

-------------------------------------------------
view engine
	>> npmjs.com > search "ejs" > 
	:> npm install ejs 							: instal ejs(tidak usah, sudah ikut di bawah)
	:> npm i express-ejs-layouts						: install ejs dan layout sekaligus
	+> new /views/about.ejs 						: (rendering) semua page disimpan disini */ejs
	+> new /views/layout/sidebar-layout.ejs 				: (layouting) di folder layout, html, header, body, jumbotron, navbar dll 
	+> new views/about.ejs 							: halaman about > isi dengan body saja karena html sudah ada di layout
		- main-layout.ejs 						: susun tataletak layout css 
		- <%- body %> 							: tempatkan children
		- <%= name %> 							: echo variabel
		- <%- include("layout/header") %> 				: import halaman lain pembuat layout
		- <%- include("layout/footer") %> 				: 
		- <%  %> 							: koding javascript 
	-> di app.js 
		const expressLayouts = require('express-ejs-layouts'); 		: import 
		app.set('view engine', 'ejs'); 					: init view engine
		app.use(expressLayouts); 					: init layouting

		app.get('/about', (req, res) => { 				: route about.ejs sudah ada view engine dan layout
	  		res.render('about', { 					: res.render(untuk memanggil halaman "render")
	  			layout: "./layout/main-layout", 		: tambahkan "layout":"uri" (untuk memanggil "layout")
	  			name: "aqil", 					: boleh kirim data
	  			alamat: "saiti"
	  		});	  	
		})

	:> npx nodemon app 			: tinggal jalankan  
-------------------------------------------------
middleware
	user-defined
		- route manapun yg tersedia di akses middleware akan otomatis selalu di eksekusi jika terletak paling atas
		- middleware harus ada pelepasan pakai next()
		- middleware berikutnya akan di eksekusi seperti misalnya route
		- route yang tidak tersedia akan di tangkap oleh middleware terakhir untuk 404
		- 


		app.use((req, res, next) => { 					: penggunaan pakai app.use(callback middleware, pakai next()) ini middleware: 3 parameter, 
		  console.log('Time:', Date.now()) 				: action Date.now menampilkan epoch time saja
		  next() 							: harus ada next(), jika tidak di next() maka akan hang
		})

		app.get('/', (req, res) => { 					: ini juga middleware berikutnya
		  res.send('Hello World!') 					: 
		})
	built-in
		app.use(express.static('public')); 				: langsung gunakan pakai app.use(nama middleware);

	third-party
	- cekidoc expressjs.com https://expressjs.com/en/resources/middleware.html
	- sbg coba pilih morgan
		:> npm i morgan 					: install dulu
	  	-> const morgan = require('morgan') 			: init
		-> app.use(morgan('dev'))   				: gunakan pakai app.use
		-> localhost:3000 					: saat di akses kita akan di kasih info log di terminal

_________________________________________________________________________________________________________
-------------------------------------------------
EXPRESSJS 
- pengetian pendek 				: fast, unOpinionated, minimalist web framework for nodjs
	- fast 					: 
	- unOpinionated 			: flexibel, tidak baku, struktur app bebas, bongkar pasang Middleware
	- minimalist web framework for nodjs
- panjang 		 
	- web franmework yg di buat di atas nodejs
	- menyediakan antar muka minimal untuk website
	- kelola alrina data dari server ke app
	- MERN, MEAN, MEVN, Stack(Mongo,Express,[react,angular,vue],node)
- fitur 		
	- Request HTTP 				: routing 		
	- MVC 					: support mirip code-igniter
	- view rendering template		: termasuk react, ada 30 lebih engine 
	- Middleware 				: 
	- database 				: support 10 lebih db
-------------------------------------------------
BASIC
- kelihatanya mirip dengan core-module di atas
	-> npmjs.com > search: express > go to expressjs.com > doc
	:> npm init -y 				: lakukan init dulu(sebenarnya tidak gpp tapi nanti setting package.json nya jadi manual) 
	:> npm i express@4.17.1 --save 		: --save(simpan local), tp sekarang sudah auto simpan ke dependency local kita
	:> npm i express 			: terbaru, local
	:> npm i -g nodemon 			: instal juga nodemon global, gar memuluskan praktek ini agar tidak restart server, tinggal restart browser sj
	:> npm i nodemon 			: bisa di install di local, tapi panggilnya pakai npx
	:> npx nodemon app  			: jalankan nodemon pakai npx
	:> npm start 				: pakai npm, jika sudah setting script di package.json "start": "nodemon app"

	basic:

		const express = require('express') 		: import
		const app = express() 				: init
		const port = 3000 				: port

		app.get('/', (req, res) => { 			: bikin route root, minimal ada satu route
		  res.send('Hello World!') 			: callback response saat route di akses di browser
		})

		app.listen(port, () => {
		  console.log(`Example app listening on port ${port}`) 	: 
		})

	:> node index 						: jalankan file app, tapi karena sudah punya nodemon maka bisa > 
	:> nodemon app 						: jalankan pakai nodemon (dia akan monitoring .js .json .mjs, dan melakukan refresh server)
	=> server port:3000 					: terminal return
	-> browser: localhost:3000   				: jalankan di browser

-------------------------------------------------
ROUTE DASAR
	- setiap page (endpoint) yang di akses menggunakan harus memiliki route
	- di dalam endpoint memiliki callback controller 
	
		app.get('/about', (req, res) => { 			
		  res.send('Hello about!') 			
		})
		app.get('/contact', (req, res) => { 			
		  res.send('Hello about!') 			
		})		


	- browser> 
		- localhost:3000 					: saat di akses di browser => 'Hello World!'
		- localhost:3000/about 					: saat panggilan halaman about atau contact tidak bisa di akses, melainkan harus di buatkan route nya 
		- localhost:3000/contact				: karena juga dibuatkan route maka akan di panggil responsenya
		- localhost:3000/xyzc 					: karena tidak ada maka akan kembali ke home
		- localhost:3000/xyzc  					: akan kembali ke 404 jika di buatkan route Middleware 
		---
	- route lain menggunakan empat method: 
		app.get('/', (req, res) => {})		
		app.post('/', (req, res) => {})		
		app.put('/', (req, res) => {})		
		app.delete('/', (req, res) => {})		

	- halaman 404 
	- router Middleware : kita bisa tangkap url yang tidak di buatkan routnya menggubnakan Middleware, misalnya halaman 404 not found
	- app.use() ini akan menangkap url apapun, bahkan tidak ada sekalipun, sehingga letakan app.use() ini di paling bawah. 
	  kalau di paling atas rout yg lain tidak akan pernah di tangkap
		app.use('/', (req, res) => { 			
		  res.status(404) 					: kasih status disini agar response berstatus 404 betulan
		  res.send('404 page not found') 			
		})
	- browser: localhost:3000/lalala  				: => 404 > cek di inspect > tab network > headers > asd > general > status code: 404
-------------------------------------------------
RESPONSE  
	- cekidoc https://expressjs.com/en/ tab API ref / response  
	- request 	: di doc ada banyak list request
	- response 	: di doc ada banyak list response
	- contoh response sederhana dan sering di pakai 
		- response.send() 					: cont di atas => "string"
		- response.json() 					: cont di bawah => "json"
		- response.sendfile() 					: cont di bawah => halaman html, pdf dll  
	-----
	response json

		app.get('/coba', (req, res) => { 			
		  res.json({
		  	nama: "aqil", 
		  	alamat: "saiti", 
		  	email: "aqil@gmail.com", 
		  }) 			
		})

	- localhost:3000/coba 	=> json 	 			: kalau tampilan json ingin bagus di chrome, install plugin json view
	-----
	response halaman html
	- response.sendfile( '/coba.html', { root: __dirname } ); 	: kembalikan halaman html( "url", "root ralative" )
		- jadi kalau kita punya banyak halaman, atau pdf, kita bisa tampilkan pakai response.sendfile() ini 
		- tapi best practice nya, menampilkan halaman pakai view nantinya
		- yang penting sekarang sudah tahu kalau route bisa callback response berupa halaman website
		- sendFile() bisa menampilkan html, txt, pdf, doc, img, dll
-------------------------------------------------
REQUEST
	- cekidoc https://expressjs.com/en/ tab API ref / request  
	- kita bisa mendapatkan
		- params: 	parameter dari url misalnya id, name, address dll (product/:1)
		- query: 	query string (mahasiswa?name="aqil")
		- ip: 		address pengguna
		- baseURL
		- hostname 
		- dll banyak cekidoc
		contoh params

		app.get('/product/:id', (req, res => { 			// pada route: url kasih params /:id
			res.send( "product: " + req.params.id ) 	// pada res kita ambil data dari req
		})	

	- tinggal panggil pada url: localhost/product/1 		// 1 bisa di isi berapapun 
 

-------------------------------------------------
VIEW ENGINE
-------------------------------------------------
Ringkasan
:> npm i express-ejs-layouts						: install ejs dan layout sekaligus
:> add views/layout/main-layout.ejs 					: di root namafolder, namafile, namaextention wajib begini
	- main-layout.ejs 						: di ejs standard html biasa yang menyusun tataletak layout 
	- <%- body %> 							: tempatkan penangkapan body dalam layout html (nama harus body mirip children pada nextjs)
	- <%= name %> 							: gunakan echo jika diperlukan dan tangkap dari params yg di kirim oleh endpoint
	- <%- include("layout/header") %> 				: bisa juga include tampilan header 
	- <%- include("layout/footer") %> 				: bisa juga include tampilan footer dll 
	- <%  %> 							: semua fitur ejs bisa di pakai 
-> di app js 
	const expressLayouts = require('express-ejs-layouts'); 		: import
	app.use(expressLayouts); 					: init 

	app.get('/about', (req, res) => { 				: pada route about 
  		res.render('about', {
  			layout: "./layout/main-layout", 		: layout : kirim url "main_layout"
  			name: "aqil", 					: data : kirim boleh
  			alamat: "saiti"
  		});	  	
	})

:> npx nodemon app 			: tinggal jalankan  
-------------------------------------------------
- buka doc expressjs.com > di sana ada puluhan daftar view engine
- kita akan gunakan ejs, 
	-> npmjs.com > search "ejs" > 
	:> npm install ejs 				: instal

	----- INIT FOLDER VIEWS
	- init folder: tambahkan folder diroot "views" , 
	- tempatkan semua halaman yang di tampilkan disini, mis: about.html berisi h1 dan div
	- ubah extensi file jadi *.ejs, (about.ejs) 

	----- INIT ENTRY POINT
	- init di app.js 

	app.set('view engine', 'ejs');  				// init 

	app.get('/', (req, res) => { 					// pada sebuah route, response halaman about. url tak perlu ditulis karena sdh ada inisialisasi 
	  res.render('about')	 					// tampilkan about.ejs render sebagai pengganti res.send('Hello World!') 	
	})

	----- FITUR 
	- di file ejs kita bisa jalankan penulisan javascript langsung inline mirip PHP
	- install vscode extention: ejs language support by: DigitalBrainstem, supaya ada highlight ejs
	- nulisnya tinggal: % TAB, %= TAB, %- TAB, 
	- atau tulis ejs: ada suggest fitur ejs semua ada, cont:
	- "ejsfor" untuk pengulangan, 
	- "ejs" no output dst cekidoc extention
	- "ejsEach" pengulangan array

	----- INLINE JAVASCRIPT EJS
	- <% %> 	: <% const nama = "aqil" %> 			: menulis javascript
	- <%= %> 	: <%= nama %> 					: menampilkan variabel (mirip echo php)
	- <%- %>	: <%- %> 					: menmpilkan render HTML, bukan string HTML

	render sambil kirim parameter

	app.get('/about', (req, res) => { 				// route ke about 
	  res.render('about', {name:"aqil", alamat:"saiti"});	 	// render about dan kirim parameter pakai object 	
	})

	di ejs tinggal panggil 

	<%= name %>
	<%= alamat %>

	----- LAYOUT
	- bikin folderlagi dalam views /views/layout. (nama yg lain 'partial')
	- lalu bikin file di /views/layout				: header.ejs, nav.ejs, footer.ejs
	- isikan masing2 file potongan kode halaman pembentuk
	- .prettierIgnore: isikan *.ejs 				: oya bikin file pengecualian prettier, agar potongan header tidak auto di lengkapi oleh prettier 
	- . di halaman app.js tinggal panggil
		
		<%- include("layout/header") %> 			: import header
		<%- include("layout/nav") %> 				: import nav
		<h2> Halo ini halaman nya </h2> 			: // content
		<%- include("layout/footer") %>				: import footer

	- kelemahan pakai gaya ini adalah: bahwa kita harus import 3 file tersebut di setiap halaman yang membutuhkan,
	- sebaiknya kita punya layout utama 
	
	----- EXPRESS LAYOUT EJS	
	-> npmjs.com -> express-ejs-layouts  				: cekidoc
	:> npm i express-ejs-layouts  					: install dulu 
	- bikin file "/layout/main-layout.ejs" 				: bikin halaman "layout utama" sebagai template di folder layout
	- init di app.js
		const expressLayouts = require('express-ejs-layouts'); 	: import
		app.use(expressLayouts); 				: init 

	- router kirim param "layout url"
		app.get('/about', (req, res) => { 			: pada route about 
	  		res.render('about', {
	  			layout: "./layout/main-layout", 	: kirim url "main_layout"
	  			name: "aqil", 
	  			alamat: "saiti"
	  		});	  	
		})

	- 

-------------------------------------------------
MIDDLEWARE
- https://expressjs.com/en/guide/writing-middleware.html
- node menganggap semua fungsi dianggap Middleware
- code yang di buat setelah request dan sebelum response
- adalah sebuah fungsi yang memiliki akses request={}, response={} dan next()
- jenis:
	- user-defined 							: ketiganya mirip
		- applictaion 		
		- router
		- error-handling
	- built-in 							: tinggal pakai
	- third-party 							: dari npm
- fungsinya:
	- eksekusi kode
	- mengubah request, response
	- menutup siklus res-req
	- memanggil fungsi berikutnya
- basic
	app.use((req, res, next) => { 					: penggunaan pakai app.use(callback middleware, pakai next()) ini middleware: 3 parameter, 
	  console.log('Time:', Date.now()) 				: action Date.now menampilkan epoch time saja
	  next() 							: harus ada next(), jika tidak di next() maka akan hang
	})

	app.get('/', (req, res) => { 					: ini juga middleware berikutnya
	  res.send('Hello World!') 					: 
	})

----- middleware user-defined
	- penjelasan
	- app.use((req, res, next)=>{next()}) 				: penggunan pakai app.use(callback(3 parameter) {terakhir next()})
	- localhost:3000 						: kita akses app.js 
	- kalau midleware di letakan paling atas 			: maka saat akses app.js otomatis dijalankan paling awal 
	- next() 							: harus ada kalau tidak hank, dan tidak akan akses endpoint root, 
	- route root 							: saat ada next baru ke root
	- middleware 404 						: di akhir, ada Middleware menangani 404, tapi error 
	- header 							: karena setiap middleware yang "merender halaman" pasti mengirim header 
									  karena render tidak bisa menerima lebih dari satu "header" yg di kasih oleh "render halaman" 
	- single header							: dalam satu halaman kalau bisa hanya ada satu middleware yg mengirim render halaman 

----- middleware built in
	- kita biasanya memiliki file statik seperti: image, css, javascript, pdf dll yang kita simpan pada sebuah folder 
	- kita tidak bisa mengakses begitu saja langsung ke foldernya, karena secara default semua folder tidak bisa di akses langsung
	  kecuali melalui proses terlebih dahulu, sepertri export, import, layout dll
	- termasuk file statik tadi tidak bisa langsung di panggil dengan <img src="folder/file.jpg">
	- melainkan pakai prosedur middleware. caranya:
	- addnew folder di root /public/assetAnda/aqil.jpg > dg cara itu image bisa di akses, css, dll juga bisa
	- di app.js

		-> app.use(express.static('public')); 			: langsung gunakan pakai app.use(nama middleware);

----- middleware third-party
	- cekidoc expressjs.com https://expressjs.com/en/resources/middleware.html
	- sbg coba pilih morgan
		:> npm i morgan 					: install dulu
	  	-> const morgan = require('morgan') 			: init
		-> app.use(morgan('dev'))   				: gunakan pakai app.use
		-> localhost:3000 					: saat di akses kita akan di kasih info log di terminal


-------------------------------------------------
Mongo DB
cekidoc i3-mongo-express

=========================
-------------------------------------------------
:> npm init 
:> node index.js
:> 
:> npm i express --save
-> package.json
 	> add { 
 		"main":"index.js" 							// > entry point
		"type":"module", 							// > supaya bisa menggunakan mode "import"(bukan include)
 		"script": {
	 		"test": "echo \"error no test specified"\ && exit 1",     	// " 
	 		"start": "node index.js", 					// sekarang sudah bisa pakai npm run start atau npm run dev
	 		"dev": "node index.js" 						// :> npm run dev, mengarah ke node index.js (tanpa node)
 		}}
-> /index.js 										// edit file, copas: https://expressjs.com/en/starter/hello-world.html
	const express = require('express')
	const app = express()
	const port = 3000

	app.get('/', (req, res) => {
	  res.send('Hello World!')
	})

	app.listen(port, () => {
	  console.log(`Example app listening on port ${port}`)
	})

:> npm run dev
:> return console
 > edit console 
:> restart server > ctrl + c > npm run dev
 > return console edited 
:> restart server
:> npx nodemon app.js ( npm i nodemon -g // jika belum pernah install )
:> return console auto

-------------------------------------------------
BASIC ROUTING
cek: https://expressjs.com/en/starter/basic-routing.html

- biasanya di letakan di contoller(api)/home/index.js
- menangani url endpoint, methode, handler fetching data(dg axios, prisma, sequelize, msql2, SWR dll kayaknya cekidot ??? )
- url bukan berdasarkan folder melainkan ketentuan semau kita aja, yang penting memenuhu syarat
- endpoint url boleh sama asal method berbeda
- '/' artinya home atau index

app			: instance express.
METHOD			: metode permintaan HTTP, lowercase.
PATH			: url endpoint di server.
HANDLER      		: fungsi yg dijalankan saat rute cocok.

	app.get('/', (req, res) => {
	  res.send('Hello World!')
	})

	app.post('/', (req, res) => {
	  res.send('Got a POST request')
	})

	app.put('/user', (req, res) => {
	  res.send('Got a PUT request at /user')
	})

	app.delete('/user', (req, res) => {
	  res.send('Got a DELETE request at /user')
	})

cara bikin url:
	/api/v1/category/
-> vscode > instal restClient(Huachao Mao) atau postman 

data itu berada di
	api
	database
pengambil data itu ada di
	frontend
		api
	backend
		api
		database
