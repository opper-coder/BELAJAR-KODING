// DAFTAR ISI
------------------------------------------------------------------------------------------------
start						-> download dan readyfunction
syntax					-> bentuk dasar, pilih dan aksi
event						-> click, dblclick dll
Effects					-> hide, toggle, animation
html						-> CRUD konten dan element, class, toggleClass, CSS, dimension: width(), height()
transversing		-> seleksi relatif dengan element
ajax						-> load data dan page

// PENDAHULUAN
------------------------------------------------------------------------------------------------
penanganan yang di lakukan pada jquery meliputi: 

- HTML/DOM
- CSS 
- HTML event 
- Effects and animations
- AJAX
- Utilities

cara penulisan umunya adalah
- pertama lakukan aksi terhadap target:
	
	(target).aksi()

- kedua: lalu bungkus aksi di atas dalam event() 
- lalu buatlah trigger( biasanya button ) 
	
	$(trigger).event(function(){
		$(target).aksi()
	})
	$("button").click(function(){
		$("div").hide();
	})

// DOWNLOAD
------------------------------------------------------------------------------------------------
- jquery.com/download
- pilih yang compresset(disarankan untuk produksi) uncompress bisa di baca
- jangan pilih yang minified karena tidak mengandung ajax dan effect modules
- bisa pakai npm,yarn, atau CDN via google, CDN official

// START
------------------------------------------------------------------------------------------------
diperlukan dua file load di html > head

	<script src="jQuery.js"></script>
	<script src="script.js"></script>

// SYNTAX
------------------------------------------------------------------------------------------------
$().aksi()
$(selector).action()
$(selectorCSS).action()
$("p").action()
$(".para").action()
$("#para").action()
// -------
$(document).ready(function(){
	// di wadahi semua disini agar load mudah dan dapat di load di head
});

// EVENT
------------------------------------------------------------------------------------------------
sejumlah event: ngerti tentang .click saja berarti sudah beres klik kanan mungkin ada 

mouse
	- click			
	- dblclick		
	- mouseenter		
	- mouseleave
	- hover 			// mirip hover css pakai jquery
	- focus 			// mirip focus css. kasih style pada input text pake jquery
	- blur 				// method saat fokus() meninggalkan dia
kombinasikan event
	- on 
	- on("click", function(){ aksi }) // begini juga bisa cara nulis event
keyboaed
	- keypress	
	- keydown		
	- keyup		
form
	- submit		
	- change		
	- focus		
	- blur		
window/document
	- load
	- resize
	- scroll
	- unload
// cara nulis event
$().event()
$().click()
$("p").click()
$("p").click(function(){ disini })
$("p").click(function(){ 
	$(this).hide(); 				// apapun elemen ini sembunyikan
 })

// EFFECT
------------------------------------------------------------------------------------------------
yaitu method2 yg sering, kalau selection beres berarti tinggal method ini method2 ada yang menerima 
parameter ada yang tidak 

$("#hide").click(function(){
  $("p").hide();
});

$("#show").click(function(){
  $("p").show();
});

hide show -----
- hide() 				// sembunyikan
- show() 				// tampilkan
- toggle() 			// toggle hide-show
- hide(1000) 		// pakai delay: "slow", "fast" atau "milidetik" (semua kurung()bisa di delay)
fade -----
- fade()  			// transparent to solid
- fadeIn() 			// solid to transparent test sendiri
- fadeOut() 		// solid ke menghilang
- fadeToggle() 	// fadein-out
- fade(3000)  	// 
- fadeTo("slow", 0.15) // menghilang ke 15% solid. nilai 0 - 1 (0-100%)
slide -----
- slideDown() 	// buka kebawah (seperti tirai, accordion)
- slideUp() 		// tutup keatas 
- slideToggle() // 
- slideToggle() // 
animate -----
- animate({left: '250px'}) // bergerak dari kiri ke kanan
- .animate({ 		// bisa melakukan perubahan hampir semua properti css
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px'
  });
- bisa animasi barantai, jalan, kanan kiri, melabar, meninggi, menciut, warna, opacity dll 
- bisa kalkulasi width: '+=150px', seperti zoom, setiap kali di klik semakin membesar pilih
- bisa toggle di properti CSS: $("div").animate({height: 'toggle'});
- sekali klik 4 animasi beruntun
- stop() 				: saat animasi durasi panjang kita bisa stop di pertengahannya 
- callback 			: - kombinasi antrian. Fungsi callback dijalankan setelah efek saat ini selesai 100%. 
									$("p").hide("slow", function(){ alert("The paragraph is now hidden"); })
									- contoh yag kacau, alert akan di tampilkan dulu, daripada hide(delay)
									$("button").click(function(){ $("p").hide(1000); alert("The paragraph is now hidden"); });
- chaining  		: kombinasi method (misalnya hide dan show jadi seperti animasi menghilang dan tampak lagi)(alternatif)
									$("#p1").css("color", "red").slideUp(2000).slideDown(2000);
