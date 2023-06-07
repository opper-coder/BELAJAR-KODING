BACA DATA REALTIME (realtime basic)
---------------------------------------
onSnapshot() itu ada mekasnisme realtime di dalamnya
dengan metode onSnapshot(). callback memberikan snapshot isi dokumen tunggal saat ini. (dokumen jamak dalam collection nanti)
Kemudian, setiap berubah, panggilan lain akan memperbarui snapshot.

import { doc, onSnapshot } from "firebase/firestore";           // import
const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {    // panggil onSnapshot(()=> hasil) ini sudah realtime (basic)
    console.log("Current data: ", doc.data());
});

PERISTIWA UNTUK PERUBAHAN LOKAL (cache)
---------------------------------------
- cache di buat agar cepat, update data yang berubah saja, murah, hemat batery, CPU, MEM, dan tetap realtime
- jika anda memerlukan cache maka lihat proses berikut:
    - saat anda meminta data di firestore: pertama kali yang merespon adalah "pemroses data", 
    - pemroses ini yang menulis dan membaca data di mem cache, jadi tidak langsung mengambil data dari db kalau pake cache
    - saat menyediakan data untuk di tampilkan, pemroses ngambil dulu dari cache jika ada, lalu di tampilkan sbg kondisi awal, 
    - lalu pemroses ini melakukan sync ke db dan melakukan ceking ada data baru atau tidak jika ada ambil, jika tidak biarkan.
    - nah saat data di tampilkan, kita bisa tahu status data itu bersumber dari cache atau sudah sync db. 
        menggunakan properti metadata.hasPendingWrites. (bernilai true, false)
        true artinya: ada perubahan dan menunggu sync, false artinya: data cache == db dan tidak menunggu perubahan
        
import { doc, onSnapshot } from "firebase/firestore"; 
const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {            // on snapshot() di panggil maka di dalamnya ada proses: tampilkan data dari cache, untuk di konsumsi local 
  const source = doc.metadata.hasPendingWrites ? "Local" : "Server";    // saat di "tulis"(dapatkan data) di cache local data akan di periksa oleh sebuah "pemroses" ini dari local atau sudah synchrone db, sambil membandingkan data ke db
  console.log(source, " data: ", doc.data());                           // status data bisa dimpilkan disini, lalu data di tampilkan
});                       

// atau penjelasan ini (code sda):
import { doc, onSnapshot } from "firebase/firestore"; 
const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {            // 1. panggil onSnapshoot() (realtime)
  const source = doc.metadata.hasPendingWrites ? "Local" : "Server";    // 3. jika perlu metadata:chain doc.metadata, cek disini, sementara di background melakukan sync data 
  console.log(source, " data: ", doc.data());                           // 2. data di tampilkan sambil di bandingkan dg db 4. metadata di tampilkan status realtime, membaca status sync bacground. true, false
});                                                 

PERISTIWA UNTUK PERUBAHAN METADATA (status cache dan db)
---------------------------------------
Saat memproses perubahan pada sebuah dokumen, koleksi, atau kueri, 
Anda dapat meneruskan opsi untuk mengontrol tingkat perincian peristiwa yang akan diterima pemroses.
Secara default, pemroses tidak akan diberi tahu mengenai perubahan yang hanya memengaruhi metadata. 
Pertimbangkan apa yang terjadi saat aplikasi Anda menulis sebuah dokumen baru:
Peristiwa perubahan segera dipicu dengan data baru. 
Dokumen belum ditulis ke backend sehingga flag "pending writes" bernilai true.
Dokumen ditulis ke backend. Backend memberi tahu klien bahwa penulisan berhasil. 
Tidak ada perubahan pada data dokumen, tetapi ada perubahan metadata karena flag "pending writes" sekarang memiliki nilai false.
Jika Anda ingin menerima peristiwa snapshot saat metadata kueri atau dokumen berubah, teruskan objek opsi pemrosesan saat menambahkan pemroses:
- saat anda melakukan perubahan CRUD dokumen atau koleksi, anda dapat meneruskan(callback) terhadap rincian perubahan metadata,
- dafaultnya pemroses tidak di beritahu tentang metadata, tapi jika anda menginginkan hal2 berikut
    - saat ada data baru, tulis data ke backend ketika status hasPendingWrites:true (saat menunggu sync), saat tidak sync data tidak usah ditulis, efisient
    - status data di tulis ke backend
    - saat backend memberi response data berhasil ditulis, maka ada perubahan pada properti hasPendingWrites:false

import { doc, onSnapshot } from "firebase/firestore";

