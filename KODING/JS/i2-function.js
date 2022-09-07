/* FUNCTION =========================================================
DAFTAR ISI:
- pengenalan						-> pengertian dan konsep
- BASIC: ----->								
	- basic						-> function nama(){}	
	- call/panggil 					-> tampilPesan("aqil");
	- function expression/anonimuous: 		-> const nama = function(){} 
	- arrow function
		- basic 				-> const nama = (param) => {action}	
		- bisa hapus kurung() 			-> const nama = param => {action}
		- implisit return, hapus () dan {}	-> const nama = param => action; hapus {} bahkan return jika hanya saru baris return saja
		- tidak bisa hapus( dua arg )		-> const nama = (param, param2) => {action}
		- wajib pakai kurung saat parameter kosong	-> const nama = () => action
	- console.log, info, tabel, warn, error 	-> 
	- method vs functional				-> bedanya: function adalah type data, method adalah properti dalam object (meski berupa function)
- SPESIFIKASI: ----->
	- argument:					-> adalah: penerima parameter dlm func
		- parameter				-> adalah: variabel oper data ke func									
		- Default Parameter			-> pengganti (penjaga) args kosong
		- optional parameter			-> awas, bisa jadi boomerang
		- Rest Parameter/rest argument		-> variabel khusus penangkap banyak parameter dan konvert ke array
		- object parameter/args			-> tidak ada masalah
		- Spread syntax 			-> mau oper array? eit pakai ini saja, jangan salah
		- pseudo arguments			-> pseudo arguments/arguments global
	- return					-> hasilnya boleh : bool, string, numb, concate, math, typedata, var, array, obj, callback func lain dll;
	- scoop						-> ada2 local dan global == window dan block, this adalah scoop obj yang ini
	- hoisting					-> katrol/kerek keatas scoop terhadap fn() dan var
- PENEMPATAN: ----->
	- Function Sebagai Value 			-> sebagai value variabel, beda dg arrow functon ya
	- callback. Higher Order function(HOF)		-> function parameter callback
	- callback HOF chaining 			-> function argument callback
	- Anonymous Function calback parameter 		-> function parameter callback anonimouse
	- function dalam function			-> bisa
	- Recursive Function				-> seperti loop
	- closure 					-> upaya keluar dr scoope ini agak rumit, karena semua jangkauan terbatas oleh scoop
							   maka keluarkan dengan function yang memiliki return. lihat sandika galih
- TAMBAHAN
	- function lazy. function generator 		-> saat di panggil, baru di buatkan
	- THIS 						-> adalah "pseudo object" pada "scoop" object parent (sebenarnya ini pembahasan object lihatlah!)
	- getter setter 				-> function khusus di OOP silahkan lihat
---------------------------------------------------------------------------------------------- */
	/* pengenalan: 
	--------------------------------------------------------
   		bloc kode yang akan berjalan saat kita panggil
   		pada dasarnya tidak memiliki parameter dan return, tp kalau mau bisa menerima keduanya
	   	CONTOH KEMUDAHAN FUNCTION:
	   	contoh1: bayangkan saat angka 10 berubah menjadi 20 maka scrip yang ke 2 lebih simpel dan reusable
	 */
		for(var i=0; i<10; i++){ console.log(i); } 			     	// cara pertama
		function pengulangan(n){ for(var i=0; i<n; i++){ console.log(i); } } 	// cara kedua
		pengulangan(20);
		/* contoh2: atau lebih simpel lagi ini */
		function pengulangan(n, aksi){ for(var i=0; i<n; i++){ aksi(i); } }  	// cara ketiga
		pengulangan(20, alert);						     	// pilih alert atau console.log

