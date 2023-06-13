aplikasi perlu mengetahui identitas pengguna atau auth
dg auth aplikasi dapat malkukan CRUD yang aman
-----
ada 2 jenis: Firebase backend SDK, firebaseUI siap pakai 
mode banyak: email-sandi, telepon, Google, Facebook, Twitter, dan lain-lain.
-----
- Komponen FirebaseUI: (rekomended dari firebase)
	- praktik terbaik, seluler dan situs, session form. pemulihan, penautan akun, yang sensitif bagi keamanan dan rawan kesalahan dalam penanganannya.
	- custom mudah, open source,
- Firebase SDK:
	- email dan sandi ada fitur reset sandi dikirim ke email
	- SDK menyediakan metode akun Google, Facebook, dll
	- lewat HP ada caranya sendiri
	- gabungkan layanan misalnya akses khusus ke realtime db
	- anonimouse, jika kita tidak meajibkan user identitas dan pengguna dapat melanjutkan aktifitasnya..
-----
Firebase Authentication dengan Identity Platform
adalah upgrade opsional yang menambahkan beberapa fitur baru, Dengan beberapa kode tambahan, seperti logging, fungsi pemblokiran, tapi harga beda, 
untuk upgrade buka halaman Authentication Settings di Firebase console.
-----
cara kerjanya:
session user Kredensial Kemudian, teruskan ke Firebase Authentication SDK. selanjutnya memverifikasi dan menampilkan respons ke klien.
Setelah login, user dapat mengakses, profil dasar CRUD produk Firebase lainnya. dan logic credential untuk custom service anda sendiri
Secara default, Realtime Database dan Cloud Storage. anda dapat mengubah rule jika di perlukan
-----
Alur implementasi








SOURCE: YOUTUBE ERDECODE NEXTJS AUTENTICATION
nextjs firebase autentication

- masuk firebase dashboard
- create project: boxits authentication > google analitic:false > create project > continue > redirect ke dashboard

DASHBOARD 
- sidebar > authentication > get started > dikasih pilihan metode login
	- pilih email-pass, phone, facebook, google, anonimouse, pilih dan enable
	- pada tab user ada listuser yang ter authentication
- add user secara dashboard > tab user > add user > email: isikan emailvalid, pass: isikan > add user > ok > kita sudah dapatkan satu user valid 

PERSIAPKAN nextjs
- new Folder project > "boxits-dashboard" > install node, npm, nextjs (ada di nextjs), > baru install firebase
- masih di root project > npm i firebase > selesai

INITIALISASI FIREBASE to NEXTjs 
- di dashboard firebase > project overview | setting > pilih platform di bawah > register app > berinama app register "boxits-dashboard" > 
	klik register app > tunggu > dikasih parameter kode configurasi
- sebenarnya config bisa di letakkan di /root/new services/firebase.js/copas config firebase > 
	tapi ini terlalu terexpose maka kita masukkan saja parameter config ke environmentnya next, yaitu config firebase di simpan di envi dan firebasenya akan nge load dari envi     
- di nextjs project terminal :> code . > root > new file ".env.local"(hidden) >  yang isinya sesuai yang di berikan oleh firebase > templatenya sbb:

NEXT_PUBLIC_API_KEY= copas dari config yg di kasih firebase tanpa petik, yg tidak di pakai delete saja
NEXT_PUBLIC_AUTH_DOMAIN= ...
NEXT_PUBLIC_DATABASE_URL=
NEXT_PUBLIC_PROJECT_ID=
NEXT_PUBLIC_STORAGE_BUCKET=
NEXT_PUBLIC_MESSAGING_SENDER_ID=
NEXT_PUBLIC_APP_ID=
NEXT_PUBLIC_MEASUREMENT_ID=

- lalu di dalam file /root/new services/firebase.js/ yang sudah di copas config yng di kasih firebase kita edit sbb

apiKey: process.env.NEXT_PUBLIC_API_KEY, (di tambahin process.env di depan) kurang lebihnya seperti di bawah ini 
(copas dari reponya di github)

 
/* Template utk firebase  
---------------------------------- */

import { initializeApp, getApps } from 'firebase/app'
import { 																// 0. setelah config inisialisasi awal maka kita butuh beberapa library autentication
  getAuth,  															// 3. getAuth(untuk inisialisasi)
  createUserWithEmailAndPassword, 										// 4. ini untuk mode authnya 
  signInWithEmailAndPassword, 											// 5. untuk method signin
  signOut 																// 6. untuk signout 
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};

if (!getApps().length) { 												// 2. tapi lebih aman pakai ceking 
  initializeApp(firebaseConfig) 										// 1. biasanya inisialize langsung ini (auth instance)
}

export const FirebaseAuth = getAuth() 									// 7. initial auth

export const SignUp = async (email, password) => { 						// 8. bikin function register, async(karena semua return promise)
  await createUserWithEmailAndPassword(FirebaseAuth, email, password) 	// 9. register menerima 3 param, 
}

export const SignIn = async (email, password) => {
  await signInWithEmailAndPassword(FirebaseAuth, email, password) 		// 10. login menerima 3 param jg
}

export const SignOut = async () => {
  await signOut(FirebaseAuth) 											// 11. logout satu params saja
}
																		// jangan lupa export semua


/* Hook Form
---------------------------------- */

untuk menangani form pada nextjs reactjs kita perlu library react-hook-form 
install dulu :> npm i react-hook-form
documentasi: react-hook-form.com/get-started



LANJUTKAN ...... ?????????????????????????/

SOURCE: YOUTUBE ERDECODE NEXTJS AUTENTICATION
