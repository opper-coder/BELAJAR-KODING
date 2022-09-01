/*
trik: UNTUK GAMPANG NYA LANGSUNG LIHAT CARA BIKIN CLASS SAJA DI BAGIAN BAWAH
OBJECT
- Pengertian 		-> "kumpulan data yg memiliki properti dan method"
			    pada akhirnya kita hanya mebuat object itu instance dari class (tidak manual);
			    1. CLASS:
			    class coba{
		    		constructor,
		    		methods
			    }
			    2. INSTANCE:
			    let aqil = new murid(aqil, saiti)
- bentuk dasar obj	-> {}
- panggil		-> obj.param, obj["param"],obj.param() dst
- isi/ubah		-> obj.param = value
- generate object:	-> ada 5 tahap pemahaman sehingga sampai ke CLASS lah yang penting
	1. literal	-> 
	2. function	-> function declaration	
	3. constructor	-> function (keyword "this, hilangnya return, new")
	4. object.create() -> bawaan untuk construct
	5. prototype	-> property bawaan yang nempel oleh ulah[object.create()]	
- CLASS			-> ngerti bikin class dah beres padahal tanpa pemahaman sebelum ini di atas
			   (kalau dah paham langsung aja nuju ke CLASS)
- this			-> adalah variabel yang merujuk pada scoopnya dimana ia di panggil atau di tulis
*/

/* BENTUK DASAR 
--------------------------------------------------------------------- */
	{}
	let obj = {}				// dasar
	let obj = {				// contoh
		nama : "aqil",
		umur : 12,
		sapa : function(){
			console.log(`halo nama saya ${this.nama}`)	// this.nama == obj.nama (dalam scoop)
		}
	}

/* PANGGIL
--------------------------------------------------------------------- */
	obj -> enter				// coba di console
	obj.nama;				// gaya object, prop oleh console dll
	obj["nama"];				// gaya array pakai ""
	objecku.kelas[2];			// gaya gabungan
	obj.sapa();				// gaya method

/* ISI/ ASSIGN/ PUSH
--------------------------------------------------------------------- 
- jika parameter belum ada maka akan di tambahkan juga 
*/
	obj.nama = "izza";   			// replace/isi
	obj.alamat = "saiti";			// bikin key value baru
	obj.nilai = [2,3,4];			// bikin key value array
	this.object.key = value;		// kayaknya dalam function (replace isi dalm scoop)

