TYPE SCRIPT
----------------------------------------------------------- 
Pendahuluan
- dibuat oleh mikrosoft
- strongly Type, yaitu menjaga type data saat dev 
- lalu di compile(tsc) jadi javascript saat product 
- tujuan mudah dalam debug dan mudah di baca  
----------------------------------------------------------- 
Konfig dan setup envi
- instalasi
- cammonjs > ES6
- babel jest
- npx tsc
- 

----------------------------------------------------------- 
daftar isinya	
	Variabel
	array
	readonly
	tuple 
	any
	union
	alias
	union for alias
	object type 
	optional properties 
	enum 
	null dan undefined 

----------------------------------------------------------- 
TYPE	
--------------
VARIABEL
	
	const name: string = "aqil";
--------------
ARRAY
	
	const names: string[] = ["eko","kurniawan", "khannedy"];
	const names: number[] = [1,2,3];
	const names: Array<number> = [1,2,3];
--------------
Read Only Array
array yang Value nya tidak dapat diubah
	
	const hobbies: ReadonlyArray<string> = ["Membaca","Menulis"];
--------------
Tuple
array yang Value dan Type nya tidak dapat diubah
	
	const person: readonly [string, string, number] = ["eko", "kurniawan", 30];

--------------
ANY 
seperti tidak ada pengecekan data seperti di javascript

	const person: any = {
		name: "aqil",
		age: 30
	}

--------------
UNION
adalah pilihan type yang di izinkan

	let sample: number | string | boolean = "eko"
	sample = 100;
	sample = true;
	console.log(sample);

tapi harus ada methode penangananya ya hati hati
	function process(value: number | string | boolean ){
		if( typeof value === "string" ){
			return value.toUpperCase();
		}else if( typeof value === "number" ){
			return value + 2;
		}else{
			return !value;
		}
	} 
--------------
ALIAS TYPE

	export type Category = {
		id: string;
		name: string;
	}
	export type Product = {
		id: string;
		name: string;
		price: string;
		category: Category;	
	}

object pada object, (mengandung alias):

	const category: Category = {
		id: "1",
		name: "handphone", 
	};

	const product: Product = {
		id: "1",
		name: "Samsung S20", 
		price: 2000000, 
		category: category, 
	};

	console.log(category);
	console.log(product);

--------------
UNION for ALIAS 

	export type ID = string | number; 	// union
	export type Category = {
		id: ID; 						// pakai union
		name: string;
	} 
	export type Product = {
		id: ID; 						// pakai union
		name: string; 
		price: number
		category: Category; 			// pakai alias lain
	}

--------------
OBJECT TYPE LANGSUNG

	const person: {id: string, name: string} = {
		id: "1",
		name: "Eko",
	}

--------------
OPTONAL PROPERTIES
defaultnya properti tidak boleh kosong(required) namun ingin nya boleh maka pakai atribut "?"

 	export type Category = {
 		id: ID;
 		name: string;
 		description: string;
 	}
  	export type Product = {
 		id: ID;
 		name: string;
 		price: string;
 		category: Category;
 		description?: string; 	} 			// disini boleh diisi atau tidak

	const person: {id: string, name?: string} = { 		// ini juga boleh
		id: "1",
		name: "Eko",
	}
--------------
ENUM
adalah semcam validasi hanya boleh mengisi nilai yang di tentukan saja
di javascript tidak ada tapi nanti akan di kompile ke type yang ada di js sepertti number, string dll

	export enum CustomerType {
		REGULAR;
		GOLD;
		PLATINUM;
	}
	export type Customer = {
		id: number;
		name: string;
		type: CustomerType;
	}
pakai 
	const customer: Customer = {
		id: 1,
		name: string,
		type: CustomerType.GOLD,
	}
console.log(customer);
ini akan di kembalikan dengan number, jika ingin sesuai isinya maka type harus seperti ini:

	export enum CustomerType {
		REGULAR = "Regular",
		GOLD = "Gold",
		PLATINUM = "Platinum"
	}

--------------
NULL dan UNDEFINED
jika ada otional property maka biasanya kan undefined atau null contoh di bawah:


	function sayHello(name?: string){
		if(name){
			console.log(`Halo ${name}`);
		}else{
			console.log("halo");
		}
	}
	sayHello("eko"); 	// hasilnya: "eko"
	const name: string | undefined = undefined;
	sayHello(name); 	// hasilnya: undefined; argument harus ada meskipun berisi undefined
	sayHello(null); 	// kalau misalnya argument null bisa nggak, tidak, kecuali harus ada di optional args
	function sayHello(name?: string | null){}

--------------
INTERFACE
	interface mirip dengan alias tapi lebih mudah dan ada properti tambahan(ini lebih rekomen dibanding alias)

	export interface Seller{
		id: number;
		name: number;
		address?: number;
	}
	-- penggunaan:
	const seller: Seller = {
		id:1,
		name: "Toko Handphone"
	}
	console.log(seller);
	-- properties readonly, 
	export interface Seller{
		id: number;
		name: number;
		address?: number;
		readonly nip: string; 	// dibuat sekali tanpa ada perubahan lagi
		readonly npwp: string;	// sda
	}


--------------
INTERFACE FUNCTION 
hal ini memudahkan saat bikin variabel beisi function

	interface Add {
		(val1: number, val2: number): number
	} 
	-- penggunaan
	const addNumber: Add = (val1: number, val2: number): number => {
		return val1 + val2;
	}

	console.log(addNumber(2,3));

