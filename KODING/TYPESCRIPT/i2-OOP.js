OOP 
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
- class bisa membuahkan object tanpa batas

----------------------------------------------------------- 
CLASS
sama seperti di JavaScript
keyword class, Object dari Class keyword new

----------------------------------------------------------- 
CONSTRUCTOR
adalah function yg berguna untuk getter setter nantinya
sama dengan function biasa, bedanya: 
	- pakai keyword constructor, 
	- tanpa return value, 
	- otomatis di jalankan saat object di buat


----------------------------------------------------------- 
PROPERTIES
Properties atau Fields 
- sama seperti di JavaScript, bedanya:
	- kita perlu mendeklarasikan properties dan tipe data nya dulu,
	- sama di Type atau Interface bisa menerapkan: optional, mandatory, readonly, default value (pakai "=")

----------------------------------------------------------- 
METHOD
- di TypeScript kita harus tentukan tipe data parameter dan return value nya

----------------------------------------------------------- 
GETTER DAN SETTER
- selama ini ketika ingin mengubah data properties, kita bisa gunakan "=", dan ambil data dg . (titik)
- penggantinya ada fitur Getter dan Setter, yaitu method utk ubah dan ambil properties (sama dg di JS)
- tapi Karena bentuknya adalah method, maka kita bisa menambahkan validasi apapun pada method tersebut sebelum properties aslinya diubah

----------------------------------------------------------- 
INHERITANCE
class juga memiliki pewarisan dengan kata kunci extends
Secara otomatis semua properties dan method yang ada di Parent Class akan diwariskan ke Child Class
Pewarisan di TypeScript sama seperti di JavaScript, hanya bisa memiliki satu Parent Class
Namun satu Parent Class, bisa memiliki banyak sekali Child Class

----------------------------------------------------------- 
INTERFACE INHERITANCE
Di bahasa pemrograman seperti Java, kadang Interface digunakan sebagai kontrak
Di TypeScript, hal itu juga bisa dilakukan, kita bisa membuat class yang mengikuti kontrak sebuah Interface, caranya dengan menggunakan kata kunci implements
Karena sebenarnya ini bukanlah pewarisan, oleh karena itu untuk implements, kita bisa melakukan implements ke lebih dari satu Interface, dimana pada extends hal ini tidak bisa dilakukan

----------------------------------------------------------- 
SUPER CONSTRUCTOR
Pada kasus pewarisan antar class, kadang di Child Class kita ingin membuat Constructor juga, baik itu sama seperti di Parent Child, ataupun berbeda
Pada kasus kita membuat Constructor di Child Class, maka secara otomatis kita harus memanggil Constructor di Parent Class
Hal ini sebenarnya sama seperti di JavaScript
Kita bisa menggunakan kata kunci super untuk memanggil Constructor di Parent Class

----------------------------------------------------------- 
METHOD OVERRIDING
Saat kita membuat Child Class, kita bisa mendeklarasikan ulang Method yang terdapat di Parent Class
Jika semua deklarasi Method sama, maka itu adalah Method Overriding
Pada kasus tertentu, kadang kita sering melakukan hal ini

----------------------------------------------------------- 
SUPER METHOD
Sama seperti Constructor, saat kita membuat Method Overriding, kita juga bisa memanggil Method yang sama yang terdapat di Parent Class dengan menggunakan kata kunci super, lalu diikuti dengan Method yang ingin kita panggil

----------------------------------------------------------- 
VISIBILITY
Di JavaScript dan TypeScript, secara default visibility public pada properties dan method, 
Di JavaScript, private menggunakan prefix #, di TS ada 3 keyword:
	- public: Bisa diakses dimanapun, secara default meski tidak menyebutkan visibility pun
	- private: Hanya bisa diakses oleh class nya sendiri
	- protected: Mirip private, tapi bisa juga diakses oleh class turunannya

----------------------------------------------------------- 
PARAMETER PROPERTIES
Kadang, seringnya kita selalu membuat parameter di Constructor yang hanya digunakan sebagai nilai untuk properties
Pada kasus seperti ini, kita bisa menggunakan Parameter Properties, yang secara otomatis parameter di Constructor akan dijadikan sebagai Properties di Class nya
Untuk membuat Parameter Properties, kita bisa langsung menambahkan visibility pada parameter di Constructor

