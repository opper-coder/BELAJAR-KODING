/*
install -> download golang.org -> terminal :> go version
install -> vscode -> instal extention -> cari "go by google"
install all -> saat kita bikin file.go pertama kali -> save -> ada recomendasi 
	install all dependency go/plugin/extention dll di vs code
install -> extention -> code runner
setting -> atau ctrl + ` -> cari code runner -> centang code runner as terminal
tulis template pertama dan di pojok kanan ada play tekan
atur environment variabel untuk terminal-go, cari folder instalasi
di c/programfiles/go/bin -> copy di envi ->  
system variabel -> path -> edit -> new -> paste url
*/


// ---------------------------------------------- VAR/CONST ->32
// var ada = 10 => int 
var ada = 1
ada := 10
var ada int = 10
var( ada =10; asa = 20; )
const nama string = "aqil"
// ---------------------------------------------- ARRAY ->59
// var nama = {} => [3] => string
var names = [3] string{}
var names = [3] string{ "andi","aqil","eko",}
var names = [3] string
names[0]="andi";names[1]="aqil";names[2]="eko";
names := [...]string{"eko", "andi", "iza",} // tidak tahu berapa len()
len(names);
// ---------------------------------------------- SLICE ->
// make() => [] => string => len => cap
// slice[1:3]
make([]string, len, cap)
var names = [3] string{ "andi","aqil","eko",} // array
var sliceku = names2[1:3] // slice array
sliceku[2] = "hasbi" // insert/edit 
sliceBergantung := append(sliceku, "yazid") // tambah 1 index lagi, tp masih bergantung
sliceBergantung2 := append(sliceku, "iza") // buatkan baru (jika melebihi kapasitas)
sliceBaru := make([]string, 2, 5) // panjang, kapasitas -> tanpa array -> lalau insert
len(sliceku)
cap(sliceku)
// ---------------------------------------------- ARRAY vs SLICE ->
names := [...]string{"eko", "andi",} beda disini [...] //array ada ukuran
names := []string{"eko", "andi",}
// ---------------------------------------------- MAP ->
// map{} => map{k:v} => [int]int 
map[string]string{"k":"v"} // [key]value
var siswa = map[string]string{"nama" : "andi","umur" : "3",}
siswa["umur"] = "4" //ubah
siswa["alamat"] = "saiti" // tambah
delete(siswa,"nama") // hapus
var buku = make(map[string]string) // deklarasi
buku["judul"] = "belajar go" // tambah
// ---------------------------------------------  PERBEDAAN DATA COLLECTION ->
// array call: names[0]
var names = [3] string{ "andi","aqil","eko",} 
// slice  call : sliceku[0]
var sliceku = names2[1:3]	
// map call: siswa["nama"]
var siswa = map[string]string{"nama" : "andi","umur" : "3",} 
// struct/templat field tabel 
type Nama struct {a,b string; c int} 
// object1/record tabel call: Nama.a
var org1 Nama = {a:"v",b:"v",c:v,} 
// method
func(nama Nama) halo() {		
	fmt.Println("halo nama saya", nama.a)
}
// 

// ---------------------------------------------- IF ->
if true{} else if false{} else{}
if true {
	fmt.Println("halo aqil")
	} 
	if false {
		fmt.Println("halo aqil")
		} else if true {
			fmt.Println("halo izza")
			} else {
				fmt.Println("halo silmi")
			}
			if nama := "andi"; nama == "andi" { fmt.Println("halo", nama) } // variabel dalam if
