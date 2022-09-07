Activity hampir sama dengan page
	di dalamnya ada:
		beda dengan Fragment -> adalah bagian dari actifity -> halaman lain (tampilan lain) yang di buat (ditempel) dalam satu halaman tersebut
		atau mungkin sama dengan div, segment saja
 	- Lifecycle:
		onCreate(), onstart(), onResume(), onPause(), onStop(), onDestroy() dan onRestart()
	- Intent:
		adalah navigasi perpindahan halaman dan juga mengkomunikasikan (oper data) antar halaman(activity)
	- Thread:
		adalah semua proses yang ada dalam aplikasi itu di jalankan di dalam -> nanti ada mainThread
	- Services:
		adalah komponen tidak terlihat yang dapat digunakan untuk menjalankan proses di dalam aplikasi -> biasanya 
		di gunakan menjalankan komponen dalam waktu yang lama dan berat seperti menjalankan musik adau blocking networking
	- 
// mengenal XML:
	- view group : container
	- view	: component
	- atribut : setting komponen
	- values	: nilai atribut
	- id	: nama komponen untuk interaksi dengan logika
// atribut: 
	- wrap_contain -> di didesak oleh contain nya
	- match_parent -> memenuhi container
// center componen: 
	- grafity center -> untuk menempatkan bagi dirinya sendiri (komponen)
 	  android:layout_gravity="center_horizontal"
// halaman awal(android studio v 4020) itu ada template wajib, ini:
// --------------------------------------------------------------------------------
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout 
	 xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">
// --------------------- aksi -------------


// -------------------- /aksi -------------
</androidx.constraintlayout.widget.ConstraintLayout>
// --------------------------------------------------------------------------------
/// CARA MEMBUAT ACTIFITY
ke folder: / java/projectkita/ klik kanan-> new -> actifity -> emptyActifity
- otomatis di buatkan XML nya juga -> ctrl + klik link XML nya 
di xml ada KOMPONEN:
// IMAGEVIEW ----->
- :> <ImageV -> i besar -> atribut tinggi lebar -> src -> ketik huruf pertama( huruf gambar harus kecil semua)
- copas gambar dengan nama lowercase di drawable

// TEXT ----->
- :><TextV
- Attr:
	size -> u/ text pakai sp 18sp
	textStyle -> bold

// EDITTEXT -----> 
->: <EditT 
- Attr :
	hint -> text
	inputType = test, password, dll

// ATTR UMUM ----->
- padding = 10dp
- paddingLeft, r, t, b
- margin 
- marginLeft, r, t, b
- grafity
- grafity = l, r, t, b, c // untuk hampir smua komponen dengan parent
- background = #ccc
- backgroundTint =#bbb sama aja
	atau bikin komponen warna di /res/values/color.xml  -> beri nama merah
		kopas yang ada dan edit warna di color picker kiri -> ketik saja #fff lalu edit di picker
		panggil di komponen:  android:background="@color/merah"
- textColor = #fff ; sama dengan background

