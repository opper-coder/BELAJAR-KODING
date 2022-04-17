// TEMPLATE LITERAL / TEMPLATE STRING   dg back tick kita bisa melakukan bebarapa hal:

/*
1. multiline string 
2. embedded expression
3. HTML fragment
4. expression interpolationn
5. tagged template
   kita bicarakan yang 5 di atas dulu, namun penggunaan lainya ada di bawah ini:
6. Escaping HTML tag
7. Translation Internationalization
8. Styled Components (di vue, react)
*/
// string
`text`
// multiline string ( ini jjuga tampil sama ketika di consol == println)
`string satu
 string dua
 string tiga`
//  embedded expression
`string text ${value} strinng text`
// HTML fragment
const judul = `<h1>nama saya ${nama}</h1>`
// expression interpolation
`string text ${ 1 + 2 * 3 } strinng text`	// interpolasi /operasi matematik
`string text ${ alert("haloo") } strinng text`	// function
const x = 11;
console.log(`string text ${ ( x % 2 == 0 ) ? "genap" : "ganjil" } strinng text`	)	// ternari
// tagged template



// LATIHAN1 looping ============
const mhs = [
	{
		"nama" : "sandika",
		"alamat": "bandung"
	},
	{
		"nama"	 : "andi",
		"alamat" : "bella"
	},
	{
		"nama" : "raihan",
		"alamat" : "saiti"
	}
];
const elemen = `<div class="mahasiswa">
	${mhs.map( m => `<ul><li>${m.nama}</li>${m.alamat}<li></li></ul>` ).join('')}
</div>`;

document.body.innerHTML = elemen;

// LATIHAN2 pengkondisian ternary ============
const lagu = {
	judul : "tetap dalam jiwa",
	penyanyi : "isyana sarasvati",
	feat : " akhsan"			// coba dalam obj ini kadang ada feat kadang tidak
}
const el = `<div class="lagu">
				<ul>
					<li>${lagu.penyanyi}</li>
					<li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ``}</li>
				</ul>	
			</div>`
// kondisi ternary ada di sini 
document.body.innerHTML = el;

// LATIHAN nested (html fragmen bersarang) ============
const mhs = {
	nama	: "sandika",
	semester : 5,
	matakuliah :[
		'matematika',
		'ipa',
		'ips',
		'pmp'
	]
}
function cetakmatakuliah(matakuliah){
	return `
		<ol>
			${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
		</ol>
	`;
}
const el = `
	<div class="mhs">
		<h2>${mhs.nama}</h2>
		<span class="semester">semester: ${mhs.semester}</span>
		<h4>mata kuliah :</h4>
		${cetakmatakuliah(mhs.matakuliah)}
	</div>
`;
document.body.innerHTML = el

// TAGGED TEMPLATE 

/*
adalah bentuk yang lebih komplex dari template literal,
memungkinkan kita untuk membaca template literals
melalui sebuah function

 1. kita punya 2 var
 2. buat var str = string literal
 3. conson.log
 4. tulis depan string literal nama function (coba)
 	maka seolah2 kita tulis " coba( string literal ) " seolah string jadi argumen
 5. buat function di atasnya argumen kosong, return sebuah kata("heeeyyy")
 6. saat kita consolelog maka yang tampil hanya return "heyyy" saja, string kayak tidak di gunakan sama sekali
 7. tapi coba isi argument("kata"), dan return "kata" tsb, console.log maka string akan di pecah kedalam array
 	di pisahkan dengan expression. dan expression tidak di ikut sertakan, dimanakah expressionya
 8. expression berada pada argumen kedua, ketiga dst sesuai jumlah expresion 
 	pada contoh di atas coba berikan argumen "nama", "umur". lalu coba console.log masing2, 
 	di argumen kedua dst itu lah tempat expression berada
 9. karena biasanya kita tidak tau berapa jumlah expression yang harus di tampung maka 
 	gunakan rest parameter " ...args "
 10. maka saat kita return rest parameternya maka argument tertampung dalam array juga
 11. sekarang bagai mana kita menggabungkan string sama seperti template literal yang dikirim
 	buat let = ''; buat string kosong dalam function tsb gunakan "let jangan const",
 	lalu buatkan foreach pada argument pertama dan returnya gabungkan argumen awal dan kedua sesuai index
 12 coba jalan kan consolelog sudah jalan namun ada yang janggal kenapa di akhir ada value undefined
*/

const nama = "aqil"
const umur = "33"

function coba(tulisan, ...args) {
	let result =""
	tulisan.forEach((string, i) => { result += `${string} ${args[i] || '' }`})
	return result;
}

const str = coba `halo nama saya ${nama} umur saya ${umur} tahun`
console.log(str)

// kalau pakai reduce malah lebih ringkas lagi di bwah ini yang pakai forEach sudah saya komen untuk perbandingan 

const nama = "aqil"
const umur = "33"

function coba(tulisan, ...args) {
	// let result =""
	// tulisan.forEach((string, i) => { result += `${string} ${args[i] || '' }`})
	// return result;

return tulisan.reduce( (accumulator, str, i) => `${accumulator} ${str} ${args[i] || '' }`, '' )
}

const str = coba `halo nama saya ${nama} umur saya ${umur} tahun`
console.log(str)

/*
coba pakai reduce : reduce berfungsi manggabungkan isi array
- coba bungkus args dengan span dan beri class dan css di index.html bacground color yellow 
*/

const nama = "aqil"
const umur = "33"

function highlight(tulisan, ...args) {
return tulisan.reduce( (accumulator, str, i) => `${accumulator} ${str} <span class="hl"> ${args[i] || '' } </span>`, '' )

}

const str = highlight `halo nama saya ${nama} umur saya ${umur} tahun`
console.log(str)

document.body.innerHTML = str;


// CONTOH LAIN 

const judul = styledH1 `script css`;   //Styled Components (di vue, react)
//-----
function sanitize(string, ...args){ return DOMPurify.sanitize(hacker);} // contoh sanitize
const hacker = `onLoad="alert(ha, ha, ha i hack you);"`;
const bersihkan = sanitize `<p>${hacker}</p>`
//-----
const terjemahkan = i18n `ini masih bahasa indonesia`; 	// contoh trasnlate international