// ---------------------------------------------- SWITCH ->
switch "aqil" {
	case "aqil": "";
	case "iza": "";
	default : "";
}
// case truly
switch pj := 10; pj < 12 {
	case true: ""
	case false: ""
}
// tanpa kondisi/kondisi langsung di case
var pj = true
switch {
	case pj == false : ""
	case pj == true : ""
	default : ""
}
// ---------------------------------------------- FOR LOOP ->
for i:=0; i<10; i++ {}
for i, variabel:= range mapku {i, variabel}
continue
break
for i:=0; i<10; i++ { fmt.Println("ini ke",i) }
// for range untuk semua data collection: map, array, slice
for i, nama:= range slice {}
namaNama :=[]string{"aqil","iza","silmi"}
for i, nama:= range namaNama {
	fmt.Println("index", i, "=", nama)
}
// break untuk memutus looping
for i:=0;i<10;i++ {
	if i == 5 {break}
	fmt.Println("perulangan ke",i)
}
// continue untuk skip index
for i:=0;i<10;i++ {
	if i%2 == 0 {continue}
	fmt.Println("perulangan ke",i)
}
// ---------------------------------------------- FUNCTION ->
func halo(){} // panggil halo()
func halo(nama string, alamat string){} // call: halo("aqil","saiti")
func halo(nama string)string{return "halo " + nama} // return call: fmt.Println(halo("aqil")
func siswa()(string, string){return "aqil","izza"}// multiple return 
//call= siswa1, siswa2 := siswa(); fmt.Println(siswa1, siswa2)
// abaikan return dg _, karena var di golang wajib di pakai->
func siswa()(string,string){return "aqil","izza" }// call: siswa1, _ := siswa(); fmt.Println(siswa1)
// variabel return langsung di value nya->
func siswa()(sis1,sis2 string){sis1="aqil"sis2="iza"return sis1, sis2}
orang1, orang2 := siswa(); fmt.Println(orang1, orang2);
// variadic function (slice argument)->
func jumlahkan(angka ...int)int{total := 0;for _,nomor:=range angka{total+=nomor}return total} 
// call: hasil := jumlahkan(1, 2,3,4); fmt.Println(hasil)
// variadic function (slice parameter)->
func jumlahkan(angka ...int)int{total := 0; for _, nomor := range angka { total += nomor } return total}
// call: sliceAngka := []int{10,10,10,10} hasil := jumlahkan(sliceAngka...); fmt.Println(hasil);
// Function Value (termasuk type data, bisa masuk dalam var dan di panggil)->
func halo(nama string)string{return "halo " + nama}
result := halo
fmt.Println(result("aqil"))
// fungtion as parameter /parameter fungsi lain dengan fungsi jg ->
func salam(nama string, filter func(string) string){fmt.Println("halo", filter(nama))}
func filter(nama string) string {if nama == "anjing" {return "xxxx"} else { return nama }}
filterkata := filter; 
salam("anjing", filterkata) // call 
// Type declaration / persingkat "parameter as function" dengan type
	// type saring func(string)string  
	// func salam(nama string, filter saring){}
// Anonimous Function ->
func daftar(nama string, blacklist Blacklist){ // blacklist adalah anonimous dari func di bawah
	if blacklist(nama){fmt.Println("anda di blokir", nama)}else{fmt.Println("Selamat datang", nama)}
}
func main() {
	blacklist := func (nama string)bool{ return nama == "anjing" }
	daftar("eko", blacklist) // atau
	daftar("anjing", func(nama string)bool{ return nama == "anjing"} )
}
// loop vs recursive
func factorialloop(nilai int) int {
	result := 1
	for i := nilai; i>0; i-- {
		result *= i
	}
	return result
}
fmt.Println(factorialloop(4))
// ---
func factorialRecursive(nilai int) int {
	if nilai == 1 { return 1 
		} else { return nilai * factorialRecursive(nilai -1)}
}
fmt.Println(factorialRecursive(4))
// Closure / scoop : hati2 counter akan naik di luar function
func main(){
	counter := 0
	increment := func ()  {
		fmt.Println("Hitung naik")
		counter++
	}
	increment()
	increment()
	fmt.Println(counter)
	}
