/* -------------------------------------------------------------------------------------------------
BULMA

Daftar isi
	- tips
	- KOLOM/GRID SISTEM
		- kolom										-> semacam pembagian halaman secara horizontal
		- size kolom							-> ukuran masing2 dalam 12 grid dan pecahan
		- wrapping kolom					-> jika lebih dari 12 kolom di jatuhkan kebawah(default hidden)
		- offset									-> desak ke kanan (menggunakan ukuran kolom)
		- responsive							-> adaptasi kolom pada breakpoint.ada 4 tingkat
		- nested									-> bersarang parent child berulang
		- gap											-> jarak antara komponen
	- LAYOUT
		- container								-> 
		- 
	- ALIGNMENT
		- vertical								-> 
		- horizontal							-> 
====================================================================================================
TIPS biki halaman website:

1 lakukan dulu layouting halaman dengan column di mobile duluan sebenarnya(rekomendasi dari internet)
	- kalau saya desktop duluan
2 bagi halaman berdasarkan session ke bawah
3 bagi halaman secara column atau grid sistem
4 lalu setting responsive
5 kalau menemukan kolom statik boleh pakai tile
6 kemudian layoting mobile 
----------------------------------------------------------------------------------------------------
LAYOUTING COLUMN
 */
.columns			// parent
	.column 		// child lebar auto

/* -------------------------------------------------------------------------------------------------
SIZE GRID/COLUMN
(grid sistem dengan angka) sistem GRID halaman di bagi 12. is-1 -- is-12  (tanpa ini maka lebar auto)*/
is-1			
is-2

/* -------------------------------------------------------------------------------------------------
Ukuran pengambilan ruang kolom (grid system dengan bahasa)
*/
is-three-quarters	// 3/4
is-two-thirds			// 2/3
is-half						// setengah
is-one-third			// 1/3
is-one-quarter		// 1/4
is-full						// full
is-four-fifths		// 4/5
is-three-fifths		// 3/5
is-two-fifths			// 2/5
is-one-fifth			// 1/5

/* wrap
jika grid dan kolom melebihi ukuran yang di tentukan maka sisanya akan di hidden 
kecuali jika pakai di bawah ini maka akan di wrap */

is-multiline

/* -------------------------------------------------------------------------------------------------
OFFSET 
ambil porsi ruang lalu offside */
.columns					
	.column is-half is-offset-2 		// ambil porsi ruang setengah lalu offside-2 pada grid 12
	.column is-4 is-offset-half 		// ambil porsi ruang 4 pada grid 12 lalu offside setengah halaman 

/* -------------------------------------------------------------------------------------------------
NARROW COLUMN 
menentukan kolom dengan lebar fix kita punya ukuran dalam sistem GRID ini*/

.columns
	.column is-narrow							// bungkus kotak kita yeng memiliki ukuran dengan is-narrow
		.kotak style=width:200px 		// bukan kolom melainkan kotak memiliki lebar fix 200px
	.column is										// kolom lainya masih menggunakan sistem GRID
	.column

/* -------------------------------------------------------------------------------------------------
RESPONSIVE
langsung di taruh pada colums (kontainer kolom)
akan tampil grid saat ukuran tercapai jika belum akan tampil wrap
 */
is-mobile					// tampil grid di mobile ke atas
is-tablet					// tampil grid di tablet ke atas (tampil wrap pad tablet kebawah)
is-desktop				// tampil grid di desktop ke atas (tampil wrap pad desktop kebawah)
/* kombinasi ukuran kolom dan responsive */
is-three-quarters-mobile	// tampil 3/4 di mobile ke atas
is-two-thirds-tablet			// tampil 2/3 di tablet ke atas
/* sesuaikan GRID di masing masing layar */
<div class="columns is-mobile">
  <div class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">

/* -------------------------------------------------------------------------------------------------
NESTED
bersarang bisa seprti perulangan saja parent child
 */

.columns: 						// parent
	.columns						// child
		.columns: 				// parent
			.column 				// child

/* -------------------------------------------------------------------------------------------------
GAP
sepertinya ini membentuk padding dalam colomn ini penting
 */

is-gapless 						// hapus gap
is-0 -- is-8					// menambah gap tulis pada colums(parent)(kalau di child maka jadi grid sistem)

/* -------------------------------------------------------------------------------------------------
ALIGN COLOUMN
pada kotak kolom (bukan contain) 
 */
is-vcentered 					// center vertical
is-centered						// center horizontal

/*
====================================================================================================
LAYOUT
- container: 80% layar pada desktop dan 100% pada tablet dan mobile
- is-fluid: 32px gap kanan kiri di semua layar
- navbar:
- hero:
- section:
- footer:
- flexbox:
- 
*/