/* BASIC: ==============================================================
	bentuk dasar: -------------------------------------- */
		function tampil(){}
		function tampilPesan(nama){alert("halo " + nama);}	

	/* call/panggil: 
	panggil sekali atau berkali2 silahkan
	--------------------------------------------------------- */
		tampilPesan("aqil");	tampilPesan("aqil", "izza");	

	/* function expression/anonimuous: 
	---------------------------------------------------------
	adalah function tanpa nama. mirip if ternary */
		const tampilPesan = function(nama){alert("halo " + nama);} 

	/* arrow function: 
	---------------------------------------------------------
	Arrow function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya
	Namun terdapat limitasi dan juga tidak bisa digunakan di semua situasi
	tidak memiliki fitur arguments object
	tidak bisa menggunakan function generator (nanti di bahas pada lazy)
	tidak bisa mengakses this (yang nanti akan dibahas di function di object)
	tidak bisa mengakses super (yang nanti akan dibahas di JavaScript Object Oriented Programming)
		const halo = () => {}			// basic
		const halo = () => 			// tanpa block -> juga tanpa return 
		const halo =  => 			// tanpa parameter 
		const halo(()=>{}); 			// function arraw dalam argumen function
		const halo = (nama) => {console.log("halo " + nama)}
		halo("aqil");				// panggil
	 */
			/* basic: */
			const tampilPesan = (nama) => {alert("halo " + nama);}	

			/* bisa hapus kurung(): */
				const tampilPesan = nama => {alert("halo " + nama);}

			/* bisa hapus () dan {} (implisit return): */
				const tampilPesan = nama => alert("halo " + nama);

			/* tidak bisa hapus kurung( dua arg, pisahkan dg koma ): */
				const tampilPesan = (nama, alamat) => { return "halo " + nama + alamat }

			/* implisit return: */
				const tampilPesan = nama => "halo " + nama 	

			/* wajib kurung tiada argumen: */
				const tampilPesan = () => "halo "  		

	/* method vs function:
	--------------------------							
		- "function" adalah type data, 
	 	- "method" adalah properti dalam object (yg berupa function juga sih) 
		- kalau "properti" adalah variabel dalam object yang berisi value
	 */
	
