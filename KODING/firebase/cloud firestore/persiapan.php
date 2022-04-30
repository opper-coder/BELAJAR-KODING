CLOUD FIRESTORE
ALUR IMPLEMENTASI
- integrasi SDK
- lindungi data
- isi data
- ambil data

------------------------------------------------------------------------------------------------
MEMILIH DATABASE 
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

------------------------------------------------------------------------------------------------
CREATE DB 
- di console > login > pilih atau buat project > pilih tab cloud firestore > create  started > scurity role mode pengujian
  (bisa setting waktu 30 hr ke depan dan bisa di edit) > pilih lokasi asia southeast2 > 

------------------------------------------------------------------------------------------------
KOLEKSI DOKUMENT FIELD
- selang seling > koleksi/dokumen/subkoleksi/subddokumen/sampai seratus anak
- koleksi mirip tabel > dia hanya berisi dokument Key:Value > tidak boleh koleksi lagi > 
  > koleksi baru boleh di buat dalam dokumen > koleksi dan dokumen tidak perlu di buat secara explisit
  karena otomotis di buat saat documen di buat dan otomatis (secara implisit) di hapus saat semua data tidak ada
- dokument mirip row > karena row maka harus uniq (memiliki ID)
- kolom (key) mirip field
- nama dokumen(id) harus uniq > boleh manual boleh outo id  > tapi kalau auto tidak ada pengurutan > solusi pengurutan
  - berikan kolom timestamp - 
- kolom dalam dokument tidak ada aturan harus sama > tapi sama di anjurkan karena memudahkan penyusunan query
- referensi > seperti akses folder aja sesuai koleksi/id/subKoleksi/id

------------------------------------------------------------------------------------------------
MENYUSUN DATABASE
plus minus struktur data
- semua struktur data di bungkus pada dokumen > plus ... minus ...
- satu layanan dalam koleksi 
- tiap layanan dalam root
- +/- baca penjelasan di dokumentasi
------------------------------------------------------------------------------------------------
REFERENSI
referensi adalah hal yang merujuk ke lokasi data "berakhir" di id dokumen/koleksi. jd bukan kolom
- reff ke dokument doc()
- reff ke koleksi collection()
- dua hal yang berbeda reff ke dokumen untuk operasi dokumen, reff koleksi untuk operasi koleksi
</>

    doc(db, 'users/id' );          // referensi ke dokument
    doc(db, "users", "id" );       // boleh pakai slash atau koma satu atau koma dua
    collection(db, 'users');       // ref ke koleksi

- dokumen harus bersifat ringan jika banyak dan besar pertimbangkan pecah dlm koleksi untuk jangan terlalu banyak
- koleksi di buat untuk tidak dihapus. bisa di hapus tapi tidak gampang ada perlakuan khusus

------------------------------------------------------------------------------------------------
JENIS DATA
- ada beberapa ketentuan tentang efektifitas dan prioritas dalam query dan pengurutan
- jenis data akan di prioritas kan dalam pengurutan seperti "kukabataku" atau "basson"
- lihat saja dokumentasi

------------------------------------------------------------------------------------------------
SDK CLOUD FIREBASE WEB (CLIENT)
</>
  :> npm install firebase@9.6.10 --save

setelah terinstal baru import di halaman client: index.html:

  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getFirestore } from "firebase/firestore/lite"; // atau pakai lite untuk CRUD dasar saja
  --
  import { initializeApp } from "firebase/app";
  import { getFirestore} } from "firebase/firestore";
  --
  const firebaseConfig = {
      // ...
  };
  --
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  --
copas aja dari dokumentasi di index.html

------------------------------------------------------------------------------------------------
SDK KLIEN (LIBRARY CLIENT)
ada sdk yang lebih advance yaitu sdk klien 
meskipun firebase dapat di akses langsung via HTTP atau GRPC namun jika
ingin ada hak istimewa dan fitur tambahan maka gunakan sdk client

------------------------------------------------------------------------------------------------