const unsub = onSnapshot(                   // 1. snapshot() di panggil
  doc(db, "cities", "SF"),                  // 2. param1: ref
  { includeMetadataChanges: true },         // 3. param2: enable status hasPending Writes disini
  (doc) => {                                // 4. param3: callback ke tampoilkan data
    // ...
  });

- tapi jika anda hanya mengingin kan status kapan data selesai ditulis dr backend, maka tidak perlu pakai hasPendingWrites
melainkan pakai Promise.then() saja cukup


Catatan: Jika hanya ingin mengetahui kapan penulisan selesai, 
Anda dapat memproses callback penyelesaian, tanpa harus menggunakan hasPendingWrites. 
Pada JavaScript, gunakan Promise yang ditampilkan dari operasi tulis Anda dengan menambahkan callback .then(). 
Pada Swift, teruskan callback penyelesaian ke fungsi penulisan Anda.

MEMPROSES BEBERAPA DOKUMEN DALAM KOLEKSI (query menggunakan where)
---------------------------------------
kueri (where) menggunakan onSnapshot() mirip get() juga sih
onSnapshot() itu ada mekasnisme realtime di dalamnya

import { collection, query, where, onSnapshot } from "firebase/firestore";

const q = query(collection(db, "cities"), where("state", "==", "CA"));      // query pakai "where"
const unsubscribe = onSnapshot(q, (querySnapshot) => {                      // pergunakan pada onSnapshot()
  const cities = [];                                                        // init data
  querySnapshot.forEach((doc) => { 
      cities.push(doc.data().name);                                         // looping push data
  });
  console.log("Current cities in CA: ", cities.join(", "));
});

MELIHAT PERUBAHAN ANTAR-SNAPSHOT(realtime untuk yg berubah saja)(ini yang banyak dipakai baca data realtime kayaknya)
---------------------------------------
untuk mendapatkan realtime, query data yg berubah saja, lebih baik dari pada merefresh semua data 
data "kondisi awal" bisa dari cache atau db mana yg tersedia, kemudian di refresh saat ada perubahan terbaru (realtime).
maka lakukan pengecekan

import { collection, query, where, onSnapshot } from "firebase/firestore";

const q = query(collection(db, "cities"), where("state", "==", "CA"));      // bikin query where
const unsubscribe = onSnapshot(q, (snapshot) => {                           // gunakan query untuk baca realtime onSnapShot()
  snapshot.docChanges().forEach((change) => {                               // looping data
    if (change.type === "added") {                                          // cek perubahan penambahan 
        console.log("New city: ", change.doc.data());                       // jika ada penambahan tampilkan data tambahanya seluruh data yg di minta (sebagai kondisi awal)
    }
    if (change.type === "modified") {                                       // cek perubahan edit
        console.log("Modified city: ", change.doc.data());                  // jika edit tampilkan editnya saja
    }
    if (change.type === "removed") {                                        // cek perubahan hapus
        console.log("Removed city: ", change.doc.data());                   // jika ada hapus tampilkan data yang tersisa masih ada
    }
  });
});

MELEPASKAN PEMROSES (pelepasan basic)
---------------------------------------
Jika sudah tidak perlu memproses data, Anda harus melepaskan pemroses agar callback peristiwa berhenti dipanggil. 
Dengan demikian, klien dapat berhenti menggunakan bandwidth untuk menerima pembaruan. 
bikin habis bandwidth, CPU, MEM 

import { collection, onSnapshot } from "firebase/firestore";

const unsubscribe = onSnapshot(collection(db, "cities"), () => {            // untuk keluar bikin on snapshot() kosong
  // Respond to data
  // ...
});

// kemudian ...

// Stop listening to changes
unsubscribe();                                                              // jalankan onSnapShot() kosong tersebut


MENANGANI ERROR PEMROSESAN (pelepasan yang ini kayaknya lebih kepake)
---------------------------------------
Pemrosesan "pelepasan" terkadang dapat mengalami kegagalan, misalnya karena izin keamanan, atau jika Anda mencoba memproses kueri yang tidak valid. 
(Pelajari kueri yang valid dan tidak valid lebih lanjut.) Untuk menangani kegagalan ini, 
Anda dapat memberikan callback error saat memasang pemroses snapshot. 
Setelah error muncul, pemroses tidak akan menerima peristiwa lagi, dan Anda tidak perlu melepaskan pemroses.

import { collection, onSnapshot } from "firebase/firestore";

const unsubscribe = onSnapshot(                     // ada dua callback 1. snapshoot kosong 2. jika pelepasan error 
  collection(db, "cities"),
  (snapshot) => {
    // ...
  },
  (error) => {
    // ...
  });
