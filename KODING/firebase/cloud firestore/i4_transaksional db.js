TRANSAKSIONAL
===========================================================================================================
RINGKASAN

===========================================================================================================

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
- syarat :
  - operasi baca dulu baru boleh tulis, update, delete
  - Fungsi transaksi seharusnya tidak langsung mengubah status aplikasi.
  - fungsi yang callback atomik bisa di hit berkali2 saat proses baca atomik terganggu
  - atomik gagal jika di lakukan saat offline
- contoh atomik
  
  
  
  
  
-----------------------------------------------------------------------------------------------------------

    
    
    
    
    
    
    
    
    
    
