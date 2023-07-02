sumber : M fikri atau media coder
membuat resfull API daLAM 45 menit. NodeJS, Express, ReactJS, mongodb

MERN
MongoDB, Express, ReactJS, NodeJS

INSTALLATION
---------------------------------------------------------------------
- MongoDB adalah dtabase berbasis object di install di nodejs sebagai server > nanti akan di akses oleh backend > backend akan buat API
- mongodb.com > download community server > linux > install 
	terminal :> mongo > enter > version 

- bikin inisialisasi project/bikin package.json di nodejs > selanjutnya install semua dependency yg di butuhkan disini
- vscode > new folder "RESFULL" > :terminal :> npm init -y 
	- ada file package.json  

- express > :> npm install express > tunggu selesai
	- periksa di package.json

- mongoos :> npm install mongoose (package memudahkan berinteraksi dengan mongodb)
	- periksa di package.json > dependencies :{ada}

- nodemon > :> npm install --save-dev nodemon (package ) > restart server // berguna untuk tool developer agar tidak restart saat ada perubahan pada koding, praktis!
	- periksa di package.json > dev dependencies: {ada}

- pada entri point di package.json bernama index.js, oleh karena itu kita buat filenya di bawah > "main": "index.js"
CODING 


config express, port, route endpoint
---------------------------------------------------------------------
- add new file /index.js > 
	- goto package.json > add "type": "module" di root 					// 1. agar bisa menggunakan es6 beritahu di object root, di atas "main":"" boleh
	
	// const express = require('express'); 								// 0. pada node v lama import nya pakai ini, ini bisa di conversi ke es6. dan ini tidak di pakai  
	import express from "express";  									// 2. di file index.js import express

	const app = express(); 												// 3. init express() dg nama app yang akan kita gunakan nanti

	app.get('/', (req, res) => { 										// 6. buatkan endpoint URL, untuk trigger callback, misal welcome
		res.send('Hello world!'); 											
	})

	app.listen('3000',() => console.log('Server Running at port:3000'));// 4. coba running di terminal :> nodemon index > running server
																		// 5. di chrome: localhost:3000 > akan tampil cannot GET/   

config mongoose
---------------------------------------------------------------------
	
	import express from "express";  									
	import mongoose from "mongoose";  									// 1. import mongoose

	const app = express(); 												 
	mongoose.connect("mongodb://localhost:27017/restful_db_kita", { 	// 2. connection disini, saat param ke dua tidak ada > save > cek terminal
		useNewUrlParser:true, 											//  	> maka ada error dan harus sertakan param ke dua ini dari terminal > save
		useUnifiedTopology:true, 										//  	> ada error lg, copas ini juga dari terminal > save > maka tidak error lagi
	}) 		
	const db = mongoose.connection; 									// 3. connection 
	db.on('error', (error) => console.error(error)); 					// 		> db.on('error') untuk menagkap error connection
	db.once('open', () => console.log('database connected')); 			// 		> db.once('open') untuk manangani jika sukses connected > save > connected > sukses

	app.get('/', (req,res) => { 										
		res.send('Hello World!'); 											 
	})

	app.use('/product', route)											
	app.listen('3000',()=> console.log('Server Running at port:3000')); 

Halaman 2 bikin route
---------------------------------------------------------------------
- add new file :root/routes/index.js > buka file 

	import express from "express"; 										// 1. import
	const router = express.Router(); 									// 2. jalankan Router

	router.get('/', (req,res) => { 										// 3. cut script route root ini dari :root/index.js > replace app > router 
		res.send('Hello World!'); 											
	})

	export default router; 												// 4. jangan lupa export

	-----
	import route from "./routes/index.js" 								// 5. selanjutnya import di :root/index.js

	app.use('/product', route); 										// 6. masih di :/root/index.js > gunakan route > bisa juga di kasih prefix '/product'. maka endpoint selalu di awali product/

Pengujian dan GET
---------------------------------------------------------------------
- biasanya POSTMAN > tapi kita gunakan extention vscode REST CLIENT > install dulu
- untuk keperluan itu client pengujian > new file :root/request.res(nama bebas) > hapus setelah Pengujian 

	method > URL >  
	GET http:localhost:3000/product 		// klik link "send request" di atas > akan ada respond di samping kanan > 200 ok > "hello world!" > pengujian sukses 

