<?php
require_once "core/init.php";  
require_once "view/header.php";
require_once "view/nav.php";
// -------------------------------------------------
// di index: auto login dg cookie
if(
	(isset($_COOKIE["username"]) &&
	isset($_COOKIE["usernamep"]))  
 ){
 	// jika cookie username ada maka login
	$nama = $_SESSION['user'] = $_COOKIE["username"];
	// tapi bandingkan dulu password dari cache dan dari db
	$query = "SELECT password FROM users WHERE username = '$nama'";
	$result = mysqli_query($conn, $query);
	$pass = mysqli_fetch_assoc($result)['password'];
	// halaman login auto ini menjadi pintu masuk login pakai cache. halaman lain  di htaccess
	if (isset($_COOKIE["usernamep"]) || 
		$_COOKIE["usernamep"] = $pass) {
	    if(cekNama($nama)){                                 
			if(cekPassword($nama, $pass)){
				setcookie("username", $nama, time() + (86.400*3)); // setcookie username
				$_SESSION['user'] = $nama; 
			}else{$error = 'Input login anda salah';}                    
		}else{$error = 'Nama belum terdaftar, Silahkan daftar dahulu';}
	}else{echo "password salah";}
}
// jika belum login tendang ke login
if(!isset($_SESSION['user'])){header('Location: login.php');} 
// -------------------------------------------------

?>
<!-- body index -->
	<h2>Selamat Datang <?php echo $_SESSION['user']; ?></h2>
	<a href="logout.php">Logout</a>
	 
<!-- debug -->
	<?php // if(isset($_GET["hsess"])){session_destroy();} ?>
	<!-- <a href="?hsess=ok">| Hapus session</a> -->

<?php require_once "view/footer.php"; ?>