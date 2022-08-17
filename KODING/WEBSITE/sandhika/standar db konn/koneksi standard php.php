<?php 
$conn = mysqli_connect("localhost","root","","belajardb");	// koneksi ke DB
$result = mysqli_query($conn,"SELECT * FROM mahasiswa");	// eksekusi(syntax query)
$row = mysqli_fetch_row($result);				// ambil data record (bisa di looping semua record)
var_dump($row[2]);						// ambil data pada field row 
echo($row[1]);    						// sudah bisa di ambil datanya
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>saiti mobile</title>
</head>
<body>
	<h1>hello world</h1>
</body>
</html>
