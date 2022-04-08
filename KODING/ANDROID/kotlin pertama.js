pelajaran pertama

==================================
RINGKASAN

	OPERATOR
		+ - *  % /      // operator ada modulus %
		+				// concate juga pakai + bukan titik
	PERBANDINGAN
		- == < > <= >= !=  ||  && 

	BOOLEAN 
		true false null 0 dsb

- variabel
	- val coba 	= 10								// tak bisa di replace
	- var ada 	= "aqil"	  						// bisa di replace
	- val coba 	: Int 	= 10
	- var ada 	: String= "aqil"

- arrayku
	- var arrayku = arrayku<int>(size: 3){0}		//  aturan dasar array kosong harus ada size nya
	- var arrayku = arrayOf("aqil","andi","izza")	//  buat
	- arrayku[1]									//  panggil
	- arrayku.get(1)								//  atau
	- arrayku.toList()								// 	var_dump/cetak semua		
	- arrayku[1] = "liva"							//  isi / replace
	- arrayku set(1, "liva") 						//  cara lain isi / replace
	- collections
		list immutable/readonly
		- var member = listOf("aqil", "iza", "andy")// bisa di panggil dan assign get dan set layaknya array
		- var member = listOf<String>("aqil", "iza", "andy")	
		- var member : list<String> = listOf("aqil", "iza", "andy")
		list mutable
		- var member = mutableListOf() 				//  ganti keyword
		- arrayListOf() 							//  ada keyword lain yang sama dengan mutableListOf
		Set 
		- var namapemain = setOf<string>("dybala","gundogan","hilman") 
		mutableSet
		- var namapemain = mutableSetOf<string>("dybala","gundogan","hilman")
		Map
		- var namapemain = mapOf<int, string>( 27 to "hilman", 19 to "robert", 8 to "andy" )
		mutableMap
		- var namapemain = mutableMapOf<int, string>( 27 to "hilman", 19 to "robert", 8 to "andy" )

- pengkondisian 
	- == < > <= >= !=  ||  && 

	- if(){}else{}
	- if(){}elseif(){}else{}
	- if()else() 									// tanpa kurawal jika {} nya cuma 1 baris
	-----
	var operator = readLine()
	var hasil = when(operator){
						 "+" -> a + b 
						 "-" -> a - b 
						 "/" -> a / b 
						else -> a * b 
					}
	- printLn( "$hasil" )							// jika di panggil dalam string pake "$"
	-----							

- PERULANGAN
	- while(){}
	- do While(){}
	- for(){} -> for(i in coolection){}
	- for(i in 1..5 ){ printLn("baris ke $i") }
	-----
	Var tambang = arrayOf("emas0", "silver", "zonk", "ruby")
	for( item in tambang ){ print(item) }
	-----

- fungsi
	- fun namaxx (){ return }						// bisa
	- fun namaxx (args:int): int{ return }			// ada type data pada args dan return
	- namaxx()


==================================
kotlin
-> adalah bahasa pemrograman native 
-> leboh hemat kode 40% 
-> fungsioanal dan OOP proramming
-> evernote, pinteres, dan basecamp

MULAI KOTLIN
- instal JDK dari oracle -> adalah APACHE nya java/kotlin -> 179 MB -> instal -> next2  
- cara install versi windows ada di sekilahcoding.com
- aplikasi IDE -> intelij IDEA pili8h yang gratis
- buka IDE -> tools -> kotlin -> kotlin REPL (adalah konsolnya)
	- tulis awal

		- fun testing(){ println("hello world")}
		- testing()

	- tanpa titik koma -> sebgai gantinya saat entter harus dimbah dg ctrl

VARIABEL 
	- val isinya tak bisa di timpa. hanya untuk bikin baru
	- var bisa untuk replace isinya 

		- val coba 	= 10
		- var ada 	= "aqil"

	pake type data juga boleh jika diperlukan (di OOP biasanya);
	  	
	  	- val coba 	: Int 	= 10
		- var ada 	: String= "aqil"

