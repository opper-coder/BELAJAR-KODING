FIREBASE BASIC VIDEO
-------------------------------------------------
:> mkdir project 		:  
:> cd project 			: 
:> npm init 			: init nodejs folder project 
:> npm i firebase 		: install package firebase 
-> new /app.js 			: entry point >

	import { initializeApp } from "firebase/app"; 					// import SDK 
	import { getAuth } from "firebase/auth"; 					// import auth

	const firebaseConfig = { 							// config awal cekidoc
	  // ...
	};

	const app = initializeApp(firebaseConfig); 					// init app
	const auth = getAuth(app); 							// init auth

LOGIN
-------------------------------------------------
untuk sementara kita buatkan (register) akun email dan pass, di dbase console,
selanjutnya nanti buatkan form UI untuk register.
dan juga buatkan alur email menggunakan verifikasi email supaya email benar2 ada dengan verify

	import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; 		// import login email-password

	const auth = getAuth();  							// init auth
	signInWithEmailAndPassword(auth, email, password) 				// login, ambil data param (email,pass) dari input
	  .then((userCredential) => { 							// pakai then.catch karena ada error yg di sediakan
	    // Signed in
	    const user = userCredential.user; 						// coba console.log(user)
	    // ...
	  })
	  .catch((error) => {
	    const errorCode = error.code;
	    const errorMessage = error.message;
	  });

LOGIN di video
------------------------------------------------- 
	const loginEmailPassword = async () => { 					// 2. function login berisi signInWithEmailAndPassword()
		const loginEmail = txtEmail.valuel; 					// 3. ambil nilai dari form
		const loginPassword = txtPassword.value;
		const userCredential = await signInWithEmailAndPassword(auth, LoginEmail, LoginPassword); 	// 4. coba jalankan disini
		console.log(userCredential.user); 					// 5. hasilnya bisa di lihat di console.log() 
		---
		try{ 									// 6. pada praktiknya ada error nya kan. step 4,5 masukkan ke try catch supaya bisa di tangani
			const userCredential = await signInWithEmailAndPassword(auth, LoginEmail, LoginPassword);
			console.log(userCredential.user)
		}
		catch(error){
			console.log(error);
			showLoginError(error); 						// 7. jika ada error tampilkan errornya di UI: showLoginError()
		}
	}
--- UI disini ---
	btnLogin.addEventListener("click", loginEmailPassword) 				// 1. bikin tambol onclick = loginEmailPassword 
	function showLoginError(error){
		divLoginError.style.display= 'block'
		if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
			lblLoginErrorMessage.innerHTML = 'wrong password. try again';
		} else {
			lblLoginErrorMessage.innerHTML = `Error: ${error.message}`;
		}
	}

REGISTER
-------------------------------------------------

	import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"; 		// 1. import createUserWithEmailAndPassword
	const auth = getAuth();  											// 2. init auth

	const createAccount = async () => { 										// 3. bikin function trigger signUp. cara bikinya mirip 
		const loginEmail = txtEmail.valuel; 									// 4. ambil nilai dari form
		const loginPassword = txtPassword.value;
		try{ 													// 5. masukkan ke try catch supaya bisa tangani error
			const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword); 	// 6. ini method nya
			console.log(userCredential.user) 								// 6. berhasil dan error nya bisa di lihat 
		}
		catch(error){
			console.log(error);
			showLoginError(error); 										// 7. jika ada error tampilkan errornya di UI: showLoginError()
		}
	}
	---
	btnSignUp.addEventListener("click", createAccount) 								// 0. bikin tambol onclick = loginEmailPassword 

STATUS/SESSION USER
-------------------------------------------------
	import { 
		getAuth, 
		signInWithEmailAndPassword, 
		createUserWithEmailAndPassword, 
		onAuthStateChanged, 						// 1. import onAuthStateChanged
		} from "firebase/auth"; 		
	const auth = getAuth(); 

	const monitorAuthState = () => { 					// 2. fungsi untuk onAuthStateChanged
		onAuthStateChanged(auth, user => { 				// 4. onAuthStateChanged(auth, callback)
			if (user) { 						// 5. dalam callbac ada pengecekan user login atau tidak
				console.log(user);
				showApp();
				showLoginState(user);
				hideLoginError();
			} else {
				showLoginForm();
				lblAuthState.innerHTML= "You're not logged in.";
			}
		});
	}
	monitorAuthState(); 							// 3. jalankan fungsi

LOGOUT
-------------------------------------------------
	import { 
		getAuth, 
		signInWithEmailAndPassword, 
		createUserWithEmailAndPassword, 
		onAuthStateChanged, 
		signOut								// 1. import signOut
	} from "firebase/auth"; 	
	const auth = getAuth();

	const logout = async () => { 						// 2. trigger
		await signOut(auth); 						// 3. panggil disini
	}

	btnLogout.addEventListener("click", logout); 				// 4. event onclick

saat button logout di tekan maka akan keluar dan UI akan berganti ke form berkat monitorAuthState();