// defer / fungsi untuk tetap di jalankan meski terdapat error
// defer di tulis paling atas meski pun di running paling belakang
func alert(){ fmt.Println("selesai memanggil fungsi...") }
func jalankan(nilai int){
	defer alert()	// di tulis paling pertama meski di eksekusi terakhir
	fmt.Println("aplikasi di jalankan...")
	hasil := 10 / nilai
	fmt.Println("hasil", hasil)
}
jalankan(0) // 10 bagi = error 
// panic
func appSelesai(){ fmt.Println("selesai memanggil fungsi...") }
func jalankanApp(error bool){
	defer appSelesai()
	if error {panic("Aplikasi error") }
	alert := recover()
	fmt.Println("aplikasi di jalankan...")
}
jalankanApp(false)
// recover
func appSelesai(){ // karena defer di eksekusi terakhir, maka recover nebeng di jalan kan disini
	pesan := recover() 
	if pesan != nil {fmt.Println("pesan error : ", pesan)}
	fmt.Println("selesai memanggil fungsi...")  // ini pesan untuk dever
}
func jalankanApp(error bool){
	defer appSelesai()
	if error {panic("Aplikasi error")}
	fmt.Println("aplikasi di jalankan...")
}
jalankanApp(true)
// --------------------------------------- STRUCT ->
// adalah semacam tabel di mySQL, sedang object nya adalah record nya
type Nama struct {a,b string; c int} // struct 
var org1 Nama = {a:"v",b:"v",c:v,} // object1
var org2 Nama; org2.a="v"; org2.b="v"; org2.c=v; // object2
var org3 = Nama{ "v1", "v2", v3 } // object3, sesuai index
// --------------------------------------- METHOD ->
type Nama struct {a,b string; c int} // struct
func(nama Nama) halo(){n.b}	// method
andi := Pelanggan{a: "andi"} // object, di main(){}
andi.halo() // call method
// ---------------------------------------- INTERFACE ->
// ---------------------------------------- INTERFACE KOSONG ->
// ---------------------------------------- NIL ->
// ---------------------------------------- ERROR INTERFACE ->
// ---------------------------------------- TYPE ASSERTIONS ->
// POINTER singkatnya :
type Siswa struct{nama, alamat, jenisKelamin string}
func main(){
	var aqil Siswa = Siswa {"aqil","saiti","pria"}
	// var andi Siswa = aqil
	// var izza Siswa = aqil
	var andi *Siswa = &aqil
	var izza *Siswa = &aqil
	andi.nama = "andi"
	// andi = &Siswa {"andi","bella","pria"} // ini bukan pointer tapi copas (karena assign record baru)
	// *andi = Siswa {"andi","bella","pria"} // semua yang poiter &aqil berubah jadi andi
	// andi.nama = "siva"
	andi = new(Siswa) // ini jadinya bukan pointer lagi alias bikin record baru(secara memori tetap pointer)
	andi.nama = "diki"
	fmt.Println(aqil)
	fmt.Println(andi)
	fmt.Println(izza)
}
// POINTER function
type Negara struct{pulau, negeri string}
func ganti(negara *Negara){ // terima data pointer
	negara.negeri = "indonesia"
}
func main() {
	var indo = Negara{"hokaido", "jepang"}
	ganti(&indo) // kirim data pointer
	fmt.Println(indo)
}
// POINTER methode
type Negara struct{ pulau, negeri string }
func (negara *Negara) ganti() { // bedakan kalau g pake bintang
	negara.negeri = "indonesia"
}
func main() {
	jepang := Negara{"hondo", "jepang"}
	jepang.ganti()
	fmt.Println(jepang.negeri)
}






// -------------------------------------------------
// KETERANGAN VIDEO
// -------------------------------------------------
package main 

import "fmt"

func main() {			
	fmt.Println("Hello, izza", 3.3)
}

