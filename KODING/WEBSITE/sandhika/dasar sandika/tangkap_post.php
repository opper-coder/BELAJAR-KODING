<?php 	
			// langsung bisa di 
			echo "halo: "."$_POST[namax]"; 

			// ngatasin saat klik submit tapi kosong belum jalan
			// tp ini bukan cara yng benar hanya contoh saja
			// cara yng benar cari contoh milik sekolah koding

			if ( $_POST["namax"] == '' ){ 	die( header( "Location: post.php") ); 	}
?>