
MENGHAPUS DOKUMEN delete()
---------------------------------------
Peringatan: Menghapus suatu dokumen tidak otomatis menghapus subkoleksinya.
Jika ingin menghapus satu dokumen dan semua dokumen dalam subkoleksinya, Anda harus melakukannya secara manual.

import { doc, deleteDoc } from "firebase/firestore";    // import 
await deleteDoc(doc(db, "cities", "DC"));               // pakai await

MENGHAPUS FIELD FieldValue.delete()
---------------------------------------
Untuk menghapus kolom tertentu dari dokumen, gunakan metode FieldValue.delete()

import { doc, updateDoc, deleteField } from "firebase/firestore";   // import update dan delete jg doc
const cityRef = doc(db, 'cities', 'BJ');                            // bikin ref
await updateDoc(cityRef, {                                          // pakai update() untuk hapus field karena dokument masih ada
    capital: deleteField()                                          // field: deleteField() 
});

MENGHAPUS KOLEKSI
---------------------------------------
Untuk menghapus seluruh koleksi atau subkoleksi di Cloud Firestore, 
ambil semua dokumen dalam koleksi atau subkoleksi itu, lalu lakukan penghapusan. 
Jika koleksi berukuran besar, sebaiknya Anda menghapus dokumen dalam beberapa batch kecil untuk menghindari error kehabisan memori. 
Ulangi prosesnya sampai Anda berhasil menghapus seluruh koleksi atau subkoleksi.

Untuk menghapus koleksi, diperlukan koordinasi permintaan penghapusan individual dengan jumlah tidak terbatas. 
Jika Anda perlu menghapus seluruh koleksi, hanya lakukan penghapusan dari lingkungan server yang tepercaya. 
Meskipun penghapusan koleksi dapat dilakukan dari klien seluler/web, tindakan itu berdampak negatif pada keamanan dan performa.

Cuplikan di bawah ini telah disederhanakan dan tidak mencakup penanganan error, keamanan, penghapusan subkoleksi, atau pemaksimalan performa. 
Untuk mempelajari lebih lanjut satu pendekatan yang disarankan untuk menghapus koleksi dalam produksi, lihat Menghapus Koleksi dan Subkoleksi.
tapi dari sisi server misalnya nodejs. 
// Deleting collections from a Web client is not recommended.

MENGHAPUS DATA DENGAN FIREBASE CLI
---------------------------------------
Anda juga bisa menggunakan Firebase CLI untuk menghapus dokumen dan koleksi.
terminal CLI :> firebase firestore:delete [options] <<path>>        // path mungkin kayak doc() periksa ?????

MENGHAPUS DATA DENGAN KONSOL
---------------------------------------
Anda dapat menghapus dokumen dan koleksi dari halaman Cloud Firestore di konsol. 
Menghapus dokumen dari konsol akan menghapus semua data bertingkat dalam dokumen tersebut, termasuk subkoleksi yang ada.
informasi lebih lanjut tentang kode error dan cara menyelesaikan masalah latensi saat menghapus check out data, lihat halaman "pemecahan masalah".
