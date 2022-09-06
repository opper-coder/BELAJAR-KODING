/*
DAFTAR ISI:
Materi Video :
- Pendahuluan				-> pembukaan
- Pengenalan OOP			-> OOP sintem CLASS dan instance
- Membuat Constructor Function		-> 	-- darisini adalah pengenalan cara kerja CLASS fitur baru ES6
- Property di Constructor Function	-> 	--
- Method di Constructor Function	-> 	--
- Parameter di Constructor Function	-> 	--
- Constructor Inheritance		-> 	--
- Prototype				-> 	--
- Prototype Inheritance			-> 	--
- Class					-> blueprint. class Siswa{}, new Siswa(), Siswa1.nama, Siswa1.halo()
- Constructor di Class			-> func generate "properti" obj dalam class
- Property di Class			-> dua: 1. generate dr dlm class, 2. gen dr luar class
- Method di Class			-> "fungsi biasa" yg di tanam ke obj "oleh" class
- Class Inheritance			-> sistem mewarisi "prop" dan "method" parent-child
- Super Constructor	(properti)	-> akses "properti" parent(jika terjadi generate ulang)
- Super Method	(method)		-> akses "method" parent(jika terjadi replace)
- Getter dan Setter di Class		-> function khusus dalam khususnya di OOP pengambil dan pengeset data property
- Public Class Field			-> property yang dapat di akses dari mana saja
- Private Class Field			-> property yang dapat di akses dari dlm class saja
- Private Method			-> method yang dapat di akses dari mana saja
- Operator instanceof			-> method yang dapat di akses dari dlm class saja
- Static Field				-> properti khusus untuk class (tidak untuk instance)
- Static Method				-> method khusus untuk class (tidak untuk instance)
- Error					-> super class Error
- Error Handling			-> mengani error dg try, catch, finally (pada sistem class, boleh pada apasaj)
	try, catch,finally		-> jalan alternatif untuk keluar meski ada hambatan
	then(), catch(), finally() 	-> ada pada pembahasan asynchronous agak mirip memang
- Membuat Class Error sendiri		-> bikin instance class error sendiri. ada kelebihanya
- Iterable dan Iterator			-> 
- Materi Selanjutnya			-> 
	  JavaScript Standard Library
	  JavaScript Modules
	  JavaScript Document Object Model
	  JavaScript Async
	  JavaScript Web API
*/


/* - Pendahuluan ---------------------------------------- 
		sudut pandang pemrograman: OOP, imperatif, functional, prosedural dll
		oject 			-> data berisi property dan method
			properti		-> variabel dalam object yang berisi value
			method			-> properti dalam object yang berupa function
			function 		-> adalah type data function 
			method vs function	-> method adalah milik object. function itu mandiri native (misalnya function "dalam" argumen method)
		class			-> blueprint
		class extends		-> inheritance
		new			-> instance atau object yang di buat dari class
		
*/ 		
/* - Pengenalan OOP ------------------------------------- 
		adalah pemrograman orientasi object. pengelolaan function dan variabel yang di tanam dalam object 
    		sehingga bisa terjadi: instance, inheritance, modifikasi instance, public, private, ...
*/ 
/* - Membuat Constructor Function ----------------------- 
		saat kita bikin object manual itu ya bebas sekali mengatur properti dan method sehingga uniq
		dalam OOP pembuatan object harus paki instance supaya terprediksi
*/ 
/* - Property di Constructor Function ------------------- */ 
/* - Method di Constructor Function --------------------- */ 
/* - Parameter di Constructor Function ------------------ */ 
/* - Constructor Inheritance ---------------------------- */ 
/* - Prototype ------------------------------------------ */ 
/* - Prototype Inheritance ------------------------------ */ 
// ======================================================================
/* - Class ----------------------------------------------
		karena kita sudah mengerti object maka langkah dlm OOP selanjutnya adalah mengenal CLASS
		CLASS		: blueprint untuk menjenerate object (jadi object dalam OOP tidak boleh di buat langsung)
		DIDALAMNYA	: ada contructor: berguna untuk create.object sekaligus bisa set properti
		AKSES 		: karena ini hanya template dia tidak di akses maleinkan di instance dengan keyword new
		INSTANCE 	: barulah instance menjadi object yang sudah bisa di akses
 */ 
		class Siswa{}					// basic class (anjuran pakai huruf besar)
		let aqil = new Siswa; 				// basic instance
