<?php
/*
BUATKAN TEMPLATE FUNCTION UNTUK 
=================================================================== 
BASIC CARA KERJA DB
	- mysqli_connect(server, user, pass, db)
	- mysqli_query(conn, query)
	- mysqli_fetch_assoc(rows)
	- echo(rows[])
	- foreach(data as rows){}
---------
TAMPILKAN
	1. tampilkan data tunggal(where id)
	2. tampilkan data list(select *)
	3. Tampilkan data pagination()
	4. tampilkan data sorting satu parameter (if)
	5. tampilkan data sorting multi parameter (if)
---------
TULIS DATA
	1. add data single
	2. add data array
---------
UPDATE
	1. UPDATE
	2. PATCH
	3. FLAG DELETE
---------
DELETE DATA
	1. hapus permanent
	2. hapus tandai
	3. tabel hapus tandai 
---------

/*
BASIC
===================================================================
contoh basic. tidak di pakai
	1. koneksi db
	2. query bisa FROM WHERE AND OR";
	3. hapus pakai id
	4. atau VALUE (id='', nama='', alamat='',) // yang ini (yang pakai sama dengan) kayak gak bisa yang depan bisa ?????
	5. atau SET (id='', nama='', alamat='',)

	$query = "SELECT * FROM latihan"; 
	$queryhapus = "DELETE FROM latihan WHERE id=1"; 
	$queryinsert = "INSERT INTO latihan VALUES ('','aqil','saiti','islam','sekolah')"; 
	$queryedit = "UPDATE latihan SET ('','','','','') WHERE id=1"; 
	// ---
	$conn = mysqli_connect("localhost","root","","desa_banggai_Db");	
	$result = mysqli_query($conn,"SELECT * FROM mahasiswa");	// query langsung 
	$result = mysqli_query($conn, $query); // query pakai variabel 
	$data = mysqli_fetch_assoc($result); 
	var_dump($data); 
	echo($row[1]); 

penting di ketahui -------------------

ini dari hilman nampilin isi database mysql dg While
ini adalah metode yang faforit untuk nampilin isi array
karena while berguna untuk looping "baris/record"
sedangkan foreach berguna untuk looping "isi record"

	while ( $data = mysqli_fetch_assoc( $result ) ) {
		foreach($data as $dt){
			echo $dt . " ";	
		}echo "<br>";
	}

contoh foeach bersarang --------------

	$periode = [[1,2,3],[4,5,6],[7,8,9,10]];
	foreach ($periode as $per) {
		foreach ($per as $p) {
		echo $p;
	}

USE 
===================================================================
Halaman ini adalah berisi "fungsi CRUD" semua jenis keperluan di daftar isi di atas, 
cara menggunakan:
1. include di halaman yang akan melakukan CRUD
		require_once "functions/db.php";  
		require_once "core/init.php";
2. lalu lakukan call function bersangkutan ada (copas di bawah function bersangkutan dalam comment)

** GET ***********************************
get data single atau multi tergantung query yang diberikan
--------------------------------------- */
function queryGet($query){						                          
  global $conn;
  $result = mysqli_query($conn, $query);
  $rows = [];
  while( $row = mysqli_fetch_assoc($result)){
    $rows[] = $row;
  }
  return $rows;
}

/* query get data
------------------- */
	$query = "SELECT * FROM users";												// all data
	$query2 = "SELECT * FROM users WHERE id=1"; 					// single data
	$query3 = "SELECT * FROM users WHERE alamat='saiti' OR kec='nuhon'"; 		// sort WHERE, OR, AND
	$query4 = "SELECT nama FROM users WHERE alamat='saiti' OR kec='nuhon'"; // field "nama", sort WHERE, OR, AND
	$query5 = "SELECT min(periode) as jumlah FROM kelembagaan";		// jumlah terkecil dari field "periode", dari tabel "kelembagaan"
	$query6 = "SELECT max(periode) as jumlah FROM kelembagaan";		
	$query7 = "SELECT sum(periode) as jumlah FROM kelembagaan";		 
	$query8 = "SELECT avg(periode) as jumlah FROM kelembagaan";		 
	$query9 = "SELECT count(periode) as jumlah FROM kelembagaan";	
	$query10 = "SELECT DISTINCT kota FROM users"; 								// ambil satu saja(kalau ada lebih abaikan) yang di temukan dari field "kota" tabel "users"


/* eksekusi query
------------------- */
	$admin = queryGet($query); 											// query variabel
	$admin2 = queryGet("SELECT * FROM users WHERE id=1");		// query dalam args

	var_dump($admin["nama"]); 											// debug
	echo $admin["nama"]; 														// print
	foreach($admin as $data){echo $data["nama"];} 	// looping  
 

/* get data pagination
--------------------------------------- */
function getPagination($query){						                          

}