--------------
INDEXABLE INTERFACE 
bisa di gunakan untuk array atau object 

	interface StringArray {
		[index: number] : string
	}
	-- penggunaan
	const names: StringArray = ["eko","kurniawan","khannedy",];
	console.log(names[0]);

	interface StringArray2 {
		[index: string] : string
	}
	-- penggunaan
	const dictionary: StringArray2 = {
		name: "Eko",
		address: "Subang",
	};
	console.log(dictionary["name"]);

--------------
EXTENDING INTERFACE 
interface bisa extend, (melanjutkan) ke interface lain

	export interface Employee{
		id: string;
		name: string;
		division: string;
	}
	-- extend,(melanjutkan)
	export interface Manager extends Employee {
		nik: number
	}
	-- penggunaan
	const employee: Employee ={
		id: "1",
		name: "Eko",
		division: "IT",
	}
	const manager: Manager ={
		id: "2",
		name: "Kurniawan",
		division: "IT",
		nik: 1234,
	}

--------------
FUNCTION IN INTERFACE 
	interface Person {
		name: string;
		sayHello: (name: string): string
	}
	-- penggunaan
	const person: Person = { 					// interface object yang ada function nya
		name: "Eko",
		sayHello: function(name: string): string {
			return `halo ${name} my name is ${this.name}`
		},
	}
	console.log(person.sayHello("eko"));

`--------------
INTERSECTION TYPES
	membuat interface baru dengan menggabungkan 2 inteface yang ada, 
	misalnya interface yang satu dari third party, dan kita tidak bisa melakukan extends

	export interface Name{
		name: string;
	}
	export interface Id{
		id: number;
	}
	-- intersection 
	export type Person = Name & Id 			// pakai keyword "&" 
	-- penggunaan 
	const person: Person = {
		id: 1,
		name: "Eko",
	}
	console.log(person);

--------------
TYPE ASSERTION 
	ada kasus kita tidak tahu type data apa yang di pakai, 
	(biasanya pakai any bikin bingung sih, atau bawaan js tidak ada type nya kan)
	kita bisa konversi dengan keyword "as", 
	ini tidak aman sih silahkan cek ulang, 
	mungkin juga jangan di pakailah

	const person: any = { 	// pakai any aja, tidak pakai alias atau interface
		name: "eko",
		age: 30
	}
	-- assertion 
	const person2: Person = person as Person;		// dari object person di extract menjadi type Person
	console.log(person2);

--------------
FUNCTION 
	tipe data wajib pada argument dan return
	void atau kosong sm sekali, jika tidak ada return
	jika tidak menyebutkan berarti defaultnya "any"

	function name(name: string):string{
		return `halo ${name}`;
	}
	function name(name: string):void{
		console.log `halo ${name}`;
	}

`--------------
FUNCTION PARAMETER 
sama dg javascript function mendukung args, multi args, rest, default value 
tapi di TS semua args wajib diisi kecuali ada optional "?" 
	
	function sayHello(name: string = "Guest"):string {
		return `halo ${name}`;
	}
	function sum(...values: number[]): number {
		let total = 0;
		for(const value of values){
			total += value;
		}
		return total;
	}

--------------
FUNCTION OVERLOADING 
function di javascript boleh memiliki args type apa saja, tapi di ts tidak bisa
tapi jika mau ada trik di bawah ini  menggunakan tehnik overloading 
	function callme(val: number):number;	// bikin function dengan param dan return type number
	function callme(val: string):string;	// buat lagi dg nama sama dg type beda
	function callme(val: any):any { 		// harus ada penanganan dengan funtion ke tiga dg type any
		if(typeof value === "string"){ 		// hasilnya, cek bisa number atau string
			return val;
		}else{
			return val;
		}
	}

--------------
FUNCTION FOR PARAMETER
(atau disebut callback). boleh langsung callback di argument atau bikin interface dulu
tapi di TS kita hasus bangun type nya
	function sayHello(name: string. filter: (name: string): string){
		return `halo ${filter(name)}`;
	}
	-- contoh2
	function toUpper(name: string): string {
		return name.toUpperCase();
	}
	sayHello("eko", toUpper); 				// panggil sayHello dengan callback 
	-- contoh3 args
	sayHello("eko", (name: string): string => name.toUpperCase()); 	// name = Eko di ambil dari args sayHello() kayaknya 
											// panggil sayHello dengan callback langsung dlm args 

--------------
Selebihnya sama dengan javascript 
	- If Statement
	- Ternary Operator
	- Switch Statement
	- For Loop
	- While Loop
	- Do While Loop
	- Break dan Continue
--------------
perbedaanya
	- Semua fitur JavaScript, bisa dilakukan di TypeScript
		Seperti Operator Matematika, Perbandingan, Logika, String Template, 
		Optional Chaining, With Statement, Default Parameter, Function Generator, 
		Getter Setter, Destructuring, Modules, Standard Library dan lain-lain
	- bedanya adalah TypeScript, Strongly Type, 
		kita harus menentukan tipe data dari tiap variabel dan parameter.
		tipe data Any di TypeScript, berarti sama saja dengan JavaScript

----------------------------------------------------------- 
OOP 
	
----------------------------------------------------------- 
GENERIC
	
----------------------------------------------------------- 
VALIDATION
	
----------------------------------------------------------- 
RESTFULL API
	
----------------------------------------------------------- 
END 