/* - Constructor di Class -------------------------------
		CONSTRUCTOR : fungsi jika ini di buat maka kita bisa set prop
 */ 
		class Siswa{
			constructor(){} 			// basic
		}
/* - Property di Class ----------------------------------
		PROPERTI	: adalah properti yang akan di masukkan dalam object instanc nya seperti field tabel lah gitu
 */ 
		class Siswa{
			constructor(name){
				this.nama = name; 		// generate prop dlm constructor(berlaku utk semua instance)
			} 					
		}
		let aqil = new Siswa("aqil"); 			// (oper nilai ke constructor yg akan jadi properti)
		aqil.alamat= "saiti"; 				// prop dibuat di luar contructor via instance (hany berlaku pd instance terkait)
/* - Method di Class ------------------------------------
		METHOD		: adalah "fungsi biasa" yang akan di tanam dalam objek instace
		CARA 		: di tulis tanpa keyword "function"
 */ 
		class Siswa{
			constructor(){} 					
			satu(){console.log(`halo satu`)} 	// bikin method dibwh "constructor" (bisa dalam constr tp boros memori)
		}
		let aqil = new Siswa; 			
		aqil.satu()					// akses
/* - Class Inheritance(mewarisi) ----------------------------------
		PEWARISAN	: saat class dibuat. kita boleh juga extends class untuk mewarisi prop dan method nya kemudian di 
					  personalisasi dengan prop dan method baru
 */ 
		class Siswa{					// 1. bikin class PARENT (Siswa)
			halo(){console.log(`halo saya adalah murid bernama aqil`)}
		}
		class Guru extends Siswa{			// 2. class CHILD (Guru)
			halo(){console.log(`halo saya adalah Guru bernama subhan`)} // 2.1 bikin method(halo) dg nama yang sama dg induk(replace)
		}
		let aqil = new Siswa; 
		let subhan = new Guru;
		console.log(aqil.halo()) 			// 3. hasil: halo aqil (class parent)
		console.log(subhan.halo())			//    hasil: halo subhan (class child)
								// 4. coba hapus method halo() di class Guru. hasil: class murid akan diakses(mewarisi)				
/* - Super Constructor ----------------------------------
		CONSTRUCTOR CHILD : saat kita extend kan parent sudah memiliki constructor kita tinggal isi prop dan method personalisasi jika mau
					: tapi jika maksa membuat constructor sendiri maka konsekwensinya minta izin menggunakan super() 
 */ 
		class Siswa{					// 1. class PARENT (Siswa)
			constructor(nama){			// 2. memiliki constructor(diwariskan ke semua child)
				this.nama = nama;		// 3. generate properti
			}
		}
		class Guru extends Siswa{				// 4. class CHILD (Guru)
			halo(){ return `halo namaku: ${this.nama}` }	// 5. tiada CONSTRC, prop nama (yg diambil method) DIWARISI oleh parent
		}
		let subhan 	= new Guru("subhan","bunta");
		console.log(subhan.halo());
		/* super constructor disini: --------------------- */ 
		class Siswa{							
			constructor(nama){			// 1. pada class PARENT ada constructor
				this.nama = nama;				
			}
		}
		class Guru extends Siswa{
			constructor(nama, alamat){		// 2. dan class CHILD juga bikin constructor
				super(nama); 			// 3. maka wajib panggil CONSTRUCTOR PARENT dg keword super(prop, prop)(wajib dlm constr,dan sekali)(jika tidak, error)
				this.alamat = alamat; 		// 4. prop baru(child only)
			}				
			halo(){ return `halo namaku: ${this.nama}\nalamatku: ${this.alamat}` } 
		}
		let subhan 	= new Guru("subhan","salabenda");
		console.log(subhan.halo());
/* - Super Method ---------------------------------------
		SUPER METHOD 	: sama dengan super constructor kita minta izin jg pake super()
 */ 
		class Siswa{							
			halo(){ console.log("halo Siswa...") } 	// 1. method halo() di class parent
		}
		class Guru extends Siswa{
			halo(){  				// 2. method halo() di class child (replace) 
				super.halo(); 			// 4. tapi saat mau manggil yg di parent(replaced) dari child, bisa(pakai super.halo())(wajib dalam method)
				console.log("halo Guru...")
			} 
		}
		let subhan 	= new Guru();
		subhan.halo();					// 3. saat di panggil di child maka yng tampil yg child(replacer)
