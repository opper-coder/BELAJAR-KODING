// FUNCTION

// basic :
// f nama(){}
function tampilPesan(nama){alert("halo " + nama);}
tampilPesan("aqil");
// function expression / anonimuous:
// const nama = f(){}
const tampilPesan = function(nama){alert("halo " + nama);}
tampilPesan("aqil");
// arrow function :
// const nama = (param) => {action}
const tampilPesan = (nama) => {alert("halo " + nama);}
tampilPesan("aqil");
// const nama = param => {action}
const tampilPesan = nama => {alert("halo " + nama);} // bisa hapus kurung()
tampilPesan("aqil");
// const nama = param => action
const tampilPesan = nama => alert("halo " + nama); // bisa hapus () dan {}
tampilPesan("aqil");
// const nama = (param, param2) => {action}
const tampilPesan = (nama, alamat) => {return "halo " + nama + alamat } // tidak bisa hapus()
tampilPesan("aqil", "saiti");
// const nama = param => action
const tampilPesan = nama => "halo " + nama // hapus {} bahkan return jika hanya saru baris return saja (implisit return)
tampilPesan("aqil");
// const nama = () => action
const tampilPesan = () => "halo "  // wajib pakai kurung saat parameter kosong
tampilPesan();

contoh:

let mahasiswa = ["aqil", "izza", "andi"];
let jumlahHuruf = mahasiswa.map( nama => nama.length )		// mau return array
console.log(jumlahHuruf);

let mahasiswa = ["aqil", "izza", "andi"];
let jumlahHuruf = mahasiswa.map( nama => ({nama: nama, jumlahHuruf: nama.length}) )		// mau return object{} bungkus
// console.log(jumlahHuruf);
console.table(jumlahHuruf.nama);		// Pengganti konsole.log untuk array dan object

// THIS PADA FUNCTION 
// konsep this berlaku pada function declaration
// this tidak ada pada arrow function
// this basicnya mengacu pada object mahasiswa(function declaration), coba dibawah:
const Mahasiswa = function(){
	this.nama = "sandika",
	this.umur = 33
	console.log(this)
}
const data = new Mahasiswa();
// this pada metode mengacu pada object ini aman, coba ganti methode dengan arrow pasti undefined
const Mahasiswa = function(){
	this.nama = "sandika",
	this.umur = 33
	this.salam = function(){
		console.log(`halo saya ${this.nama}`);
	}
}
const data = new Mahasiswa();
// fungsi di atas tidak serta merta bisa di ubah ke arrow function, kalau method boleh:
// basicnya this tidak ada pada arrow function makanya methode boleh pakai this dalam arrow sebab method 
// - berada di dalam object(function biasa) 
const Mahasiswa = function(){
	this.nama = "sandika",
	this.umur = 33
	this.salam = () => {
		console.log(`halo saya ${this.nama}`);
	}
}
const data = new Mahasiswa();
// makanya this tidak bisa di temukan di object literal oleh arrow function (dia akan mencari 
// object this diluar tidak ditemukan)

// SATU CONTOH pahami
const Mahasiswa = function() {
	this.nama  = "sandika",
	this.umur  = 33,
	this.salam =  function() { 
		console.log(`halo ini ${this.nama}`);
	}
	setInterval( function(){ console.log(this.umur++)}, 1000 ) 	// function declaration this tidak kebaca (NaN) 
}																// karena kena hoisting maka lexical scoop langsung window
const data = new Mahasiswa;
// karena arrow tidak punya konsep this maka this akan di cari di lexical scoopnya
// maka nilainya menjadi ada
const Mahasiswa = function() {
	this.nama  = "sandika",
	this.umur  = 33,
	this.salam =  function() { 
		console.log(`halo ini ${this.nama}`);
	}
	setInterval( () => { console.log(this.umur++)}, 1000 ) 		// arraw punya lexical scoop dalam object dan tidak kena hoisting
}
const data = new Mahasiswa;
// =========================================================================











// =========================================================================
// HIGHER ORDER FUNCTION

// DALAM JS function adalah first class object
// object saja terbuat dari function
// sama dengan type data lainya function dan object 
// bisa di simpan sebagai argumen dan return function lainya

function kerjakanTugas(matakuliah, selesai){
	console.log(`mulai kerjakan tugas ${matakuliah}`);
	selesai();
}
function selesai(){
	alert("selesai mengerjakan tugas")	
}
kerjakanTugas("matematika",selesai);

// peristiwa ini ada function yang memiliki argumen berupa function lainya
// function yang memiliki argumen function di sebut "higher order function" sedang 
// function yang di panggil sbg argumen disebut "callback"
// contoh lain: setInterval di atas

// atau 

// function yang memiliki return value berupa function juga disebut "higher order function"
function salam(waktu){
	return function(nama){ console.log(`halo ${nama} selamat ${waktu}`); }
}

let selamat = salam("sore");
console.dir(selamat("aqil"));	// pembahasan ada di closure

// alasan pakai higher oreder function:
// 1. abstraksi (penyederhanaan)
// 2. anekdot;
	"cara membuat program ada dua:"
	"1. Buat program sesederhana mungkin hingga jelas-jelas tidak ada kekuranganya "
	"2. Buat program sekomplex mungkin hingga tidak ada kekurangan yang jelas-jelas"
// 3. pendekatan functional programing lebih aman efisien dan mudah

// contoh:
// bayangkan saat angka 10 berubah menjadi 20 maka scrip yang ke 2 lebih simpel dan reusable

for(var i=0; i<10; i++){ console.log(i); } // cara pertama

function pengulangan(n){ for(var i=0; i<n; i++){ console.log(i); } } // cara kedua
pengulangan(20);

// atau lebih simpel lagi ini:

function pengulangan(n, aksi){ for(var i=0; i<n; i++){ aksi(i); } } // cara kedua
pengulangan(20, alert);		// pilih alert atau console.log