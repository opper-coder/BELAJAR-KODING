console.log("BELAJAR REST API");
/* contoh1:
- bikin index html,js,json lalu html running live Server atau xampp 
- bikin object di js -> coba 2 consolelog biasa dan stringify
*/

	// let siswa = {
	// 		nama : "aqil",
	// 		alamat : "saiti",
	// 		kelas : "empat"
	// 	}

	// console.log(siswa);					// result object
	// console.log(JSON.stringify(siswa)); // result json

/* contoh2
- bikin json di index json -> panggil dengan ajax vanilla (script valid)
- pada ajax di bawah coba parse dan json biasa pada result di bawah (aktifkan yang di test) 
*/

	// let xhr = new XMLHttpRequest();
	// xhr.onreadystatechange = function(){
	// 	if( xhr.readyState == 4 && xhr.status == 200 ){
	// 		// let mahasiswa = this.responseText;				// (test1) result json 
	// 		let mahasiswa = JSON.parse(this.responseText);		// (test2) result array
	// 		console.log(mahasiswa)
	// 	}
	// }

	// xhr.open('GET', 'index.json', true);
	// xhr.send();

/* contoh3
- kita pakai ajax dari jquery -> ketik jquery CDN -> pilih uncompress atau minified. jangan yang slim
  simpan di sebelum script kita (index.js)
- oya hebatnya jquery data yang diambil dari JSON sudah di parsing ke object (tinggal console.log)

*/

// $.getJSON('index.json', function(){} ) // sebagai pengganti $.ajax()
//---
	$.getJSON('index.json', function(hasil){
		console.log(hasil);
	})

// SELESAI PINDAH KE LATIHAN 2 PIZZA HUT