/* SPESIFIKASI: ========================================================= */
	/* Argument: */
		/* Function Parameter:
		--------------------------
			- tempat oper umpan
			- akan di isi saat func di panggil dan sesuai index urutan jika banyak
			- nama parameter akan di baca dalam block function bersangkutan saja
			- jk lebih dari satu pisahkan dg Koma
			 */
		
		/* Default Parameter: 
		---------------------------
			- optional, tidak wajib
			- pengganti (penjaga) args kosong yg tidak di oper maka di gantikan dengan default
			 */
				function orang(nama="anonimouse", alamat="tidak di ketahui"){}		// cara nulis
				orang();			// jika di panggil tanpa oper data maka default akan di ambil

		/* Optional Parameter 
		----------------------------
			- parameter itu tidak wajib "ada" dan tidak wajib "dioper" jika ada , 
			  jika tidak di isi maka nilainya "undefined"
			- kalaupun kebanyakan parameter yang dikirim tetap tidak error, 
			  lebihanya akan di ignore, ini kayak boomerang karena tidak error 
			  */

		/* Rest Parameter/rest argument 
		----------------------------
			- adalah: tempat menangkap umpan banyak (yg bukan array) dalam satu wadah dan di konversi ke array 
			- hanya boleh ada satu, dan posisi di akhir index parameter
			- banyak parameter di oper?, maka perangkap dalam array oleh "rest"
			  */
				function jumlahkan(nama, ...data){					// function dengan rest yang akan menangkap data banyak
					let total = 0;							// init hasil
					for(d of data){ total += d; }					// karena di tangkap dan jadi array maka bisa di loop of
					console.log(`jumlah ${nama} adalah: ${total}`)	// hasil
				}
				jumlahkan("jeruk", 10,11,14,5,7);					// panggil dengan oper banyak parameter sesuai(di bedakan dg) typedata

		/* object parameter
			ngambil object untuk di oper
		------------------------------- */
			/* contoh1: */
			function salam({nama, alamat}){ return `halo nama saya ${nama} alamat saya ${alamat} jaya...` }
			const biodata = {nama : "izza", alamat : "banggai"}
			console.log(salam(biodata))
			/* contoh2: */			
			function salam({nama, alamat : {kab, kec}}){ return `halo nama saya ${nama} alamat saya kabupaten ${kab} kecamatan ${kec} raya` }
			const biodata = {nama : "izza", alamat : { kab : "banggai", kec : "nuhon" }}
			console.log(salam(biodata));

		/* Spread syntax 
		----------------------------
			kalau kita oper parameter menggunakan array itu tidak bisa,
			dia akan salah tafsir yang dikirim adalah satu array saja, 
			padahal kita akan kirim isi dari arry tersebut, 
			maka gunakan spread syntax supaya array di pecah jadi variabel2 yang akan di oper via parameter
			nanti diterima juga oleh rest boleh
			*/
				let arr = [10,20,30,40];						// kita punya array akan kita oper ke function
				jumlahkan("jeruk", arr);						// ini error: oleh "rest argument" akan di anggap "satu" parameter bukan "banyak" parameter 
				jumlahkan("jeruk", ...arr);						// kalau array oper dg ini ...arr (spread syntax), nanti di tangkap oleh ...arg (rest argument)

		/* pseudo arguments 
		-----------------------------
			kita tidak memiliki argument, tapi kalu ada yang ngirim kita bisa terima kok
			yaitu melalui pseudo arguments global
			 */
				function jumlahkan(){							// padahal kita tanpa argumen
					let total = 0;
					for(d of arguments){ total += d; }				// kita tetap bisa tangkap parameter di "pseudo arguments/arguments global"
					console.log(`jumlah adalah: ${total}`)				// cons: kita tidak bisa menentukan argumen keberapa type data apa bisa tapi harus pilah2 manual
				}
				jumlahkan(10,10,10,10);

		/* Return 
		-------------------------------
			- pada dasarnya function tidak memiliki data sendiri tapi jika mau boleh pakai return
			- Function hanya bisa satu data, jika beberapa data sekaligus, 
			  kita bisa pakai Array , if, switch (mungkin jg object) untuk menangani return value nya
			- keyword return, lalu diikuti dengan data yang ingin kita hasilkan.
			- biasanya hasil nilai yang di maksud di kalkulasikan dulu lalu hasilnya di bungkus dalam variabel > kembalikan variabel
			- hasilnya boleh : bool, string, numb, concate, math, typedata, var, array, obj, callback func lain dll;
			*/
		/* Scope 
		-------------------------------
			- aktifitas d js itu berada dalam global object bernama window
			- this adalah pemanggilan object scoopnya, saat di panggil di global dia akan merujuk ke window
			  saat this di panggil dalam object atau class maka akan merujuk object atau class bersangkutan tsb
			- Ada dua jenis scope, global scope dan local scope.
			- kayaknya setiap block {} memiliki scoop local, sudah saya test di block if
			- variabel global bisa di akses dari local, tidak sebaliknya
			- scoop erat kaitanya dengan hoisting maka lihat hoisting! 
			*/
		/* Hoisting 
		-------------------------------
			- yg terkait hoisting ada dua: function dan variabel dengan keyword var
			- saat fn() dan var di mengalami 2 fase pertama fase create kedua fase eksekusi
			- saat fn() di buat maka langsung di kerek keatas dan akhirnya bisa di eksekusi kapan saja
			- saat var di panggil jika belum pernah di buat maka error tapi saat di declarasikan
			  di atas console ternyata undefined meskipun belum di assign. karena di hoisting
			- hoisting hanya akan di lakukan di dalam scoopnya
			*/

