<?php
require_once "core/init.php";
$error = '';

// redirect kalau user sudah login ----------------------
if(isset($_SESSION['user'])){header('Location: index.php');}

// validasi login --------------------------------------
if(isset($_POST["kirim"])){ // cek tombol
  $nama = $_POST["username"]; // tangkap nama
  $pass = $_POST["password"]; // tangkap pass
  // cek input nama pass ? ada : err
  if (!empty(trim($nama)) && !empty(trim($pass))) {
    // cek nama di db? ada : err            
    if(cekNama($nama)){                                 
      // cek pass di db? ada : err            
      if(cekPassword($nama, $pass)){
        $_SESSION['user'] = $nama; // set SESSION dg nama di halaman berlaku
        setcookie("username", $nama, time() + (86.400*3)); // setcookie username
        header('Location: index.php'); // redirect/masuk halaman di izinkan
      }else{$error = 'Input login anda salah';}                    
    }else{$error = 'Nama belum terdaftar, Silahkan daftar dahulu';}
  }else{$error = '*Kolom tidak boleh kosong';}
}

// UI --------------------------------------------------
require_once "view/header.php";
require_once "view/nav.php";

?> 
<style>
  /* style silahkan hapus dan ganti */
  .container{
    width: 70%;
    margin: 40px auto;
    padding: 16px;
    background-color: #eaeaea;
  }
  .err{
      color: red;
  }
</style>  
<!--  -->
<div class="container">
  <nav>
    <a href="index.php">home</a>
    <!-- switch button -->
    <?php 
    if(!isset($_SESSION['user'])){?>
      <a href="register.php">register</a>
      <!-- <a href="login.php">login</a> -->
      <?php }else{ ?> 
      <a href="logout.php">logout</a>
    <?php } ?>
  </nav>
  <br>
  <!-- form -->
  <form action="login.php" method="post">
    <label for="username">*Nama</label><br>
    <input type="text" name="username" id="username"><br>
    <label for="password">*Password</label><br>
    <input type="password" name="password" id="password"><br>
    <!-- notifikasi pesan error -->
    <?php  if($error != ''){ ?><div class="err"><?php echo $error; ?></div><?php } ?>
    <br>
    <button type="submit" name="kirim">login !</button>
  </form>
</div>
<?php require_once "view/footer.php"; ?>
