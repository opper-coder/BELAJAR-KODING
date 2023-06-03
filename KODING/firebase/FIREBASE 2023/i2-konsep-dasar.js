KONSEP DASAR FIREBASE
-------------------------------------------
- model data
	- model data tersusun dari collection dan document (sebenarnya mirip json)
	- action querynya berbeda antara collection dan document 
	- document berisi data key value
	- value boleh berisi array, object, bool dll cekidoc
	- document harus berada dalam parentnya yaitu collection
	- document boleh berisi subcollection lagi
	- document tidak boleh berisi document lagi melainkan key value
	- jika mau isi document lagi berarti harus di bungkus dalam subcollection baru kemudian document
	- collection > document > subcollection > document dst max 100 lapis
	- document bisa di hapus tapi collection tidak bisa di hapus begitu saja ada caranya & syaratnya cekidoc
	- document yang berisi map/object akan selalu di urutkan, berdasar key, value, panjang map, 
- index
-------------------------------------------
adalah bentuk penyimpanan juga, berbayar, faktor penting untuk performa query, disarankan pakai index apa lagi data besar, ada dua macam: 1. tunggal 2.komposit
	- tunggal
		default otomatis dibuatkan, tapi anda bisa mengecualikan(disable) kolom yg tidak perlu , biasanya array, object, kolom yg panjang, tapi inherit sifatnya 
		pengecualian hanya berlaku pada index auto,
	- Indeks komposit
		- alternatif custom index, manual, max array hanya satu dalam dokumen, 
		- index harus di hidupkan salahsatunya jika tidak query akan error yang berisi link ke pembuatan indexing baik tunggal atau komposit
		- membuat index di haruskan menentukan mode dan cakupan index 
		- mode:
			- menaik ASC: mendukung operasi <,>,=<,=>,==,!=,in,not-in,
			- menurun DESC: sda
			- Array‑contains: Mendukung klausa kueri array-contains dan array-contains-any pada kolom.
	- cakupan
		- collection
	- pembahasan khusus pelajari cara query, filter, sort, disable, dll 
- jenis data
-------------------------------------------
jenis data yang di dukung firestore, urutan di bawah yang diperlukan untuk indexing, baca indexing
	Nilai null
	Nilai boolean
	Bilangan bulat dan nilai floating-point, diurutkan sesuai urutan numerik
	Nilai tanggal
	Nilai string teks
	Nilai byte
	Referensi Cloud Firestore
	Nilai titik geografis
	Nilai array
	Nilai peta
- SDK dan library klien
-------------------------------------------
lingkungan(SDK) yang diperlukan untuk akses database, ada 3. meskipun tanpa SDK kita bisa akses database lewat HTTP dan gRPC
tapi best paractice pakai SDK
Firebase mendukung SDK seluler/web dan library klien server.
	1. seluler/web 
		pakai aturan keamanan auth, realtime, offline, ada versi SDK lite, agar lebih kecil aja, kemampuan di pangkas, CRUD sederhana saja
	2. Library klien server
		jika kita tidak konsumsi database langsung ke klien seperti web dan android, melainkan pakai express, php, Go, Java, Node.js, PHP, Python, dan Ruby. dll
		maka gunakan library ini, akses penuh Hanya menggunaklan IAM, tanpa auth dan aturan keamanan yang di client
		ini di gunakan saat anda menginginkan server perantara dengan firebase, atau bikin aplikasi desktop nodejs local non server 
	3. Firebase Admin SDK
		kalau ini diperlukan untuk integrasikan silang antara GCP dan Firebase, sebenarnya  Library klien server firebase memiliki kemampuan yang sama
	4. Library klien Google Cloud
		mirip library client server milik firebase
	5. Integrasi library pihak ketiga
		ada pilihan lain, support reactnative, ios, angular dll
	6. dalam aplikasi kita dengan next js menggunakan SDK client, logic menggunakan, firebase function.
- lokasi
-------------------------------------------
	- pilih lokasi sebelum bikin paket service, selanjutnya tidak bisa di ubah, kecuali beberapa service khusus (seperti firebase)
	- untuk mengurangi latensi, dan ketersediaan, dan berlaku untuk semua service GCP, kecuali service khusus
	- saat bikin project lokasi kita di minta, ini untuk menjalankan resource GCP kita, kecuali beberapa service bisa pilih lokasi lagi
	- memilih lokasi adalah memilih harga dan memilih latensi dan ketersediaan	
- paket data:
-------------------------------------------
	sistem cache ,adalah snapshot data dari firestore yang dapat di simpan pada cache backend, atau CDN anda. dengan tujuan
	lebih cepat dan lebih murah, anda tidak langsung query seluruhnya di firebase engine
	ada tiga langkah:
		1. Mem-build paket dg Admin SDK(bikin paketnya)
		2. Menyalurkan paket dari lokal disk atau dari CDN(casting)
		3. Memuat paket di klien(konsumsi)
- referensi
-------------------------------------------
- referensi dokumen (mirip url db menuju ke row data)
	import { doc, collection } from "firebase/firestore";			// doc() sebagai penunjuk
	const siswa1 = doc(db, 'siswa', 'andy'); 				// bentuknya ke row data andi
	const siswa1 = doc(db, 'siswa/andy'); 					// atau pakai slash
	const siswa1 = doc(db, "siswa", "kelas", "jurusan", "fisika"); 		// bersarang
	const siswa1 = doc(db, "siswa/kelas/jurusan/fisika"); 			// bersarang pakai slash (tidak ada dlm dokumentasi)
	-----
	const siswa1 = db.collection('siswa').doc('fisika'); 			// nodejs
	const siswa1 = db.doc('siswa/andy'); 					// atau pakai slash
	const messageRef = db.collection('siswa').doc('kelas')
  		.collection('jurusan').doc('fisika') 				// bersarang
  	const messageRef = db.doc('siswa/kelas/jurusan/fisika') 		// bersarang pakai slash (tidak ada dlm dokumentasi)

- referensi ke collection (url menuju ke tabel)
	const tabelSiswa = collection(db, 'siswa'); 
	-----
	const tabelSiswa = db.collection('siswa'); 				// nodejs
