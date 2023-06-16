DAFTAR ISI
---------------------------------------
konsep                      -> konsep atomik, transaksi, batch
transaksi basic             -> basic
transaksi informasi error   -> best practice
batch                       -> basic
VALIDASI                    -> server, belum paham
Batas aturan Keamanan       -> serverm, belum faham
---------------------------------------
- operasi atomic: 
    operasi serentak baca tulis, seluruh operasi harus berhasil atau, jika ada yang tidak berhasil, semua tidak akan diterapkan. 
    transaksi membaca beberapa dokumen, misalnya salah satunya diubah oleh klien lain, 
    Cloud Firestore akan mencoba menjalankan kembali transaksi. tidak langsung dijalankan begitu saja saat ada update
    Fitur ini memastikan bahwa transaksi dilakukan pada data yang terkini dan konsisten.
    Transaksi tidak pernah menerapkan penulisan secara parsial. Semua penulisan akan dijalankan di akhir transaksi yang sukses.
peristiwa dan aturan transaksi:
    - Operasi baca harus dilakukan sebelum operasi tulis.
    - fungsi transaksi dapat dijalankan lebih dari satu kali, jika pengeditan serentak memengaruhi dokumen yang dibaca transaksi tersebut.
    - Fungsi transaksi sebaiknya tidak langsung mengubah status aplikasi.
Transaksi akan gagal saat klien sedang offline.
- Ada dua jenis:
    1. Transaksi: adalah "sekumpulan operasi baca dan tulis" pada satu atau beberapa dokumen. /
    2. Batch: adalah "sekumpulan operasi tulis saja" di satu atau beberapa dokumen.
    operasi tulis maksimum 500 dokumen. batas tambahan, lihat Kuota dan Batas. cekidoc

TRANSAKSI
---------------------------------------
UPDATE DATA DENGAN TRANSAKSI
Suatu transaksi terdiri pengeditan serentak kombinasi transaction.get() yang diikuti transaction.set(), transaction.update(), atau transaction.delete().

import { runTransaction } from "firebase/firestore";                    // 1. import runTransaction
                                                                        // 2. tulis dalam try catch karena ada sukses dan gagal rangkaian transasi
try {                                                                   // 3. await juga karena promise
  await runTransaction(db, async (transaction) => {                     // 4. runTransaction(db, ()=>{}) di dalam sini ada "DERETAN AKSI"
    const sfDoc = await transaction.get(sfDocRef);                      // 5. transaksipertama transaction.bacadata get()
    if (!sfDoc.exists()) {                                              // 6. cek jika tdk ada data
      throw "Document does not exist!";                                 // 7. pesan error tidak ada data
    }

    const newPopulation = sfDoc.data().population + 1;                  // 8. variabel tulis data (field population: tambah 1)
    transaction.update(sfDocRef, { population: newPopulation });        // 9. transaksikedua transaction.update tulisdata ke field 
  });
  console.log("Transaction successfully committed!");                   // 10. tampilkan status
} catch (e) {
  console.log("Transaction failed: ", e);                               // 11. jika gagal salah satunya, tampilkan status
}

MENERUSKAN INFORMASI DARI TRANSAKSI
---------------------------------------
Jangan ubah status aplikasi di dalam fungsi transaksi Anda. Jika hal ini dilakukan, akan muncul masalah serentak. 
Hal ini terjadi karena fungsi transaksi dapat dijalankan beberapa kali, dan tidak dijamin dapat dijalankan di UI thread. 
Sebagai gantinya, teruskan informasi yang Anda butuhkan dari fungsi transaksi. 
Contoh berikut melanjutkan contoh sebelumnya untuk menunjukkan cara meneruskan informasi dari transaksi:

import { doc, runTransaction } from "firebase/firestore";               //  
const sfDocRef = doc(db, "cities", "SF");                               // 

