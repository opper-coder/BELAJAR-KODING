//========================== RINGKASAN =============================
// -----array
const cobaArray = ['satu', 'dua', 'tiga'];
const [a, b, c] = cobaArray;
console.log(b, c, a);
// -----object
const cobaObject = {d :'empat', e : 'lima', f : 'enam'};
const {d, e, f} = cobaObject;
console.log(f, e, d);
// -----skip items unpack
const cobaArray = ['satu', 'dua', 'tiga'];
const [a, , c] = cobaArray;	// kalau tidak di assign kosongin aja setelah koma
console.log(b);	
// -----swap items unpack
let a = 1;
let b = 2;
console.log(a);	// sebelum
[a, b] = [b, a];		
console.log(a);	// swap
// -----unpack array => dari function ke variabel
function iniObject(){ return [1, 2, 3]; }
const [a, b, c] = iniObject();
console.log(a);
// -----assignmen tanpa declaration 
({keytiga, keydua, keysatu} = {keysatu : 'empat', keydua : 'lima', keytiga : 'enam'})
console.log(keydua)
// -----assign dengan object baru / array
({keysatu, ...values} = {keysatu : 'empat', keydua : 'lima', keytiga : 'enam'})	// ...namaObjectBaru
console.log(keysatu)
console.log(values)
console.log(values.keydua)
([keysatu, ...values] = ['empat', 'lima', 'enam'])	// ...namaArrayBaru
console.log(keysatu)
console.log(values)
// -----assign dg nama beda (nama alternatif)
({keytiga: ada, keydua: apa, keysatu: asa} = {keysatu : 'empat', keydua : 'lima', keytiga : 'enam'}) // ' : nama baru '
console.log(apa)
// -----memberi nilai default
const cobaObject = {keysatu : 'empat', keydua : 'lima', keytiga : 'enam'};
const {keysatu, keydua, keytiga, keyempat = "haloo"} = cobaObject;
console.log(keyempat);
// -----kombinasi nama baru + nilai default
const cobaObject = {keysatu : 'empat', keydua : 'lima', keytiga : 'enam'};
const {keysatu, keydua, keytiga, keyempat : salam = "haloo bandung"} = cobaObject;
console.log(salam);
// -----ngambil parameter function dari object 
const biodata = {nama : "izza", alamat : "banggai"}
console.log(salam(biodata))
function salam({nama, alamat}){ return `halo nama saya ${nama} alamat saya ${alamat} jaya...` }
// -----destructuring return array
function kalkulasi(a, b) { return [ a + b, a * b, a / b, a - b ]; }
const [juml, kal] = kalkulasi(3, 4)
console.log(kal);
console.log(juml);
// -----kalau return object :
function kalkulasi2(a, b) {
	return { 
		tambah : a + b,
		kali : a * b,
		bagi : a / b,
		kurang : a - b 
	};
}
// const {kali, bagi} = kalkulasi2(3, 4);
const {kali, bagi, kurang, tambah, modulus = "tidak ada"} = kalkulasi2(3, 4);
console.log(tambah);
console.log(modulus);
// -----ada object bersarang
const biodata = {nama : "izza", alamat : { kab : "banggai", kec : "nuhon" }}
function salam({nama, alamat : {kab, kec}}){ return `halo nama saya ${nama} alamat saya kabupaten ${kab} kecamatan ${kec} raya` }
console.log(salam(biodata));
//========================== /RINGKASAN =============================


















// DESTRUCTURING VARIABEL / DESTRUCTURING ASSIGNMENT ARRAY DAN OBJECT
/*
Syntax pada js yang memungkinkan kita dapa membongkar
nilai dari array atau properti dari object ke variabel yg terpisah
	atau
konversi array/abject => ke variabel2
	atau
unpack
	atau
memecah
*/

const cobaArray = ['satu', 'dua', 'tiga'];
const [a, b, c] = cobaArray;
console.log(b, c, a);

const cobaObject = {d :'empat', e : 'lima', f : 'enam'};
const {d, e, f} = cobaObject;
console.log(f, e, d);

// sebelumnya
cobaArray[1];
cobaObject.d; 
// sekarang
a;
d;

// skip items unpack
const cobaArray = ['satu', 'dua', 'tiga'];
const [a, , c] = cobaArray;	// kalau tidak di assign kosongin aja setelah koma
console.log(b);				// pasti undefined

// swap items unpack

let a = 1;
let b = 2;
console.log(a);			// sebelum
[a, b] = [b, a];		// swap
console.log(a);			// sesudah

// unpack array => dari function ke variabel
function coba(){
	return [1, 2, 3];			// function return array
}
const [a, b, c] = coba();		// unpack langsung dari function ' = jalankan function yg return array'
console.log(a);					// cara baru

const ada = coba(); 			// cara lama 
console.log(ada[2]);			// cara lama

