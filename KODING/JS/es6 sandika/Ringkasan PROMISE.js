--------------------------------------------------------------------------------------
Daftar Isi:
    ringkasan           -> singkat
    Konsep              -> konsep
    Callback            -> fungsi yang di panggil dalam fungsi lain lewat argument
    Asynchronous        -> runtime paralel, basic Asynchronous pakai callback, resiko callback hell
    Promise             -> pengganti callback, menghindari callback hell
    async await         -> bentuk alternatif tanpa callback
    fetch()             -> implementasi Asynchronous
    axios()             -> belum
    error handling      -> then() catch() try() catch() 
    
--------------------------------------------------------------------------------------
KONSEP 
---------------------------------------
- konsep
    1. jika function di panggil dalam bracket sebuah function maka program dieksekusi synchronous (blocking)
    2. jika function di panggil dalam argument tanpa kurung() maka program dieksekusi asynchronous (biasanya pakai arrow)(non-blocking)
    3. async bisa ditulis tidak dalam callback, pakai gaya synchronouse tapi tandai dengan async, await, (callbacnya pakai await)
- Hubungan satu sama lain
    1. CALLBACK: adalah function yang dipanggail dalam argument
    2. ASYNCHRONOUS: adalah proses yang paralel, basicnya menggunakan callback
    3. PROMISE: adalah pengganti async methode callback, yang menangani resolve, reject dalam async nya
    4. ASYNC AWAIT: adalh gaya penulisan Promise ta npa callback, mirip function biasa, adalah fitur lebih baru menyederhanakan promise
    5. ERROR HANDLING
    6. FETCH() AXIOS() AJAX() XHR() 
    7. 
- bentuk
    1. callback : 
            function pesan(callback){ const nama = prompt("masukkan nama :"); callback(nama); } 
            pesan( nama => { alert(`halo nama saya ${nama}`); } ); 
    2. synchronous: lihat di bawah
    3. asynchronouse: lihat di bawah
    4. promise:
        let success = true;
        const janji = new Promise((resolve, reject) => {                
            if(success){                                                
                resolve(value)                                          
                } else {                                                
                reject(error)                                           
                }
            });
        ---                                                                        
        janji                                                           
            .then(response => console.log( 'ok!, ' + response ));       
            .catch( response => console.log('not!, ' + response ));     
            .finally( console.log("janji selesai"));   
    5. async await
        function cobaPromise(){                             // 1. function biasa, berisi promise, nanti di jalankan pakai async
            const delay = 2000;
            return new Promise((resolve, reject) => {
                if( delay < 3000 ){
                    setTimeout( ()=>{
                    resolve("selesai")
                }, delay); } 
                else { reject('kelamaan!'); }
            });
        }
        ---
        const coba = cobaPromise();
        coba                                                // 2. jalan kan promise dengan then() catch(). berfungsi sebagai promise biasa di atas
            .then(()=>{console.log(coba)})
            .catch(()=>{console.log(coba)})
        ---
        async function cobaAsync(){                         // 4. tandai dg async 
            try{                                            // 6. try{}catch(){}, adalah cara untuk menangani error,  
                const coba = await cobaPromise()            // 5. await = program ini yg di lempar ke Async V8
                console.log(coba)
            }
            catch(err){
                console.error(err)
            }
        }
        cobaAsync(); 


CALLBACK
---------------------------------------
    - adalah function yang argumenya berisi function lainya
    - contoh1
        function pesan(callback){ const nama = prompt("masukkan nama :"); callback(nama); }     // 3. function pesan menerima args callback, aksi , "callback dijalankan dari args" bukan dari luar
        function halo(nama){ alert(`halo nama saya ${nama}`); }                                 // 2. ini function biasa, (yg jadi callback)
        pesan(halo);                                                                            // 1. pesan di panggil dengan params callback halo. tanpa kurung()
    
    - contoh2 lebih ringkas
        function pesan(callback){ const nama = prompt("masukkan nama :"); callback(nama); }     // fungsi pemroses callback di proses, termasuk mengisi parameter 
        pesan( nama => { alert(`halo nama saya ${nama}`); } );  

ASYNCRONOUS
---------------------------------------
- Synchronouse:
    adalah cara eksekusi program secara serial baris per baris (blocking)
        ---
        function satu(){console.log("SATU...")}
        function dua(){console.log("DUA...")}
        function tiga(){console.log("TIGA...")}
        satu();                                                     // program akan di eksekusi blocking berurutan
        dua();
        tiga();

