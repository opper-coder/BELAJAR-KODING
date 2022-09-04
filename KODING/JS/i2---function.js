perbaiki


===============================================
FUNCTION
- Function ------------------------------------
	- bloc kode yang akan berjalan saat kita panggil
	- function juga disebut dengan method
	- tidak pada dasarnya memiliki parameter dan return, tp kalau mau bisa menerima keduanya
		function sapa(){}				// bentuk dasar
		sapa();sapa();					// panggil sekali atau berkali2 silahkan
- function di variabel ------------------------
		function sapa(){}				// ada function
		let ada = sapa;					// masukan variabel "tanpa" kurung()
		console.warn(ada());				// variabel bisa jadi function dengan pemicu
		-----
		let ada = sapa();				// masukan variabel "dg" kurung()
		console.warn(ada);				// saat di panggil function terpicu 
- Function Parameter --------------------------
	- tempat oper umpan
	- akan di isi saat func di panggil dan sesuai index urutan jika banyak
	- nama parameter akan di baca dalam block function bersangkutan saja
	- jk lebih dari satu pisahkan dg Koma 
- Function Return Value -----------------------
	- pada dasarnya function tidak memiliki data sendiri tapi jika mau boleh pakai return
	- Function hanya bisa satu data, jika beberapa data sekaligus, 
	  kita bisa pakai Array , if, switch (mungkin jg object) sebagai return value nya
	- keyword return, lalu diikuti dengan data yang ingin kita hasilkan.
	- biasanya hasil nilai yang di maksud di kalkulasikan dulu lalu hasilnya di bungkus dalam variabel > kembalikan variabel
	- hasilnya boleh : bool, string, numb, concate, math, typedata, var, array, obj, callback func lain dll;
- Optional Parameter --------------------------
	- parameter itu tidak wajib "ada" dan tidak wajib "diisi" jika ada, jika tidak di isi maka akan di isi undefined
	- kalaupun kebanyakan parameter yang dikirim tetap tidak error, lebihanya ignore, ini kayak boomerang karena tidak error
- Default Parameter ---------------------------
	- optional, tidak wajib
		function orang(nama="anonimouse", alamat="tidak di ketahui"){}		// cara nulis
		orang();								// jika di panggil tanpa oper data maka default akan di ambil
- Rest Parameter/rest argument ----------------
	- adalah: tempat menangkap umpan banyak (yg bukan array) dalam satu wadah dan di konversi ke array 
	- hanya boleh ada satu, dan posisi di akhir index parameter
		function jumlahkan(nama, ...data){					// function dengan rest yang akan menangkap data banyak
			let total = 0;							// init hasil
			for(d of data){ total += d; }					// karena di tangkap dan jadi array maka bisa di loop of
			console.log(`jumlah ${nama} adalah: ${total}`)			// hasil
		}
		jumlahkan("jeruk", 10,11,14,5,7);					// panggil dengan oper banyak parameter sesuai(di bedakan dg) typedata
- Spread syntax ----------------------
	- kalau kita oper parameter menggunakan array itu tidak bisa dia akan salah tafsir maka gunakan 
		let arr = [10,20,30,40];						// kita punya array akan kita oper ke function
		jumlahkan("jeruk", arr);						// ini error: oleh "rest argument" akan di anggap "satu" parameter bukan "banyak" parameter 
		jumlahkan("jeruk", ...arr);						// kalau array oper dg ini ...arr (spread syntax), nanti di tangkap oleh ...arg (rest argument)
- arguments parameter ----------------------
		function jumlahkan(){							// kita tanpa argumen
			let total = 0;
			for(d of arguments){ total += d; }				// kita tetap bisa tangkap parameter di "arguments global"
			console.log(`jumlah adalah: ${total}`)				// cons: kita tidak bisa menentukan argumen keberapa type data apa bisa tapi harus pilah2 manual
		}
		jumlahkan(10,10,10,10);
- Function Sebagai Value ----------------------
		function hallo(nama){							// kita bikin function biasa
			console.info(`selamat datang ${nama}!`);
		}
		let varhalo = hallo;							// juga bikin variabel dengan nilai funtion tanpa kurung
		hallo("aqil");								// kita bisa call function
		varhalo("silmi");							// jg bisa call variabel dengan kurung
