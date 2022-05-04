INDEX
=======================================================================================
---------------------------------------------------------------------------------------
RINGKASAN
- 
- 
=======================================================================================
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
- di index tersebut mengharuskan konfigurrasi 'mode index' dan 'cakupan query'
---------------------------------------------------------------------------------------
INDEX OTOMATIS
- default index untuk kolom disimpan dalam dokumen, sub kolom dalam map
- setelan default pada 'index otomatis' membuat index 'kolom tunggal':
  
---------------------------------------------------------------------------------------
IGNORE INDEX
- penghecualian akan berlaku secara inheritance (terwaris) terhadap child nya
- pengecualian hanya berlaku pada index otomatis

---------------------------------------------------------------------------------------
INDEX KOLOM TUNGGAL
- kolom tunggal > di simpan di koleksi > ada dua: asc dsc
- kolom map > di cakupan koleksi > asc dsc
- array > array contains >
- ????????? belum jelas

---------------------------------------------------------------------------------------
INDEX KOMPOSIT
- index komposit tidak di buat secara otomatis mengingat banyaknya kemungkinan kombinasi query
  sehingga mengharuskan manual
  
---------------------------------------------------------------------------------------  
MODE INDEX
- asc (menaik)
  - mendukung operasi (clausa) persamaan pada kolom secara menaik : <,>,<=,>=,==,!=,not-in 
  - operasi ini menghasilkan daftar menaik
- dsc (menurun)
  - sda [menurun]
- array-contain
  - array-contains dan array-contains-any

---------------------------------------------------------------------------------------  
CAKUPAN QUERY
- cakupan query ada 2 model
1. cakupan koleksi
2. cakupan grup koleksi

- cakupan koleksi meliputi
  Cloud Firestore membuat indeks dengan cakupan koleksi secara default. 
  Indeks ini mendukung kueri yang menampilkan hasil dari satu koleksi.
- cakupan grup koleksi meliputi
  - semua koleksi dalam satu "id koleksi" yang di dalamnya banyak sub sub koleksi
  - untuk menjalankanya kita harus bikin index yg sesuai pada cakupan koleksi koleksi tersebut

---------------------------------------------------------------------------------------
CONTOH IMPLEMENTASI
query kolom tunggal
- kita bikin dokumen dulu > contoh1
- query sederhana > contoh2 
- query in dan query perbandingan > contoh3
- query array  > contoh4
query gabungan



















  
  
  
  
  
  
  
  
  
  
  
  
  
