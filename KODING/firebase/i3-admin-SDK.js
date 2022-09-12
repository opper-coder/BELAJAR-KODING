/* 
Admin SDK
- pengertian 				  -> 
- Prasarat					  -> 
- menambah SDK				-> 
- initialisasi				-> 
*/

/* PENGERTIAN
---------------------------------------------------------------------
adalah serangkaian library server, yg memiliki kemampuan istimewa sebagai admin
antara lain:
- CRUD realtimeDB hak admin penuh
- send cloud messaging via pendekatan alternative hak istimewa
- buat dan verifikasi token auth firebase
- akses resource GCP di project anda
- baca fitur firebase yg di dukung di doc:
 */

/* PRASARAT
---------------------------------------------------------------------
Pastikan Anda memiliki aplikasi server
- Admin Node.js SDK — Node.js 14+
- memiliki project firebase
- File konfigurasi dg kredensial akun layanan Anda
*/

/* MENAMBAH SDK pd nodejs dan ES6 (bahasa lainya jg tersedia)
---------------------------------------------------------------------
- [npm init] 								// bikin package.json
- [npm install firebase-admin --save]						// kemudian simpan admin sdk dlm pakage
- [import { initializeApp } from 'firebase-admin/app';] 	// tinggal import di javascript halaman admin anda
*/

/* INISIALISASI 
---------------------------------------------------------------------
- saat sudah memiliki project biasanya kita di kasih credential google
  untuk memanggil layanan API google
- tapi untuk admin SDK kita harus bikin file kunci pribadi caranya
	- Di Firebase console, buka Settings > Service Accounts.
	- Klik Generate New Private Key,
	- Simpan dengan aman file JSON yang memuat kunci tersebut
	- Tetapkan variabel lingkungan GOOGLE_APPLICATION_CREDENTIALS 
	  ke jalur file JSON yang berisi kunci akun layanan Anda.
	- Variabel ini hanya berlaku untuk sesi shell Anda saat ini. 
	  Jadi, jika Anda membuka sesi baru, tetapkan variabel kembali.
	- di linux:
	export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
	- inisialisasi:
	initializeApp({
	    credential: applicationDefault(),
	    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
	});

	Setelah Admin SDK diinisialisasi, Anda dapat menggunakannya untuk menyelesaikan jenis tugas berikut:

	- Mengimplementasikan autentikasi khusus
	- Mengelola pengguna Firebase Authentication
	- Membaca dan menulis data dari Realtime Database
	- Mengirim pesan Firebase Cloud Messaging
*/

/* SELANJUTNYA
---------------------------------------------------------------------
- Menginisialisasi beberapa aplikasi
- Menetapkan cakupan untuk Realtime Database dan Authentication
- Menguji dengan kredensial pengguna akhir gcloud￼
 
 belum selesai


*/
