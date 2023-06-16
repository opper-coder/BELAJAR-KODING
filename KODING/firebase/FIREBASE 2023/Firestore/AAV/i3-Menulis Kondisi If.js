KONDISI IF 
-------------------------------------------------
dalam aturan keamanan sebelumnya di sebutkan bahwa untuk akses dokumen kta butuh:
	- 1. "ref" ke dokumen
	- 2. Read: 
		- get
		- list
	- 3. write: 
		- create 
		- update 
		- delete:
	- 4. kondisi: if(bool)
		- authentication
		- validasi
		- batas dokumen
		- function custom

AUTHENTICATION
-------------------------------------------------
izin untuk user logged umum

service cloud.firestore {
  match /databases/{database}/documents {
	match /cities/{city} {											    					// data yang di izinkan hanya pada ref ini yaitu di doc dalam coll cities saja
	allow read, write: if request.auth != null; 											// izin hanya di berikan kepada user logged!
    }
  }
}
---
izin untuk user logged dan khusus pengguna bersangkutan saja 
---
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} { 																// ref
      allow read, update, delete: if request.auth != null && request.auth.uid == userId; 	// izin RUD diberikan kepada user logged dan authenticatrion sesuai nama User bersangkutan
      allow create: if request.auth != null;
    }
  }
}

Jika aplikasi Anda menggunakan Firebase Authentication atau Google Cloud Identity Platform, 
variabel request.auth akan berisi informasi autentikasi untuk klien yang meminta data. 
Untuk informasi lebih lanjut tentang request.auth cekidoc. 

VALIDASI DATA
-------------------------------------------------
Banyak aplikasi yang menyimpan informasi kontrol akses sebagai "kolom" pada dokumen di database. 
Aturan Keamanan Cloud Firestore dapat mengizinkan atau menolak akses secara dinamis berdasarkan data dokumen:

service cloud.firestore {
  match /databases/{database}/documents {
    match /cities/{city} { 													// ref doc ada kolom visibility
      allow read: if resource.data.visibility == 'public'; 					// boleh baca jika pada kolom visibility == public,
    } 																		// <resourche> adalah db ini. <data.visibility> adalah ref kolom nya
  }
}
---
saat data di update data yang di kirim dengan data asli kadang masih dalam proses pengiriman, jika opsi pending di enablekan, maka status
variabel request.resource.
Anda dapat memeriksa nilai kolom ini di request.resource untuk mencegah update data yang tidak diinginkan atau tidak konsisten

service cloud.firestore {
  match /databases/{database}/documents {
    match /cities/{city} { 													// ref
      allow update: if request.resource.data.population > 0 				// izinkan jika data yg di minta ada, request.resource.data.population adalah status data masih di client atau sdh di server
                    && request.resource.data.name == resource.data.name; 	// DAN nama yg di cari sudah sesuai belum berubah  
    }
  }
}

MENGAKSES DOKUMEN LAIN
------------------------------------------------- 
- pembuatan if kondisi bisa di ambilkan dari database itu sendiri
- Anda dapat memanfaatkan fungsi get() dan exists() 
	untuk mengevaluasi permintaan yang masuk berdasarkan dokumen lain di database. 
- keduanya mebutuhkan ref jalur pengambilan data
- Anda harus meng-escape variabel secara eksplisit menggunakan sintaksis $(variable). 
	Pada contoh di bawah, variabel database ditangkap oleh pernyataan kecocokan 
	match /databases/{database}/documents dan digunakan untuk membentuk jalur: 

service cloud.firestore {
  match /databases/{database}/documents {
    match /cities/{city} { 																											// ref jalur, yg ingin di CRUD.
      allow create: if request.auth != null && exists(/databases/$(database)/documents/users/$(request.auth.uid)) 					// exist() adalah mengambil data dari jalur lain. ada user logged in
      allow delete: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.admin == true 	// get() adalah ambil data dari jalur lain apakah "kolom admin true"? 
    }
  }
}

- Untuk penulisan, Anda dapat menggunakan fungsi getAfter() 
	untuk mengakses status dokumen setelah sebuah transaksi atau batch penulisan selesai, 
namun sebelum transaksi atau batch tersebut dijalankan. Seperti get(), fungsi getAfter() 
mengambil jalur dokumen yang ditentukan secara lengkap. Anda dapat menggunakan getAfter() 
untuk menentukan set penulisan yang harus dilakukan bersama sebagai sebuah transaksi atau batch.

?????????????? 

----- >>>>>> ----- >>>>>> ----- >>>>>> ----- >>>>>> ----- >>>>>> 

BATAS PANGGILAN AKSES

Ada batasan pada panggilan akses dokumen per kumpulan aturan:
10 untuk permintaan dokumen tunggal dan permintaan kueri.