----------------------------------------------------------- 
OPERATOR INSTANCEOF
Kadang ada kasus kita ingin mengecek apakah sebuah object merupakan instance dari class tertentu atau bukan
Kita tidak bisa menggunakan operator typeof, karena object dari class, jika kita gunakan operator typeof, hasilnya adalah “object”
Operator instanceof akan menghasilkan boolean, true jika benar object tersebut adalah instance object nya, atau false jika bukan

----------------------------------------------------------- 
POLYMORPHISM
Polymorphism berasal dari bahasa Yunani yang berarti banyak bentuk.
Dalam OOP, Polymorphism adalah kemampuan sebuah object berubah bentuk menjadi bentuk lain
Polymorphism erat hubungannya dengan Inheritance

Saat kita membuat function // method dengan parameter, kita juga bisa mengirim data polymorphism pada parameter tersebut
Misal kita membuat sebuah function dengan parameter class Employee, kita bisa mengirim object dalam bentuk Employee, Manager ataupun VicePresident
Hal ini karena Manager dan VicePresident merupakan turunan dari Employee, sehingga kita bisa mengirim data seluruh turunan dari Employee

----------------------------------------------------------- 
TYPE CAST
Di TypeScript dasar, kita pernah belajar tentang type assertions, dimana kita bisa mengubah tipe data dari satu tipe data ke tipe data lainnya yang lebih specific atau detail
Ini juga bisa kita lakukan pada kasus Method Polymorphism
Kita bisa kombinasikan operator instanceof dan type assertions

Saat melakukan Type Cast, pastikan posisi Child paling bawah dilakukan pengecekan di awal
Hal ini agar tidak terjadi kesalahan konversi
Contoh, jika kita ubah posisi pengecekan instanceof Manager dan VicePresident, maka ketika kita mengirim VicePresident, dia akan berhenti di Manager, hal ini karena hasil instanceof bernilai true, karena VicePresident adalah turunan dari Manager

----------------------------------------------------------- 
ABSTRACT CLASS
Abstract Class merupakan deklarasi Class yang belum selesai
Abstract Class membolehkan memiliki properties atau method yang abstract atau belum di buat implementasinya
Abstract Class juga tidak bisa dibuat menjadi object menggunakan kata kunci new
Kegunaan Abstract Class hanya digunakan sebagai Parent Class yang nanti diturunkan ke Child Class nya

----------------------------------------------------------- 
STATIC
Static merupakan kata kunci yang bisa digunakan pada properties atau method di class, yang menyebabkan properties atau method tersebut bukan lagi sebagai bagian dari object yang dibuat dari class
Static properties atau method, bisa menyebabkan seakan-akan kita membuat global variable atau function, yang bisa diakses secara langsung, tanpa membuat object dari class nya
Kita juga bisa menambah visibility pada static properties atau method
Biasanya static ini sering digunakan pada jenis class utility / helper /

Static member hanya bisa mengakses static member lainnya, tidak bisa mengakses non static member, kecuali dari object
Sedangkan untuk non static member, bisa mengakses static member secara langsung

----------------------------------------------------------- 
CLASS RELATIONSHIP
Karena implementasi dari object di TypeScript adalah JavaScript object
Jadi sebenarnya jika terdapat dua object walaupun berbeda class, tetapi secara properties dan function sama, masa bisa dianggap secara struktur JavaScript object adalah sama
Pada kasus seperti itu, kita bisa membuat object untuk tipe data A, dengan membuat object dari tipe data B, asal secara properties dan method sama

----------------------------------------------------------- 
ERROR HANDLING
Sama seperti di JavaScript, di TypeScript pun mendukung error handling menggunakan try catch
Cara penggunaan error handling di TypeScript sama saja seperti di JavaScript
Termasuk jika ingin membuat class Error secara manual, itu juga bisa kita lakukan dengan membuat class turunan dari Error, sama seperti di JavaScript

----------------------------------------------------------- 
NAMESPACE
Selain menggunakan JavaScript Modules, di TypeScript ada cara lain untuk mengorganisir kode program kita, yaitu menggunakan Namespace
Namespace biasanya digunakan untuk mengorganisir kode ketika dalam satu module terdapat banyak sekali kode, sehingga bisa kita kelola dalam Namespace
Jika Module kita anggap sebuah folder, maka Namespace adalah sub folder di dalam Module
Untuk membuat Namespace, kita bisa gunakan kata kunci namespace, dan kita bisa tambahkan class, function, dan lain-lain di dalam Namespace tersebut


----------------------------------------------------------- 
