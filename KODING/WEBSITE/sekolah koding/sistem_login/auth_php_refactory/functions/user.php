<?php
// -----
function register_user( $nama, $pass ){
    global $conn;
    $nama = mysqli_real_escape_string($conn, $nama);
    $pass = mysqli_real_escape_string($conn, $pass);
    $pass = password_hash( $pass, PASSWORD_DEFAULT);

    $queryinsert = "INSERT INTO users (username, password) VALUES ('$nama', '$pass')";
    // variabel = " QUERY database ( field1, field2 )" VALUES ( 'input1','input2' )";

    if( mysqli_query ($conn, $queryinsert) ){
        // echo 'berhasil';
        return true;
        }else{
        // echo 'gagal';
        return false;}
    }
// -----
function register_cek_nama($nama){
    global $conn;
    $nama = mysqli_real_escape_string($conn, $nama);

    $query = "SELECT * FROM users WHERE username = '$nama'";
    if( $result = mysqli_query( $conn, $query ) ){
        if(mysqli_num_rows($result) == 0) return true;
        else return false;
    }
}
// -----
function cek_pass($nama, $pass){
    global $conn;
        $nama = mysqli_real_escape_string($conn, $nama);
        $pass = mysqli_real_escape_string($conn, $pass);
        
        $query = "SELECT password FROM users WHERE username = '$nama'";
        $result = mysqli_query($conn, $query);
        $hash = mysqli_fetch_assoc($result)['password'];

    if (password_verify($pass, $hash)) {
        // die('berhasil');
        return true;
    } else {
        // die('gagal');
        return false;
    }
}
// -----
function login_cek_nama($nama){
    global $conn;
    $nama = mysqli_real_escape_string($conn, $nama);

    $query = "SELECT * FROM users WHERE username = '$nama'";

    if( $result = mysqli_query( $conn, $query ) ){
        if(mysqli_num_rows($result) != 0) return true;
        else return false;
    }
}
?>