// ======================================== VARIABEL
var ada int;
ada = 20; // assign
ada = 30; // timpa
var ada int = 10; // assign langsung
var ada  = 10; // tanpa type data (default int32)
ada := 10; // singkat
// konv variabel int
var angka1 int32 = 32000;
var angka2 int64 = int64(angka1); // konversi dari int16 ke int32
var angka3 int16 = int16(angka2); // jika arah konversi tidak muat berubah nilai
// konv variabel str
var nama = "anDi"
var hurufKe2 = nama[2]		// return binner
var jadi = string(hurufKe2) // konv bin ke str
// type sendiri
type strAngka string
var NoKtp strAngka = "11111"
// multiple variabel
var(
	nama = "aqil"
	alamat = "saiti"
)
// const
const nama string = "aqil" // cara deklarasi sama dengan variabel 
nama = "iza" // tidak bisa di ubah 
// cara multiple sama dengan variabel
// ======================================== ARRAY
// deklarasi dulu lalu assign
var names [3] string // dedklarasi
names[0] = "andi" // assign
names[1] = "aqil"
names[2] = "eko"
// langsung assign 
var names = [3] string{
	"andi",
	"aqil",
	"eko",
}
names := [...]string{"eko", "andi", "iza",} // atau tidak disebut panjangx
Println(names)
Println(names[1])
Println(len(names[1])) // fungsi len array: lihat panjang
// ======================================== SLICE
names2 := [4]string{"eko", "andi", "iza", "silmi",}// array
slice := names2[1:3] // index array dan slice dari 0 [start:len]
// slice adalah bagian dari array
names2[2] = "izabaru" // ubah isi array atau isi slice semua ikut berubah
slice[1] = "izza" // slice & array saling mempengaruhi jika di ubah salah satu
fmt.Println(names2)
fmt.Println(slice[0])
fmt.Println(len(slice))
fmt.Println(cap(slice)) // adalah capacity slice
sliceBaru2 := append(slice, "yazid") // bikin slice baru, dg nambah 1 slice terakhir(slice asli tambah 1)
sliceBaru2 = append(slice, "toha") // saat nambah 1, tp cap slice sudah penuh
// maka array akan di buatkan ulang dan tidak lagi bergantung ke array lama
sliceBaru := make([]string, 2, 5) // bikin tanpa array(di buatkan array di backgrn)
sliceBaru[0] = "anto"
sliceBaru[1] = "joko"
// tidak bisa diisi melebihi 2 cap 2 di gunakan untuk append
// make() slice ini yang sering di gunakan dan aman terhadap prilaku capacity
// ======================================== ARRAY vs SLICE
names2 := [...]string{"eko", "andi", "iza", "silmi"} beda disini [...]/ukuran
names2 := []string{"eko", "andi", "iza", "silmi"}
// ======================================== MAP
var siswa = map[string]string{
	"nama" : "andi",
	"umur" : "3",
}
siswa["umur"] = "4" //ubah
siswa["alamat"] = "saiti" // tambah
delete(siswa,"nama") // hapus
fmt.Println(siswa)
fmt.Println(siswa["umur"])
var buku = make(map[string]string) // deklarasi
buku["judul"] = "belajar go" // tambah
buku["pengarang"] = "aqil"
buku["coba"] = "ada"
// ======================================== IF 
if true {
	fmt.Println("halo aqil")
	} 
	if false {
		fmt.Println("halo aqil")
		} else if true {
			fmt.Println("halo izza")
			} else {
				fmt.Println("halo silmi")
			}
			if nama := "andi"; nama == "andi" { fmt.Println("halo", nama) } // variabel dalam if
// ======================================== SWITCH
// dasar
switch "aqil" {
case "aqil":
	fmt.Println("halo aqil")
case "iza":
	fmt.Println("halo iza")
	default :
	fmt.Println("halo silmi")
}
// case truly
switch pj := 10; pj < 12 {
case true:
	fmt.Println("ini benar pengganti if else")
case false:
	fmt.Println("ini salah pengganti if else")
}
// tanpa kondisi/kondisi langsung di case
var pj = 13
switch {
case pj < 10:
	fmt.Println("angka dasar")
case pj > 15:
	fmt.Println("angka lebih")
	default :
	fmt.Println("angka larangan")
}
// ======================================== FOR LOOP
for i:=0; i<10; i++ { fmt.Println("ini ke",i) }
// for range untuk semua data collection: map, array, slice
namaNama :=[]string{"aqil","iza","silmi"}
for i, nama:= range namaNama {
	fmt.Println("index", i, "=", nama)
}
// break untuk memutus looping
for i:=0;i<10;i++ {
	if i == 5 {break}
	fmt.Println("perulangan ke",i)
}
// continue untuk skip index
for i:=0;i<10;i++ {
	if i%2 == 0 {continue}
	fmt.Println("perulangan ke",i)
}
// ======================================== FUNCTION
// panggilnya dalam main
func halo(){
	fmt.Println("halo aqil")
}
halo()
// parameter
func halo(nama string, alamat string){
	fmt.Println("halo", nama, "alamat nya", alamat)
}
halo("aqil","saiti")
// return
func halo(nama string)string{
	return "halo " + nama
}
fmt.Println(halo("aqil"))
// multiple return
func siswa()(string, string){
	return "aqil","izza" 
}
siswa1, siswa2 := siswa()
fmt.Println(siswa1, siswa2)

