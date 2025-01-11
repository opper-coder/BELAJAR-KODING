/*OOP 
--------------
Class
Constructor
Properties
Method
Getter dan Setter
Inheritance
Interface Inheritance
Super Constructor 
Method Overriding
Super Method
Visibility
Parameter Properties
Operator instanceof
Polymorphism
Type Cast
Abstract Class
Static
Class Relationship
Error Handling
Namespace
----------------------------------------------------------- 
OOP 
- dasarnya orientasi pada : OBJECT dan CLASS
	- OBJECT: wadah data berisi 
		PROPERTY(atau field, attribut) dan 
		METHOD(atau funtion, behavior)
	- CLASS: cetakan(blueprint) untuk object (meliputi prop dan method, beserta kontruktor, Getter setter nya dll) 
- semua object di buat darti class baik manual atau auto 
- getter setter konstructor dll adalah untuk menangani PROP dan METHOD 
- class bisa membuahkan object tanpa batas */

/*----------------------------------------------------------- 
CLASS
sama seperti di JavaScript
keyword class, Object dari Class keyword new
	class Customer{}							// sebaiknya huruf capitalize
	class Order{}
	const customer: Customer = new Customer(); 	// tidak wajib menyebut type di sini, tapi wajib pada Class
	const order = new Order(); 					// Type boleh tidak explisit */

/*----------------------------------------------------------- 
CONSTRUCTOR
adalah function yg berguna untuk getter setter nantinya 
sama dengan function biasa, bedanya: 
	- pakai keyword "constructor", 
	- tanpa return value, 
	- otomatis di jalankan saat object di buat
	- mengharuskan object kirim params, karena ada constaructor 
	 */

	class Customer{
		constructor(){
			console.log("Create new customer");
		}
	}
	new Customer(); 							// saat bikin object new Class, kita invoke itu artinya jalankan constructor nya
/* ----------------------------------------------------------- 
PROPERTIES
Properties atau Fields 
- sama seperti di JavaScript, bedanya:
	- kita perlu mendeklarasikan properties dan tipe data nya dulu,
	- sama di Type atau Interface bisa menerapkan: 
	optional, mandatory(required), readonly, default value (pakai "=") */
	
	class Customer1{ 							// deklarasi prop type dulu (di js langsung constructor aja)
		readonly id: number;					// mandatory dan readonly
		name: string; 							// mandatory
		age?: number; 							// optional
		address: string = "Guest" 				// default value pada props, boleh juga pada constructor args kalau pakai args

		constructor(id: number, name: string){	// karena mandatory maka siapkan args, nanti di invoke
			this.id = id; 						// this untuik akses prop disini
			this.name = name; 
		}
	}

	const customer1 = new Customer1(1, "john"); 	// invoke ke constructor, dg params (mandatory)
	customer1.age = 20; 							// age tidak harus di params, karena tidak mandatory(optional)

	console.log(customer1);  					// run (returnnya object, pakai dot return val)

/* ----------------------------------------------------------- 
METHOD
- di TypeScript kita harus tentukan tipe data parameter dan return value nya 
-- basic:
*/
		class Customer2{ sayHello(){} } 				// bentuk dasar. tanpa keyword function, void jika tidak ada tipe return
		//-- bentuk asli ada dalam method dalam object:
		class Customer3{
			// props declare
			readonly id: number;					// mandatory dan readonly
			name: string; 							// mandatory
			age?: number; 							// optional
			address: string = "Guest" 				// default value pada props, boleh juga pada constructor args kalau pakai args

			constructor(id: number, name: string){	// karena mandatory maka siapkan args, nanti di invoke
				this.id = id; 						// this untuik akses prop disini
				this.name = name; 
			}
			// method: 
			sayHello(name: string): void { console.log(`halo ${name}, namaku ${this.name}`) } 		//comment`
		}
		const customer3 = new Customer3(1, "Eko");	// instance Eko
		customer3.sayHello("Budi"); 					// akses method Eko dg args Budi, result: "halo Budi, namaku Eko" 