TYPE DATA
	- ANGKA = Int, long, short, byte, double, float -> terkait dg range yang mampu di cover 
	- default = Int, double
	- bekerja :
		- Int + double = double
		- String + Int = String
		- Int + String = error
		- convrt string = toInt()
		- convert Int 	= toString()
	- TEXT = Char dan String dan cari lagi yang lainya
		- char adalah hurup 1 karakter -> var ada = "aqil" print aqil[1]
		- char + string = string
		- string + char = string
	- ARRAY 
		- array bertugas untuk menyetor deretan data sekaligus
		- banyak jenis aray 1d 2d 3d dst ada collection 
		- array dan saudaranya dibedakan dengan mutable dan immutable/ mtase/ berubah isinya atau read only
		- array ketentuanya = fixed size, mutable 
		- di collection dibedakan list, map, set

		DEKLASRASI
			// array standard
				var arrayku = arrayOf<String>("aqil","andi","izza")			// cara yang valid ada type data
				var arrayku : array<String> = arrayOf("aqil","andi","izza") // atau
				
				var arrayku : array<String> 								// atau deklarasi dulu
				arrayku = arrayOf("aqil","andi","izza")						// lalu isi kan di tempat lain

				var arrayku = arrayOf<any>("aqil","andi","izza")			// type data apa saja typedata diisi campur dan bebas aja
				var arrayku = arrayOf("aqil","andi","izza")					// atau <any> boleh disingkat (tidak ditulis)
				var angka = Int arrayOf() 									// ini bisa nerima min, max, selain count, first, last sperti yang lain (cari dokumentasi)
			// array kosong : aturan array adalah harus ada sizenya
				var arrayku = arrayku<int>									// tidak boleh gini aja
				var arrayku = arrayku<int>(size: 3){0}						// harus tentukan jumlah index, dan pengisian tidak boleh lebih dari isi (3)
			// array 2d
				0 0 0
				0 0 0
				0 0 0

				var seats = arrayOf(
						intArray( 0, 0, 0 ),
						intArray( 0, 0, 0 ),
						intArray( 0, 0, 0 )
					)
			// collections
				// ada list, set, map
					
					// list immutable 
						// ketentuanya: tidak bisa dimutasi/diubah, nama boleh kembar, diurutkan sesuai index (array numerik readonly), 

							var member = listOf<String>("aqil", "iza", "andy")	// bisa di panggil dan assign get dan set layaknya array
							var member : list<String> = listOf("aqil", "iza", "andy")
							var member = listOf("aqil", "iza", "andy")

					// list mutable 
						// ketentuanya: bisa dimutasi/diubah, nama boleh kembar, diurutkan sesuai index (array numerik readonly),
						// contoh saat kita tulis nama var nya maka ada fmethod add() ARTINYA BISA DI TAMBAH ELEMEN AKHIR NYA 
							
							var member = mutableListOf<String>("aqil", "iza", "andy")	// bisa di panggil dan assign get dan set layaknya array
							var member : List<String> = mutablelistOf("aqil", "iza", "andy")
							var member = mutableListOf("aqil", "iza", "andy")

						// arrayListOf == mutableListOf
							// ketentuanya: sama dg list mutable (bukan immutable ya)
							// ada sedikit perbedaan (belum dijelaskan)

								var member = arrayListOf<String>("aqil", "iza", "andy")

					// Set == listOf ==/ mirip distinc dalam mySQL
						// isi uniq tidak duplikate 
						// saat ada duplikate maka saat di panggil dia di tampilkan hanya satu
						// mirip distinc dalam mySQL
						// ketentuanya: tidak bisa dimutasi/diubah, nama tidak boleh kembar, diurutkan sesuai index (array numerik readonly), 
						// bedanya set dg list adalah namanya tidak boleh kembar (duplikate)

							var namapemain = setOf<string>("dybala","gundogan","hilman") 				// yang begini saat di print bisa tampil semua
							var namapemain = setOf<string>("hilman","dybala","gundogan","hilman")		// ada nama kembar akan di cetak hanya satu

					// mutableSet
							var namapemain = mutableSetOf<string>("dybala","gundogan","hilman")			// bisa dipanggil namapemain.add() (tambah elemen)

					// map ==/ mirip array assoc bedanya tidak boleh di ubah isinya
						// var namapemain = mapOf<int, string>(key to value, key to value)
						// namapemain[7] // cara panggil

							var namapemain = mapOf<int, string>( 27 to "hilman", 19 to "robert", 8 to "andy" )
						
					// mutableMap == ini yang sering di gunakan sebaggai assoc 
						// saat kita  panggil varnya langsung banyak methode yang bisa di jalankan misalkan tambah ubah cari dll

							var namapemain = mutableMapOf<int, string>( 27 to "hilman", 19 to "robert", 8 to "andy" )
							namapemain.put( 10, "ricky" )					// contoh method tambah elemen . banyak method yang bisa di coba 
							namapemain.replace( 19, "ricko" )				// misalnya

				// Method pada collection
					// filter{} == untuk filter array :
					
						var nomor = listOf( 1, 10, 100, 1000 )
						var hasil = nomor.filter{ v < 50 }			// filter array kurang dari 50. v adalah variabel yang kita bikin 
																	// untuk wadah elemen yang di loop nantinya
						println(nomor.toList())						// sebelum filter
						println(hasil.toList())						// filter /dia akan menampilkan yang true saja/

					// map{} == 

						var dobel = nomor.map{ x * 2 // atau x = x * 2 }
						println(dobel.toList())						// hasilnya modifikasi array dengan kali (boleh operasi yang lain)
					
					// any{} // hanya menghasil kan true false
						// apakah "sebagian" ada kata dalam "any" contains /main kan kata man, par, hiol dan vis/
						var tulisan = listOf("Hilman", "Parman", "Sudirman")
						var hasil2 = tulisan.any { y.contains("man") }
						if(hasil2) println("benar")
							else println("salah")

					// all{} // hanya menghasil kan true false
						// apakah "semua" ada kata dalam "all" contains
						var tulisan = listOf("Hilman", "Parman", "Sudirman")
						var hasil2 = tulisan.all { y.contains("man") }
						if(hasil2) println("benar")
							else println("salah")

					// none{} // hanya menghasil kan true false
						// apakah "tidak" ada kata dalam "none" contains
						var tulisan = listOf("Hilman", "Parman", "Sudirman")
						var hasil2 = tulisan.none { y.contains("man") }
						if(hasil2) println("benar")
							else println("salah")

					// find{} cari satu elemen pertama ditemukan yang mengandung kata "yg di cari"
						var text = listOf("hanya", "mengapa", "ketika", "harus", "bagaimana")
						var hasil3 = text.find{
							z.startWith("ha")
						}
						var hasil4 = text.findLast{
							x.startWith("ha")
						}

							println("hasil3")			// hasil nya "hanya" tampilkan yang pertama ketemu
							println("hasil4")			// hasil nya "harus" tampilkan yang terakhir ketemu

					// yang lain first() last() count() sorted() min() max()
						text.first() 					// caranya tinggal var + method gitu aja kurung biari kosong

		ASSIGN / SET / replace / set
			// array kosong / 1d : assign atau isi array
				array[1] = 123											// set
				arrayku[1] = "liva"										// atau				 
				arrayku set(1, "liva") 									// atau
			// array 2d	
				seats[1][3] = 1000

		GET / panggil  var_dump, echo
			// array 1d				 
				arrayku[1]												//	panggil / get									 
				arrayku.get(1)											//	atau
				arrayku.toList()										//	atau tampilkan semua / looping	/ var-dump	
			// array 2d
				seats[1][3]												// beda di index bisa bervariasi spt dia atas					 
			// get array assoc / map
				printLn("daftar nama :" + namapemain[19])
						
		LOOPING ARRAY
			//loop array 1d 
				---
				for( nama in arrayku ){	println(nama) }						// ->[1][2][3] looping standart
				---
				for( i in 0..arrayku.size -1 ){	println(nama[i]) }			// ->[1][2][3] looping standart
				---
			//loop array 2d
				for( row in seats ){
					for( coloumn in row ){
					println("$coloumn") 
					}
				}
			//loop array assoc atau map
				for( key to namapemain.keys){
					println(namapemain[key])
				}

				namapemain.forEach{
					key, value -> println("nomor punggung: $key", "nama: $value" )
				}


PRAKTEK DI FILE BUKAN DI KONSOL
		- Bikin 1 file cari nama project dan cari folder SRC -> klik kanan -> newfile -> berinama -> save -> nama.kt ->
		- bikin function utama sebagai body utama dalama kotlin standard kode seperti html standard

			func main( args: array<String> ){ 
				//disini semua ditulis 
				println("coba hello world")

			}

		- klik kanan jalankan kt

	- KOMENTAR pake // atau /* ...  */ atau /** ... */ 
	- PENGKONDISIAN

			- if(){}else{}
			- if(){}elseif(){}else{}
			- if()else() 				// tanpa kurawal jika {} nya cuma 1 baris

		- yang menarik di kotlin if else bisa di bungkus dalam variabel dan dapat di panggil layaknya function
		- when mungkin sama dengan switch 

			- when(){}

			var a = 20
			var b = 30

			printLn("silahkan masukan operasi:")
			val operasi = readLine()				// input REPL
			var hasil = when(operasi){
						 "+" -> a + b 
						 "-" -> a - b 
						 "/" -> a / b 
						else -> a * b 
					}
			printLn(
				"Operasi yang di masukan adalah : $a + $operasi + $b , dan hasilnya =  + $hasil"	)


	- PERULANGAN
		while(){}
		do While(){}
		for(){} -> for(i in coolection){}
		for(i in 1..5 ){ printLn("baris ke $i") }

		Var tambang = arrayOf("emas0", "silver", "zonk", "ruby")
		for( item in tambang ){ print(item) }

	- FUNGSI / FUNCTION 
		bedanya dengan javascript adalah di "argumen" dan "return" nya di sertai type data

			fun coba( args: Int ){}											// func dasar
			fun coba( angka: Int ){ println( angka ) }						// contoh atas 
			fun coba( angka: Int ): String{ return "halo $angka" }			// jika memiliki return, "type data return" harus di tuliskan
			fun coba( angka1: Int, angka2: Int ): Int { 					// bisa nerima 2 argument
				return angka1 + angka2
			}
			fun coba( kata1: String, angka2: Int ): Int { 					// bisa nerima 2 argument beda type data
				return "$kata1, $angka2"
			}
			coba( "nilainya adalah", 100 )									// saat di panggil argumen dikirim dan di tangkap sesuai urutanya
			coba( "nilainya adalah")										// panggil harus isi semua parameter nya/kosong salah satuya begini error
			fun coba( kata1: string, angka2: Int = 100 ){}					// tapi jika tetep harus kirim salah satunya maka buat nilai default bagi yang tak oper
			fun coba( kata1: string, angka2: Int = 100 ){}					// namun bentuk ini tak bisa di panggil begini / coba( 100 ) / sebab $kata1 bernilai string tak punya nilai default
			fun coba( kata1: string = "halloo" , angka2: Int = 100 ){}		// harusnya keduanya ada nilai default
		keterangan
			function yang tidak punya return ( kembalikan nilai )(misalnya langsung println) di sebut void
			pada void type data sebenarnnya ada namanya unit tapi tak di tulis sebab bikin apa di tulis

			fun coba(): unit{}
		tips
			- saat kita panggil function yang belum kita bikin maka ada error (tanda lampu)
			-> klik tanda lampu atau alt + enter maka otomatis kita dibuatkan di intelij
			- saat error coba trik ini tanda dua seru= pada variabel  di dlm/luar function (){ var ada = asa["2"]!! }
			-> yang maksudnya kurang lebih "none null available" /saya kurang mengerti maksudnya/
			- Oya ini PENTING function ada argument nya bisa di kirim dalam bentuk array assoc atau mutableMapOf

				var arrayku = arrayOf("aqil", "iza", "silmi");	// bikin array
				fun tambahkan(arrayku){}						// bikin function yang argumenya array
				---
				arrayku.put("andi")								// array bisa di tambahin elemen
				tambahkan()										// jalankan function

