<?php
require_once "core/init.php";  

if( !isset($_SESSION['user']) ){
	// die('anda belum login');
	header ( 'Location: login.php' );
}


require_once "view/header.php";

?>
<p>ini halaman Profile setelah login milik <?php echo $_SESSION['user']; ?></p>






<?php 
require_once "view/footer.php"; 
?>
<!-- 
0. halaman index masih kosong
1. bikin database xampp dg nama sekolahkoding > tabel 3 field > id, nama, password > id:ai, varchar, 50 (vid 1) dan password jumlah varchar bikin 255 untuk hash (enscrypsi nantinya)
2. bikin struktur file dan folder seperti yang ada ini lalu di hubungkan dengan require = seakan menyatu halamanya
3. yaitu file function dan file view akan di hub ke core/init php lalu dari init ini akan di panggil oleh file lain2 yaitu index login dan register
4. di dalam folder function ada user dan db. di user ini tempat function2 untuk login user dan register
5. di view ada dan header footer yang akan di panggil di hampir semua halaman
6. di core ada init.php tempat terminal koneksi halaman/include (require_once)
7. di header.html bikin html standard dan hapus tutup "body" dan "html" lalu 2 penutupnya tersebut buat di footer.html  
8. bikin css 
9. di functions/db.php bikin koneksi ke database -> debug akses db.php di browser
10. di init.php lakukan require ke db.html. require juga untuk "user.php" dan buat "session" sekalian walau belum di butuhin sekarang
11. require init.php di atas -> debug buka index.php di browser jika kosong maka OK (vid 4)
12. di register.php require init, header, footer
13. bikin form dg attr action ke halaman ini sendiri dan methode dg post
14. lakukan dg form yang ada dg segala attribut
15. buat function sesudah init dan sebelum header 
16. fungsi pertama buat "if isset(){}else{}" tangkap POST button lalu {tampilkan nama dan pass sekaligus matikan dg die}
17. kedua buat (if else) lagi berisi fungsi empty() agar saat submit tidak boleh kosong ->debug nya disana
18. juga buat trim() agar hapus spasi sebelum dan setelah string agar tidak hanya di isi spasi kosong->debug nya disana

// ----- function register
19. ketiga buat if else dan panggil function register_user di dalam nya
20. buat function register_user di users.php  dg parameter $nama dan $pass
21. bikin function register_user yang parameter function akan di terima saat di panggil dari 
    register.php di users.php
22. begini: function register_user( $nama, &pass){}
	a. lakukan INSERT ke database dalam {}
	   begini: mysqli_query_(conn, INSERT)
	b. lalu bikin variabel query insertnya dg isi:-
	   begini: QUERY_INSERT_INTO database (field1 di db, field2 di db) VALUE ('$nama dari input', '$pass')
	c. global conn dapat dari halaman init yng di include
	d. tapi sebelumnya perangkap dulu inputan (nama dan pass)-
	   dg real-escape-strings agar bebas dari input karakter khusus.(SQL injection)
	e. juga perangkap juga untuk password dg hash untuk di eskripsi
	f. query input jalan di database(coba cek masukan nama dan pass)
	g. buat if else untuk berhasil/tidak dg bolean lalu gunakan untuk alertnya 
	h. lalu refactoring

// ----- function cek nama kembar
23. cek nama kembar antara form dan database bikin function tetap di users.php: 
24. bungkus register user dengan if nya cek nama:
25. if (func nama tidak kembar){ lakukan func register_user tadi} else { pesan nama kembar}
26. begini : function register_cek_nama($nama){} di users.php
	a. di dalam braketnya cek database nya apakah nama ada atau enggak
	b. gunakan cari nama dg: query SELECT * FROM WHERE $nama
	c. dan cek apakah nama tersebut ada dengan mysqli_num_rows
	d. jadikan boolean (lihat cara nulis if tanpa braket karena hanya berisi return saja tanpa yg lain)
	e. jangan lupa global conn dan escape
	f. coba debug cek dg nama sama

// ----- bagian login ----

27. buka bagian login.php
28. karena hampir sama dg register maka kopas sj registernya
	sama-sama masukan nama dan password jadi bikin form yang sama beda function aja
29. cek data (apakah nama dengan password nya sesuai dg dbase saat klik button submit)
30. gunakan if else isset dulu, lalu
31. gunakan if else baca database hash password, ada data atau tidak lalu bandingkan 
    dg verify() untuk baca hash password dbase di user.php
32. bikin function cek_pass di user.php
    a. function cek_pass(){}
    b. () nama dan pass
    c. {} query select password/pilih password nya lalu verifikasi dengan membandingkan input dan dbase
    d. {} verify password () parameternya adalah password input dan password hash yng di simpan di database

33. cek nama pada login apakah nama sudah daftar atau belum maka kita bikin func login cek nama di users.php
34. function login_cek_nama(){}
35. () hanya $nama
36. {} bolean ada nggak database
37. else{} echo pesan
38. kita sudah bisa login tapi belum ngapa2in hanya bolean saja cek nama saat login->debug:
    isi nama belum ada dan ada di db
39. (vid no9)


 -->