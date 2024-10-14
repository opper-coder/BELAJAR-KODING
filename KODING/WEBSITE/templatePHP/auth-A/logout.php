<?php 
require_once "core/init.php";

// hapus cookie
setcookie("username", "", time()-120);
setcookie("usernamep", "", time()-120);

// hapus session
session_destroy();

// tendang jika user belum login 
header( 'Location: login.php' );
 ?>