/* - Getter dan Setter di Class -------------------------
		- adalah fungsi khusus yg berguna membaca dan menulis isi properti yang ada di instance class yang berbentuk fungsi yang memiliki return
		  tapi kita bisa akses selayaknya variabel. 
		- cara membuat ini dengan keyword "get" dan "set" tanpa keyword "function"
		- kelebihan: panggil kayak variabel saja. dan buat tinggal get dan set saja tanpa function
		- di materi dasar javascript ada juga
 */ 
		class Orang{
			constructor(){}
			get namalengkap(){} 			// basic get
			set namalengkap(){}			// basic set
		}
		// -------------------
		class Orang{
			constructor(namadepan, namatengah, namabelakang){
				this.namadepan = namadepan;
				this.namatengah = namatengah;
				this.namabelakang = namabelakang;
			}
			get namalengkap(){return `${this.namadepan} ${this.namatengah} ${this.namabelakang}` }
			set namalengkap(nama){
				const hasil = nama.split(" ");		// karena kita terima sbg satu string maka kita pecah jd array
				this.namadepan= hasil[0];		// lalu asign 1/1
				this.namatengah= hasil[1];
				this.namabelakang= hasil[2];
			}
		}
		const aqil = new Orang("zikri", "aqil", "athoillah")	// 1. instance awal 
		console.log(aqil);
		console.log(aqil.namalengkap);				// 2. akses get (kayak manggil parameter saja)
		aqil.namalengkap = "maulidia silmi kafah"		// 3. akses set (kayak set/replace parameter saja)
		console.log(aqil);
/* - Public Class Field ---------------------------------
		- di javascript class mendukung properti "private" dan "public"
		- private: artinya properti tersebut hanya bisa di akses dari dalam class bersangkutan saja
		- public: bisa di akses dari mana saja, secara default semua prop di buat secara public, 
		- supaya membedakan dg private di buatlah beberapa aturan:
			- public: 	properti di buat deklarasikan dulu di luar constructor() (maka terjadi/nempel dalam class) 
						(meskipun sebenarnya bebas dimana) dg atau tanpa value 
						(biasanya kan kita buatnya di dalam constructor)(sehingga terjadi/nempelnya di proto)
						(mungkin syarat public harus diluar constructor hanyalah pengantar terhadap private nantinya, ikuti saja dulu)
			- private:  aturan untuk private ada di bawah
 */ 
 	class Orang{
		nama;							// buatlah diluar constructor, tanpa let, dengan atau tanpa value
		alamat;
		umur=12;
		construct(){}						// urusan properti public di constructor boleh ngambil dari atas(nggak apa2 bikin 2 kalau mau)
		halo(){}
	}
	const aqil = new Orang()
	console.log(aqil);
