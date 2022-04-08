FIREBASE 
1. adalah salah satu produk dari google berupa sistem database yang memiliki beberapa karakter
	- realtime database
	- sistem autentikasi
	- ada fitur npm yang akan akses server terdekat
	- bukan sql / noSQL
	- ada layanan hostingnya
	- ada layanan 'database' statiknya
	- harga bisa di atur

2. login karakterfirebase
	- firebase.google.com -> pake akun gmail
	- disana lihat fitur2 -> tab harga dll klik goto console -> pilih project dilist yng km miliki -> atau klik tambah project
	  -> dashboard terbuka

3. mulai cara hosting dulu
	- buka terminal dan connect internet 
	- install nodejs
		- diterminal :> cd desktop/firebase/tutorial
					 :> install nodejs
		- atau download nodejs dan istall manual. yang kita manfaatkan adalh npm dalam node js ini
		  untuk kita gunakan utk interaksi antara terminal dan firebase. juga digunakan untuk deploy
	- install npm :> npm install -g firebase-tools
	- :> firebase login -> gunakan akun firebase yang kamu miliki 

4. mulai jalankan firebase
	:> firebase init -> tampil halaman awal -> pilih hosting -> enter
	-> maka dlm folder kita di buatkan 2: file 1 .json 2 .rc 
	-> bikin satu folder bersama 2 file tadi beri nama public -> di dalamnya bikin index.html
	-  di index bikin <h1> halo firebase latihan ...! </h1>	//
	-  buka file json di sublimetext
		{
			"hosting" : {
				"public" : "public" 	// public yang kedua adalah nama folder kita yg tadi di buat
			}
		}
	-  :> firebase serve 				// smacam bikin server local kaya xampp /agak lama/
	-> :> fibase deploy 				// otomatis upload file2 kita ke server firebase
	-> kita dikasih url full nya -> saat kita akses urlnya kita akan lihat index kita tadi -> dan kita suydah di kasih HTTPS udah scurely
	-> saat kita update/ubah halaman index dan dll -> kita tinggal ketik :> firebase deploy lagi
	-> berapa kali kita deploy ststistiknya tercatat di dashboard firebase tab hosting/ kita juga bisa kembali ke keadaan sebelumnya sesui langkah/undo/
	-> kalau kita ingin mengubah nama domain sesuai keinginan kita -> klik tab hosting dan lakukan daftar domainnya

|
|
|
|
|
|
|
|

DATABASE REALTIME

1. konfigurasi awal
	- di dashboard overview -> pilih web-developer -> copy script konfigurasi nya -> paste diakhir index.html sebelum tutup body 
	- 2 script : 1 berisi koneksi ke framework 2 konfigurasi 3. jalankan funsi config-> semua gak usah di apa2in
2. klik tab database
	ini data base no sql -> mirip json -> 

			---
			{
				key : value
			}
			---
			{
				key1 : {
					keyA : value,
					keyB : value
				}
				key2 : {
					keyA : value,
					keyB : value
				}
			}
			---
	- nama key harus unik pada root yag sama
	- struktur tidak ada aturan baku berapa dalamnya bersarang
3. tapi lebih gampang edit di gui nya 
 	- pelajari sendiri gampang
4. koneksi ke data base
	- di index html dalam script paling bawah ketik:

		var conn 		= firebase database
		var playersRef 	= conn.ref("players")		// kalau mau lebih dalam bersarang ("players/jerman/liverpool")
5. menggunakan data dari koneksi
	- sintax :   players.on("jenisquery", "callback", "callerror");
	- query ada 4 
		- value				// dia langsung akan trigger/mengubah/refresh data saat "semua even" 
		- child_added		// dia langsung akan trigger/mengubah/refresh data saat "even tambah data"
		- child_removed		// dia langsung akan trigger/mengubah/refresh data saat "even hapus data"
		- child_changed		// dia langsung akan trigger/mengubah/refresh data saat "even edit data"
		- child_moved 		// dia langsung akan trigger/mengubah/refresh data saat "even pindah/order/sort" data
	- biasanya queri tersebut di gunakan saat "keperluan tertentu" kita mau kasih alert misalnya
	  saat tambah data saja yang edit dan hapus tidak tertrigger dsb 

