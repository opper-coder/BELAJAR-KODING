<?php 
# dalam buat halaman login kita harus punya 2 halaman login dan admin
# dalam halaman login bikin form dengan segala attrnya spt dibawh
# form action nya kosongin sebab post mau dikirim ke halaman ini sndiri 
# <ul> nya taruh saja diluar agar form nya <li> saja
# lalu bikin utility isset yang akan redirect ke halaman lain atau ke halaman ini sendiri

 ?>

 <?php 

// cek tombol sudah klik atauu belum
if ( isset( $_POST["submit"])) {
	// cek username dan password
	if( $_POST["namax"] == "admin" && $_POST["passwordx"] == "123" ){
		// jika benar, redirect ke admin
		header("Location: admin.php");              // Location: nulisnya L huruf besar : tanpa spasi
		exit;
		}
		// jika salah, tampilkan pesan kesalahan
		else{
			$error = true;
		}
}

 ?> 


<!DOCTYPE html>
<html>
<head>
	<title>login</title>
</head>
<body>
<!--  -->
<h1>Login Admin</h1>


<!-- utility akan tampil tulisan ini saat error salah paassword/nama -->

<?php if (isset($error)) :?>
	<p style="color: red; font-style: italic;">username / password salah</p>
	<?php endif; ?>

<!--  -->


<ul>
	<form action="" method="post">
		<li>
			<label for="nama">User name :</label>
			<input type="text" name="namax" id="nama">
		</li>
		<li>
			<label for="password">Password :</label>
			<input type="password" name="passwordx" id="password">
		</li>
		<li>
			<button type="submit" name="submit">Login</button>
		</li>
	</form>
</ul>
<!--  -->



</body>
</html>