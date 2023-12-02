/*
ASYNCHRONOUS
- callback 					-> function sebagai arguments
- synchronus vs asynchronous			-> serial vs pararalel
- promise() 					-> 1. states( fullfilled , rejected , pending ). masuk ke proses async
	- resolve() 				-> 2. ajax terpenuhi akan keluar lewat then lagi
	- reject() 				-> ?  ajax batal akan keluar lewat catch
	- then()				-> 3. then 
	- catch() 				-> ?  catch 
	- finally() 				-> 4. gerbang keluar dari block asynchronous
- all()						-> memanggil banyak async sekaligus
- AJAX 						-> pemanggilan data json/AAPI secara asynchronous
- fetch() 					-> cara baru ajax

Callback
-----------------------------------------------------
adalah function yang argumenya berisi function lainya tanpa invoke
sbg pengantar memahami asynchronous callback
assinchronous callback
- sinchronus adalah exekusi perintah secara terurut linear, 
  scrip blok(bekukan) sebelum scrip di atasnya selesai
- asyncronous scrip di bagi 2 sincronus dan asincronus, 
  yang sincronus di jalankan di satu tempat 	
  sedang asincronus juga di jalan kan di tempat yang lain, 
  sementara task sincronus juga sedang berjalan
*/
	/* contoh callback:
	---------------- */
		function pesan(callback){ const nama = prompt("masukkan nama :"); callback(nama); }	// 3. function pesan menerima args callback, aksi , "callback dijalankan dari args" bukan dari luar
		function halo(nama){ alert(`halo nama saya ${nama}`); }					// 2. function biasa yang dijadikan params (jadi callback)
		pesan(halo); 										// 1. pesan di panggil dengan params callbachalo

	/* atau lebih singkat */
		function pesan(callback){ const nama = prompt("masukkan nama :"); callback(nama); } 	// 2. fungsi pemroses callback di proses, termasuk mengisi parameter	
		pesan( nama => { alert(`halo nama saya ${nama}`); } ); 					// 1. panggil fungsi dengan argument callback

/*
kesimpulan 
	- jika function di panggil dalam bracket sebuah function maka disebut synchronous (blocking)
	- jika function di panggil dalam argument tanpa invoke() maka disebut asynchronous (biasanya pakai arrow)(non-blocking)
	- bisa async ditulis tidak dalam callback, pakai gaya synchronouse tapi tandai dengan async, callbacnya pakai await
Synchronous: 
	Program dalam JavaScript secara default akan dieksekusi baris per baris
	Secara default, proses di JavaScript akan dieksekusi secara Synchronous, 
	artinya baris selanjutnya akan dieksekusi setelah baris sebelumnya selesai dikerjakan
	Proses Synchronous juga biasa disebut Blocking, karena harus menunggu tiap proses selesai, 
	baru proses selanjutnya bisa dilakukan
Asynchronous: 
	Walaupun secara default Synchronous, namun kita bisa membuatnya menjadi Asynchronous.
	pada proses Asynchronous, JavaScript tidak akan menunggu proses tersebut selesai, 
	melainkan JavaScript akan melanjutkan baris selanjutnya, 
	tanpa harus menunggu proses Asynchronous selesai.
	Proses Asynchronous juga biasa disebut Non-Blocking.
kenapa bisa:
	ya di browser modern mesin ada dua: 1 mesin sync, 2 mesin async. 
	jadi bisa berjalan bersamaan tanpa mengganggu
	ada gaya penulisan asyncronous dengan gaya synchronous yaitu tidak dalam callback melainkan async await
	hanya saja tentukan mana "bagian yang async", karena defaultnya "sync"
function dafault asynchronous: 
	ada banyak function/method async bawaan java scrip contoh
	setTimeOut(), setInterval(), promise(), XMLHttpRequest(), fetch() dll
*/

	/* contoh function dafault asynchronous
	----------------
		sebagai pengantar lihat dulu dua function bawaan yang asynchronus berikut: */
		setTimeout(halo, 2000);
		setInterval(halo, 2000);
		function halo(){console.log("halo silmi")}

	/* contoh "syncrhonous"
	---------------- */
		function halo(){ console.log("halo async") }
		function jalankan(){
			halo()					// jalankan pertama (sync)
			console.log("program di jalankan")	// jalankan yang kedua (sync)
		}
		jalankan()

	/* contoh "Asyncrhonous"
	------------------ */
		function halo(){ console.log("halo async") }
		function jalankan(){
			setTimeout( halo, 2000 );		// jalankan di v8 (synchronus)(2 detik kemudian meski pada urutan atas)
			console.log("program di jalankan") 	// ga ada yang di tunggu jalankan juga (asynchronous)
		}
		jalankan()
	/* contoh penulisan "Asyncrhonous"
	------------------ */
		function jalankan(){
			console.log("start") 
			setTimeout(() => console.log("halo async"), 3000);	// biasanya callback bertempat di async
			console.log("end") 	
		}
		jalankan()