6. praktek/implementasi 
	- bikin database -> table -> data di dashboard :

		{
			sekolahkoding : {
				players : {
					1 : {
						name : buffon,
						noPunggung : 2
						skill : tangkapan harimau
					}
					2 : {
						name : hansamu,
						noPunggung : 17
						skill : tekkel maut
					}
					3 : {
						name : tekiro,
						noPunggung : 23
						skill : tekkel maut
					}
				}
			}
		}
	
	- bikin koneksi:

	var conn 		= firebase database
	var playersRef 	= conn.ref("players")

	- gunakan data :

	players.on("value", tampilkanData, tampilkanError)		// parameter kedua adalah function data di bawah, yang ketiga adalah function error di bawah

	function tampilkanData(item){
		console.log(item.val());							// karena alasan tertentu kita baru bisa tampilkan data harus di tambah dengan .val()
	}

	function tampilkanData(item){
		console.log(err);									// 

7 Lihat pada browser dan apakah database terbaca (buka console browser)
	- tapi masih akses denied maka buka dulu autentikasi nya
	- di dashboard -> tab database -> tab rules: 

	{
		"rules" : {
			".read" : true,			// tadinya "auth != null"	// ini sama dengan parameter pengkondisian aja, dengan return true
			".write": true			// tadinya "auth != null"   // ini sama dengan parameter pengkondisian aja, dengan return true
		}
	}

	- coba akses halaman index di browser dan hasilnya lihat di console . database sudah bisa di baca
	- coba tambah data di dashboard dan lihat hasilnya di console maka taraa database langsung triger 

|
|
|
|
|
|
|
|

8 ORDER DAN FILTER dan tampil GUI
	ada 3 orderByKey, orderByChild, orderByValue
	- orderByKey kayaknya udah default nya -> namun masih di butuhkan saat mungkin ada filter lain seperti 
	  startAt dan stopAt() 
	- orderByChild / pada tabel diatas kita urut kan berdasarkan nop punggung
	- tulis pada query seperti ini 

	 players.orderByChild("noPunggung").on("value", tampilkanData, tampilkanError)	// no punggung bisa di ganti sesuai child(field) apa

	- namun ada bug saat query dengan "value" dan order pakai Child ( berbeda saat query menggunakan selain "value")
	- yaitu tidak bisa ngurutin berdasar child/tetap berdasar key; cara nangkisnya pada function tampilkanData:

		function tampilkanData(item){
			item.forEach( function (child){
							console.log(child.val());
			})	
		}

9 tampilkan di GUI
	di bawah <h1> bikin tag <ul></ul>				//

		function tampilkanData(item){
			var _ul = document.getElementsByTagName('ul')[0];
			var _content = "";

			item.forEach( function (child){
				_content += "<li>" + child.val().name + "-" + child.val().noPunggung + "</li>";
			})	
			_ul.innerHTML = _content;
		}

10 orderByValue 
	- bikin tabel langsung key value sebagai contoh mudah
		{
			topscorer :{
				buffon : 1,
				carlos : 10,
				dybala : 5,
				hansamu : 3,
				tukemon : 7
			}
		}

 	- bikin koneksi nya lalu fetch nya

 	var conn 		= firebase.database();
 	var playersRef 	= conn.ref("topscorer");

 	playersRef.orderByValue().on('value', tampilkanData, tampilkanError);

 	function tampilkanData(item){
		var _ul = document.getElementsByTagName('ul')[0];
		var _content = "";

		item.forEach( function (child){
			_content += "<li>" + child.key + "-" + child.val() + "</li>";
		})	
		_ul.innerHTML = _content;
	}

// ========================= di atas belum selesai ===========================

|
|
|
|
|
|
|
|
|

11 CRUD
	- konfigurasi dibawah
---
{
			sekolahkoding : {
				players : {
					1 : {
						name : buffon,
						noPunggung : 2
						skill : tangkapan harimau
					}
					2 : {
						name : hansamu,
						noPunggung : 17
						skill : tekkel maut
					}
					3 : {
						name : tekiro,
						noPunggung : 23
						skill : tekkel maut
					}
				}
			}
		}
---

		var conn 		= firebase.database();
		var playersRef 	= conn.ref("players");

	- query tampil dan query tambah data
		playersRef.on('value', tampilkanData, tampilkanError);
		playersRef.on('child_added', addData)

// fungsi tambah dan edit data 
	- ada 3 set, push
	- set() adalah replace semua data yang ada
	- push() otomatis kasih id buat kita
	- update() nambahin dan auto id/key generate
		---
		- set() saat di jalankan dia akan mereplace semua isi data data sebelumnya hilang
			playersRef.set(
				{
					4 : {
						nama : "ramos"
						noPunggung : 21
					}
				}
			)
		---
		- push() tidak replace namun kita tidak bikin key
		- tidak perlu bikin key karena kan di buatkan oleh firebase 
		- dan gunanya untuk saat nambah data kita gak perlu buat key 
		- tapi di buatkan string random, supaya saat tambah data kita gak khawatir nimpa key yang ada
		- namun saat kita membutuhkan kita wajib mengambil kopas string tersebut

			playersRef.push(
				{
					nama : "ramos"
					noPunggung : 21
				}
			)
			---
		---
		- update() saat di jalan kan bisa nambah data dan bisa edit data 
		- dan tidak menimpa sebelumnya

			playersRef.update(
				{
					4 : {
						nama : "ramos"
						noPunggung : 21
					}
				}
			)

		- bisa edit multiple data sekaligus dengan penulisan yang berbeda juga bisa:

			playersRef.update(
				{
					{
						2/nama : "aqil",
						3/nama : "iza"
					}
				}
			)

// hapus data
		- bentuk dasarnya seperti di bawah
		- tinggal bikin query dan function nya agar bisa di lihat

		playersRef.child(2).remove()

function addData(){
	console.log("yeaay data berhasil")
}
	
function tampilkanData(item){
			var _ul = document.getElementsByTagName('ul')[0];
			var _content = "";

			item.forEach( function (child){
				_content += "<li>" + child.val().name + "-" + child.val().noPunggung + "</li>";
			})	
			_ul.innerHTML = _content;
		}

|
|
|
|
|
|
|
|
|

AUTENTIKASI

firebase.auth()

- klik tab pada autentikasi disana ada pilihan yang bisa di gunakan, pake email, hp
- pilih enable bagian email
- dasar syntax masukan dalam variabel :

	var otorisasi = firebase.auth();									- jalankan daftar/register dengan method email dan password :
	otorisasi.createUserWithEmailAndPassword( email , password );		- untuk register
	otorisasi.signInWithEmailAndPassword( email , password ).then(function jika jalan).catch(function jika gagal);			- untuk signIn 
	otorisasi.signOut().then(function jika jalan).catch(function jika gagal)		- untuk logOut
	otorisasi.onAuthStateChanged(function user dah login belum )		- gunanya untuk melihat apakah kondisi user sedang login belum
																		  kalau funsi di atas kan hanya tertrigger sekali saat event
																		  kalau ini terus menerus akan merekam kondisi nya prakteknya ada di bawah
	otorisasi.currenUser.sendEmailVerification().then().catch()			- untuk verifikasi email
	

- CONTOH KONKRIT :