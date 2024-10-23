<?php 
/*
catatan umum saja 
fungsi yang sering saya perlukan di dalam membuat aplikasi adalah
(template sendiri aja)

fungsi database
	- fungsi crud
	- notifikasi crud(alert dll)
fungsi untuk login
	- periksa nama daftar dan login
	- periksa password login 
	- keamanan, hash, escape dll
	- redirect, htacces dll
*/


// bikin array kosong
$a = [];

// isi array biasa
$a[] = 5;

// isi array menggunakan looping
for ($i=0; $i < 5; $i++) { 
	$a[]=$i;
}





				// -----array numeric
				$aqil = ['satu, ', 'dua, ', 'tiga'];

				$aqil2 = [ ['satu2','satu22'],['dua2','dua22'],['tiga3','tiga33'] ];

				// -----array assoc
				$iza = [ 
					'keypertama'=>'satux, ',
					'keykedua'=>'duax, ', 
					'keyketiga'=>'tigax, '];

 				$iza2 = [ 
 					[
 						'keypertama'	=>'satuxx1, ',
					 	'keydua' 		=>'satuxx1, ' 
					], 
 					[
 						'keypertama'	=>'satuxx2, ',
					 	'keydua' 		=>'satuxx2, ' 
					], 
 					[
 						'keypertama'	=>'satuxx3, ',
					 	'keydua' 		=>'satuxx3, ' 
					 ] 
 				];

 ?>

<?php
				// foreach ($aqil as $a) { 
				// 	echo "$a"; }	
				// -----
				// echo "$aqil[1]";
				// // -----
				// foreach ($aqil2[2] as $a) { 
				// 	echo "$a"; }
				// // -----
				// echo $aqil2[1][1];
				
				// var_dump($aqil2);
				// print_r($aqil2[1]);
				// print_r($aqil2[1][1]);

// -----
				// foreach ($iza as $a) { 
				// 	echo "$a"; }
				// // -----
				// echo "$iza[keykedua]";
				// // -----
				// foreach ($iza2[0] as $a) { 
				// 	echo "$a"; }
				// // -----
				// echo $iza2[0]['keydua'];

				// print_r($iza2[1]['keydua']);




				// ada kejanggalan saat echo array assoc bersarang keynya g pakai kutip: // echo $iza2[0]['keydua'];
				// beda dengan kalau tidak bersarang tak harus pakai kutip: // echo "$iza[keykedua]";
				// perhatikan cara penempatan kutip karena memeng nilai keduanya jadi string
				// tapi kalau keduanya tidak bisa di tukarkan cara menggunakan kutip nya
?>


<!-- array bersarang dari sandika -->


<?php  
$mahasiswa = [										
		[
			"id" => "10",
			"nama" => "sandika",
			"alamat" => "bandung",
			"jurusan" => "komputer"
		],
		[
			"id" => "11",
			"nama" => "teguh hp",
			"alamat" => "banggai",
			"jurusan" => "perbankan"
		],
		[
			"id" => "12",
			"nama" => "mahmud",
			"alamat" => "malang",
			"jurusan" => "wirausaha"
		]
	];

foreach ($mahasiswa as $mhs):?>	
<ul>
	<li><?= $mhs["id"]; ?></li>
	<li><?= $mhs["nama"]; ?></li>
	<li><?= $mhs["alamat"]; ?></li>
	<li><?= $mhs["jurusan"]; ?></li>
</ul>
<?php endforeach; ?> -->

<?php  

// tampilkan array pakai function

	$array1 = ['haloo ', 'satu ', 'dua ', 'tiga ', 'empat '];


function queryarray($array){
	$array5=[];
	foreach ($array as $k => $v) {
	 	$array5[]=$v;
	 } 
	 return $array5;
}
	

$data = queryarray($array1);
echo $data[2];

?>

<?php 
 /*
 dari chrome:
 ada beberapa hal yang perlu di ketahui dengan array
*/

