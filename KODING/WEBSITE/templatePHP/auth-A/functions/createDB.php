<?php 

$dbhost    = "localhost";
$dbuser    = "root";
$dbpass	   = "";
// $dbname    = "boxitlt";
$conn = mysqli_connect($dbhost, $dbuser, $dbpass) or DIE(mysqli_error());

function createTableBoxits(){

	$sql = "CREATE DATABASE boxitLite";
	if (mysqli_query($conn, $sql)) {
	  echo "Database created successfully <br>";
	} else {
	  echo "Error creating database: " . mysqli_error($conn);
	}
// --- 
	$sql1 = "CREATE TABLE pppoe (
		id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
		firstname VARCHAR(30) NOT NULL,
		lastname VARCHAR(30) NOT NULL,
		email VARCHAR(50),
		reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
	)";
	if (mysqli_query($conn, $sql1)) {
	  echo "Table PPPoE created successfully <br>";
	} else {
	  echo "Error creating table: " . mysqli_error($conn);
	}
// ---
	$sql2 = "CREATE TABLE pppoe (
		id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
		firstname VARCHAR(30) NOT NULL,
		lastname VARCHAR(30) NOT NULL,
		email VARCHAR(50),
		reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
	)";
	if (mysqli_query($conn, $sql2)) {
	  echo "Table PPPoE created successfully <br>";
	} else {
	  echo "Error creating table: " . mysqli_error($conn);
	}
// ---

	// tabel lain nya silahkan
	mysqli_close($conn);
}
// ------------------------------------
// cara membuat akses arahkan browser kesini, lalu enable kan dengan TRUE dibawah
if (false) {
	createTableBoxits();
}else{
	echo "Silahkan enable kan membuat database dengan TRUE";
}

 ?>