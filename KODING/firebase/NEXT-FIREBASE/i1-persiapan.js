NEXTJS FIREBASE AUTENTICATION
source: youtube erdecode nextjs autentication

-------------------------------------------------
DASHBOARD
- masuk firebase dashboard
- project overview | setting > pilih platform di bawah > register app > berinama app register "fullstack" > 
    klik register app > tunggu > dikasih parameter kode configurasi
- create project: boxits authentication > google analitic:false > create project > continue > redirect ke dashboard
- sidebar > authentication > get started > dikasih pilihan metode login
	- pilih email-pass, phone, facebook, google, anonimouse, pilih dan enable
	- pada tab user ada list user yang ter authentication, ada field: profider, name, password, created, 
- add user secara dashboard > tab user > add user > email: isikan email(boleh:valid), pass: isikan > add user > ok > kita sudah dapatkan satu user valid 

NEXT INSTALLATION  
------------------------------------------------------
- nodejs "minimal > v16.8" 
:> mkdir projecku :> cd projecku :> code . > enter - terminal vscode
:> npx create-next-app@latest fullstack                         : biasa terbaru
:> npx create-next-app@latest --experimental-app .              : ada titik pakai experimental
:> npx create-next-app --experimental-app fullstack             : pakai folder lagi tanpa latest
  - typeScript: yes, eslint: yes, src/ dir no, lalu @ > enter   : pilih saja
-> package.json 
:> npm run dev
-> browser: localhost:3000

-------------------------------------------------
FIREBASE INSTALLATION
:> npm i firebase
-> new "/services/firebase.js" copas config firebase 
 > copas string connection dari dashboard firebase:
    import { initializeApp } from 'firebase/app';
    const firebaseConfig = {...};
    const app = initializeApp(firebaseConfig);

-------------------------------------------------
INITIALISASI FIREBASE to NEXTjs 
- sebenarnya config bisa di letakkan di sini(firebase.js) langsung seperti biasa, bisa
  tapi ini terlalu terexpose maka kita masukkan saja parameter config ke .env.local next,     
-> new "/.env.local" >  yang isinya sesuai yang di berikan oleh firebase > templatenya sbb:

NEXT_PUBLIC_API_KEY= copas dari config yg di kasih firebase tanpa petik, yg tidak di pakai delete saja
NEXT_PUBLIC_AUTH_DOMAIN= ... 
NEXT_PUBLIC_DATABASE_URL=
NEXT_PUBLIC_PROJECT_ID=
NEXT_PUBLIC_STORAGE_BUCKET=
NEXT_PUBLIC_MESSAGING_SENDER_ID=
NEXT_PUBLIC_APP_ID=
NEXT_PUBLIC_MEASUREMENT_ID=

-> services/firebase.js > akses variabel .env

apiKey: process.env.NEXT_PUBLIC_API_KEY, (di tambahin process.env di depan)

const firebaseConfig = {
  apiKey:               process.env.NEXT_PUBLIC_API_KEY,
  authDomain:           process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId:            process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket:        process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId:    process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId:                process.env.NEXT_PUBLIC_APP_ID
};
 
-------------------------------------------------
TEMPLATE FIREBASE  
- template firebase auth dari erdecode untuk di jalankan di nextjs
- structur folder di nextjs
	-> new "/service/firebase.js" 		// string connection firebase taruh disini. value ambiol dari .env
	-> new "/.env.local" 			// variabel env disini. 
	-> /pages/app.js 			// import firebase.js di index nextjs 

import { initializeApp, getApps } from 'firebase/app'
import { 							// 0. setelah config inisialisasi awal maka kita butuh beberapa library autentication
  getAuth,  							// 3. getAuth(untuk inisialisasi)
  createUserWithEmailAndPassword, 				// 4. ini untuk mode authnya 
  signInWithEmailAndPassword, 					// 5. untuk method signin
  signOut 							// 6. untuk signout 
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN, 
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};

if (!getApps().length) {                                    	// 2. tapi lebih aman pakai ceking 
    initializeApp(firebaseConfig)                           	// 1. biasanya inisialize langsung ini (auth instance)
}

export const FirebaseAuth = getAuth()                      	// 7. initial auth, jangan lupa export semua

export const SignUp = async (email, password) => {          	// 8. bikin function register, async(karena semua return promise)
  await createUserWithEmailAndPassword(FirebaseAuth, email, password)   // 9. register menerima 3 param, yang akan menangkap data dari form
}

export const SignIn = async (email, password) => {
  await signInWithEmailAndPassword(FirebaseAuth, email, password)       // 10. login menerima 3 param jg
}

export const SignOut = async () => {
  await signOut(FirebaseAuth)                               	// 11. logout satu params saja
