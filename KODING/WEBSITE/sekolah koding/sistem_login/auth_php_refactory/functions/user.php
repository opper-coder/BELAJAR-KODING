<?php
// -----
function register_user( $nama, $pass ){                                           // INPUT NAMA, BERSIHKAN KARAKTER, ENCRYPT, QUERY INSERT DB. berhasil? bool
    global $conn;                                                                       // $conn global dibuat sekali, agar bisa query
    $nama = mysqli_real_escape_string($conn, $nama);                                    // bersihkan karakter code
    $pass = mysqli_real_escape_string($conn, $pass);
    $pass = password_hash( $pass, PASSWORD_DEFAULT);                                    // encryption password input
    $queryinsert = "INSERT INTO users (username, password) VALUES ('$nama', '$pass')";  // syntax query input data register ke db
    // variabel = " QUERY database ( field1, field2 )" VALUES ( 'input1','input2' )";
    if( mysqli_query ($conn, $queryinsert) ){                                           // cek query berhasil/tidak(eksekusi query disini)
        // echo 'berhasil';
        return true;                                                                    // bool
        }else{
        // echo 'gagal';
        return false;}                                                                  // bool
    }
// -----
function register_cek_nama($nama){                                                 // CEK NAMA SUDAH ADA? bool
    global $conn;                                                                       // ambil g conn
    $nama = mysqli_real_escape_string($conn, $nama);                                    // sanitize
    $query = "SELECT * FROM users WHERE username = '$nama'";                            // cari di db
    if( $result = mysqli_query( $conn, $query ) ){                                      // execute dan chect db
        if(mysqli_num_rows($result) == 0) return true;                                  // action
        else return false;
    }
}
// -----
function cek_pass($nama, $pass){                                                    // CEK PASSWORD ada? bool
    global $conn;                                                                       // ambil g conn
        $nama = mysqli_real_escape_string($conn, $nama);                                // sanitize
        $pass = mysqli_real_escape_string($conn, $pass); 
        $query = "SELECT password FROM users WHERE username = '$nama'";                 // cari password dari nama di db
        $result = mysqli_query($conn, $query);                                          // eksekusi
        $hash = mysqli_fetch_assoc($result)['password'];                                // ambil pass
    if (password_verify($pass, $hash)) {                                                // urai encrypt. dan cek berhasil?
        // die('berhasil');
        return true;                                                                    // aksi
    } else {
        // die('gagal');
        return false;
    }
}
// -----
function login_cek_nama($nama){                                                     // CEK NAMA ada? bool
    global $conn;
    $nama = mysqli_real_escape_string($conn, $nama);
    $query = "SELECT * FROM users WHERE username = '$nama'";                            // cari nama sesuai input nama
    if( $result = mysqli_query( $conn, $query ) ){
        if(mysqli_num_rows($result) != 0) return true;
        else return false;
    }
}
?>
