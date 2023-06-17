
PAGINATION 
---------------------------------------
- Dengan query cursor, Anda dapat membagi data yang ditampilkan oleh kueri 
    menjadi beberapa batch berdasarkan parameter yang ditentukan dalam kueri Anda.
- Query cursor menentukan titik awal dan akhir untuk kueri, sehingga Anda dapat:
    Menampilkan subset data. Memberi nomor halaman (PAGINATION) pada hasil kueri.
- Namun, untuk menentukan rentang khusus untuk kueri, 
    Anda harus menggunakan metode where() yang dijelaskan dalam Kueri Sederhana.

MENAMBAHKAN KURSOR SEDERHANA KE KUERI
---------------------------------------
- Gunakan metode startAt() atau startAfter() untuk menentukan titik awal kueri. 
- startAt(A):     // start mulai A-Z 
- startAfter(A):  // start mulai B-Z

    import { query, orderBy, startAt } from "firebase/firestore";           // import
    const q = query(citiesRef, orderBy("population"), startAt(1000000));    // start dari 1000000
---
endAt(Z):         // berhenti di Z
endBefore(Z):     // berhenti sebelum Z
    import { query, orderBy, endAt } from "firebase/firestore";             // 
    const q = query(citiesRef, orderBy("population"), endAt(1000000));      // akhiri di 1000000

SNAPSHOT DOKUMEN UNTUK MENENTUKAN QUERY CURSOR
---------------------------------------
- Anda juga dapat meneruskan snapshot dokumen ke klausa kursor sebagai titik awal atau akhir query cursor. 
- Nilai dalam snapshot dokumen berfungsi sebagai nilai dalam query cursor.
- Misalnya, ambil snapshot dokumen "San Francisco" di set data kota dan populasi. 
    Kemudian, gunakan snapshot dokumen tersebut sebagai titik awal untuk query cursor populasi Anda. 
    Kueri akan menampilkan semua kota berpopulasi lebih besar dari atau sama dengan populasi San Francisco, 
    seperti yang ditentukan dalam snapshot dokumen.

    import { collection, doc, getDoc, query, orderBy, startAt } from "firebase/firestore";
    const citiesRef = collection(db, "cities");                                                 // 1. ref
    const docSnap = await getDoc(doc(citiesRef, "SF"));                                         // 2. ambil data getDoc() di collection 
    const biggerThanSf = query(citiesRef, orderBy("population"), startAt(docSnap));             // 3. ambil semua data dimulai dari docSnap (startAt pakai getDoc)








// ?????????????????????????????? 

LIMIT KUERI￼
---------------------------------------
kombinasi query cursor dengan metode limit(). 
Misalnya, gunakan dokumen terakhir dalam batch sebagai awal kursor untuk batch berikutnya.

import { collection, query, orderBy, startAfter, limit, getDocs } from "firebase/firestore";    // import

// Query the first page of docs
const first = query(collection(db, "cities"), orderBy("population"), limit(25));                // 1. query ke collection, semua data cities, batasi 25 data
const documentSnapshots = await getDocs(first);                                                 // 2. ambil data getDoc(pakai kueri limit yg di limit 25 pertama)

// Get the last visible document
const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];                    // 3. 
console.log("last", lastVisible);

// Construct a new query starting at this document,
// get the next 25 cities.
const next = query(collection(db, "cities"),                                                    // 4. query ambil data "cities"
    orderBy("population"),                                                                      // 5. urutkan dg population
    startAfter(lastVisible),                                                                    // 6. dimulai dari "lastVisible"
    limit(25));                                                                                 // 7. batasi 25




// ?????????????????????????????? 

---------------------------------------
Menetapkan kursor berdasarkan beberapa kolom
Saat menggunakan kursor berdasarkan nilai kolom (bukan DocumentSnapshot), Anda dapat meningkatkan keakuratan posisi kursor dengan menambahkan kolom. Hal ini sangat berguna jika set data Anda menyertakan beberapa dokumen bernilai sama untuk kolom kursor, yang menyebabkan posisi kursor tersebut kurang akurat. Anda dapat menambahkan nilai kolom lain ke kursor untuk menentukan lebih lanjut titik awal atau akhir, serta mengurangi ambiguitas.

Misalnya, dalam set data yang berisi semua kota bernama "Springfield" di Amerika Serikat, akan ada beberapa titik awal untuk kueri yang ditetapkan untuk dimulai di "Springfield":


// Will return all Springfields
import { collection, query, orderBy, startAt } from "firebase/firestore";
const q1 = query(collection(db, "cities"),
   orderBy("name"),
   orderBy("state"),
   startAt("Springfield"));

// Will return "Springfield, Missouri" and "Springfield, Wisconsin"
const q2 = query(collection(db, "cities"),
   orderBy("name"),
   orderBy("state"),
   startAt("Springfield", "Missouri"));



   
