// =========================== RINGKASAN ================================

// ----- ARRAY jadi satu VARIABEL
const cobaArray = ["aqil", "izza", "sylmi"];
console.log(...cobaArray);
// ----- MENGGABUNGKAN 2 array
const cobaArray = ["aqil", "izza", "sylmi"];
const cobaArray2 = ["ikik", "fahmi", "andi"];
const orang = [...cobaArray, ...cobaArray2]
const orang = [...cobaArray, "yazid",...cobaArray2] // sisipkan
console.log(orang);
	// cara lain pengabungan
	const orang = cobaArray.concat(cobaArray2); 
// ----- REFERENSI ARRAY ini jika array asli berubah demikian juga Ref nya
const cobaArray = ["aqil", "izza", "sylmi"];
const refArray = cobaArray;
// ----- COPY ARRAY bebas edit mana aja
const cbArray = ["aqil", "izza", "sylmi"];
const copyArray = [...cbArray];
// ----- REST PARAMETER
function coba( ...args ){ return `${args[0]},${args[1]},${args[2]}` }
console.log(coba(1, 2, 3, 4, 5));
function coba(a, b, ...args ){ return `${a},${b},${args[0]},${args[1]},${args[2]}` }
console.log(coba(1, 2, 3, 4, 5));
	// alternatif 
	function coba(){ return arguments }	
	console.log(coba(1, 2, 3, 4, 5));
	function coba(){ return Array.from(arguments); }	
	console.log(coba(1, 2, 3, 4, 5));
	function coba(){ return [ ...arguments ]; }	
	console.log(coba(1, 2, 3, 4, 5));
// ----- DESTRUCTURING ARRAY
const kelompok = [ "aqil", "izza", "sylmi" ];
const [ ketua, ...anggota ] = kelompok;
console.log(ketua);
console.log(anggota);
	// object
	const kelompok = { a: "aqil",b: "izza",c: "sylmi" };
	const { a, ...personil } = kelompok;
	const { a:kepala, ...personil } = kelompok;
	console.log(a);
	console.log(kepala);
	console.log(personil);

// ========================== /RINGKASAN ================================








// SPREAD OPERATOR VS REST PARAMETER
/*
spread adalah:
	- memecah/unpack/expand iterable menjadi satu elemen2 bagian (single elemen)
	- kayaknya mirip dengan destructuring bedanya disini tidak di masukan ke variabel2 baru
	- object iterable:
		string
		array
		arguments / node list
			dibawah belum kita bahas dulu
		typed array 
		map
		set
		user-defined iterables
*/

const cobaArray = ["aqil", "izza", "sylmi"];
console.log(...cobaArray); // return: aqil izza sylmi
// penggunaan:
// untuk menggabungkan 2 array
const cobaArray = ["aqil", "izza", "sylmi"];
const cobaArray2 = ["ikik", "fahmi", "andi"];
const orang = [...cobaArray, ...cobaArray2]
const orang = [...cobaArray, "yazid",...cobaArray2] // sisipkan
console.log(orang);
// cara lain pengabungan
const orang = cobaArray.concat(cobaArray2); 
// untuk kopi
const cobaArray = ["aqil", "izza", "sylmi"];
const refArray = cobaArray;					// ini namanya bukan copi tapi referensi jadi kalau ada perubahan nilai salah satunya semua berubah. coba timpa/replace isinya
	// harusnya:
	const copyArray = [...cobaArray];
	copyArray[1] = "fajar";
	console.log[cobaArray];  // buktikan
	console.log[orang]; 
// ada contoh yang keren di video no 18

// REST PARAMETER 
/* 
- merepresentasikan argumen pada function dengan jumlah yang tak terbatas menjadi sebuah array.
- kita tahu argumen function dapat di tangkap dengan variabel. dengan res kita tangkap sebagai array tak terbatas
- 
 */

function coba(a){ return a }		// 2. di function yang menangkap 1 param maka yang di tangkap pada index pertama 
console.log(coba(1, 2, 3, 4, 5));	// 1. sebuah function di panggil dengan banyak param
									// 3. jika parameter 2 maka index 0, 1.
// jika pakai rest maka sisanya di tangkap dalam array

function coba(a, b ){ return `${a}, ${b}` } // 2. jika di tangkap 2 param maka yang di tangkap 2 index pertama 
function coba(a, b, ...args ){ return `${a},${b},${args[0]},${args[1]},${args[2]}` }	// jika pakai rest maka argumen di tangkap dalam array "sisanya" 
function coba( ...args ){ return `${a},${b},${args[0]},${args[1]},${args[2]}` }	// atau tangkap semua sekalian

console.log(coba(1, 2, 3, 4, 5));
	// catatan rest hanya di tulis di akhir jika ada parameter lainya, tidak boleh : ( ...args, a, b )
	// sebenarnya kosong juga sudah ditangkap oleh arguments tapi dia bukan array melainkan object: 
function coba(){ return arguments }	
console.log(coba(1, 2, 3, 4, 5));
	// jika ingin konversi arguments menjadi array maka gunakan array.from():
function coba(){ return Array.from(arguments); }	
console.log(coba(1, 2, 3, 4, 5));
	// atau conversi gunakan strech operator : [...argument]
function coba(){ return [ ...arguments ]; }	
console.log(coba(1, 2, 3, 4, 5));

// bisa untuk destructuring array dan object:
const kelompok = [ "aqil", "izza", "sylmi" ];
cons [ ketua, ...anggota ] = kelompok;
// object
const kelompok = { "aqil", "izza", "sylmi" };
cons { kepala, ...personil } = kelompok;
// buktikan
console.log(ketua);

// bisa untuk filtering
function filterBy(type, ...values) {
	return values.filter( v => typeof v === type );
}
console.log(filterBy("number", 1, 3, "aqil", true, "izza", 10, false)); // ganti parameter filterBy : number, string, boolean dst
