<?php

/* input, sanitaize, encrypt, insert db: bool 
----------------------------------------------- */ 
function registerUser( $nama, $pass ){  
  global $conn; // dibuat sekali di init.php, untuk memulai query db
  $nama = mysqli_real_escape_string($conn, $nama); // sanitize
  $pass = mysqli_real_escape_string($conn, $pass); // input pass
  $pass = password_hash($pass, PASSWORD_DEFAULT); // pass encrypt
  // string query input ke db
  $queryinsert = "INSERT INTO users (username, password) VALUES ('$nama', '$pass')";  
  // jalankan query dalam if: bool
  if(mysqli_query($conn, $queryinsert)){                                           
    return true; 
    // else
    return false;
  }
}

/* cek nama: bool 
----------------------------------------------- */ 
function cekNama($name){                                                 
  global $conn;
  $nama = mysqli_real_escape_string($conn, $name); // sanitize
  // cari apakah ada nama di db?
  $query = "SELECT * FROM users WHERE username = '$nama'"; 
  // query dalam if: bool
  if( $result = mysqli_query( $conn, $query ) ){ 
    if(mysqli_num_rows($result) !== 0) 
      return true; 
      return false;
  }
}

/* cek password: bool 
----------------------------------------------- */ 
function cekPassword($name, $password){                                                    
  global $conn;                                                                       
  $nama = mysqli_real_escape_string($conn, $name);                               
  $pass = mysqli_real_escape_string($conn, $password); 
  // cari password dari nama di db
  $query = "SELECT password FROM users WHERE username = '$nama'";                 
  $result = mysqli_query($conn, $query);
  $hash = mysqli_fetch_assoc($result)['password']; // ambil data pass
  // urai encrypt. dan cek berhasil?
  if (password_verify($pass, $hash) == $password) {
  // if ($hash == $pass) { // uji pakai ini dulu:
    setcookie("usernamep", $hash, time() + (86.400*3)); // setcookie password
    return true;
    return false;
    }
}

/* SELESAI 
----------------------------------------------- */ 
?>

