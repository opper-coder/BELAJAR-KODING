<!-- Cara Import data Excel (.CSV) ke Mysql yang ke 2
Dengan membuat file uploader.php yang berguna untuk mengimport data csv langsung ke mysql, copy code php berikut dan simpan di htdocs folder xampp anda : -->
<html>
<html>
<head>
<title>Upload CSV FILE</title>
</head>
<body>
<?php
$host='localhost'; //server
$username='root'; //id
$password=''; //password
$database='sectorcode'; //Database anda
mysql_connect($host,$username,$password);
mysql_select_db($database);
if (isset($_POST['submit'])) {
//Script Upload File..
    if (is_uploaded_file($_FILES['filename']['tmp_name'])) {
        echo "<h1>" . "File ". $_FILES['filename']['name'] ." Berhasil di Upload" . "</h1>";
        echo "<h2>Menampilkan Hasil Upload:</h2>";
        readfile($_FILES['filename']['tmp_name']);
    }
    //Import uploaded file to Database, Letakan dibawah sini..
    $handle = fopen($_FILES['filename']['tmp_name'], "r");
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $import="INSERT into kompetensidasar (id,idkompetensi,kodepelajaran,kodekd,kelas,namakd,semester,tipenilai,materipokok,deskripsi) values('$data[0]','$data[1]','$data[2]','$data[3]','$data[4]','$data[5]','$data[6]','$data[7]','$data[8]','$data[9]')"; //data array sesuaikan dengan jumlah kolom pada CSV anda mulai dari “0” bukan “1”
        mysql_query($import) or die(mysql_error()); //Melakukan Import
    }
    fclose($handle); //Menutup CSV file
    echo "<br><strong>Import data selesai.</strong>";
}else { //Jika belum menekan tombol submit, form dibawah akan muncul.. ?>
<!-- Form Untuk Upload File CSV-->
   Silahkan masukan file csv yang ingin diupload<br /> 
   <form enctype='multipart/form-data' action='' method='post'>
    Cari CSV File anda:<br />
<input type='file' name='filename' size='100'>
   <input type='submit' name='submit' value='Upload'></form>
<?php } mysql_close(); //Menutup koneksi SQL?>
</body>
</html>
simpan di folder htdocs dan beri nama uploader.php, buka alamat http://localhost/uploader.php dan import file exel (csv) dan lihat hasilnya,