<?php 
	// secara bawaan php punya variabel superglobal baik terpakai atau tidak 
	// super global sebanyak 7 GET, POS, COOKIE, REQUEST, INV, SERVER,  semua berbentuk array assoc jadi bisa di var_dump dan punya key dan isi
	// dari ke 7 
	// setiap 7 superglobal berbeda prilaku baik cara kirim dan cara tangkap isi array nya
	// kalau global saja tinggal pakai key word global
	// -----var global-----
// $x = 10;							// variabel x global
// function tampilx()
// {
// 	// global $x;					// bisa akses global jika pakai keyword global tapi lokalnya masih menang jika aktif dua2nya
// 	$x=20;							// variabel x lokal(dalam function)
// 	echo $x;
// }

// tampilx();
	// -----end-----
	// -----var superglobal-----
// var_dump($_GET);					// bisa di var_dump dan siap diisi (berisi array kosong)coba aktifkan satu persatu
// $_GET["nama"] = "sandika galih";	// coba diisi satu data
// $_GET["alamat"] = "bandung";		// coba diisi dua data
// var_dump($_GET);					// var_dump  (berisi array berisi)
	// -----end-----
	

	// -----khusus untuk GET-----
//cara isi array bisa melalui url dg: ?lalu key = value localhost/saiti?nama=sandika&alamat=bandung  (terserah berapa item dalam 1 array)
	// -----end-----


 ?>




<!DOCTYPE html>
<html>
<head>     
	<title></title>
</head>
<body>



<p>
halaman ini erisi keeterangan umum tentang superglobal dll serta prilaku lain-lain yang berkaitan
</p>




</body>
</html>