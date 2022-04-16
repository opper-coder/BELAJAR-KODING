<?php 
require_once "core/init.php";
$error = '';

// redirec kalau user sudah login
if( isset($_SESSION['user']) ){
    header ( 'Location: index.php' );
}

// validasi register
if( isset($_POST["submitx"]) ){ 
    $nama = $_POST["usernamex"];
    $pass = $_POST["passwordx"];
    // die($nama.' '.$pass);

    if (!empty( trim($nama)) && !empty( trim($pass)) ) {
        // echo 'terimakasih sudah di isi';
        // register_user($nama, $pass);

        if ( register_cek_nama($nama) ){
                if ( register_user($nama, $pass) ){
                        $error = 'berhasil register';
                        }else{$error = 'gagal register';}
                }else{ $error = 'nama sudah ada, silahkan masukan nama yang lain!'; }
        }else{ $error = 'field tidak boleh kosong';}
}
?>

<!--  -->

<?php
require_once "view/header.php";
?>

<form action="register.php" method="post">
    <label for="username">Nama</label><br>
        <input type="text" name="usernamex" id="username"><br><br>
    <label for="password">Password</label><br>
        <input type="password" name="passwordx" id="password"><br><br>
        <button type="submit" name="submitx">Daftar !</button>

        <br>
    
    <?php  if( $error != ''){ ?>  
        <div id="error">
            <?php echo $error; ?>
        </div>
    <?php } ?>
</form>

<?php 
require_once "view/footer.php";
?>