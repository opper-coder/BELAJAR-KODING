/*
API (Aplication Programming Interface)
---------------------------------------------------------------------------------------------------
Daftar isi:
	- Konsep dan definsi 	-> konsep dasar api dan jenis jenis api
	- Restfull API		-> API khusus pertukaran data via HTTP / keperluan aplikasi web dan mobile
	- Json 			-> basik data yang di pertukarkan adalah json
	- konsumsi Json		-> coba konsumsi data dengan js dan php
	- OPEN API/PUBLIC API	-> ketersediaan API publik dan cara konsumsi 
	- Rest server 		-> cara membuat penyedia API
	- Rest client 		-> cara mengkonsumsi dengan framework
---------------------------------------------------------------------------------------------------
definisi konsep:
	API sekumpulan fungsi, subroutine, protocol komunikasi, atau kakas/tool utk membuat perangkat lunak
	pendeknya: adalah loket pintu masuk/keluar pada dua perangkat yang berbeda
	contoh:
		- hardware: di motherbord ada slot, raspberry pi: GpIO, arduino: port, audio: jack, Bluetoot wifi dll
		- OS : windows: dll, win32, kernel, ios: CNMutableContact(ambil kontact), AVCaptureDevice(camera)  
		  android: ContactsContract.RawContacts 
		- programming: Js: DOM, ajax, mysql: mysqli,PDO
		- WEB API: REST API, SOAP 
--------------------------------
REST API
	syarat dan Pengertian REST dan HTTP:
		REST: 
			- "gaya" arsitektural perangkat lunak, yang berisi aturan-aturan membuat web service
			  (sebenarnya gaya ini bisa di capai dengan cara lain, tapi dampaknya akan kacau.
			  semacam standard komunikasi aplikasi bersama )
			- interface manuasia dengan applikasi disebut GUI
			- interface aplikasi web dengan applikasi web disebut REST API
		HTTP:
			- protocol (hiper text transfer protocol) adalah type lalu lintas website di internet 
			- URL: (Uniform Resource Locator) adalah pointer penunjuk/selector sumberdaya di internet cloud
		JSON:
			- (javascript Object Notation)(object js khusus yang jadi standard REST API)
			- jika respon GET pada Browser maka response da kasih GUI HTML CSS
			- jika respon GET pada REST(aplikasi dg aplikasi) maka response da kasih JSON
		Request method biasa
			- minta data/request: GET
			- kirim data/Tambah: POST
			- Hapus: GET
			- Edit: POST
			- Sisip: POST
		REST API:
			- minta data/request: GET (browser dan programing)
			- kirim data/Tambah	: POST (browser dan programing)
			- Hapus				: DELETE (hanya bisa dilakukan oleh programing)
			- Edit				: UPDATE (hanya bisa dilakukan oleh programing)
			- Sisip				: PUT (hanya bisa dilakukan oleh programing)
		tools:
			- POSTMAN
			- ada banyak alternative online silahkan browsing
		KODE STATUS
			- 200: success
			- 404: not found
			- 500: server error
		syarat rest api: 
			- Request HTTP dilakaukan secara terisolasi
			- Server tidak menyimpan state apapun mngenai sesiion client
			- setiap request dari client harus berisi semua info yng di butuhkan server, seperti authentication dll
			- url tidak boleh kata kerja melainkan method request GET, POST dll
--------------------------------
JSON:
	- format pertyukaran data yg sangat ringan 			
	- sintax sangat jelas di banding XML
	- support beragam bahasa
	- cara konsumsi di beragam bahasa sesuai caranya masing2
		- PHP: 
			- $contents = file_get_contents('file.json')	// ambil data json
			- utf8_encode($contents)			// ubah encode standard jadi string json( biasa di gunakan juga konversi array Ke: json)
			- json_decode($contents, true)			// ubah json ke array
		- Javascript:
			- JSON.parse() 					// json > Obj
			- JSON.stringify() 				// Obj > json
	- formatnya mirip object java script
	- di gunakan juga untuk konfigurasi aplikasi (tapi tidak support komentar)
	- JSON biasanya di buat secara generate dari array atau lainya(jarang dibuat manual)
	- 
	contoh:
		{nama: "aqil"}		// object javascript
		{"nama": "aqil"}	// JSON (pakai petik)(tidak ada method)
		<nama>aqil</nama>	// xml
	typedata json:
		BASONN(bool, array, string, object, number, null)
	coba code:
		[
			{
				"nama" : "aqil",
				"alamat" : "saiti"
				"kelas" : 5
			},
			{
				"nama" : "aqil",
				"alamat" : "saiti"
				"kelas" : 5
			}
		]
		instal extension chrome: json view
		buka file dari localhost: yang berisi jason saja sepertio diatas
--------------------------------
akses json
	- contoh0 (persiapan dasar):
		- persiapkan satu file coba.json yang berisi sebuah jason diatas : lalu akses dengan beberapa cara berikut dibawah:
	- contoh1 (console.log):
		akses json pada javascript langsung di console.log:
		- buat file html > script > object js (let mahasiswa) > JSON.stringify(mahasiswa) > maka jadi json > coba console.log
	- contoh2:
		akses json pada javascript pakai AJAX vanilla js:
	 	let xhr = new XHTMLHttpRequest();
		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4 && xhr.status == 200){
				let mahasiswa = this.responseText; 			// akan mengahsilkan json
				// let mahasiswa = JSON.parse(this.responseText); 	// baru jadi object
				console.log(mahasiswa);
			}
		}
		xhr.open('GET', 'coba.json', true);					// (mehod, file, sync)(file misalnya kita punya coba.json yang berisi sebuah json)
		xhr.send()
	- contoh3 (jqury):
		akses json dengan jquery:
		$.getJSON()								// $.getJSON(file, callback)
		$.getJSON(coba.json, function(hasil){ console.log(hasil) })		// hasilnya langsung di parsing jadi object
	- contoh4 ajax jquery								// ada juga method ajax tapi agak panjang (mengandung response dan asynchronous)
		$.ajax() 													
	- contoh5 (php):
		akses via PHP:
		pada file php sebelum menggunakan data json hal yg pertama kita lakukan adalah, persiapkan dulu datanya 
			- $contents = file_get_contents('file.json')			// ambil data json
			- utf8_encode($contents)					// ubah encode standard jadi string json (biasa di gunakan juga konversi array Ke: json)
			- json_decode($contents, true)					// json > array_assoc
		lalu gunakan sebagaimana perlunya
	- contoh6 (POSTMAN):
		saat kita akses coba.json dari luar domain maka kita akan di blokir dengan CORS yaitu aturan izin akses data 
		- maka dari itu ada aturan khusus nanti saat menediakan dan menerima json di server client json 
		- untuk menagani hal tersebut ikuti materi selanjutnya
---------------------------------------------------------------------------------------------------
PUBLIC API / OPEN API 
	- banyak Open API disediakan untuk publict dengan syarat tertentu, misalnya berbayar dll
	- kunjungi API piblik di: 
		- google-apis
		- any-api.com
		- github.com/toddmotto/public-apis
		- github.com/farizdotid
	- bisa akses API publict bebas setelah menggunakan ini:
		- biasaya ada yg tanpa autentikasi > sebagai penggantinya key/token
		- oauth
		- CORS 
		- biasanya sudah disediakan dokumentasi API nya
	- demo 
		- buka POSTMAN
		- www.any-api.com > 
			- ada banyak link > redirect ke official api >
			- ada api yang serius sampai hanya api hiburan 
			- ada tersedia datasheets untuk autentikasi 
			- coba pilih OMDB > yaitu api database movie film > klik tab api key > acount type pilih free > email > edikasi > submit > verify email > copas key
				- baca cara penggunaan ada banyak parameter untuk bisa mendapatkan datanya > coba:
				- www.omdbapi.com/?apikey=[YUOR_API]&query pencarian (lihat di parameter yang diberikan di dokumentasi API)

			- postman: 
				GET: 							// method harus di isi sesuai tujuan
				url: omdbapi.com 					// urlnya saja nya sampai ke .com 
				- parameter:
					apikey: YUOR API_KEY				// ini parameter pertama setelah tanda"?" di url
					s: harry potter 				// search: harry potter
				klik SEND
					- kalau benar kita akan di kasih json nya
		- pakai ajax() jquery
			pada postman bisa kita tulis pakai ajax secara simple:
				$.ajax({
					url:'http://omdbapi.com',	
					type: 'get',
					dataType: 'json'
					data: {
						"apikey":"dca61bcc"
						"s": $('#input-form').val() 			// ambil text dari id input text html
					},
					// success: function(hasil){console.log(hasil)} 	// jika berhasil bisa di console akan di berikan response berupa object. tapi best practice ada di bawah 
					success: function(hasil){
						if (result.Response == "true" ) { 		// true dari response json pakai string 
							let film = hasil.Search  		// .Search adalah key dalam "json return" coba lihat di console diatas ini
							// tinggal looping saja
							$.each(film, function(i,data){
								console.log(i + data.tittle) 				
							})
						} 
						else { console.log("judul tidak di temukan") }	// atau result.Error di dapat dari "json return" juga 
					}
				})
	
---------------------------------------------------------------------------------------------------
REST SERVER
	- untuk membuat penyedia rest API pada aplikasi kita sendiri 
	  ada metode dan cara masing masing pada stiap framework dan bahasa, seperti laravel, codeigniter, expressjs, golang dll
	- biasanya saat kita bikin rest API itu ada standard OPEN API untuk aturan kemanan dan method2 datanya
	- juga harus memahami tentang HTTP secara mendalam

---------------------------------------------------------------------------------------------------
REST CLIENT
	untuk konsumsi API public atau pun json local ada beberapa cara pada latihan ini
	- javascript:
		- ajax vanilla	// ajax vanilla basic
		- $.getJSON() 	// ajax untuk JSON localhost (bagus basic dan konsep)
		- $.ajax()  	// ajax untuk API public (dari domain di internet)
	- php:
		- file_get_contents(file.json)	// kalau public, file tinggal ganti URL nya / method ini jika di isi dengan url apa saja, maka akan menampilkan semua string dalam page tersebut
		- cURL 				// pemanggil json API
	- framework REST SERVER API gazle
		- pada php sebenarnya bisa konsumsi API menggunakan ajax tapi sayang hanya bisa GET dan POST saja
		- cURL juga bisa bahkan bisa GET, POST, UPDATE, DELETE, PUT tapi masih panjang konfigurasinya, untuk mengatasi panjangnya maka ada framework khusus yaitu
		- guzzle : lihat di guzzlephp.org 
		- contoh ada di web programing unpas api seri ke 9 

---------------------------------------------------------------------------------------------------
CONTOH: API DATA VIDEO YOUTUBE DAN INSTAGRAM
	- kalau nampilin video youtube di web kita gampang tinggal pakai iframe > url
		<iframe src="https://www.youtube.com/embed/kjiou907jk?rel=0"></iframe>
	- kalau pakai api, ikuti di bawah ini:
		- google:
		- dokumentasi:
			- buka developers.google.com (sepertinya kayak di GCP) > login > search youtube > overview (ini dokumentasi buka terus untuk step2 berikutnya) 
		- API key:
			- (masih di dokumentasi/overview> ikuti langkah pertama dan klik link nya disana) > klik link Google console API
			  create project > nama: kasih > isi lainya > create > redirect ke API & services > dashboard > enable API & services
			  kita suruh pilih dan ketikkan di input text : youtube > redirect ke halaman API youtube > pilih yang youtube data API v3 saja
			- maka redirect youtube API librari > klik enable(sudah biru/tadinya abu2) > 
			- create credential > pilih Youtube data API > platform apa > pilih browser javascript > pilih data public > klik what crededential do i need?
			- kita di kasih API key > simpan baik-baik di notepad > done
			- lihat di list > edit nama : ganti nama API WPU_API 
		- Response Json() dokumentasi:
			- yang kita butuhkan nanti di browser adalah: jumlah subscriber, video terakhir, gambar channel banner yotube
			- masih di dokumentasi > tab channel > overview > disana kita di kasih "map json response" nya : 
			  disana tinggal lihat data2 itu apakah sudah kita butuhkan atau belum
			- kalau mau menggunakan API nya tekan tab list: tab channel > list > kita di kasih url, parts, dan id
		- POSTMAN:
			- GET 	:		// method ambil data
			- URL 	:		// masukkan url youtube kita dari googleapis yang di dapat dari dashboard
			- ID 	:		// id channel kita: buka channel youtube kita di browser > copas ID pada url channel di youtube
			- API key: 		// dari dashboard juga 
			- part  : 		// kayak url atau pointer pada object (baca: mau minta data apa)(tidak harus semua di ambil)
			- klik send
		- php cURL 
		  (kalian bisa juga ngambil data pakai file_get_content atau ajax di atas silahkan):

			- curl_init() 	// client url (di php ada method nya)(sebenarnya bisa di console.log dll)(bisa GET,PUT,UPDATE, DELETE dll)
			 	$curl = curl_init();
			 	$curl_setopt($curl, CURLOPT_URL, 'copas url dari postmant saat sudah di send akan berubah jadi panjang');
			 	$curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);				// true atau 1 sama saja
				$hasil	= curl_exec($curl);							//
				curl_close(); 
				$hasil = json_decode($result, true); 						// json > array kalau false atau kosong maka json > object
				var_dump($hasil);								// siap
			- tinggal kita pecah data $hasil dengan memasukkan satu satu ke variabel atau array, misalnya:
			- $bannerYoutube = $result['item'][0]['thumbnails']['medium']['url']
		- php cURL dengan function
			- saat kita ngambil data api dengan url nya satu begitu cukup tapi kalau kita ngambil 2 atau 3 url 
			  dari pada kita ngulang scrip yg panjang lebih baik kita bungkus curl nya dalam function
			- caranya
				function get_CURL(url){ }							// masukkan script di atas dengan menerima arguments url
				$hasil1 = get_CURL(isikan url) 							// panggilnya tinggal gini
---------------------------------------------------------------------------------------------------
*/