/* PENEMPATAN: ========================================================= */

		/* function di variabel 
		------------------------------- */
			function hallo(nama){			// kita bikin function biasa
				console.info(`selamat datang ${nama}!`);
			}
			let varhalo = hallo;			// juga bikin variabel dengan nilai funtion tanpa kurung. kalau dg kurung maka running
			hallo("aqil");				// function masih bisa di panggil
			varhalo("silmi");			// variabel juga bisa di panggil dengan kurung
			console.log(varhalo)			// hasil: typedata function (berubah)

		/* callback dan higher order function 
		---------------------------------
			- DALAM JS function adalah first class object. object saja terbuat dari function
			- alasan pakai higher order function:
				1. abstraksi (penyederhanaan)
				2. anekdot;
					"cara membuat program ada dua:"
					"1. Buat program sesederhana mungkin hingga jelas-jelas tidak ada kekuranganya "
					"2. Buat program sekomplex mungkin hingga tidak ada kekurangan yang jelas-jelas"
				3. pendekatan functional programing lebih aman efisien dan mudah
			- sama dengan type data lainya function dan object, bisa di simpan sebagai argumen dan return function lainya
			- (func konsumen ) disebut: higher order function (HOF) 
			   termasuk juga (function yang memiliki return value callback)
			- (func akan di oper) disebut: callback
			 */
				function hallocallback(callback){			// 1. HOF: adalah yang akan mengeksekusi callback di dalam
					callback("iza");				// 4. eksekusi callback
				}
				function hallo(nama){					// 2. callback: adalah fungsi biasa
					console.info(`selamat datang ${nama}!`);
				}
				hallocallback(hallo);					// 3. oper callback
			/* contoh2: function konsumen */
				function kerjakanTugas(matakuliah, selesai){			// 1. HOF
					console.log(`mulai kerjakan tugas ${matakuliah}`);
					selesai();						// 4. eksekusi
				}
				function selesai(){						// 2. callback
					alert("selesai mengerjakan tugas")	
				}
				kerjakanTugas("matematika", selesai);				// 3. oper parameter, callback 
			/* contoh3: function yang memiliki return value callback*/
				function salam(waktu){
					return function(nama){ console.log(`halo ${nama} selamat ${waktu}`); }
				}
				let selamat = salam("sore");
				console.dir(selamat("aqil"));					// pembahasan ada di closure

			/* contoh4: function anonimaouse dalam parameter */
				let halo = function(callback){callback("silmi")} 	// 1. HOF callback eksekusi
				halo(function (nama){console.log(`halo ${nama}`)}); 	// 2. callback parameter

		/* HOF FUNCTION CHAINING 
		-------------------------------------
			ada beberapa function HOF bawaan js
			 contoh4: 
				1. demonstrasikan saat punya array 
				2. lalu filter angkanya >= 3, dengan berbagai cara, mana yg lebih baik?
				
				*/
				const angka = [-1,8,9,1,4,-5,-4,3,2,9]; 	// punya array

			/*--- filter pakai for if */
				const newAngka = [];
				for (var i = 0; i<angka.length; i ++) {
					if( angka[i] >= 3 ){			// filter 
						newAngka.push(angka[i]);
					}	
				}
			/*--- filter pakai callback */
				const newAngka = angka.filter(saring); 		// HOF
				function saring(a){ return a >= 4 }		// callback

			/*--- filter pakai callback aarow lbh singkat */
				const newAngka = angka.filter( a => a >= 3);	// parameter arrow

			/*--- kalikan 2 pakai map, (fungsi lainya + - * / atau concat terserah: */
				const newAngka = angka.map( a => a * 2 );

			/*--- reduce berguna untuk melakukan sesuatu pd seluruh elemen array,
				- const newAngka = angka.reduce((a,c) => a + c) ;
				- dafaul nilai 0 jika tak ditulis di returnx sbg nilai awal "reduce( (a, c ) => a + c, 0 )"
			   contoh: sum kan seluruh elemen array reduce(...i+1+1, hasil):
			*/
				const newAngka = angka.reduce((accumulator,currentValue) => accumulator + currentValue) ;

			/* CONTOH FUNCTION CHAINING:
			 contoh pada array di atas saya akan lakukan 3 hal
				 1. cari angka > 5
				 2. kalikan 3
				 3. jumlahkan */
				const newAngka = angka.filter( a => a > 5 ).map( a => a * 3 ).reduce((a,c) => a + c ,0 ) // nol terakhir boleh tak di tulis

			/* Contoh5: */
			let mahasiswa = ["aqil", "izza", "andi"];
			let jumlahHuruf = mahasiswa.map( nama => nama.length )		// mau return array
			console.log(jumlahHuruf);

			let mahasiswa = ["aqil", "izza", "andi"];
			let jumlahHuruf = mahasiswa.map( nama => ({nama: nama, jumlahHuruf: nama.length}) )		// mau return object{} bungkus
			// console.log(jumlahHuruf);
			console.table(jumlahHuruf.nama);								// Pengganti konsole.log untuk array dan object

		/* Function dalam Function 
		--------------------------------------
			- Tidak ada batasan dimana kita bisa membuat function
			- Function yang terdapat di dalam, kita sebut inner function
			- Inner function hanya bisa diakses di scoop outer function. tidak dari luar */
				function outer(){
					function inner(){}
					inner()
					inner()			// bisa
				}
					inner()			// error

		/* Recursive Function 
		--------------------------------------
			pemanggilan function dalam function itu sendiri funsi mirip looping */
				function factorialRecursive(value){
					if (value === 1) {
						return 1;
					}else{ return value * factorialRecursive(value -1) }
				}
				console.log(factorialRecursive(5));

		/* Closure 
		--------------------------------------
			- definisi dari eko kurniawan:
			closure jarang di gunakan kayaknya, tapi penting untuk di ketahui
			Closure adalah kombinasi function dan bundel referensi ke data disekitarnya.
			Oke agak membingungkan memang, apalagi untuk yang baru pertama belajar
			Kita sudah tahu bahwa local scope tidak bisa diakses di luar scope nya
			Dengan kemampuan closure, kita bisa membuat sebuah function di local scope 
			dan referensi ke data di sekitar local scope tersebut, keluar scope nya
			- definisi dari saya:
			cara agar scoop local bisa di akses oleh global maka kita perlu membuat data tersebut:
			baik berupa function, array, objec, dll menjadi sebuah return dari sebuah function 
			akhir nya kita eksekusi dari luar
			*/

