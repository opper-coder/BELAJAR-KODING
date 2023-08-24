-------------------------------------------------
DAFTAR ISI
kesimpulan
konsep
tips
roadmap
praktek
    entry point
    UI index
catatan
-------------------------------------------------
KESIMPULAN
----
    "trigger" dan "event" bergandengan jika funtion tidak akan di eksekusi UI maka saya tidak menyebutnya sebagai trigger 
    (melainkan method, callback, dll) 
    "trigger": adalah serangkaian eksekusi siap pakai di js
    "event": adalah tombol pengguna yang akan mengeksekusi trigger
----
- saat kita sudah melakukan inisialisasi(integrasi) firebase di projek kita(dg instalasi, dan inisialisasi, di platform masing)
- maka kita sudah bisa menggunakan semua service yg ada di firebase dengan membungkusnya ke function trigger 
- dengan mengimport service bersangkutan
- lalu mengeksekusi subservice bersangkutan
- jadi silahkan mempelajari semua subservice, nanti cara eksekusinya tinggal di bungkus dengan trigger 
-------------------------------------------------
TIPS
- buatlah UI secara terpisah misalnya nextjs
- buatlah endpoint CRUD tiap halaman berupa "function trigger" pada firebase sebagai controller
- konfig dan init firebase pada project UI
- import controller yang di perlukan pada halaman UI
- lalu akses dengan trigger 
- oya jangan lupa samakan struktur URi database pada UI selaras dengan DB
-------------------------------------------------
KONSEP FIREBASE
- firebase adalah service tanpa backend berupa database, auth, function, pubsub, eventlistener, dll secara serverless 
- bisa di gabungkan dengan banyak bahasa, vite, vue, react, nodejs, vanilla
- kali ini akan kita buat contoh vanilla  
- alat yang di butuhkan adalah npm dan webpack, tapi jika pakai framework seperti rect dan nextjs tidak perlu webpack
- praktek kali ini adalah cara: 
    - koneksi dari "nodejs" ke "firebase" 
      (artinya bisa di jalankan di berbagai framework: vue, svelte, react, nexjs, vite vanilla dll)
    - inisialisasi firebase pada entry point (nama boleh: firebase.js, index.js, app.js, silahkan)
    - initialisasi service dan jalankan service 
    - bungkus service yang siap di jalankan dengan "function trigger" pada setiap subservice
    - jangan lupa jalankan subservice di async await, jika ada error, pakai try catch
    - "function Trigger" siap di gunakan baik langsung atau pakai event trigger dari UI 
- silahkan bikin ui dan import entrypoint lalu trigger endpoint 
-------------------------------------------------
ROADMAP
1. bikin folder project
2. bikin entrypoint index.js
3. install firebase package
4. initialisasi firebase connection di index 
5. initialisasi service
6. instance services
7. gunakan services
8. bungkus services yng siap di gunakan dalam function 
9. function di jalankan baik "langsung" atau "pakai event" trigger dari ui kita 
-------------------------------------------------
PRAKTEK
-------------------------------------------------
ENTRY POINT index.js

:> node, npm -v                             : 
:> mkdir project, cd project                : 
:> npm init -y -> package.json              : 
:> npm i firebase                           : finish, anda sudah mendapatkan akses ke firebase 
-> CDN                                      : jika kita tidak mau install firebase kita juga bisa lewat CDN,. cek dashboard firebase
+> new src/index.js                         : silahkan initialisasi firebase dan service disini
        import { initializeApp } from 'firebase/app'         : 1. import inisialisasi
        import { getAuth } from 'firebase/auth'              : 2. import service dan subservice auth
        import { getFirestore } from 'firebase/firestore'    : 3. kalau mau import service lain panggil dg getService from firebase/service 
        
        const firebaseApp = initializeApp({                  : 4. init firebase
                ...
        })

        const auth = getAuth(firebaseApp);                   : 5. init service auth
        const firestore = getFirestore(firebaseApp);         : 6. init service lainya boleh diisini

        // detect auth state

        onAuthStateChanged(auth, user => {                   : 7. gunakan salah satu subservice di auth sudah bisa di gunakan 
                if(user !== null){
                   console.log("logged in!");
                }else{
                   console.log("no user")
                }
        })
-------------------------------------------------
UI index.html   
+> new src/index.html                           : bikin html standard <h1> Get started 
 > <script type="module" src="index.js">        : cara import di html biasa pakai src type module
:> serve src/                                   : jalankan server("serve src/") ala firebase (cari tahu apakah pakai npm src/index bisa nggak)
-> browser: localhost:5000                      : coba akses 
-> browser console => no user                   : di console sudah bisa dilihat hasilnya no user, artinya sudah tersambung dg server, coba buatkan user dan login
-------------------------------------------------
CATATAN
- karena html biasa tidak mengenali import module maka modulnya pakai import cdn saja : url dari cdn cekidoc, di "memulai firebase" dan kopas
- https://www.gstatic.com/firebasejs/10.2.0/firebase-SERVICE.js                    
        import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js'        
        import { getAuth } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js'
        import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js'
- cara pakai menggunakan index html langsung adalah cara termudah, tinggal copas doc dan jalankan, 
  tetapi pada prakteknya kita mesti gunakan framework seperti react atau nexjs
- tapi kalau terpaksa kita tetap pakai index.html biasa maka di sarankan harus pakai modul bundler seperti webpack agar bisa tree shaking
- padahal kalau di framework sudah ada tree shaking include 
-------------------------------------------------