/** INSERT *******************************
tambah data dengan array associative dengan jumlah dan structur array dinamis
mungkin dari form $_POST dari sebuah halaman masing form input
return affected: bool, hubungkan dengan notif di bawah

insert data array associative
--------------------------------------- */
function addDataArrAssoc($tabel, $data){
	global $conn;
	foreach ($data as $key => $value) {
		$k[]=$key;
		$v[]="'".$value."'";
	}
	$k = implode(",",$k);
	$v = implode(",",$v);

	// $query = "INSERT INTO users ($k) VALUES ($v)";
	$query = "INSERT INTO $tabel ($k) VALUES ($v)";
	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}

/* call function insert
-----------------------
$data = $_POST; 																				// misal dari form post bisa juga dari $_GET, atau
$arrayAssoc1 = ['id'=>'','kode'=>'a16','nama'=>'aqil'];	// coba praktekan apakah id harus dikirim kosong atau tidak ??? sepertinya tidak
$addUser = addDataArrAssoc("namaTabel", $arrAssocku);		// return affected: bool
var_dump($addUser);																			// bool di gunakan untuk notifikasi
*/

/** EDIT ********************************

cara pakai: biasanya data($arr) akan di edit dg array assoc dari form edit
arrayassoc harus identik dengan field db
queri edit data wajib ada identifier berupa id (WHERE id)
?. apakah id juga di edit atau tidak mungkin kalau pakai PATCH tidak harus praktek
?. tinggal praktek hasilnya
--------------------------------------- */
function editDataArrAssc($tabel, $arr, $id){
	global $conn;
	foreach ($arr as $key => $value) {
		$k[]=$key."=";
		$v[]="'".$value."'".", ";
	}
	for ($i=0;$i<count($k);$i++) {
		$set[]=$k[$i].$v[$i];
	}
	$set = substr(implode($set), 0, -2);
	$query = "UPDATE $tabel SET $set WHERE id = $id ";
	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}

/* call function edit data
-----------------------
$rowData = ['kode'=>'a20', 'nama'=>'aqil']; 
editDataArrAssc("namaTabel", $rowData, 20);
*/

/** EDIT DELETE **************************

semua tabel harus memiliki flag delete, dorman, active, mungkin  pakai patch
--------------------------------------- */
function editDataDeleteLabel($tabel, $arr, $id){
	// ???
}
/* call function edit delete
-----------------------
	// ???
*/

/** DELETE *******************************
- lakukan dengan id 
- return affected: bool untuk notifikasi
--------------------------------------- */
function deleteData($tabel, $id){
	global $conn;
	$query = "DELETE FROM $tabel WHERE id=$id";
	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}

/* call function delete
-----------------------
cara hapus data  biasanya id dikirim melalui GET, lalu GET di ambil untuk jalankan query
	<a href="index.php?id=$id">hapus</a>
belum selesai ??????
*/

/*
DOKUMENTASI TEMPLATE
modal di PHP
	- accordion juga bisa kayaknya
	- tab juga bisa kayaknya
table
	- data list
	- data tabel
	- data tabel pagination
	- search
	- filter
notifikasi
	- notifikasi input submit 
	- notifikasi edit 
	- notifikasi edit delete 
	- notifikasi delete 
utils
	- hitung jumlah rows
	- hitung jumlah harga filter
	- tampilkan tanggal, hari, bulan, tahun
	- hitung tanggal
	- login pake cache
	- tanggal indonesia


<!-- modal di php 
----------------------------------------------------------- -->
*/ 

/*
jalankan toogle() di css display = pada modal
trigger open dan close tinggal kirim $_GET[modal]
*/ 

function toggle(){
	if(!isset($_GET["modal"]) || $_GET["modal"] == "none" ){
		return "none";
	}else{
		return "block";
	}
}
?>
<style>
	.modal{
		position: fixed;
		background-color: #00000070;
		width: 100%;
		height: 100%;
	}
	.modalContent{
		background-color: white; 
    width: 60vw;
    margin: 16vh auto 0;
    position: relative;
	}
</style>

<div class="modal" style="display: <?= toggle(); ?>">
	<div class="modalContent">	
		<b>isi modal</b><br>
		<hr>	
		<a href="">Simpan | </a>
		<a href="?modal=none">Tutup</a>
</div>
</div>
<a href="?modal=block">klik modal</a>

<!-- notif error
----------------------------------------------------------- -->	



<?php 

// <> ----<> ----<> ----<> ----<> ----<> ----<> ----<> ----<> ----<> ----<> ----<>






// <> ----<> ----<> ----<> ----<> ----<> ----<> ----<> ----<> ----<> ----<> ----<>


/*
cara insert data
jalankan menggunakan if isset tombol submit
atau jalankan dalam function{} langsung querynya
biasanya di jalankan dengan notifikasinya berhasil tidaknya data masuk dengan mysqli_affected_rows($conn); return 1 atau -1 
biasanya pakai if > 0 sih
tentu buatkan formnya terlebih dulu dan beri nama tiap field nya
lalu tangkap tiap fieldnya denga variabel yang berisi GET atau POST

*/ 

?>
