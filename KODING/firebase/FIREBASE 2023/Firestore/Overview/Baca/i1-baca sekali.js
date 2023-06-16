---------------------------------------
Ada tiga cara untuk mengambil data. Salah satu dari metode ini dapat digunakan pada dokumen, koleksi dokumen, atau hasil kueri:

1. Memanggil data sekali. /
2. Menetapkan pemroses untuk menerima peristiwa perubahan data. /
3. Memuat data snapshot Firestore secara massal dari sumber eksternal melalui paket data. 

cek paket data untuk mengetahui detailnya.
Saat Anda menetapkan pemroses, Cloud Firestore akan mengirim snapshot awal data ke pemroses, 
dan kemudian snapshot lain setiap kali dokumen berubah.

initialisasi
---------------------------------------
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    FIREBASE_CONFIGURATION
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

tulis data dulu, agar bisa dilihat hasilnya
---------------------------------------
import { collection, doc, setDoc } from "firebase/firestore";

const citiesRef = collection(db, "cities");

await setDoc(doc(citiesRef, "SF"), {
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
await setDoc(doc(citiesRef, "LA"), {
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
await setDoc(doc(citiesRef, "DC"), {
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
await setDoc(doc(citiesRef, "TOK"), {
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
await setDoc(doc(citiesRef, "BJ"), {
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });

read basic getDoc()
---------------------------------------
import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

Opsi Sumber getDocFromCache()
---------------------------------------
Untuk offline, (dukungan sesuai platform, enable kan dulu) 

default: get() mengambil snapshot data terbaru. 
offline atau timeout, SDK menggunakan cache offline .
Anda dapat mengubah perilaku get() default. misalnya mengabaikan cache offline, atau sebaliknya hanya ambil data dari cache offline. 

import { doc, getDocFromCache } from "firebase/firestore";  // 1. import
const docRef = doc(db, "cities", "SF");                     // 2. ref

try {                                                       // 3. dalam try catch, untuk mengani jika data tidak ada
  const doc = await getDocFromCache(docRef);                // 4. ambil hanya dari cache
  console.log("Cached document data:", doc.data());         // 5. tampilkan data yg di temukan
} catch (e) {
  console.log("Error getting cached document:", e);         // 6. jika not found tampilkan error 
}

Objek kustom
---------------------------------------
Contoh sebelumnya mengambil konten dokumen sebagai map, 
tetapi dalam beberapa kasus lebih enak pake objek kustom. 
Di bagian Menambahkan Data, Anda menentukan class City yang digunakan untuk menentukan setiap kota. 
Anda dapat mengembalikan dokumen menjadi objek City:
untuk keperluanya belum bisa di fahami, cekidoc

Mendapatkan "beberapa" dokumen dari koleksi where()
---------------------------------------
Anda juga dapat mengambil beberapa dokumen dengan satu permintaan, 
dengan membuat kueri terhadap dokumen dalam koleksi. Misalnya, 
Anda dapat menggunakan where() guna membuat kueri untuk semua dokumen yang memenuhi kondisi tertentu, 
kemudian menggunakan get() untuk mengambil hasilnya:

import { collection, query, where, getDocs } from "firebase/firestore";     // 1. import
const q = query(collection(db, "cities"), where("capital", "==", true));    // 2. bikin query where()
const querySnapshot = await getDocs(q);                                     // 3. var baca query getDoc()
querySnapshot.forEach((doc) => {                                            // 4. looping query 
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());                                  // 5. tampilkan hasil doc.data()
});

Mendapatkan "semua" dokumen dalam koleksi
---------------------------------------
dengan menghilangkan filter where() data sepenuhnya di ambil:

import { collection, getDocs } from "firebase/firestore";
const querySnapshot = await getDocs(collection(db, "cities"));              // getDoc() tanpa query()
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

Mendapatkan beberapa dokumen dari sebuah grup koleksi
---------------------------------------
    - Grup koleksi terdiri dari semua koleksi dengan ID yang sama. 
    - Misalnya, jika setiap dokumen dalam koleksi cities memiliki subkoleksi yang disebut landmarks, 
        semua subkoleksi landmarks akan tergabung dalam grup koleksi yang sama. 
    - Secara default, kueri mengambil hasil dari satu koleksi di database Anda. 
    - Gunakan kueri grup koleksi untuk mengambil hasil dari grup koleksi, bukan dari satu koleksi.

Menampilkan daftar subkoleksi dokumen
Metode library klien server Cloud Firestore listCollections() menampilkan daftar semua subkoleksi referensi dokumen.
Pengambilan daftar koleksi tidak dapat dilakukan dengan library klien seluler/web. 
Anda sebaiknya hanya mencari nama koleksi sebagai bagian dari tugas administratif di lingkungan server yang tepercaya. 
Jika ternyata Anda memerlukan kemampuan ini pada library klien seluler/web, 
sebaiknya buat ulang struktur data Anda sehingga nama subkoleksi mudah diprediksi.
