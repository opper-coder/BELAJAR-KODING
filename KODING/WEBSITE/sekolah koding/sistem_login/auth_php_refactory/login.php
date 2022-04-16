<?php
require_once "core/init.php";
$error = '';

// redirec kalau user sudah login
if( isset($_SESSION['user']) ){
    header ( 'Location: index.php' );
}

// validasi login
if( isset($_POST["submitx"]) ){
    $nama = $_POST["usernamex"];
    $pass = $_POST["passwordx"];
    if (!empty( trim($nama)) && !empty( trim($pass)) ) {
        if(login_cek_nama($nama)){
            if(cek_pass($nama, $pass)){
                $_SESSION['user'] = $nama;
                header( 'Location: index.php' );
            }else{ $error = 'data(password) ada yang salah'; }
        }else{ $error = 'namanya belum terdaftar di database';}
    }else{ $error = 'field tidak boleh kosong'; }   
}

require_once "view/header.php";
?> 

<form action="login.php" method="post">
    <label for="username">Nama</label><br>
    <input type="text" name="usernamex" id="username"><br><br>
    <label for="password">Password</label><br>
    <input type="password" name="passwordx" id="password"><br><br>
    <button type="submit" name="submitx">login !</button>
    <br>
    <?php  if( $error != ''){ ?>  
        <div id="error">
            <?php echo $error; ?>
        </div>
    <?php } ?>
</form>

<?php require_once "view/footer.php"; ?>