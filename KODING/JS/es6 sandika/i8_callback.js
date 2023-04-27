// CALLBACK
/*
adalah sebuah function yang di jalankan dengan parameter menggunakan function lainya 
*/

function halo(nama){ alert(`halo nama saya ${nama}`); }					// 5. jalankan call back
function pesan(callback){ const nama = prompt("masukkan nama :"); callback(nama); }	// 2. terima param callback => 3 runing promp nama => 4 panggil callback dan kirim nama dari promp  
pesan(halo);										// 1. sebuah function di panggil dg param function lain
// atau lebih singkat
function pesan(callback){ const nama = prompt("masukkan nama :"); callback(nama); }	
pesan( nama => { alert(`halo nama saya ${nama}`); } );
// tapi focusnya memahami asynchronous callback

/*
assinchronous callback
- sinchronus adalah exekusi perintah secara terurut linear, 
  scrip blok(bekukan) sebelum scrip di atasnya selesai
- asyncronous scrip di bagi 2 sincronus dan asincronus, 
  yang sincronus di jalankan di satu tempat 	
  sedang asincronus juga di jalan kan di tempat yang lain, 
  sementara task sincronus juga sedang berjalan
- simulasi asinchronous
- ada sbuah file json berisi data siswa yang akan di panggil 
  di javascript menggunakan ajax (task asincronus)
- di js nya juga ada beberapa function sincronus yang sedang di jalan kan

assinchronous callback dengan ajax
- di bawah ini adalah contoh methode async ajax dengan vanillaJS, 
- ada file json, jangan lupa di jalan kan di liveserver vscode, atau xampp 
- function getSiswa(url, success, error){} // bentuk dasar , 
  success dan error adalah callback:
*/

function getSiswa(url, success, error){
	// jalankan ajax
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

// function success(results){ console.log(JSON.parse(results)); } // atau
function success(results){ 
	const siswa = (JSON.parse(results));
	siswa.forEach(m => console.log(m.nama));
}
function error(){ console.log("ini sedang error!")}
/*
panggil simulasi callback ajax (saat di console.log yang tampil mulai 
dan selesai dulu lalu data json)
itu terjadi karena json /ajax terjadi/  di kerjakan di tempat lainya dan boleh di exekusi 
berikutnya setelah function sincronus di jalankan
*/ 
console.log("mulai ...");
getSiswa('json/siswa.json', success, error);
console.log("selesai ...");

// ajax pakai jqurey:
// --- basic
// $.ajax({url, success, error})
// --- coba asynchronous
console.log("mulai ...");
$.ajax({
	url : "json/siswa.json", 
	success : (sis) => { sis.forEach( m => console.log(m.nama)) }, 
	error : (e) => { console.log(e.responseText); }
});
console.log("selesai ...");


// namun sekarang sudah ada fetch penganti ajax di video selanjutnya ada
// disini hanya mensimulasikan callback asynchronous

selanjutnya kita lakukan latihan pada promise latihan i_9 di foldaer json .....

// ============================= RINGKASAN =============================
/* Pemahaman callback: adalah sebuah function yang di jalankan dengan parameter menggunakan function lainya */

// pengertian dasar
function satu(){console.log('halo satu')}		// 1. func biasa
function dua(){satu()} 					// 2. func biasa bisa di panggil langsung dalam fungsi lainya
function tiga(arg){arg()} 				// 4. di jalankan via args
tiga(dua); 						// 3. (callback)fungsi biasa bisa di call dalam fungsi lain lewat param
// pengertian menengah
function halo(nama){ alert(`halo nama saya ${nama}`); }					// 5. jalankan call back
function pesan(callback){ const nama = prompt("masukkan nama :"); callback(nama); }	// 2. terima param callback => 3 runing promp nama => 4 panggil callback dan kirim nama dari promp  
pesan(halo);										// 1. sebuah function di panggil dg param function lain
// atau lebih singkat
function pesan(callback){ const nama = prompt("masukkan nama :"); callback(nama); }	
pesan( nama => { alert(`halo nama saya ${nama}`); } );


// tapi focusnya memahami asynchronous callback 
// ----------------------------------------------------
// ----- JALANKAN FUNCTION DENGAN ARGUMEN FUNCTION JUGA
function pesan(callback){ const nama = prompt("masukkan nama :"); callback(nama); }	
pesan( nama => { alert(`halo nama saya ${nama}`); } );
// contoh lain:
	map( => )
	fiter( => )
	reduce( (a,b) => )
// ----- ASYNCHRONOUS (bentuk dasar ajax vanilla)
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
// ----- SIMULASI ASYNCHRONOUS
console.log("mulai ...");
$.ajax({
	url : "json/siswa.json", 
	success : (sis) => { sis.forEach( m => console.log(m.nama)) }, 
	error : (e) => { console.log(e.responseText); }
});
console.log("selesai ...");
// ============================ /RINGKASAN =============================
