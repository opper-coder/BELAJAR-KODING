<?php 

IMPLEMENTASI REST API
---------------------------------------------------------------------------------------------------
di mikrotik: contoh kali ini kita akan mengkonsumsi API untuk management user VPN 

-----------------------------
prasarat
1. ROS v7.1 beta4 keatas  			-> jika belum lakukan update. tutorial ada
2. aktifkan service www-ssl 		-> generate dulu ssl-nya lalu aktifkan www-ssl. tutorial ada
3. generate ssl-sertificate 		-> di Lets Encrypt dan pasang di mikrotik 
4. PHP 7.4.27 (xampp) 				-> konfig environtmen variabel agar dapat di akses di terminal
5. guzzle  								-> menggunakan composer dan inisialisi guzzle
6. siap di gunakan 					-> buatkan halaman template guzzle php lalu lakukan request GET, POST, dll 
-----------------------------
-----------------------------
-----------------------------

-----------------------------
GUZZLE
cara instal:
1. masuk ke website google: guzzle > guzzlephp.org > guide > instalation 
	- instal dulu komposer, caranya : buka website getcomposer.org > download > composer.exe > next2 finish > reboot
	- habis itu bikin directory aplikasi kita > caranya buat folder > klik kanan buka di terminal > 
	- common install guzzle di terminal >: composer require guzzlehttp/guzzle:^7.0 (copas di dokumentasi)
	- tunggu progress selesai > maka kita di buatkan treefolder guzzle php kita 
	- buka direktori app kita dengan sublimetext > buat file php diroot. misalnya: get.php 
	- lalu buka file tersebut dan lakukan: (cekidoc: copas)
		require 'vendor/autoloaad.php';
2. quick start 
	- cara penggunaan setelah langkah di atas adalah
	- inisialisasi clent: copas script 
	    $client = new Client()
		- pada 'base uri => <isikan dengan url mikrotik kita: https://domainkita.net/rest/>'
	- request: 
		- copas request di bawah ini di bawah instance initialisasi  
		$response => $client->request('GET', '<url : system/resource>')
		- lalu lakukan autentikasi basic mikrotik di guzzle. 
		  buka dokumentasi guzzle di auth > basic auth >  
		$response => $client->request('GET', 'system/resource', ['auth' => ['testapi', 'rahasia']] );
	- simpan halaman get.php ini dan coba running di terminal
3. terminal masih di halaman root aplikasi ini dan coba panggil file get.php untuk menjalankanya. 
   cara panggil ghalaman php di terminal:
	- terminal >: php .\get.php ENTER
	- sekarang tambahkan script var_dump('$response'); di get.php > lalu running kembali 
	  maka akan langsung mendapatkan response diterminal, tapi masih semua data di berikan, 
	- jika kita hanya meminta bodynya saja maka tambahkan script berikut ini 
		$body = $response->getBody();
		var_dump($body); kayaknya belum muncul responsenya, karena itu tambahkan getContents() 
		$body = $response->getBody()->getContents();
		saat di var_dump($body) maka akan tampil bodynya saja, 
	- di jalankan langsung di browser (localhost/get.php) juga bisa
	- hasil yng di tampilkan masih dalam bentuk json, olehkarena itu di php kita konversi ke array
4. json ke array
	- tambahkan script:
	$output = json_decode($body, true) // true = array jika tidak maka object
	- var_dump($output); maka tinggal gunakan di aplikasi 
-----------------------------
GET USER VPN
	sekarang kita praktekan untuk perintah create pada mikrotik VIA REST API guzzle
	pada contoh di atas kita sudah berhasil READ data sekarang CREATE 

1. kita bikin file baru di root getvpn.php 
	lalu kita copas isinya dari dalam file get.php > kemudian kita modifikasi
	 yang isinya kuerang lebih: 
 ?>
	<?php 
	require 'vendor/autoloaad.php';					// template
	use GuzzleHttp\Client; 								// template
	$client = new Client([
		'base_uri' 	=> 'https://domainkita.net/rest/', 		// url domain mikrotik kita
		'timeout' 	=> 2.0, 								// isi dengan detik
	]);
	$response 	= $client->request('GET', 'system/resource', ['auth' => ['testapi', 'rahasia']]); // method, url, auth
	$body 		= $response->getBody()->getContents(); 		// response hanya body saja tidak semua data teknis
	$output 	= json_decode($body, true); 			// true konversi json ke array, jika false object
	// var_dump($body); 									// jika var_dump body hasilkan json
	var_dump($output);  									// var_dump array
	?>
	<?php 
2. kemudian kita edit bagian url nya untuk menuju perintah pembuatan user vpn 
		$response = $client->request('GET', 'system/resource', ['auth' => ['testapi', 'rahasia']]);
		$response = $client->request('GET', 'ppp/secret', ['auth' => ['testapi', 'rahasia']]);
   	saat kita jalankan diterminal maka sudah ada responsenya
   		>: php .\getvpn.php
   	atau akses di localhost
   		localhost/getvpn.php
3. coba kita looping data dengan foreach
	
	foreach($output as $vpn) { 
		echo 'nama :' . $vpn['nama'] . '<br>'; 	// silahkan looping password, profile dll soleh sesuaikan saja
	}
	// atau
	foreach($output as $key => $value) {
		echo $value['nama']; 
	} 															
	// akan menghasilkan response berupa array
4. coba periksa di winbox di ppp/secret > dan add secara manual > maka recordnya bisa langsung terlihat
	
-----------------------------
PUT USER VPN 
1. kita tambah filebaru "putvpn.php" > lalu copas lagi isi file di atas > lalu kita modifikasi method GET ke PUT
		$response = $client->request('PUT', 'ppp/secret', ['auth' => ['testapi', 'rahasia']]); 
2. lalu kita kirimkan bodynya
	untuk method put kita perlu mengirimkan datanya pada body > maka lihat dokumentasi tab body 
	dan bentuknya body JSON responya juga JSON, letakkan JSON nya bersama auth
		$response = $client->request('PUT', 'ppp/secret', [
			'auth' => ['testapi', 'rahasia'], 
			'body' => json_encode(array(
				'name' => 'vpnsaya', 
				'password' => 'rahasia'
			))
		]); 
3. coba kita jalankan di terminal >:  php .\putvpn.php ENTER
	maka tidak ada response apa2 > tapi saat di lihat di winbox ppp/secret maka user akan bertambah satu sesuai request 
4. 


menit ke 24

 ?>
