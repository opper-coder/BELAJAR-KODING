CRUD
============================================================================================================
RINGKASAN
- referensi
    doc(db, 'users/id' );          // referensi ke dokument
    doc(db, "users", "id" );       // boleh pakai slash atau koma satu atau koma dua
    collection(db, 'users');       // ref ke koleksi
- tulis data
- 


============================================================================================================


------------------------------------------------------------------------------------------------------------
MENULIS
- ada 3 issue
    - tambah data 
    - ID
    - bikin data awal
    - timpa data (replace)
    - gabungkan data
    - bikin dokumen
    - tambah data dengan class
    - update (edit)
----------------------------
- ada 3 cara menulis data ke db:
    1. tulis data ke koleksi dengan ID manual
    2. tulis data ke koleksi dengan ID otomatis
    3. tulis ID otomatis lalu isi data belakangan
----------------------------
- setDoc() dan doc()
    - tambah dokumen ke koleksi dengan id LA
    - cara ini dapat di gunakan untuk create dan atau replace(edit)
        
        import { doc, setDoc } from "firebase/firestore";   // import 2 method tsb
        await setDoc(doc(db, "cities", "LA"), {             // setDoc(),{} > doc(db,kol,dok)
          name: "Los Angeles",
          state: "CA",
          country: "USA"
        });
----------------------------
- {merge:true}
    - gabungkan data ke dlm dokumen yang sudah ada
    - agar tidak menimpa data keseluruhan
    - prkatek dan pengertian 2 point (?????)

        import { doc, setDoc } from "firebase/firestore";
        const cityRef = doc(db, 'cities', 'BJ');
        setDoc(cityRef, { capital: true }, { merge: true });
----------------------------
- jenis data
        import { doc, setDoc, Timestamp } from "firebase/firestore";
        const docData = {
            stringExample: "Hello world!",
            booleanExample: true,
            numberExample: 3.14159265,
            dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
            arrayExample: [5, true, "hello"],
            nullExample: null,
            objectExample: {
                a: 5,
                b: {
                    nested: "foo"
                }
            }
        };
        await setDoc(doc(db, "data", "one"), docData);
----------------------------
- object custom (class)
    - ada 3 langkah untuk isi data dengan class untuk mendukung jenis data pada firebase
        1. bikin class dulu
        2. lalu konversi data ke firestore
        3. terakhir set ke firestore
        
        class City {
            constructor (name, state, country ) {
                this.name = name;
                this.state = state;
                this.country = country;
            }
            toString() {
                return this.name + ', ' + this.state + ', ' + this.country;
            }
        }

        // Firestore data converter
        const cityConverter = {
            toFirestore: (city) => {
                return {
                    name: city.name,
                    state: city.state,
                    country: city.country
                    };
            },
            fromFirestore: (snapshot, options) => {
                const data = snapshot.data(options);
                return new City(data.name, data.state, data.country);
            }
        };
----------------------------
- Tambah dokumen 
    1. set() tambah dokumen dengan ID
        import { doc, setDoc } from "firebase/firestore";
        await setDoc(doc(db, "cities", "new-city-id"), data);
    2. add() tambah dokumen tanpa ID (alis di generate oleh firestore)
        import { collection, addDoc } from "firebase/firestore";
        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "cities"), {
          name: "Tokyo",
          country: "Japan"
        });
        console.log("Document written with ID: ", docRef.id);
    3. karena ID generated tidak punya pengurutan maka gunakan timestamp() pada sebuah kolom
    4. pengertian dan praktek(?????)                          
    5. bikin dokumen dulu, kelak akan di isi data
         import { collection, doc, setDoc } from "firebase/firestore";
        // Add a new document with a generated id
        const newCityRef = doc(collection(db, "cities"));
        // later...
        await setDoc(newCityRef, data);                     
----------------------------
Memperbarui data 
- Untuk memperbarui beberapa kolom dokumen tanpa menimpa keseluruhan dokumen, gunakan metode update():
        import { doc, updateDoc } from "firebase/firestore";
        const washingtonRef = doc(db, "cities", "DC");
        // Set the "capital" field of the city 'DC'
        await updateDoc(washingtonRef, {
          capital: true
        });
    - coba praktekan dengan true ganti false(?????)
----------------------------
- Stempel Waktu Server
  Anda dapat menetapkan kolom dalam dokumen ke stempel waktu server yang melacak kapan server menerima update.
        import { updateDoc, serverTimestamp } from "firebase/firestore";
        const docRef = doc(db, 'objects', 'some-id');
        // Update the timestamp field with the value from the server
        const updateTimestamp = await updateDoc(docRef, {
            timestamp: serverTimestamp()
        });