POST
---------------------------------------------------------------------
di halaman :root/routes/index kita buat endpoint get
	
	import express from "express"; 										
	const router = express.Router(); 									

	router.get('/', (req,res) => { 										
		res.send('Hello World!'); 											
	})

	router.post('/', (req,res) => { 									// 1. disini post 
		res.send('Hello World! POST'); 											
	})

	export default router; 
	
-----
di halaman request.test 

	GET http:localhost:3000/product 									// 2. klik send request > output POST > sukses

MODELS
---------------------------------------------------------------------
kita bikin file yg merepresentasikan data yang akan di ambil dari database mongodb. dan sudah menggunakan mongoose

new file :root/models/product.js > buka

	import mongose from "mongoose"; 									// 1. import mongoose

	const Product = mongoose.Schema({  									// 2. akses semacam table
		title:{ 														// 3. bikin object data nya
			type:String,
			required:true
		},
		price:{
			type:Number,
			required:true
		},
	}) 

	export default mongoose.model('Products', Product); 				// 4. export model(nama data, ambil data dari object di atas yng akan di export)

CONTROLER
---------------------------------------------------------------------

new file /controllers/productController.js 								// 1. bikin file 

import Product from "../models/Products.js";  							// 2. di dalam file import data

const getProducts = async (req, res) => { 								// 3. bikin function get data, param nya req, res
	try { 																// 6. masukkan ke block try, catch. agar bisa tracking error
		const products = await Product.find(); 							// 4. find() akan mencari colection data pada Product
		res.json(products);  											// 5. kembalikan dalam json
	} catch (error){
		res.json({message:error.message}); 								// 7. error nya tangkap disini
	}
}

-----
goto request.test > klik send pada method GET > maka response empty array > karena kita belum punya datanya






di menit 21
ada kejanggalan disini mungkin agak kskip dari menit 15 ????????????????????????????? 






POST ke database
---------------------------------------------------------------------
goto /controllers/productController.js > bikin function di bawah getProducts								

import Product from "../models/Products.js";  							

const saveProduct = async (req, res) => {  								// 1. bikin func saveProduct dibawah getProduct 								
	const product = new Product(req.body); 								// 2. data di ambil dari req.body
	try { 				
		const products = await product.save();  						// 3. product dari variabel step:2
		res.json(products);  											
	} catch (error){
		res.json({message:error.message}); 								
	}
}

-----
daftarkan function ini di :root/routes/index.js

	import express from "express"; 										
	import { getProducts, saveProduct } from "../controllers/ProductController.js";  // 1. import 		

	const router = express.Router();								
										
	router.get('/', getProducts);
	router.post('/', saveProduct); 										// 2. daftarkan disini 

	export default router; 

-----
goto entrypoint kita :root/index.js. kita akan gunakan middleware, agar kita dapat menerima data POST dalam bentuk json.

app.use(express.jason()); 												// 1. tambahkan disana

-----
goto :root/request.res > pada POST tambahkan  content type 

	GET http:localhost:3000/product 

	###
	Send request  														// 3. tapi saat di send request > kta dapat messege Cannot access...								
	POST http:localhost:3000/product 								
	Content-Type: application/json 										// 1. pada POST tambahkan content-type

	{  																	// 2. object data json nya taruh disini 
		"title": "Product 1",
		"price": 3000,
	}
-----
goto /controllers/productController.js

const saveProduct = async (req, res) => {  															
	const product = new Product(req.body); 								
	try { 				
		const savedProducts = await product.save();  					// 1. replace product to savedProduct
		res.json(savedProducts);   										// 2. parsing disini  											
	} catch (error){
		res.json({message:error.message}); 								
	}
}
-----
- saat kembali ke request.res > send > sekarang sudah punya data yang sudah di set ke database > 
- sekarang coba send dengan data yang ke dua dan coba lalu get data  maka akan ada 2 data yang

menit ke 25