// unpack object
const cobaObject = {keysatu : 'empat', keydua : 'lima', keytiga : 'enam'};
const {keytiga, keydua, keysatu} = cobaObject; 		// unpack sesuai key, bukan index
console.log(keytiga);

// assignmen tanpa declaration 
({keytiga, keydua, keysatu} = {keysatu : 'empat', keydua : 'lima', keytiga : 'enam'})	// ({assign} = {obj})
console.log(keydua)

// dengan rest parameter, properti pertama akan di assign ke keysatu, 
// sedang key kedua dst akan di assign ke newobject (values) di push di object baru
// nama nya bebas asal ada titik tiga ...
// kelebihanya jika object bertambah assign nya tidak perlu di edit lagi
// oya ini juga berlaku pada array, nanti hasilnya newarray juga
({keysatu, ...values} = {keysatu : 'empat', keydua : 'lima', keytiga : 'enam'})	// ...namaObjectBaru
console.log(keysatu)

// assign dg nama beda (nama alternatif)
({keytiga: ada, keydua: apa, keysatu: asa} = {keysatu : 'empat', keydua : 'lima', keytiga : 'enam'}) // ' : nama baru '
console.log(apa)

// memberi nilai default
// jika keyempat tidak tesedia dalam object maka dia akan memanggil nilai defaultnya
const cobaObject = {keysatu : 'empat', keydua : 'lima', keytiga : 'enam'};
const {keysatu, keydua, keytiga, keyempat = "haloo"} = cobaObject; 				// assign = "nilai default"
console.log(keyempat);

// kombinasi nama baru + nilai default
const cobaObject = {keysatu : 'empat', keydua : 'lima', keytiga : 'enam'};
const {keysatu, keydua, keytiga, keyempat : salam = "haloo bandung"} = cobaObject; 				// nama baru + nilai default
console.log(salam);

// destructuring pada function
// 1. destruring argument function
// ngambil field(key : value) pada object, yg kita gunakan menjadi argumen pada function
// jadi object di panggil dalam function lalu function meng extract object dg value sbg argumen
const mahasiswa = { nama : "aqil", alamat : "saiti" }	// 1. ada object
function ambilValueObject({nama}){ return nama }		// 3. dan di funtion ngambil key nya dg destructuring 
console.log(ambilValueObject(mahasiswa));				//    {boleh di panggil lbh dari satu} dan returnya sesuaikan argumen
														// 2. lalu kita panggil sebuah function dg param object

// lebih jelasnya contoh lain:
const biodata = {nama : "izza", alamat : "banggai"}					// 1. ada object
function salam({nama, alamat}){										// 3. di argumen di isi object berisi properti object
	return `halo nama saya ${nama} alamat saya ${alamat} jaya...`	// 4. disini tinggal panggil variabel tidak ada chain
}
console.log(salam(biodata))											// 2. panggil function dengan param object 



// 2. destructuring return
// destructuring function pada array urutan index sangat berpengaruh sedang object tidak
// kalau return array :
function kalkulasi(a, b) {
	return [ a + b, a * b, a / b, a - b ]; 					// return array
}
const jumlah = kalkulasi(2, 3)[0]; 	// cara lama untuk mengambil array 0 
const kali = kalkulasi(2, 3)[1];
console.log(jumlah);

const [juml, kal] = kalkulasi(3, 4);	// index ber pengaruh juml harus index 0, kal harus 1
console.log(juml);
// kalau return object :
function kalkulasi2(a, b) {
	return { 
		tambah : a + b,
		kali : a * b,
		bagi : a / b,
		kurang : a - b 
	};
}
const {kali, bagi} = kalkulasi2(3, 4);	// index sesuaikan saja key jangan lupa kurawal
const {kali, bagi, kurang, tambah, modulus = "tidak ada"} = kalkulasi2(3, 4);	// petakan semua + nilai default
console.log(bagi);

// ada object bersarang
const biodata = {nama : "izza", alamat : { kab : "banggai", kec : "nuhon" }}			// 1. ada object bersarang
function salam({nama, alamat : {kab, kec}}){											// 3. kita pecah/restructur di argumen ini secara bersarang
	return `halo nama saya ${nama} alamat saya kabupaten ${kab} kecamatan ${kec} raya`	// 4. disini tinggal panggil variabel tidak ada chain
}
console.log(salam(biodata))

// pakai rest destructuring juga ada silahkan buka lembaran i7 spread dan rest parameter 

// bisa untuk destructuring array dan object:
const kelompok = [ "aqil", "izza", "sylmi" ];
cons [ ketua, ...anggota ] = kelompok;
// object
const kelompok = { "aqil", "izza", "sylmi" };
cons { kepala, ...personil } = kelompok;
// buktikan
console.log(ketua);









