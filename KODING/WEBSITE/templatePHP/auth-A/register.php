<?php 
require_once "core/init.php";
$error = '';

// redirect kalau user sudah login --------------
if(isset($_SESSION['user'])){header('Location: index.php');}
// validasi register ---------------------------
if(isset($_POST["kirim"])){ // cek session tombol kirim
  $nama = $_POST["username"]; // input nama 
  $pass = $_POST["password"]; // pass
  $pass2 = $_POST["password2"]; // pass verify
  
  // cek kolom password
  if ($pass == $pass2) {
    // cek nama & pass? ada : err 
    if (
      !empty( trim($nama)) && 
      !empty( trim($pass)) ) { 
      // cek nama di db? ada : err 
      if ( !cekNama($nama) ){ 
        // if(register()? berhasil : err ) 
        if ( registerUser($nama, $pass) ){ 
          $error = 'Register berhasil '; 
          }else{$error = 'Register gagal';} 
        }else{ $error = 'Nama sudah digunakan, silahkan masukan nama yang lain!';}
      }else{ $error = '*Kolom wajib diisi';}
   }else{ $error = "isikan kolom password harus sama";}
 }
?>

<!-- UI ------------------------------------ -->
<?php require_once "view/header.php"; ?>
<?php require_once "view/nav.php"; ?>

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
<!-- Navigation -->
<div class="container">
  <nav>
    <a href="index.php">home</a>
    <?php 
    if( !isset($_SESSION['user']) ){ 
    ?>
      <!-- <a href="register.php">register</a> -->
      <a href="login.php">login</a>
    <?php }else{ ?> 
      <a href="logout.php">logout</a>
    <?php } ?>
  </nav>
  <br>
  <!-- form username pass -->
  <form action="register.php" method="post">
    <label for="username">*Nama</label><br>
    <input type="text" name="username" id="username"><br>
    <label for="password">*Password</label><br>
    <input type="password" name="password" id="password"><br>
    <label for="password2">*Password lagi</label><br>
    <input type="password" name="password2" id="password2"><br>
    <!-- notifikasi pesan error -->
    <?php if( $error != ''){ ?> <div class="err"><?php echo $error; ?></div> <?php } ?>
    <br>
    <button type="submit" name="kirim">Daftar !</button>
  </form>
</div>

<?php require_once "view/footer.php"; ?>
