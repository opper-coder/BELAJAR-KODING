 /*
SYNC AWAIT KONSEP
daftar isi:
	- pengertian			-> konsep asyncronous dan beberapa cara eksekusinya
	- promise 			-> salah satu method async yng ada dlm js
	- langkah async dg promise	-> urutan cara async dengan methode promise beserta error handling nya dngan .then().catch()
	- langkah async dg async await 	-> cara baru dengan async await dengan error handling try{}catch(){}
	- error handling 		-> perbedaan method dan syntax


adalah cara penulisan asynchronus alternative selain promise dan fetch, 
namun sedikit ada perbedaan dan ada kontex masing-masing pendeknya
" gaya penulisan asynchronous layaknya synchronous"

" synchronous adalah sebuah "function" yang bekerja secara asynchronous(melalaui event loop v8 engine)
yang menghasilkan (implisit) "promise(resolve/reject)" sebagai sebagai return valuenya, dengan gaya synchronous "

" sebuah async function dapat memeiliki keyword await di dalamnya (akan hidup jika ada await)
sebagai penanda bahwa inilah program asynchronous(yang di lempar ke v8 engine) "
---------------------------------------------------------------- */

new Promise(resolve, reject); // basic
new Promise((resolve, reject)); // penulisan praktek pakai kurung
new Promise((resolve, reject) => resolve('selesai')); // promise paling sederhana
new Promise(resolve => resolve(selesai)); // boleh tidak memanggil reject

/* 
langkah:
1. bikin promise (yaitu library asynchronous bawaan)(lihat contoh sebelum ini di asynchronous)
2. bikin fungsi biasa 
3. tambah async await 
4. masukan promise ke return fungsi
 */

/* instance promise lalu masukkan dalam function biasa */
function cobaPromise(){
    const delay = 2000;
    return new Promise((resolve, reject) => {
        if( delay < 3000 ){
            setTimeout( ()=>{
            resolve("selesai")
        }, delay); } 
        else { reject('kelamaan!'); }
    });
}

/* jalan kan promise dengan then() catch() seperti biasa */
const coba = cobaPromise();
    coba
    .then(()=>{console.log(coba)})
    .catch(()=>{console.log(coba)})

/* jalankan dengan asinc() await()
- fungsi async await adalah fungsi biasa yang membungkus method asynchronous(promise)
- saat promise akan di eksekusi masukkan keyword await sebagai penanda ini adalah method async
- namun sebelum itu tandai function dengan keyword async. supaya tau kalau ada await di dalam nya
- try() catch() adalah metode yang di gunakan untuk menangani error(berhasil /tidak)
- terkhir panggil function seperti biasa
 */
async function cobaAsync(){
    try{
        const coba = await cobaPromise()
        console.log(coba)
    }
    catch(err){
        console.error(err)
    }
}
cobaAsync();

/*
ERROR HANDLING

pada contoh diatas kita sudah punya 2 cara menangani error pada promise
1. new promise().then.catch     // hasil: promise()
2. async tray{} catch(){}       // hasil: hasil consol dsb

hasilnya juga tidak sama saat console

tapi itu kita praktekan dari promise, yang di dalamnya ada resolve() dan reject()
nah bagaimana kalau kita pakai fetch() ini juga promise tapi yang kita tahu merthod nya 
resolve saja, sedang rejectnya kita belum tahu langsung saja kita praktek pada kasus
yang nyata saja yaitu menggunakan rest API online beneran 

ada 3 error yang kita akan coba atasi
1. seach film yang tidak ada
2. search kosong
3. url kita kasih error

- yang kita tahu kalau kita menggunakan fetch(url).then() dan datanya "tersedia" 
	maka itu kita sebut "resolve" 
- nah yang jadi masalah adalah ketika tearjadi 3 error di atas 
	bagaimana cara mengetahui "reject" nya fetch seperti pada promise
- yang kita lakukan adalah kita cari tahu Response pada api nya,
	biasanya terdapat parameter pada REST API nya atau 
	coba akses console.log(response.Response) pada hasil fetcing nya
	response yang "pertama" adalah response dari pemberian nama kita 
	pada hasil fetch dalam then(). sedang "Response" R besar yang kedua 
	adalah Response "Key dari API OMDB" pada contoh di video
- lalu kita lanjutkan saja cara ajax pada praktek

*/

