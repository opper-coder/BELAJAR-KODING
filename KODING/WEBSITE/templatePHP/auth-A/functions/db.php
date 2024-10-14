<?php

$dbhost    	= "localhost";
$dbuser    	= "root";
$dbpass	   	= "";
$dbname    	= "boxitlt";
$conn 		= mysqli_connect($dbhost, $dbuser, $dbpass, $dbname) or DIE(mysqli_error());

/*
DAFTAR FUNGSI
--------------------------------------
	- create database dan tabel lihat di createDB
	- queryGet()				-> return rows, ambil data bisa di tampilkan sort: id, where, and, or, distinc kirim query
	- addDataArrAssoc()	-> return bool, add pakai array associative
	- editDataArrAssc()	-> return bool, edit semua field,
	- editDataPatch()		-> return bool, edit satu field saja
	- deleteData()			-> return bool, delete id
	- deleteDataFilter()-> return bool, delete filter kategori
	- agregasiData()		-> return hasil, sum, avg, count, min, max
// belum di kerjakan -----------------
	- queryGetSort()		-> 
	- queryGetOrder()		-> 
	- tanggalIndo() 		-> tampilkan tanggal indonesia
	- calcDate() 				-> return hasil tanggal
	- calcDateCount() 	-> return hasil berapa hari
	- cek di github : website/kumpulanlibrariphp/ utility 
	- .htaccess
	- modal:  edit input
shorthand: if, for, foreach, function, dll. 
	<?php for : ?>
	<?php endfor; ?>
	---
	<?php if(): ?>
	<?php else : ?>
	<?php endif; ?>
	---
	<?php $ada = true?"halo":"goodbye"; ?>
	<?php echo $ada; ?>
*/

/* CRUD BASIC
AMBIL DATA MULTI
get data single atau multi, copas semua query tinggal coba running 
$query1 = "SELECT * FROM users";												
$query2 = "SELECT * FROM users WHERE id=1"; 					
$query3 = "SELECT * FROM users WHERE alamat='saiti' OR kec='nuhon'"; 		
$query4 = "SELECT nama FROM users WHERE alamat='saiti' OR kec='nuhon'"; 
$query5 = "SELECT DISTINCT kota FROM users";
--------------------------------------- */
// $result=queryGet($query);					// hasilkan array
// foreach($result as $col => $row){rowtabel} 	// looping row data
function queryGet($query){						                          
	global $conn;
	$result = mysqli_query($conn, $query);
	$rows = [];
	while( $row = mysqli_fetch_assoc($result)){
	$rows[] = $row;
	}
	return $rows;
}

/* AMBIL DATA SINGLE
get data single atau multi, copas semua query tinggal coba running
basic: 
	$query = "SELECT password FROM users WHERE username = 'izza'";                 
	$result = mysqli_query($conn, $query);
	$pass = mysqli_fetch_assoc($result);
	echo $pass['password']; 
--------------------------------------- */
// queryGetOne("users","password","username","helki");
function queryGetOne($tabel, $field, $filterKey, $filterVal){
  	global $conn;	
	$query = "SELECT $field FROM $tabel WHERE $filterKey = '$filterVal'";                 
	$result = mysqli_query($conn, $query);
	$pass = mysqli_fetch_assoc($result);
	return $pass[$field];
}

/* INSERT
basic:
	$sql = "INSERT INTO users (username, flag) VALUES ('aqil', 'user')";
	mysqli_query($conn, $sql);
--------------------------------------- */
// $rowData = ['username'=>'maulana', 'user_id'=>'a20', 'type'=>'user biasa']; 
// addDataArrAssoc("users", $rowData);
function addDataArrAssoc($tabel, $dataArrayAssoc){
	global $conn;
	foreach ($dataArrayAssoc as $key => $value) {
		$k[]=$key;
		$v[]="'".$value."'";
	}
	$k = implode(",",$k);
	$v = implode(",",$v);

	$query = "INSERT INTO $tabel ($k) VALUES ($v)";
	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}

/* EDIT UPDATE
--------------------------------------- */
// $rowData = ['user_id'=>'a20', 'name'=>'aqil', 'type'=>'admin']; 
// editDataArrAssc("users", $rowData, 7);
function editDataArrAssc($tabel, $dataArrayAssoc, $id){
	global $conn;
	foreach ($dataArrayAssoc as $key => $value) {
		$k[]=$key."=";
		$v[]="'".$value."'".", ";
	}
	for ($i=0;$i<count($k);$i++) {
		$set[]=$k[$i].$v[$i];
	}
	$set = substr(implode($set), 0, -2);
	$query = "UPDATE $tabel SET $set WHERE id=$id ";
	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}

/* EDIT FIELD (PATCH) - (bisa untuk flag delete) 
--------------------------------------- */
// editFieldPatch("users", "flag", "existing", 9);
function editField($tabel, $field, $patch, $id){
	global $conn;
	$query = "UPDATE $tabel SET $field='$patch' WHERE id=$id ";
	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}

/* DELETE
--------------------------------------- */
// deleteData("users", 9);
function deleteData($tabel, $id){
	global $conn;
	$query = "DELETE FROM $tabel WHERE id=$id";
	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}

/* DELETE FLAG (sort)
--------------------------------------- */
// deleteDataFilter("users", "exist");
function deleteDataFilter($tabel, $filter){
	global $conn;
	$query = "DELETE FROM $tabel WHERE flag='$filter'";
	mysqli_query($conn, $query);
	return mysqli_affected_rows($conn);
}

/* AGREGATION 
--------------------------------------- */
// agregasiData("users", "id", "count", "flag", "deleted");
function agregasiData($tabel, $field, $agregasi, $flag, $filter){
	global $conn;
	switch ($agregasi) {
		case "sum":
			$sql = "SELECT SUM($field) AS agregasi FROM $tabel WHERE $flag='$filter'" ;
			break;
		case "avg":
			$sql = "SELECT AVG($field) AS agregasi FROM $tabel WHERE $flag='$filter'";
			break;
		case "count":
			$sql = "SELECT COUNT($field) AS agregasi FROM $tabel WHERE $flag='$filter'";
			break;
		case "min":
			$sql = "SELECT MIN($field) AS agregasi FROM $tabel WHERE $flag='$filter'";
			break;
		case "max":
			$sql = "SELECT MAX($field) AS agregasi FROM $tabel WHERE $flag='$filter'";
			break;
		default:
			echo "agregasi salah";
			break;
		}
	$result = mysqli_query($conn, $sql);
	$row = mysqli_fetch_assoc($result);
		if ($result) {
		    return $row['agregasi'];
		} 
		else {
		    return "Error: " . mysqli_error($conn);
		}
	}
	
/* END  
--------------------------------------- */
?> 