----------------------------
- Memperbarui kolom pada objek bertingkat
  Jika dokumen Anda berisi objek bertingkat, Anda dapat menggunakan "notasi titik" 
  untuk merujuk ke kolom bertingkat dalam dokumen saat memanggil update():
        import { doc, setDoc, updateDoc } from "firebase/firestore";
        // Create an initial document to update.
        const frankDocRef = doc(db, "users", "frank");
        await setDoc(frankDocRef, {
            name: "Frank",
            favorites: { food: "Pizza", color: "Blue", subject: "recess" },
            age: 12
        });

        // To update age and favorite color:
        await updateDoc(frankDocRef, {
            "age": 13,
            "favorites.color": "Red"
        });
----------------------------
- Notasi titik memungkinkan Anda memperbarui satu kolom bertingkat tanpa menimpa 
  kolom bertingkat lainnya. 
- Jika Anda memperbarui kolom bertingkat tanpa notasi titik, 
  Anda akan menimpa seluruh kolom peta, misalnya:
        // Create our initial doc
        db.collection("users").doc("frank").set({
          name: "Frank",
          favorites: {
            food: "Pizza",
            color: "Blue",
            subject: "Recess"
          },
          age: 12
        }).then(function() {
          console.log("Frank created");
        });

        // Update the doc without using dot notation.
        // Notice the map value for favorites.
        db.collection("users").doc("frank").update({
          favorites: {
            food: "Ice Cream"
          }
        }).then(function() {
          console.log("Frank food updated");
        });

        /*
        Ending State, favorite.color and favorite.subject are no longer present:
        /users
            /frank
                {
                    name: "Frank",
                    favorites: {
                        food: "Ice Cream",
                    },
                    age: 12
                }
         */
----------------------------
- Memperbarui elemen dalam array
  - Jika dokumen Anda berisi kolom array, Anda bisa menggunakan arrayUnion() dan arrayRemove() 
  - untuk menambah dan menghapus elemen. arrayUnion() menambahkan elemen ke array, 
  - tetapi hanya elemen yang belum ada. arrayRemove() menghapus semua instance dari setiap elemen 
    yang diberikan.  
          import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
          const washingtonRef = doc(db, "cities", "DC");
          // Atomically add a new region to the "regions" array field.
          await updateDoc(washingtonRef, {
          regions: arrayUnion("greater_virginia")
          });
          // Atomically remove a region from the "regions" array field.
          await updateDoc(washingtonRef, {
          regions: arrayRemove("east_coast")
          });
----------------------------
- Operasi inkremental nilai numerik
  - Anda bisa menambahkan atau mengurangi nilai kolom numerik secara inkremental 
    seperti yang ditunjukkan pada contoh berikut. 
  - Operasi inkremental akan menambahkan 
    atau mengurangi nilai kolom saat ini dengan jumlah tertentu.
          import { doc, updateDoc, increment } from "firebase/firestore";
          const washingtonRef = doc(db, "cities", "DC");
          // Atomically increment the population of the city by 50.
          await updateDoc(washingtonRef, {
             population: increment(50)
          });
  - Operasi inkremental berguna untuk implementasi penghitung, 
    tetapi perlu diingat bahwa Anda hanya dapat memperbarui satu dokumen satu kali per detik. 
    Jika perlu memperbarui penghitung Anda di atas frekuensi ini, 
    lihat halaman Penghitung terdistribusi.
   
  
------------------------------------------------------------------------------------------------------------
EDIT
- edit dapat di lakukan dengan replace seperti keterangan di atas atau
- menggunakan update() seperti di atas
- atau jika kolom anda berbentuk kolom array maka penjelasan juga ada di atas
------------------------------------------------------------------------------------------------------------
BACA
- ada bab tersendiri di halaman lain
------------------------------------------------------------------------------------------------------------
HAPUS
- hapus sebaiknya tidak dilakukan melainkan tambahkan kolom hapus:true
- hapus data pada data besar sebaiknya gunakan kursor  agar dapat dilakukan secara bertahap
  dan tidak membebani RAM
- hapus tidak dapat dilakukan dengan mudah ada metode yang benar di halaman lainya 



DIBAWAH INI SEBAIKNYA DI HAPUS SAJA NAMUN SEBELUMNYA TINJAU DULU KARENA INI SUDAH DI PERBAIKI DI ATAS
-----------------------------------------------------------------------------------------------------
TULIS DATA DASAR 
- ini tulis data atau timpa/edit data jika sudah ada dan tanpa id
- .add(...) DAN .doc().set(...) dua ini benar-benar setara, sehingga Anda dapat menggunakan salah satu yang paling Anda sukai.
</>
    import { doc, setDoc } from "firebase/firestore";
