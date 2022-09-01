Pendahuluan
- Pengenalan JavaScript 		-> bahasa scripting bukan compiler untuk frontend, backend, json API, web, android, ios, IoT
- Program Hello World 			-> konsol dan halaman
- Komentar 				-> keterangan bahasa manusia tidak di compile
- Tipe Data Number 			-> bisa juga hexa, octal, binary 
- Tipe Data Boolean 			-> saklar on off
- Tipe Data String 			-> "8" juga string bisa di conversi parseint()
- Variable 				-> wadah tunggal, bisa utk: array, object, if ternary, operator math, funct anonimous, trigger function (lihat function dalam var ---> )
- Operator Matematika 			-> + - * / % **
- Operator Perbandingan 		-> < > <= >= == === != !==
- Operator Logika 			-> && || ! = boolean return bool jg. bisa di if, variabel, for, while, do while
- Console 				-> display konsol : console.log, info, warn, error, table 
- String Template 			-> pengganti string kombinasi dan concate
- Konversi String dan Number 		-> ada kemiripan angka dan string maka butuh konversi
- Tipe Data Array  			-> index
- Tipe Data Object 			-> property
- If Expression 			-> percabangan dasar
- Popup 				-> pop up bawaan browser yang membantu debug sebenarnya
- Undefined 				-> belum ada wadah dan nilai
- Null 					-> sudah ada wadah dan nilai hanya saja nilai null
- Switch Expression  			-> pengganti if pada kondisi perbandingan == saja
- Operator typeof 			-> type datanya apa ya?
- Operator in 				-> adakah property/field/index? (bukan value)
- Ternary Operator 			-> if sederhana, bisa masuk variabel jg
- Nullish Coalescing Operator 		-> mirip ternary,bedanya menanyakan apakah null, undefined atau tidak
- Optional Chaining 			-> mau akses "parameter" di object ada tidak? (null, undefined) atau tidak
- Falsy dan Truthy 			-> untuk kondisi bagus (if, looping, dll)
- Operator Logika di Non Boolean	-> if tanpa if statemen
- For Loop 				-> looping dasar(initial di dalam bisa)
- While Loop 				-> looping. dg init di luar
- Do While Loop 			-> minimal, lakukan dulu sekali (pada looping)
- Break dan Continue 			-> skip dan stop loop, (switch, for, while, recursive, iterasi)
- Label 				-> skip stop looping bersarang.(kursor looping)
- For In 				-> looping "properti" object
- For Of  				-> looping "value" array
- With Statement 			-> cursor pada hierarchi object (error kayaknya sudah tidak berlaku)
- Function 				-> pembungkus semua fungsi, hanya jalan saat di panggil, 
- Function di Variabel 			-> variabel bisa jadi function
- Function Parameter 			-> umpan dalam block
- Function Return Value 		-> hasil kalkulasi
- Optional Parameter 			-> argument tidak wajib di isi. parameter tapi bisa boomerang lo
- Default Parameter 			-> jika tidak di oper masih punya default nilai jadi tidak sama sekali kosong gitu
- Rest Parameter 			-> argument untuk tangkap parameter yg banyak tapi bukan array, akan di konvert ke array 
- spread syntax 			-> oper "parameter array" gak boleh meski di tangkap oleh rest parameter, solusi: spread syntax
- arguments object 			-> dulunnya ada "arguments object"(sudah tidak disarankan) sekarang di ganti rest parameter
- callback				-> argument dalam bentuk function
- Function Sebagai Value 		-> function dalam variabel (sebagai value variabel)
- Anonymous Function 			-> function tanpa nama, harus bungkus variabel
- Function dalam Function 		-> bisa
- Scope 				-> global dan local di semua block {}
- Recursive Function 			-> kayak looping (factorial)
- Function Generator 			-> data array lazy [* yield] 
- Arrow Function 			-> =>
- Closure 				-> cara keluar dari scoop local ke global
- Object Method 			-> kumpulan data mengandung property dan method
- Kata Kunci this 			-> object yang merujuk object root pemilik scoop (biasanya dalam window, object, new instance)(fun jadi obj,kec arrow)
- Arrow Function di Object 		-> method
- Getter dan Setter 			-> dua func yg di tanam ke obj dan di conversi jadi properti: berfungsi ubah dan ambil
- Masalah Variable var 			-> tidak punya scoop (rawan jngn gunakan)
- Destructuring 			-> konversi array ke variabel (explode)
- Strict Mode 				-> mode debug agar error terdisplay
- Debugger 				-> debugger browser support
- Materi Selanjutnya 			-> es6 -> async -> OOP -> nodejs -> express

