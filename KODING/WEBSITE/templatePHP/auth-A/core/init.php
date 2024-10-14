<?php
// memulai semua session 
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
require_once "functions/db.php";       
require_once "functions/user.php"; 


/*
usia setcookie() di buat di index(username), login(username), user(pass)

include di halaman lain:
require_once "core/init.php";  	// db
require_once "view/header.php";	// css
*/


?>