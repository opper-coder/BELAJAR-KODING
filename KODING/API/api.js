15 romadlon 2020 sandika galih

// ========================================================================
 // RINGKASAN 
 // data berupa object kita panggil 
 let siswa = { nama : "aqil" }					// object
 console.log( siswa.nama );						// panggil object
 console.log( JSON.stringify(siswa));			// panggil object return json (masih text)
 console.log( JSON.stringify(siswa.nama));		// panggil sampai ke key
 console.log( JSON.parse(siswaJson));			// konversi json ke object 

 // di file .json 
 [
	{
		"nama" : "aqil",
		"alamat" : "saiti",
		"kelas" : "empat"
	},
	{
		"nama" : "fahmi",
		"alamat" : "lalundu",
		"kelas" : "nol kecil"
	}
]
// pemanggilan ajax harus pakai server ( xampp dll )
// di js panggil json ajax vanilla
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if( xhr.readyState == 4 && xhr.status == 200 ){
			// let mahasiswa = this.responseText;				// (test1) result json 
			let mahasiswa = JSON.parse(this.responseText);		// (test2) result array
			console.log(mahasiswa)
		}
	}
	// ---
	xhr.open('GET', 'index.json', true);
	xhr.send();
// atau pakai ajax jquery
	$.getJSON('index.json', function(hasil){
			console.log(hasil);
		})
// atau pakai ajax fetch









// ========================================================================
API (webservices)


definisi 	= Aplication Programming Interface
adalah 		= sekumpulan fungsi, subroutin, protokol komunikasi
			  atau tools untuk membuat perangkat lunak
Interface	= bagian yang sama antara dua atau lebih komponen terpisah pada sebuah sistem komputer
Interface	= sepasang port sambungan
API 		= Antarmuka berupa kumpulan fungsi yang dapat di panggil atau dijalankan oleh program lain
berada dimana = di bahasa pemrograman, lybrary dan framework, OS, web service/web API
contoh		= mysqli, PDO, DOM, kernel dll, win32.sys, user32.dll, iOS: Contact CNMutableContact(), Camera AVCapturerDevice()
			  Android ContactContract.RawContacts
WEB service = REST API, SOAP dll 
REST API 	= sistem perangkat lunak yang dibuat untuk mendukung interoperabilitas/interaksi antar 2 aplikasi yang berbeda melalui jaringan /http
devinisi-
dari wikipedia 	= "gaya arsitektural perangklat lunak yang di dalamnya mendefinisakan aturan aturan"
			  "untuk membuat web services" adalah gaya yang jika kita mengikuti gaya yang lain ya tetep jalan sih
	REST	= cuma GET dan POST , biasanya ini saja bisa untuk hapus dan edit data namun tidak native 
	RESTful	= Bisa juga PUSH DELETE , ini edit dan delete yang native di mesin, browser tidak punya kemampuan ini 

	API 	= penghubung
	REST	= Aturan
	http 	= adalah protokol dalam mengakses sumberdaya URL
	http method = ada banyak sebenarnya namaun umumnya :  GET POST PUT (PUSH) DELETE PATCH . PATCH adalah tambal bukan replace(put/push)
	URL 	= alamat sumberdaya di browser
	end point = satu syntax akses API untuk CRUD berbentuk url
	stateless = karena tidak (tdk boleh) ada session di dalam REST API, maka informasi otentikasi harus dikirim
			menggunakan method tersendiri(mandiri) atau :
			data yang dikirim harus mnyertakan data utility yang di butuh kan oleh api semacam otentikasi(data user login) dsb 
	syarat resful api	= 
			 1. harus mengguanakan 4 method CRUD. GET POST PUT (PUSH) DELETE PATCH
			 2. url tidak boleh kata kerja (4 diatas)
			 3. statusless
	
simulasi	= user request -> server respose -> mengubah data ke json -> json di kirim beserta kode status
			  demikian halnya jika server melakukan request lagi ke server lain

kode status = 200;berhasil, 404;not found, 500;server error, masih banyak lagi di wikipedia

JSON		= file format data yang bisa di baca mesin dan manusia terdiri { key : Value }
				- mudah dibaca dan ringan, beda dengan format lain seperti xml dll (lebih sulit)
				- tiap bahasa perograman dapat mengkonsumsi JSON dengan protokolnya masing2
				- mirip object bedanya tidak memiliki methode
				- pada key nya object tidak pakai kutip json wajib kutip dua
				- biasa di gunakan untuk konfig, pada aplikasi framework dll, 
				- kelemahanya kalau untuk konfig JSON tidak support komentar
				- extensi .json

simulasikan = - install plugin ke firefox jsonVIEW
			  - running server liveServer(plugin) di vscode atau xampp
			  - index.htaml runing live server di vscode, masih di localhost url arah menuju index.json
				// syntax :
				
				{ "key" : Value }

				// dengan variabel :

				const coba = { 
					"key" : value
				}
				
				// type data:

				const coba = { 
					"key" 	: value,			// basic
					"key2" 	: [1,2,3],			// array
					"key3"	: "string",			// string
					"key4"	: 100,				// int
					"key5"	: {"ada", "asa"}	// object
					"key6"	: true,				// bool
					"key7"	: null				// null
				}

				type data :
					bool
					array
					string
					object
					number
					null
					 	disingkat basson

				// object vs JSON

				// object:
				{ 
					key 	: "asa",
					key2 	: function coba(){}
				}
 
				// json:
				{ 
					"key" 	: "asa",					// key pakai Kutip
					// key2 	: function coba(){} 	// no methode
				}


LATIHAN :
jalankan xampp di terminal 

sudo /opt/lampp/lampp start
sudo /opt/lampp/lampp stop

$ cd /opt/lampp/htdocs 
$ sudo su 
password
$ mkdir saya 

$ ls -l 
masih biru buat permision bolehkan
$ chmod 777 -R linux
$ ls -l
udah ijo berarti dah boleh di tulis


				// kalau json lebih dari 1 maka simpan dalam array (ini yng valid)

				[
					{ "k" : "v" },
					{ "k" : "v" },
					{ "k" : "v" }
				]

// - tapi biasanya json tidak ditulis dalam aplikasi kita melainkan di generate
// - dari/ke objek atau array contoh di PHP ada 
	 json_encode()	// ke json, 
	 json_decode() 	// dari json
// - untuk fetch nya pakai file_get_contents()

ada 3 langkah di PHP untuk ambil json ke array assoc

// 1. ambil data JSON dari file
$contents = file_get_contents('data.json');

// 2. ubah standard encoding
$contents = utf8_encode($contents);

// 3. conversi json ke array
$results = json_decode($contents, true); // kalau true di isi jadi array assoc kalau tidak jadi object

// di javascript :

JSON.stringify()	// object ke json
JSON.parse()  		// json ke object

untuk ngakses json ada beberapa:

- ajax		
	- XMLHttpRequests
	- jquery	// library

( pelajari ajax dari berbagai gaya (vanilla, jquery, fetch) di js/es6/sandhika )

// contoh:
let ada = { key : "Value" }			// sebuah object
console.log(JSON.stringify(ada));  	// hasilnya json: { "key" : "value" }

// lanjut ke LATIHAN
// ada juga di halaman latihan es6 asynchronous ada ajax dan fetch