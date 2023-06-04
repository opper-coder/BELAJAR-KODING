Kompetisi, atau race-condition 

KONSEP
--------------------------------------- 
Transaksi dan pertentangan(rebutan) data

Agar suatu transaksi berhasil, 
- dokumen yang diambil oleh operasi baca tidak boleh dimodifikasi oleh operasi di luar transaksi tersebut. 
- Jika operasi lain mencoba mengubah salah satu dokumen, operasi tersebut akan memasuki status pertentangan data dengan transaksi. infinite loop

Pertentangan(rebutan) data
- Saat dua atau beberapa operasi bersaing untuk mengontrol dokumen yang sama. 
- Misalnya, satu transaksi mungkin mengharuskan dokumen tetap konsisten 
- sementara suatu operasi yang berlangsung serentak mencoba memperbarui nilai field.
Cloud Firestore menyelesaikan pertentangan data dengan "menunda" atau "menggagalkan" salah satu operasi tersebut. 
Library klien Cloud Firestore otomatis mencoba kembali transaksi yang gagal karena pertentangan data. 
Setelah sejumlah tertentu percobaan ulang, operasi transaksi akan gagal dan menampilkan pesan error:

ABORTED: Too much contention on these documents. Please try again.

Saat menentukan operasi digagalkan atau ditunda, ini bergantung jenis library klien.
    - SDK seluler/web menggunakan kontrol "serentak optimis".
    - Library klien server menggunakan kontrol "serentak pesimis".
- Kontrol serentak optimis
    Berdasarkan asumsi bahwa pertentangan data kecil kemungkinan terjadi atau tidak efisien untuk menyimpan kunci database. 
    Transaksi optimis tidak menggunakan kunci database untuk memblokir operasi lain agar tidak mengubah data.
    SDK seluler/web menggunakan kontrol serentak optimis, karena dapat beroperasi di lingkungan dengan latensi tinggi dan koneksi jaringan yang tidak andal. 
    Mengunci dokumen di lingkungan latensi tinggi akan menyebabkan terlalu banyak kegagalan pertentangan data.
    - Di SDK Seluler/Web, transaksi akan mengingat semua dokumen yang Anda baca di dalam transaksi. 
    Transaksi ini menyelesaikan operasi tulisnya hanya jika tidak ada dokumen yang berubah selama eksekusi transaksi. 
    Jika ada dokumen yang berubah, pengendali transaksi akan mencoba kembali transaksi tersebut. 
    Jika tidak dapat memperoleh hasil bersih setelah beberapa kali percobaan ulang, transaksi akan gagal karena pertentangan data.

Kontrol serentak pesimis
    Library klien server (C#, Go, Java, Node.js, PHP menggunakan kontrol serentak pesimis
    Berdasarkan asumsi bahwa pertentangan data mungkin terjadi. 
    Transaksi pesimis menggunakan kunci database untuk mencegah operasi lain mengubah data.
    Library klien server menggunakan kontrol serentak pesimis, 
    karena mengasumsikan latensi rendah dan koneksi ke database yang andal.

Catatan: Untuk memastikan latensi rendah, 
    gunakan library klien server dari produk komputasi Google Cloud yang paling dekat dengan database Cloud Firestore Anda. 
    Library klien server dengan koneksi latensi tinggi dapat mengalami masalah penguncian dan pertentangan data.
    Dalam library klien server, transaksi akan mengunci dokumen yang dibaca. 
    Kunci transaksi dalam dokumen memblokir transaksi lain, batch operasi tulis, dan operasi tulis non-transaksi agar tidak mengubah dokumen tersebut. 
    Transaksi akan melepas kunci dokumen pada waktu commit. 
    Kuncinya juga akan dilepas jika waktu habis atau terjadi kegagalan karena alasan apa pun.
    Saat transaksi mengunci dokumen, operasi tulis lain harus menunggu transaksi untuk melepas kuncinya. 
    Transaksi memperoleh kuncinya dalam urutan kronologis.

Isolasi serialisabel
    Pertentangan data antara transaksi berkaitan erat dengan tingkat isolasi database. 
    Tingkat isolasi database menjelaskan seberapa baik sistem menangani konflik antara operasi serentak. 
    Konflik berasal dari persyaratan database berikut:
    - Transaksi memerlukan data yang akurat dan konsisten.
        Untuk menggunakan resource secara efisien, database mengeksekusi operasi secara serentak.
    - Pada sistem dengan tingkat isolasi yang rendah, 
        operasi baca dalam transaksi dapat membaca data yang tidak akurat dari perubahan yang tidak di-commit dalam operasi serentak.

Isolasi serialisabel menentukan tingkat isolasi tertinggi. Isolasi serialisabel berarti:
    - Anda dapat berasumsi bahwa database mengeksekusi transaksi dalam rangkaian.
    - Transaksi tidak terpengaruh oleh perubahan yang tidak di-commit dalam operasi serentak.
    - Jaminan ini harus dipertahankan meskipun database mengeksekusi beberapa transaksi secara paralel. 
    - Database harus mengimplementasikan kontrol serentak untuk menyelesaikan konflik yang akan merusak jaminan ini.

Cloud Firestore menjamin isolasi serialisabel pada transaksi. 
Transaksi di Cloud Firestore diserialkan dan diisolasi pada waktu commit.

Isolasi serialisabel pada waktu commit
    - Cloud Firestore menetapkan waktu commit pada setiap transaksi yang mewakili satu titik dalam waktu. 
    Saat Cloud Firestore meng-commit perubahan transaksi ke database, 
    Anda dapat mengasumsikan semua operasi baca dan tulis dalam transaksi terjadi tepat pada waktu commit.

Eksekusi suatu transaksi sebenarnya memerlukan rentang waktu tertentu. Eksekusi transaksi dimulai sebelum waktu commit, 
dan eksekusi beberapa operasi mungkin tumpang-tindih. Cloud Firestore mempertahankan isolasi serialisabel dan menjamin bahwa:
    - Cloud Firestore meng-commit transaksi secara berurutan pada waktu commit.
    - Cloud Firestore mengisolasi transaksi dari operasi serentak dengan waktu commit lebih akhir.
    - Dalam kasus pertentangan data antara operasi serentak, 
        Cloud Firestore menggunakan kontrol serentak optimis dan pesimis untuk menyelesaikan pertentangan.

Isolasi dalam transaksi
    Transaction isolation juga berlaku untuk operasi tulis dalam transaksi. 
    Operasi kueri dan baca dalam transaksi tidak melihat hasil operasi tulis sebelumnya di dalam transaksi tersebut. 
    Meskipun Anda mengubah atau menghapus dokumen dalam transaksi, 
    semua operasi baca dokumen dalam transaksi tersebut akan menampilkan versi dokumen pada waktu commit, 
    sebelum operasi tulis transaksi. Operasi baca tidak menampilkan apa pun jika dokumen tidak ada.

Catatan: Operasi baca dokumen harus dilakukan sebelum operasi tulis dokumen.
Masalah terkait pertentangan data
Untuk mengetahui informasi selengkapnya tentang pertentangan data dan cara menyelesaikannya, lihat halaman pemecahan masalah.
