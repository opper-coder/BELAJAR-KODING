<?php
require_once "core/init.php";
$error = '';
// redirec kalau user sudah login
if( isset($_SESSION['user']) ){
    header ( 'Location: index.php' );
}
// validasi login
if( isset($_POST["submitx"]) ){                                     // cek tombol isset? bool
    $nama = $_POST["usernamex"];                                    // tangkap nama
    $pass = $_POST["passwordx"];                                    // tangkap pass
    if (!empty( trim($nama)) && !empty( trim($pass)) ) {            // cek nama pass kosong? bool
        if(login_cek_nama($nama)){                                  // call cek nama ada? bool
            if(cek_pass($nama, $pass)){                             // call cek pass ada? bool
                $_SESSION['user'] = $nama;                          // set SESSION dg nama
                header( 'Location: index.php' );                    // else redirect
            }else{ $error = 'data(password) ada yang salah'; }      // else pass salah
        }else{ $error = 'namanya belum terdaftar di database';}     // else nama sudah ada
    }else{ $error = 'field tidak boleh kosong'; }                   // else jangan kosong
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
