FIREBASE AUTHENTICATION
-------------------------------------------------
- Identitas pengguna diperlukan setiap aplikasi
- firebase menyediakan backend autentikasi:
	email, pass 
	HP, pass
	Google, Facebook, 
- bisa pakai SDK, atau
- bisa pilih Library UI
- bisa di kolaborasikan dengan kemanan layanan: misal rules firestore

fitur tambahan, 
- autentikasi multi-faktor
- fungsi pemblokiran
- logging audit dan
- aktivitas pengguna 
- dll sampai level perusahaan cekidoc

KEMAMPUAN UTAMA
-------------------------------------------------
FirebaseUI Auth:
	- direkomendasikan. solusi autentikasi siap pakai yang menangani alur UI 
	- untuk memproses login pengguna dengan alamat email dan sandi, nomor telepon, dll
	- best practice seluler dan situs, 
	- yang bisa memaksimalkan konversi login dan pendaftaran
	- juga menangani kasus khusus, seperti pemulihan akun dan penautan akun,
	- dapat disesuaikan dengan gaya visual aplikasi Anda. 
	- open source

FIREBASE SDK AUTHENTICATION:
-------------------------------------------------
- email, sandi							: management user, pengiriman email, reset sandi.
- identitas gabungan					: id user dg penyedia identitas gabungan. memungkinkan pengguna untuk login dengan akun Google, Facebook, Twitter, dan GitHub mereka.
- nomor telepon							: mengirim SMS ke pengguna
- integrasi sistem autentikasi khusus	: dg firestore, storage, function dll.
- Autentikasi anonim					: Menggunakan fitur yang memerlukan autentikasi tanpa mewajibkan pengguna untuk login terlebih dahulu dengan membuat akun anonim sementara

FIREBASE AUTHENTICATION DG IDENTITY PLATFORM
-------------------------------------------------
- Identity Platform adalah upgrade opsional
- Upgrade ini tidak memerlukan migrasi
- Anda akan mendapatkan akses langsung ke berbagai fitur seperti logging
- Dengan beberapa kode tambahan, Anda dapat menambahkan autentikasi multi-faktor, 
	fungsi pemblokiran, serta dukungan untuk penyedia SAML dan OpenID Connect.
- saat upgrade akan mengubah skema biaya spark 3000 UA 

FITUR
------------------------------------------------- 
fitur2 di bawah ini dapat di sematkan sesuai kebutuhan, silahkan cekidoc masing2 fitur
- Autentikasi multi-faktor	: dg SMS melindungi data pengguna Anda dengan menambahkan lapisan keamanan kedua ke aplikasi
- Fungsi pemblokiran		: Fungsi pemblokiran pengguna terdaftar
- Penyedia OpenID Connect dan SAML	: Mendukung penyedia SAML (khusus web) dan OpenID Connect yang tidak didukung secara native oleh Firebase.
- Logging audit, aktivitas pengguna : Memantau dan mencatat akses administratif serta aktivitas pengguna akhir ke dalam log.
	Saat mengupgrade project, Anda akan otomatis mengaktifkan log audit aktivitas admin di Cloud Logging. 
	Anda juga dapat mengaktifkan logging aktivitas pengguna di halaman Authentication Settings di Firebase console.
- Pencegahan penyalahgunaan dengan App Check	: membantu melindungi project Anda dari penyalahgunaan dengan mencegah klien yang tidak sah mengakses endpoint autentikasi.
- Multi-tenancy				: Dengan menggunakan tenant, Anda dapat membuat beberapa silo pengguna dan konfigurasi unik dalam satu project.
- Dukungan untuk perusahaan dan SLA	: Project yang diupgrade mendapatkan jaminan waktu beroperasi untuk layanan Auth sesuai dengan Perjanjian Tingkat Layanan (SLA) 
	Identity Platform dan akses ke dukungan tingkat perusahaan.
- Pembersihan otomatis pengguna anonim	: mengaktifkan akun anonim agar dihapus secara otomatis jk lebih dari tiga puluh hari. 
	Akun anonim juga tidak akan diperhitungkan di kuota penagihan.

BATAS PENGGUNAAN
------------------------------------------------- 
saat di upgrade ke Identity Platform skema akan penagihan berubah
1. Tanpa biaya (Spark)
	- 3.000 pengguna aktif harian (DAU) untuk sebagian besar penyedia login. 
	- Penggunaan aktif harian dihitung berdasarkan jumlah pengguna unik yang login selama periode 24 jam.
untuk sekema cekidoc

BAGAIMANA CARA KERJANYA
-------------------------------------------------
- dapatkan kredensial autentikasi dari pengguna terlebih dahulu. 
- Kredensial ini dapat berupa alamat email dan sandi pengguna, atau token OAuth dari penyedia identitas gabungan. 
- Kemudian, teruskan kredensial ini ke Firebase Authentication SDK. 
- selanjutnya backend akan memverifikasi kredensial tersebut dan menampilkan respons ke klien.
- Setelah pengguna berhasil login, Anda dapat mengakses informasi user profil dasar pengguna 
- mengontrol akses pengguna ke data yang disimpan di produk Firebase lainnya. 
- token autentikasi yang disediakan bisa di gunakan untuk memverifikasi identitas pengguna di layanan backend yang dimiliki.

Catatan: Secara default, pengguna yang terautentikasi dapat CRUD ke Firebase Realtime Database dan Cloud Storage.
Anda dapat mengontrol akses pengguna tersebut dengan mengubah Aturan Keamanan Firebase Realtime Database dan Cloud Storage.

ALUR IMPLEMENTASI
-------------------------------------------------
- Menggunakan FirebaseUI Auth
	- Menyiapkan metode login 	: aktifkan semua metode tersebut di Firebase console
	- Menyesuaikan UI login 	: custom FirebaseUI, fork kode di GitHub untuk menyesuaikan pengalaman login lebih jauh.
	- Menggunakan FirebaseUI	: untuk menjalankan alur login,	Impor library FirebaseUI, tentukan metode login yang ingin Anda dukung, lalu inisialisasi alur login FirebaseUI.
- Menggunakan Firebase Authentication SDK
	- Menyiapkan metode login	: sda
	- alur UI untuk metode login: Untuk login alamat email dan sandi, implementasikan alur yang meminta pengguna menulis alamat email dan sandinya. dst 
	- dan lakukan penerusan ke Authentication 
