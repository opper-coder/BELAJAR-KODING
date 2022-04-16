
<?php 

$conn = mysqli_connect("localhost","root","","belajardb");
$result = mysqli_query($conn,"SELECT * FROM mahasiswa");
$row = mysqli_fetch_row($result);
var_dump($row[2]);
echo($row[1]);    // sudah bisa di ambil datanya




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