$arrayku 	= [ "satu", "dua", "tiga"];
$arrayku2	= [ "kolom1"=>"satu","kolom2"=>"dua","kolom3"=>"tiga"];
 
 // hitung isi array
 count($arrayku); //atau
 sizeof($arrayku);

 // gabung value array jadi string
 join();

 // ambil semua key pada array
 $key = array_keys($arrayku);		// ambil semua key jadi array num

 // ambil semua value pada array
 $value = array_values($arrayku);	// ambil semua value jadi array num

 // ubah semua value pada array 	// 
 
 // apakah ada value ini?
 in_array('satu', $arrayku); 		// bool
 
 // apakah ada key ini?
 key_exists('kolom1', $arrayku); 	// bool

 // potong isi kata dalam 
 stristr();		// belum
 strstr();		// belum
 
 // array sort value
 asort($arrayku2);					// array sort

 // array sort reverse value
 arsort($arrayku2);					// array reverse sort

 // array sort key
 ksort($arrayku);					// key sort

 // array sort reverse key
 krsort($arrayku);					// key reverse sort

 // gabungkan array 
 array_merge($arrayku, $arrayku2);	// gabung jadi satu sesuai urutanya masing2

 // implode sama dengan merge ini
 implode($arrayku);

 // explode pecah kata jadi array / ada contoh dibawah
 explode($kalimat);

 // cari key/index ini dg value
 array_search('satu', $arrayku2); 	// hasilnya nama key

 // hapus elemen array sesui key
 unset($arrayku[1]);
 unset($arrayku["kolom1"]);

 // hapus array pertama
 array_shift($arrayku);				// hapus value pertama array

 // tambah array pertama 
 array_unshift($arrayku, "satu", "nol"); 	// untuk nomerik saja/tidak bisa assoc (pake merge) 

 // tambah array terakhir
 array_push($arrayku, "empat", "lima"); 	// untuk nomerik saja/tidak bisa assoc (pake merge)

 // hapus array terakhir
 array_pop($arrayku);						// numerik dan assoc

 // urutkan terbalik berdasar perbedaan huruf value
 array_reverse($arrayku2);			// contoh : kolom3 kolom2 kolom1

 // cari min max
 min($arrayku);						// cari min dari array integer
 max($arrayku);    					// cari min dari array integer
 average();							// cari info
 mid();								// cari info




 // ============ string ============

// cara potong string huruf terakhir/ awal
 substr("aqil", 0, -1);

// cara hapus/replace sbagian string
 substr_replace("kataini", "digantikan", $kata);

// ubah int ke string
 strval(123);
 
// membuang huruf tertentu (string x)
preg_replace(["/\D/"],"","11112222333344445555x");
 ?>


<?php  
// =================penting di ketahui======================

// ini dari hilman nampilin isi database mysql dg While
// ini adalah metode yang faforit untuk nampilin isi array
// karena while berguna untuk looping "baris/record"
// sedangkan foreach berguna untuk looping "isi record"

// =================penting di ketahui======================

// while ( $data = mysqli_fetch_assoc( $result ) ) {
// 	foreach ($data as $a) {
// 	 echo $a . " ";	
// 	}echo "<br>";
// }

// =========================================================

// contoh foeach bersarang
// $periode = [[1,2,3],[4,5,6],[7,8,9,10]];

