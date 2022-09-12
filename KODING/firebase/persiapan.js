/*
DASAR DASAR FIREBASE
- cara baca dokumentasi 		-> langkah cara baca dokumentasi
- judul besar 					    -> panduan urutan dalam membaca sesuai judul
- dasar dan persiapan 			-> tiga platform, create, daftar, dan SDK
- memulai 						      -> mulai sampai siap
------------------------------------------------------------------
*/

/* CARA BACA DOKUMENTASI
------------------------------------------------------------------
ada 4 cara panduan 
1. panduan: yaitu dasar berurutan dan lengkap
2. referensi: sesuai pencarian judul SDK, REST API, 
3. codelab, belajar dan langsung coding
4. memulai dan sampel, cth integrasi fitur Firebase di dunia nyata
*/
/* JUDUL BESAR dan SUB JUDUL
------------------------------------------------------------------
0. Dasar persiapan
	dasar-dasar Firebase. Mulai project Firebase. 
	Pelajari konsep utama dan praktik terbaik untuk mengelola privasi pengguna 
	dan project Anda. Kuasai konsep tambahan di luar konsep dasar. dan emulator
1. Build
	Luncurkan backend Anda tanpa mengelola server Lakukan penskalaan dengan mudah 
	untuk mendukung jutaan pengguna dengan database Firebase, 
	infrastruktur machine learning, solusi hosting dan penyimpanan, 
	serta Cloud Functions.
	- autentikasi
	- reltime database
	- firestore
	- storage
	- ml
	- hosting
	- cloud function
	- aturan keamanan
	- app check
	- extention
2. Releas dan monitor
	Tingkatkan kualitas aplikasi dalam waktu singkat tanpa perlu repot. 
	Sederhanakan pengujian, penyortiran, dan pemecahan masalah. 
	Lakukan peluncuran fitur dan pantau adopsi dengan cermat. 
	Temukan, prioritaskan, dan perbaiki masalah stabilitas dan performa sejak dini.
	- crashlitic
	- performsnce monitor
	- test lab
	- app distribution
3. engage
	Tingkatkan interaksi pengguna dengan analisis lengkap, pengujian A/B, 
	dan kampanye pengiriman pesan. Pahami pengguna Anda untuk mendukung dan 
	mempertahankan mereka dengan lebih baik. 
	Jalankan eksperimen untuk menguji ide dan menemukan insight baru. 
	Sesuaikan aplikasi Anda untuk segmen pengguna yang berbeda.
	- analitic
	- remote config
	- A/B testing
	- cloud messaging
	- in app massaging
	- Dynamic link
	- google ad mob
	- google ads
	- app indexing
*/
/* DASAR DASAR DAN PERSIAPAN
------------------------------------------------------------------
ada 5 isu utama:
1. memulai
2. mengelola
3. platform dan framework
4. emulator dan pengujian
5. konsep

1. memulai
------------------------
a. create firebase project
b. daftarkan app
c. SDK integrasi platform

a. membuat dan mendaftarkan app
	ada tiga platform cara memulai ini bisa di lakukan web, android, ios 
	tapi disini akan fokus kepada website, di website ini kita akan menemukan
	konsep dan cara secara native, 
	saat kita pindah platform kita sudah menemukan konsep disini
	
	di website:
	1. buat project di console:
		1. buka console > add project (project ini bisa akses semua layanan firebase)
		   ikuti next2
		2. kita akan mendapat kan parameter: ID project dll
		3. optional jika mau kita akan ikutkan juga fitur, sekarang atau nanti. 
		crashlytics, A/B testing atau lain-lain.   
	2. daftarkan aplikasi.
		1. pilih platform web(sesuaikan) >  
		2. add app > 
		3. masukkan nama APP mu >
		4. klik register app >
		5. ikuti next2
	3. Install SDK v9
		1. install nodejs 
		2. install SDK > [npm install firebase]
		3. initialisasi app
			import { initializeApp } from 'firebase/app';
			const firebaseConfig = { 	// ganti dengan config yang di berikan
			};
			const app = initializeApp(firebaseConfig);
		4. nanti sertakan import layanan yang dibutuhkan lihat di dokumentasi asli
	4. Gunakan webpack untuk tree shaking. apalagi jika anda mbuatnya dari framework: vue, react dll
	5. selanjutnya tidak boleh dilupakan :
		1. lihat daftar harga
		2. dasborad usage billing
		3. chechlist peluncuran firebase
	6. SIAP
		sampai disini siap di gunakan untuk trigger dan driver layanan yang di gunakan 
*/

