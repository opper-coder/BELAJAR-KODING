/*
dari hilman ramadhan 15 ramadlon 2020

VARIABAEL
var
let
const
var 
    -deklarasi tak peduli scoop(dalam kurawal fungsion looping if dll) 
    -deklarasi lebih sekali, nama sama gak masalah
    -bisa di akses di luar braket 
let 
    -deklarasi lebih sekali nama sama, dalam satu scoop nggak bisa
    -isinya boleh di timpa 
    -tidak bisa di akses di luar braket 
const 
    -tidak boleh deklarasi ulang
    -isinya juga tak boleh di timpa
    -tidak bisa di akses di luar braket 

CONCATE cara gabung string dengan variabel pakai ${nama} tapi string pakai backtik kutip satu kekiri(" ` " bukan kutip satu ini " ' ")
    - let nama = `dodi`;
    - let datadiri = `namanya adalah ${nama}, sebagai anggota`;
    - let coba = `<div> adalah ${nama}, sebagai anggota </div>`;  // bisa untuk DOM lebih enak

// ============================= ARROW FUNCTION
*/
-   let coba = () => {} // versi lengkap
-   orang => { return } // versi satu parameter, hapus kurung bulat
-   orang =>  return // versi satu pernyataan, hapus braket hilangkan ;
/*
    -lebih singkat 
    -perbandingan standard vs arrow pakai FUNCTION:
*/
let pelanggan = ["andi", "azka", "dodi"];
// ringkasan metamorfosa function (sekaligus contoh dalam foreach dan map) :
pelanggan.forEach( function(orang){console.log(orang);} )   // fungsi primitive
pelanggan.forEach( (orang) => {console.log(orang);} )   // array function
pelanggan.forEach( orang => {console.log(orang);} )     // satu param
pelanggan.forEach( orang => console.log(orang) )    // satu baris braket (nihil ;)
pelanggan.map( orang => console.log(orang) ) // map == foreach
pelanggan.map( orang => {return console.log(orang)} ) // bedanya bisa pakai return, tapi harus pakai braket

// paramater
let coba  = (orang, alamat) => console.log(orang, alamat)       // paramaeter > 1
let coba1 = (orang= name here, alamat=addres here) => console.log(orang)  // default param
pelanggan.map((a,b) => console.log(a + b))        // parameter (a) berisi array pelanggan, parameter ke dua(b), tidak tau sebabnya kenapa jadi index (0123) saat dimap

coba(); // panggil
//---

pelanggan.forEach(
    function(orang) {
        console.log(orang);
    }
)

//--- 
pelanggan.forEach(
    (orang) => { // hapus 'function' ganti dengan =>
        console.log(orang);
    }
)

//---
pelanggan.forEach(
    orang => { // jika parameter cuma satu kurung bulat boleh di hapus kalau lebih satu param ya g bisa di hapus
        console.log(orang);
    }
)

//---
pelanggan.forEach(
    orang => // jika isi braket nya cuma satu kurawal boleh hapus
    console.log(orang) // hapus juga titik koma
)

//---------------- perbandingan standard vs arrow pakai MAP: forEach pakai map

pelanggan.map(
    (orang, index) => {
        console.log(orang + index);
    }
)

//---
let nama = pelanggan.map(
    (orang, index) => {
        return (orang + index); // bisa pake map juga bisa pakai return
    }
)
console.log(nama);

//---
let nama = pelanggan.map(
    (orang, index) =>
    orang + index // return, kurung(),kurawal{}, titikoma(;) di hapus
)
console.log(nama);

//----------------- parameter default

ada = (nama = "andy", alamat = "bella") => { // buat nilai default
    console.log(nama, alamat)
}

ada() // jika parameter tak di oper maka nilai default yang akan jalan

// ============================= REST dan SPREAD



// rest: 
// adalah oper pakai array dan ...array
signIn = (user, pass, umur) => {
    console.log("nama: " user + "dengan password" + pass + "umurnya :" + umur)
}
let arrdata = ["andy", "123xx", 23]

signIn(...arrdata)  // jika panggilnya pakai ini (...data) maka di terima sebagai array
                    // bisa di foreach() dan map()


// ---
// spred:
    signIn = (...data) => {
        console.log(data) // menghasilkan array 
    }

