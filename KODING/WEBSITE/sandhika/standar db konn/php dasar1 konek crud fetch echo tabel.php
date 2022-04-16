<?php 

$conn = mysqli_connect("localhost","root","","belajardb");	// koneksi standard ke db (ada yang modular)
$result = mysqli_query($conn,"SELECT * FROM mahasiswa");	// query CRUD standard (ada yang modular)
// $row = mysqli_fetch_row($result); 							// membuat baris (row) data dg array( matikan untuk praktik di dalam kolom di bawah)

// echo($row[2]);											// array sudah bisa di tampikkan(harus ada index karena echo tidak bisa menampikan array utuh sebagai gantiya pakai var_dump )

// while($row = mysqli_fetch_row($result)){					// sudah bisa di while untuk tampilkan baris demi baris data nanti pakai foreeach
// var_dump($row);
// echo($row[1]);
// }

// ========dasar di atas ini PHP sudah jalan=========
 ?>



<!DOCTYPE html>
<html>
<head>
	<title>saiti mobile</title>
</head>
<body>
<!-- keterangan program -->
<h1>Belajar PHP dasar </h1>
<br>
<p>cara konek, query CRUD, cara fetcing, dan cara echo</p>
<br>

<!-- isi praktek bikin tabel biasa -->

<table border="1" cellpadding="10" cellspacing="0">			// BIKIN TABLE BIASA MANUAL
	<tr>
		<th>no.</th>
		<th>aksi</th>
		<th>id</th>
		<th>nama</th>
		<th>alamat</th>
		<th>jurusan</th>
</tr>
	<tr>
		<td>1</td>
		<td>1</td>
		<td>1</td>
		<td>1</td>
		<td>1</td>
		<td>1</td>
	</tr>
</table>

															// BIKIN TABLE otomatis

<table border="1" cellpadding="10" cellspacing="0">			
	<tr>
		<th>no.</th>
		<th>aksi</th>
		<th>id</th>
		<th>nama</th>
		<th>alamat</th>
		<th>jurusan</th>
	</tr>
	<?php $i = 1; ?>
	<?php while	($baris = mysqli_fetch_row($result)):?>	 //hasil dari fetch adalah array
	
	<tr>
		<td><?= $i; ?></td>
		<td>
            <a href="">ubah</a> | 
            <a href="">hapus</a>
        </td>
		<td><?= $baris[0];?></td>
		<td><?= $baris[1];?></td>
		<td><?= $baris[2];?></td>
		<td><?= $baris[3];?></td>
	</tr>
	<?php $i++; ?>
	<?php endwhile; ?>
</table>




</body>
</html>