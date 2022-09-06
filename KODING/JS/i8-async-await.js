 /*
SYNC AWAIT KONSEP

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
1. bikin promise (lihat contoh sebelum ini di asynchronous)
2. bikin fungsi biasa 
3. tambah async await
4. masukan promise ke return fungsi
...
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
fungsi async await adalah 

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
resolve saja, sedang rejectnya kita belum tahu langsung saj kita praktek pada kasus
yang nyata saja yaitu menggunakan rest API online beneran */
