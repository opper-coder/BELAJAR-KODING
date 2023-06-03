sumber propietary, space4 sublime
Daftar isi:
	- struktur data							-> skema penyusunan hirarki
	- initialize							-> langkah awal firebase
	- referensi								-> referensi url db
	- konsep tambah data					-> konsep add
	- tambah data auto ID 					-> auto ID
	- REPLACE, MERGE						-> tambah data Replace dan merge
	- Type data 							-> type
	- Object Custom							-> dokumen berisi map
	- menambahkan dokumen dengan ID manual  -> manual ID
	- update()								-> ubahdata bukan replace atau merge
	- update()siswa.nama					-> ubahdata obj bertingkat
	- update()arrayUnion()arrayRemove()	  	-> ubah data element array
	- update()increment(50) 				-> ubahdata type numerik

struktur data yang bisa dipilih
---------------------------------------
1. root > dokument > array/map(object) 							// collection berisi dokument dan langsung array atau object
2. root > collection > document > subcollection > document 		// collection bertingkat 
3. root > collection > document 								// colllection dua tingkat saja, apabila ada keperluan kita buat lagi collection
ada kelebihan dan kekurangan terkait dengan skalabiliti, kecepatan, pengelolaan, dan kompleksitas kuery

INITIALIZE
---------------------------------------
- lakukan initialisasi dulu cekidoc, lalu gunakan method2 yang di sediakan

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    FIREBASE_CONFIGURATION
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

REFERENSI
-------------------------------------------
- referensi dokumen (mirip url db menuju ke row data)
	import { doc, collection } from "firebase/firestore";			// doc() sebagai penunjuk
	const siswa1 = doc(db, 'siswa', 'andy'); 						// bentuknya ke row data andi
	const siswa1 = doc(db, 'siswa/andy'); 							// atau pakai slash
	const siswa1 = doc(db, "siswa", "kelas", "jurusan", "fisika"); 	// bersarang
	const siswa1 = doc(db, "siswa/kelas/jurusan/fisika"); 			// bersarang pakai slash (tidak ada dlm dokumentasi)
	-----
	const siswa1 = db.collection('siswa').doc('fisika'); 			// nodejs (client server SDK)
	const siswa1 = db.doc('siswa/andy'); 							// atau pakai slash
	const messageRef = db.collection('siswa').doc('kelas')
  		.collection('jurusan').doc('fisika') 						// bersarang
  	const messageRef = db.doc('siswa/kelas/jurusan/fisika') 		// bersarang pakai slash (tidak ada dlm dokumentasi)

- referensi ke collection (url menuju ke tabel)
	const tabelSiswa = collection(db, 'siswa'); 
	-----
	const tabelSiswa = db.collection('siswa'); 						// nodejs

TAMBAHKAN DATA 
---------------------------------------
Ada beberapa cara menulis data:

- bikin data dokumen dalam koleksi, dengan ID secara explisit dikasih ke dokumen.
- bikin data dokumen dalam koleksi, dengan tidak menentukan ID dokumen. (dibuatkan auto) 
- Membuat dokumen kosong dengan ID auto, lalu menetapkan data kemudian. 
- tambahdata dg .addDoc(...) dan .doc().setDoc(...) sama saja, pilih salah satu yang paling Anda sukai.
------
import { doc, setDoc } from "firebase/firestore"; 			// 1. import
await setDoc(doc(db, "cities", "LA"), { 					// 2. setDoc() untuk tambah data, doc() untuk ref url
  name: "Los Angeles", 										// 3. kirim object nya
  state: "CA",
  country: "USA"
});
------
import { collection, addDoc } from "firebase/firestore";  	// addDoc() contoh tambahdata fungsi sama referensi pakai collection
await addDoc(collection(db, "cities"), {
  name: "Tokyo",
  country: "Japan"
});

REPLACE, MERGE
---------------------------------------
- cara di atas akan Menambahkan data jika belum pernah di buat, jika sudah akan di replace seluruhnya
- jika maunya di gabungkan data lama dg data baru maka tambahkan {merge:true}
- Jika tidak yakin apakah dokumen itu ada atau tdk, teruskan opsi {merge:true} 
	untuk menggabungkan data baru dengan dokumen yang ada agar tidak menimpa keseluruhan dokumen. 
	jk kita mengirim satu data maka lainya di anggap kosong