/* kesimpulan 
	- jika function di panggil dalam bracket sebuah function maka disebut synchronous
	- jika function di panggil dalam argument tanpa kurung() maka disebut asynchronous (biasanya pakai arrow) 
	*/
/* 
promise():
	adalah :
	sebuah/salah satu "class asynchronous"
	"object yang merepresentasikan keberhasilan/kegagalan sebuah event yang asynchronous, dimasa yang akan datang"
	syntaxt:
		janji( ditepati , diingkari , menanti )
		states( fulfilled , rejected , pending )
	nama fungsi callback nya adalah:
		callback( resolve , reject , finally ) 
		nama2 tersebut artinya adalah: 
		"janji "( "saat janji terpenuhi" , "saat janji di ingkari ", "saat deadline tercapai")
	dalam promis ada aksi yang kita lakukan :
		resolve, reject
	lalu di tindak lanjuti oleh:
		.then, .catch
	terkhir keluar:
		.finally
-------------------------------------------------- */

	new Promise(resolve, reject); 				// basic
	new Promise((resolve, reject)); 			// penulisan praktek pakai kurung
	new Promise((resolve, reject) => resolve('selesai')); 	// promise paling sederhana
	new Promise(resolve => resolve(selesai)); 		// boleh tidak memanggil reject
	new promise( (resolve, reject) => if(true){ resolve() } else { reject() } ); 			// versi lengkap
	/* create dan call */
	const film = new promise( (resolve, reject) => if(true){ resolve() } else { reject() } );	// assign
	film.then().catch().finally()				// versi pemanggilan

	/* 
	1. promise dibuat, masuklah ke v8 engine 
	2. saat true maka resolve() di jalankan, jk false reject() di jalankan
	3. saat resolve maka di program di lewatkan then(), jk reject ke catch()
	4. berikutnya keluar dari v8 engine melalui finally */

	let ditepati = true;
	const janji = new Promise((resolve, reject) => { 		// 1. async (janji)
		if(ditepati){ resolve('janji telah di tepati'); } 	// 2. true resolve()
				else{ reject('ingkar janji ... ')} 			
		});
	/* console.log(janji); disini akan "pending terus" belum bisa keluar dari v8 engine (lewat .then dulu) */
	janji
	.then(response => console.log( 'ok!, ' + response )); 		// 3. then
	.catch( response => console.log('not!, ' + response ));
	.finally( console.log("janji selesai")); 			// 4. keluar dari v8 engine
	
	/* 
	scrip diatas coba simulasikan dengan setTimeout() dan lakukan sync dan async */

	let ditepati = true;		
	const janji = new Promise( (resolve, reject) => {
		if(ditepati){
			setTimeout(() => { resolve('ditepati 1 detik') }, 1500) }	// disini simulasi ajax dilakukan (di dlm async promise)
		else { setTimeout( () => { reject('di ingkari 1 detik') }, 1500) }
		});
	console.log('mulai');								// sync 'mulai'
	janji										// async 'janji'
		.then( response => console.log('ok!, ' + response )) 			// response (akan di tempati json kalau untuk ajax)
		.catch( response => console.log('no!, ' + response))			// bisa di gunakan notif error
		.finally( () => console.log('final!') )
	console.log('selesai'); 							// sync 'mulai'
	console.log('----->>> '); 

