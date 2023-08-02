EXPRESS JS sumber: youtube eko kurniawan proggrammer ZN expressjs
-----------------------------------------------------------
EXPRESS web server


node app



menit ke 14 di atas belum di tulis
-----------------------------------------------------------
new file > hello.js > berisi di bawah ini > localhost:3000 atau :> node src/hello.js
>  maka akan running > hanya menampilkan cannot/get > 
(halamanya belum ada tapi udah bisa runing expresnya)

import express from "express"

const app = express();
app.listen(3000, ()=>{console.info("server started on port:3000")})


ROUTING
-----------------------------------------------------------
- routing biasanya akan di buat banyak > karena itu semacam trigger request > semacam tombol untuk API
- tehnik mentrigger request yang akan meneruskan callback yag kita tuju
- di EXPRESSjs bisa menggunakan object aplication, dg method sesuai HTTP nya
- ada banyak method di express misalnya:
	app.connect(path, callback) 	// HTTP method connect
	app.get(path, callback) 		// HTTP method get
	app.post(path, callback) 		// HTTP method post
	app.put(path, callback) 		// HTTP method put
	app.delete(path, callback) 		// HTTP method delete
	app.option(path, callback) 		// HTTP method option
	app.trace(path, callback) 		// HTTP method trace
	app.head(path, callback) 		// HTTP method head
	app.patch(path, callback) 		// HTTP method patch
	app.all(path, callback) 		// HTTP method all
- artinya saat kita gunakan app.get("url ini", callback get)
- artinya saat kita gunakan app.post("url ini", callback post)
- artinya saat kita gunakan app.all("url ini", callback apapun yg kita buat disini)
- walaupun banyak tapi biasanya kita hanya menggunakan 5 saja get,post,delete,patch,put. 

- contoh pada code di helo.js kan sudah ada port listen:3000 > artinya saat localhost:3000 di panggil server sudah jalan > 
- tugas kita tinggal buatkan routing > yaitu saat mengakses local host kita langsung ke root aplikasi kita > buatkan routing ke root: 

import express from "express"

const app = express();

app.get('/', (req, res) => { res.send('hello world!') }); 		// roting ini akan menjalankan callback yg melakukan apapun contoh console.log(), atau HTML
app.get('/', (req, res) => { res.send('hello world!') }); 		// kalau bikin lagi get dg url yg sama maka akan di prioritaskan yg pertama
app.get('/eko', (req, res) => { res.send('hello Eko!') }); 		// localhost:3000/eko, callback: hello eko

app.listen(3000, ()=>{console.info("server started on port:3000")})

UNIT TEST
-----------------------------------------------------------
- sebelumnya kita lakukan test aplikasi secara manual dengan buka browser, start/restart server, dst. karena nodejs tidak liveserver
- sekarang kita gunakan library unit test untuk express > namanya: supertest > install dulu > 
- buka documentasi > lihat versi terbaru > tambahkan di package.json > "supertest": "^6.2.4" > npm install > selesai
- cara penggunaanya: cekidoc, lengkap disana cara penggunanya. tapi disini akan kita gunakan sesuai keperluan ini saja
- atau alternative supertest, bisa menggunakan "nodemon" (sepertinya(tidak perlu restart nodejs di terminal))
- caranya: new file test/request.test.js > copas script sebelumnya lalu tambahkan test().

import express from "express"
import request from "supertest" 					// 1. import request() test

const app = express();

app.get('/', (req, res) => { res.send('hello world!') }); 		// 4. saat fungsi yg di test di ubah: misalnya "halo eko", maka unit test meng expect kan berbeda/error
										catatan: request adalah representasi dari HTTP request, penjelasanya nanti
test("test express", async (){  					// 2. bikin test() tidak butuh listen port disini
	const response = await request(app).get("/"); 
	expect(response.text).toBe("hello world");  			// 3. saat di running di segitiga di samping kiri dari function test ini menghasilkan "hello world"
}) 

- dengan cara ini kita tidak perlu test nya menggunakan browser maka lebih produktif

REQUEST
-----------------------------------------------------------
- saat kita bikin callback di router, parameter pertama adalah object "request", mis: app.get('/',(req, res)=>{})
- yg berisi informasi HTTP: param, ok, header, body dll
- objecnya ada banyak sekali: lihat di https://expressjs.com/en/4x/api.html#req
- implementasi test seperti di bawah ini:
- langkahnya sbb: new file test/request-http > copas di atas dan ubah sbb

import express from "express"
import request from "supertest" 								 

const app = express();

app.get('/', (req, res) => { res.send(`hello world! namaku: ${req.query.name}`) }); 	// 1. contohnya kita akan ambil data dari request

test("test express", async (){  								 
	const response = await request(app).get("/").query({name: "aqil"}); 		// 2. kita kirim name .query({name: "world"});
	expect(response.text).toBe("hello world");  					// 3. expectasi tesnya maka akan menampilkan helloworld 
})  											// - kalau di kirim nama dan text lain maka error expectasinya berbeda 
											// - tapi setidaknya jalan query.nama nya bisa di kirim dan diterima 



REQUEST 
-----------------------------------------------------------
untuk mendapatkan informasi URL saat ini kita bisa gunakan "Object Request"
req.originalUrl , untuk mendapatkan full URL beserta parameter nya
req.path , URL tanpa query parameter
req.hostname , nama Host atau nama domain kita
req.protocol , protocol
req.secure , cek HTTPS atau bukan
req.subdomains , mendapatkan array sub domain dari web kita 

- sebagai contoh kita akan ambil req.original dsb. dalam response dalm bentuk jason pada saat kita bikin callback dibawah ini

import express from "express";

const app = express();

app.get('/hello/world'), (req, res) => {
	res.json({
		path: req.path,
		originalUrl: req.originalUrl,
		hostname: req.hostname,
		protocol: req.protocol,
		secure: req.secure
	})
});

test("test request URL", async (){  								 
	const response = await request(app).get("/hello/world")
	.query({name: "aqil"}); 					
	expect(response.body).toEqual({
		path: "/hello/world",
		originalUrl: "/hello/world?name=aqil",
		hostname:"127.0.0.1"
		protocol:"http",
		secure:false,
	});  											
})  


menit 36 ..