foreach ($periode as $per) {
	foreach ($per as $p) {
	echo $p;
	}

?>


<?php 

					// METODE FUNCTION QUERY
$conn = mysqli_connect ("localhost", "root", "", "desa_banggai") or DIE ( mysqli_error() );
 
 //-----------------------
echo "<br>";

function querycell($querycell){
	global $conn;
	$result = mysqli_query($conn, $querycell);
	$row = mysqli_fetch_assoc($result);
	return $row;
}

$cellkelembagaan = querycell("SELECT * FROM kelembagaan WHERE desa='saiti'");
echo $cellkelembagaan["alamat"];

//-----------------------
echo "<br>"; 


					// PERULANGAN FOREACH DASAR DAN BERSARANG
$periode = [[1,2,3],[4,5,6],[7,8,9,10]];

foreach ($periode as $per) {
	foreach ($per as $p) {
	echo $p;
		}
	}
					// PERULANGAN WHILE tampilkan row ber ulang


echo "<br>"; 

$query2 = "SELECT * FROM kelembagaan";
$cellkelembagaan2 = mysqli_query($conn, $query2);

// while($row = mysqli_fetch_assoc($cellkelembagaan2) ){
//         echo $row["nama"] ."<br>"; 
//     }

					// PERULANGAN FOREACH tampilkan 'isi' row ber ulang



echo "<br>"; 

$data =mysqli_fetch_assoc($cellkelembagaan2);

foreach ($data as $kel) {
		echo "$kel ";
}


					// AGREGASI MY SQL PHP
$query10 = "SELECT min(periode) as jumlah FROM kelembagaan";
$query11 = "SELECT max(periode) as jumlah FROM kelembagaan";
$query12 = "SELECT sum(periode) as jumlah FROM kelembagaan";
$query13 = "SELECT avg(periode) as jumlah FROM kelembagaan";
$query14 = "SELECT count(periode) as jumlah FROM kelembagaan";

$result3 = mysqli_query($conn, $query10);
$data = mysqli_fetch_assoc($result3);

echo $data["jumlah"];


					// FUNGSI DISTINCT 
// yaitu adalah mencegah duplikasi (tampil lebih dari satu kali) jika ada duplikasi
// misalnya ada data yang di sortir berdasarkan kota "jakarta" di dbase ada 10 orang yang
// berasal dari kota tersebut maka jakarta hanya di tampilkan sekali saja untuk keperluan pengulangan 
// nama kota-kota yang lain juga.
// cara nulis nya 

$query15 = "SELECT DISTINCT periode FROM kelembagaan";

$result15 = mysqli_query($con1n, $query15);
$data = mysqli_fetch_assoc($result15);

// FUNGSI TANGGAL
$tgl1 = "2020-01-23 1:30:30";
$tgl2 = date("dmy"); 				// tanggal "hari ini"
$tgl3 = date("dmy", strtotime(2002-04-21)); 	// tanggal "yg di Tuju"
$tgl4 = date('d-m-Y', strtotime('+7 days', strtotime($tgl1)));		// tanggal yang di tambahkan dengan integer
$tgl5 = date('d-m-Y', strtotime('+7 month', strtotime($tgl1)));
$tgl6 = date('d-m-Y', strtotime('+7 year', strtotime($tgl1)));
$tgl7 = date('d-m-Y', strtotime('-7 year', strtotime($tgl1)));
$tgl8 = date('d-m-Y H:i:s', strtotime('+7 second', strtotime($tgl1))); 	// jam yang di tambahkan dengan integer
$tgl9 = date('d-m-Y H:i:s', strtotime('+7 minute', strtotime($tgl1)));
$tgl10 = date('d-m-Y h:i:s a', strtotime('-7 hour', strtotime($tgl1)));
var_dump($tgl10);

// atau lihat ini
$tanggal = '2002-04-21';
$timestamp = strtotime($tanggal);
$bulan = date('d', $timestamp);
var_dump($bulan);
	
// dari tanggal di ats kita bisa melihat sebagianya saja dengan berbagai format 
date('dmy');
date('DMY');
date('D, d M Y');
date('d-m-y');
date('y'); 
date('Y'); 
date('d');
date('D');
date('m');
date('M');
time();

// SYNTAX TANGGAL DARI MY SQL
tuliskan "SELECT YEAR(kolomtgl) FROM tabel"

year($data["tanggal"]); 		// mnampikan tahum
month();				// mnampikan bulan 1 -12
monthname();				// mnampikan nama bulan jan feb
dayofmonth();				// mnampikan tanggal 1 - 31
dayname();				// mnampikan hari sen sel
dayofweek();				// mnampikan hari 1 - 7
weekofday();				// mnampikan nilai hari 0 - 6
dayofyear();				// mnampikan hari 1- 365
hour();					// mnampikan jam 1 - 23
minute();				// mnampikan menit 0 - 59
second();				// mnampikan detik 0 - 59

					// FUNGSI PENJUMLAHAN TANGGAL
// menggunakan 

$tgl1 = "2018-01-23";
$tgl2 = date('d-m-Y', strtotime('+7 days', strtotime($tgl1)));
echo $tgl2;

// -----------------
$tgl2 = date('d-m-Y', strtotime('+7 month', strtotime($tgl1)));
$tgl2 = date('d-m-Y', strtotime('+7 year', strtotime($tgl1)));
// -----------------
$tgl2 = date('d-m-Y', strtotime('-7 year', strtotime($tgl1)));


					// KONVERSI KALIMAT KE ARRAY 
// untuk memecah kalimat menjadi array yang berbatasan dengan ...
// explode(pembatas, kalimat, jumlah(opt))

$kalimat = "satu dua tiga empat lima";
$pecahkalimat = explode(" ", $kalimat);
var_dump($pecahkalimat);

// ------------

$kalimat2 = "satu, dua, tiga, empat, lima";
$pecahkalimat2 = explode(", ", $kalimat2);
var_dump($pecahkalimat);

// ------------

$kalimat3 = "satu, dua, tiga, empat, lima";
$pecahkalimat3 = explode(", ", $kalimat3, 3);
var_dump($pecahkalimat);


					// ada lagi implode
$arrayku = ["satu", "dua", "tiga", "empat", "lima"];
$gabungkalimat4 = implode(", ", $arrayku );
var_dump($gabungkalimat);


					// KONVERSI KATA KE ARRAY
// str_split(kata)

$kata = "12345"
$pecahkata = str_split($kata);
var_dump($pecahkata);

					// MENGHITUNG JUMLAH BARIS DI TABEL MYSQL BERDASARKAN QUERY

$conn = mysqli_connect('localhost', 'root', '', 'sekolah');       
$query = 'SELECT * FROM murid';
$result = mysqli_query( $conn, $query);

$ada = mysqli_num_rows($result);
var_dump($ada);

					// VALIDASI EMPTY

// untuk check bahwa variabel nol(kosong) atau tidak/bukan variabel tersedia atau tidak (ada fungsi sendiri ISSET)
// empty($coba); true/false

$coba = 0;
if(empty($coba)){echo "coba bernilai nol/kosong";}

					// VALIDASI ISSET

// untuk check bahwa variabel dibuat atau belum 
// isset($coba); true/false

$coba2 = 0;
if(isset($coba2)){echo "betul coba2 dua sudah ada";}

					// VALIDASI UNSET

// untuk menghapus/menyatakan variabel yang sudah ada untuk di hapus 
// isset($coba); true/false

unset($coba2);
if(isset($coba2)){echo "betul coba2 dua sudah tidak ada";}

					// VALIDASI yang mempengaruhi baris pada mysql caripetunjuk belum selesai

mysqli_affected_rows()


					// MENUTUP KONNEKSI DATABASE

mysqli_close($conn);



					// SET SESSION global di server hilang saat restart

session_start();			// untuk aktifkan pastikan jalan kan dulu ini

$_SESSION["desa"] = "saiti" ;

unset($_SESSION["desa"]);	// hilangkan session salah satunya aja
session_unset(); 			// hilangkan semua session
session_destroy();			// hilangkan semua session sda


					// SET COOKIE global di browser hilang sesuai setting waktu (detik * menit * jam * hari dst)

setcookie("desa", " saiti", time() + 60);	// cara setting cookie

setcookie("desa", " saiti", time() - 60); 	// cara hapus cookie

unset( setcookie("desa", " saiti") );		// coba yang ini untuk menghapus bisa nggak
 ?>

