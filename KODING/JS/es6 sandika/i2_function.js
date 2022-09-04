/*
FUNCTION
- basic 										-> f nama(){}	
- call/panggil 									-> tampilPesan("aqil");
- function expression/anonimuous: 				-> const nama = f(){} 
- arrow function 								-> const nama = (param) => {action}	
	- bisa hapus kurung() 						-> const nama = param => {action}
	- implisit return, hapus () dan {}			-> const nama = param => action; hapus {} bahkan return jika hanya saru baris return saja
	- tidak bisa hapus( dua arg )				-> const nama = (param, param2) => {action}
	- wajib pakai kurung saat parameter kosong	-> const nama = () => action
- console.log, info, tabel, warn, error 		-> 
- method vs functional							-> bedanya: function adalah type data, method adalah properti dalam object (meski berupa function)
- THIS 											-> adalah "pseudo object" pada "scoop" object parent  
- callback dan higher order function 			-> callback
- 
----------------------------------------------------------------------------------------------
*/
/* basic ---------------------------------------------- */
		function tampilPesan(nama){alert("halo " + nama);}			
/* call/panggil --------------------------------------- */
		tampilPesan("aqil");tampilPesan("aqil", "izza");
/* function expression/anonimuous: -------------------- */
		const tampilPesan = function(nama){alert("halo " + nama);} 
/* arrow function ------------------------------------- */
		const tampilPesan = (nama) => {alert("halo " + nama);}	
		/* bisa hapus kurung() ------------------------ */
				const tampilPesan = nama => {alert("halo " + nama);}
		/* bisa hapus () dan {} (implisit return) ----- */
				const tampilPesan = nama => alert("halo " + nama);
		/* tidak bisa hapus( dua arg ) ---------------- */
				const tampilPesan = (nama, alamat) => {return "halo " + nama + alamat }
		/* implisit return ---------------------------- */
				const tampilPesan = nama => "halo " + nama 				
		/* wajib kurung ------------------------------- */
				const tampilPesan = () => "halo "  		
/* method vs function							
	 	- function adalah type data, 
	 	- method adalah properti dalam object (yg berupa function juga sih) 
		- kalau properti adalah variabel dalam object yang berisi value
	 	*/
/* this pada function  -------------------------------------
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
 		/* this dlm windows ----------------- */
 				console.log(this);						// hasil : window{}
 		/* this dalam function  g ada pengaruh jg ------------- */
 				function coba(){
					return console.log(this) 			// this pada func declaration
				}
				let coba2 = coba2 => console.log(this)	// pada arrow
				coba()									// hasil : window{}
				coba2()									// hasil : window{}
 		/* this object ---------------------- */
				let objectku = {				
					nama : "aqil",
					umur : 12,
					sapa : function(){
						console.log(this)
					}
				}
				objectku.sapa() 						// hasil: objectku{}. mengacu pada object pemiliknya
		/* this di dlm method: func dec vs arrow  --------- */
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
		const data2 = new Mahasiswa2(); data2.salam()	// hasil: mahasiswa2.salam()

		/* this diluar method = func dec vs arrow --------- */
		const Mahasiswa = function() {
			this.nama  = "sandika",
			this.umur  = 33,
			this.salam =  function() { 									// 1. method dg func dec
				console.log(`halo ini ${this.nama}`); 					//    this object kebaca aman
			}
			setInterval( function(){ console.log(this.umur++)}, 1000 ) 	// 2. tapi FUNCTION DECLARATION this ini tidak kebaca (NaN)(karena bukan method)
		}																//    karena kena hoisting maka lexical scoop langsung window
		const data = new Mahasiswa;
		/* karena arrow tidak punya konsep this maka this akan di cari di lexical scoopnya (mahasiswa2);
		maka nilainya menjadi ada */
		const Mahasiswa2 = function() {
			this.nama  = "sandika",
			this.umur  = 33,
			this.salam =  function() { 
				console.log(`halo ini ${this.nama}`);
			}
			setInterval( () => { console.log(this.umur++)}, 1000 ) 		// ARROW punya lexical scoop dalam object dan tidak kena hoisting
		}
		const data = new Mahasiswa;
		const data2 = new Mahasiswa2;
/* callback dan higher order function ---------------------------------------------------
		- DALAM JS function adalah first class object. object saja terbuat dari function
			- alasan pakai higher oreder function:
			1. abstraksi (penyederhanaan)
			2. anekdot;
				"cara membuat program ada dua:"
				"1. Buat program sesederhana mungkin hingga jelas-jelas tidak ada kekuranganya "
				"2. Buat program sekomplex mungkin hingga tidak ada kekurangan yang jelas-jelas"
			3. pendekatan functional programing lebih aman efisien dan mudah
		- sama dengan type data lainya function dan object, bisa di simpan sebagai argumen dan return function lainya
		- (func konsumen ) disebut: higher order function. 
			- termasuk juga (yang memiliki return value callback)
		- (func akan di oper) disebut: callback */
	/* contoh: function konsumen */
		function kerjakanTugas(matakuliah, selesai){					// 1. konsumen
			console.log(`mulai kerjakan tugas ${matakuliah}`);
			selesai();													// 4. eksekusi
		}
		function selesai(){												// 2. callback
			alert("selesai mengerjakan tugas")	
		}
		kerjakanTugas("matematika",selesai);							// 3. arg: callback
	/* contoh2: function yang memiliki return value callback*/
		function salam(waktu){
			return function(nama){ console.log(`halo ${nama} selamat ${waktu}`); }
		}
		let selamat = salam("sore");
		console.dir(selamat("aqil"));	// pembahasan ada di closure
	/*contoh: bayangkan saat angka 10 berubah menjadi 20 maka scrip yang ke 2 lebih simpel dan reusable*/
		for(var i=0; i<10; i++){ console.log(i); } // cara pertama
		function pengulangan(n){ for(var i=0; i<n; i++){ console.log(i); } } // cara kedua
		pengulangan(20);
	/* atau lebih simpel lagi ini: */
		function pengulangan(n, aksi){ for(var i=0; i<n; i++){ aksi(i); } } // cara kedua
		pengulangan(20, alert);		// pilih alert atau console.log

// cursor pembahasan ------->>>>>> ------->>>>>> ------->>>>>> ------->>>>>> 