20 untuk pembacaan, transaksi, dan penulisan batch multi-dokumen. Batas 10 sebelumnya juga berlaku untuk setiap operasi.

Misalnya, Anda membuat permintaan penulisan batch dengan 3 operasi penulisan dan aturan keamanan Anda menggunakan 2 panggilan akses dokumen untuk memvalidasi setiap penulisan. Dalam hal ini, setiap penulisan menggunakan 2 dari 10 panggilan aksesnya dan permintaan penulisan batch menggunakan 6 dari 20 panggilan aksesnya.

Melebihi salah satu batas akan menyebabkan error izin ditolak. Beberapa panggilan akses dokumen akan di-cache, dan panggilan yang di-cache tidak diperhitungkan batasnya.

Untuk penjelasan lengkap mengenai pengaruh batas ini terhadap transaksi dan penulisan batch, lihat panduan untuk mengamankan operasi atomik.

Panggilan akses dan harga
Penggunaan fungsi ini akan memicu operasi baca di database, yang berarti Anda akan ditagih untuk pembacaan dokumen meskipun aturan Anda menolak permintaan tersebut. Baca artikel mengenai Harga Cloud Firestore untuk mengetahui informasi tagihan yang lebih spesifik.

Fungsi kustom
Seiring aturan keamanan Anda bertambah kompleks, Anda mungkin ingin mengemas kumpulan kondisi ke dalam fungsi yang dapat digunakan kembali di semua kumpulan aturan Anda. Aturan keamanan mendukung fungsi kustom. Sintaksis untuk fungsi kustom mirip dengan JavaScript, tetapi fungsi aturan keamanan ditulis dalam bahasa khusus domain yang memiliki beberapa batasan penting:

Fungsi hanya dapat berisi satu pernyataan return. Fungsi tidak boleh berisi logika lain apa pun. Misalnya, fungsi tidak boleh menjalankan loop atau memanggil layanan eksternal.
Fungsi dapat secara otomatis mengakses fungsi dan variabel dari cakupan tempat ditetapkannya. Misalnya, fungsi yang ditetapkan ke dalam cakupan service cloud.firestore memiliki akses ke variabel resource dan memiliki fungsi bawaan seperti get() dan exists().
Sebuah fungsi dapat memanggil fungsi lain namun tidak secara berulang. Total kedalaman stack panggilan dibatasi sampai 10.
Pada aturan versi v2, fungsi dapat menentukan variabel menggunakan kata kunci let. Fungsi dapat memiliki hingga 10 binding let, tetapi harus diakhiri dengan pernyataan return.
Fungsi ditetapkan dengan kata kunci function dan menerima nol argumen atau lebih. Misalnya, Anda mungkin ingin menggabungkan dua jenis kondisi yang digunakan dalam contoh di atas menjadi sebuah fungsi:


service cloud.firestore {
  match /databases/{database}/documents {
    // True if the user is signed in or the requested data is 'public'
    function signedInOrPublic() {
      return request.auth.uid != null || resource.data.visibility == 'public';
    }

    match /cities/{city} {
      allow read, write: if signedInOrPublic();
    }

    match /users/{user} {
      allow read, write: if signedInOrPublic();
    }
  }
}
Dengan menggunakan fungsi, aturan keamanan akan lebih mudah dipertahankan seiring aturan Anda bertambah kompleks.

Aturan bukanlah filter
Setelah Anda mengamankan data dan mulai menulis kueri, perlu diingat bahwa aturan keamanan bukanlah filter. Anda tidak dapat menulis kueri untuk semua dokumen dalam koleksi dan mengharapkan Cloud Firestore hanya menampilkan dokumen yang dapat diakses oleh klien saat ini.

Misalnya, perhatikan aturan keamanan berikut:


service cloud.firestore {
  match /databases/{database}/documents {
    // Allow the user to read data if the document has the 'visibility'
    // field set to 'public'
    match /cities/{city} {
      allow read: if resource.data.visibility == 'public';
    }
  }
}
Ditolak: Aturan ini menolak kueri berikut karena kumpulan hasilnya dapat mencakup dokumen dengan visibility yang bukan public:

Web

db.collection("cities").get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
    });
});
Diizinkan: Aturan ini mengizinkan kueri berikut karena klausa where("visibility", "==", "public") menjamin bahwa kumpulan hasil tersebut memenuhi kondisi aturan:

Web

db.collection("cities").where("visibility", "==", "public").get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
        });
    });
Aturan keamanan Cloud Firestore mengevaluasi setiap kueri terhadap kemungkinan hasilnya dan menggagalkan permintaan jika dapat menampilkan dokumen yang tidak dapat dibaca oleh klien. Kueri harus mengikuti batasan yang ditetapkan oleh aturan keamanan Anda. Untuk informasi aturan keamanan dan kueri lebih lanjut, lihat membuat kueri data dengan aman.

