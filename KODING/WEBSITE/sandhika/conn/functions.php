<?php
$conn = mysqli_connect("localhost","root","","belajardb");  // buat fungsi query dan fetching agar tingal panggil di halaman index
function query($query){     // bikin fungsi query
    global $conn;						                    // pakai global $conn
    $result = mysqli_query($conn, $query);			        // lakukan queri biasa dg para meter ambi dari  argumen func
    $rows = [];							                    // siapkan var rows arai kosong di  luar while uuntk di isi dalam while
    while( $row = mysqli_fetch_assoc($result)){			    // while kan array (yg di dapat dari vetching row)
        $rows[] = $row;						                // isi array rows yg di siapkan dengan pengulangan (row berisi array vetching)
    }
    return $rows;						                    // kembalikan rows
}
?>
