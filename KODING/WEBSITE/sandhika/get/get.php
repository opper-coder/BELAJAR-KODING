<?php 
						// kita punya array associatif bersarang berisi nama2 mahasiswa
	$mahasiswa = [										
		[
			"id" => "10",
			"nama" => "sandika",
			"alamat" => "bandung",
			"jurusan" => "komputer"
		],
		[
			"id" => "11",
			"nama" => "teguh hp",
			"alamat" => "banggai",
			"jurusan" => "perbankan"
		],
		[
			"id" => "12",
			"nama" => "mahmud",
			"alamat" => "malang",
			"jurusan" => "wirausaha"
		]
	];

 ?>

 <!DOCTYPE html>
 <html>
 <head>
 	<title>GET</title>
 </head>
 <body>
 <h1>Daftar Mahasiswa</h1>

<!-- ==============================================// [coba 1]coba tampilkan standard dg foreach -->
<!-- <?php 											
foreach ($mahasiswa as $mhs):?>	
<ul>
	<li><?= $mhs["id"]; ?></li>
	<li><?= $mhs["nama"]; ?></li>
	<li><?= $mhs["alamat"]; ?></li>
	<li><?= $mhs["jurusan"]; ?></li>
</ul>
<?php endforeach; ?> -->

<!-- ==============================================// [coba 2]coba tampilkan nama saja sebagai link<a> ke halaman lain -->

<!-- <ul>
	<?php foreach ($mahasiswa as $mhs):?>	
	<li>
		<a href="terima_get.php
		">   <?= $mhs["nama"]; ?>   </a>
	</li>
	<?php endforeach; ?>
</ul> -->

<!-- ==============================================// [coba 3]kirimdata melalui url kopi coba2 dan tambah kirim data via href -->
<!--
 <ul>
	<?php foreach ($mahasiswa as $mhs):?>	
	<li>
		<a href="terima_get.php
		?namax=<?= $mhs["nama"]; ?>">   <?= $mhs["nama"]; ?>   </a>   	--><!--// disini sisipkan kirim data via url nama =nya 
																								diambil dari arraynya (sama dengan yang 
																								di <li>nya) jadi sambil klik link ke halaman
																								lain sambil ngirim data melalui url 
																							// cara cek nya coba hover di linknya dan lihat  
																								di status bar di bawah apakah namanya berubah 2 
																								sesuai dg linknya
																							// dari sini setelaah data dikirim ke hal biodata  
																								di bio data harus di tangkap di [coba1]
																								sesuai dg linknya 
																							// ingat kirim data melalui get adalah key (namax) dan 
																								value diambil dari array (atau data base)-->

<!--	</li>
	<?php endforeach; ?>
</ul> 
-->

<!-- ==============================================// [coba 4]kirim semua data id nama dst melalui url-->

<ul>
	<?php foreach ($mahasiswa as $mhs):?>	
	<li>
		<a href="terima_get.php
		?idx=<?= $mhs["id"]; ?>&namax=<?= $mhs["nama"]; ?>&alamatx=<?= $mhs["alamat"]; ?>&jurusanx=<?= $mhs["jurusan"]; ?>">   <?= $mhs["nama"]; ?>   </a>
	</li>
	<?php endforeach; ?>
</ul>








 </body>
 </html>