// abaikan return, karena var di golang wajib di pakai.
// maka saat tidak di pakai abaikan dg _
func siswa()(string,string){
	return "aqil","izza" 
}
siswa1, _ := siswa()
fmt.Println(siswa1)
// variabel return langsung di value nya
func siswa()(siswa1, siswa2 string){
	siswa1 = "aqil"
	siswa2 = "iza"
	return siswa1, siswa2 
}
orang1, orang2 := siswa() 
fmt.Println(orang1, orang2)
// variadic function (slice argument)
func jumlahkan(angka ...int)int{
	total := 0
	for _, nomor := range angka { total += nomor }
	return total
}
hasil := jumlahkan(1, 2,3,4)
fmt.Println(hasil)
// slice parameter
func jumlahkan(angka ...int)int{
	total := 0
	for _, nomor := range angka { total += nomor }
	return total
}
sliceAngka := []int{10,10,10,10}
hasil := jumlahkan(sliceAngka...)
fmt.Println(hasil)
// Function Value (termasuk type data bisa masuk dalam var dan di panggil)
func halo(nama string)string{
	return "halo " + nama
}
hasil := halo
fmt.Println(hasil("aqil"))
// fungtion as parameter /parameter fungsi lain dengan fungsi jg
func salam(nama string, filter func(string) string){
	fmt.Println("halo", filter(nama))
}
func filter(nama string) string {
	if nama == "anjing" {
		return "xxxx"
		} else { return nama }
	}
	filterkata := filter
	salam("anjing", filterkata)
// Type declaration / persingkat parameter function dengan type
	// type saring func(string)string  
	// func salam(nama string, filter saring){}
// Anonimous Function
func daftar(nama string, blacklist Blacklist){
	if blacklist(nama){
		fmt.Println("anda di blokir", nama)
	} else { 
		fmt.Println("Selamat datang", nama) 
	}
}
func main() {
	blacklist := func (nama string)bool{ return nama == "anjing" }
	daftar("eko", blacklist) // atau
	daftar("anjing", func(nama string)bool{ return nama == "anjing"} )
}
// loop vs recursive
func factorialloop(nilai int) int {
	result := 1
	for i := nilai; i>0; i-- {
		result *= i
	}
	return result
}
fmt.Println(factorialloop(4))
// ---
func factorialRecursive(nilai int) int {
	if nilai == 1 { return 1 
		} else { return nilai * factorialRecursive(nilai -1)}
}
fmt.Println(factorialRecursive(4))
// Closure / scoop : hati2 counter akan naik di luar function
func main(){
	counter := 0
	increment := func ()  {
		fmt.Println("Hitung naik")
		counter++
	}
	increment()
	increment()
	fmt.Println(counter)
	}
// defer / fungsi untuk tetap di jalankan meski terdapat error
// defer di tulis paling atas meski pun di running paling belakang
func alert(){ fmt.Println("selesai memanggil fungsi...") }
func jalankan(nilai int){
	defer alert()	// di tulis paling pertama meski di eksekusi terakhir
	fmt.Println("aplikasi di jalankan...")
	hasil := 10 / nilai
	fmt.Println("hasil", hasil)
}
jalankan(0) // 10 bagi = error 
// panic
func appSelesai(){ fmt.Println("selesai memanggil fungsi...") }
func jalankanApp(error bool){
	defer appSelesai()
	if error {
		panic("Aplikasi error")
	}
	alert := recover()
	fmt.Println("aplikasi di jalankan...")
}
jalankanApp(false)
// recover
func appSelesai(){ 
	// karena defer di eksekusi terakhir maka 
	// recover nebeng di jalan kan disini
	pesan := recover() 
	if pesan != nil {
		fmt.Println("pesan error : ", pesan)
	}
	fmt.Println("selesai memanggil fungsi...")  // ini pesan untuk dever
}
func jalankanApp(error bool){
	defer appSelesai()
	if error {
		panic("Aplikasi error")
	}
	fmt.Println("aplikasi di jalankan...")
}
jalankanApp(true)
// ======================================== STRUCT
// adalah semacam tabel di mySQL, sedang object nya adalah record nya
type Pelanggan struct {
	nama, alamat string
	umur         int
}
func main() {
	// -- ini objectnya 3 cara
	var silmi = Pelanggan {
		nama : "silmi kaffah",
		alamat : "saiti nuhon",
		umur : 2,
	}
	fmt.Println(silmi)
	// --
	var aqil Pelanggan
		aqil.nama = "zikri aqil"
		aqil.alamat = "saiti"
		aqil.umur = 11
	fmt.Println(aqil)
	// --
	iza := Pelanggan { "iza", "spd hek", 6 }
	fmt.Println(iza)
}
// method
type Pelanggan struct { nama, alamat string;umur int; }
func(pelanggan Pelanggan) halo() {
	fmt.Println("halo nama saya", pelanggan.nama)
}
func main() {
	andi := Pelanggan{nama: "andi"}
	andi.halo()
}
// ======================================== INTERFACE
// 4. ini interface untuk method di luar struct
type HasName interface {
	coba() string
	} 
