MENGAMANKAN DATA DI CLOUD FIRESTORE
-------------------------------------------------
AAV: Authentication, Autorization, Validation tanpa server

Untuk library klien seluler dan web, adalah kombinasi 3 di bawah:
	- Firebase Authentication 
	- Aturan Keamanan Cloud Firestore (simulatornya ada di: tab rules console)
	- App Check (filter app) 

Untuk aplikasi Anda yang menggunakan Cloud Storage for Firebase, 
	- gunakan Cloud Firestore untuk menentukan kondisi akses ke resource Cloud Storage Anda 
		dalam dokumen database yang dapat diakses melalui Aturan Keamanan Cloud Storage.

Untuk library klien server, Java, Python, Node.js, dan Go
	- Identity and Access Management (IAM). 


MEMULAI
-------------------------------------------------
pilih version 2 terbaru dan

rules_version = '2'; 							// v2 memiliki fitur baru spt: query grup collection, karakter pengganti: {name=**} (nama dokument apapun)
service cloud.firestore {
  match /databases/{database}/documents {

MENULIS ATURAN
-------------------------------------------------
secara default bentuk kontrol db seperti di bawah, terdiri dari 2 komponen
	1. match: untuk melihat url db 
	2. allow: control autiorization

rules_version = '2'; 
service cloud.firestore {
  match /databases/{database}/documents { 				// akses data di database URL untuk di ubah dan sesuaikan session otentikasi, otorisasi
    match /<some_path>/ { 								// URL juga
      allow read, write: if <some_condition>; 			// disini Autorization nya 
    }
  }
}
---
contoh1

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} / { 							// karakter pengganti URL 
      allow read, write: if request.auth != null;		// allow read, write, all documents, all users signed in 
    }
  }
}
---
contoh2

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false; 						// deny read, write, all documents, all users
    }
  }
}
---
contoh3

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true; 						// allow read, write, all documents, all users   
    }
  }
}

Jalur {document=**} artinya: cocok dengan dokumen apa pun di seluruh database. 

ATURAN PENGUJIAN
-------------------------------------------------
ada simulator: untuk menguji kumpulan aturan Anda. di tab Rules Firebase console. 
tapi ini beda dengan aturan keamanan di SDK > bukan untuk produksi karena bisa tidak singkron 
	caranya: buka tab rules atur disana, lalu publish 

ATURAN KEMANAN CLI
anda juga bisa deploy aturan kemanan via CLI 
	firebase init firestore
	firebase deploy --only firestore:rules

Dengan simulator aturan, Anda dapat menyimulasikan pembacaan, penulisan, dan penghapusan yang diautentikasi dan tidak diautentikasi. 
Saat menyimulasikan permintaan terautentikasi, Anda dapat membuat dan melihat pratinjau token autentikasi dari berbagai penyedia. 
Permintaan yang disimulasikan berjalan melawan kumpulan aturan di editor Anda, bukan aturan yang saat ini digunakan. 

MEN-DEPLOY ATURAN
-------------------------------------------------
Agar dapat menggunakan Cloud Firestore dari aplikasi seluler, Anda harus men-deploy aturan keamanan. 
Anda dapat men-deploy aturan di Firebase console atau menggunakan Firebase CLI.

Pembaruan Aturan Keamanan Firestore Cloud dapat memakan waktu hingga satu menit untuk berefek pada kueri dan pemroses baru. 
Namun, diperlukan waktu hingga 10 menit untuk sepenuhnya menerapkan perubahan dan memengaruhi pemroses aktif mana pun.

-------------------------------------------------
