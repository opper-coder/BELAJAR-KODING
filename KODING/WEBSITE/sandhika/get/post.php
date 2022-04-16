










<!DOCTYPE html>
<html>
<head>
	<title>POST</title>
</head>
<body>

<!-- keteranga singkat syarat form untuk keperluaan pengiriman data
via method post 
# post hanya bisa di kirim via form dimana ada tombol submit
# method post html hanya akan di tangkap oleh var $_POST php 
# name pada attr input typetext akan di jadikan key pada array $_POST dan value dari inputanya
# di form di syaratkan ada attr "action" dan "method"
# jika form tidak ada attr tsb maka defaultnya "method" akan diisi "GET" password akan tampak
  di url maka hati2 dan "action" defaultnya akan dikirim ke halaman ini sendiri.
  biasanya jika attr methhod tidak diisi(alias default, lalu di halaman lain di tangkap menggunakan POST,
  get default tidak mau jalan)
# tombol ada attr "name" "type" 
# di label dan input ada pasangan attr "for" dan "id"
-->
<?php 
// ini yang poin yg terakhir 
// yaitu utility untuk jika POST di kirim ke halaman ini sendiri dalam attr action 
// biasanya kalau input text nya belum di isi lalu pencet submit begitu saja, maka error
// cara ngatasinya pakai function di bawah ini
 ?>
 
<!-- <?php	if (isset($_POST["submit"])) : ?>

<h1>Selamat datang, <?= $_POST["namax"]; ?></h1>

<?php endif; ?> -->

<?php // aktifkan utility di atas dan form di bwh ini jika test utility ?>

<!-- <form method="post"> -->      
<form action="terima post.php" method="post">
	<label for="nama">masukan nama :</label>
	<input type="text" name="namax" id="nama">
	<br>
	<button type="submit" name="submit">kirim!</button>
</form>



</body>
</html>