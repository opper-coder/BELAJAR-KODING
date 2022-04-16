- OBJECT ____________________________________

- kalau array = kumpulan nilai yang memiliki index
- kalau object = kumpulan nilai yang memiliki nama
- persamaan = sama kumpulan nilai yang memiliki key dan value
- perbedaan = ada pada key index dan nama, kemudian boleh ada methode pada object, array tidak 
	- di php = array assoc
	- pyton ada = dictionary
	- C = HAsh tables
	- java = Hash Maps
	- Ruby & Prl = Hashes 
// ------------------------------------------
{}	// jika di console dah object 
// ---
let objecku = {}
// --- bentuk dasar (object literal)
let objecku = { key : "value", key2 : "value", key3 : function (){} }
let objecku = {
	nama : "aqil",
	kelas : 4,
	sapa : function () {
			return "nama saya " + this.nama + " kelas saya " + this.kelas
		}
	}
// ------------------------------------------
// panggil -> coba buka consol lalu panggil objecku, dng ketik:
	objecku -> enter
// coba dengan chain:
	objecku.nama;					// gaya object
	objecku["nama"];				// gaya array
	objecku.kelas[2];				// gaya gabungan
	objecku.sapa();					// object key function
// ------------------------------------------
// coba isi(push) objek lewat console atau  pun:
	objecku.nama = "izza";   		// replace
	objecku.alamat = "saiti";		// bikin key value baru
	objecku.nilai = [2,3,4];		// bikin key value array
	this.object.key = value;		// kayaknya dalam function
/*
---------------------------------------------
membuat object:
	ada 4 cara
	1 literal
	2 function declaration
	3 constructor function(keyword " new ")
	4 object.create()
*/
/*
---------------------------------------------
	1. -----> object literal
	- tidak punya instans bisa langsung di panggil obj nya
	+ : native/bentuk dasar 
	- : tidak efisien (karena bikin masing2 siswa)
*/ 
let objSiswa = {
	nama: "andi",
	alamat: "bella"
}
/*
--------------------------------------------
	2. -----> object function declaration
	"membuat object dan mengisinya dengan function"
	- wajib ada var "object kosong" dan "return object tsb".
	+ : bikin object sekali, tinggal panggil (instan) berkali-kali
	- : kenyataanya saat di instance di bacground object tetep di copy sehingga boros memori
*/ 
function objSiswa(nama, alamat){
	var siswa = {};			
	siswa.nama = nama;		
	siswa.alamat = alamat;	
	return siswa;
}
	let data = objSiswa("andy", "bella");
/*
---------------------------------------------
   	3. -----> obj constructor
   	- mirip di atas bedanya ada "new" pada instanse serta "var", "return" di ganti dengan "this"
   	- jadi seakan akan ada object kosong bernama this,( let this = {} ) disini dan return this
	- adalah function khusus untuk bikin object, sering di gunakan untuk object2
	- di tulis dengan huruf besar awal( walaupun boleh huruf kecil )
	- hilangnya "var{kosong} dan return" menunjukan itu object constructor
	- dan panggil wajib pakai new, jika tidak maka dianggap func declaration dan bernilai undefined
	  sebab tidak ada :"var dan return" sebagai func declaration
	- ini lebih efisien dan template sekali, cukup instanse berkali2
	- walau method di panggil berkali2 ternyata di belakang layar methode nya juga di buat berkali2
	  dengan nilai sesuai instanya setiap kali instance di buat (boros memori)
	- 
*/ 
function objSiswa(nama, alamat){
	this.nama = nama;		
	this.alamat = alamat;
}							  
	let data = new objSiswa("ikul", "banggai");

	/*  menjelang masuk ke pembahasan Object.create
		- solusinya masukkan object constructor ke dalam object lagi agar template di tulis sekali dalam memory
		- bungkus templat object dan fungsi instance dalam sebuah object(dataobj)
		- di bawah ini bikin sendiri:
	*/ 

	let dataobj = {
		objSiswa : function (nama, alamat){
			this.nama = nama;
			this.alamat = alamat;
		},
		instanceSiswa : function(nama, alamat){
			return new this.objSiswa(nama, alamat);
		}
	}
	function callInstance(nama, alamat){
		let hasil = dataobj.instanceSiswa(nama,alamat);
		return hasil;
	}
	let hasil2 = callInstance("furqon","jepara")
	let hasil3 = callInstance("lazarus","manado")

	console.log(hasil3);

	/*
	contoh dari shandika:
	baca: 
		1. bikin object mahasiswa
		2. bikin 3 key baru untuk obj mahasiswa berupa function methodMahasiswa
		3. daftarkan key nya dalam obj mahasiswa 
		4. kelemahanya saat method bertambah maka key nya harus di daftarkan
		5. maka kita repot mengelola 2 0bject (satu di tambah key, lainya juga harus di tambah)
		6. untuk bisa melakukanya otomatis maka gunakan Object.create pada contoh yang di bawah
	*/
	const methodMahasiswa = {
		makan: function(porsi){
			this.energi += porsi;
			console.log(`halo ${this.nama}, selamat makan!`)
		},
		main: function(jam){
			this.energi += jam;
			console.log(`halo ${this.nama}, selamat bermain!`)
		},
		tidur: function(jam){
			this.energi += jam * 2  ;
			console.log(`halo ${this.nama}, selamat tidur!`)
		}
	}
	function mahasiswa(nama, energi){
		let mahasiswa = {};
			mahasiswa.nama = nama;
			mahasiswa.energi = energi;
			mahasiswa.makan = methodMahasiswa.makan;
			mahasiswa.main = methodMahasiswa.main;
			mahasiswa.tidur = methodMahasiswa.tidur;
		return mahasiswa;
	}
	let sandhika = mahasiswa("sandhika",10);
	let doddy	 = mahasiswa("doddy",20);
	console.log(sandhika.energi)

