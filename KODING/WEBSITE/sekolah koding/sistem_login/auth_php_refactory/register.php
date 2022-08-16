<?php 
require_once "core/init.php";
$error = '';
// redirec kalau user sudah login
if( isset($_SESSION['user']) ){
    header ( 'Location: index.php' );
}
// validasi register
if( isset($_POST["submitx"]) ){                                                             // cek tombol klik? bool
    $nama = $_POST["usernamex"];                                                            // tangkap nama
    $pass = $_POST["passwordx"];                                                            // tangkap pass
    // die($nama.' '.$pass);
    if (!empty( trim($nama)) && !empty( trim($pass)) ) {                                    // cek nama & pass. kosong? 
        // echo 'terimakasih sudah di isi';
        // register_user($nama, $pass);
        if ( !register_cek_nama($nama) ){                                                   // call cek nama. ada di db? (coba cek ! atau tidak)
                if ( register_user($nama, $pass) ){                                         // call register(nama,pass)
                        $error = 'berhasil register';                                       // act berhasil
                        }else{$error = 'gagal register';}                                   // else3 
                }else{ $error = 'nama sudah ada, silahkan masukan nama yang lain!'; }       // else2
        }else{ $error = 'field tidak boleh kosong';}                                        // else1
}
?>
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
    <?php  
        if( $error != ''){ ?>  
        <div id="error">
            <?php echo $error; ?>
        </div>
    <?php } ?>
</form>
<?php 
require_once "view/footer.php";
?>
