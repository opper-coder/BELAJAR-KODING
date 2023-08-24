-------------------------------------------------
KONSEP

pada auth di firebase memastikan bahwa:
- kita sudah login atau belum
- jika kita belum punya user register dulu
- status user di jalankan untuk monitoring login, nanti di gunakan untuk session dan hak akses.
- katakanlah kita punya UI LOGIN, REGISTER, LOGOUT, STATUS, USER PROFILE
- di contoh kali ini mungkin fungsi trigger akan saya jalankan langsung(invoke) tanpa event trigger
- agar memudahkan saja. karena nanti tinggal jalankan fungsi trigger di UI kamu 
-------------------------------------------------
ROADMAP
1. kita gunakan pada contoh i1-basic
2. modifikasi entry point index.js
3. jalankan server
4. akses di browser console amati status proses, login, register, dan logout

-------------------------------------------------
PRAKTEK
-------------------------------------------------
ENTRY POINT
:> node, npm -v                     : 
:> mkdir project, cd project        : 
:> npm init -y -> package.json      : 
:> npm i firebase                   : finish, anda sudah mendapatkan akses ke firebase 
+> new src/index.js                 : silahkan initialisasi firebase dan service disini
        import { initializeApp } from 'firebase/app'                                    : 1. import inisialisasi
        import {                                                                        : 2. import service dan subservice auth
          getAuth,
          signInWithEmailAndPassword,
        } from 'firebase/auth'
        
        const firebaseApp = initializeApp({                                             : 3. init firebase
          // ...
        })

        const auth = getAuth(firebaseApp);                                              : 4. init service auth

        const loginEmailPass = async (email, pass) => {                                 : 5. ini func trigger 
          const userCredential = await signInWithEmailAndPassword(auth, email, pass);   : 6. jalankan subservice pada await
          console.log(userCredential.user);                                             : 7. setelah di jalankan lihat hasilnya di console (belum di UI)
        }

-------------------------------------------------
UI TRIGGER

- silahkan panggil dengan event onClick di UI dengan mengirim data "stringEmail", "StingPass".  
- tapi dalam contoh ini saya akan invoke langsung saja tanpa UI

        <Button onClick={ ()=>{loginEmailPass(stringEmail, StingPass)} }

- sekarang saya panggil langsung invoke tanpa UI, dan isi parameter tanpa algorithma, saya tulis langsung di bawah code ini 

        +> loginEmailPass("aqil@coba.com", "123");      : invoke trigger

- jalankan server
        :> serve src/                                   : jalankan server("serve src/") ala firebase (cari tahu apakah pakai npm src/index bisa nggak)
        -> browser: localhost:5000                      : coba akses  
        -> console => error: Uncaught auth, no user

- buatkan user yang sama di dashboard, lalu login kembali refresh

        -> console => email, uid                        : saat login kembali dan refresh maka kita sudah bisa dapatkan emeil dan uid 
-------------------------------------------------
ERROR HANDLING
- saat kita mengakses user pass yang belum terdaftar seperti tadi itu kan ada error: user tidak di temukan,
- firebase sudah menyediakan daftar error nya, yang kita lakukan adalah bagaimana mengkap errornya,
- yaitu bungkus subservice dalam try catch. lalu gunakan pada catch nya untuk UI, misalnya mengendalikan useState error pada react

        const loginEmailPass = async (email, pass) => {     
          try{
            const userCredential = await signInWithEmailAndPassword(auth, email, pass);   
            console.log(userCredential.user);     
          }
            catch(e){
            console.log(e)                        // disini silahkan ubah state boleh 
            tampilkanALertUser()                  // atau jalankan sebuah fungsi
          }                            
        }

misalnya:
        function tampilkanALertUser() {
          if(error.code == AuthErrorCodes.INVALID_PASSWORD){
            lblLoginErrorMessage.innerHTML = 'password salah, coba lagi!'
           }
          else{
            lblLoginErrorMessage.innerHTML = `error: ${error.message}`
           }
        }
-------------------------------------------------
REGISTER 
- untuk reguster fungsi nya tinggal copas pada login 
- bedanya hanya pada subservice nya pakai createUserWithEmailAndPassword() dengan parameter sama

        const createUser = async (email, pass) => {     
          try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, pass);   // bedanya hanya ini
            console.log(userCredential.user);     
          }
            catch(e){
            console.log(e)                        
            tampilkanALertUser()                  
          }                            
        }

        createUser("aqil@coba.com", "123");     // saat trigger di akses maka kita otomatis login tapi UI belum redirec ke profil UI, 
                                                // hal ini sangat buruk
                                                // padahal di console kita sudah login dengan akun baru tersebut, untuk experience itu perlu di tangani di bawah ini
-------------------------------------------------
USER PROFILE
- bikin function monitoring yang langsung di invoke di bawah
- callback nya mengatur soal kondisi state, show/hide: [login form, state, alert]  

        const monitorAuthState = async () => {
          onAuthStateChanged(auth, (user) => {          // mungkin disini await (kenapa tidak ada await?)
            if(user){
                console.log(user + "logged in!" );      // console
                showProfil();                           // tampilkan halaman profile
                showLoginState(user);                   // tampilkan info
                hideLoginAlert();                       // sembunyikan alert login
            }
            else{
                console.log("no user!" );
                showLoginForm();
                lblAuthState.innerHTML = "anda belum login!";
            }
          });
        }

monitorAuthState();
-------------------------------------------------
LOGOUT
tinggal bikin kan trigger dan jalankan subservice dalam async 

        const logout = async () => {
          await signOut(auth);
        }
-------------------------------------------------
CATATAN

import { initializeApp } from 'firebase/app'                                    
import {                                                                        
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'

const firebaseApp = initializeApp({                                             
  // ...
})

const auth = getAuth(firebaseApp);                                              

const loginEmailPass = async (email, pass) => {     
  try{
    const userCredential = await signInWithEmailAndPassword(auth, email, pass);   
    console.log(userCredential.user);     
  }
    catch(e){
    console.log(e)                        // disini silahkan ubah state boleh 
    tampilkanALertUser()                  // atau jalankan sebuah fungsi
  }                            
}

const createUser = async (email, pass) => {     
  try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);   
    console.log(userCredential.user);     
  }
    catch(e){
    console.log(e)                        
    tampilkanALertUser()                  
  }                            
}

const monitorAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if(user){
        console.log(user);
        showProfil();
        showLoginState(user);
      
        hideLoginError();
    }
    else{
        showLoginForm();
        lblAuthState.innerHTML = "anda belum login!";
    }
  });
}

monitorAuthState();

const logout = async () => {
  await signOut()
}

-------------------------------------------------
UI addEvent 

btnLogin.addEventListener("click", loginEmailPass)
btnRegister.addEventListener("click", createUser)
btnLogout.addEventListener("click", logout)

-------------------------------------------------
UI REACT

<Button onClick={ ()=>{loginEmailPass(stringEmail, StingPass)} }
<Button onClick={ ()=>{createUser(stringEmail, StingPass)} }
<Button onClick={ ()=>{logout(stringEmail, StingPass)} }

-------------------------------------------------
