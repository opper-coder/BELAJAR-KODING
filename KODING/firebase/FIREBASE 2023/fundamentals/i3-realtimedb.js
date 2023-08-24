-------------------------------------------------
DASHBOARD FIREBASE

-> console firebase 
-> pilih atau add project
-> aktifasi realtimedb
-> next2 finish
-> mirip json kita harus bikin dokument sebagai tabel lalu kolom sebagai field (ikuti best practice kedalaman nested ??> )
-------------------------------------------------
STRUCTUR PROJECT
 > kita akan gunakan instalasi dan inisialisasi pada project i1 dan i2 
 >   

-------------------------------------------------
        import { initializeApp } from 'firebase/app'                                    
        import { getDatabase, ref, set} from 'firebase/database'

        const firebaseApp = initializeApp({                                             
          // ...
        })

        const tambahUser = (userId, name, email, imageUrl) => {
          const db = getDatabase();                               
          const reference = ref(db, 'user/' + userId);            
                                                                  
          set(reference, {                                        
            username: name,
            email: email,
            profile_picture: imageUrl
          })
        }

        tambahUser("zikri aqil", "aqil", "aqil@coba.com", "myImgUrl");  : invoke tambahUser() akan menulis data di database dan bersifat replace jika ada
                                                                          maka berfungsi juga sebagai "create" dan "edit"
-------------------------------------------------
        :> "serve src/"                                         : jalankan kode 
        -> cek di dashboard database                            : maka data akan bertambah jika belum ada

-------------------------------------------------

lanjutkan kayaknya cukup seru ??????????
