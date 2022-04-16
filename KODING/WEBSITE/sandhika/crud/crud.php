<?php 



/* RINGKASAN FITUR YANG ADA DI SINI
query koneksi
- fungsi select data return affected siap di bikin alert
- fungsi select data tinggal di looping
- fungsi insert data
- fungsi ubah data 
- fungsi hapus data
- dll belum di tulis jelaskan
*/



$conn = mysqli_connect("localhost","root","","desa_banggai");
// ------------------ query
$query = "SELECT * FROM latihan";
$queryhapus = "DELETE FROM latihan WHERE id=1";
$queryinsert = "INSERT INTO latihan VALUES ('','aqil','saiti','islam','sekolah')"; //atau VALUE (id='', nama='', alamat='', agama='', pendidikan'') // yang ini (yang pakai sama dengan) kayak gak bisa yang depan bisa
$queryedit = "UPDATE latihan SET ('','','','','') WHERE id=1"; //atau SET (id='', nama='', alamat='', agama='', pendidikan'')
// --------------------- TEMPLAT tinggal kopi ---------------------
		// $query = "SELECT * FROM WHERE AND OR";
		// $result = mysqli_query($conn, $query);
		// $data = mysqli_fetch_assoc($result);
		// var_dump($data);
// --------------------- TEMPLAT Function query tinggal kopi ---------------------
// tinggal umpankan querynya, contoh:
// query("SELECT * FROM latihan WHERE id=1");
function query($query){
	global $conn;
	$result = mysqli_query($conn, $query);
	$barisdata = [];
	while ($data = mysqli_fetch_assoc($result)) {
		$barisdata = $data;
	}
	return $barisdata;
}
// --------------------- TEMPLAT Function query siap di while ---------------------
// tinggal umpankan querynya, contoh:
// query("SELECT * FROM latihan WHERE id=1");

function queryulang($query){
	global $conn;
	$result = mysqli_query($conn, $query);
	return $result;
}
// --------------------- TEMPLAT Function INSERT DATA tinggal kopi ---------------------
$data = $_POST; 		// data yang di ambil dari form yang dibuat sebelunya dari function tekan tombol
// panggil functionya:
// tambahdata($_POST);
function tambahdata($post){
	global $conn;
	$data1 = $post[];	// isikan index post dg key post yang dikirim
	$data2 = $post[];
	$data3 = $post[];
	$data4 = $post[];
	$data5 = $post[];
						// insertkan sesuai dengan jumlah field di mysql dan urutkan sesuai index
						// id harus dikosongkan meski di insertkan
	$query = "INSERT INTO latihan 
			  VALUES (
				'',
				$data1,
				$data2,
				$data3,
				$data4,
				$data5
			  	)";
	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}

// atau ini yang lebih jelas jalan

$data=['','a10','pagar'];			// cocok untuk data yang sudah tetap jumlah field nya
function tambahdata($data){
	global $conn;
		$data1 = $data[1];
		$data2 = $data[2];
		$data3 = $data[3];
	$query = "INSERT INTO proyek VALUES ('', '$data1', '$data2')"; // id kosongkan
	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}
tambahdata($data);
var_dump(mysqli_affected_rows($conn));

/*
tambah data dengan array associative
caranya kita punya array assoc mungkin dari form $_POST dsb
INI SIAP PAKAI UNTUK INSERT DATA KE DB DARI FORM
cocok untuk database yang jumlah fieldnya tidak di pastikan 
- alias tergantung arrayAssoc nya
*/

$arrAssocku=['kode'=>'a16','nama'=>'sumur16'];
function tambahDataDgArrayAssoc($data){
	global $conn;
	foreach ($data as $key => $value) {
		$k[]=$key;
		$v[]="'".$value."'";
	}
	$k = implode(",",$k);
	$v = implode(",",$v);

	$query = "INSERT INTO proyek ($k)
			 VALUES ($v)";
	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}
tambahDataDgArrayAssoc($arrAssocku);

// --------------------- TEMPLAT Function UBAH DATA tinggal kopi ---------------------
function ubahdata($post, $id){
	global $conn;
	$data1 = $post["a"];
	$data2 = $post["b"];
	$data3 = $post["c"];
	$data4 = $post["d"];
	$data5 = $post["e"];	
	$query = "UPDATE latihan SET  
				field1 = '$data1',
				field2 = '$data2',
				field3 = '$data3',
				field4 = '$data4',
				field5 = '$data5'
			  WHERE id = $id
			  ";	// queri edit data wajib ada identifier berupa id (WHERE id)
	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}