- callback --------------------------
		function hallo(nama){							// bikin fungsi1 untuk di masukan sbg "nilai" variabel
			console.info(`selamat datang ${nama}!`);
		}
		function hallocallback(callback){					// bikin fungsi2 yang akan dapat umpan dari fungsi diatas
			callback("iza");
		}
		let callbackku = hallo;
		hallocallback(callbackku);						// panggil "fungsi2" dengan argument "fungsi1"
- Anonymous Function --------------------------
	- adalah function tanpa nama. mirip if ternary
		let halo = function(nama){console.log(nama)}
		halo("aqil");
	- function anonimaouse dalam parameter
		let halo = function(callback){callback("silmi")}
		halo(function (nama){console.log(`halo ${nama}`)});
- Function dalam Function ---------------------
	- Tidak ada batasan dimana kita bisa membuat function
	- Function yang terdapat di dalam, kita sebut inner function
	- Inner function hanya bisa diakses di scoop outer function. tidak dari luar
		function outer(){
			function inner(){}
			inner()
			inner()			// bisa
		}
			inner()			// error
- Scope ---------------------------------------
	- Ada dua jenis scope, global scope dan local scope.
	- kayaknya setiap block {} memiliki scoop local, sudah saya test di block if
	- variabel global bisa di akses dari local, tidak sebaliknya
- Recursive Function --------------------------
	- pemanggilan function dalam function iitu sendiri funsi mirip looping
		function factorialRecursive(value){
			if (value === 1) {
				return 1;
			}else{ return value * factorialRecursive(value -1) }
		}
		console.log(factorialRecursive(5));
- Function Generator --------------------------
	- bikin data sebanyak array tapi pakai function
	- iterable (for) tapi nggak bisa di akses dengan index ([3])
	- kelebihanya ada yield yaitu memiliki fungsi bersifat "lazy"
	- contoh1 dasar function generator assign ke yield 1 per 1
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
	- contoh2 yield pakai loop	
		// ----------- contoh lazy pada generato	// GENERATOR LAZY:
		function* ganjil(value){			// function*
			for (let i = 1; i <= value; i++) {	// for value input
				if (i % 2 === 1) { 		// if ganjil
					console.log(`yield ke: ${i}`); // * lihat perbedaan lazy disini
					yield i;		// return yield (generate data yield lazy)
				 }
			}
		}
								// AKSES:
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
- Arrow Function ------------------------------
	Arrow function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya
	Namun terdapat limitasi dan juga tidak bisa digunakan di semua situasi
	tidak memiliki fitur arguments object
	tidak bisa menggunakan function generator
	tidak bisa mengakses this (yang nanti akan dibahas di function di object)
	tidak bisa mengakses super (yang nanti akan dibahas di JavaScript Object Oriented Programming)
		const halo = () => {}				// dasar
		const halo = () => 				// tanpa block -> juga tanpa return (jika hanya satu action dan tanpa block boleh tanpa return)
		const halo =  => 				// tanpa parameter -> (kalau lebh satu maka pakai kurung pisahkan koma, jika hny satu mk tnpa kurung)
		const halo(()=>{}); 				// function arraw dalam argumen function

		const halo = (nama) => {console.log("halo " + nama)}
		halo("aqil");					// panggil
- Closure -------------------------------------
	- definisi dari eko kurniawan:
	closure jarang di gunakan kayaknya tapi penting untuk di ketahui
	Closure adalah kombinasi function dan bundel referensi ke data disekitarnya.
	Oke agak membingungkan memang, apalagi untuk yang baru pertama belajar
	Kita sudah tahu bahwa local scope tidak bisa diakses di luar scope nya
	Dengan kemampuan closure, kita bisa membuat sebuah function di local scope dan referensi ke data di sekitar local scope tersebut, keluar scope nya
	- definisi dari saya:
	cara agar scoop local bisa di akses oleh global maka kita perlu membuat data tersebut:
	baik berupa function, array, objec, dll menjadi sebuah return dari sebuah function

				
DARI METHODE KEBAWAH INI MASUK KE PEMBAHASAN KE 2 YA SILAHKAN DI BUKA
- Object Method -------------------------------
- Kata Kunci this -----------------------------
- Arrow Function di Object --------------------
- Getter dan Setter ---------------------------
	
	
	
	
	
	
- Masalah Variable var ------------------------
- Destructuring -------------------------------
- Strict Mode ---------------------------------
- Debugger ------------------------------------
- Materi Selanjutnya --------------------------
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About

