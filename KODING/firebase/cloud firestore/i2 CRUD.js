CRUD
============================================================================================================
RINGKASAN
============================================================================================================

    
------------------------------------------------------------------------------------------------------------
MENULIS











------------------------------------------------------------------------------------------------------------
EDIT
------------------------------------------------------------------------------------------------------------
BACA
------------------------------------------------------------------------------------------------------------
HAPUS




























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








