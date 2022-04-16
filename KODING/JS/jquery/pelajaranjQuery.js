jQuery hilman ramadlon

// RINGKASAN ==============================================================
---------------------------------
// syarat:
$(document).ready(function(){ semua di lakukan disini})
// selector:
$('h1')				// boleh tag
$('#idku')			// pake id
$('.pakeClass') 		// pake Class
$('.pakeClass:first') 		// pake Class pertama dari beberapa
$('.pakeClass:last') 		// pake Class terakhir dari beberaapa
$('.pakeClass:eq(2)') 		// pake Class ke sekian(index)
$('p .pakeClass')		// pake css selection class pada p
$('li:nth-child(2)')		// pake Child ke (2)
$(this)				// ini klik yang bersangkutan dan ini terjadi dalam function, (lih bawah)
---------------------------------
// add event
.click(f);
.mouseenter(f);
.mouseleave(f);
.keyup(f);
---------------------------------
// manipulasi elemen:
.css();
---------------------------------
// class:
.addClass();
.removeClass();
.toggleClass();
---------------------------------
// manipulasi node:
.append();
.prepend();
.after();
.before();
.remove();
.empty();
---------------------------------
// get set input text ini masih belum bisa di coba ??????? 
.html(), text(), val	// tangkap isi html
.submit() dan .val() 	// baca value input text
.

// ajax


lanjuuuut ada di pelajaran api


// RINGKASAN ==============================================================




MENGHUBUNGKAN FILE
// via cdn / online:
/* buka jquery.com -> jqueryCDN -> pilih versi -> pilih minified (atau uncopress)(selain ini belum ada ajax) -> 
   copas url yang di berikan -> di html sebelum penutup body dan sebelum index.js kita 
*/

// via file download sendiri ??????
/* download jquery sesuai package yang kita inginkan -> rename dan tempatkan file kita sesuai keinginan -> 
   lalu akses seperti biasa di html kita:
*/
   <script src="jquery.js"></script> /// disebelum penutup body
   $(document)		// tulis di console / jika tak ada error berarti jalan 

awal hukumnya wajib:
$(document).ready(function(){ semua di lakukan disini})

SELECTION
//==========

$('h1')				// boleh tag
$('#idku')			// pake id
$('.pakeClass') 		// pake Class
$('.pakeClass:first') 		// pake Class pertama dari beberapa
$('.pakeClass:last') 		// pake Class terakhir dari beberaapa
$('.pakeClass:eq(2)') 		// pake Class ke sekian(index)
$('p .pakeClass')		// pake css selection class pada p
$('li:nth-child(2)')		// pake Child ke (2)

EVENT dan THIS
//==========

.click();
.mouseenter();
.mouseleave();
ada banyak lihat  di dokumentasi
contoh:

$('h1').click(function({ alert("cobaaa"); });

contoh THIS
$('h1').click(function({ 
	$('this').css("color","yellow")		// ini bisa berguna saat memilih semua <h1> hanya akan berpengaruh pada yang bersangkutaan saja saat event
	});

GET DAN SET
//==========

$('form').submit(function(){			// jika kita punya <form id =inputtext> dan punya <tombol type=submit>
	alert($('#inputText').val());		// kita bisa baca apa yang di input oleh user
})

$('form').submit(function(){			// jika kita punya <form id =inputtext> dan punya <tombol type=submit>
	var tulisan = $('#inputText').val();	// val(); berguuna bisa ngambil isinya juga bisa set isinyaa
	$(h1).text(tulisan);			// text(); sama gunya dengn val();
	event.preventDefault;			// untuk mencegah prilaku default yang mengirim ke halaman lain

$('form').submit(function(){			// jika kita punya <form id =inputtext> dan punya <tombol type=submit>
	alert($('#inputText').html();		// kita bisa baca apa yang di input oleh user yg berbentuk karakter html
})
PREVENT DEFAUL ada contoh di atas
//==========

MENAMBAH MENGHAPUS ELEMEN
//==========

append();			// $('div').append('<div>adaaa</div>')   // memuncukn di bgian akhir di  dalam elemen itu sendiri(child)
prepend();			//										// muncul di bagian atas di dalam elemen
after();			//										// muncul di setelah elemen(diluar)
before();			//										// muncul di sebelum elemen(diluar)

remove();			// $('div').remove()   		// hapus semua dengan elemen
empty();													// hapus isi konten saja sedang elemen masih ada
  
CSS JQUERY
//==========

$('p').css("color","yellow")			// satu property
$('p').css({					// banyak property
	'color';'yellow',
	'backgroundColor';'red',
	'fontSize';'20px'
})		

MENAMBAH MENGHAPUS CLASS
addClass();		//$('h1').addClass('coba') 		//tambah class
removeClass();		//$('h1').removeClass('coba') 		//hapus class
toggleClass();		//$('h1').toggleClass('coba')		//on/off class


})
