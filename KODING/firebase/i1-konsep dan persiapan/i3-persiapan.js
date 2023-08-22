PENGANTAR SINGKAT FIREBASE WEB 
------------------------------------------------------------------------------
ada banyak cara integrasi sebenarnya seperti npm, webpack, reactjs, vite, nextjs dll
disini firebase dasar di web browser ada 4 langkah saja:
1. :> npm init -y  	        // init nodejs
2. :> npm i firebase 	      	// install package firebase di project 
3. new /src/index.js 		// bikin folder dan index. copas connection string dari firebase config dashboard:
	-------------------------------------------
	IMPORT PACKAGE
	import { initializeApp } from 'firebase/app' 						// import initial firebase
	import { getAuth, onAuthStateChange, connectAuthEmulator } from 'firebase/auth'  	// getAuth(authentikasi),  onAuthStateChange(session), connectAuthEmulator(emulator)
	import { getFirestore, collection } from 'firebase/firestore' 				// import service getFirestore untuk database
	-------------------------------------------
	MODUL INIT CONNECTION
	firebaseApp = initializeApp({ 				// 0. connection string copas dari dashboard setting
		...
	});
	-------------------------------------------
	INIT SERVICE SESSION AUTH
	const auth = getAuth(firebaseApp); 			// 1. 	auth (instance string conn)
	connectAuthEmulator(auth, "http://localhost:9099"); 	// 1.1  jalankan layanan di emulator di port:9099 (import dulu), saat deploy nanti di hapus
	onAuthStateChange(auth, (user) => {
		if(user !== null ){
			console.log("Logged in!");
		}else{
			console.log("No User");
		}
	});
	-------------------------------------------
	PENGGUNAAN FIRESTOER
	const db = getFirestore(firebaseApp);			// 2. db connection(instance string conn)
	-------------------------------------------
	AMBIL DATA
	db.collection(todos).getDocs(); 			// 
	const todosCol = collection(db, 'todos')		// 3. conneksi tabel( collection 'todos') dalam db
	const snapshot = await getDocs(todosCol)		// 4. ambil data dalam tabel

4. buat halaman html
	new /src/index.html 					// bikin folder dan file html di folder yang sama
	<script type="module" src="/index.js"></script> 	// diimport dg type="module" agar bisa di baca di browser
	karena import di browser tidak bisa dilakukan di browser maka dg "type":"module" firebase sudah mempersiapkan script dapat di import dari browser
	
5. ini sudah bisa di gunakan
	tinggal memahamai bagaimana penggunaan fungtion/method yang di sediakan oleh layanan
