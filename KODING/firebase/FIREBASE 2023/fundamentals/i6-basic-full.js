FIREBASE PROJECT UMUM
-------------------------------------------------
KONSEP
-------------------------------------------------
ROADMAP
creating project 
init project 
auth for user 
firestore 
securing data 
deploy 
-------------------------------------------------
DASHBOARD FIREBASE
-> firebase console
-> create project 
-> pilih area
-> hidupkan analitich: kasih akun
-> create project
-> create app: pilih web
-> ambil code config: copas ke project
-------------------------------------------------
PROJECT
:> node, npm -v                                         : 
:> mkdir, cd project                                    : 
:> npm init -y                                          : jalankan project di node
:> npm install -g firebase-tools                        : untuk hosting dan deploy (global)
:> npm install -D firebase-tools                        : agar bebas dengan perintah 'sudo' install secara local (Developmen)
:> npx firebase login [--add atau --use]                : tambahkan --add --use supaya bisa banyak aplikasi yang bisa akses di browser
                                                          tanpa login user, pass.
:> firebase init hosting                                : sudah bisa menggunakan command firebase sebenarnya, tapi saya akan gunakan fitur baru di bawah
:> npx firebase experiments:enable web frameworks       : 
:> npx firebase init hosting                            : sekarang silahkan init hosting > di sana ada form hosting > silahkan diisi
        > pilih frameworks, bahasa, server, github. dalam hal ini github: no
:> code .                                               : buka di vscode
:> cd hosting                                           : pindah ke hosting
:> npm i firebase                                       : install package 
-> main.js                                              : masuk ke entrypoint dan hapus semua lalu modifikasi sebagai berikut
-------------------------------------------------
ENTRY POINT
        import { initializeApp } from 'firebase/app';
        const firebaseApp = initializeApp({ /*config*/ });
-------------------------------------------------
AUTH 
-----
console firebase
        -> console firebase
        -> tab authentication > getStarted > pilih profider: google > enable > isi form > 
-----
entry point
        import {
            getAuth, 
            onAuthStateChanged, 
            signInWithRedirect, 
            GoogleAuthProvider 
        } from 'firebase/auth'

        const auth = getAuth();
        const button = documents.querySelector('button');

        onAuthStateChanged(auth, (user) => {
           if ( user == null ) { return; }
           console.log(user);
        })

        button?.addEventListener('click', () => {
            signInWithRedirect(auth, new GoogleAuthProvider());
        }); 

-----
browser
        -> klik tombol yang kamu buat di ui ('hanya tombol') 
        -> login dengan google yang kamu miliki
        -> dan lihat console browser
        => ada email(yg kamu gunakan untuk login) dan uid(id yang kamu gunakan sebagai id di database)
        -> uid bisa di gunakan untuk menyusun data di database seperti di firestore
-------------------------------------------------
FIRESTORE 
-----
console firebase
        -> console firebase
        -> tab firestore > enable > 
        -> add collection users > copas uid dari users yang sudah login barusan di atas untuk collection id 
        -> users >
            > name: food
            > cost: 11.11
-----
entry point
        import{
            getFirestore,
            collection,
            CollectionReference,
            onSnapshot
        } from 'firebase/firestore';
        import {
            getAuth, 
            onAuthStateChanged, 
        } from 'firebase/auth';

        const db = getFirestore();
        const auth = getAuth();
        const ul = documents.querySelector('ul');

        const createStream = (ref: CollectionReference) => {
            return onSnapshot(ref, snapshot => {
               const expenses = snapshot.docs.map(d => d.data());

               // sync with UI
               expenses.forEach(expense => {
                  const li = documents.createElement('li');
                  li.textContent = `${expense.name}` - `${expense.cost}`
                  ul?.appendChild(li);
               })                        
            })
        }

        onAuthStateChanged( auth, (user) => {
            if (users == null) {return;}
            const { uid } = user; 
            const expensesCol = collection(db, 'users');
            createStream(expensesCol);
        });
-----
browser
???
-------------------------------------------------
FIRESTORE QUERYS
???
-------------------------------------------------
SECURITY RULES
  rules_version = 2;                                    // 
  service cloud.firestore {                             //
     match /databases /{databases}/documents {          // 
        match /users/{uid} {                            // 
           allow read, write: if request.auth != null && request.auth.uid == uid;  // 
        }
     }
  }
  ---
  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      match /{document=**} {
        allow read, write: if
            request.time < timestamp.date(2022, 7, 23);
      }
    }
  }
-------------------------------------------------
DEPLOY HOSTING 
  karena kita sudah install "firebase-tools" dan sudah "init hosting"
  maka kita sudah bisa hosting aplikasi dengan satu baris perintah
  uniknya firebase sudah bisa mendeteksi framework, run build, tree shaking, 

:> firebase deploy                                   // satu baris, saat selesai maka kita di kasih URL dan bisa di akses

sudah terdeploy ke hosting dan bisa di gunakan
-------------------------------------------------
FINISHED 
???
-------------------------------------------------