/* GENERATE OBJECT
--------------------------------------------------------------------- 
	ada 4 cara
	1 literal
	2 function declaration
	3 constructor function(keyword " new ")
	4 object.create()
	
	---------------------------
	1. OBJ LITERAL
		- tidak punya instans bisa langsung di panggil obj nya
		+ : bentuk dasar 
		- : tidak efisien (karena bikin masing2 siswa)
		+ contoh ada di atas [let obj = {}]
	
	---------------------------
	2. OBJ FUNCTION DECLARATION
		"membuat object dan mengisinya dengan function"
		- wajib ada let "object kosong" dan "return object tsb".
		+ : bikin object sekali, tinggal panggil (instan) berkali-kali
		- : kenyataanya saat di instance di bacground object tetep di copy sehingga boros memori
	*/ 
	function obj(nama, alamat){
		let siswa = {};			
			siswa.nama = nama;		
			siswa.alamat = alamat;	
		return siswa;
	}
	let data = obj("andy", "bella");
	/*
	---------------------------
   	3. OBJ CONSTRUCTOR (baca sampai protype merunut kejadian prototype dan CLASS)
   	   PENGANTAR PEMAHAMAN TENTANG CLASS. 
   	   jika tidak di pahami langsung gunakan class sebenarnya bisa jalan saja
   	   tapi kalau mau tau proses di belakang nya baca dulu ini sampai ke class. 
   	   tidak lama kok, yang penting baca semua comment
		- hilangnya "let{kosong} dan return" itu menunjukan object constructor
		- efisien: template sekali, instanse berkali2
		- walau method di panggil berkali2 ternyata di belakang layar methode nya juga di buat berkali2
		  dengan nilai sesuai instanya setiap kali instance di buat (boros memori)
	*/ 	
	function Obj(nama, alamat){			// nama di awali huruf besar (walau boleh kecil)
		this.nama = nama;			// isi/assign dengan ref this
		this.alamat = alamat;			// dan return nya di hilangkan
	}							  
	let data = new Obj("ikul", "banggai");		// new untuk instant dari constructor 
							// (wajib kalau tidak dianggap panggil function declaration)(dan undefined)
	
	/*
	---------------------------
		- solusi: masukkan object constructor dan instance ke dalam object (siswa)
		- tehnik ini hemat (tulis sekali dlm) memory
		- bungkus templat object dan fungsi instance dalam sebuah object(dataobj)
	*/ 
	let siswa = {
		Obj    : function (nama, alamat){		// f constructor
					this.nama = nama;
					this.alamat = alamat;
				  },
		newObj : function(nama, alamat){		// f instance (new)
					return new this.Obj(nama, alamat);
				  }
	}
	function genObj(nama, alamat){ 				// untuk memanggil fungsi obj kita pake function lagi
		let hasil = siswa.newObj(nama,alamat);		// yang mem panggil "new instance" newObj()
		return hasil; 					// newObj-> return newObj -> masukan ke return hasil (jadilah instance)
	}
	let hasil2 = genObj("furqon","jepara")			// tinggal pake generate genObj() tanpa haus memory
	let hasil3 = genObj("lazarus","manado")

	console.log(hasil2);
	console.log(hasil3);

	/*
	---------------------------
		kasus: repotnya tambah method dengan "function" dan "obj method": 
		6. kelemahanya saat "parameter obj" bertambah maka method nya harus di daftarkan jg
		7. repot mengelola 2 0bject!
		8. solusi: [Object.create] untuk bisa melakukanya otomatis
	*/
	function fSiswa(nama, energi){				// 1. bikin siswa={} dg func
		let siswa        = {};
			siswa.nama   = nama;			// 2. tiga propery
			siswa.energi = energi;
			siswa.makan  = methodSiswa.makan;	// 3. masukan tiga method ke param siswa{} dari obj di luar
			siswa.main   = methodSiswa.main;
			siswa.tidur  = methodSiswa.tidur;
		return siswa;
	}
	const methodSiswa = {					// 4. obj berisi 3 method
		makan: function(porsi){				// 5. method ini berbentuk constructor
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
	let sandhika = fSiswa("sandhika",10);
	let doddy	 = fSiswa("doddy",20);
	console.log(sandhika.energi)

	/*
	---------------------------------------------
		9. Object.create
		- bedakan pada [object.create] dg di atas
		- sama saja sih, bedanya hanya method di buat otomatis dg [object.create]
		  method ngambil dari object luar, efisien memori (di tulis sekali)
		- tapi kita tetap bikin 2 method yg berbeda, masih 2 kali kerja
		- solusi: fungsi fSiswa harus dibuat dg constructor (prototype)
	*/ 
	function fSiswa(nama, energi){				// func buat obj
		let siswa = Object.create(methodSiswa);		// obj di buat dg object.create(args obj dr luar berisi method)
			siswa.nama = nama;			// properti isi manual (nilai dari arg) 
			siswa.energi = energi;
		return siswa;
	}
	const methodSiswa = {					// object berisi mehod yang akan di oper jadi method obj class		
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
	let sandhika     = fSiswa("sandhika",10); 		// class sudah bisa di instance
	let doddy	 = fSiswa("doddy",20);
	console.log(doddy.energi);				// object dah jadi
	/* 
	----------------------------------------------
	4. PROTOTYPE ================================= intinya disini (diatas hanya merunut bagaimana terbentuknya prototype)
	- saat constructor dibuat (func yg return di ganti dg this) 
	  kita tetap di buatkan "prop this" "object.create" "return" di background
	- bukan hanya itu kita jg di buatkan properti tambahan bernama "prototype" di background (ini sifat bawaan ya)
	*/ 
	function siswa(nama, energi){
		this.nama = nama;
		this.energi = energi;
	}
	function siswa(nama, energi){
		// let this : Object.create(siswa.prototype) 	// di background (Object.create)
		this.nama = nama;
		this.energi = energi;
		// this.prototype;				// di backrgound (prototype)
		// return this;					// di background (return)
	}
	/*
	---------------------------------------------
	class inheritance
	test menambahkan properti/method baru baru pada object secara otomatis
	sehingga kita hanya mengurus properti dan method tambahanya saja, constructornya dah bebas dari penambahan	
	*/
		function siswa(nama, energi){			// obj constructor
			this.nama = nama;			// dg dua properti manual
			this.energi = energi;
		}
		siswa.prototype.salam = "halo";			// sekarang tambahkan properti baru ke obj siswa via prototype 
		siswa.prototype.makan = function(porsi){	// coba jg tambahkan method(makan) 
			this.energi += porsi; 			// berisi method function biasa (bukan bagian dari constructor)
			return `halo ${this.nama}, selamat makan!`; 
		}
		let aqil = new siswa('aqil', 10)		// instance
		console.log(aqil);				// saat instanc di akses, properti tambahan tidak ada. gak taunya ada di bawah (dlm proto)
		console.log(aqil.salam);			// tampilkan prop baru
		console.log(aqil.energi);			// tampilkan prop lama
		console.log(aqil.makan(2));			// tampilkan prop method
	
	/* CONCLUSI:
		- jadi kalau mau bikin methode tinggal taruh atau panggil disini tidak perlu inheritance prototype
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

/* CLASS
lihat disini cara bikin class dah happy coding! tanpa mendalami bagaimana terbentuknya 
--------------------------------------------------------------------- */
class coba{}			// dasar CLASS
let aqil = new coba()		// dasar INSTANCE (OBJECT)
/* ------------------------------------------------------------------ */ 
class siswa{ 							// bikin Class pakai keyword class
	constructor(nama, energi){				// class berisi constructor, dan method2
		this.nama = nama;
		this.energi = energi;
	}
	// mau bikin method tinggal "taruh" disini, tidak perlu bikin diluar(inheritance prototype)(meski bisa)
	makan(porsi){						// keyword function tak ada
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
let aqil = new siswa("aqil", 10); 				// instance
console.log(aqil.nama);						// gunakan
console.log(aqil.energi);	
console.log(aqil.makan(3));	
console.log(aqil.main(4));	
console.log(aqil.tidur(5));	

/* THIS
- adalah "object" yang merujuk pada scoopnya dimana ia di panggil atau di tulis
- jika di panggil dalam constructor maka this berlaku pada instans nya masing2 ("new");
- kata pendek nya this adalah "object" yang di buat oleh js di background dlm object yang sedang di buat
--------------------------------------------------------------------- */
console.log(this);			// hasil: window
function coba(){
	console.log(this)		// hasil: coba
}
// CLASS SELESAI =======================================================

