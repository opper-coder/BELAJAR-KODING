/* KONSEP PROJECT
-----------------------------------------------------------------------------------
CARA MENGGUNAKAN DOKUMENTASI INI
- dalam dokumentasi ini di buat per service firebase satu halaman
- cara baca per halaman pun hanya menunjukan cara pandang di dokumentasi aslinya
- di halaman ini hanya memberikan pengantar untuk tetap merefensikan pada dokumentasi aslinya
- di dokumentasi ini pengantar saja karena saya hanya menagmbil alur argumentasinya
  sehingga secara praktek sebenarnya bisa di lakukan sendiri dengan copas di sumbernya  
- banyak pada halaman ini belum tuntas karena menyelesaikan gagasan idenya
 */

/* HIERARKI PROJECT
-----------------------------------------------------------------------------------
- "Project Firebase" mirip seperti container untuk semua aplikasi Anda, 
  serta resource dan layanan apa pun yang disediakan untuk project tersebut.
- Project Firebase dapat memiliki satu atau beberapa Aplikasi Firebase yang terdaftar (web, android dll)
- semua app berbagi resource dalam project tersebut
- ada hubunganya dg GCP lihat di bawah
 */

/* FIREBASE VS GCP
-----------------------------------------------------------------------------------
	- GCP adalah container Firebase 
	- Project Firebase sebenarnya hanyalah project Google Cloud 
  	  yang memiliki konfigurasi dan layanan Khusus Firebase tambahan yang diaktifkan.
  	- secara resource service, harga, console, API, semua bisa saling terhubung
  	- saat project di buat(ID, nama) maka akan terbaca di keduanya, sama halnya saat di hapus
*/

/* MENYIAPKAN PROJECT DAN MENDAFTARKAN APLIKASI
-----------------------------------------------------------------------------------
ada 3 jalan:
- di firebase console / GCP console
- CLI
- di management REST API

sebelum menggunaknya buat skema lingkungan kerja: lokal atau online, 
- developer: local lebih baik, terisolasi, iterasi bebas, data mandiri, user dummy
- uji coba: instance uji coba, data dan bug yang sudah berkualitas, real person user dummy  
- stagging: instance A/B testing, data semirip mungkin, boleh di pangkas untuk hal tidak urgen
- produksi: yang sudah di publish

team dev: pemilik, editor, viewer, user defined 
*/

/* BERINTERAKSI DG PROJECT FIREBASE
-----------------------------------------------------------------------------------
- FIREBASE CONSOLE
	- tempat daftar project > nantinya di isi beberapa app > nantinya akses beberapa sumberdaya
	- sidebar : tempat sumberdaya: firestore, hosting, storage dll
	- setting : setting penagihan, integrasi, izin akses dll
	- tempat alur kerja, dasboard monitoring 
	- adakalanya saat mau meng akses resource kita di haruskan menggunakan GCP console. 
	  bukanya firebase console

- FIREBASE CLI
	- Firebase CLI untuk mengonfigurasi dan mengelola produk Firebase tertentu, seperti:
	  Hosting, Cloud Functions for Firebase, dan Firebase Extensions.
	- sebelum menggunakan instal dulu ada beberapa opsi OS dan nodejs dll. lihat doc.
	  [npm install -g firebase-tools]
	- Gunakan CLI untuk menautkan direktori aplikasi lokal ke project Firebase, 
	  lalu deploy versi baru konten yang dihosting di Firebase atau versi baru fungsi.

- FIREBASE MANAGEMENT REST API
	- management di remote via HTTP
	- Dengan Firebase Management REST API, Anda dapat mengelola project Firebase secara terprogram. 
	  Misalnya, Anda dapat mendaftarkan aplikasi secara terprogram ke project 
	  atau mencantumkan aplikasi yang sudah terdaftar (iOS+ | Android | web).
	- ini adalah keadaan yang lebih expert
 */

/* PROJECT ID
-----------------------------------------------------------------------------------
Project Firebase dapat diidentifikasi di backend Firebase dan 
di berbagai antarmuka developer menggunakan ID yang berbeda, 
termasuk nama project, nomor project, dan project ID.

Poin Penting: Nomor project dan project ID 
adalah ID yang benar-benar unik untuk suatu project di seluruh Firebase dan Google Cloud.

- nama project 	-> memudahkan membedakan project. tidak untuk di akses oleh app
- nomor project	-> uniq, ID utama, uneditable, untuk akses berbagai resource
- id project	-> uniq, editable, alias projectID. bisa di edit saat create, bersifat public
  tidak bise di edit saat sudah terlanjur di buat.
  projectID inilah yang sering bersentuhan dengan public biasanya namanya sama dengan nama project
 */

/* OBJECT CONFIG (DAFTAR APLIKASI)
-----------------------------------------------------------------------------------
- Saat Anda mendaftarkan aplikasi ke project Firebase, console akan menyediakan file konfigurasi 
  yang Anda tambahkan langsung ke direktori aplikasi lokal
	- web : Masuk ke proyek > Ringkasan > Tambahkan aplikasi > Tambahkan app web >
			Salin cuplikan dan tambahkan ke HTML anda.
	- andrtoid : silahkan lihat documentasi
- Perhatian: Sebaiknya jangan ubah file 
- nama aplikasi, id app, url, projectID, realtimeDB, storage,  bersifat publict
- makanya gunakan siitem keamanan auth untuk menjalankan app
*/

/* BATASAN dan KUOTA
- project per akun: 
	- spark 5-10(product, stagging, test, develop)
	- blaze bertambah (sesuai reputasi)
- app per project
	- 30 app (web, android, ios, admin, user, merchand, driver)
	- hindari multi tenant (aplikasi lain berbagi resource)
- situs per HOSTING 
	- situs bisa di hosting secara mandiri (dashboard admin, user, driver, merchand dll)
	- dalam situs ada beberapa domain(halaman akun, home, profile dll)
	- setiap situs bisa berbagi resourch dalam project
	- jangan di buatkan situs untuk pengembang dengan product dengan data yang sama (bikin project tersendiri)
	- maksimal 36 situs

*/

/* MELUNCURKAN APLIKASI 
-----------------------------------------------------------------------------------
saat aplikasi di publish hal wajib yang pertama dilakukan ya ini
- Siapkan pemberitahuan anggaran
- Pantau dasbor Usage and billing
- Periksa checklist peluncuran Firebase.

langkah lanjutan untuk analisis:
- analitic
- crash litic
- app chect 
- dll
 */
