====================================================================================================
====================================================================================================
----------------------------------------------------------------------------------------------------
PEMBARUAN REALTIME DENGAN CLOUD FIRESTORE
- berbeda dengan mengambil data menggunakan method get()
- dengan metod onSnapshot(). menggunakan callback yang Anda berikan akan segera membuat snapshot realtime
- akan di 'notif' saat perubahan data terkini (realtime)
        import { doc, onSnapshot } from "firebase/firestore";           // import
        const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {    // onSnapshot(ref, callback) call back akan --
            console.log("Current data: ", doc.data());                  // -- tampilkan data terkini (itu intinya)
        });

-----------------------------------------------------------------------------------------------------
PERISTIWA UNTUK PERUBAHAN LOKAL
- saat data di tulis oleh client sesaat sebelum di kirim ke backend method(fungsi pemroses pd SDK)
  akan dapat pemberitahuan bahwa ada data baru meskipun belum dikirim ke db
- jika anda membutuhkan peristiwa ini gunakan properti.hasPendingWrites
- artinya: "apakah dokumen memiliki perubahan data local sebelum di kirim" karena kalau sudah dikirim 
  ada method pemberitahuan lain yang berbeda 
        import { doc, onSnapshot } from "firebase/firestore";                   // import
        const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {            // ambil data biasa
          const source = doc.metadata.hasPendingWrites ? "Local" : "Server";    // di callback nya tambahkan metadata
          console.log(source, " data: ", doc.data());                           // tampilkan
        });

-----------------------------------------------------------------------------------------------------
PERISTIWA UNTUK PERUBAHAN METADATA
- namun peristiwa metadata diatas meski sudah di tangkap oleh properti 'hasPendingWrites' 
- namun belum di kelola(di tangani untuk di tampilkan)
- jika di ingikan teruskan ke method 'listen'
        import { doc, onSnapshot } from "firebase/firestore";   // import
        const unsub = onSnapshot(                               // ambildata biasa
          doc(db, "cities", "SF"),                              
          { includeMetadataChanges: true },                     // pada argumen ini tambahkan listen
          (doc) => {
            // ...
          });
- Jika hanya ingin mengetahui saat penulisan selesai, 
  Anda dapat memproses callback penyelesaian, tanpa harus menggunakan 'hasPendingWrites'. 
  Pada JavaScript, gunakan Promise yang ditampilkan dari operasi tulis Anda
  dengan menambahkan callback .then()
- carikan contoh 
- ????????
-----------------------------------------------------------------------------------------------------
MEMPROSES BEBERAPA DOKUMEN DALAM KOLEKSI
- Seperti pada dokumen, Anda dapat menggunakan onSnapshot() dan bukan get() 
  untuk memproses hasil kueri. Dengan cara ini, snapshot kueri akan dibuat.
- Pengendali snapshot akan menerima snapshot kueri baru setiap kali hasil kueri berubah 
  (yakni, jika dokumen ditambahkan, dihapus, atau dimodifikasi).
- disini juga dapat menggunakan kolom metadata.hasPendingWrites. seperti di atas
        import { collection, query, where, onSnapshot } from "firebase/firestore";      // import    
        const q = query(collection(db, "cities"), where("state", "==", "CA"));          // query coll dg where(semua doc di kota CA)
        const unsubscribe = onSnapshot(q, (querySnapshot) => {                          // proses querySnapshot(letak realtime)
          const cities = [];                                            // variabel kosong (kota)
          querySnapshot.forEach((doc) => {                              // argunen.loop( kota.push(data dr query))
              cities.push(doc.data().name);                             // 
          });
          console.log("Current cities in CA: ", cities.join(", "));     // tampilkan
        });
    
-----------------------------------------------------------------------------------------------------
MELIHAT PERUBAHAN ANTAR-SNAPSHOT
- 
        import { collection, query, where, onSnapshot } from "firebase/firestore";      //
        const q = query(collection(db, "cities"), where("state", "==", "CA"));          //
        const unsubscribe = onSnapshot(q, (querySnapshot) => {                          //
          const cities = [];
          querySnapshot.forEach((doc) => {                                              //
              cities.push(doc.data().name);
          });
          console.log("Current cities in CA: ", cities.join(", "));                     //
        });

-----------------------------------------------------------------------------------------------------
MELIHAT PERUBAHAN ANTAR-SNAPSHOT
- 
        import { collection, query, where, onSnapshot } from "firebase/firestore";      //
        const q = query(collection(db, "cities"), where("state", "==", "CA"));          //
        const unsubscribe = onSnapshot(q, (snapshot) => {                               //
          snapshot.docChanges().forEach((change) => {                                   //
            if (change.type === "added") {                                              //
                console.log("New city: ", change.doc.data());
            }
            if (change.type === "modified") {                                           //
                console.log("Modified city: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
          });
        });
    
-----------------------------------------------------------------------------------------------------
MELEPASKAN PEMROSES
- 
        import { collection, onSnapshot } from "firebase/firestore";            //
const unsubscribe = onSnapshot(collection(db, "cities"), () => {                //
          // Respond to data
          // ...
        });

        // Later ...

        // Stop listening to changes
        unsubscribe();                                                          //

-----------------------------------------------------------------------------------------------------
MENANGANI ERROR PEMROSESAN
-     
        import { collection, onSnapshot } from "firebase/firestore";    //
        const unsubscribe = onSnapshot(                                 //
        collection(db, "cities"),                                       //
        (snapshot) => {                                                 //
        // ...
        },
        (error) => {                                                    //
        // ...
        });

 -----------------------------------------------------------------------------------------------------
 =====================================================================================================
