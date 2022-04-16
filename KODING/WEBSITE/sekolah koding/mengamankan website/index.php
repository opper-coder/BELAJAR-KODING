<?php 

// cara pertama jika mau nyimpan file lagsung dg ext .php jangan di yang lain seperti .html dan .inc
// supaya struktur folder tak bisa di akses langsung di url maka buatkan 1 file di folder induk dg nama .htaccess yang berisi Options -Indexes saja
// XSS attack: bisa nulis js <script>. di form input. cara mencegah misalnya munculin alert, redirect, infinity loop dst
// atasi menggunakan htmlspecialchars()contoh: (GABUNGKAN CARA INI DENGAN ESCAPE DI PHP)

$text = "<script> alert ( 'halooo anda telah di hack! ha.. ha.. ha..' );</script>";

// echo $text;
echo htmlspecialchars($text, ENT_QUOTES);

// CSRF attack : 

 ?>
 -->