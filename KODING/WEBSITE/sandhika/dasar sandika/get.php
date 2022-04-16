<?php 
			// get sejak awal dah ada coba var_dump
				// var_dump($_GET);
 			
 			// coba isi
 				// 	$_GET["nama"] = "aqil";
				// var_dump($_GET);

			// boleh diisi banyak
				// $_GET["nama"] = "iza";
				// $_GET["umur"] = 5;
				// $_GET["alamat"] = "saiti";
				// $_GET["gender"] = "perempuan";
				// print_r($_GET);

			//cara isi array bisa melalui url: ? key = value
			  	// localhost/saiti?nama=sandika&alamat=bandung

			// cara isi via link:
 ?>
				
				 <a href="tangkap_get.php? nama= aqil aaa">
				 	klik disini for aqil 
				 </a>
				 <br>

			<!-- pada perkembangan nya bisa di ambil dari variabel nantinya tp sekarang belum -->
				 <?php $nama = "iza get variabel"; ?>
				 <a href="tangkap_get.php? nama= <?= $nama; ?> ">
				 	klik disini for iza
				 </a>