</>
    await setDoc(doc(db, "cities", "LA"), {                 // tambah data pada collection cities / doc LA
      name: "Los Angeles",                                  // isi key : value
      state: "CA",
      country: "USA"
    });
    
--- TULIS DATA INSERT 
    - ini sisipkan/input data dokumen baru, pada coll yang sudah ada {merge:true}
    - cara ini sangat baik untuk data yang sudah ada atau belum pertimbangkan harus di gunakan
      untuk menghindari menimpa data yang sudah ada secara keseluruhan
    </>
        const cityRef = doc(db, 'cities', 'BJ');                // tulis pada coll 'cities' untuk dokumen baru 'BJ'
        setDoc(cityRef, { capital: true }, { merge: true });    // {isi},{penggabungan/sisip}

--- TULIS DATA dengan ID =====
    saat menulis data kita butuh bikin id yang uniq. pakai saja setDoc()
    </>
    await setDoc(doc(db, "cities", "new-city-id"), data);       // bikin id "new-city-id" lalu isi data {data} 

--- TULIS DATA dengan ID otomatis
    saat menulis, bikin id otomatis. pakai saja addDoc()
    </>
    await addDoc(collection(db, "cities" ), data);              // tanpa id (otomatis di buatkan oleh addDoc()) ditulis pada collection
    ---
    const docRef = await addDoc(collection(db, "cities"), {     // penting pada metode otomatis ini tdk ada pengurutan otomatis 
      name: "Tokyo",                                            // maka sediakan kolom timestamp kalau mau di urutkan nantinya
      country: "Japan"
    });
    console.log("Document written with ID: ", docRef.id);
    ---
--- ???? perlu di praktekin satu lagi 
????????????????????????????

-----------------------------------------------------------------------------------------------------
// EDIT DATA 
untuk memperbarui data yang tidak menimpa keseluruhan kolom document pakai update()
    </>
    const washingtonRef = doc(db, "cities", "DC");

    await updateDoc(washingtonRef, {    
      capital: true                           // edit capital pada doc 'DC', coll "cities" saja kolom yang lain tidak (belum praktek)
    });

    TIMESTAMP 
    berikan kolom timestamp untuk mendeteksi pengurutan dan penulisan transaksional lihat documentasi

    import { updateDoc, serverTimestamp } from "firebase/firestore";
    const docRef = doc(db, 'objects', 'some-id');

    // Update the timestamp field with the value from the server
    const updateTimestamp = await updateDoc(docRef, {
        timestamp: serverTimestamp()
    });

----- panggil object bertingkat pada "object bertingkat" saat panggil update()
tanpa menimpa kolom bertingkat lainnya. Jika Anda memperbarui kolom bertingkat tanpa notasi titik(chaining), 
Anda akan menimpa seluruh kolom peta -----

    import { doc, setDoc, updateDoc } from "firebase/firestore";

    // Create an initial document to update pakai object bertingkat.
    const frankDocRef = doc(db, "users", "frank");
    await setDoc(frankDocRef, {
        name: "Frank",
        favorites: { food: "Pizza", color: "Blue", subject: "recess" },
        age: 12
    });

    // To update age and favorite color pakai chaining:
    await updateDoc(frankDocRef, {
        "age": 13,
        "favorites.color": "Red"                // chaining
    });
    
----- Memperbarui elemen dalam array
Jika dokumen Anda berisi kolom array, Anda bisa menggunakan arrayUnion() dan arrayRemove() 
untuk menambah dan menghapus elemen. 
arrayUnion() menambahkan elemen ke array, 
tetapi hanya elemen yang belum ada. 
arrayRemove() menghapus semua instance dari setiap elemen yang diberikan.

import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

const washingtonRef = doc(db, "cities", "DC");

// Atomically add a new region to the "regions" array field.
await updateDoc(washingtonRef, {
    regions: arrayUnion("greater_virginia")     // key array region : tambah kota
});

// Atomically remove a region from the "regions" array field.
await updateDoc(washingtonRef, {
    regions: arrayRemove("east_coast")          // hapus kota pada key 
});

coba praktekin
?????????????????????????
-----------------------------------------------------------------------------------------------------
TYPEDATA
silahkan coba jenis type data ini

const docData = {
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
    arrayExample: [5, true, "hello"],
    nullExample: null,
    objectExample: {
        a: 5,
        b: {
            nested: "foo"
        }
    }
};
await setDoc(doc(db, "data", "one"), docData);

CLASS 
kalau memasukkan data menggunakan class nodejs, firebase tetap akan mengkonversi ke object. jika di butuhkan, baca dokumentasi