try {
  const newPopulation = await runTransaction(db, async (transaction) => {   
    const sfDoc = await transaction.get(sfDocRef);                      // 1. transaksi pertama bacadata get()
    if (!sfDoc.exists()) {                                              
      throw "Document does not exist!";                                 
    }

    const newPop = sfDoc.data().population + 1;                         // 2. transaksi kedua tambah data
    if (newPop <= 1000000) {                                            // 3. disini misalnya di batasi 1juta
      transaction.update(sfDocRef, { population: newPop });             // 4. updatedata cek < 1jt, lanjut update
      return newPop;                                                    
    } else {
      return Promise.reject("Sorry! Population is too big");            // 5. jika > 1jt stop update. kita buatkan promise.reject disini
    }
  });

  console.log("Population increased to ", newPopulation);               
} catch (e) {
  // This will be a "population is too big" error.
  console.error(e);                                                     // 6. jika terjadi kegagalan di try (> 1jt), promise.reject kita bisa tangkap di catch(error)
}
                                                                        // 7. CATATAN kalau cara di atas kan tidak ada errornya apa. gak ada promise
kegagalan transaksi diatas ini
- Transaksi bisa gagal karena alasan berikut:
    - Dalam transaksi tersebut, ada operasi baca yang berlangsung setelah operasi tulis. (di console.log(newPopulation)) 
        Seharusnya, operasi baca dilakukan sebelum operasi tulis.
    - Transaksi membaca dokumen yang telah diubah di luar transaksi. Dalam hal ini, transaksi akan berjalan kembali secara otomatis. 
        Transaksi tersebut dicoba kembali beberapa kali.
    - Transaksi melebihi ukuran permintaan maksimum 10 MiB.
- Ukuran transaksi bergantung pada ukuran dokumen dan entri indeks yang dimodifikasi oleh transaksi. 
    Untuk operasi penghapusan, ini termasuk ukuran dokumen target dan ukuran entri indeks yang dihapus sebagai tanggapan terhadap operasi.
- Transaksi yang gagal akan menampilkan error dan tidak menulis apa pun ke database. 
    Anda tidak perlu me-roll back transaksi, karena Cloud Firestore akan melakukannya secara otomatis.

BATCH
---------------------------------------
Jika tidak perlu "membaca" dokumen apa pun dalam kumpulan operasi, 
Anda dapat menjalankan beberapa operasi tulis sebagai satu batch 
yang berisi kombinasi operasi set(), update(), atau delete(). 
Batch operasi tulis akan selesai secara atomik dan dapat menulis ke beberapa dokumen. 
Contoh berikut menunjukkan cara mem-build dan meng-commit batch operasi tulis:

import { writeBatch, doc } from "firebase/firestore";       // 0. import batch
const batch = writeBatch(db);                               // 1. Get a new write batch() (init batch)
const nycRef = doc(db, "cities", "NYC");                    //  - ref
batch.set(nycRef, {name: "New York City"});                 // 2. Set() the value of 'NYC' (tambah data field nama:kota)
const sfRef = doc(db, "cities", "SF");                      //  - ref
batch.update(sfRef, {"population": 1000000});               // 3. Update() the population of 'SF' (tambah data update field population:1jt)
const laRef = doc(db, "cities", "LA");                      //  - ref
batch.delete(laRef);                                        // 4. Delete() the city 'LA'  (hapus data dokument LA)
await batch.commit();                                       // 5. Commit() the batch

- Satu batch operasi tulis dapat berisi hingga 500 operasi. 
- Setiap operasi dalam batch dihitung secara terpisah (harga)
- Seperti halnya transaksi, batch bersifat atomik. 
- Berbeda dengan transaksi, batch tidak perlu memastikan bahwa dokumen yang dibaca tidak dimodifikasi sehingga dapat mengurangi kegagalan. 
- Batch operasi tulis tidak akan dicoba ulang atau mengalami kegagalan karena terlalu banyak percobaan ulang. 
- Batch operasi tulis tetap dijalankan meski perangkat pengguna sedang offline.

