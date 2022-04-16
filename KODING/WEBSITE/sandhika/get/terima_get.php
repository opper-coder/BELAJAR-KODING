<?php 
	// halaman ini ada sambugan(link)dengan halaman get.php

	// fungsi yang ini utility aja
	// jika ada orang yang langsung klik alamat ke url langsung 
	// maka aplikasi menendang kembali ke halaman ini karena ini celah bug 
	// caranya gunakkan  function isset di bawah ini:

	if(
		// jika parameter array di bawah belum di isi
		!isset ($_GET["idx"]) ||
		!isset ($_GET["namax"]) ||
		!isset ($_GET["alamatx"]) ||
		!isset ($_GET["jurusanx"])
	  )
	{
		// maka redirect ke halaman tujuann
		header( "Location: get.php");
		// lalu jangan lupa exit agar tidak  meng eksekusi yang lain2
		exit;
	}

 ?>


 <!DOCTYPE html>
 <html>
 <head>
 	<title>biodata</title>
 </head>
 <body>
 
<h1>halaman profil mahasiswa</h1>

 <ul>
 	<li>id: 		<?= $_GET["idx"]; ?>  		</li>			<!-- //[coba1<coba3] tangkap data yg di kirim dari coba3, ingat key dr key GET(idx)-->
 	<li>nama:		<?= $_GET["namax"]; ?>		</li>			
 	<li>alamat: 	<?= $_GET["alamatx"]; ?> 	</li>
 	<li>jurusan:	<?= $_GET["jurusanx"]; ?>	</li>
 </ul>


<br>
<a href="get.php">kembali ke daftar nama</a>

 </body>
 </html>