/*
all()
	kalau anda memiliki banyak promise kita harus jalan kan satu persatu
	untuk menghemat baris kita gunakan sintax "all"
	pada contoh di bawah ini kita punya 2 promise yang memiliki kecepatan berbeda
	awal nya kita panggil secara normal, lalu kita praktiskan menggunakan all 

	lalu kita panggil 2 promise dengan 2 cara : (yang muncul cuaca dulu baru film. meskipun di panggil belakangan)
	film.then( response => console.log(response) )
	cuaca.then( response => console.log(response) )
	jalankan pakai "promise.all()"

	.then( response => console.log(response) ); // ini akan menampilkan 2 Promise sekaligus dalam array, 
	kalau tampil sendiri2 pakai cara berikut:
	.then( response => {
		const [film, cuaca] = response;
		console.log(film);
		console.log(cuaca); }
		)
	jika sudah paham promise maka kita akan parktekan koneksi fetch dimana return nya adalah promise
	-------------------------------------------------- */
	const film = new Promise( resolve => {
		setTimeout( () => { resolve( [{judul:'avenger',sutradara:'jeff'}] ) }, 1000)
	});
	const cuaca = new Promise( resolve => {
		setTimeout( () => { resolve( [{kota: 'bandung', temp:28}] )}, 500)
	});

	Promise.all([film, cuaca])
		.then( response => {
			const [film, cuaca] = response;
			console.log(film);
			console.log(cuaca); }
			)

/* AJAX
	AJAX singkatan dari Asynchronous JavaScript and XML
	AJAX dapat digunakan untuk mengambil data dari server setelah halaman web tampil scr Asynchronous di background
	AJAX dapat digunakan untuk mengubah tampilan web tanpa harus me-load ulang web (misalnya saat klik kategori) */

	/* ada 3 function yg kita gunakan untuk melakukan ajax (pemanggilan API) 
------------------------------------------------- */
	let ajax = new XMLHttpRequest()		// 1. instance class XHR
	ajax.open("METHOD", "url") 		// 2. open(methode get,pos dll, url)
	ajax.send()				// 3. kirim ke server

	/* basic ajax vanilla
	-------------------- */
		function getSiswa(url, success, error){
			 let xhr = new XMLHttpRequest();
			 xhr.onreadystatechange = function(){
			 	if( xhr.readyState === 4 ){
			 		if(xhr.status === 200){
			 			success(xhr.response)
			 		} else if( xhr.status === 404 ){
			 			error();
			 		}
			 	}
			 }
			 xhr.open('get',url);
			 xhr.send();
		}
		function success(results){ 
			const siswa = (JSON.parse(results));
			siswa.forEach(m => console.log(m.nama));
		}
		function error(){ console.log("ini sedang error!")}

	/* basic ajax jquery
	-------------------- */
		$.ajax({url, success, error})		// basic
		/* --- */
		console.log("mulai ...");
		$.ajax({
			url : "json/siswa.json", 
			success : (sis) => { sis.forEach( m => console.log(m.nama)) }, 
			error : (e) => { console.log(e.responseText); }
		});
		console.log("selesai ...");

/* 
fetch()
	dua ajax di atas kalau di console log sudah menghasilkan hal yang sama
	namun lihat betapa banyak yang harus di tulis, nah sekarang ada object ajax yang lebih simple
	yaitu mengunakan fetch: 

	kalau kita ngambil data API json,di js biasanya menggunakan ajax vanilla. atau jquery ajax,
	nah sekarang ada fitur baru dari java script yaitu: fetch()
	hanya sebaris code / lebih singkat
	namun sayang yang kita ambil dari fetch di kembalikan berupa promise (bool).
	padahal yang kita butuhkan adalah json atau object
	maka dari itu kita membutuh langkah conversi promise ke object. 

	" fetch(url).then().catch() "
	" new promise((true,false,delay)=>{if(ada true){resolve(then((){}).then((){}))}else{reject(catch((){}))}}) "
	// kalau then nya di dalam tak perlu di console diluar
	" console.log(sync) "
	" console.log(ada.then( () => console.log(ada))) "
	" console.log(sync) "

------------------------------------------------- */
	/* basic */
	fetch('url'); 											

	/* basic fetch lengkap: */
	fetch(url)
		.then((respon){json})
		.then((respon){object}) 
		.catch()
		.finally()

	/* ini hanya hasilkan bool */
	const film =  fetch('http://www.omdbapi.com/?apikey=a8dfa1c0&s=Avengers');
	console.log(film); 

	/* contoh real:
	.then1(true) konversi ke response bool ke json
	.then2(json text) konversi json text ke data objek
	.finally(keluar dr v8)*/ 
	fetch('http://www.omdbapi.com/?apikey=a8dfa1c0&s=Avengers')
		.then(response => response.json())
		.then(response => console.log(response));
		.catch("gagal ambil data")
		.finally(console.log("final"))

// Cursor Pembahasan ------>>>>>> ------>>>>>> ------>>>>>> ------>>>>>> ------>>>>>> 