// --------------------- TEMPLAT Function UBAH DATA tinggal kopi ---------------------
function hapusdata($id){
	global $conn;
							// hapus data harus ada identifier nya berupa id (WHERE id)
	$query = "DELETE FROM latihan WHERE id=$id";
	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}
// --------------------- function tekan tombol tambah data
function tekantbltambah($data){
	if( isset($_POST['submit']) ){
	 	tambahdata($post);
	}
}
// --------------------- function tekan tombol tambah data
function tekantbledit($data){
	if( isset($_POST['submit']) ){
	 	ubahdata($post);
	}
}
// --------------------- function tekan tombol tambah data
function tekantblhapus($data){
	if( isset($_POST['submit']) ){
	 	hapusdata($post);
	}
}
// --------------------- TEMPLAT notif tambah data ---------------------	
function alerttambahdata(){
	// cek tombol:
	if( isset($_POST["submit"]) ){
		// cek data berubah/tidak
		if( tambahdata($_POST) > 0 ){
			echo "data berhasil di tambahkan";
		} 
	}
}
// --------------------- TEMPLAT notif ubah data ---------------------	
function alertubahdata(){
	// cek tombol:
	if( isset($_POST["submit"]) ){
		// cek data berubah/tidak
		if( ubahdata($_POST) > 0 ){
			echo "
				<script>
	 				alert('data berhasil di ubah!');
	 				document.location.href = 'index.php';
	 			</script>
			";
		} 
	}
}// --------------------- TEMPLAT notif ubah data ---------------------
function alerthapusdata(){
	// cek tombol:
	if( isset($_POST["submit"]) ){
		// cek data berubah/tidak
		if( hapusdata($_POST) > 0 ){
			echo "data berhasil dihapus ";
		} 
	}
}
// --------------------- CATATAN TAMBAHAN YANG DARI BELAJAR
// cara insert data
// jalankan menggunakan if isset tombol submit
// atau jalankan dalam function{} langsung querynya
// biasanya di jalankan dengan notifikasinya berhasil tidaknya data masuk dengan mysqli_affected_rows($conn); return 1 atau -1 
// biasanya pakai if > 0 sih
// tentu buatkan formnya terlebih dulu dan beri nama tiap field nya
// lalu tangkap tiap fieldnya denga variabel yang berisi GET atau POST

$satu = $_GET['satu'];
$dua = $_GET['dua'];
$tiga = $_GET['tiga'];

if(isset($_GET['nametombol'])){
	$query = "INSERT INTO latihan VALUES ('','$satu','$dua','$tiga')"; // VALUES sesuaikan dengan urutan index database
	mysqli_query($conn, $query);
}

// cara hapus data 
// biasanya id dikirim melalui GET lalu GET di ambil untuk jalankan query





 // ----------------- TEMPLATE CRUD april 2021 ----- sampai end di bawah
/* -- query */
function query($query){
	global $conn;
	$result = mysqli_query($conn, $query);
	$barisdata = [];
	while ($data = mysqli_fetch_assoc($result)) {
		$barisdata = $data;
	}
	return $barisdata;
}
// query("SELECT * FROM latihan WHERE id=1");

/* -- tambah data */
function tambahDataDgArrayAssoc($data){
	global $conn;
	foreach ($data as $key => $value) {
		$k[]=$key;
		$v[]="'".$value."'";
	}
	$k = implode(",",$k);
	$v = implode(",",$v);

	$query = "INSERT INTO proyek ($k)
			 VALUES ($v)";
	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}
// $dataku=['kode'=>'a17','nama'=>'sumur17']; 
// tambahDataDgArrayAssoc($dataku);
// cara pakai: biasanya data akan di isi dengan array assoc dari form

/* -- edit data */
function ubahDataDgArrayAssoc($arr, $id){
	global $conn;
	// pecah isi array menjadi gabungan string
	foreach ($arr as $key => $value) {
		$k[]=$key."=";
		$v[]="'".$value."'".", ";
	}
	// gabungkan array jadi sebuah string
	for ($i=0;$i<count($k);$i++) {
		$set[]=$k[$i].$v[$i];
	}
	// hapus bagian koma terakhir
	$set = substr(implode($set), 0, -2);

	$query = "UPDATE proyek SET $set WHERE id = $id ";
	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}

// $arrayku = ['kode'=>'a20', 'nama'=>'sumur5'];
// ubahDataDgArrayAssoc($arrayku, 20);
// cara pakai: biasanya data akan di edit dengan array assoc dari form edit

/* -- delete data */
function hapusdata($id){
	global $conn;
	$query = "DELETE FROM proyek WHERE id=$id";
	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}
//------------------------------- end CRUD

 ?>