// 5. ini method di luar struct (sbg endpoint)
func SayHello(hasName HasName){
	fmt.Println("Hello", hasName.coba())
}
// 1. ada struct
type Person struct {
	Name string
}
// 6. punya method sambungan interface /bikin function sama dg contract(4)
// dan isi parameter dng struct
func (person Person) coba() string {
	return person.Name
}
func main() {
	// 2. bikin object struct
	orang := Person{Name:"Eko"}
	// 3. kalau ingin panggil method di luar struct maka:4 (sbg pengguna end point)
	SayHello(orang)
}
/*
intinya kalau kita punya sebuah "struct & method" yang independen
kita bisa mengkorvesi nya layaknya "method-struct" terintegrasi
syaratnya kita bikin "interface" dan "method-struct-contract"
*/
// ======================================== INTERFACE KOSONG
// adalah tipe data berbentuk function yang return nya bebas 
// tidak di tentukan, ini fleksibel mirip dgh function bahasa pemrograman lain
func Ups() interface{} {
	return "halo semua"
	// return 10
	// return true
}
func main(){
	contoh :=  Ups()
	fmt.Println(contoh)
}
// ======================================== NIL
// adalah nilai kosong yang boleh di masukkan ke type data apapun
// namun hanya terbatas bertempat di interface, function, map, slice, pointer dan channel
// adalah data kosong baik int string atau apapun
// data keluaran/return nil hanya berlaku di  
func ContohNil(nama string) map[string]string{
	if nama == "" {
		return nil
		} else {
			return map[string]string{
				"nama": nama,
			}
		}
	}
	func main()  {
		data := ContohNil("")
		if data == nil {
			fmt.Println("Data kosong")
			}else{
				fmt.Println(data)
			}
	}
// ======================================== ERROR INTERFACE
// di dalamnya ada interface ini
type error interface{
	error() string
}
// -- prakteknya
import (
	"errors"
	"fmt"
)
func Pembagian(nilai int, pembagi int) (int, error) {
	if pembagi == 0 {
		return 0, errors.New("pembagian dengan nol")
		}else{
			return nilai / pembagi, nil
		}
	}
	func main() {
		hasil, err := Pembagian(100,0)
		if err == nil {
			fmt.Println("hasil", hasil)
			} else {
				fmt.Println("error", err.Error())
			}
	}