/* ----------------------------------------------------------- 
GETTER DAN SETTER
- selama ini ketika ingin mengubah data properties, kita bisa gunakan "=", dan ambil data dg . (titik);
- di TS/JS ada get() dan set(), sebagai properti Class. disana bisa pakai if supaya pengkondisian (untuk validasi)
 */

	class Category {
		_name?: string; 				// properti pakai underscore karena sudah di gantikan dengan get set
		get name(): string { 			// get inilah yang nanti sebenarnya di panggil di luar meskipun tidak pakai invoke
			if(this._name){				// if untuk validasi jika kosong beri tahu "empty"
				return this._name;
			}else{
				return "empty";
			}
		}
		set name(value: string){ 		// pada set juga boleh pakai validasi jika kosong, jangan ubah 
			if(value !== "") {
				this._name = value;
			}
		}
	} 


/* ----------------------------------------------------------- 
INHERITANCE
class juga memiliki pewarisan dengan kata kunci extends
Secara otomatis semua properties dan method yang ada di Parent Class akan diwariskan ke Child Class
Pewarisan di TypeScript sama seperti di JavaScript, hanya bisa memiliki satu Parent Class
Namun satu Parent Class, bisa memiliki banyak sekali Child Class*/

class Employee {
	name: string;
	constructor(name: string){
		this.name = name;
	}
}

class Manager extends Employee {}
class Director extends Employee {}


/* ----------------------------------------------------------- 
INTERFACE IMPLEMENTS
Di Java misalnya, kadang Interface digunakan sebagai kontrak
Di TypeScript juga bisa, yaitu membuat class yang mengikuti kontrak sebuah Interface, caranya keyword implements
bedanya dengan inheritance kita bisa extends/implements ke beberapa interface */

interface HasName{
	name: string;
}

interface CanSayHello{
	sayHello(name: string): void
}

class Person implements HasName, CanSayHello{
	name: string;
	constructor(name: string){
		this.name = name;
	}
	sayHello(name: string):void{
		console.info(`Halo ${name}, namaku ${this.name}`);
	}

}  

/* ----------------------------------------------------------- 
SUPER CONSTRUCTOR
Pada kasus pewarisan antar class, kadang di Child Class kita ingin membuat Constructor juga, 
baik itu sama seperti di Parent Child, ataupun berbeda
Pada kasus kita membuat Constructor di Child Class, 
maka secara otomatis kita harus memanggil Constructor di Parent Class
Hal ini sebenarnya sama seperti di JavaScript
Kita bisa menggunakan kata kunci super untuk memanggil Constructor di Parent Class */

class Person2{                                      // 1. class parent
    name: string;
    constructor(name: string){                      // 3. ada constructor di parent
        this.name= name;
    }
}

class Employee2 extends Person2{                    // 2. class extends
    departement: string;
    constructor(name: string, departement: string){ // 4. kita bikin constructor jg di child
        super(name);                                // 5. harus pakai super() untuk call parent constuctor 
        this.departement = departement;
    }
}

const employee2 = new Employee2("eko", "Tech");
console.log(employee2.name);
console.log(employee2.departement);

/* ----------------------------------------------------------- 
METHOD OVERRIDING
Saat kita punya Child Class, kita bisa mendeklarasikan ulang Method yang terdapat di Parent Class
Jika semua deklarasi Method sama, maka itu adalah Method Overriding
Pada kasus tertentu, kadang kita sering melakukan hal ini 
istilahnya kita ingin mengubah method warisan parent di child 
*/

class Employee3 {                       // 1. parent
    name: string;
    constructor(name: string){
        this.name = name;
    }
    sayHello(name: string): void{       // 3. ada method
        console.log(`Halo ${name}, namaku ${this.name}`)
    }
}

class Manager3 extends Employee3{        // 2. extends
    sayHello(name: string): void{        // 4. deklarasi ulang (override) dan ubah
        console.log(`Hello ${name}, my name is ${this.name}, Iam is your manager`)
    }
}

const employee3 = new Employee3("Eko"); // 5. return method parents
const manager3 = new Manager3("Budy");  // 6. return method child (di overide semacam replace lah)
console.log(employee3);
console.log(Manager3);
/* ----------------------------------------------------------- 
SUPER METHOD
Sama seperti Constructor, saat kita membuat Method Overriding, 
kita masih bisa memanggil Method yang sama yang terdapat di Parent Class, defaultnya kan yg override 
dengan menggunakan kata kunci super

sama dengan cth di atas hanya kita ubah di bagian overriding nya
*/