- Asynchronous:
    - adalah cara eksekusi program secara paralel pada bagian "sync" di eksekusi secara blocking biasa, 
      sementara pada bagian "async" di jalankan di runtime lainya tanpa menunggu program lain selesai
    - cara penulisan async ada dua cara 
        1. callback
        2. async await
        ---
        function satu(){console.log("SATU...")}
        function dua(){       
            console.log("Tiga akan di tampilkan 3 detik")
            setTimeout(()=>console.log("DUA..."), 3000)             // entuk callback setTimeout, console.log()
        }
        function tiga(){console.log("TIGA...")}
        satu();                                                     // SATU dan TIGA akan di eksekusi serial (akan tampil duluan tanpa nunggu DUA)
        dua();                                                      // DUA di kerjakan secara paralel sambil menjalankan timeout 3 detik (akan tampil paling belakang)
        tiga();

PROMISE
---------------------------------------
- singkatnya: promise itu class yg menjalankan proses resolve, reject. dalam if else (saat ada proses resolve, reject, maka pakai promise)
- panjangnya: saat kita memanggil nilai asynchronous menggunakan callback, kita bisa terjebak dalam callback hell, 
    sebab data promise bisa di dapat dg cara nunggu (future), sehingga sulit dilakukan dengan callback jika data yang di ambil itu nested. 
- promise adalah solusi dalam menangani callback hell, karena di promise adalah method yang di rancang untuk menangani callback hell meskipun nested lebih mudah
- promise menghasilkan nilai kembali sbb:

    state:      | pending()     | fullfilled()  | rejected() 
    result:     | undefined     | value         | error 

    1. promise dibuat, masuklah asynchronous (menggantikan cara callback) pending() di jalankan
    2. saat true maka fullfilled() di jalankan, jk false reject() di jalankan
    3. saat resolve maka di program di lewatkan then(), jk reject ke catch()
    4. berikutnya keluar dari v8 engine melalui finally 

--- bentuk instance promise new
    new Promise((resolve, reject) => resolve('selesai'));           // promise paling sederhana
    new Promise(resolve => resolve(selesai));                       // boleh tidak memanggil reject
    new Promise((resolve, reject)=>{if(true){resolve(value)}else{reject(error)}})  // basic, promise lengkap
--- template:
    let success = true;                                             // 0. data yang mau diambil secara async. misalnya ini adalah fetch(). atau XHR()
    const janji = new Promise((resolve, reject) => {                // 1. bikin new Promise( berisi callback promise pengambilan data (dg dua args))
        if(success){                                                // 2. cek
            resolve(value)                                          // 3. jika benar masuk resolve(data)
            } else {                                                // 
            reject(error)                                           // 4. jika salah masuk reject(error)
            }
        });
    /* console.log(janji); */                                       // 4.1 hasilnya pending terus, jadi harus pakai .then()                                           
    janji                                                           // 5. promise di panggil. chain dengan then. promise saat pertama dipanggil sttusnya selalu "pending"
        .then(response => console.log( 'ok!, ' + response ));       // 6. kalau di chain dg then, maka akan menunggu sampai berhasil resolve(), status berganti jadi fullfiled
        .catch( response => console.log('not!, ' + response ));     // 7. di chain lagi saat menunggu dan tidak berhasil maka skip ke catch ini, status berganti jadi rejected
        .finally( console.log("janji selesai"));                    // 8. keluar dari promise (async/v8)
--- 
    /* scrip diatas coba simulasikan dengan setTimeout() dan lakukan sync dan async */ 

    let ditepati = true;        
    const janji = new Promise( (resolve, reject) => {
        if(ditepati){
            setTimeout(() => { resolve('ditepati 1 detik') }, 1500) }   // disini simulasi ajax dilakukan (di dlm async promise)
        else { setTimeout( () => { reject('di ingkari 1 detik') }, 1500) }
        });
    console.log('mulai');                                           // sync 'mulai'
    janji                                                           // async 'janji'
        .then( response => console.log('ok!, ' + response ))        // response (akan di tempati json kalau untuk ajax)
        .catch( response => console.log('no!, ' + response))        // bisa di gunakan notif error
        .finally( () => console.log('final!') )
        console.log('selesai');                                     // sync 'mulai' 
