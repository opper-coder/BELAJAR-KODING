/*
Looping dan Method bawaan

looping array 
looping array adalah metode iterasi sejumlah length dan dapatkan indexnya
-------------------------------------
*/
	/* ada sebuah array lalu looping dg beberapa cara: */
		const mhs = ["aqil", "izza", "silmi"];
	/* for */
		for(var i = 0; i < mhs.length; i++) { console.log(mhs[i]); } 	// dg for: menyebut length dan juga index
	/* map " mhs.map( a => a) " */
		mhs.map( a => console.log(a) ); 								// tanpa menyebut length, tapi menyebut index
	/* foreach " mhs.forEach( m => m )" : mirip map */
		mhs.forEach( m => console.log(m) );
		mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke ${i}`)) 
	/* for of (array)  " for( m of arr ){ m } "  */
		for(const m of mhs){ console.log(m)} // string tidak bisa di for of pakai for biasa saja
		for(const [m, i] of mhs.entries()){console.log(`${m} adalah mahasiswa ke ${i}`)}
	/* for in (object) */
		const biodata = { nama : "aqil", alamat : "saiti", hobi : "bermain sepeda" }
	/* FOR IN untuk object */
		for( b in biodata ){ console.log(b); } 		// looping "key", 
		for( b in biodata ){ console.log(biodata[b]); } // looping "value" 
		for( b in biodata ){ console.log(biodata); } 	// "object"

/* Contoh diatas cukup kalau mau di bawah boleh ------------------------------------------ */








/* Contoh lain memudahkan saja ----------------------------------------------------------- */
	let pelanggan = ["andi", "azka", "dodi"];
	// ringkasan metamorfosa function (sekaligus contoh dalam foreach dan map) :
	pelanggan.forEach( function(orang){console.log(orang);} )   // fungsi primitive
	pelanggan.forEach( (orang) => {console.log(orang);} )   // array function
	pelanggan.forEach( orang => {console.log(orang);} )     // satu param
	pelanggan.forEach( orang => console.log(orang) )    	// satu baris braket (nihil ;)
	pelanggan.map( orang => console.log(orang) ) 		// map == foreach
	pelanggan.map( orang => {return console.log(orang)} ) 	// bedanya bisa pakai return, tapi harus pakai braket

/* sampai disini ada penjelasan ini pada object ------------------------------------------ */
	// sebagai contoh pada array dan beberapa function array (proto array)
		const angka = [-1,8,9,1,4,-5,-4,3,2,9];
	// kalau pakai for bikin array baru untuk filter angka >= 3  :
		const newAngka = [];
		for (var i = 0; i<angka.length; i ++) {
			if( angka[i] >= 3 ){
				newAngka.push(angka[i]);
			}	
		}
	// kalau pakai filter :
		const newAngka = angka.filter(saring);
		function saring(a){ return a >= 4 }
	// kalau pakai arrow lebih singkat lagi :
		const newAngka = angka.filter( a => a >= 3);
	// kalau pakai map untuk mengkalikan 2 (boleh fungsi lainya +-*/ atau concat terserah): 
		const newAngka = angka.map( a => a * 2 );
	// reduce berguna untuk melakukan sesuatu pda seluruh elemen array,contoh kita jumlah kan semua isi array (=sum):
		const newAngka = angka.reduce((accumulator,currentValue) => accumulator + currentValue) ;
		const newAngka = angka.reduce((a,c) => a + c) ;
		// dafaul nilai 0 jika tak ditulis di returnx sbg nilai awal "reduce( (a, c ) => a + c, 0 )"

	// METHOD CHAINING
	//  contoh pada array di atas saya akan lakukan 3 hal
		 // 1. cari anka > 5
		 // 2. kalikan 3
		 // 3. jumlahkan
		const newAngka = angka.filter( a => a > 5 ).map( a => a * 3 ).reduce((a,c) => a + c ,0 ) // nol terakhir boleh tak di tulis


// Cursor Pembahasan ------>>>>>> ------>>>>>> ------>>>>>> ------>>>>>> ------>>>>>> 

/*
KONSEP LOOPING
adalah membuat perulangan pada object yang iterable

string
array
arguments / node list
	dibawah belum kita bahas dulu
typed array 
map
set
user-defined iterables
*/