class Employee4 {                       
    name: string;
    constructor(name: string){
        this.name = name;
    }
    sayHello(name: string): void{       
        console.log(`Halo ${name}, namaku ${this.name}`)
    }
}
class manager4 extends Employee4{        
    sayHello(name: string): void{       
        super.sayHello(name);           // sda beda dikit di super dan tambahan di bawah
        console.log(`And Iam is your manager`);
    }
}

/* ----------------------------------------------------------- 
VISIBILITY
Di JavaScript dan TypeScript, secara default visibility public pada properties dan method, 
Di JavaScript, private menggunakan prefix #, di TS ada 3 keyword:
	- public: Bisa diakses dimanapun, secara default meski tidak menyebutkan visibility pun
	- private: Hanya bisa diakses oleh class nya sendiri
	- protected: Mirip private, tapi bisa juga diakses oleh class turunannya */

class Counter{
    private counter: number = 0;    // bisa di property
    public increment(): void {      // juga di method
        this.counter++;
    } 
    public getCounter(): number {
        return this.counter;
    }
}

const counter = new Counter();
counter.increment(); 
counter.increment(); 
counter.increment(); 
console.log(counter.getCounter()); // yang private tidak dapat di akses

// contoh protected
class Counter2 {
    protected counter: number = 0;   // 1. ganti protected
    public increment(): void {      
        this.counter++;
    } 
    public getCounter(): number {
        return this.counter;
    }
}

class DoubleCounter extends Counter2 {
    public increment(): void {
        this.counter += 2;          // 2. agar bisa di akses class turunan nya
    }
}

const counter2 = new Counter2();
counter2.increment(); 
counter2.increment(); 
counter2.increment(); 
console.log(counter2.getCounter()); // yang private tidak dapat di akses

/* ----------------------------------------------------------- 
PARAMETER PROPERTIES
Kadang, seringnya kita selalu membuat parameter di Constructor yang hanya digunakan sebagai nilai untuk properties
Pada kasus seperti ini, kita bisa menggunakan Parameter Properties, yang secara otomatis parameter di Constructor akan dijadikan sebagai Properties di Class nya
Untuk membuat Parameter Properties, kita bisa langsung menambahkan visibility pada parameter di Constructor */

class Person3 {
    public name: string;                // 1. sebelumnya bikin property dulu lalu di set di constructor
    constructor(name: string){
        this.name = name;
    }
}

class Person4 {
    constructor(public name: string){}  // 2. dengan menulis public di args constructor otomatis sudah jadi properties
}
const person4 = new Person4("Eko");
console.log(person4);

/* ----------------------------------------------------------- 
OPERATOR INSTANCEOF
Kadang ada kasus kita ingin mengecek apakah sebuah object merupakan instance dari class tertentu atau bukan
Kita tidak bisa menggunakan operator typeof, karena object dari class, jika kita gunakan operator typeof, hasilnya adalah “object”
Operator instanceof akan menghasilkan boolean, true jika benar object tersebut adalah instance object nya, atau false jika bukan */

class Employee5{}                           // 1. class
class Manager2{}

const budi = new Employee5;                 // 2. instance
const eko = new Manager2;

console.log(typeof budi);                   // 3. hasilnya object itu tidak kita kehendaki
console.log(typeof eko);

console.log(budi instanceof Employee5)      // 4. hasilnya harus bool, typeof tidak bisa cek object melainkan pakai instaceof
console.log(eko instanceof Manager2)

/* ----------------------------------------------------------- 
POLYMORPHISM
Polymorphism berasal dari bahasa Yunani yang berarti banyak bentuk.
Dalam OOP, Polymorphism adalah kemampuan sebuah object berubah bentuk menjadi bentuk lain
Polymorphism erat hubungannya dengan Inheritance (walaupun berubah bentuk tapi sesuai dengan keturunanya)
Jadi hanya berubah menjadi child1, child2, grandchild. tidak bisa berubah scr mandiri
*/

class Employee6 {                                   // 1. parent
    constructor(public name: string){}
}
class Manager4 extends Employee6 {}                 // 2. child
class VicePresident extends Manager4 {}             // 3. grandchild

