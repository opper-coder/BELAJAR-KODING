<?php 
// sambung kan halaman ke function konek (atau akai key word "include" juga bisa) 
// agar halaman itu seolah menyatudengaan halaman ini
require 'functions.php';

// panggil function queri dan fetch dan bungkus dengan variaabel 
// agar jadi array dan bisa di tampilkan di bawah
$mahasiswa = query("SELECT * FROM mahasiswa");
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>php konneksi modular</title>
</head>
<body>
	
<table border="1" cellpadding="10" cellspacing="0">
	<tr>
		<th>no. </th>
		<th>aksi </th>
		<th>id </th>
		<th>nama </th>
		<th>alamat </th>
		<th>jurusan </th>
	</tr>

	<?php $i = 1;?>							<!-- //bikin var untuk nomor pada kolom 1 -->
	<?php foreach($mahasiswa as $coba) :?>	<!-- //lakukan pengulangan untuk tabel row (baris) gunakan gaya 
												//	templating dengan mengganti bua kurawal  dengan ":" dan 
												//	tutup dengan "endforeach;"-->

	<tr>
		<td><?= $i?></td>
		<td>
		<a href="">ubah</a> |
		<a href="">hapus</a> 
		</td>
		<td><?= $coba["id"] ?></td>
		<td><?= $coba["nama"] ?> </td>
		<td><?= $coba["alamat"] ?> </td>
		<td><?= $coba["jurusan"] ?> </td>
	</tr>
	<?php $i++;?>
	<?php endforeach;?>
</table>

</body>
</html>