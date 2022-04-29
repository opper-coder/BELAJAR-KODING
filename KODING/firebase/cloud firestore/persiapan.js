/* --- PERSIAPAN --- */
// CLOUD FIRESTORE

------------------------>
// MEMILIH DATABASE 
- realtime database
  - cocok untuk chat dan notifikasi progress
  - latency rendah > cocok syncronisasi realtime > lebih mahal 
  - untuk data kecil, query sederhana, realtime, notifikasi kehadiran online-offline
  - makin banyak data makin lambat
- cloud firestore
  - cocok untuk data besar dan scalable
  - terbaru > lebih lengkap > queri lebih baik > seach lebih cepat > lebih murah > scalable lebih cepat
  - untuk data besar, query compleks, tidak relatime
  - makin banyak data di temukan makin lambat
- semua data base sebenarnya memiliki perbedaan yang tipis saja sehingga di sarankan
  memilih cloud firestore karena fitur lebih baru daan lebih lengkap, serta integrasi dengan GCP lebih mudah
  - semua bisa efisien dengan membaca sekali (tidak realtime)
  - 

------------------------>
// CREATE DB 
- di console > login > pilih atau buat project > pilih tab cloud firestore > create  started > scurity role mode pengujian
  (bisa setting waktu 30 hr ke depan dan bisa di edit) > pilih lokasi asia southeast2 > 

------------------------>
// KOLEKSI DOKUMENT FIELD
- koleksi mirip tabel > dia hanya berisi dokument Key:Value > tidak boleh koleksi lagi > 
  > koleksi baru boleh di buat dalam dokumen > koleksi dan dokumen tidak perlu di buat secara explisit
  karena otomotis di buat saat documen di buat dan otomatis (secara implisit) di hapus saat semua data tidak ada
- dokument mirip row > karena row maka harus uniq (memiliki ID)
- kolom (key) mirip field 
-----
- kolom dalam dokument tidak ada aturan harus sama > tapi sama di anjurkan karena memudahkan penyusunan query
- referensi > seperti akses folder aja sesuai koleksi/id/subKoleksi/id
</>
    doc(db, 'users/id/nama' );
    doc(db, "users", "id", "nama" );
    collection(db, 'users');

    
------------------------>
// SDK CLOUD FIREBASE WEB 
</>
- npm install firebase@9.6.10 --save
setelah terinstal baru import di halaman index:

  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getFirestore } from "firebase/firestore/lite"; // atau pakai ini untuk CRUD dasar saja

  import { initializeApp } from "firebase/app";
  import { getFirestore} } from "firebase/firestore";

  const firebaseConfig = {
      // ...
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

copas aja dari dokumentasi di index.html

------------------------>
// SDK KLIEN
ada sdk yang lebih advance yaitu sdk klien 
meskipun firebase dapat di akses langsung via HTTP atau GRPC namun jika
ingin ada hak istimewa dan fitur tambahan maka gunakan sdk client

------------------------>
plus minus struktur data
- semua struktur data di bungkus pada dokumen > plus ... minus ...
- satu layanan dalam koleksi 
- tiap layanan dalam root
- +/- baca penjelasan di dokumentasi