let employee: Employee6 = new Employee6('Budi');    // 4. instance dengan type data parent
employee = new Manager('Budi');                     // 5. instance di ubah ke cucu (bisa)
employee = new VicePresident('Budi');               // 6. instance di ubah ke cicit (bisa)
employee = "eko";                                   // 7. instance di ubah jadi string (tidak bisa) 

/*Saat kita membuat function method dengan parameter, kita juga bisa mengirim data polymorphism pada parameter tersebut
Misal kita membuat sebuah function dengan parameter class Employee, kita bisa mengirim object dalam bentuk Employee, Manager ataupun VicePresident
Hal ini karena Manager dan VicePresident merupakan turunan dari Employee, sehingga kita bisa mengirim data seluruh turunan dari Employee */


/* ----------------------------------------------------------- 
TYPE CAST
Di TypeScript dasar, kita pernah belajar tentang type assertions, dimana kita bisa mengubah tipe data dari satu tipe data ke tipe data lainnya yang lebih specific atau detail
Ini juga bisa kita lakukan pada kasus Method Polymorphism
Kita bisa kombinasikan operator instanceof dan type assertions */

/* Saat melakukan Type Cast, pastikan posisi Child paling bawah dilakukan pengecekan di awal
Hal ini agar tidak terjadi kesalahan konversi
Contoh, jika kita ubah posisi pengecekan instanceof Manager dan VicePresident, maka ketika kita mengirim VicePresident, dia akan berhenti di Manager, hal ini karena hasil instanceof bernilai true, karena VicePresident adalah turunan dari Manager

/* ----------------------------------------------------------- 
ABSTRACT CLASS
Abstract Class merupakan deklarasi Class yang belum selesai
Abstract Class membolehkan memiliki properties atau method yang abstract atau belum di buat implementasinya
Abstract Class juga tidak bisa dibuat menjadi object menggunakan kata kunci new
Kegunaan Abstract Class hanya digunakan sebagai Parent Class yang nanti diturunkan ke Child Class nya */

/* ----------------------------------------------------------- 
STATIC
Static merupakan kata kunci yang bisa digunakan pada properties atau method di class, yang menyebabkan properties atau method tersebut bukan lagi sebagai bagian dari object yang dibuat dari class
Static properties atau method, bisa menyebabkan seakan-akan kita membuat global variable atau function, yang bisa diakses secara langsung, tanpa membuat object dari class nya
Kita juga bisa menambah visibility pada static properties atau method
Biasanya static ini sering digunakan pada jenis class utility / helper /

Static member hanya bisa mengakses static member lainnya, tidak bisa mengakses non static member, kecuali dari object
Sedangkan untuk non static member, bisa mengakses static member secara langsung */

/* ----------------------------------------------------------- 
CLASS RELATIONSHIP
Karena implementasi dari object di TypeScript adalah JavaScript object
Jadi sebenarnya jika terdapat dua object walaupun berbeda class, tetapi secara properties dan function sama, masa bisa dianggap secara struktur JavaScript object adalah sama
Pada kasus seperti itu, kita bisa membuat object untuk tipe data A, dengan membuat object dari tipe data B, asal secara properties dan method sama */

/* ----------------------------------------------------------- 
ERROR HANDLING
Sama seperti di JavaScript, di TypeScript pun mendukung error handling menggunakan try catch
Cara penggunaan error handling di TypeScript sama saja seperti di JavaScript
Termasuk jika ingin membuat class Error secara manual, itu juga bisa kita lakukan dengan membuat class turunan dari Error, sama seperti di JavaScript */





/* ----------------------------------------------------------- 
NAMESPACE
Selain menggunakan JavaScript Modules, di TypeScript ada cara lain untuk mengorganisir kode program kita, yaitu menggunakan Namespace
Namespace biasanya digunakan untuk mengorganisir kode ketika dalam satu module terdapat banyak sekali kode, sehingga bisa kita kelola dalam Namespace
Jika Module kita anggap sebuah folder, maka Namespace adalah sub folder di dalam Module
Untuk membuat Namespace, kita bisa gunakan kata kunci namespace, dan kita bisa tambahkan class, function, dan lain-lain di dalam Namespace tersebut */

/* ----------------------------------------------------------- */
