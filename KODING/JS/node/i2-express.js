-------------------------------------------------
EXPRESSJS 
- pengetian pendek 	: fast, unOpinionated, minimalist web framework for nodjs
	- fast 		: 
	- unOpinionated : flexibel, tidak baku, struktur app bebas, bongkar pasang Middleware
	- minimalist web framework for nodjs
- panjang 		: 
	- web franmework yg di buat di atas nodejs
	- menyediakan antar muka minimal untuk website
	- kelola alrina data dari server ke app
	- MERN, MEAN, MEVN, Stack(Mongo,Express,[react,angular,vue],node)
- fitur 		:
	- Request HTTP 	: routing 		
	- MVC 		: 
	- view rendering template	: termasuk react, ada 30 lebih engine 
	- Middleware 	: pengertian, cara bikin, aturan penggunaan, best practice
	- database 	: support 10 lebih db
- bentuk dasar:
	- kelihatanya mirip dengan core-module di atas
	-> npmjs.com > search: express > go to expressjs.com > doc
	:> npm i express@4.17.1 --save 	: --save sekarang sudah auto simpan ke dependency local kita
	:> npm i nodemon -g 

		const express = require('express')
		const app = express()
		const port = 3000

		app.get('/', (req, res) => {
		  res.send('Hello World!')
		})

		app.listen(port, () => {
		  console.log(`Example app listening on port ${port}`)
		})

- buka doc expressjs.com
- lanjut ke dokumentasi i2-


























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

- biasanya di lettakan di contoller(api)/home/index.js
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