// HTML
------------------------------------------------------------------------------------------------
GET (mengambil)
	$("p").text() 										// mengambil isi text dalam <p>
	$("p").html() 										// mangambil isi text dalam <p> sekaligus 'kode' misalnya dalam p ada <span>halo</span> 
	$("input").val() 									// mengambil isi input, button, a dsb yang memiliki attribut value="asa"
	$("#link").attr("href")						// mengambil isi attribut misalnya: href="google.com"
SET (mengisi)(sifatnya menimpa)
	$("p").text("halo aqil") 					// mengisi isi text dalam <p>
	$("p").html("halo<b>aqil</b>") 		// mengisi isi text dalam <p> sekaligus 'kode' misalnya dalam p ada <span>halo</span> 
	$("input").val("saiti jaya") 			// mengisi isi input, button, a dsb yang memiliki attribut value="asa"
	$("#link").attr("href")						// mengisi isi attribut misalnya: href="google.com"
ADD (tambah/generate elemen baru)
	$("p")append("<span>ada</span>") 	// menyambung text yang sudah ada di "akhir" (misalnya text dalam <p>)
	 																	// menyambung list yang sudah ada (misalnya <li> dalam <ol>)
	$("p")prepend("<div>halo</div>")	// sda di "awal"
	$("p")after() 										// elemen baru sebelum yang di pilih
	$("p")before("<b>aqil</b>") 			// elemen baru setelah yang di pilih
	function afterText() {
  	var txt1 = "<b>I </b>";                 // generate element dengan HTML 
  	var txt2 = $("<i></i>").text("love ");	// generate dg jQuery
  	var txt3 = document.createElement("b"); // generate dg DOM
  	txt3.innerHTML = "jQuery!";
  	$("img").after(txt1, txt2, txt3);       // posisikan 3 elemen sebelum <img>
	}
DELETE(menghapus elemen)
	$("#ada").remove(); 							// menghapus #ada beserta child nya
	$("#ada").empty(); 								// menghapus child nya saja (mengosongkan isi)
	$("p").remove(".test, .demo"); 		// menghapus dengan memilih class tertentu
CLASS-CSS( menambah/ubah/hapus class berisi css )
	$("h1, h2, p").addClass("biru"); 	// Menambahkan satu/lebih class ke elemen yang dipilih
	removeClass("biru") 							// Menghapus satu/lebih class dari elemen yang dipilih
	toggleClass("biru") 							// toggle kelas dari elemen yang dipilih
	$("p").css("background-color", "yellow");	// Mengatur CSS
	$("p").css({"background-color": "yellow", "font-size": "200%"});
DIMENSI
	width()														// lebar tanpa padding, border, margin
	height()													// 
	innerWidth()											// lebar dalam border (karena border punya ketebalan sendiri)
	innerHeight()											// 
	outerWidth()											// lebar di luar border
	outerHeight()											// 
  $("#div1").width(500).height(500);
 
// TRANSVERSING
------------------------------------------------------------------------------------------------
memilih elemen lainya relatif dengan elemen saat ini. ke bawah, dalam, atas, samping dll 
- induk, nenek, moyang
- turunan anak, cucu, cicit 
- saudara kandung 

PARENT
	$("span").parent() 									// naik satu tingkat
	parents() 													// semua elemen(parent) di atas span sampai html semua kene
	parents("ul") 											// semua parent yang "ul" (filter)
	parentsUntil() 											// rentang
	$("span").parentsUntil("div"); 			// semua parent "antara" <span> sampai <div>
CHILD
	$("div").children(); 								// turun satu tingkat
	$("div").children("p.first"); 			// satu tingkat pakai filter
	$("div").find("*"); 								// semua keturunan div
	$("div").find("span"); 							// semua keturunan div yg span (pakai filter)
SIBLING
	siblings()													// semua saudara 
	siblings("p")												// semua saudara yang <p> 
	next()															// hanya satu saudara "berikutnya"
	nextAll()														// semua saudara "berikutnya"
	nextUntil()													// rentang
	 $("h2").nextUntil("h6");						// rentang "berikutnya" antara h2 sampai h6
	prev()															// sda "sebelumnya"
	prevAll()														// --
	prevUntil()													// -- 

	first()
	$("div").first() 										// elemen pertama dari semua div
	last() 															// terakhir
	eq(1) 															// urutan kita tentukan
	$("p").filter(".intro"); 						// semua p yang class intro(filter)
	$("p").not(".intro"); 							// bukan class intro

// AJAX
------------------------------------------------------------------------------------------------
AJAX adalah seni bertukar data dengan server, dan memperbarui bagian halaman web - tanpa reload ulang seluruh halaman.
hanya reload data yang bersangkutan saja

Pendeknya; AJAX adalah tentang memuat data di latar belakang dan menampilkannya di halaman web, 
tanpa memuat ulang seluruh halaman.

Dengan metode jQuery AJAX, Anda dapat meminta:
 teks, HTML, XML, atau JSON dari server jarak jauh menggunakan HTTP Get dan HTTP Post - 
 Dan Anda dapat memuat data eksternal langsung ke elemen HTML yang dipilih di halaman web Anda!

// LAIN LAIN
------------------------------------------------------------------------------------------------