---
all()
    kalau anda memiliki banyak promise kita harus jalan kan satu persatu
    untuk menghemat baris kita gunakan sintax "all()"
    --- 
    const film = new Promise( resolve => {
        setTimeout( () => { resolve( [{judul:'avenger',sutradara:'jeff'}] ) }, 2000)    // promise1 lebih lambat
    });
    const cuaca = new Promise( resolve => {
        setTimeout( () => { resolve( [{kota: 'bandung', temp:28}] )}, 500)              // promise2 lebih cepat
    });
    --- // panggil masing-masing biasa -----
    film.then( response => console.log(response))                                       
    cuaca.then( response => console.log(response))
    --- // panggil kedua2nya sekaligus pakai all() -----
    Promise.all([film, cuaca])
        .then( response => { 
            const [film, cuaca] = response; 
            console.log(film);                                                          // dua eksekusi akan di tunggu sampai selesai yang terlama
            console.log(cuaca); 
            }); 
---
    amati lagi tambahan:
        " new promise((true,false,delay)=>{if(ada true){resolve(then((){}).then((){}))}else{reject(catch((){}))}}) "
        // kalau then nya di dalam tak perlu di console diluar
        " console.log(sync) "
        " console.log(ada.then( () => console.log(ada))) "
        " console.log(sync) "



ASYNC AWAIT
---------------------------------------
adalah: penulisan asynchronus alternative promise, namun sedikit ada perbedaan, 
async await adalah fitur lebih baru menyederhanakan promise, apalagi ada promise bersarang
    - gaya penulisan asynchronous layaknya synchronous,
    - async adalah sebuah "function" yang bekerja secara asynchronous(melalaui event loop v8 engine),
    - sebuah async function dapat memiliki keyword await di dalamnya (akan hidup jika ada await), 
        sebagai penanda bahwa inilah program asynchronous(yang di lempar ke v8 engine), atau pengganti callback di promise
        await = hanya menjalankan function promise, hanya berlaku pada async function, await boleh berkali2, 
    - yang mengembalikan "promise" (resolve/reject). yg di tangani dalam try{} catch{} finally{} finally boleh tidak
    - contoh ada sebuah function biasa yang berisi promise

    function cobaPromise(){                             // 1. function biasa, berisi promise, nanti di jalankan pakai async
        const delay = 2000;
        return new Promise((resolve, reject) => {
            if( delay < 3000 ){
                setTimeout( ()=>{
                resolve("selesai")
            }, delay); } 
            else { reject('kelamaan!'); }
        });
    }
    ---
    const coba = cobaPromise();
    coba                                                // 2. jalan kan promise dengan then() catch(). berfungsi sebagai promise biasa di atas
        .then(()=>{console.log(coba)})
        .catch(()=>{console.log(coba)})
    ---
    async function cobaAsync(){                         // 4. tandai dg async 
        try{                                            // 6. try{}catch(){}, adalah cara untuk menangani error,  
            const coba = await cobaPromise()            // 5. await = program ini yg di lempar ke sisi Asynchronous V8
            console.log(coba)
        }
        catch(err){
            console.error(err)
        }
    }
    cobaAsync();                                        // 3. jalankan pakai async await

ERROR HANDLING
----------------------------------------
ada dua macam error handling
    1. new Promise().then().catch().finally()           // error handling hanya berlaku pada new Promise
    2. fetch().then().then().catch().finally()          // error handling hanya berlaku pada fetch()
    3. async(){ tray{} catch(){} }                      // biasanya berlaku pada async await. finally boleh tidak di pakai 

    try catch biasanya di jalankan dalam seguah function

    try{}                                               // 1. braket mencoba menjalankan sebuah proses 
    catch(){}                                           // 2. jk di dalam try{} gagal di jalankan, maka akan di skip menuju catch(){}

    contohnya ada di atas:

apakah async await pasti ada try catch sebagai pengganti reject resolve = ya kalau butuh penanganan error tidak wajib
apa fungsi try catch yg sebenarnya = mirip if else bisa di jalankan diluar function, tapi jarang
apakah bisa di jalankan secara mandiri = bisa

FETCH()
---------------------------------------
    - adalah methode untuk mengkakses REST API native javascript    
    - namun sayang yang kita ambil dari fetch di kembalikan berupa promise (bool).
    - padahal yang kita butuhkan adalah json atau object
    - maka dari itu kita membutuh langkah conversi promise ke object. 

    /* basic */
    fetch('url');                                       // basic ambil data                                    
    fetch('url', {method:POST});                        // basic kirim data

    /* basic fetch lengkap dg error handling: */
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
        .then(response => console.log(response))
        .catch("gagal ambil data")
        .finally(console.log("final"))

-----------------------------------------
