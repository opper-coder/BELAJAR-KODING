NODEJS
------------------------------------------------- 
INSTALASI 	: install node dan npm (linux)			
REPL 		: text editor terminal base ala nodejs , bisa simpan file, console.log dll
VIM 		: text editor terminal base
INDEX.JS 	: install node, bikin file, jalankan node index.js(di runtime node), tidak ada node init
//SINGLE PAGE APP	: 
MODULES 	: sekumpulan code yang simple/komplex yg di export, dan import saat akan menggunakan, ada 3 jenis modules
EXPORT 		: terkait jenis module mk dibedakan cara export
IMPORT 		: juga cara import 
CORE MODULES 	: contoh penggunaan coremodule, create: folder, file, data
NPM MODULES 	: modul third party, dan bikin lingkungan penggunaan npm, dg npm init, entrypoint, type:module, nodemon
CLI APP 	: latihan bikin app CLI menggunakan coremodule, bikin CRUD: folder,file,json melalui terminal 
WEB SERVER 	: membuat web server (sebagai pengantar express framework)
EXPRESSJS 	: masuk pelajaran express
-------------------------------------------------
INSTALASI node dan npm di linux
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
setelah masuk node silahkan gunakan perintah di bawah ini:
:> 1+1 atau 1=='1' enter: mirip console pada browser
:> const salam = () => { 	: saat nulis panjang belum di tertutup lalu kita enter akan di kasih "..." artinya lanjutkan sampai ";"
:> .help 		: di kasih navigasi menu utama 
:> touch coba.js 	: add coba.js
:> vi coba.js 		: edit file dengan terminal vim (lihat di bawah vim editor)(atau edit pakai REPL)
:> .load coba.js 	: import file dalam REPL berisi variabel 
:> .save coba.js 	: simpan code REPL ke file
:> .cat coba.js 	: mebaca isi file
:> rm coba.js 		: hapus file
:> .exit/ctrl C, C 	: keluar REPL
:> .break/.clear	: keluar dari code multiline ("..." titik tiga tadi )di REPL (karena nggak bisa keluar begitu saja nanti kode bisa hilang)
:> .editor 		: nulis multiline, 
:> ctrl D 		: finis multiline, dan discard
:> ctrl c 		: cancel multiline, dan save session
----------------
VIM EDITOR
-------------------------
ringkasan:
:> pwd, ls, ll 		: lihat lokasi kerja
:> cd dir 		: masuk ke lokasi kerja
:> vi coba.js 		: buka atau tambah file
:> cat coba.js 		: lihat isi file (fungsi sama dengan vi coba.js existing)
:> i 			: insert mode
:> ESC 			: command mode
:> arrow 		: arah cursor command mod
:> dd 			: hapus maju command mode
:> X 			: hapus mundur 
:> :wq 			: keluar dan simpan 
:> :q! 			: keluar tanpa simpan
-------------------------

file mode: ...
:> vi 			: buka vim editor => about vim (default ada di terminal linux zorin, kalu belum ada install dulu) 
:> man vi 		: help vi 
:> mkdir/cd/touch 	: buka dulu tempat kerja
:> ctrl shift ":" 	: masuk ke vim command 
:> vi coba.js 		: buka file existing
:> vi coba.js 		: addnew file jika blm ada file
:> :q 			: quit atau 
:> :q! 			: quit juga 
:> :w 			: save (write) 
:> :wq 			: save and quit, (simpan dan keluar)
:> :wq coba.js		: save as quit, (simpan, nama, keluar)    

insert mode: ...
:> !arrow 		: tidak support arah keyboard
:> i 			: insert mode tulis pada cursor, 	dan masuk insert mode
:> a 			: insert mode tulis di depan cursor, 	dan masuk insert mode
:> o 			: tambah baris sebagai enter, 		dan masuk insert mode
:> S  			: hapus sebaris, 			dan masuk insert mode

command mode: ...
:> CTRL shift ":" 	: masuk "commond mode"(mendapatkan ":") di awal saat sudah masuk bisa pakai ESC 
:> ESC 			: command mode
:> arrow 			: support arah keyboard 
:> x 			: hapus maju
:> X 			: hapus mundur
:> dd 			: hapus satu baris sekaligus enternya
:> / aqil		: cari kata aqil => cursor kesana//
:> / silmi 		: cari kata silmi => dibawah cursor aqil barusan//
:> ? izza 		: cari kata izza => di atas cursor aqil barusan

command mode tambahan

insert
i: Menyisipkan teks sebelum lokasi kursor saat ini.
I: Menyisipkan teks di awal baris saat ini.
a: Menyisipkan teks setelah lokasi kursor saat ini.
A: Menyisipkan teks di akhir baris saat ini.
o: Membuat baris baru untuk entri teks di bawah lokasi kursor.
O: Membuat baris baru untuk entri teks di atas lokasi kursor.
r: Mengganti karakter tunggal di bawah kursor dengan karakter berikutnya yang diketik.
R: Mengganti teks dari kursor ke kanan.
s: Mengganti satu karakter di bawah kursor dengan sejumlah karakter.
S: Mengganti seluruh baris.

hapus: 
X Huruf Besar: Menghapus karakter sebelum lokasi kursor.
x Huruf kecil: Menghapus karakter di lokasi kursor.
Dw: Menghapus dari lokasi kursor saat ini ke kata berikutnya.
d ^: Menghapus dari posisi kursor saat ini ke awal baris.
d $: Menghapus dari posisi kursor saat ini ke akhir baris.
Dd: Menghapus garis tempat kursor berada.

Copas
Yy: Menyalin baris saat ini.
9yy: Yank baris saat ini dan 9 baris di bawahnya.
p: Menempatkan teks yang disalin setelah kursor.
P: Menempatkan teks yang ditarik sebelum kursor.

keluar
q: quit (Berhenti)
q!: Keluar tanpa menyimpan perubahan, yaitu membuang perubahan.
r fileName: Membaca data dari file bernama fileName.
wq: Menulis dan keluar (simpan dan keluar).
w fileName: Menulis ke file bernama fileName (simpan sebagai).
w! fileName: Menimpa file bernama fileName (simpan sebagai paksa).
!cmd: Menjalankan perintah shell dan kembali ke mode Command.

----------------
INDEX,JS
:> mkdir belajar-node 	: add
:> cd belajar-node 	: masuk
:> code . 		: buka folder ini di vscode
-> new index.js > console.log("hello world")
:> node index.js 	: jalankan file di runtime node, kalau kita memiliki file lagi app.js bisa di jalankan node app.js
:> node . 		: jalankan index.js ini (ingat tidak bisa manggil index.html, app.js(file selain index). melainkan index.js saja)
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
- sekumpulan code reusable dengan antarmuka yg terdefinisi, atau
- sebuah fungsi komplex/simpel dalam file javascript, yang di export, dan bisa di gunakan(require) di file.js lain dalam nodejs tersebut 
- sebuah file berisi module yang diexport juga disebut module
1 core module 		: packet dalam node tidak terlihat (dalanm library) kita tinggal require
2 local module 		: module yang kita bikin sendiri "export require"
3 third party 		: module pihak ketiga atau "modul npm" (kumpulan module yg di koleksi oleh node)
---
const fs =require('fs') : tanpa url, maka akan cari di coremodule, jika tdk ada lalu di local, jk tdk ada maka di third party module
			  gampang nya kalau tanpa url berarti core atau third, sedang url berarti local
----------------	  
EXPORT
- var, arr, obj, func, class, 	: yg umum di export 
- module.exports=salam; 	: export sebuah function dalam sebuah file.js
1. module.exports.salam=salam 	: jangan typo
2. module.exports.halo=halo 	: export beberapa(dua) module dalam sebuah file.js. (put dalam object) 
- atau export langsung dalam bentuk object
	module.export={
		salam:salam,
		halo:halo,
	}
- atau short hand karena key value sama 
	module.export={ salam, halo }
----------------
IMPORT
- const salam= require('./coba') : import "module yg di export" dalam sebuah "file coba.js"
- const coba= require('./coba')  : file memiliki beberapa(dua) module diexport
- console.log(coba.nama) 	 : kalau di export dalam object kita bisa panggil 
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
:> npm install -g nodemon 	: atau yarn global add nodemon,:> node app diganti :> di ganti npm start :> nodemon app  
			  salah satu package npm untuk perubahan saat di save, langsung realtime
:> nodemon app 		: running app.js
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
