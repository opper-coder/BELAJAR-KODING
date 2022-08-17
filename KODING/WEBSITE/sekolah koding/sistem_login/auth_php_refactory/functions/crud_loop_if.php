<?php
/*
BUATKAN TEMPLAT FUNCTION UNTUK 
------------------
TAMPILKAN
1. tampilkan data tunggal
2. tampilkan data list
3. Tampilkan data pagination
4. tampilkan data sorting satu parameter (if)
5. tampilkan data sorting multi parameter (if)
------------------
TULIS DATA
1. 
2. 
------------------
UPDATE
1. 
2. 
3. 
------------------
DELETE DATA
1. hapus permanent
2. hapus tandai
3. tabel hapus tandai 
--------------------------------------------------------------
*/
$conn = mysqli_connect("localhost","root","","belajardb");  // koneksi ke DB
// ------------------------------------ BASIC AMBIL DATA FIELD
$result = mysqli_query($conn,"SELECT * FROM mahasiswa");	  // eksekusi(syntax query)
$row = mysqli_fetch_row($result);				                    // ambil data record (bisa di looping semua record)
var_dump($row[2]);						                              // ambil data pada field row 
echo($row[1]);    						                              // sudah bisa di ambil datanya
// ------------------------------------ BASIC AMBIL DATA FIELD FUNCTION
$result = mysqli_query($conn, "SELECT * FROM mahasiswa");	  // eksekusi(syntax query)
$row = mysqli_fetch_row($result);				                    // ambil data record (bisa di looping semua record)
var_dump($row[2]);						                              // ambil data pada field row 
echo($row[1]);    						                              // sudah bisa di ambil datanya
// --------------------------- BASIC AMBIL DATA RECORD dg LOOP
// buat fungsi query dan fetching agar tingal panggil di halaman index
function query($query){						                          // fungsi query
    global $conn;						                                // g conn
    $result = mysqli_query($conn, $query);			            // eksekusi query(dari argument)
    $rows = [];							                                // var kosong
    while( $row = mysqli_fetch_assoc($result)){			        // looping record(ambil data row)
        $rows[] = $row;						                          // hasil bungkus ke variabel
    }
    return $rows;						                                // rows
}
// --------------------------- BASIC AMBIL DATA RECORD dg LOOP
// masih perlu di uji semua
?>
