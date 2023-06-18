PERSIAPAN SDK JAVASCRIPT V9
-------------------------------------------------
lihat video david
- persiapan 
- webpack
- cara config dan menjalankan di server:5000

INITIALIZE
-------------------------------------------------
lakukan instalasi daasar firebase lalu inisialisasi 

import { initializeApp } from "firebase/app";                   //  - import firebase 
import { getAuth } from "firebase/auth";                        // 1. import auth

const firebaseConfig = {
  // ...                                                        //  - config dasar cekidoc
};

const app = initializeApp(firebaseConfig);                      //  - init firebase    
const auth = getAuth(app);                                      // 2. init authentication 

LOCAL EMULATOR SUITE
-------------------------------------------------
- adalah protype di local tanpa mendeploy ke hosting
- bisa di kombinasikan dengan service lain di firebase seperti: firestore dll
- Emulator Authentication adalah bagian dari Local Emulator Suite
- silahkan cekidoc

REGISTER USER
-------------------------------------------------
buat halaman form dan fgunakan datanya untuk di register, lalu teruskan ke createUserWithEmailAndPassword

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";    // import

const auth = getAuth();                                         // 1. init auth
createUserWithEmailAndPassword(auth, email, password)           // 2. data dari form (email, pass) teruskan disini "method register"
  .then((userCredential) => {                                   // 3. error handling .then().catch()
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

LOGIN USER
-------------------------------------------------
Buat form login: email dan sandinya. teruskan data ke metode signInWithEmailAndPassword:

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";    // import

const auth = getAuth();                                         // 1. init auth
signInWithEmailAndPassword(auth, email, password)               // 2. data dari form (email, pass) teruskan disini "method register"
  .then((userCredential) => {                                   // 3. error handling .then().catch()
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

SESSION USER
-------------------------------------------------
Menetapkan observer. (session) status autentikasi dan mendapatkan data pengguna
Untuk setiap halaman aplikasi yang memerlukan informasi tentang pengguna yang telah login, 
tambahkan observer ke objek autentikasi global. Observer ini dipanggil setiap kali status login pengguna berubah.
Tambahkan observer menggunakan metode onAuthStateChanged. Setelah pengguna berhasil login, 
Anda bisa mendapatkan informasi tentang pengguna tersebut di observer.

import { getAuth, onAuthStateChanged } from "firebase/auth";    // import observer

const auth = getAuth();                                         // init
onAuthStateChanged(auth, (user) => {                            // method session
  if (user) { 
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

