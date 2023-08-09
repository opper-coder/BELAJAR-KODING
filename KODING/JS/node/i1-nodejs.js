Node js
------------------------------------------------- 
INSTALASI
REPL
INDEX.JS
SINGLE PAGE APP
MODULES
EXPORT
IMPORT
CORE MODULES
-------------------------------------------------
install node dan npm di linux
-----------------------------
:> sudo apt-get update  				// 1. update linux dulu
:> sudo apt-get install nodejs  			// 2. langsung install node via terminal tapi biasanya tanpa NPM
:> sudo apt-get install npm 				// 3. maka install juga npm
:> node -v 						// 4. cek versi terinstall (biasanya lawas)
:> npm -v 						// 5. cek npm juga (biasanya lawas juga)
(:> sudo npm install -g n  				// 5.1. install version manager praktis (sumber: https://nodejs.org/en/download/package-manager#debian-and-ubuntu-based-linux-distributions))
:> sudo n lts  						// 6. update node with npm LTS terbaru
:> node -v 						// 7. coba cek maka versi sudah terbaru (LTS)
:> npm -v 						// 8. otomatis NPM juga ikut di update
-----------------------------
- jika tidak version manager cara update berikut:
:> sudo apt-get install -g nodejs@3.3.4 		// 1. mau install node dengan version tertentu(kalau ada reponya)
:> sudo npm install -g npm@9.6.2  			// 2. kalau perlu update npmnya saja ke version tertentu
-------------------------------------------------
MASUK PROJECT 
:> mkdir belajar-node 	: add
:> cd belajar-node 	: masuk
----------------
REPL
:> node 		: masuk ke REPL (read, eval, print, loop)
:> 1+1 atau 1=='1' enter: mirip console pada browser
:> .load coba.js 	: import file dalam repl
:> .save coba2.js 	: simpan code repl ke file
:> .exit / ctrl C, C 	: keluar repl
:> .break 		: keluar dari code multiline di repl (karena nggak bisa keluar begitu saja nanti kode bisa hilang)
:> .editor 		: nulis multiline, 
:> ctrl D 		: finis multiline,
:> ctrl c 		: cancel multiline,
----------------
INDEX,JS
:> mkdir belajar-node 	: add
:> cd belajar-node 	: masuk
:> code . 		: buka folder ini di vscode
-> new index.js > console.log("hello world")
:> node index.js 	: jalankan file di runtime node atau
:> node . 		: file index.js ini (ingat tidak bisa manggil index.html, melainkan index.js)
-> kasus:
-> index.html 		: ("file.html biasa" itu client)mis: memiliki script src=coba.js dan coba2.js. 
	variabel dll itu bisa di lakukan tapi bisa di akses secara bersifat "global" dan bersifat "client"
----------------
SINGLE PAGE APP 
:> index.js 		: satu file index, akan meng include semua page lainya sedangkan element html akan di generate via js dom 
 			  sehingga seluruhnya file javascript tidak ada lagi file html, sehingga tidak global lagi tidak client lagi, melainkan local dan server
-> require('./coba') 	: sejajar ../ di atasnya ../../ di atasnya dua kali './folder1/coba' dalam folder1 sejajar
-> module.export=salam; : halaman bisa di include, tapi isinya tidak bisa di pakai kecuali yg di export,
-> const salam = require('./coba') : pada prakteknya harus di bungkus dalam var, lalu var bisa di gunakan menggunakan "require" atau di npm pakai import 
   			  (nanti di npm init, package.json "type":"module").		  
MODULES
sekumpulan code reusable dengan antarmuka yg terdefinisi, atau
sebuah fungsi komplex/simpel dalam file javascript, yang di export, dan bisa di gunakan(require) di file.js lain dalam nodejs tersebut 
1 core module 		: packet dalam node tidak terlihat (dalanm library) kita tinggal require
2 local module 		: module yang kita bikin sendiri "export require"
3 third party 		: module pihak ketiga atau "modul npm" (kumpulan module yg di koleksi oleh node)
---
const fs =require('fs') : tanpa url, maka akan cari di coremodule, jika tdk ada lalu di local, jk tdk ada maka di third party module
			  gampang nya kalau tanpa url berarti core atau third, sedang url berarti local
----------------	  
EXPORT
- var, arr, obj, func, class, 	: yg umum di export 
- module.export=salam; 	: export sebuah function dalam sebuah file.js
1. module.export.salam=salam : 
2. module.export.halo=halo : export beberapa(dua) module dalam sebuah file.js. (put dalam object) 
atau export langsung dalam bentuk object
module.export={
	salam:salam,
	halo:halo,
}
atau short hand karena key value sama 
module.export={ salam, halo }
----------------
IMPORT
- const salam= require('./coba') : import satu module dalam sebuah file coba.js
- const coba= require('./coba')  : file memiliki beberapa(dua) module diexport
- console.log(coba.nama) 	 : kalau di export dalam objkect kita bisa panggil 
- import * as fs from 'node:fs'; : node modern sudah bisa import cekidoc 
-------------------------------------------------
CORE MODULES
-> go https://nodejs.org/dist/latest-v18.x/docs/api/
> terlihat list core module  
:> mkdir belajar-node 	: add
:> cd belajar-node 	: masuk
:> code . 		: 
-> new app.js 		: bikin entry point, > lalu coba salh satu modul (fs: file system)
	fs 		: module untuk CRUD file, menulis isi file dll banyak method di dalmnya termasuk CRUD folder juga
	const fs = require('node:fs');				: import dulu
	fs.writeFileSync("test.txt", "Hallo world sync"); 	: (SYNC) jalankan method nya( create file sekaligus menulis isinya, secara sync )
:> ls 			: cek ada file baru "test.txt"
	fs.Promises.mkdir(path[, options])			: coba lagi fs.mkdir bikin direktori 
> try{}catch(e){} 	: kalau pakai sync pada prakteknya kita harus tangkap jalan tidaknya perintah pakai try catch 
> node app 		: jalankan app 
	fs.writeFile("test2.txt", "Hallo world sync", (err) => {
		if(err) throw err; {
			console.log(err);
		}
	})

setidaknya kita telah belajar 
1. create file sekaligus mengisi filenya dengan : fs.writeFileSync()
2. mengisi existing file dengan string dan json dengan form input terminal : fs.Promises.mkdir() fs.writeFile() dll
-------------------------------------------------
NPM MODULES
:> mkdir belajar-node 	: add
:> cd belajar-node 	: masuk
:> touch app.js 	: add console.log("hello")
:> node app 		: jalankan app.js, retun "hello"
:> npm init 		: wait finish
-> package.json 	: cek file package
> script:{} 		: disitu k:v jika di isi bisa di panggil pakai npm 
-> {"start":"node app"} : masukan k:v ini, 
:> npm start 		: jalankan node app di npm pada key script:{}, key start, test adalah script standard 
:> npm run dev 		: kalau bikin sendiri harus pakai "run"
----------------
:> npm install -g nodemon 	: atau yarn global add nodemon : salah satu package npm untuk perubahan saat di save, langsung realtime
:> npm i nodemon -g 		: atau
----------------
-> search di npm web 	: instalasi package, sebelum instalasi search package dulu di web npm
-> validator 		: misalnya "validator", copas import nya ES6/ES
:> npm i validator 	: jk ditemukan, instalasi akan di berikan yg terbaru, wait finish
:> npm i validator@13.5.2 	: instalasi pakai version "@", wait finish. cek versi di "npmjs.com"
-> package.json 	: cek version.
-> node_modules/ 	: ada tambahan folder berisi validator, dan node_modules default lainya
-> npm uninstall validator 	: hapus package
----------------	
cara pakai nya 
-> app.js 		: edit file berisI:
 	var validator = require('validator'); 			// import gaya lama (untuk sanitasi input)
 	validator.isEmail('foo@bar.com'); 			// => true, penggunaan 
	---
 	import chalk from 'chalk'; 				// import gaya baru (untuk pewarnaan console)
	console.log(chalk.blue('Hello world!'));  		// penggunaan helloworld akan berwarna biru di console
	---
	nodemon 						: jika kita mau app realtime berarti hrs di install scr local dg mengilangkan -g
	ctrl C 							: keluar nodemon 
	npm uninstall -g nodemon  				: uninstall global 
	npm i --save-dev nodemon@1.1.0				: install local
	-> script{ "start":"nodemon app.js" }			: nodemon app tidak jalan kecuali di simpan dalam script:{}
	:> npm start
-------------------------------------------------
CLI APP nodejs
- dalam contoh video: bisa bikin aplikasi CLI (aplikasi terminal) yang bisa CRUD di file.json berupa json
- 
-------------------------------------------------
WEB SERVER 
- nodejs bikinwebserver memanfaatkan node core-modul
:> npm init -y
-> add app.js
	const http = rerquire('http')
	http
	.createServer((req,res) => {
		res.write("hello world");
		res.end();
	})
	.listen(3000, () => {
		console.log("server is listening on port 3000...")
	});
:> node app 
=> "server is listening on port 3000..." dan terminalnya nyangkut belum tertutup. artinya server jalan 
-> browser: localhost:3000
---
- port : bisa pakai angka 0 - 60.000 an. tapi pakai 3000 saja karena mungkin port lain sudah di huni oleh app lain 
- menit 10
- disini ada routing dan response berupa html dan juga fungsi2 
- hal ini sangatlah sederhana dan sangat manual, bagaimana kalau penggunaan core module server ini kita ganti dengan expressjs 
- seru sekali 
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
	- Middleware 	: 
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