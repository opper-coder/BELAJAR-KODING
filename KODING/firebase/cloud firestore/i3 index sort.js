---------------------------------------------------------------------------------------
INDEX 
- Indeks merupakan faktor penting dalam performa database.
- index adalah daftar isi, untuk dengan cepat menemukan lokasi item yang diminta.
- query tanpa index akan lambat jika data besar
- kecepatan di tentukan hasil temuan bukan besarnya data
- index dapat di buat secara manual atau otomatis
- index di simpan dalam koleksi dan memiliki biaya tersendiri dalam db firebase
- bentuk penyimpanan adalah: path dan salah satu value kolom
- bikin konfigurasi kolom dan pengecualian 
- index ada 2 : 1. kolom tunggal 2. kolom komposit
- du index tersebut mengharuskan konfigurrasi 'mode index' dan 'cakupan query'
---------------------------------------------------------------------------------------
INDEX OTOMATIS
- default index untuk kolom disimpan dalam dokumen, sub kolom dalam map
- setelan default index otomatis membuat index kolom tunggal:
  
---------------------------------------------------------------------------------------
IGNORE INDEX
- penghecualian akan berlaku secara inheritance (terwaris)
- pengecualian hanya berlaku pada index otomatis

---------------------------------------------------------------------------------------
INDEX KOLOM TUNGGAL
- kolom tunggal > di simpan di koleksi > ada dua: asc dsc
- kolom map > di cakupan koleksi > asc dsc
- array > array contains > 
- ????????? belim jelas

---------------------------------------------------------------------------------------
INDEX KOMPOSIT
- index komposit tidak di buat secara otomatis mengingat banyaknya kemungkinan kombinasi query
  
---------------------------------------------------------------------------------------  
MODE INDEX
- asc (menaik)
  - mendukung operasi (clausa) persamaan pada kolom secara menaik : <,>,<=,>=,==,!=,not-in 
- dsc (menurun)
  - sda [menurun]
- array-contain
  - array-contains dan array-contains-any

---------------------------------------------------------------------------------------  
CAKUPAN QUERY
- 


























