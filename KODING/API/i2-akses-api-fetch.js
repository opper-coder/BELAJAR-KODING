/*
API
---------------------------------------------------------------------------------------------------
	- pengertian asynchronous 	-> pengertian asynchronus dan promise
	- ajax vanilla			-> ajax basic GET ke API hanya (sebenarnya bisa GET dan POST)
	- ajax jquery, basic		-> bisa GET saja (sebenarnya bisa GET POST, UPDATE, PUT, DELETE PATCH)
	- ajax fetch() basic		-> Hanya GET
	- fetch() CRUD 			-> lebih advance melakukan CRUD ke API (UPDATE DELETE NYA BELUM ADA YA)
*/


/* AJAX
	AJAX singkatan dari Asynchronous JavaScript and XML
	AJAX dapat digunakan untuk mengambil data dari server (API) setelah halaman web tampil scr Asynchronous di background
	AJAX dapat digunakan untuk mengubah tampilan web tanpa harus me-load ulang web (misalnya saat klik kategori) */

	/* ada 3 function yg kita gunakan untuk melakukan ajax (pemanggilan API) 
------------------------------------------------- */
	let xhr = new XMLHttpRequest()		// 1. instance class XHR
	xhr.open("METHOD", "url") 		// 2. open(methode get,pos dll, url)
	xhr.send()				// 3. kirim ke server

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
		getSiswa(u,s,e); 			// panggil

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
--------------------
	dua ajax di atas kalau di console log sudah menghasilkan hal yang sama
	namun lihat betapa banyak yang harus di tulis, nah sekarang ada object ajax yang lebih simple
	yaitu mengunakan fetch: 

	kalau kita ngambil data API json, di js biasanya menggunakan ajax vanilla. atau jquery ajax,
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

/*
FETCH() CRUD
===================================================================================================
- bikin sebuah file HTML dan javasecript include > jalankan ke live server
- misalnya ki tanggil API dari HTTP seperti ini ""https://reqres.in/api/users/1""

GET
---------------------------------------------------------------------------------------------------
*/
fetch("https://reqres.in/api/users/1") 				// isikan URL default method GET
.then((response)=>console.log(response)) 			// tangkap dengan then. response object body header json 
/*
 - pada langkah ini kita hanya dapat response header dan body. 
 - disini juga kita bisa baca API spec nya sehingga jika kita butuh kan kita tinggal jalankan
 - kalau mau tau API spec error nya(misalnya header status: 404 atau berapa, header ok:true), 
   kita tinggal ganti users/1 di ganti dengan users/x  
 - untuk membaca data kita harus melakukan conversi seperti di bawah ini
*/
fetch("https://reqres.in/api/users/1")
.then((response) => response.json())
.then((json) => console.log(json))
// atau boleh
fetch("https://reqres.in/api/users/1")
.then((hasil) => hasil.hasil())
.then((hasil2) => console.log(hasil2))

/*
POST
---------------------------------------------------------------------------------------------------
masih sama dengan di atas bedanya: kita kirimkan data POST HEADER dan BODY
- fetch(url, {method, header, body})
*/
fetch("https://reqres.in/api/users",{
	method:'post',
	headers:{
		'Content-Type':'application/json'
	},
	body:JSON.stringify({
		name: 'aqil',
		pekerjaan: 'siswa'
	})
})
.then((response) => response.json())
.then((json) => console.log(json))
/*
ERROR HANDLING
---------------------------------------------------------------------------------------------------
pada then pertama kita lakukan error handling pada GET. percabangan jika data di temukan dan tidak
	fetch()
	.then(() => {
		if(){}
		else{}})
	.then()
*/
fetch("https://reqres.in/api/users/1")
.then((response) => {
	if(response.ok){
		console.log('ada data')
	}
	else{
		console.log('tak ada data')
	}
})

// if true kita ganti dengan kembalikan json return json
// else kita ganti dengan promise reject ( karena di fetch itu ada promise (cari penjelasan ?????))
// karena promise kita bisa tangkap dengan .then .catch

fetch("https://reqres.in/api/users/x")
.then((response) => {
	if(response.ok){
		return response.json()
	}
	else{
		return Promise.reject("ada yg tdk sesuai")
	}
})
.then((json) => console.log(json))
.catch((error => console.log("halo " +error)))

// lebih lengkapnya dan bisa di gunakan error yang lebih spesifik 
// misalnya bisa membedakan response error 404 dan 201

fetch("https://reqres.in/api/users/x")
.then((response) => {
	if(response.ok){
		return response.json()
	}
	else{
		return Promise.reject({
            status:response.status 			// kita ambil dari response.status
        })
	}
})
.then((json) => console.log(json))
.catch((error) => {
    if(error.status == 404 ){ console.log('data tidak di temukan...')}  // disini error tersebut di tangani
})


// pada dasarnya basic error handling ini sudah cukup

fetch("https://reqres.in/api/users/x")
.then((response) => response.json())
.then((json) => console.log(json))
.catch((error) => { console.log(error) })


/*
UPDATE
---------------------------------------------------------------------------------------------------
belum ada
*/

/*
DELETE
---------------------------------------------------------------------------------------------------
belum ada
*/




// Cursor Pembahasan ------>>>>>> ------>>>>>> ------>>>>>> ------>>>>>> ------>>>>>> 