- PENDAHULUAN ---------------------------------
- Pengenalan JavaScript -----------------------
	di html bawah body dlm tag <script>
	di js dlm tag src <script src=>
- Program Hello World -------------------------
	document.writeln("helloworld"); // di html 
	console.log("hello world");		// di console
	console.info("hello world");	// pengganti log
	console.warn("hello world");	// berwarna kuning
	console.error("hello world");	// merah
- Komentar ------------------------------------
	// /**/
- Tipe Data Number ----------------------------
	type data number desimal dan bulat sama di js
	(kalau di bahasa lainya di bedakan dg float dan int)
	Hexadecimal : 0xFF
	Binary : 0b10101
	Octal : 0o10
	document.writeln(0b10101); 
- Tipe Data Boolean ---------------------------
	true 
	false
	berlaku di isi Variable, kondisi if, 
- Tipe Data String ----------------------------
	""," ","halo",'halo'
	concate pakai plus "halo" + "world"
- Escape Sequence -----------------------------
	Escape sequence merupakan karakter khusus, seperti ENTER, TAB,
	\n:enter, \t:tab, \':petik satu, \":petik 2, \\: back slash, '
	document.writeln("eko \nkurniawan \nkhanedy");
- Variable ------------------------------------
	- var, let, const = var sudah usang usahakan buat dengan let atau const
	- var tidak memiliki scoop sehingga bisa ada anomali nantinya 
	let: isinya bisa di replace, const: tidak bisa (constant)
	let namadepan;
	namadepan="aqil"; akses variabel: namadepan
- Operator Matematika -------------------------
	+, -, *, **, /, % -> tb, kurang, kali, kuadrat, bagi, modulus 
	(cont mod: let hasil = 11 % 2)(cont kuadrat: let hasil = 10**2;)
	Augmented Assignments:
	+=, -=, *=, /=, **=, %= 	// nilai terakhir di tambah 10 -> 
	(cont: ada = ada + 10 -> ada += 10)
	Operator Unary:
	+ postif - negatif ++ increment -- decrement
- Operator Perbandingan -----------------------
	< > <= >= == === != !==
- Operator Logika -----------------------------
	Operator logika adalah operator untuk dua buah data boolean
	Hasil dari operator logika adalah boolean lagi
	&& || ! // let hasil = true && false => hasilnya false 
- Console -------------------------------------
	console.info() .warn() .error() .table() 
	console.table("array") bagus untuk array dan object
- String Template -----------------------------
	intinya sama denga "" tapi bisa akses var dan operator dll
	let coba= `halo ${variabel}` ; 	// concate dengan String
	let coba= `halo ${23 < 100} `; 	// operasi Matematika ada sama sandika es6
- Konversi String dan Number ------------------
	parseInt("1")			// integer conversi dari str ke numb
	parseFloat("2")			// pecahan str ke numb
	Number("3")			// str ke numb
	number.toString(5)		// numb ke str
- Tipe Data Array -----------------------------
	- []							// bentuk dasar
	- let orang = []					// masuk var
	- orang[1] = "aqil";					// isi ke index tujuan
	- let orang = ["aqil","iza","silmi"];			// isi manual
	- orang.push("andi");					// isi di index paling belakang
	- orang.push("liva","andien");				// push banyak
	- operasi array:
	 	orang.push() 					// Menambah data ke Array
		orang.length 					// Untuk mendapatkan panjang Array -> console.info(orang.length);
		orang[2] 					// Mendapat data di posisi index
		orang[3] = "faqih" 				// Mengubah data di posisi index
		delete orang[index] 				// Menghapus data di posisi index, namun index tidak bergeser spt mySQL
- Tipe Data Object ----------------------------
	- {}							// bentuk dasar
	- let orang = {}					// masuk var
	- orang["nama"] = "aqil";				// tambah / ubah ke key dimaksud
	- let orang = {						// isi manual
		nama : "aqil",
		alamat : "saiti",
		umur : 12 					// properti / attribut
		halo = function(){}				// method /
		}
	- console.table(orang);					// akses object
	- console.table(orang.nama);				// akses properti
- If Expression -------------------------------
	- if(){}						// if akan di eksekusi saat true jika false tidak (tanpa else)
	- if(){}else{}						// else akan di eksekusi saat false pada if
	- if(){}else if(){}else{}				// akan di eksekusi "true" pada if "duluan" true "belakangan" tidak di eksekusi
								// begitulah jika else if bertingkat banyak