/* TAMBAHAN: ========================================================= */

		 /* Function Generator 
		 --------------------------------------
			- bikin data sebanyak array tapi pakai function
			- iterable (for) tapi nggak bisa di akses dengan index ([3])
			- kelebihanya ada yield yaitu memiliki fungsi bersifat "lazy"
			- contoh1 dasar function generator assign ke yield 1 per 1 */
				function* nama(){ yield }		// bentuk dasar, ada tambahan [*, yield]
				function* generatorku(){		// * -> penanda ini adalah generator jika tidak ada * js di kasih yield error
					yield "aqil";			// yield -> sbg "return" masing2 nilai yg bersifat lazy
					yield "iza";
					yield "silmi";
				}
				let hasil = generatorku()		// mirip array, tapi tidak bisa di akses pake index hasil[2]
				for(h of hasil){			// tapi bisa di loop (for of pada array)
					console.log(h)
				}
			/* contoh2 yield pakai loop	*/
				/* ----------- contoh lazy pada generator. GENERATOR LAZY: */
				function* ganjil(value){			// function*
					for (let i = 1; i <= value; i++) {	// for value input
						if (i % 2 === 1) { 		// if ganjil
							console.log(`yield ke: ${i}`); // * lihat perbedaan lazy disini
							yield i;		// return yield (generate data yield lazy)
						 }
					}
				}
										/* AKSES: */
				let buatGanjil = ganjil(20);			// * var() saat generator di call, "tidak langsung" looping block nya
				for (bg of buatGanjil){				// * for var() saat data di looping yield juga di kasih
					console.log(bg);			// display
				}
				// ------------ contoh eiger pada array biasa
				function ganjilArray(value){			// BUKTIKAN EIGER ARRAY
					let result = [];			// generate array biasa
					for (let i = 1; i <= value; i++) {
						if (i % 2 === 1) { 
							console.log(`index push ${i}`); // ** lihat perbedaan eiger disini
							result.push(i);
						 }
					}
					return result;
				}
				let buatGanjilArray = ganjilArray(20);		// ** var() saat fungsi di call, "langsung" looping block nya
				for (bg of buatGanjilArray){ 			// ** for var() saat data di looping data sudah terlooping sebelumnya
					console.log(bg);
				}
				// ** keterangan lazy vs eager
				- saat kita generate data lazy dengan function generator maka yang terjadi adalah:
				- looping yang ada di funtion generator, tidak langsung di running saat fungsi di panggil
				- barulah data di loop saat kita panggil dalam looping
				- buktikan saja saat 2 contoh di atas di running
				// ----------------- akses bawaan sebenaya pakai next()
				console.log(buatGanjil.next().value);		// jadi panggilnya tidak pakai for seperti di atas melainkan next().value
				console.log(buatGanjil.next().value);
				console.log(buatGanjil.next().value);

		/* this pada function: 
		----------------------------------------------------------
			- THIS adalah pseudo object yang merujuk pada object scoop pemilik: window, class, object, function decl dlm obj
			- this dalam function gak ada pengaruh sebenarnya. baik "declaration" atau "arrow"
			- kecuali saat this masuk kedalam object. maka this berpengaruh terhadap penggunaan function
			  - function yang menjadi method object:
			    kedua function tidak ada masalah karena mengacu pada obj yg sama (pemilik methodnya)
			  - function di luar method object maka this:
				- berlaku pada func declaration
				- tidak berlaku pada func arrow 
				- singkatnya: this pada metod mengacu pada object ini, coba ganti methode dengan arrow pasti undefined
		 */
			/* this dlm windows: 
			---------------------------------------------------------- */
			 	console.log(this);			// hasil : window{}

			/* this dalam function  g ada pengaruh jg: 
			---------------------------------------------------------- */
				function coba(){
					return console.log(this) 	// this pada func declaration
				}
				let coba2 = coba2 => console.log(this)	// pada arrow
				coba()					// hasil : window{}
				coba2()					// hasil : window{}

			/* this object: 
			---------------------------------------------------------- */
				let objectku = {				
					nama : "aqil",
					umur : 12,
					sapa : function(){
						console.log(this)
					}
				}
				objectku.sapa() 			// hasil: objectku{}. mengacu pada object pemiliknya

			/* this di dlm method: func dec vs arrow  
			---------------------------------------------------------- */
				const Mahasiswa = function(){
					this.nama = "aqil",
					this.umur = 33
					this.salam = function(){
						console.log(`halo saya ${this.nama}`);	
					}
				}
				const Mahasiswa2 = function(){
					this.nama = "iza",
					this.umur = 33
					this.salam = () => {							
						console.log(`halo saya ${this.nama}`);
					}
				}
				const data = new Mahasiswa(); data.salam()	 	// hasil: mahasiswa.salam()
				const data2 = new Mahasiswa2(); data2.salam()		// hasil: mahasiswa2.salam()

			/* this diluar method = func dec vs arrow 
			---------------------------------------------------------- */
				const Mahasiswa = function() {
					this.nama  = "sandika",
					this.umur  = 33,
					this.salam =  function() { 			// 1. method dg func dec
						console.log(`halo ini ${this.nama}`); 	//    this object kebaca aman
					}
					setInterval( function(){ console.log(this.umur++)}, 1000 ) 	// 2. tapi FUNCTION DECLARATION this ini tidak kebaca (NaN)(karena bukan method)
				}									//    karena kena hoisting maka lexical scoop langsung window
				const data = new Mahasiswa;
				/* karena arrow tidak punya konsep this maka this akan di cari di lexical scoopnya (mahasiswa2);
				maka nilainya menjadi ada */
				const Mahasiswa2 = function() {
					this.nama  = "sandika",
					this.umur  = 33,
					this.salam =  function() { 
						console.log(`halo ini ${this.nama}`);
					}
					setInterval( () => { console.log(this.umur++)}, 1000 ) 	// ARROW punya lexical scoop dalam object dan tidak kena hoisting
				}
				const data = new Mahasiswa;
					const data2 = new Mahasiswa2;


/*
DARI METHODE KEBAWAH INI MASUK KE PEMBAHASAN KE 2 YA SILAHKAN DI BUKA
- Object Method -------------------------------
- Kata Kunci this -----------------------------
- Arrow Function di Object --------------------
- Getter dan Setter --------------------------- */


// cursor pembahasan ------>>>>>> ------>>>>>> ------>>>>>> ------>>>>>> ------>>>>>> 

