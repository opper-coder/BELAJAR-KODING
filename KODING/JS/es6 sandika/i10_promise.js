/*
fetch = ajax = hasilkan (true/false) sekaligus kembalikan data json
fetch ini "fetch().then.catch" true/false tapi namun menghasilkan text 
dan bisa di tampilkan dalam promise aja di dalam nya ada resolve dan catch
maka kelola dalam object promise:

" fetch(url).then().catch() "
" new promise((true,false,delay)=>{if(ada true){resolve(then((){}).then((){}))}else{reject(catch((){}))}}) "
// kalau then nya di dalam tak perlu di console diluar
" console.log(non promise) "
" console.log(ada.then( () => console.log(ada))) "
" console.log(non promise) "
*/
// ini fetch:
fetch(url).then((respon){json}).then((respon){object}) 
// ini promise:
new promise( (resolve, reject, finaly) => {	if(true){resolve}else if{reject}else{finaly} }
// sama dengan fetch promise harus di panggil pakai then
const coba = new Promise(resolve => {
	setTimeout( ()=>{
	resolve("selesai")
	}, 2000);
}); 
coba.then(()=>{console.log("haloo promise")})
coba.then(()=>{console.log("haloo promise")}).catch().finaly()
// ================================= RINGKASAN =================================
// ajax
// contoh ajax ada di atas tidak di tulis disini
// ----- DASAR
fetch('url');
// ----- INI HASILKAN PROMISE
const film =  fetch('http://www.omdbapi.com/?apikey=a8dfa1c0&s=Avengers');
console.log(film);
// ----- KONVERSI PROMISE KE JSON
fetch('http://www.omdbapi.com/?apikey=a8dfa1c0&s=Avengers')
	.then(response => response.json())
	.then(response => console.log(response));
//-------------------------------------------------------------------------------
// ----- SEBELUMNYA PELAJARI SYNTAX DASAR PROMISE DULU
let coba = new promise()
coba.then().catch()
// ----- 
new promise(HOF/callback) // parameter higher order function
let coba = new promise( (resolve, reject, finaly) => {if(true){resolve}else if{reject}else{finaly}} ) 
// call
coba.then(f).catch(f)
// ----- CONTOH1 SEDERHANA PROMISE
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
	if(ditepati){
		resolve('janji telah di tepati');
	}
	else{ reject('ingkar janji ... ')}
});
console.log(janji1);
// ----- JALANKAN PROMISE SECARA ASYNC (konversi promise ke object)
// console.log(janji1); yang ini cara sync kalau async pakai then sbb:
janji1.then( response => console.log( 'ok..., ' + response ))
	.catch( response => console.log('not ok..., ' + response ));
// ----- ATAU GAMBARAN LEBIH DEKAT ADA DELAY
// console 2: tampilkan: "janji2" kemudian delay "then" nya
let ditepati = true;
const janji2 = new Promise( (resolve, reject) => {
	if(ditepati){
		setTimeout(() => { resolve('ditepati setelah beberapa waktu') }, 3000)
	}	else { setTimeout( () => { reject('di ingkari setelah beberapa waktu') }, 3000) }
});
	console.log("mulai")
	console.log(janji2.then( () => console.log(janji2)))
	console.log("selesai")
// ----- TULISAN PROMISE YANG SEBENARNYA:
let ditepati = true;
const janji2 = new Promise( (resolve, reject) => {
	if(ditepati){
		setTimeout(() => { resolve('ditepati setelah beberapa waktu') }, 3000)
	} else { setTimeout( () => { reject('di ingkari setelah beberapa waktu') }, 3000) }
});
console.log('mulai');
// console.log(janji2.then( () => console.log(janji2)));
janji2
	.finally( () => console.log('selesai menunggu!') )
	.then( response => console.log('ok..., ' + response ) )
	.catch( response => console.log('not ok ..., ' + response) )
console.log('selesai');
// ----- CALL PROMISE LEBIH DARI SATU PAKAI ALL
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
// ================================ /RINGKASAN =================================









// KONSEP PROMIS
/*
- kalau kita ngambil data API json,di js biasanya menggunakan ajax. 
  baik dari jquery atau ajax dari vanilla javascript 
- nah sekarang ada fitur baru dari java script yaitu pakai 
  sintax fetch hanya sebaris code / lebih singkat
- namun sayng yang kita ambil dari fetch di kembalikan 
  berupa promise.padahal yang kita butuhkan adalah json atau object
- maka dari itu kita membutuh langkah conversi promise ke object. 
  namun sebelum itu kita harus tahu dulu apa itu promise
*/

// ajax jquery
$.ajax({url, success, error});
// ---
$.ajax({
	url : 'http://www.omdbapi.com/?apikey=a8dfa1c0&s=Avengers',
	success : film => console.log(film), 				// biasanya film diganti dengan nama response
	error : ()=>{ console.log("ini sedang error") }   	// kalau bikin function error kalau nggak, nggk apapa
});
// ajax vanilla javascript
// ---
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
	 xhr.open('get', 'http://www.omdbapi.com/?apikey=a8dfa1c0&s=Avengers');
	 xhr.send();
}
// --- contoh ke2 kok kayak nggak sama coba perhatikan:

	 const xhr = new XMLHttpRequest();					// 1. jalankan object ajax
	 xhr.onreadystatechange = function(){
	 	if( xhr.status === 200 ){						// 2. kita kasih pengkondisian berhasil atau tidak
	 		if( xhr.readyStatus === 4 ){
	 			console.log(JSON.parse(xhr.response));	// 4. kalau berhasil di kembalikan sebagai text -> lalu di parsing ke json
	 		} 
	 	} else { 										// 3. kalau gagal disini
	 			console.log(xhr.responseText); 
	 		}
	 	}
	 
	 xhr.open('get', 'http://www.omdbapi.com/?apikey=a8dfa1c0&s=Avengers');
	 xhr.send( );