- Popup ---------------------------------------
	- alert()							// popup dasar (semua popup ini hanya pengguna browser bukan n)
	- prompt()							// input (hanya text jika number perlu di parse )dan dapat di bungkus dengan variabel
	    const nama = prompt("masukkan nama: "); // cont: prompt
	    alert(nama);						// cont: alert
	- confirm()							// mirip alert tapi ada kondisi. coba script di bawah:
		const masuk = confirm("selamat datang mau daftar?");
	    if(masuk){
	    	let nama = prompt("masukkan nama: ");
	    	alert("halo " + nama); 
	    }else{
	    	alert("sampai jumpa");
	    }
- Undefined -----------------------------------
	- Sebuah variable yang belum ditambahkan nilai, di var, array, object
	- undefined itu berbeda dengan null (sudah disi nilai null)
	- keduanya adalah type data (beda tapi serupa)
	    let name;
    	document.writeln(name);					// hasil: undefined
    	document.writeln(name === undefined);			// hasil: true
    	document.writeln(name === null);			// hasil: false
- Null ----------------------------------------
	- null merupakan representasi data kosong
	- null berbeda dengan undefined, null berarti variable sudah ditambahkan value nya, hanya saja value nya null
	- Sedangkan undefined adalah variable belum ditambahkan value apapun
- Switch Expression ---------------------------
	- Switch adalah statement percabangan yang sama dengan if, namun  lebih sederhana
	- Kondisi di switch statement hanya untuk perbandingan ==
	switch(){}						// bentuk dasar
	let nilai = prompt("masukkan huruf:");			// bikin nilai dari alert
	switch(nilai){						// pasang di switch contact
		case "a": alert("ada"); break;			// break di pasang supaya berhenti (kayak if else);
		case "b": alert("bata"); 			// tanpa break:maka kayak loop tereksekusi semua dari true kebawah tanpa kecuali (termasuk default)
		case "c": alert("cadas"); break;
		default : alert("wookee");
	}
- Operator typeof -----------------------------
	- ceking typedata pada var, arry, obj
	- Hasil dari operator typeof adalah string tipe datanya
		let nama= "aqil";
		document.write(typeof nama);
- Operator in ---------------------------------
 	- mengecek apakah sebuah property/field (bukan nilai ya ingat) di dalam (object, array) ada atau tidak? hasil: bool
 	- nilai undefined atau null, tetap dianggap ada jika field nya memang ada
 		let nama= ["aqil","iza","silmi"];
		document.write(9 in nama);			// adakah index 9?, hasil: true
		document.write("alamat" in nama);		// adakah property "alamat"?, hasil: bool
- Ternary Operator ----------------------------
	- adalah operator sederhana dari if statement:
	- jika block aksi hanya melakukan 1 aksi 
	- bisa di masukan langsung ke variabel beda dengan if dan switch (bisa juga langsung)
		let hasil = false ? "halo benar!" : "yah salah!";
		document.write(hasil);
- Nullish Coalescing Operator -----------------
	- mirip ternary 
	- hanya yang di tanya null atau undefined
		let hasil = null ?? "nilai default";		// apakah kondisi "null atau undefined" 
		document.write(hasil);				// hasil: nilai default.
		// let hasil = "aqil" ?? "nilai default";	// jika kondisi berisi "string aqil" maka tampilkan string tersebut(aqil) (else otomatis)
- Optional Chaining ---------------------------
	let orang = {};						// ada object kosong
	alert(orang.nama1.alamat);				// kalau akses propertinya ini error (terlihat di console)(karena null atau undefined)
								// (baris di bawahnya tidak jalan pastinya)
								// supaya gak error harus masukkan dalam if biasa tapi ini melelahkan 
	alert(orang?.nama1?.alamat);				// solusi: optional chaining -> properti null/undefined atau tidak? 
								// maka tidak error lagi 
- Falsy dan Truthy ----------------------------
 	false  		= false
	0, -0  		= false
	“”, ‘’, `` 	= false
	null atau	= false
	undefined	= false
	NaN 		= false
	- kebalikanya adalah Truthy
	if(""){document.writeln("benar")}else{document.writeln("salah")}
