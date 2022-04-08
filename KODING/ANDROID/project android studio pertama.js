
ANDROID STUDIO
- download di = devloper.android.com/studio -> 1 gb
- install = double klik -> next2 
- start up = pilih tab di atas, untuk hp, jam, tv dll -> pilih hp
	- pilih = empty activity
	- beri nama dan next ada package nama dan lokasi di HDD -> biarkan
	- language pilih kotlin
	- minimum API pilih yang populer 4.1 jellybean -> finish
	- bikin nama file kotlin dan layout / biarkan default / MainActifity.kt dan actifity_main.xml
JALANKAN DI EMULATOR
	- setelah pilih empty activity klik run (panah hijau di menu atas) 
	- select hardware -> create new virtual device (download) -> system android virtualnya -> finish -> lumayan lama -> jangan klak klik dulu
JALANKAN DI DEVICE ASLI
	- hp, kabel -> dokumentasi= devloper.android.com/studio/debug/dev-options -> pilih bahasa indo
	- di hp nyalakan developer menu dengan tap 7 kali version build number
	- hp akan tampil di pilihan device -> pilih

OVERVIEW APLIKASI
	- di pojok kiri atas, pilih mode android project (defaultnya project)
	- akan tampak 2 folder utama = app dan gradle tampilnya seperti ini :
	- app 		= adalah folder aplikasinya dikerjakan
	- gradle 	= adalah package kontrol dan setting2 bangun aplikasinya, install package dll
	- sekarang kita utak atik app nya
		- di app ada android manifest, java, generated java, res
		- di app 	= ada android manifest -> AndroidManifest.xml -> disini adalah daftar isi aplikasi dari file lain, kaya file index nya 
		  -> code 	= MainActifity marujuk kepada file MainActifity.kt
		- di java	= ada 3 folder -> fokus ke com/example/hellokoding/MainActifity.kt -> tempat kotlin ditulis (logika disini)
			- di file ini ada function yang menjalankan script tampilan (seperti html css disini) dari folder lain = setContentView( R.layout.actifity_main) 
			  -> merujuk ke file = res/layout/actifity_main.xml (seperti html css disini)
			  	- di actifity_main = saat di buka ada "design" dan "text" mode editor
		- di res	= ada "drawable" tempat gambar dan asset, "value"tempat nilai dari variabel array dll
					= "style"  kaya tempat css

MENAMBAH BUTTON DAN ACTION
	
	- di actifity_main.xml sudah ada TextView kita akan bikin juga Button
		- ketik "bu" -> pilihan autocomplete -> button -> maka di buatkan templat dan parameter dasar
		- width, height = wrap_content
		- untuk menghubungkan denga kotlin beri atribut id -> id = "@+id/tombolPertama"
	- di MainActifity.kt, buat coneksi id -> lalu bungkus dalam variabel dalam override fun(){}
		- var tombol1 = findViewById<typedata>() atau simpel nya findViewById() 
			- var tombol1 = findViewById(R.id.tombolPertama) as Button 		atau
			- var tombol1 : Button = findViewById(R.id.tombolPertama) 		atau
			- tombolPertama = panggil langsung pada "id" tanpa bikin var, namun saat kita enter kita otomatis impor package sintetik(bukan offisial) di atas, atau pakai
			- binding.tombolPertama = methode pemanggilan offisial
		- setelah di panggil menggunakan metode yang dipilih -> terapkan methode listener nya -> terapkan methode aksi nya
		- sebagai catatan saat di panggil nama idnya lalu kita tambah .(dot) maka autocomplete menyajikan method2 silahkan pilih	
			- tombol1.SetOnClickListener{} 
			   	-> pilih auto complete yang ada kurawalnya, urut kedua
			-  dalam kurawal isikan ACTION nya 
			   	-> dalam hal ini kita akan bikin toast -> saat toast di tulis dan dot , otomatis package di import di atas halaman
			   		-  toast.makeText( "tampil dimana", "isi text", "durasi" )
			   				.show()
			   		-  toast.makeText( this -> autocomplete -> isi MainActifity karena kita tampilkan disini, -> "tombol di klik", toast.LENGTH_SHORT)
			   				.show()

LAYOUT  mengenal linear layout 

	-> defaultnya pake "<constrain></constrain>"
	-> ganti dengan "<linear></linear>"
	-> lalu ctrl + enter di attr nya maka muncul atribut wajibnya 
	-> bungkus semua elemen yang ingin di buat linear layout
	-> set width height nya = wrap_content
	-> set <orientation = vertical>
	-> set <padding = 10dp>
	-> lihat hasilnya di "design mode"
	-> coba masukan padding dengan satuan "2dp"

CONTROL VALUE 
	untuk menangani "value/nilai-nilai" yang berbentuk string tidak harus ditulis di MainActifity.kt
	melainkan ada metode prosedural penulisan di tempat lain agar mudah di kontrol
	tempatnya di = res/value/string.xml -> lalu metode koneksi nya dib awah ini :
		- di MainActifity.kt panggil dengan =  android.text="@string/namax"
		- di string.xml di buat dengan 		=  <string name=namax> Hello World </string> 		//

CONTOH SOAL AMBIL TEXT BERDASARKAN INPUT
	idenya = kita akan buat 3 elemen = EdiText, TextView, tombol 
	ada text tampil default -> saat di input data di textedit -> tekan tombol -> textview akan berubah
		- di actifity_main.xml
			- tambah EdiText -> attr inputtype, hint, id=tulisan
			- tambah TextView -> attr id=tampilkan
			- tambah Button -> attr id=tombol
		- di MainActifity.kt 

			tombol.SetOnClickListener{
				var tulisanku = tulisan.text.toString()											// tulisan(edittext).ambil text.konversi string -> bungkus nilai dngn var tulisanku
															
				if ( tulisan == null || tulisanku.trim == "" ){									// disini script validasi
					toast.makeText( /parameter/, Text tidak boleh kosong )		
				}else{
					tampilkan.SetText(tulisanku)												// ganti text value milik "tampilkan" dengan "tulisanku"
				}
			}												

			

CONTOH SOAL MASUKKAN GAMBAR
	- langsung aja masukan elemen <imageView>
	- attr width height dan src= /sebelum masukan src kita masukin dulu gambar dalam folder yang di sediakan: res/drawable/ caranya:
		- copas disini: res/drawable/			atau
		- pada tab kiri ada resource manager -> +(tambah) -> import drawable -> import 
		- sekarang lihat src:"@draw" sudah ada autocomplete pilihan nama gambar

CONTOH SOAL UBAH GAMBAR BERDASARKAN INPUT
	idenya = kita gabungkan latihan ubah tulisan berdasarkan input untuk mengubah gambar
	jadi saat kita masukan stringnya maka maka gambarnya berubah sesuai stringnya 
	
	- di actifity_main.xml untuk img beri id=gambar1

		pada imageView diatas beri id="@+id/gambar1"

	- di MainActifity hubungkan gambar1

		tombol.SetOnClickListener{
			var tulisanku = tulisan.text.toString()											
														
			if ( tulisan == null || tulisanku.trim == "" ){									
				toast.makeText( /parameter/, Text tidak boleh kosong )		
			}else{
				tampilkan.SetText(tulisanku)

				// buat var yang ngambil sumber gambar sekaligus jenis gambarnya
				var sumbergambar = resources.getIdentifier(tulisanku, defType: "drawable", getPackegeName)		// [ambil sumber].[dengan identifier = dari id, nama folder, nama package]	
				gambar1.setImageResource(sumbergambar)															// buat img nya dinamis sesuai var sumbergambar
			}
		}			



