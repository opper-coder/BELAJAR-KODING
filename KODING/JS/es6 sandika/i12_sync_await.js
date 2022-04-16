// ============================= RINGKASAN =============================
// --------------------------- DASAR SYNTAX ASYNC AWAIT
function cobaPromise(){
	return new Promise(resolve => {
		setTimeout( ()=>{
		resolve("selesai")
		}, 2000);
	}); 
}
async function cobaAsync(){
	const coba = await cobaPromise();
	console.log(coba);
}
cobaAsync();
// --------------------------- ERROR ASYNC AWAIT
function cobaPromise(){
	const delay = 5000;
		return new Promise((resolve, reject) => {
			if( delay < 5000 ){
			setTimeout( ()=>{
			resolve("selesai")
			}, delay); } else { reject('kelamaan!'); }
		});
}
 	// 	.then(()=>{console.log(cobaAsync)})
 	// 	.catch(()=>{console.log(cobaAsync)})
async function cobaAsync(){
	try{
		const coba = await cobaPromise();
		console.log(coba);
	}
	catch(err){
		console.log(err)
		// atau pakai ini biar keren console.error(err)
	}
}
// ---
cobaAsync();
// ---
// error handling yang pakai fetch kita punya contoh di halaman i14
// ============================= /RINGKASAN =============================


 /*
SYNC AWAIT KONSEP

adalah cara penulisan asynchronus alternative selain promise dan fetch, 
namun sedikit ada perbedaan dan ada kontex masing-masing

dari mdn: 

" synchronous adalah sebuah "function" yang bekerja secara asynchronous(melalaui event loop)
yang menghasilkan (implisit) "promise" sebagai sebagai return valuenya, tapi cara
penulisan codenya menggunakan penulisan yang synchronous(function biasa) "

" sebuah async function dapat memeiliki keyword await di dalamnya (akan hidup jika ada await)
untuk memberhentikan sementara eksekusi fungsinya sambil menunggu promisenya selesai resolve,
baru lanjutkan ke baris berikutnya "

" jadi funngsi biasa tapi jika ada await jadi nunggu resolve dulu baru di jalankan lalu exekusi 
berikutnya"
*/



new Promise(resolve, reject); // basic
new Promise((resolve, reject)); // penulisan praktek
new Promise((resolve, reject) => resolve('selesai')); // promise paling sederhana
new Promise(resolve => resolve(selesai)); // boleh tidak memanggil reject (tidak menangani reject)


// contoh1:
const coba = new Promise(resolve => resolve('selesai')); // boleh tidak memanggil reject (tidak menangani reject)
console.log(coba); // hasilnya : promise langsung di jalankan dan selesai, sekarang resolve nya kita bungkus dengan setTimeout

const coba = new Promise(resolve => {
	setTimeout( ()=>{
	resolve("selesai")
	}, 2000);
}); 

/*
NAVIGASI KETERANGAN:
1. bikin fungsi async -> didalamnya resolve di delay(bungkus) 2 detik
2. jika langsung di console. begitu saja, hasilnya pending, itu disebabkan karena masih synchronus
3. kalau mau asyncronous jalan kan coba pakai then "coba.then(()=>{})" 
	dibaca: buat function promis -> delay -> resolve 'true' => kalau true jalankan then() => jalankan then{}
	dilihat/console : refresh -> nunggu 2 detik -> baru kembalikan isi then{"haloo promise"}
5. cara membuat promise sudah selesai dan jalan
4. sekarang kita masukan ke konsep "async await" yaitu penulisan asyncronus dengan syncronus
	yaitu membuat promise biasa dijadikan return async await:
*/

const coba = new Promise(resolve => {
	setTimeout( ()=>{
	resolve("selesai")
	}, 2000);
}); 

// console.log(coba)
coba.then(()=>{console.log("haloo promise")})

/*
ASYNC AWAIT
NAVIGASI KETERANGAN:
1. sekarang kita masukan ke async await/promise di panggil dalam function syncronus tapi tetap berlaku asyncronus
2. buat function yang returnya adalah promise dasar
3. namun kalau langsung console hasilnya pending
4. maka panggil dan chaining dengan then(), sampai disini Promise sudah jalan normal 
5. coba panggil function sekarang (cobaAsync())
6. jika di jalankan begitu saja maka pending lagi karena masih sync, terus gimana?
7. tulis keyword "async" di depan function dan "await" di depan function pemuat promise, keduanya harus ada
8. coba panggil function sekarang (cobaAsync())
9. maka "tunggu tiga detik dan tampil SELESAI"

1. devinisi lagi: async await adalah function yang bekerja sebagai async, prakteknya:
2. bikin promise "new promise()"
3. lalu bungkus dalam sbuah function biasa("cobaPromise()") dan returnya promise tsb
4. sekarang panggil cobaPromise (pemilik promise) dari "function async await"
5. bikin "function async await", caranya :
	a. bikin function biasa lalu tambahkan "keyword async" di depan nama function
	b. tambahkan "keyword await" pada callback function yang membawa promise
	c. terakhir panggil(callback) "function async await".
	4. kesimpulan ada 2 function disini:
		1. pemuat promise
		2. function callback yang async await
*/

