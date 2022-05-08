==========================================================================================================
==========================================================================================================

----------------------------------------------------------------------------------------------------------
MENGHAPUS DOKUMEN
- menghapus dokumen harus di hapus dari console
- jika menggunakan client maka penghapusan hanya bersifat notasi saja
  - penghapusan clien, di console akan tetap terlihat meskipun tidak bisa lagi di query
----------------------------------------------------------------------------------------------------------
MENGHAPUS KOLOM
- Untuk menghapus kolom tertentu dari dokumen, gunakan metode FieldValue.delete() 
  saat Anda memperbarui dokumen:
  
  import { doc, updateDoc, deleteField } from "firebase/firestore";
  const cityRef = doc(db, 'cities', 'BJ');
  // Remove the 'capital' field from the document
  await updateDoc(cityRef, {
      capital: deleteField()
  });

----------------------------------------------------------------------------------------------------------
MENGHAPUS KOLEKSI
  - hapus koleksi dari Web client tidak di rekomendasikan.
  - tapi jika diinginkan maka menghapus seluruh koleksi atau subkoleksi, 
    ambil semua dokumen dalam koleksi atau subkoleksi itu, lalu lakukan penghapusan. 
  - Jika koleksi berukuran besar, sebaiknya Anda menghapus dokumen dalam beberapa batch kecil 
    untuk menghindari error kehabisan memori. 
  - Ulangi sampai habis
  - cara penghapusan pakai delete() pada halaman CRUD
  - tapi sekali lagi jangan mendesain untuk menghapus dari client web 
    karena banyak isyu penanganan error performa dll
----------------------------------------------------------------------------------------------------------
MENGHAPUS DATA DENGAN FIREBASE CLI
  :> firebase firestore:delete [options] <<path>>
----------------------------------------------------------------------------------------------------------
MENGHAPUS DATA DENGAN CONSOLE
  - Menghapus dokumen dan koleksi dari console 
    akan menghapus semua data bertingkat dalam dokumen tersebut, 
    termasuk subkoleksi yang ada.
  - ini hanya untuk super admin saja. jadi jangan di buat pada dashboard client sekalipun
----------------------------------------------------------------------------------------------------------
