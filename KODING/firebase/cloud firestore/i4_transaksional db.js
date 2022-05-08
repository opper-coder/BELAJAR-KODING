TRANSAKSIONAL
===========================================================================================================
RINGKASAN
===========================================================================================================

-----------------------------------------------------------------------------------------------------------
OPERASI TRANSAKSIONAL
- pada firestore mensukung 'operasi transaksional' atau di sebut 'operasi atomik'
- adalah sebuah 'rangkaian' operasi baca tulis (pada beberapa dokumen)
  yang harus sukses semua maka 'commit'
  atau salah satu gagal maka 'gagal kan semua'
- jadi jika ada yg gagal tidak perlu rollback ke masing 'rangkaian'
- rangkaian di batasi maksimal 500 dokumen
- di firestore ada 2 jenis
  1. transaksi
  2. batch operasi tulis

---------------------------------
MEMPERBARUI DATA DENGAN TRANSAKSI
- atomik dapat di gunakan operasi get() lalu diikuti set() update() delete()
- atomik akan di commit saat semua operasi sudah terkini, jadi saat penulisan 
  tengah dilakukan lalu salah satu dokumen di update oleh seseorang (pihak lain)
  maka atomik akan di ulang dari awal lagi, tujuanya agar memastikan data yang di ubah 
  harus yang terkini dan konsisten
- Syarat :
  - operasi baca dulu baru boleh tulis, update, delete
  - Fungsi transaksi seharusnya tidak langsung mengubah status aplikasi.
  - fungsi yang callback atomik bisa di hit berkali2 saat proses baca atomik terganggu
  - atomik melebihi 10 mb
  - atomik gagal jika di lakukan saat offline
- Contoh atomik
      import { runTransaction } from "firebase/firestore";
      try {
        await runTransaction(db, async (transaction) => {
          const sfDoc = await transaction.get(sfDocRef);
          if (!sfDoc.exists()) {
            throw "Document does not exist!";
          }
          const newPopulation = sfDoc.data().population + 1;
          transaction.update(sfDocRef, { population: newPopulation });
        });
        console.log("Transaction successfully committed!");
      } catch (e) {
        console.log("Transaction failed: ", e);
      }

-----------------------------------------------------------------------------------------------------------
MENERUSKAN INFORMASI DARI TRANSAKSI
- Jangan ubah status aplikasi di dalam fungsi transaksi Anda. 
  Jika hal tersebut dilakukan, akan muncul masalah serentak. 
  Hal ini terjadi karena fungsi transaksi dapat dijalankan beberapa kali, 
  dan tidak dijamin dapat dijalankan di UI thread. Sebagai gantinya, 
  teruskan informasi yang Anda butuhkan dari fungsi transaksi. 
  Contoh berikut melanjutkan contoh sebelumnya untuk 
  menunjukkan cara meneruskan informasi dari transaksi:

    import { doc, runTransaction } from "firebase/firestore";
    // Create a reference to the SF doc.
    const sfDocRef = doc(db, "cities", "SF");
    try {
      const newPopulation = await runTransaction(db, async (transaction) => {
        const sfDoc = await transaction.get(sfDocRef);
        if (!sfDoc.exists()) {
          throw "Document does not exist!";
        }
        const newPop = sfDoc.data().population + 1;
        if (newPop <= 1000000) {
          transaction.update(sfDocRef, { population: newPop });
          return newPop;
        } else {
          return Promise.reject("Sorry! Population is too big");
        }
      });
      console.log("Population increased to ", newPopulation);
    } catch (e) {
      // This will be a "population is too big" error.
      console.error(e);
    }

-----------------------------------------------------------------------------------------------------------  
BATCH OPERASI TULIS 
Jika tidak perlu membaca dokumen apa pun dalam kumpulan operasi, 
Anda dapat menjalankan beberapa operasi tulis sebagai satu 
batch yang berisi kombinasi operasi set(), update(), atau delete(). 
Batch operasi tulis akan selesai secara atomik dan dapat 
menulis ke beberapa dokumen. Contoh berikut menunjukkan 
cara mem-build dan meng-commit batch operasi tulis:

    import { writeBatch, doc } from "firebase/firestore";
    // Get a new write batch
    const batch = writeBatch(db);
    // Set the value of 'NYC'
    const nycRef = doc(db, "cities", "NYC");
    batch.set(nycRef, {name: "New York City"});
    // Update the population of 'SF'
    const sfRef = doc(db, "cities", "SF");
    batch.update(sfRef, {"population": 1000000});
    // Delete the city 'LA'
    const laRef = doc(db, "cities", "LA");
    batch.delete(laRef);
    // Commit the batch
    await batch.commit();  

Satu batch operasi tulis dapat berisi hingga 500 operasi. 
Setiap operasi dalam batch dihitung secara terpisah terhadap penggunaan Cloud Firestore Anda.
Seperti halnya transaksi, batch operasi tulis bersifat atomik. 
Berbeda dengan transaksi, batch operasi tulis tidak perlu memastikan 
bahwa dokumen yang dibaca tidak dimodifikasi sehingga dapat mengurangi kegagalan. 
Batch operasi tulis tidak akan dicoba ulang atau mengalami kegagalan 
karena terlalu banyak percobaan ulang. Batch operasi tulis tetap dijalankan 
meskipun perangkat pengguna sedang offline.

-----------------------------------------------------------------------------------------------------------
VALIDASI DATA UNTUK OPERASI ATOMIK  
Untuk library klien seluler/web, Anda dapat melakukan validasi data menggunakan Aturan Keamanan Cloud Firestore. Anda dapat memastikan bahwa dokumen yang terkait selalu diperbarui secara atomik dan selalu menjadi bagian dari sebuah transaksi atau batch operasi tulis. Gunakan fungsi aturan keamanan getAfter() untuk mengakses dan memvalidasi status dokumen setelah serangkaian operasi selesai, tetapi sebelum Cloud Firestore meng-commit operasi.

Misalnya, anggaplah database untuk contoh cities juga berisi koleksi countries. Setiap dokumen country menggunakan kolom last_updated untuk melacak kapan terakhir kali kota yang terkait dengan negara itu diperbarui. Aturan keamanan berikut mensyaratkan bahwa perubahan pada dokumen city harus juga mengubah kolom last_updated negara terkait secara atomik:

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
  
-----------------------------------------------------------------------------------------------------------  
BATAS ATURAN KEAMANAN
Dalam aturan keamanan untuk transaksi atau batch operasi tulis, ada batas 20 panggilan akses dokumen untuk keseluruhan operasi atomik, selain batas normal 10 panggilan untuk setiap operasi dokumen tunggal dalam batch.

Misalnya, pelajari aturan berikut untuk aplikasi chat:

    service cloud.firestore {
      match /databases/{db}/documents {
        function prefix() {
          return /databases/{db}/documents;
        }
        match /chatroom/{roomId} {
          allow read, write: if request.auth != null && roomId in get(/$(prefix())/users/$(request.auth.uid))
            .data.chats || exists(/$(prefix())/admins/$(request.auth.uid));
        }
        match /users/{userId} {
          allow read, write: if request
            .auth != null && request.auth.uid == userId || exists(/$(prefix())/admins/$(request.auth.uid));
        }
        match /admins/{userId} {
          allow read, write: if request.auth != null && exists(/$(prefix())/admins/$(request.auth.uid));
        }
      }
    }

- Cuplikan di bawah ini mengilustrasikan jumlah panggilan akses 
  dokumen yang digunakan untuk beberapa pola akses data:

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

-----------------------------------------------------------------------------------------------------------
