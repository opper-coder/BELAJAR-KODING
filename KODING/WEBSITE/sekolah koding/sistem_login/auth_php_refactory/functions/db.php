<?php
$host       = "localhost";
$user       = "root";
$password   = "";
$db         = "sekolahkoding";
$conn = mysqli_connect ($host, $user, $password, $db) or DIE ( mysqli_error() );
?>
<!--  
langsung kita hentikan jika salah konek dengan die
jika tak error lanjut di init.php jika error munculin mati dan munculin errornya
jika errornya di parameter var $db host user password ya tampil
jika error di $conn ya juga tampil di browser
-->
