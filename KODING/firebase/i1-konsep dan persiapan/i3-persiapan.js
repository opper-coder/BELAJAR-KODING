PENGANTAR SINGKAT FIREBASE WEB 
------------------------------------------------------------------------------
ada banyak cara integrasi sebenarnya seperti npm, webpack, reactjs, vite, nextjs dll
disini firebase dasar di web browser ada 4 langkah saja:
1. :> npm init -y  	        // install node, npm dan lakukan init
2. :> npm i firebase 	      // install firebase di project 
3. new /src/index.js 		// bikin folder dan filejs
// copas dari firebase projec config
	import { initializeApp } from 'firebase/app' 			// import inisilaisasi koneksi awal ke firebase 
	firebaseApp = initializeApp({ 					// parameter koneksi aplikasi yang di kasih oleh firebase console
		apiKey: xxx, 						
		authDomain: "",
		...
	});

3.1 cara ini sudah dapat di gunakan tinggal import layanan disini
		
	import { initializeApp } from 'firebase/app' 	
	import { getAuth, onAuthStateChange } from 'firebase/auth' 	// import service getAuth untuk autentikasi
	import { getFirestore, collection } from 'firebase/firestore' 	// import service getFirestore untuk database

	firebaseApp = initializeApp({ 					
		...
	});
	// ----- init service disini:
	const auth = getAuth(firebaseApp); 			// 1. auth (dengan parameter obj koneksi, semua butuh ini)
	const db = getFirestore(firebaseApp);			// 2. db connection
	db.collection(todos).getDocs(); 			// 
	const todosCol = collection(db, 'todos')		// 3. conneksi tabel( collection 'todos') dalam db
	const snapshot = await getDocs(todosCol)		// 4. ambil data dalam tabel
	
	// ----- silahkan di gunakan dengan mengambil method2 yang tersedia di firebase sendiri, contoh:
	// detect auth 
	onAuthStateChange(auth, (user) => {
	if(user !== null ){
		console.log("Logged in!");
	}else{
		console.log("No User");
	}
	});
	// ----- ambil data 
	;

4. buat halaman html
	new /src/index.html 					// bikin folder dan file html di folder yang sama
	<script type="module" src="/index.js"></script> 	// diimport dg type="module" agar bisa di baca di browser
	karena import di browser tidak bisa dilakukan di browser maka dg type module firebase sudah mempersiapkan script dapat di import dari browser
	
5. ini sudah bisa di gunakan
	tinggal memahamai bagaimana penggunaan fungtion/method yang di sediakan oleh layanan
