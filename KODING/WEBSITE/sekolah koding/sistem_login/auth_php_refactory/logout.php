<?php 
// session_start();
require_once "core/init.php";


// redirect kalau user belum login
session_destroy();
header( 'Location: login.php' );

 ?>