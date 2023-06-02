CLOUD FIRESTOR
----------------------------------
- database cloud NoSQL, realtime, fleksibel, skalabel, menyimpan, menyinkronkan, offline support untuk seluler dan webdata,
- KEUNGGULAN:
----------------------------------
	- flexibilitas: subkoleksi, object bertingkat
	- query ekspresif: index, filter, performa sesuai hasil, bukan sesuai jumlah data keseluruhan
	- realtime: realtime, atau sekali (simple efisien)
	- offline: implementasi cache saat offline, dan sinkron saat online
	- scalable: replikasi multi region, multi CRUD, handal data besar
	- bisa REST dan RPC tapi hanya untuk keperluan sederhana misal IoT
- ALUR IMPLEMENTASI
----------------------------------
	1. integrasi: inisialisasi 
	2. keamanan: autentikasi
	3. buat data: create data
	4. ambil data: fetch data
- INTEGRASI
----------------------------------
langkah ini hanya pengantar caranya cekidoc
Aktifkan SERVICE di firebase console
	1. buat project Firebase: Di Firebase console, klik Add project,
	2. aktifkan firestore di console cekidoc
Menyiapkan lingkungan Project
	1. npm install firebase@9.21.0 --save // SDK firebase 
	2. new /root/firebase/firebase.js
		import { initializeApp } from "firebase/app"; 		// import firebase wajib 
		import { getFirestore } from "firebase/firestore"; 	// import firestor sesuai layanan
	library REST/CRUD sederhana? Coba Firestore Lite SDK, yang hanya tersedia melalui npm.
	lebih murah, tapi tidak lengkap seperti offline dll, kenali dulu yang SDK standard 
	lalu pertimbangkan yg lite, ada beberapa fitur/method tidak disertakan cekidoc, mudah di fahami
	3. saat develop kalau bisa gunakan emulator suite supaya nggak bayar(efisien)
	4. bentuk akhir 
		import { initializeApp } from "firebase/app";
		import { getFirestore } from "firebase/firestore";

		const firebaseConfig = {
			... 											// object-config yg di kasih firebase project-setting
		};

		const app = initializeApp(firebaseConfig);			// Initialize Firebase
		const db = getFirestore(app);						// Initialize firestore sekaligus get 
	5. sekarang tinggal pakai (kalau mau mengkatifkan offkline ada caranya tapi sy skip dulu cekidoc di step ini)
		sepertinya gampang hanya ada 6 method saja kayaknya
- TAMBAH DATA 
----------------------------------
	1. tambah data tapi belum punya colection 
		// "colllection" mirip tabel, "document" mirip row/baris data (ini copas aja)
		import { collection, addDoc } from "firebase/firestore"; 	// import collection() addDoc()

		// implementasikan pakai try catch await 
		try { 		
		  const docRef = await addDoc(collection(db, "users"), {	// collection "users" jika belum pernah ditulis maka sekaligus dibuatkan collection "users"
		    first: "Ada", 											// rownya seperti ini 
		    last: "Lovelace",
		    born: 1815
		  });
		  console.log("Document written with ID: ", docRef.id);
		} catch (e) {
		  console.error("Error adding document: ", e);
		}

	2. tambah data dalam collection yg sudah ada (mirip sih)
		try {
		  const docRef = await addDoc(collection(db, "users"), { 	// jika collection "users" sudah pernah dibikin maka dokumen akan di tambahkan disana
		    first: "Alan", 											
		    middle: "Mathison", 									// data dan strukturnya boleh beda "middle" tidak seperti tabular struktur harus sama
		    last: "Turing",
		    born: 1912
		  });

		  console.log("Document written with ID: ", docRef.id);
		} catch (e) {
		  console.error("Error adding document: ", e);
		}

- MEMBACA DATA
----------------------------------
	// data juga bisa di lihat di firebase console
	import { collection, getDocs } from "firebase/firestore"; 		// import getDoc()

	const querySnapshot = await getDocs(collection(db, "users")); 	// ambil semua data di colection "users", tanpa filter
	querySnapshot.forEach((doc) => {
	  console.log(`${doc.id} => ${doc.data()}`);
	});
- MELINDUNGI DATA
----------------------------------
Jika Anda menggunakan SDK platform Web, Android, atau Apple, gunakan Firebase Authentication dan Aturan Keamanan Cloud Firestore untuk melindungi data Anda di Cloud Firestore.
- Anda dapat mengubah aturan keamanan di tab Aturan di konsol.
- Sebelum men-deploy pastikan bahwa hanya klien aplikasi yang dapat mengakses data Cloud  dengan App Check. atau (IAM) 

// Allow read/write access on all documents to any user signed in to the application
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
