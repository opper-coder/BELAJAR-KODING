<!DOCTYPE html>
<html>
<head>
    <title>sistem login</title>
    <link rel="stylesheet" type="text/css" media="screen" href="view/style.css" />
</head>
<body>
    
    <header>
        <h1>login dan register</h1>
        <nav>
            <a href="index.php">home</a>
<?php 
if( !isset($_SESSION['user']) ){ 
?>
            <a href="register.php">register</a>
            <a href="login.php">login</a>
<?php }else{ ?>
    <a href="logout.php">logout</a>
<?php } ?>
        </nav>
    </header>

<!-- <-7 hapus penutup body dan html dan cut ke footer.html-->