/* 
	dua ajax di atas kalau di console log sudah menghasilkan hal yang sama
	namun lihat beatapa banyak yang harus di tulis, 
	nah sekarang ada object ajax yang lebih simple
	yaitu mengunakan fetch: 
*/

fetch('url'); // basic
// ---
const film =  fetch('http://www.omdbapi.com/?apikey=a8dfa1c0&s=Avengers');
console.log(film); 
// dah tampil namun masih berupa promise maka tindakan 
// selanjutnya adalah konversi promis ke json, namun perkenalan dulu dengan promise
fetch('http://www.omdbapi.com/?apikey=a8dfa1c0&s=Avengers')
	.then(response => response.json())
	.then(response => console.log(response));
// sekarang yang kita bahas adalah promise:
/* 
adalah :
"object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous, dimasa yang akan datang"
syntaxt:
	janji( ditepati , diingkari , menanti )
	states( fulfilled , rejected , pending )
nama fungsi callback nya adalah:
	callback( resolve , reject , finally ) 
	// nama2 tersebut artinya adalah: 
	"janji "( "saat janji terpenuhi" , "saat janji di ingkari ", "saat deadline tercapai")
dalam promis ada aksi yang kita lakukan :
aksi( then (saat terpenuhi, catch saat di ingkari))
*/

// basic
new promise( (resolve, reject) => if(true){ resolve } else { reject } )
	// --- contoh1 :
let ditepati = true;
const janji1 = new Promise((resolve, reject) => { 
							if(ditepati){
								resolve('janji telah di tepati');
							} 
								else { reject('ingkar janji ... ')}
								}
							);
console.log(janji1);
	/*
	disini sudah dapat di console. namun karena masih return promise
	maka harus da conversi ke object
	jadi kau ingin return resolve berupa object maka tangkap dalam then
	coba cara panggilnya begini : 
	jalankan var promise -> chain dengan then -> chain dengan catch 
	*/
janji1.then( response => console.log( 'ok..., ' + response )).catch( response => console.log('not ok..., ' + response ));
	// contoh2 ada timeout simulasi pengambilan data :
let ditepati = false;		// simulasikan true atau false
const janji2 = new Promise( (resolve, reject) => {
				if(ditepati){
					setTimeout(() => { resolve('ditepati setelah beberapa waktu') }, 3000)
				}	else { setTimeout( () => { reject('di ingkari setelah beberapa waktu') }, 3000) }
				});

console.log('mulai');
	// console.log(janji2); // kalau langsung jalankan ini maka pending terus, sebab then nya belum di jalankan 
console.log(janji2.then( () => console.log(janji2)));	// janji2 di console 2 kali agar terlihat pending dan resolve nya
console.log('selesai'); // 1. mulai 2. janji2 3. than tapi pending 4. skip ke selesai 5. then nya tercapai dan di jalankan
	// --- tapi nulisnya begini pada prakteknya --> :
let ditepati = false;
const janji2 = new Promise( (resolve, reject) => {
				if(ditepati){
					setTimeout(() => { resolve('ditepati setelah beberapa waktu') }, 3000)
				}	else { setTimeout( () => { reject('di ingkari setelah beberapa waktu') }, 3000) }
				});

console.log('mulai');
// console.log(janji2.then( () => console.log(janji2)));
janji2
	.finally( () => console.log('selesai menunggu!') )
	.then( response => console.log('ok..., ' + response ))
	.catch( response => console.log('not ok ..., ' + response))
console.log('selesai');
	// 1. mulai 2. janji2 3. than tapi pending 4. skip ke selesai -
	// 5. finally dijalankan lebih dahulu (biasanya di gunakan untuk mematikan animasi loading)(loading sebaiknya di buat pertama promise)
	// 6. lalu terakhir than telah selesai pending maka di jalankan then nya

// ALL 
	/*
		kalau anda memiliki banyak promise kita harus jalan kan satu persatu
		untuk menghemat baris kita gunakan sintax "all"
		pada contoh di bawah ini kita punya 2 promise yang memiliki kecepatan berbeda
		awal nya kita panggil secara normal, lalu kita praktiskan menggunakan all 
	*/


const film = new Promise( resolve => {
	setTimeout( () => { resolve( [{judul:'avenger',sutradara:'jeff'}] ) }, 1000)
});

const cuaca = new Promise( resolve => {
	setTimeout( () => { resolve( [{kota: 'bandung', temp:28}] )}, 500)
});
// lalu kita panggil 2 promise dengan 2 cara : (yang muncul cuaca dulu baru film. meskipun di panggil belakangan)
// film.then( response => console.log(response) )
// cuaca.then( response => console.log(response) )
// --- jalankan pakai "promise.all()"
Promise.all([film, cuaca])
	// .then( response => console.log(response) ); // ini akan menampilkan 2 Promise sekaligus dalam array, kalau tampil sendiri2 pakai cara berikut:
	.then( response => {
		const [film, cuaca] = response;
		console.log(film);
		console.log(cuaca); }
		)

// jika sudah paham promise maka kita akan parktekan koneksi fetch dimana return nya adalah promise
// dihalaman i_11 