/*
---------------------------------------------
	3. -----> Object.create
	coba bedakan pada object.create di bawah dengan di atas
	yaitu dan hapus daftar key karena di buat otomatis dengan methodMahasiswa
		- sama dengan function declaration bedanya method nya ngambil 
		  dari object luar agar efisien memori (di tulis sekali)
		- bisa di panggil langsung tapi kan harus daftar 
		  propertinya di tulis 1/1 merepotkan
		- cara agar terdaftar semua tinggal pakai pemanggil object.create
		- : kita tetap bikin 2 method yg berbeda, masih 2 kali kerja
		- solusinya fungsi mahasiswa harus bikin pake konstructor 
		  seperti contoh di bawah lagi (prototype)
*/ 

const methodMahasiswa = {
	makan: function(porsi){
		this.energi += porsi;
		console.log(`halo ${this.nama}, selamat makan!`)
	},
	main: function(jam){
		this.energi += jam;
		console.log(`halo ${this.nama}, selamat bermain!`)
	},
	tidur: function(jam){
		this.energi += jam * 2  ;
		console.log(`halo ${this.nama}, selamat tidur!`)
	}
}
function mahasiswa(nama, energi){
	let mahasiswa = Object.create(methodMahasiswa);
		mahasiswa.nama = nama;
		mahasiswa.energi = energi;
	return mahasiswa;
}
let sandhika = mahasiswa("sandhika",10);
let doddy	 = mahasiswa("doddy",20);
console.log(sandhika.tidur(5))
/*
---------------------------------------------
	5. -----> prototype inheritance
		- saat kita bikin constructor seperti ini:
*/ 
function mahasiswa(nama, energi){
	this.nama = nama;
	this.energi = energi;
}
/*
		- sebnenarnya yang terjadi adalah kita dibuatkan inisialisasi object "this" dan return "this" di background
		- bukan hanya itu pada inisialisasi "object this" : isnya sudah di buatkan "object.create"
		- bukan itu saja dalam "object.create" kita juga di buatkan properti tambahan bernama "prototype" 
		- semacam objec default (array global di php tapi yang ini nempel di object constructor)
		- penampakanya seperti ini:
*/
function mahasiswa(nama, energi){
	// let this : Object.create(mahasiswa.prototype) 		// di background, tidak perlu ditulis
	this.nama = nama;
	this.energi = energi;
	// return this;											// di background
}
/*
		- jadi ringkasnya kita bikin object konstructor
		- lalu bikin "key method" baru (makan, bermain, tidur kalau mau di buat semua) 
		  dengan memanfaatkan prototype (kita bikin "makan" saja dulu)
		- sekarang sudah bisa di instance dan key method nya dah bisa di gunakan 
		- keren ...  
*/
		function mahasiswa(nama, energi){
			this.nama = nama;
			this.energi = energi;
		}
		mahasiswa.prototype.makan = function(porsi){
			this.energi += porsi;
			return `halo ${this.nama}, selamat makan!`;
		}
		let sandhika = new mahasiswa('sandhika', 10)
		console.log(sandhika.makan(2))
		console.log(sandhika.energi)
