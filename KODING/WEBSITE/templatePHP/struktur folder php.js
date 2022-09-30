/*  
TIPS PHP dan halaman web lainya

koneksi db lakukan sekali di init.php

buatkan fungsi ambil data satuan di halaman function.php
buatkan fungsi ambil data banyak berbentuk array di halaman function.php
buatkan fungsi ambil data banyak berbentuk object di halaman function.php

di halaman page:

lakukan koneksi
	- lakukan import koneksi init.php
	- lakukan import koneksi function.php
lakukan persiapan data dengan menggunakan function di atas
	- dalam variabel
	- dalam array
	- dalam object
Siap di gunakan di page:
mungkinlangkah berikutnya:
	- masukkan session user
	- masukkan redirect
	- thema
	- dan session lainya di halaman paling atas sebelum page

jadi skemanya adalah:
	folder
		function
			init.php 		// routing dan session_start
			auth.php		// khusus autentikasi dan session get
			db.php 			// koneksi db 
			data.php 		// fungsi pengambilan data variabel, array, object, pagination
		style
			theme 			// warna dan variabel thema
			css 			// css kontrol
			framework 		// css framework
		javascript
			jquery 			// kontrol ke DOM dan AJAX
			GUI function		// fungsi interface
			ajax data 		// fungsi data
		pages

- buatkan template PHP sendiri OK lah
*/
