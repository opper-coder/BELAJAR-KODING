// ============================== RINGKASAN ==================================
// ----- ada ARRAY:
const mhs = ["aqil", "izza", "silmi"];
// ----- MAP
mhs.map( a => console.log(a) );
// ----- FOR for()()
for(var i = 0; i < mhs.length; i++) { console.log(mhs[i]); }
// ----- FOREACH mhs.forEach( m => m ) 
mhs.forEach( m => console.log(m) );
mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke ${i}`)) 
// ----- FOR OF. kalau pakai index tidak bisa kalau terpaksa pakai bentuk di bawah
		// string tidak bisa di for of pakai for biasa saja
for(const m of mhs){ console.log(m)}
for(const [m, i] of mhs.entries()){console.log(`${m} adalah mahasiswa ke ${i}`)}
// ----- ada OBJECT
const biodata = { nama : "aqil", alamat : "saiti", hobi : "bermain sepeda" }
// ----- FOR IN untuk object
for( b in biodata ){ console.log(b); } // "key", 
for( b in biodata ){ console.log(biodata[b]); } // "value" 
for( b in biodata ){ console.log(biodata); } // "object"
// ============================= /RINGKASAN ==================================







// KONSEP LOOPING
// adalah membuat perulangan pada object yang iterable
/*
string
array
arguments / node list
	dibawah belum kita bahas dulu
typed array 
map
set
user-defined iterables
*/

// for in vs for off

const mhs = ["aqil", "izza", "silmi"];
// pakai for
for (var i = 0; i < mhs.length; i++) {	// jangan pakai const
	console.log(mhs[i]);			
}

// pakai FOREACH
mhs.forEach( m => console.log(m) );
mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke ${i}`));	// forEach ternyata punya argumen kedua yaitu index
// pakai FOR OF
for(const m of mhs){ console.log(m)}	// boleh pakai const
for(const m of mhs){console.log(`${m} adalah mahasiswa ke ${i}`)}		// for of tidak punyab index, jika ini di jalankan error
for(const [m, i] of mhs.entries()){console.log(`${m} adalah mahasiswa ke ${i}`)}	// kalau terpaksa harus bikin kita gunakan tekhnik destruktur
// string
let nama = "aqil";
for(const n of nama){console.log(n)}
	// string tidak bisa di looping pakai for each karena tidak kompatibel memeng

// nodeList
	// diindex kita punya list
<ul>
	<li class="nama">aqil</li>
	<li class="nama">izza</li>
	<li class="nama">silmi</li>
</ul> 
	// di js:

const liNama = document.querySelectorAll('.nama');
for(n of liNama){console.log(n.innerHTML);}

// arguments
function coba() {				// 1. kita punya function tidak ada argument
console.log(arguments);			// 3. ternyata kalau arguments di consolelog param di tangkap oleh ini
}
coba(1, 2, 3);					// 2. kalau di panggil dengan kirim param

// tapi arguments bukan array hanya mirip, sehingga ketika function untuk array banyak yang tidak berlaku
// seperti "arguments.reduce()", "argument.forEach()" 
// kalau for of bisa:

function jumlahkan(){
	let jumlah = 0;
	for( a of arguments ){jumlah += a;}
	return jumlah;
}
console.log(jumlahkan(1, 2, 3, 4, 5));

// FOR IN
// for in diperuntukan untuk looping object coba di bawah ini ganti for of pasti error

const biodata = {
	nama : "aqil",
	alamat : "saiti",
	hobi : "bermain sepeda"
}
for( b in biodata ){ console.log(b); } // return pengulangan "key", 
for( b in biodata ){ console.log(biodata[b]); } // kalau "value" pakai biodata[b] b sebagai index  
for( b in biodata ){ console.log(biodata); } // kalau biodata saja berati kembali jadi object lagi

forEach ada di /template_literal.js
map ada di /map_filter.js