/*	
---------------------------------------------
	inheritanse
		- bikin kan prototype, pengganti isi {k:v} dari objek lain (baris 1)
		- sudah bisa di instans (baris 2)
		- siap di gunakan (baris 3)
		- "kab" di ambil dari prototype (baris 4)
*/
	mahasiswa.prototype.kota = { "kab" : "banggai" }; 			
	var data = new mahasiswa( "aqil", "saiti" );
	console.log(data);
	console.log(data.kab);
/*
---------------------------------------------
	6. -----> class 
		- jadi kalau mau bikin methode tinggal taruh atau panggil disini tidak perlu inheritance (baris 6)
		- keyword function tidak perlu di tulis (baris 6)

		- inheritance dengan protype ini sebenarnya aneh, karena bahasa yang lain menggunakan class
		  dulu tidak punya sekarang sudah di perbaiki jadi sekarang ada class
		- sekarang kita ubah object tadi menjadi class
		- dan ini lebih modern dan gampang hemat memori pula
		- heh ngapain belajar yang di atas tadi tentang object
		- nggak apa2 lah biar pengalaman sebab walaupun class namun di background 
		  yang di jalankan sebenarnya tetap prototype
		- faktanya array object number semua di bangun denga proto type
		- coba tulis langsung di console : Array.prototype atau Object.prototype
*/ 
class mahasiswa{
	constructor(nama, energi){
		this.nama = nama;
		this.energi = energi;
	}
	makan(porsi){
		this.energi += porsi;
		return `halo ${this.nama}, selamat makan!`;
	}
	main(jam){
		this.energi += jam;
		return `halo ${this.nama}, selamat bermain!`;
	}
	tidur(jam){
		this.energi += jam * 2  ;
		return `halo ${this.nama}, selamat tidur!`;
	}													
}									
let sandhika = new mahasiswa("sandhika", 10);
console.log(sandhika.energi)
console.log(sandhika.energi);						
/*
---------------------------------------------
	7. this
		- adalah mengembalikan object global atau sama dengan object "windows"
		- jika console.log(this) begitu saja, return nya windows
		- jika this di panggil dalam object literal maka akan mengembalikan object yang bersangkutan itu sendiri

		- jika di panggil dalam object literal maka this berlaku pada object itu sendiri
			var obj = { nama: "aqil", alamat : "saiti" }
			obj.halo = function(){console.log(this)}
			obj.halo();     		// maka hasilnya = { nama: "aqil", alamat : "saiti" }

	// jika di panggil dalam constructor maka this berlaku pada instans nya masing2 ( "new" )

		function halo(){console.log(this)}
		var obj1 = new halo();	// this mengembalikan object baru disini (di instans bukan di template)
		var obj2 = new halo(); 	

		- kata pendek nya this adalah object yang di buat oleh js di background dlm object yang sedang di buat
*/ 

	// contoh konkrit THIS dan OBJECT
function angkot(sopir, trayek, penumpang, kas){
	this.sopir = sopir;						// jadi seakan2 ada object kosong bernama this "var this={}" di background
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpangNaik  = function(namaPenumpang){ this.penumpang.push(namaPenumpang); return this.penumpang }
	this.penumpangTurun = function(namaPenumpang, bayar){ 
		if(this.penumpang.length === 0){ alert("penumpang masih kosong"); return false; }	// return fals agar keluar dari methode nya 
		for(var i=0;i<this.penumpang.length;i++){ 
			if(this.penumpang[i] == namaPenumpang) {
				this.penumpang[i] = undefined; 
				this.kas += bayar;
				return this.penumpang;
			} }
	}
} 

var angkot1 = new angkot("aqil", ["bunta", "luwuk"], [], 0);

// coba jalankan pengisi penumpang
angkot1.penumpangNaik("andi");				// lalu cek (di console atau di lainya) dengan= angkot1.penumpang , angkot1.kas
angkot1.penumpangNaik("rayhan");

// coba jalankan penumpang turun dan bayar
angkot1.penumpangTurun("andi", 1000);		// lalu cek dengan = angkot1.kas , angkot1.kas
angkot1.penumpangTurun("rayhan", 7000);

// console.log(angkot1);