- Operator Logika di Non Boolean --------------
	- Operator logika OR (||), membaca dari kiri ke kanan. 
	- Operator ini akan mengambil nilai pertama yang truthy. 
	- Jika tidak ada satupun yang bernilai truthy, maka yang terakhir yang akan diambil (sama truty)
	document.writeln("hallo" || "" );			// hasil: hallo -> diambil truty duluan
	document.writeln("" || {} );				// hasil: {}	-> 
	document.writeln("0" || "NOL" );			// hasil: "0"	-> 
	document.writeln( 0 || "NOL" );				// hasil: NOL	-> 
	document.writeln( null || "NULL" );			// hasil: NULL	-> 
	document.writeln( undefined || "UNDEFINED" );		// hasil: UNDEFINED	-> 
	document.writeln( undefined || null );			// hasil: null	-> diambil falsy paling belakang
	- Operator logika AND (&&), membaca dari kiri ke kanan. (sama)
	- Operator ini akan mengambil nilai pertama yang falsy. (kebalikan)
	- Jika tidak ada satupun yang bernilai falsy, maka yang terakhir yang akan diambil (sama falsy)
	document.writeln("hallo" && "" );			// hasil: "" -> 
	document.writeln("" && {} );				// hasil: "" ->  
	document.writeln("0" && "NOL" );			// hasil: NOL-> nol lebih truty dari "0"
	document.writeln( 0 && "NOL" );				// hasil: 0  -> 
	document.writeln( null && "NULL" );			// hasil: null -> 
	document.writeln( undefined && "UNDEFINED" );		// hasil: undefined	 -> 
	document.writeln( undefined && null );			// hasil: null	 -> 
- For Loop ------------------------------------
	for(;;){ }
	for(;;){ alert("looping infinite")}
	for(i=0;i<10;i++){ alert("looping ke:" + i)}
	for(i=0;i<10;i++){ 
		if(i>4){break}					// break: hentikan putaran tanpa pedauli kondisi looping
		alert("looping ke:" + i);
	}
	for(i=0;i<10;i++){ 
		if(i == 4){continue}				// continue: skip putaran bisa di gunakan untuk putaran bilangan genap
		alert("looping ke:" + i);
	}
- While Loop ----------------------------------
	while(){}						// bentuk dasar
	let counter=0;						// couter awal di luar
	while( counter<10 ){ console.log("ke : "+counter); counter++ } // tetap ada "pengecekan", tetap ada "increment" 
	while(){}
- Do While Loop -------------------------------
	do{}while()						// braket di depan kondiisi dibelakang
	let counter=0;
	do{console.log("ke : "+counter); counter++ }while( counter<10 ) // minimal di eksekusi sekali lalu ceking loop
- Break dan Continue --------------------------
	- pengganggu putaran pada looping apapun seperti
	- for, while, do while, switch, 
		break 						// stop putaran pada (looping asli) biasanya di tanam dalam if putaran
		continue 					// skip / lompati putaran
- Label ---------------------------------------
	- penanda untuk operasi break dan continue pada looping bersarang
	for(){							// loop bersarang biasa
		for(){}
	}
	-------
	loopi: 							// loop bersarang berlabel ("loopi:" dan "loopj:")
	for(){
		loopj:										
		for(){}
	}
	-------
	loopi: 							// loop bersarang berlabel ("loopi:" dan "loopj:")
	for(){
		loopj:										
		for(){
			if(){break loopj}			// hentikan (break,continue) looping pada label yang di pilih(loopi / loopj)
		}						// lakukan dalam if pada blok looping "terdalam/terakhir"
	}
	-------							// coba running code di bawah:
	loopi:
	for(let i=0;i<10;i++){
		loopj:
		for(let j=0;j<100;j++){
			if(j > 7){continue loopi;}
			console.log( `${i} -- ${j}` );
		}
	}
- For In --------------------------------------
	- looping "properti" object (bisa juga array tp tidak di sarankan untuk array "for of")("bukan value ya");
		for(p in prop){}				// dasar
		------						// running code:
		let orang = {					// ada object
			nama: "aqil",
			alamat: "saiti",
			umur: 12
		}
		for(o in orang){ document.writeln(o + ": halo") } // bikin var wadah looping o (pake let o jg bisa) dari orang block silahkan isi apa saja bisa
- For Of --------------------------------------
	- For in untuk looping properti atau index, pada for of looping pada value
	- tapi tidak bisa melakukan iterasi data di object, karena object bukanlah iterable.
		for(p of prop){}				// bentuk dasar
		let siswa=["aqil","iza","silmi"];		// array
		for(s of siswa){ document.writeln( "halo>" + s ) } // iterasi value array (pake let s jg bisa)
- With Statement ------------------------------
	- menurunkan scoop properti
	- katanya tidak di sarankan karena ambigu
	- saya test error kayaknya sudah di hapus fungsi ini
		let orang={					// ada object
			nama: "aqil",
			alamat: "saiti",
			umur: 12
		}
		With(){}					// bentuk dasar
		With(orang){
			console.log(alamat)			// tidak ada chaining
		}						// asal di lakukan dalam block maka tidak ambigu, mungkin lbh gampang chaining

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