let nama = "andy"
let kelas = 5
let alamat = "bella"

signIn(nama, kelas, alamat) // jika  panggilnya oper array maka di terima dan di tampilkan sebagai array



// ============================= templat LITERAL

let nama = "andy"
let umur = 20

let tulisan = `namanya adalah ${nama} dan umurnya ${umur}` // cara nulis pakai backtick, variabel pakai dollar, ada kurawal
    // let tulisan = 'namanya adalah $nama dan umurnya $umur'		// versi lain tanpa {}
console.log(tulisan)

// ---

let div = '<div>isi divnya ${nama} </div>' // contoh keperluan dom di perlukan

// --- 
fcoba = (strings, nama) => { console.log(strings, username) } // satu contoh ada function

let output = fcoba `saya coba fungsi juga bisa ya ${nama} lagi coba` // panggilnya tidak pakai "fcoba()" tapi " fcoba `` " dengan satu kutip
console.log(output) // syaratnya pakai backtick ``, parameternya terbaca duluan adalah string nya var nya tidak
    // hasilnya array ada 2 nilai{"saya coba fungsi juga bisa ya","lagi coba"}

// contoh yang fungtion
let nama = "andy"
let umur = 20

fcoba = (string, datadiri, umur) => {
    console.log(string[0] + datadiri + string[1] + umur)
}

let output = fcoba`nama saya adalah ${nama} umur: ${umur}`


// ============================== ShortHand menyingkat

// object dasar
let obj = {
    nama : "aqil",
    kelas : "enam"
}
console.log(obj.nama)

// ---
let nama = "aqil"
let umur = 12

let objectku = {
    nama: nama, // kalau parameter dan valuenya bernama sama, maka bisa di singkat
    umur: umur
}

let objectku = {
        nama, // di singkat begini
        umur
    }
    
// ---
let nama = "aqil"
let umur = 12
getData = () => {
    return `member namanya ${nama} umurnya ${umur}`
}

let objectku {
    nama,
    umur,
    getData // bahkan function pun bisa di singkat dg nama fungsi saja
tidak perlu " getData : getData() "

console.log(objectku.getData())

// ======================= shorthand dan destructur

// --- membuat variabel bersamaan dan assign bersamaan berdasar array atau object
// atau (bahasa lainya) kita pecah isi object ke variabel2 secara bersamaan

// punya sebuah object
let member {
    nama: "saputro"
    umur: 12
}

//bikin 2 variabel sekaligus, kita pecah isi object jadi variabel
let {umur, nama} = member // variabel sesuai key pada object
let {umur, nama:jeneng} = member //kalau ingin variabel nama baru cara pecahnya begini

console.log(nama) = //sudah jadi variabel coba kita consol sesuai nam key
console.log(jeneng) = //sesuai nama baru

// --- contoh pakai array juga bisa / tapi saya test tidak jalan entah mungkin masalah install webpack es6
let angka = [1, 2, 3]
let (a, b, c) = umur // assign sesuai index

console.let(a);


// ======================== CLASS
// terus kan sendiri pelajaran  clsss
class member {
    constructor(nama){
        this.name.name
    }
}

// ======================== EXPORT IMPORT

let user = { nama : "aqil" } 
export {user};   // kita punya satu variabel di suatu File kita harus export 
import {user} from "./contoh.js"// di halaman lainya dimport

let user = { nama : "aqil" } 
let user2 = { nama : "izza" } 
export {user, user2};   // kita punya satu variabel di suatu File kita harus export 
import {user, user2} from "./contoh.js"// di halaman lainya dimport

export let user = { nama : "aqil" } 
export let user2 = { nama : "izza" } // langsung export satu persatu
import {user, user2} from "./contoh.js"// di halaman lainya dimport

export, export global, export default // 3 export bisa di gunakan tapi ada perbedaanya cari sndiri, export default recomended

// kalau export import sudah banyak halaman susah dan kotor solusinya bikin file terminal (helper)
// dalam file helper export semua object

export * from "./member.js"
export * from "./forum.js"

import * as coba from "./helper".js

// ============================= CATATAN
    -
    sepertinya dalam contoh di bawah ini tidak pernah menuliskan titik koma(";")