/* - Private Class Field --------------------------------
		- kita sudah nulis public di luar constructor nah untu menulis property private syaratnya adalah:
		- #nama; #alamat; yaitu tambahkan pagar pada property di luar constructor tadi, itu aja
 */ 
 	class Orang{
		#nama;							// private
		#alamat;
		#umur=12;
		construct(){}						// jadi benar kalau bikin public tetap di constructor aja kalau saya. yg diluar cukup yg private
		halo(){}
	}
	const aqil = new Orang()
	console.log(aqil.umur);						// saat di akses atau di replace maka itu bukan properti yang bersangkutan(aqil.#umur private)
									// melainkan aqil.umur public(yg lain)(makanya undefined)(saat di replace)nilainya akan beda nantinya
	console.log(aqil.#umur);					// kalau di ubah dari luar jg g bisa										
/* - Private Method -------------------------------------
		- sama konsepnya dengan field di atas kalau mau private tingal kasih tanda pagar
		- nanti access method modifier nya dari dalam secara public
 */ 
	class Orang{
		#halo(){console.log("halo...")}				// private method
	}
	const aqil = new Orang()
	console.log(aqil.halo());					// error: gak bisa di akses!
/* - Operator instanceof --------------------------------
		fitur untuk cek typedata dan cek instance? dengan "typeof" dan "instanceof"
 */ 
	class Siswa{}							// class Siswa
	class Guru extends Siswa{}					// class Guru
	const aqil = new Siswa();					// instance ke Siswa
	const subhan = new Guru();					// instance ke Guru
	console.log(typeof aqil);					// hasil: object (menayakan apa type datanya)(boleh pakai kurung ataupun tidak)
	console.log(typeof (subhan));					// hasil: object (menayakan apa type datanya)
	console.log(aqil instanceof(Siswa));				// hasil: true (menayakan apakah object ini instance ke: ... : bool)
	console.log(subhan instanceof Guru);				// hasil: true (menayakan apakah object ini instance ke: ... : bool)
	console.log(subhan instanceof Siswa);				// hasil: true (menayakan apakah object ini instance yang extends ke: ... : bool)

/* - Static Field ---------------------------------------
	saat kita bikin properti dalam class maka prop tersebut akan di warisi oleh instance
	bagaimana kalau kita ingin membuat properti khusus untuk class saja? (tidak nempel ke instance) solusinya pakai static
	cara: bikin properti diluar constructor seperti public dan private di atas lalu tambahkan "static"
		- static sifatnya global
 */ 
	class Configuration{
		static aplication = "trip";				// static field
		static version	= 6.2;
	}
	const config = new Configuration();
	console.log(config.version);					// hasil: undefined, sebab memang tidak ikut dalam instance
	console.log(Configuration.version);				// cara akses langsung ke class.static field
/* - Static Method --------------------------------------
		konsep sama dengan static field


 */ 
	class Configuration{
		static halo(){ console.log("halo static"); } 		// static method
	}
	const config = new Configuration();
	console.log(config.halo());					// error: tidak bisa di akses sebab memang tidak ikut dalam instance
	console.log(Configuration.halo());				// cara akses langsung ke class.static method

/* - Error ----------------------------------------------
		- ada banyak class error di JavaScript, yg semuanya Extends dr "class Error{}", artinya dia superclass semua class error di js
		- contohnya SyntaxError, TypeError, EvalError, dan lain-lain
		- lihat lainya disini: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types
		- CARANYA : contohnya kita buat error di sebuah function ya(tepatnya dalam if())(sebenarnya error bisa di mana saja di js)
				nah pada titik error terjadi kita pakai class error bawaan(jadi jangan bikin sendiri manual meskipun bisa)
				karena kalau di js error ini akan menghentikan eksekusi programnya. bahkan di tunjukan baris ke berapa, saat diklik
				bahkan di arahkan ke mode debuigging
 */ 
class Hitungan{
	totalkan(...angka){
		if(angka.length === 0){ 					// bikin kondisi jika true jalankan error nya
			throw new Error("Total Parameter harus lebih dari 0"); 	// cara instancenya: tinggal kasih throw depan new sbg penganti var) 
		}
		let hasil = 0;
		for( const a of angka){ hasil += a }
		return hasil;
	}
}
const pertama = new Hitungan()						// coba instance class nya
console.log(pertama.totalkan(1,1,1));					// hasil:3 > saat ada angka dikirim maka tidak error dan running normal 
console.log(pertama.totalkan());					// hasil:error > saat kosong, error. dan pesan nya di tampilkan
/* - Error Handling -------------------------------------
	Saat terjadi error di kode program JavaScript, kadang kita tidak ingin program kita berhenti Di JavaScript, 
	kita bisa menangkap jika terjadi error menggunakan try catch.
	Pada block try, kita akan mencoba mengakses kode program yang bisa menyebabkan error, 
	jika terjadi error, block try akan berhenti dan otomatis masuk ke block catch (misalnya bikinkan pesan errornya)
	uniknya Jika tidak terjadi error, block catch tidak akan dieksekusi juga

	bahasa saya:
	try catch adalah: jalan bercabang untuk menangkap error: 
	- secara default program berjalan melewati try. jika mulus akan keluar melanjutkan program berikutnya.(catch di abaikan)
	- tapi saat dalam try ada error(yg harusnya berhenti), jalan keluar langsung pindah ke catch utk melanjutkan program berikutnya.
 */ 
try{}catch(){}								// basic
// -----
class Hitungan{								// 1. class
	totalkan(...angka){						// 2. method
		if(angka.length === 0){ 
			throw new Error("Total Parameter harus lebih dari 0");	// 3. ada aplikasi error. jika nol, error()
		}
		let hasil = 0;
		for( const a of angka){ hasil += a }
		return hasil;
	}
}
const pertama = new Hitungan();						// 4. instance
try{ 									// 5. ada try catch
	console.log(pertama.totalkan(2));				// 6. saat melewati ini method pertama.totalkan() coba errorkan
	console.log("kode try disini akan berhenti jika error, lanjutkan!"); // 7. jika error app berhenti, gak sampai kesini
} 
catch (error){
	console.error(`terjadi error: ${error.message}`); 		// 8. dan akhirnya aplikasi lewat catch ini. error.message adalah properti bawaan JS
}									// 	    yang menangkap dari instance class error di aplikasi throw di atas
console.log("kode program tidak akan berhenti");			// 9. sehingga aplikasi nyampai kesini melewati "catch"									
									// 10. tapi jika langkah 7 tidak error perjalanan tembus ke 9. ini melalui "try"									
/* - finally --------------------------------
		finally adalah seperti aplikasi diluar try catch finally. yaitu error atau tidak silahkan finally tetap di eksekusi
 		istilahnya "gerbang keluar dari try catch"
 */ 
class Hitungan{
	totalkan(...angka){
		if(angka.length === 0){ 
			throw new Error("Total Parameter harus lebih dari 0");
		}
		let hasil = 0;
		for( const a of angka){ hasil += a }
		return hasil;
	}
}
const pertama = new Hitungan();
try{
	console.log(pertama.totalkan());
	console.log("kode try disini akan berhenti jika error, lanjutkan!");
} 
catch (error){
	console.error(`terjadi error: ${error.message}`);
} 
finally{ console.log("keluar lewat disini")}				// finally. gerbang keluar lewat sini
console.log("ini sudah program lainya");
/* - try finally ------------------------------
	ada juga try finally tapi jarang di gunakan
 */ 
 	console.log("lanjutkan");
/* - Membuat Class Error Sendiri ------------------------------
		Walaupun JavaScript sudah memiliki standard class Error, 
		Namun alangkah baiknya, kita membedakan tiap jenis error misalnya:
		error koneksi, error validasi, error input form dll, atau bahkan notifikasi mungkin
		kelebihanya: adalah selain Error standard ada messagenya, kita juga bisa kirim message lagi (jadi ada2 message: standard dan custom)
		caranya: 	cukup membuat class turunan dari class Error
					Dan jangan lupa tambahkan parameter message, dan field
					message adalah pesan default bawaan, field pesan tambahan dari kita
					agar bisa dikirimkan ke parameter di constructor class Error
					bentuk dasar nya di bawah ini [class ValidationError extends Error]
 */ 
class ValidationError extends Error{					// 1. class anak dari error
	constructor(message, field){					// 2. propertinya bikin 2, message(bawaan) dan field(custom)
		super(message); 					// 3. properti ini di ambil dari class Error parent standard
		this.field = field; 					// 4. buatan kita untuk custom
	}
}
/* --- */
class Hitungan{								// 5. misalnya ada aplikasi class yang ada potensi error
	totalkan(...angka){						// 6. di dalamnya ada method
		if(angka.length === 0){ 
			throw new ValidationError("Total Parameter harus lebih dari 110","halo..."); // 7. yag method tersebut ada spot errornya(throw)
		}
		let hasil = 0; 
		for( const a of angka){ hasil += a }
		return hasil;
	}
}
const pertama = new Hitungan();						// 7. kemudian kita instance
try{									// 8. kan defaultnya aplikasi akan lewat disini (try)
	console.log(pertama.totalkan());				// 9. saat pemanggilan error terjadi (kirim data kosong), aplikasi akan berhenti dan switch ke catch
	console.log("kode try disini akan berhenti jika error, lanjutkan!");	// 9.1 sehinga pas error disini di ignore, kalo g error ya lewat sini menuju finnaly
} 
catch (error){								// 10. disinilah(catch) jalan alternatif saat di try terjadi error, tp saat tidak error ini di ignore
	console.error(`terjadi error: ${error.message} pesan2: ${error.field} `); // 11. perjalanan berlanjut menuju ke finally(finally adalah gerbang keluar. lewat try atau catch ,finally tetaap di eksekusi)
} 
finally{ console.log("keluar lewat disini")}
console.log("ini sudah program lainya");


/* - then() catch() finally() ------------------------------
	berbeda ini adalah jalan terus dari hasil penagkapan resolve promise()
	catch penagkapan reject promise() 
	finally jalan keluar dari promise()
	pembahasan ada pada asynchronous di bahas disini agar membedakan dengan try{}catch(){}
 */ 





/* - Iterable dan Iterator ------------------------------
masih terlalu advance jadi skip dulu!
*/ 
/* - Materi Selanjutnya ---------------------------------
  JavaScript Standard Library
  JavaScript Modules
  JavaScript Document Object Model
  JavaScript Async
  JavaScript Web API
*/ 

// CLASS OOP SELESAI =======================================================
