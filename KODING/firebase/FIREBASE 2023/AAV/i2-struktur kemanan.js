
ATURAN BACA/TULIS DASAR
-------------------------------------------------
singkatnya sebelum akses data yang di tuju oleh client user harus melewati tiga keamanan terlebih dahulu:
	1. aplikasi akan melewati : app check (ada bab sendiri)
	2. user melewati : authentication (ada bab sendiri)
	3. user logged : melewati aturan keamanan firestore untuk AAV(authentication, autorization, validation) untuk akses data (disini)

Aturan dasar terdiri atas:
"match" yang menentukan lokasi dokumen, tidak boleh ke collection 
"allow" saat diizinkan membaca data yang ditentukan:

cara nulis match:
	1. langsung ke dokument:     	match /cities/NY {if} 			// menuju ke dokument cities/NY saja (hanya satu dokumen) 
	2. pakai karakter pengganti:     match /cities/{city} {if} 		// menuju ke dokument cities/semua (seolah2 memilih koleksi cities)(karena hanya pilih ke collection saja tidak boleh)

BASIC
-------------------------------------------------
service cloud.firestore { 							// supaya tidak konflik dg service lainya, seperti: service cloud.storage dll
  match /databases/{database}/documents { 			// menentukan bahwa aturan harus cocok dengan database firestore apa pun dalam project, Saat ini setiap project hanya memiliki satu database bernama (default).
    // ...
  }
}

PRAKTIKNYA
-------------------------------------------------
Melebihi salah satu batas akan menyebabkan error izin ditolak.
rules_version = '2'; 								// versi  keamanan
service cloud.firestore { 							// default
  match /databases/{database}/documents { 			// default 
    match /cities/{city} { 							// jalur yang di izinkan, selain ini tidak di izinkan
      allow read: if <condition>; 					// read kondisi true/false. seperti user logged dll
      allow write: if <condition>; 					// write kondisi true/false
    }
  }
}

OPERASI TERPERINCI
-------------------------------------------------
selain menggunakan basic, jika di rinci maka masing2 izin operasi bisa terbagi sbb:
- Read: get, list
- write: create, update, dan delete:

service cloud.firestore {
  match /databases/{database}/documents { 			// arah 
    match /cities/{city} { 							// single document
      allow get: if <condition>; 					// izin ambil data single
      allow list: if <condition>; 					// izin ambil data list
    }
---
    match /cities/{city} { 							// arah 
      allow create: if <condition>; 				// izin create data baru(belum ada sebelumnya)
      allow update: if <condition>; 				// izin update data
      allow delete: if <condition>; 				// izin hapus data
    }
  }
}

DATA HIERARKIS
-------------------------------------------------
Anda perlu memahami interaksi antara "aturan keamanan" dan "data hierarkis".
data tersusun sbb: coll/doc/subColl/subDoc
aturan keamanan hanya di izinkan dan tidak inheritance, 
jika mau ya harus di tulis aturan eksplisit untuk mengontrol akses ke subkoleksi:

service cloud.firestore {
  match /databases/{database}/documents {
    match /cities/{city} { 							// url keamanan
      allow read, write: if <condition>;  			// izin kemanan
        match /landmarks/{landmark} { 				// url ke subColl harus di buatkan alurnya sendiri, dalam bracket parentnya
          allow read, write: if <condition>; 		// izin kemanan di tulis ulang
        }
    }
  }
}
--- // atau cara penulisan url begini boleh
service cloud.firestore {
  match /databases/{database}/documents {
    match /cities/{city}/landmarks/{landmark} { 	// url ke subColl di tulis dalam bentuk lanjutan, jika kondisinya sama 
      allow read, write: if <condition>;
    }
  }
}

KARAKTER PENGGANTI REKURSIF
-------------------------------------------------
- Jika Anda ingin aturan diterapkan ke sembarang inheritance, gunakan karakter pengganti, {name=**}. Contoh:
- tapi ini tergantung versi: di v1 jalur kosong tidak kompatibel, v2 kompatible, v2 grup koleksi. 


service cloud.firestore {
  match /databases/{database}/documents {
    match /cities/{document=**} { 					// semua dokumen dan child kedalam dari collection cities inheritance
      allow read, write: if <condition>;
    }
  }
}

PERNYATAAN KECOCOKAN YANG TUMPANG TINDIH
-------------------------------------------------
Ada kemungkinan dokumen cocok dengan beberapa pernyataan match (overlap). 
Jika beberapa ekspresi allow cocok dengan suatu permintaan, 
akses akan diizinkan jika salah satu kondisi tersebut adalah true:

service cloud.firestore {
  match /databases/{database}/documents {
    match /cities/{city} { 						// disini penunjuk dokumen city 
      allow read, write: if false; 				// tidak di izinkan
    }
    match /cities/{document=**} { 				// sementara penunjuk dokument overlap dengan dokument cities 
      allow read, write: if true; 				// disini izin diperbolehkan, maka yang menang adalah yang di perbolehkan
    }
  }
}

BATAS ATURAN KEAMANAN
-------------------------------------------------
Perhatikan batas berikut saat menangani aturan keamanan:
Melebihi salah satu batas akan menyebabkan error izin ditolak. cekidoc
maka nya dalam menyusun database kalau bisa jangan sampai melebihi kedalaman nested 10 

- Jumlah maksimum panggilan exists(), get(),: 10 
- dan getAfter(): 20
- maksimum Kedalaman match nested:	10
- Panjang jalur maksimum, pada segmen jalur, yang diizinkan dalam sekumpulan pernyataan match bertingkat	100
- Jumlah maksimum variabel tangkapan jalur yang diizinkan dalam sekumpulan pernyataan match bertingkat	20
- Kedalaman maksimum panggilan fungsi	20
- Jumlah maksimum argumen fungsi	7
- Jumlah maksimum binding variabel let per fungsi	10
- Jumlah maksimum panggilan fungsi siklis atau berulang	0 &lpar;tidak diizinkan&rpar;
- Jumlah maksimum ekspresi yang dievaluasi per permintaan	1.000
- Ukuran maksimum kumpulan aturan	Kumpulan aturan harus mematuhi dua batas ukuran:
- Batas 256 KB pada ukuran sumber teks kumpulan aturan yang dipublikasikan dari Firebase console atau dari CLI menggunakan firebase deploy.
- Batas 250 KB pada ukuran kumpulan aturan kompilasi yang dihasilkan saat Firebase memproses sumber dan menjadikannya aktif di back-end.

----- >>>>>> ----- >>>>>> ----- >>>>>> ----- >>>>>> ----- >>>>>> 