Catatan: 
    Untuk entri data massal, gunakan library klien server dengan penulisan individual yang diparalelkan. 
    Batch operasi tulis berperforma lebih baik daripada operasi tulis serial, 
    tetapi tidak lebih baik daripada operasi tulis paralel. 
    Untuk operasi data secara massal, Anda harus menggunakan library klien server, bukan SDK seluler/web.

VALIDASI DATA UNTUK OPERASI ATOMIK
---------------------------------------
- dari sini kebawah belum bisa di fahami ?????
- Untuk library klien seluler/web, Anda dapat melakukan validasi data menggunakan Aturan Keamanan Cloud Firestore. 
- Anda dapat memastikan bahwa dokumen yang terkait selalu diperbarui secara atomik dan selalu menjadi bagian dari sebuah transaksi atau batch. 
- Gunakan fungsi aturan keamanan getAfter() untuk mengakses dan memvalidasi status dokumen setelah serangkaian operasi selesai, 
    tetapi sebelum Cloud Firestore meng-commit operasi.
- Misalnya, anggaplah database untuk contoh cities juga berisi koleksi countries. 
- Setiap dokumen country menggunakan kolom last_updated untuk melacak kapan terakhir kali kota yang terkait dengan negara itu diperbarui. 
    Aturan keamanan berikut mensyaratkan bahwa perubahan pada dokumen city harus juga mengubah kolom last_updated negara terkait secara atomik:

service cloud.firestore {
  match /databases/{database}/documents {
    // If you update a city doc, you must also
    // update the related country's last_updated field.
    match /cities/{city} {
      allow write: if request.auth != null &&
        getAfter(
          /databases/$(database)/documents/countries/$(request.resource.data.country)
        ).data.last_updated == request.time;
    }

    match /countries/{country} {
      allow write: if request.auth != null;
    }
  }
}
-----
Batas aturan keamanan
Dalam aturan keamanan untuk transaksi atau batch, 
ada batas 20 panggilan akses dokumen untuk keseluruhan operasi atomik, 
selain batas normal 10 panggilan untuk setiap operasi dokumen tunggal dalam batch.
Misalnya, pelajari aturan berikut untuk aplikasi chat:

service cloud.firestore {
  match /databases/{db}/documents {
    function prefix() {
      return /databases/{db}/documents;
    }
    match /chatroom/{roomId} {
      allow read, write: if request.auth != null && roomId in get(/$(prefix())/users/$(request.auth.uid)).data.chats
                            || exists(/$(prefix())/admins/$(request.auth.uid));
    }
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId
                            || exists(/$(prefix())/admins/$(request.auth.uid));
    }
    match /admins/{userId} {
      allow read, write: if request.auth != null && exists(/$(prefix())/admins/$(request.auth.uid));
    }
  }
}
-----
Cuplikan di bawah ini mengilustrasikan jumlah panggilan akses dokumen yang digunakan untuk beberapa pola akses data:

// 0 document access calls used, because the rules evaluation short-circuits
// before the exists() call is invoked.
db.collection('user').doc('myuid').get(...);

// 1 document access call used. The maximum total allowed for this call
// is 10, because it is a single document request.
db.collection('chatroom').doc('mygroup').get(...);

// Initializing a write batch...
var batch = db.batch();

// 2 document access calls used, 10 allowed.
var group1Ref = db.collection("chatroom").doc("group1");
batch.set(group1Ref, {msg: "Hello, from Admin!"});

// 1 document access call used, 10 allowed.
var newUserRef = db.collection("users").doc("newuser");
batch.update(newUserRef, {"lastSignedIn": new Date()});

// 1 document access call used, 10 allowed.
var removedAdminRef = db.collection("admin").doc("otheruser");
batch.delete(removedAdminRef);

// The batch used a total of 2 + 1 + 1 = 4 document access calls, out of a total
// 20 allowed.
batch.commit();

- informasi lebih lanjut tentang cara menyelesaikan masalah latensi yang disebabkan oleh operasi tulis yang besar dan operasi tulis dalam batch, 
- error akibat pertentangan dari transaksi yang tumpang-tindih, dan masalah lainnya, pertimbangkan untuk melihat halaman "pemecahan masalah".