- Untuk dokumen yang berisi map, kolom yang berisi map kosong akan tetap menimpa kolom target tersebut
- untuk metode update tanpa menimpa pakai update() di bawah

import { doc, setDoc } from "firebase/firestore";
const cityRef = doc(db, 'cities', 'BJ');
setDoc(cityRef, { capital: true }, { merge: true }); 		// obj taruh di args paling belakang
----- 														
import { doc, setDoc } from "firebase/firestore"; 			// cth2
await setDoc(doc(db, "cities", "LA"), { 					
  name: "Los Angeles", 										
  state: "CA",
  country: "USA"
}, { merge:true }); 

TYPE DATA (tambahdata dg "type2", ada map, array dll)
---------------------------------------
import { doc, setDoc, Timestamp } from "firebase/firestore";

const docData = { 														// simpan data dlm obj
    stringExample: "Hello world!",
    booleanExample: true,
    numberExample: 3.14159265,
    dateExample: Timestamp.fromDate(new Date("December 10, 1815")), 	// Timestamp perlu di import
    arrayExample: [5, true, "hello"], 									// array 
    nullExample: null,
    objectExample: {  													// map
        a: 5,
        b: {
            nested: "foo" 												// map nested
        }
    }
};
await setDoc(doc(db, "data", "one"), docData); 							// tambahdata dg obj


OBJECT CUSTOM
---------------------------------------
jika anda punya data berupa "object" di "document" firestore, 
maka tambah data nya menggunakan template class, yang kemudian di ubah(konv) ke object, lalu di teruskan ke firestore
dari pada kita kirim berupa object ya bisa saja sih seperti di atas, tapi kan tidak punya template fieldnya