// ======================================== TYPE ASSERTIONS
// adalah konversi tipe data 
// biasanya di gunakan untuk konversi interface{} ke type data tujuan (string int dll)dsb
func Random() interface{} { return "oke" }
func main() {
	result := Random()
	resultString := result.(string)
	fmt.Println(resultString)
	// pastikan return dan konversi sama jika tidak maka terjadi panic
	resultInt := result.(int) // panic
	fmt.Println(resultInt)
	// cara aman operasikan type assertions
	func random() interface{}{
		// di interface ini silahkan ganti type data returnya (misal true, int, dll)
		return "eko"
	}
	func main(){
		var result interface{} = random()
		switch value := result.(type) {
			case string : 
			fmt.Println(value, "tipe data String")
			case int : 
			fmt.Println(value, "tipe data Integer" )
			default : 
			fmt.Println("type data Unknown")
		}
	}
// ======================================== POINTER
type Alamat struct{
	desa, kec string
}
func main(){
	// struct
	var saiti = Alamat{"saiti", "nuhon"} 
	fmt.Println(saiti, "/struct asli/")
	// copas 
	var spe =  saiti 
	fmt.Println(spe, "/spe copas saiti/") 
	spe.desa = "spe"
	fmt.Println(spe, "/spe diganti/") 
	fmt.Println(saiti, "/saiti tetap/") 
	// pointer&
	var bella = &saiti 
	var petak = &saiti 
	bella.desa = "bella"
	fmt.Println(saiti, "/record pointer saiti ini ikut ganti dari bella/") 
	fmt.Println(petak, "/pointer& petak ini ikut ganti dari bella/") 
	fmt.Println(bella, "/pointer& bella di ganti/")
	// pointer* variabel\
	// bikin record baru ke struct(Alamat) ini jadi baru 
	// dan poiter yang di atas jadi batal 
	petak = &Alamat{desa:"pongian"} 
	fmt.Println(saiti, "/saat kita reff ke record1/")
	fmt.Println(petak, "/petak reff pointer saiti g ngaruh/")
	// petak assign ulang record baru pake bintang(mengubah root poiter dan diri sendiri)
	*petak = Alamat {"lobu","pagimana"} 
	fmt.Println(petak,"/petak(assign new dg data poiter saiti) berubah/")
	fmt.Println(saiti, "/saiti(root) berubah/")
	fmt.Println(bella, "/bella(pointer saiti) berubah/")
	// poiter function

	// poiter struct
	} 
// POINTER singkatnya :
type Siswa struct{nama, alamat, jenis string}
func main(){
	var aqil Siswa = Siswa {"aqil","saiti","pria"}
	// var andi Siswa = aqil
	// var izza Siswa = aqil
	var andi *Siswa = &aqil
	var izza *Siswa = &aqil
	andi.nama = "andi"
	// andi = &Siswa {"andi","bella","pria"} // ini bukan pointer tapi copas (karena assign record baru)
	// *andi = Siswa {"andi","bella","pria"} // semua yang poiter &aqil berubah jadi andi
	// andi.nama = "siva"
	andi = new(Siswa) // ini jadinya bukan pointer lagi alias bikin record baru(secara memori tetap pointer)
	andi.nama = "diki"
	fmt.Println(aqil)
	fmt.Println(andi)
	fmt.Println(izza)
}
// POINTER function
type Negara struct{pulau, negeri string}
func ganti(negara *Negara){ // terima data pointer
	negara.negeri = "indonesia"
}
func main() {
	var indo = Negara{"hokaido", "jepang"}
	ganti(&indo) // kirim data pointer
	fmt.Println(indo)
}
// POINTER methode
type Negara struct{ pulau, negeri string }
func (negara *Negara) ganti() { // bedakan kalau g pake bintang
	negara.negeri = "indonesia"
}
func main() {
	jepang := Negara{"hondo", "jepang"}
	jepang.ganti()
	fmt.Println(jepang.negeri)
}

// TIPS POINTER 
// kalau memungkinkan selalu gunakan pointer untuk menghemat memori

// GOPATH
// adalah dimana aplikasi kita disimpan maka nanti
// package managemen mengarah kan ke sana
// buka start windows -> envi -> new -> nama -> url
	// di linux 
	// code ~/.bashrc // buka di visual studio code / pakai salah satu profil,bashrc,zshrc
	// ketik di file :
	// export GOPATH=*user/aqil/develop/GOLANG/src/belajar // usahakan pakai folder src

// PACKAGE DAN IMPORT
// package = folder -> boleh banyak file di dalamnya
// sekarang pakai modul -> sudah tidak disarankan pakai GOPATH
// dalam folder src -> bikin folder -> bikin file.go -> tulis package 
// -> nama package dan nama folder harus sama, file tidak harus sama
// -> dalam satu package/folder function harus uniq meski beda file dalam folder tsb
// -> beda folder boleh sama 

// ACCESS MODIFIER
// -> cara nulis function pake huruf besar = public, kecil = private


