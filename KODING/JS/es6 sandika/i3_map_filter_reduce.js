// terkait dengan higher order function di i2 kita bahas contoh2nya disini

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

// =================================================================================












// ==================================================================================