/* DAFTAR ISI
-----------------------------------------------------------------------------------
management team alur kerja 					-> standard team pengembang
aturan keamanan								-> sesuai hirarki team
multi project								-> bikin project sesuai hirarki team
memilih setelan lokasi						-> mempengaruhi harga dan latensi paket
harga										-> cek harga masing2 service dan paket
menggunakan dan mengelola api key			-> ????
export data ke bigquery						-> ????
kelola instalasi firebase					-> ????
import segmen								-> ????
rest api									-> ????
admin sdk									-> ????
config firebase auth dan oauth				-> ????
akses project (iam)							-> security roles team admin developer
 */

/* MANAGEMENT TEAM ALUR KERJA 
-----------------------------------------------------------------------------------
- setidaknya siapkan 4 tahap sebelum produksi
	- development
	- test
	- stagging
	- production
- siapkan project masing2 tahapan
	- stidaknya satu untuk pra produksi, analitic tidak perlu pada preproduction (hanya berlaku dalam 1 project)
*/

/* ATURAN KEAMANAN
-----------------------------------------------------------------------------------
- Lingkungan preProduksi
	- daftarkan email pengguna, atau gunakan URL pratinjau sementara pada web
	- gunakan localhost saja (local emulator)
	- kalau memmang online gunakan aturan yang sama dengan produksi
- Lingkungan Produksi 
	- aktifkan ap check sesegera mungkin karena lebih mudah di pantau (jenis dan app yag akses)
	- gunakan rool keamanan pada setiap service (pantau siapa yg akses)
	- monitoring security checklist (saat produksi sangat penting)
 */

/* MULTI PROJECT
-----------------------------------------------------------------------------------
- boleh dipkai boleh tidak, kerjakan secara independen saja
- tapi kalau mau bisa tinggala atur file confignya baik di server ataupun di client
- skip aja dulu
*/

/* MEMILIH SETELAN LOKASI
-----------------------------------------------------------------------------------
Beberapa produk Firebase memerlukan setelan lokasi:
- Google Analytics
	boleh berbeda dengan lokasi default firebase dan GCP
- Cloud Firestore dan Cloud Storage	
	ikut lokasi default
- Cloud Functions (sekeduler)for Firebase 
	ikut lokasi default
- Cloud Functions (non sekeduler)for Firebase 
	ikut lokasi region lebih dekat lebih baik. SPARK: singapura BLAZE: jakarta
- Realtime Database 
	boleh berbeda dg default, bisa berubah2
- Cloud Firestore, Cloud Storage, dan fungsi terjadwal memiliki setelan lokasi yang sama, 
  yang disebut lokasi resource GCP default
- Peringatan: Menetapkan lokasi untuk salah satu layanan ini 
  (yaitu, Cloud Firestore, Cloud Storage, atau fungsi terjadwal) 
  juga menyetel lokasi untuk layanan lainnya. Setelah menetapkan lokasi 
  resource GCP default project, Anda tidak dapat mengubahnya
- Pilih lokasi multi-region untuk memaksimalkan ketersediaan dan ketahanan database Anda.(replikasi)

 */

 /* HARGA
-----------------------------------------------------------------------------------
selesaikan ?????????
  */
 
/* MENGGUNAKAN DAN MENGELOLA API Key
-----------------------------------------------------------------------------------
"API key firebase" adalah string unik, berfungsi untuk: berinteraksi dengan layanan
Kunci API untuk Firebase berbeda dari kunci API biasa

selesaikan ?????????
 */

/* EXPORT DATA KE BIGQUERY
-----------------------------------------------------------------------------------


 */

/* KELOLA INSTALASI FIREBASE
 -----------------------------------------------------------------------------------


 */

/* IMPORT SEGMEN
 -----------------------------------------------------------------------------------


 */

/* REST API
 -----------------------------------------------------------------------------------


 */

/* ADMIN SDK
 -----------------------------------------------------------------------------------


 */

/* CONFIG FIREBASE AUTH DAN OAUTH
 -----------------------------------------------------------------------------------


 */

/* AKSES PROJECT (IAM)
 -----------------------------------------------------------------------------------
Izin diberikan kepada team project melalui roles. roles adalah himpunan izin 
saat kita berikan roles kepada anggota artinya kita memberikan sejumlah izin dalam roles. 
type roles sbb:

-  Basic roles ada tiga	: Peran Pemilik, Editor, dan Pengakses lihat-saja
	- pemilik: bisa masukkan anggota memberi otoritas, bikin project, masukan service hapus service
	  restore service
	- viewer hanya bisa melihat2 saja. tombol edit ada tapi di blokir dengan notif
	- editor bisa viewer di tambah, ubah hapus sebagian besar service
-  Predefined roles	: peran terperinci otoritas khusus :
	-  Firebase-level roles : peran CRUD service firebase
	-  Product-category roles : peran CRUD hanya pada grup product 
	   yg di tentukan via google analityc dan kategori product umum
	-  Product-level roles : peran CRUD pada product service tertentu
-  Custom roles : peran yang bisa di custom sesuai kebijakan perusahaan

managemen otorisasi dan autentikasi team proyek:

- melihat daftar anggota dan otorisasi nya
-----------------------
	- project setting > users & permission > ada 3 peran dasar pemilik, editor, viewer
	- pada tab ini lah yang hanya bisa akses firebase console
	- untuk menentukan otentikasi dan otorisasi dasar bisa di lakukan di firebase console.
	- tapi kalau penugasan khusus hanya bisa di lakukan di GCP console.
	- pemilik adalah otoritas tertinggi. jika orangnya keluar perusahaan minta bantuan pada
	  pihak google. 
	- saat firebase projek masuk ke GCP mungkin bisa saja tidak bertuan maka pengelola GCP bisa 
	  menentukan siapa pemilik nya
	- 

- menetapkan otorisasi anggota team
-----------------------





 */