function cobaPromise(){
	return new Promise(resolve => {
		setTimeout( ()=>{
		resolve("selesai")
		}, 2000);
	}); 
}
// console.log(cobaPromise);
// ---
// const coba = cobaPromise();
// coba.then(()=>{console.log(coba)}) 
// ---
// function cobaAsync(){
// 	const coba = cobaPromise();
// 	console.log(coba);
// }
async function cobaAsync(){
	const coba = await cobaPromise();
	console.log(coba);
}
// ---
cobaAsync();


/* 
MENANGANI ERROR / REJECT dengan TRY dan CATCH
1. contoh di atas kan kalau "resolve == "true, maka hasilnya akan di tangkap oleh 
	callback "then", yaitu tempat aksi apa saja (termsuk console.log) yang akan 
	dilakukan saat "resolve true"  
2. maka pada saat pemanggilan sebaiknya chaining dengan "then dan catch", 
	maka saat "resolve = false alias reject" maka yang nangkap = adalah catch tersebut 
3. coba chaining di variabel lalu -> panggil dengan chaining,
4. dalam function pembungkus promise nya buat kan kondisi "resolve true false" 
5. sekarang akan kita gunakan try catch
*/

function cobaPromise(){
	const delay = 4000;
		return new Promise((resolve, reject) => {
			if( delay < 5000 ){
			setTimeout( ()=>{
			resolve("selesai")
			}, delay); } else { reject('kelamaan!'); }
		});
}
// ---
const coba = cobaPromise();
// ---
 	coba
 	.then(()=>{console.log(coba)})
 	.catch(()=>{console.log(coba)})
/* 
MENANGANI ERROR / REJECT 
1. contoh di atas kan kalau "resolve == "true, maka hasilnya akan di tangkap oleh 
	callback "then", yaitu tempat aksi apa saja (termsuk consolelog) yang akan 
	dilakukan saat "resolve true"  
2. maka pada saat pemanggilan sebaiknya chaining dengan "then dan catch", 
	maka saat "resolve = false alias reject" maka yang nangkap = adalah catch tersebut 
3. coba chaining di variabel lalu -> panggil dengan chaining,
4. dalam function pembungkus promise nya buat kan kondisi "resolve true false" 
5. sekarang akan kita gunakan try catch
// ---
bikin aplikasi pemanggil cobaPromise() pakai synchronous pakai
"try{}" pengganti "then", dan catch(){} untuk menangani resolve dan catch. 
karena pada then dan catch adalah async
dan async dan await adalah sync namun untuk nagani resolve true dan false nya pakai try dan catch 
*/
function cobaPromise(){
	const delay = 5000;
		return new Promise((resolve, reject) => {
			if( delay < 5000 ){
			setTimeout( ()=>{
			resolve("selesai")
			}, delay); } else { reject('kelamaan!'); }
		});
}
// --- PAKAI THEN DAN CATCH 
// const cobaAsync = cobaPromise();
// ---
 	// cobaAsync
 	// 	.then(()=>{console.log(cobaAsync)})
 	// 	.catch(()=>{console.log(cobaAsync)})
// --- PAKAI TRY DAN CATCH
async function cobaAsync(){
	try{
		const coba = await cobaPromise();
		console.log(coba);
	}
	catch(err){
		console.log(err)
		// atau pakai ini biar keren console.error(err)
	}
}
// ---
cobaAsync();


/*
ERROR HANDLING

pada contoh diatas kita sudah punya 2 cara menangani error pada promise
1. new promise().then.catch
2. tray{} dan catch(){}

tapi itu kita praktekan dari promise, yang di dalamnya ada resolve() dan reject()
nah bagaimana kalau kita pakai fetch() ini juga promise tapi yang kita tahu merthod nya 
resolve saja, sedang rejectnya kita belum tahu langsung saj kita praktek pada kasus
yang nyata saja yaitu menggunakan rest API online beneran

di halaman i14_error_handling.js
*/ 