class City { 															// 1. ini template object City anda memiliki template field 
    constructor (name, state, country ) {
        this.name = name;
        this.state = state;
        this.country = country;
    }
    toString() {
        return this.name + ', ' + this.state + ', ' + this.country;
    }
}
----- 			
const cityConverter = { 												// 2. ini fungsi pengubah ke method firestore
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

import { doc, setDoc } from "firebase/firestore";

const ref = doc(db, "cities", "LA").withConverter(cityConverter); 		// 3. doc().withConverter() nanti data di tambahkan lewat cityconv karena sudah ada "key" disana
await setDoc(ref, new City("Los Angeles", "CA", "USA")); 				// 4. kita kirim berupa argument dari instance bukan object lagi, argument sesuai urutan ya(name,state,country)

MENAMBAHKAN DOKUMEN DENGAN ID
---------------------------------------
import { doc, setDoc } from "firebase/firestore";
await setDoc(doc(db, "cities", "new-city-id"), data); 					// setDoc() ID dibikin manual, seperti "new-city-id"
-----
import { collection, addDoc } from "firebase/firestore";
const docRef = await addDoc(collection(db, "cities"), { 				// addDoc() ID dibikin auto
  name: "Tokyo",
  country: "Japan"
});
console.log("Document written with ID: ", docRef.id);
-----
import { collection, doc, setDoc } from "firebase/firestore";
const newCityRef = doc(collection(db, "cities")); 						// doc() saat doc di panggil maka membuat document kosong hanya berisi id saja
await setDoc(newCityRef, data); 										// setDoc() lalu isi data kemudian
-----

MEMPERBARUI DOKUMEN upodate()
---------------------------------------
Untuk memperbarui beberapa kolom dokumen tanpa menimpa keseluruhan dokumen, gunakan metode update()
kalau pakai setDoc(), addDoc() akan menimpa

import { doc, updateDoc } from "firebase/firestore";
const washingtonRef = doc(db, "cities", "DC");
await updateDoc(washingtonRef, { 										
  capital: true 														// pakai update doc mirip patch() javascript
});
-----
Stempel Waktu Server
Anda dapat menetapkan kolom dalam dokumen ke stempel waktu server yang melacak kapan server menerima update.
oya saat addDoc() jangan lupa sertakan field timestamp: dari server, agar tahu kapan di buat

import { updateDoc, serverTimestamp } from "firebase/firestore";
const docRef = doc(db, 'objects', 'some-id');
const updateTimestamp = await updateDoc(docRef, { 						// saat addDoc() jangan lupa sertakan field timestamp: dari server, agar tahu kapan di buat
    timestamp: serverTimestamp()										// saat update() jangan lupa sertakan field timestamp: dari server, agar tahu kapan di ubah
});
-----
MEMPERBARUI KOLOM PADA OBJEK BERTINGKAT update()coba.ada:""
---------------------------------------
saat memanggil update(), referensi nya pakai notasi titik pada obj bertingkat

import { doc, setDoc, updateDoc } from "firebase/firestore"; 			// 1. import update()
const frankDocRef = doc(db, "users", "frank"); 							// 2. ref biasa
await setDoc(frankDocRef, { 											// 3. tambah data biasa
    name: "Frank",
    favorites: { food: "Pizza", color: "Blue", subject: "recess" },
    age: 12
});
-----
await updateDoc(frankDocRef, {
    "age": 13, 															// 4. update data lama biasa
    "favorites.color": "Red" 											// 5. update new dan bertingkat pakai titik (datalama dan new sama saja) 
});
----- 
update notasi titik bisa replace lo hati2

db.collection("users").doc("frank").set({
  name: "Frank",
  favorites: { 															// 1. anda punya data dg map bertingkat favourite > food:pizza ...
    food: "Pizza",
    color: "Blue",
    subject: "Recess"
  },
  age: 12
}).then(function() {
  console.log("Frank created");
});
-----
db.collection("users").doc("frank").update({
  favorites: { 															// 2. saat update tanpa notation titik maka akan mereplace lainya
    food: "Ice Cream" 									
  }
}).then(function() {
  console.log("Frank food updated");
});
-----
/users
    /frank
        {
            name: "Frank",
            favorites: {
                food: "Ice Cream", 										// 3. hasildata firebase color dan subject jadi hilang
            },
            age: 12
        }
-----
db.collection("users").doc("frank").update({
  "favorites.food": "Ice Cream" 										// 4. kalau nggak mau direplace(hilang) maka pakai titik
})
-----
MEMPERBARUI ELEMEN DALAM ARRAY update()arrayUnion()arrayRemove()
---------------------------------------
Jika dokumen Anda berisi kolom array, Anda bisa menggunakan arrayUnion() dan arrayRemove() untuk menambah dan menghapus elemen. 
arrayUnion() menambahkan elemen ke array, tetapi hanya elemen yang belum ada. 
arrayRemove() menghapus semua instance dari setiap elemen yang diberikan.
operasi hapus dan tambah == ubahdata. (seperti cut kan == copy dan delete) 

import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";	// 1. import
const washingtonRef = doc(db, "cities", "DC"); 							// 2. ref
-----
await updateDoc(washingtonRef, {
    regions: arrayUnion("greater_virginia") 							// 3. Atomically add a new region to the "regions" array field. (tambah databaru ke array)
});
-----
await updateDoc(washingtonRef, {
    regions: arrayRemove("east_coast") 									// 4. Atomically remove a region from the "regions" array field. (hapus datalama dalam array)
});

MEMPERBARUI ELEMEN NUMERIK DENGAN INCREMENTAL
---------------------------------------
Anda bisa menambahkan atau mengurangi nilai kolom numerik secara inkremental 
contoh menambahkan atau mengurangi nilai kolom saat ini dengan jumlah tertentu.
tapi fungsi ini hanya bisa di update 1x per detik kalau mau lebih cekidoc

import { doc, updateDoc, increment } from "firebase/firestore"; 		// 1. import
const washingtonRef = doc(db, "cities", "DC");							// 2. ref
await updateDoc(washingtonRef, {
    population: increment(50) 											// 3. terupdate dg tambahan angka 50 (kalau mengurangi -50) 
});



