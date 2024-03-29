KESIMPULAN
----
    "trigger": adalah serangkaian eksekusi siap pakai di js
    "event": adalah komponen(tombol) UI yang akan mengeksekusi trigger
    "trigger" dan "event" berpasangan, jika funtion tidak berpasangan maka saya tidak menyebutnya sebagai trigger 
    (melainkan method, callback, dll) 
----
- saat kita sudah melakukan inisialisasi(integrasi) firebase di projek kita
  (dg instalasi, dan inisialisasi, di platform masing) lalu mengimport di javascript kita
- maka kita sudah bisa menggunakan semua service yg ada di firebase dengan membungkusnya ke function trigger 
- jadi silahkan mempelajari semua subservice,
- misal kasih nama "triggerCoba", async await (pada subservice), try catch pada sub service, 
    const triggerCoba = async (args?) => { try{ await subService() } catch(e){} } 
- "event" onClick={()=>{triggerCoba(params)}} 
- atau btnSumbmit.addEventListener( 'click', triggerCoba(params) )
-------------------------------------------------
TIPS
- buatlah UI secara terpisah misalnya nextjs
- buatlah endpoint CRUD tiap halaman berupa "function trigger" pada firebase sebagai controller
- konfig dan init firebase pada project UI
- import controller yang di perlukan pada halaman UI
- lalu masukan event untuk mengeksekusi trigger 
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
