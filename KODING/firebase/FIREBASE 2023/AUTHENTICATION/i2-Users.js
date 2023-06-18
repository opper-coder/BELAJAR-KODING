USERS
-------------------------------------------------
dalam sebuah aplikasi ada yang disebut user, yaitu seseorang yang melakukan registrasi, lalu login, sesuai AAV(authentication, autorization, validasi)
	- user object	: memiliki properti spt nama, alamat, foto, dll, ini merepresentasikan user account, 
	 				  secara independen di simpan dalam db, yg dapat di edit lagi, (editable)
	- user account 	: adalah user teregistrasi melalui autentication, yang nanti user object akan di afiliasikan ke user account ini(uneditable, bisa tapi perlakuan khusus)  
prosesnya
	1. registrasi account: misalnya input kredensial email dan password (tergantung metode)
	2. kredensial akan di simpan sbg user account di AUTENTICATION, dan tidak dapat menambah properti lain
	3. jika anda akan menambahkan properti tambahan, anda bisa menyimpanya di firestore sbg user object (user profile) yang di hubungkan dg kredensial account

METODE MASUK
-------------------------------------------------
- dalam satu account: bisa dikaitkan pintu masuk dengan beberapa metode mis: "emeil pass", "HP" juga "google" dll
- "Instance users" melacak setiap penyedia yang ditautkan ke pengguna. Ini memungkinkan Anda memperbarui properti profil kosong menggunakan informasi yang diberikan oleh penyedia.

PENGGUNA SAAT INI (SESSION USER AKTIF)
-------------------------------------------------
- Saat user register atau login, user tersebut menjadi user instance Auth "saat ini"(current user). 
- Instance mempertahankan status user, bahkan saat di browser di refresh atau di restart(karena terjadi di backend)
- Saat pengguna logout, instance Auth berhenti mempertahankan(di hapus dari session); 
- perhatikan:
- saat tidak ada pengguna saat ini. Namun, instance pengguna tetap berfungsi sepenuhnya: 
	jika Anda menyimpan referensi ke sana, Anda masih dapat mengakses dan memperbarui data pengguna.

LIFECYCLE PENGGUNA
-------------------------------------------------
- cara melihat status instance auth dengan observers(pendengar)
- observers akan menerima pemberitahuan saat ada perubahan (event) pada instance auth 
	event:
	- user register sukses dan redirect ke login, atau telah dialihkan dari alur masuk penyedia identitas
	- user login.(pengguna saat ini ditetapkan)
	- user logout.(pengguna saat ini menjadi null)
	- Token akses pengguna saat ini di refresh. Kasus ini dapat terjadi pada kondisi berikut:
		- Token akses kedaluwarsa: ini adalah situasi umum. Token penyegaran digunakan untuk mendapatkan sekumpulan token baru yang valid.
		- Pengguna mengubah kata sandi mereka: Firebase mengeluarkan token akses dan penyegaran baru dan merender token lama kedaluwarsa. 
			Ini secara otomatis membuat token pengguna habis dan/atau membuat pengguna logout di setiap perangkat, untuk alasan keamanan.
		- Pengguna mengautentikasi ulang: beberapa tindakan mengharuskan kredensial pengguna dikeluarkan baru-baru ini; 
			tindakan tersebut termasuk menghapus akun, menyetel alamat email utama, dan mengubah kata sandi. 
			Alih-alih mengeluarkan pengguna lalu masuk lagi, dapatkan kredensial baru dari pengguna, 
			dan teruskan kredensial baru ke metode autentikasi ulang objek pengguna.

USER AKUN KHUSUS
-------------------------------------------------
- Secara default, user dapat register dan menghapus akun tanpa keterlibatan admin
- Namun, ada situasi user dibuat manual atau terprogram oleh admin, baik menggunakan Admin SDK atau Firebase console.
- Dalam kasus ini, Anda dapat menonaktifkan tindakan pengguna dari halaman Settings Firebase Authentication, 
	yang mencegah register dan penghapusan akun oleh enduser.
- Jika enduser mencoba membuat atau menghapus akun dalam sistem Anda, layanan Firebase akan menampilkan kode error: auth
- Anda harus menangani error di frontend dengan baik dengan meminta pengguna mengambil tindakan yang sesuai untuk layanan.

TOKEN AUTH
------------------------------------------------- 
Ketika Anda melakukan autentikasi dengan Firebase, ada tiga jenis token auth yang mungkin Anda temui:
- Token penyedia identitas
- Token ID Firebase
- Token kustom Firebase

ALAMAT EMAIL TERVERIFIKASI
------------------------------------------------- 
Firebase menganggap email telah terverifikasi jika memenuhi dua ketentuan:
1. Pengguna menyelesaikan alur verifikasi Firebase
2. Email tersebut diverifikasi oleh Penyedia Identitas (IdP) yang tepercaya.

PENAUTAN AUTH
-------------------------------------------------
terkait dengan kombinasi multi penautan bisa ada bug celah untuk dapat di akses oleh orang yg tidak bertanggung jawab
hal ini bisa di atasi dengan menangani verifikasi error harus melakukan penautan
- IdP terpercaya		: IdP yang memiliki domain atau selalu mensyaratkan verifikasi
	- di antaranya		: Google, Yahoo, Microsoft, Apple
- IdP tidak terpercaya	: IdP yang memverifikasi email sekali, tetapi kemudian mengizinkan pengguna mengubah alamat email tanpa memerlukan verifikasi ulang
	- di antaranya 		: Facebook, Twitter, GitHub

------------------------------------------------- 
