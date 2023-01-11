 /*
 PENDAHULUAN 
- w3 CSS versi 4 tahun 2020 di tahun 2022
- sudah saya modifikasi prefix "w3-" saya ganti dengan "i-"
- di sini hanya fokus kepada layout
- baca dulu daftar isi, kategori
- utility sebagian ada contoh sebagian merujuk ke dokumentasi
- untuk komponen kita kasih guide fungsinya saja, cara dan penerapan tinggal cekidoc
- kalau mau kombinasi how to w3s silahkan buatkan sendiri halaman css nya
- jangan lupa import javascript 
- lalu berikan style dengan i-frame
---------------------------------------------------------------------------------------------------
LAYOUT 
===================================================================================================
daftar isi:
	1. i-container													-> mengenai kontainer section
	2. div, span														-> konten cell
	3. row, column													-> sistem peletakan konten advanced
		i-cell-row, i-cell										-> kayak flex
		i-row, i-col													-> kayak grid
	4. align																-> perataan
		i-right-align, i-center								-> text align
		i-display-container, i-display-right	-> relatif absolute
	5. i-padding, i-margin									-> default framework
	6. responsive: i-mobile, i-hide-small		-> multi screen lebar, hide, 
	7. interactive: i-hide, hover, tooltip	-> tooltip dsb
	8. animasi															-> dasar animasi
	9. interactif javascript								-> listener onclick dsb

---------------------------------------------------------------------------------------------------
LANGKAH MEMBUAT LAYOUT:
1. baris 
-------------------
	1. <div>, <section>, <main>, <mark>, <article>, <header>, <footer>, <aside>, <form>, <main>, 
	   <details>, <figure>, <nav>,, <summary>, <time>, <figcaption>
	2. i-container 	: (padding-H 16px)
	3. i-section 		: (margin-V 16px)
	6. i-panel 			: marginV 16px, paddingH 16px(kombinasi 2 di atas)
	4. i-padding		: standard cekidoc
	5. i-margin			: standard cekidoc
	6. custom 			: buat sendiri

	tambahan ada:
	<menu> 					: cari
	<details> 			: detail
2. kolom dasar 
-------------------
	1. div 					: block
	2. span 				: inline
	3. p 						: margin-V 16px ukur ulang
	4. h1 					: margin-V 16px ukur ulang
3. kolom advance
-------------------
	1. 
		i-cell-row		: parent
		i-cell				: child (banyak)
		i-cell-top		:	default
		i-cell-middle	: vertical bottom
		i-cell-bottom	: vertical bottom
	2. mirip grid 
		i-row 				: parent no padding
		i-row-padding : parent berpadding 16px
		i-col 				: child 
		s1 - 11 			: kombinasi dg i-col, default s12 (w100%)
		m1 - 11 			: kombinasi dg i-col, default s12 (w100%)
		l1 - 11 			: kombinasi dg i-col, default s12 (w100%)
		.s6 .s6 			: contoh 2 div. 6 : 6
		.s4 .s8 			: 4 : 8
		- responsive:
			.s4 .m6, .s8 .m6 : kombinasi responsive (screen "medium" 1/3, screen "large" 1/2)
		custom:
			- i-row
				- i-col style="width:20%"
				- i-col style="width:60%"
				- i-col style="width:20%"
		- tinggi menyesuaikan contain ya tidak sama dengan i-cell
		- i-cell vs i-row
				i-cell: lebar menyesuaikan konten, tinggi di buat sama
				i-row : lebar grid sistem di buat sama, tinggi sesuai content

4. Align
-------------------
	1. dasar 
		i-center								: text-align
		i-left-align						: text-align
		i-right-align						: text-align
	2. float
		i-right 								: float self
		i-left 									: float self
		i-auto, i-content  			: margin auto
		i-stretch 							: cekidoc
	3. absolut
		i-display-container			: pure relatife (parent)
			i-display-position		: pure absolute (child), atau langsung absolut kiri kanan dst
			i-display-topleft			: absolute kiri atas
			i-display-topright		: absolute ...
			i-display-bottomleft	: absolute ...
			i-display-bottomright	: absolute ...
			i-display-left				: absolute ...
			i-display-right				: absolute ...
			i-display-middle			: absolute ...
			i-display-topmiddle		: absolute ...
			i-display-bottommiddle: absolute ...
			i-display-hover				: hover pd container (pasang di child maka pure block)
	4. cekidoc resposive lainya:
		i-image  			: Responsive image
		i-mobile 			: --

5. margin-padding
-------------------
	1. standard
		- padding:
			i-padding 					: 8 vertical, 16 horizontal
			i-padding-small 		: 4 vertical, 8 left-right
			i-padding-large 		: 12 vertical, 24 horizontal
			i-padding-16 				: 16 vertical
			i-padding-24 				: 24 vertical
			i-padding-32 				: 32 vertical
			i-padding-48 				: 48 vertical
			i-padding-64 				: 64 vertical
			i-padding-top-64 		: 64 atas
			i-padding-top-48 		: 48 atas
			i-padding-top-32 		: 32 atas
			i-padding-top-24 		: 24 atas
		- margin 	
			i-margin 						: keliling 16px
			i-section 					: vertical 16px
			i-margin-top, bottom, right, left : 16px
			<br> 								: 24px 
			<div> margin tidak bisa di dobel, jika inginkan lebih terpaksa bikin sendiri
	2. custom sendiri
		tentukan sendiri margin-padding 

6. Responsive
-----------------------------
	penyesuaian layout pada layar breakpoint
	i-hide-small 			: responsive hide
	i-hide-medium			: medium hide
	i-hide-large 			: large hide
	i-mobile					: any element akan 100% saat display mobile
	i-col s1 - 12 		: resposnsive grid seperti di atas
	i-half 						: pakai pecahan dan responsive mobile
		i-half  				: 1/2 screen column container 
		i-third  				: 1/3 screen column container
		i-twothird  		: 2/3 screen column container 
		i-quarter  			: 1/4) screen column container 
		i-threequarter  : 3/4 screen column container

7. atur interaktif
-------------------
	tooltip
	hover
	fix
	dll

8. animasi
-------------------
- jika di terapka begitu saja di tag maka saat di refresh bekerja
- sebaiknya pakai listener
	i-animate-top 		: masuk dari atas (-300px to 0)
	i-animate-bottom 	: masuk dari bawah (-300px to 0)
	i-animate-left 		: masuk dari kiri (-300px to 0)
	i-animate-right 	: masuk dari kanan (-300px to 0)
	i-animate-opacity : Animates an element's opacity from 0 to 1 in 0.8 seconds
	i-animate-zoom 		: zoom 0 to 100% 
	i-animate-fading 	: fade in dan out (0 to 1 and 1 to 0)
	i-spin 						: putar 360^

9. terapkan interactif javascript
-------------------
	- import w3.js 		: importjavascript
	- onclick="function" : listener
	- function tersedia	 : daftar function cekidoc
		- hide()
		- show()
		- toggle()
		- addclass
		- addstyle
		- include HTML
		- query API
		- dll
	- ada frameworknya sediri baca disana aja ya

	lanjutan...
10. komponen w3
-------------------
	- adalah terapan dari w3 secara komponen web jadi cekidoc
	- sama dengan how to sekaligus js nya ada
	- jadi cara penggunaanya adalah
		- desain layout dg grafic
		- buatkan layout dengan cara di atas 
		- lalu saat mengisi komponen lihat librari 
			- di example dokumentasi jika tidak ada maka cari di:
			- how to. jika ketemu maka lakukan styling di w3- jika tidak
			- styling sendiri
			- jika cocok maka sampai pada layoting saja menggunakan w3
			selanjutnya bnikin sendiri untuk
			- margin-padding
			- warna
			- size
			- 
		- 
===================================================================================================

baris
-----------------------------
	- block:
		- div 					: block biasa(tanpa margin padding)
		- <header>, <article>, <section>, <footer>, <form>, <main>	
			- .i-container: memiliki padding hori 16px, atas bawah 0px
			- .i-section 	: akan memiliki margin verti 16px saat di kasih
			- .i-panel 		: mirip .container tapi di kelilingi margin 16px (kombi antar container dan section)
			- .i-content, i-auto : yaitu jika memiliki lebar lbh kcl dari screen, maka margin auto, center
			- <p> <h1> 		: memberikan padding 16px (ukur lagi)
		- <nav> 				: ???
		- <menu> 				: padding kanan kiri 40px
		- <details> 		: ada expand panah bawah
		- .container  	: padding kn/kr 	: 16px
			- kalau di isi p maka akan ada 	: padding atas bawah :16px
			- kalau disi span : maka padding span 0
		- semua di atas menerima class (sadar yang penting):
			- margins
			- paddings
			- alignments
			- fonts
			- colors

kolom pada baris
-----------------------------
cell 
	i-cell-row 				: container block 100% (sebenarnya display: table w100%)
	i-cell						: items berjajar ke kanan, mengambil porsi percentasi sesuai content
behaviour:
	- jika langsung i-cell : maka kayak span berjajar ke kanan, jika overlap maka tinggi di buat menyamakan pd yg tertinggi
	- jika di masukkan ke container maka akan di stretch 100%, atau atur lebar kontainer mis: 75%, 400px dll;
	- lebar contain tetap menggunakan procentase
	- bisa responsive. cekidoc, baik di dalam atau di luar container pakai i-mobile
align vertical
	i-cell-top				:	default
	i-cell-middle			: vertical bottom
	i-cell-bottom			: vertical bottom
align horizontal tidak tersedia, solusi
	i-left						: float, align self
	i-right						: float, align self
	i-center					: text-align, align text
	i-left-align			: text-align, align text
	i-right-align
---

Grid system 
-----------------------------
(dibuat dengan display table: dan percen)
	- i-row 				  : agar grid berlaku maka buatkan container dulu. no padding
	- i-row-padding   : kalau mau padding 16px horizontal (lebih tepatnya di beri padding 8 pada masing2 row)
		- i-col 			  : kolom harus di definisakn dulu
		- s1 - 11			  : barulah kombi dg ukuran sesuai responsive mobile (s12 default layar small 100%) atau cukup <div class="i-col s4">
		- m1 - 11 		  : medium (m12 default layar medium 100%)
		- l1 - 11			  : large  (l12 default layar large 100%)
	- cara membagi porsi gunakan angka yang jumlahnya total 12, misalnya:
		6+6, 4+8, 3+3+3, dst termasuk offsetnya juga harus di hitung sebagai kolom
	- <div class="i-col m4 l3"> : 
		responsive 2 screen sekaligus (screen "medium" 1/3, screen "large" 1/4)
	- lebar pakai percen CSS bisa selain menggunakan 12 grid di atas
		- i-row
			- i-col style="width:20%"
			- i-col style="width:60%"
			- i-col style="width:20%"
	- behaviour 			: 
		- lebar konsisten, tinggi menyesuaikan content
		- saat lebar melebihi 12 maka akan di desak turun
		- saat lebar belum 12 berapapun di sejajarkan ke kanan
		- multi row, bisa bikin tabel dalam 1 container, tapi tidak bisa di looping
		- kalau mau di looping buatkan masing baris 1 container tapi max 12 kolom sj

grid (flex alternative)
-----------------------------
i-row 											: tentu harus dalam row grid
	i-col style="width:150px"	: lebar fix CSS
	i-rest										: lebar grid sisanya fluid

alat layout
-----------------------------	
- padding:
	i-padding 								: 8 vertical, 16 horizontal
	i-padding-small 					: 4 vertical, 8 left-right
	i-padding-large 					: 12 vertical, 24 horizontal
	i-padding-16 							: 16 vertical
	i-padding-24 							: 24 vertical
	i-padding-32 							: 32 vertical
	i-padding-48 							: 48 vertical
	i-padding-64 							: 64 vertical
	i-padding-top-64 					: 64 atas
	i-padding-top-48 					: 48 atas
	i-padding-top-32 					: 32 atas
	i-padding-top-24 					: 24 atas

- margin 	
semua margin bernilai 16px
	i-container 							: paddingH 16px               
	i-margin 									: keliling
	i-section 								: vertical 16px
	i-margin-top, bottom, right, left 			: sesuaikan
<br> 												: 24px 
- div margin tidak bisa di dobel, jika inginkan lebih terpaksa bikin sendiri

- radius			
	i-circle 									: radius 50%
	i-round 									: 4px
	i-round-small 						: 2px
	i-round-medium 						: 4px
	i-round-large 						: 8px
	i-round-xlarge						: 16px
	i-round-xxlarge 					: 32px

- shadow:
	i-card
	i-card-2
	i-card-4

ALIGN DISPLAY BERLAKU UMUM
-----------------------------
	- class "display": (tidak butuh container(mandiri))
		i-left									: float, align self
		i-right									: float, align self
		i-center								: text-align, align text
		i-left-align						: text-align, align text
		i-right-align						: text-align, align text
		i-justify								: ???
		i-block									: block w:100%
		i-circle								: borr :50%
		i-hide									: display
		i-show									: display block
		i-show-block						: display block(sama)
		i-show-inline-block			: display inline-block
		i-top										: fixed
		i-bottom								: fixed

	- class "display-container"
		i-display-container			: pure relatife (parent)
			i-display-position		: pure absolute (child), atau langsung absolut kiri kanan dst
			i-display-topleft			: absolute kiri atas
			i-display-topright		: absolute ...
			i-display-bottomleft	: absolute ...
			i-display-bottomright	: absolute ...
			i-display-left				: absolute ...
			i-display-right				: absolute ...
			i-display-middle			: absolute ...
			i-display-topmiddle		: absolute ...
			i-display-bottommiddle: absolute ...
			i-display-hover				: hover pd container (pasang di child maka pure block)

Responsive
-----------------------------
penyesuaian layout pada layar breakpoint
	.i-hide-small, medium large: untuk responsive hide
	.i-col s1,m1,l1 - 12 resposnsive grid seperti di atas
	.i-mobile	: any element akan 100% saat display mobile
	.i-half, i-quarter : pakai pecahan dan responsive mobile, untuk class cekidoc

	tombol
	text
	warna









UTILITY
===================================================================================================
size 					-> daftar komponen
icon     			-> font awesome, google, bootstrap
warna     		-> cara akses
default     	-> load css anda di bawah W3CSS
animation     -> spin, fade, zoom, top, bottom, left, right

size
-----------------------------
	- text
			i-tiny 		: 10
			i-small 	: 12
			i-large 	: 18
			i-xlarge 	: 24
			i-xxlarge 	: 32
			i-xxxlarge 	: 48
			i-jumbo 	: 64
			i-wide 		: wide
			i-serif 	: serif
			i-sans-serif : sans serif
			i-cursive 	: 
			i-monospace : monospace
			h1-h6
	- font     			
			family 		: i-Arial, Helvetica, sans-serif; cara biasa cekidoc
	- tombol 			: 
	- tabel 			: sama dengan text sampai xxx
	- list
	- bar
	- sidebar
	- badge
	- progress
	- tooltip
			
- warna
-----------------------------
	- back+text 	: i-red, i-hover-red
	- text 				: i-text-red, i-hover-text-red
	- border 			: i-border, i-border-left, right, top, bottom
		- kombi 		: i-border-red, i-hover-border-red
	- schema
		- download dulu skema : ada ios, win8, flat, material dll
		- color generator : bikin skema sendiri ada toolnya
		- bikin sendiri: i-1-main, 1-1-dark, i-1-text, i-1-light = sampai i-6


KOMPONEN Dasar
===================================================================================================

button		-> color, hover, size, shapes, border, float, full, text, padding, disble, grup, bars, ripple effect
img				-> round, circle, bordered, card, text, responsive, opacity off, album
effect		-> normal, sephia, opacity, monochrome, hover
table			-> basic, garis hori, stripped, bordered, centered cell, color head, hover, hover specific, card, responsive, size
list			-> basic, bordered, header, card, centered, colored, color item, hover, closable, padding, avatar, size
card			-> color, content, photo, hover, avatar, widged
panel     -> sering di gunakan bikin alert, quote, dll
note			-> mirip panel tapi ada permainan border tebal tipis dan jg warna border
code			-> font code dan, background, color higlight sesuai bahasa
quote			-> large, dll
alert			-> basic, card, rounded, closable
form input	-> top label, bottom label, card, color label, border, round, borderless, colored, hover, animated, checkbox, 
				radio, select menu, form three grid, two-column layout
dropdown	-> hover, content, click, animated, card, in nav bar, right aligned
button		:  
img				:  
effect		:  
table			:  
list			:  
card			:  
panel     :  
note			:  
code			:  
quote			:  
alert			:  
form input:  
dropdown	:  

KOMPONEN TERAPAN
===================================================================================================
terapan ini bisa dilihat di dua sumber: W3CSS tutorial, dan juga W3CSS example. di sidebar yang sama (cekidoc)
bar					-> basic, vertical, color, hover, border, link, button, float, fontsize, padding, width, icons, with input, dropdown, 
				topbar, bottom bar, collapsible android
sidebar 		-> mirip di atas, hiding, desak, bottomsidebar divider, card, size, icon, dropdown, accordion, animated, overlay, content
navigation	-> gabungan bar dan sidebar
pagination	-> basic, arrow, active, hover, 
validation	-> Validator checks for CSS1, CSS2, CSS3, and CSS4
accordion		-> basic, button, link, active, width, card link, accordion dropdown, animasi 
modal 			-> basic, ,shadow color, hover, photo, avatar, widget, button, full button, content, 
badge				-> color, in button, in list, in table, size, UTF-8
tabs				-> basic, active, vaertical, animated, tab image, tab in grid
tag					-> hashtag
progress bar	-> basic, color, label inside, label size, padding, rounded, dynamic js label, upload bar label notif
slideshow		-> manual, auto, text inside, indicator, indicator inside, indicator angka, bulatan, images, fade
tooltip			-> inline, image, tag, absolute, color, round, size, animated fade, transition, 
filter			-> search dan suggestion seperti everything, dropdown,  
trend				-> gaya tile grid, kayak windows8,
case				-> template memulai w3css, 
material		-> contoh praktek material desain
version			-> versi pro ringan hilangkan skema warna, sehingga warna di buat di luar file ini, adalink download
mobile			-> template mobile, top bar, menu sidemenu, 

bar					:  
sidebar 		:  
navigation	:  
pagination	:  
validation	: 	
accordion		:  
modal 			:  
badge				:  
tabs				:  
tag					:  
progress bar:  
slideshow		:  
tooltip			:  
filter			:  
trend				:  
case				:  
material		:  
version			:  
mobile			:  


TAMBAHAN
===================================================================================================
	- shadow
	- hover shadow
	- jarak kebawah

 */

/*

-------------------
CONTAINER CLASSES
i-container
i-panel
i-badge
i-tag
i-ul
i-display-container
i-block
i-code
i-codespan
i-content
i-auto
i-stretch
-------------------
TABLE CLASSES
i-table
i-striped
i-border
i-bordered
i-centered
i-hoverable
i-table-all
i-responsive
-------------------
CARD CLASSES
i-card
i-card-2
i-card-4
-------------------
RESPONSIVE CLASSES
Class
i-row
i-row-padding
i-auto
i-stretch
i-half
i-third
i-twothird
i-quarter
i-threequarter
i-col
i-rest
-------------------
L1 - L12
m1 - m12
s1 - s12
-------------------
i-hide-small
i-hide-medium
i-hide-large
-------------------
i-image
i-mobile
-------------------
BAR CLASSES - NAVIGATION
i-bar
i-bar-block
i-bar-item
i-sidebar
i-collapse
i-main
-------------------
DROPDOWN CLASSES
i-dropdown-click
i-dropdown-hover
-------------------
BUTTON CLASSES
i-button
i-btn
i-circle
i-ripple
i-bar
i-block
-------------------
INPUT CLASSES
i-input
i-check
i-radio
i-select
i-animate-input
-------------------
MODAL CLASSES
i-modal
i-modal-content
i-tooltip
i-text
-------------------
ANIMATION CLASSES
i-animate-top
i-animate-left
i-animate-bottom
i-animate-right
i-animate-opacity
i-animate-zoom
i-animate-fading
i-spin
i-animate-input
-------------------
FONT AND TEXT CLASSES
i-tiny
i-small
i-large
i-xlarge
i-xxlarge
i-xxxlarge
i-jumbo
i-wide
i-serif
i-sans-serif
i-cursive
i-monospace
-------------------
DISPLAY CLASSES
i-left									: float, align self
i-right									: float, align self
i-center								: text-align, align text
i-left-align						: text-align, align text
i-right-align						: text-align, align text
i-justify								: ???
i-block									: block w:100%
i-circle								: borr :50%
i-hide									: display
i-show									: display block
i-show-block						: display block(sama)
i-show-inline-block			: display inline-block
i-top										: fixed
i-bottom								: fixed
i-display-container			: pure relatife (parent)
	i-display-position		: pure absolute (child)
	i-display-hover				: pure block (child)
	i-display-topleft			: absolute kiri atas
	i-display-topright		: absolute ...
	i-display-bottomleft	: absolute ...
	i-display-bottomright	: absolute ...
	i-display-left				: absolute ...
	i-display-right				: absolute ...
	i-display-middle			: absolute ...
	i-display-topmiddle		: absolute ...
	i-display-bottommiddle: absolute ...
-------------------
EFFECT CLASSES
i-opacity
i-opacity-off
i-opacity-min
i-opacity-max
i-grayscale-min
i-grayscale
i-grayscale-max
i-sepia-min
i-sepia
i-sepia-max
i-overlay
-------------------
CREATES AN OVERLAY EFFECT
*/




/* W3.CSS 4.15 December 2020 by Jan Egil and Borge Refsnes */
/*-----------------------------------------------------------------*/
/* opsional jika heigh body 100% layar*/
/*html body{ background: #e3f2fd; height: 100vh; }*/

/*opsional jika heigh body 100% layar di kurangi navbar misalnya */
/*html body{ background: #e3f2fd; height: calc(100vh - 200px ); }	 */
/*-----------------------------------------------------------------*/
html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}
/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */
html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}
article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}summary{display:list-item}
audio,canvas,progress,video{display:inline-block}progress{vertical-align:baseline}
audio:not([controls]){display:none;height:0}[hidden],template{display:none}
a{background-color:transparent}a:active,a:hover{outline-width:0}
abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}
b,strong{font-weight:bolder}dfn{font-style:italic}mark{background:#ff0;color:#000}
small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
sub{bottom:-0.25em}sup{top:-0.5em}figure{margin:1em 40px}img{border-style:none}
code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}
button,input,select,textarea,optgroup{font:inherit;margin:0}optgroup{font-weight:bold}
button,input{overflow:visible}button,select{text-transform:none}
button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}
button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}
button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}
fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}
legend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}
[type=checkbox],[type=radio]{padding:0}
[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}
[type=search]{-webkit-appearance:textfield;outline-offset:-2px}
[type=search]::-webkit-search-decoration{-webkit-appearance:none}
::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}
/* End extract */
html,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}html{overflow-x:hidden}
h1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}
.i-serif{font-family:serif}.i-sans-serif{font-family:sans-serif}.i-cursive{font-family:cursive}.i-monospace{font-family:monospace}
h1,h2,h3,h4,h5,h6{font-family:"Segoe UI",Arial,sans-serif;font-weight:400;margin:10px 0}.i-wide{letter-spacing:4px}
hr{border:0;border-top:1px solid #eee;margin:20px 0}
.i-image{max-width:100%;height:auto}img{vertical-align:middle}a{color:inherit}
.i-table,.i-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}.i-table-all{border:1px solid #ccc}
.i-bordered tr,.i-table-all tr{border-bottom:1px solid #ddd}.i-striped tbody tr:nth-child(even){background-color:#f1f1f1}
.i-table-all tr:nth-child(odd){background-color:#fff}.i-table-all tr:nth-child(even){background-color:#f1f1f1}
.i-hoverable tbody tr:hover,.i-ul.i-hoverable li:hover{background-color:#ccc}.i-centered tr th,.i-centered tr td{text-align:center}
.i-table td,.i-table th,.i-table-all td,.i-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}
.i-table th:first-child,.i-table td:first-child,.i-table-all th:first-child,.i-table-all td:first-child{padding-left:16px}
.i-btn,.i-button{border:none;display:inline-block;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}
.i-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}
.i-btn,.i-button{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}   
.i-disabled,.i-btn:disabled,.i-button:disabled{cursor:not-allowed;opacity:0.3}.i-disabled *,:disabled *{pointer-events:none}
.i-btn.i-disabled:hover,.i-btn:disabled:hover{box-shadow:none}
.i-badge,.i-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.i-badge{border-radius:50%}
.i-ul{list-style-type:none;padding:0;margin:0}.i-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.i-ul li:last-child{border-bottom:none}
.i-tooltip,.i-display-container{position:relative}.i-tooltip .i-text{display:none}.i-tooltip:hover .i-text{display:inline-block}
.i-ripple:active{opacity:0.5}.i-ripple{transition:opacity 0s}
.i-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}
.i-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}
.i-dropdown-click,.i-dropdown-hover{position:relative;display:inline-block;cursor:pointer}
.i-dropdown-hover:hover .i-dropdown-content{display:block}
.i-dropdown-hover:first-child,.i-dropdown-click:hover{background-color:#ccc;color:#000}
.i-dropdown-hover:hover > .i-button:first-child,.i-dropdown-click:hover > .i-button:first-child{background-color:#ccc;color:#000}
.i-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0;z-index:1}
.i-check,.i-radio{width:24px;height:24px;position:relative;top:6px}
.i-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}
.i-bar-block .i-dropdown-hover,.i-bar-block .i-dropdown-click{width:100%}
.i-bar-block .i-dropdown-hover .i-dropdown-content,.i-bar-block .i-dropdown-click .i-dropdown-content{min-width:100%}
.i-bar-block .i-dropdown-hover .i-button,.i-bar-block .i-dropdown-click .i-button{width:100%;text-align:left;padding:8px 16px}
.i-main,#main{transition:margin-left .4s}
.i-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}
.i-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}
.i-bar{width:100%;overflow:hidden}.i-center .i-bar{display:inline-block;width:auto}
.i-bar .i-bar-item{padding:8px 16px;float:left;width:auto;border:none;display:block;outline:0}
.i-bar .i-dropdown-hover,.i-bar .i-dropdown-click{position:static;float:left}
.i-bar .i-button{white-space:normal}
.i-bar-block .i-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;white-space:normal;float:none;outline:0}
.i-bar-block.i-center .i-bar-item{text-align:center}.i-block{display:block;width:100%}
.i-responsive{display:block;overflow-x:auto}
.i-container:after,.i-container:before,.i-panel:after,.i-panel:before,.i-row:after,.i-row:before,.i-row-padding:after,.i-row-padding:before,
.i-cell-row:before,.i-cell-row:after,.i-clear:after,.i-clear:before,.i-bar:before,.i-bar:after{content:"";display:table;clear:both}
.i-col,.i-half,.i-third,.i-twothird,.i-threequarter,.i-quarter{float:left;width:100%}
.i-col.s1{width:8.33333%}.i-col.s2{width:16.66666%}.i-col.s3{width:24.99999%}.i-col.s4{width:33.33333%}
.i-col.s5{width:41.66666%}.i-col.s6{width:49.99999%}.i-col.s7{width:58.33333%}.i-col.s8{width:66.66666%}
.i-col.s9{width:74.99999%}.i-col.s10{width:83.33333%}.i-col.s11{width:91.66666%}.i-col.s12{width:99.99999%}
@media (min-width:601px){.i-col.m1{width:8.33333%}.i-col.m2{width:16.66666%}.i-col.m3,.i-quarter{width:24.99999%}.i-col.m4,.i-third{width:33.33333%}
.i-col.m5{width:41.66666%}.i-col.m6,.i-half{width:49.99999%}.i-col.m7{width:58.33333%}.i-col.m8,.i-twothird{width:66.66666%}
.i-col.m9,.i-threequarter{width:74.99999%}.i-col.m10{width:83.33333%}.i-col.m11{width:91.66666%}.i-col.m12{width:99.99999%}}
@media (min-width:993px){.i-col.l1{width:8.33333%}.i-col.l2{width:16.66666%}.i-col.l3{width:24.99999%}.i-col.l4{width:33.33333%}
.i-col.l5{width:41.66666%}.i-col.l6{width:49.99999%}.i-col.l7{width:58.33333%}.i-col.l8{width:66.66666%}
.i-col.l9{width:74.99999%}.i-col.l10{width:83.33333%}.i-col.l11{width:91.66666%}.i-col.l12{width:99.99999%}}
.i-rest{overflow:hidden}.i-stretch{margin-left:-16px;margin-right:-16px}
.i-content,.i-auto{margin-left:auto;margin-right:auto}.i-content{max-width:980px}.i-auto{max-width:1140px}
.i-cell-row{display:table;width:100%}.i-cell{display:table-cell}
.i-cell-top{vertical-align:top}.i-cell-middle{vertical-align:middle}.i-cell-bottom{vertical-align:bottom}
.i-hide{display:none!important}.i-show-block,.i-show{display:block!important}.i-show-inline-block{display:inline-block!important}
@media (max-width:1205px){.i-auto{max-width:95%}}
@media (max-width:600px){.i-modal-content{margin:0 10px;width:auto!important}.i-modal{padding-top:30px}
.i-dropdown-hover.i-mobile .i-dropdown-content,.i-dropdown-click.i-mobile .i-dropdown-content{position:relative}	
.i-hide-small{display:none!important}.i-mobile{display:block;width:100%!important}.i-bar-item.i-mobile,.i-dropdown-hover.i-mobile,.i-dropdown-click.i-mobile{text-align:center}
.i-dropdown-hover.i-mobile,.i-dropdown-hover.i-mobile .i-btn,.i-dropdown-hover.i-mobile .i-button,.i-dropdown-click.i-mobile,.i-dropdown-click.i-mobile .i-btn,.i-dropdown-click.i-mobile .i-button{width:100%}}
@media (max-width:768px){.i-modal-content{width:500px}.i-modal{padding-top:50px}}
@media (min-width:993px){.i-modal-content{width:900px}.i-hide-large{display:none!important}.i-sidebar.i-collapse{display:block!important}}
@media (max-width:992px) and (min-width:601px){.i-hide-medium{display:none!important}}
@media (max-width:992px){.i-sidebar.i-collapse{display:none}.i-main{margin-left:0!important;margin-right:0!important}.i-auto{max-width:100%}}
.i-top,.i-bottom{position:fixed;width:100%;z-index:1}.i-top{top:0}.i-bottom{bottom:0}
.i-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}
.i-display-topleft{position:absolute;left:0;top:0}.i-display-topright{position:absolute;right:0;top:0}
.i-display-bottomleft{position:absolute;left:0;bottom:0}.i-display-bottomright{position:absolute;right:0;bottom:0}
.i-display-middle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}
.i-display-left{position:absolute;top:50%;left:0%;transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}
.i-display-right{position:absolute;top:50%;right:0%;transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}
.i-display-topmiddle{position:absolute;left:50%;top:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}
.i-display-bottommiddle{position:absolute;left:50%;bottom:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}
.i-display-container:hover .i-display-hover{display:block}.i-display-container:hover span.i-display-hover{display:inline-block}.i-display-hover{display:none}
.i-display-position{position:absolute}
.i-circle{border-radius:50%}
.i-round-small{border-radius:2px}.i-round,.i-round-medium{border-radius:4px}.i-round-large{border-radius:8px}.i-round-xlarge{border-radius:16px}.i-round-xxlarge{border-radius:32px}
.i-row-padding,.i-row-padding>.i-half,.i-row-padding>.i-third,.i-row-padding>.i-twothird,.i-row-padding>.i-threequarter,.i-row-padding>.i-quarter,.i-row-padding>.i-col{padding:0 8px}
.i-container,.i-panel{padding:0.01em 16px}.i-panel{margin-top:16px;margin-bottom:16px}
.i-code,.i-codespan{font-family:Consolas,"courier new";font-size:16px}
.i-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}
.i-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}
.i-card,.i-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}
.i-card-4,.i-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}
.i-spin{animation:i-spin 2s infinite linear}@keyframes i-spin{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}
.i-animate-fading{animation:fading 10s infinite}@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}
.i-animate-opacity{animation:opac 0.8s}@keyframes opac{from{opacity:0} to{opacity:1}}
.i-animate-top{position:relative;animation:animatetop 0.4s}@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}
.i-animate-left{position:relative;animation:animateleft 0.4s}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}
.i-animate-right{position:relative;animation:animateright 0.4s}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}
.i-animate-bottom{position:relative;animation:animatebottom 0.4s}@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}
.i-animate-zoom {animation:animatezoom 0.6s}@keyframes animatezoom{from{transform:scale(0)} to{transform:scale(1)}}
.i-animate-input{transition:width 0.4s ease-in-out}.i-animate-input:focus{width:100%!important}
.i-opacity,.i-hover-opacity:hover{opacity:0.60}.i-opacity-off,.i-hover-opacity-off:hover{opacity:1}
.i-opacity-max{opacity:0.25}.i-opacity-min{opacity:0.75}
.i-greyscale-max,.i-grayscale-max,.i-hover-greyscale:hover,.i-hover-grayscale:hover{filter:grayscale(100%)}
.i-greyscale,.i-grayscale{filter:grayscale(75%)}.i-greyscale-min,.i-grayscale-min{filter:grayscale(50%)}
.i-sepia{filter:sepia(75%)}.i-sepia-max,.i-hover-sepia:hover{filter:sepia(100%)}.i-sepia-min{filter:sepia(50%)}
.i-tiny{font-size:10px!important}.i-small{font-size:12px!important}.i-medium{font-size:15px!important}.i-large{font-size:18px!important}
.i-xlarge{font-size:24px!important}.i-xxlarge{font-size:36px!important}.i-xxxlarge{font-size:48px!important}.i-jumbo{font-size:64px!important}
.i-left-align{text-align:left!important}.i-right-align{text-align:right!important}.i-justify{text-align:justify!important}.i-center{text-align:center!important}
.i-border-0{border:0!important}.i-border{border:1px solid #ccc!important}
.i-border-top{border-top:1px solid #ccc!important}.i-border-bottom{border-bottom:1px solid #ccc!important}
.i-border-left{border-left:1px solid #ccc!important}.i-border-right{border-right:1px solid #ccc!important}
.i-topbar{border-top:6px solid #ccc!important}.i-bottombar{border-bottom:6px solid #ccc!important}
.i-leftbar{border-left:6px solid #ccc!important}.i-rightbar{border-right:6px solid #ccc!important}
.i-section,.i-code{margin-top:16px!important;margin-bottom:16px!important}
.i-margin{margin:16px!important}.i-margin-top{margin-top:16px!important}.i-margin-bottom{margin-bottom:16px!important}
.i-margin-left{margin-left:16px!important}.i-margin-right{margin-right:16px!important}
.i-padding-small{padding:4px 8px!important}.i-padding{padding:8px 16px!important}.i-padding-large{padding:12px 24px!important}
.i-padding-16{padding-top:16px!important;padding-bottom:16px!important}.i-padding-24{padding-top:24px!important;padding-bottom:24px!important}
.i-padding-32{padding-top:32px!important;padding-bottom:32px!important}.i-padding-48{padding-top:48px!important;padding-bottom:48px!important}
.i-padding-64{padding-top:64px!important;padding-bottom:64px!important}
.i-padding-top-64{padding-top:64px!important}.i-padding-top-48{padding-top:48px!important}
.i-padding-top-32{padding-top:32px!important}.i-padding-top-24{padding-top:24px!important}
.i-left{float:left!important}.i-right{float:right!important}
.i-button:hover{color:#000!important;background-color:#ccc!important}
.i-transparent,.i-hover-none:hover{background-color:transparent!important}
.i-hover-none:hover{box-shadow:none!important}

/* Colors */
.i-amber,.i-hover-amber:hover{color:#000!important;background-color:#ffc107!important}
.i-aqua,.i-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}
.i-blue,.i-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}
.i-light-blue,.i-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}
.i-brown,.i-hover-brown:hover{color:#fff!important;background-color:#795548!important}
.i-cyan,.i-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}
.i-blue-grey,.i-hover-blue-grey:hover,.i-blue-gray,.i-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}
.i-green,.i-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}
.i-light-green,.i-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}
.i-indigo,.i-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}
.i-khaki,.i-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}
.i-lime,.i-hover-lime:hover{color:#000!important;background-color:#cddc39!important}
.i-orange,.i-hover-orange:hover{color:#000!important;background-color:#ff9800!important}
.i-deep-orange,.i-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}
.i-pink,.i-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}
.i-purple,.i-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}
.i-deep-purple,.i-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}
.i-red,.i-hover-red:hover{color:#fff!important;background-color:#f44336!important}
.i-sand,.i-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}
.i-teal,.i-hover-teal:hover{color:#fff!important;background-color:#009688!important}
.i-yellow,.i-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}
.i-white,.i-hover-white:hover{color:#000!important;background-color:#fff!important}
.i-black,.i-hover-black:hover{color:#fff!important;background-color:#000!important}
.i-grey,.i-hover-grey:hover,.i-gray,.i-hover-gray:hover{color:#000!important;background-color:#9e9e9e!important}
.i-light-grey,.i-hover-light-grey:hover,.i-light-gray,.i-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}
.i-dark-grey,.i-hover-dark-grey:hover,.i-dark-gray,.i-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}
.i-pale-red,.i-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}
.i-pale-green,.i-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}
.i-pale-yellow,.i-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}
.i-pale-blue,.i-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}
.i-text-amber,.i-hover-text-amber:hover{color:#ffc107!important}
.i-text-aqua,.i-hover-text-aqua:hover{color:#00ffff!important}
.i-text-blue,.i-hover-text-blue:hover{color:#2196F3!important}
.i-text-light-blue,.i-hover-text-light-blue:hover{color:#87CEEB!important}
.i-text-brown,.i-hover-text-brown:hover{color:#795548!important}
.i-text-cyan,.i-hover-text-cyan:hover{color:#00bcd4!important}
.i-text-blue-grey,.i-hover-text-blue-grey:hover,.i-text-blue-gray,.i-hover-text-blue-gray:hover{color:#607d8b!important}
.i-text-green,.i-hover-text-green:hover{color:#4CAF50!important}
.i-text-light-green,.i-hover-text-light-green:hover{color:#8bc34a!important}
.i-text-indigo,.i-hover-text-indigo:hover{color:#3f51b5!important}
.i-text-khaki,.i-hover-text-khaki:hover{color:#b4aa50!important}
.i-text-lime,.i-hover-text-lime:hover{color:#cddc39!important}
.i-text-orange,.i-hover-text-orange:hover{color:#ff9800!important}
.i-text-deep-orange,.i-hover-text-deep-orange:hover{color:#ff5722!important}
.i-text-pink,.i-hover-text-pink:hover{color:#e91e63!important}
.i-text-purple,.i-hover-text-purple:hover{color:#9c27b0!important}
.i-text-deep-purple,.i-hover-text-deep-purple:hover{color:#673ab7!important}
.i-text-red,.i-hover-text-red:hover{color:#f44336!important}
.i-text-sand,.i-hover-text-sand:hover{color:#fdf5e6!important}
.i-text-teal,.i-hover-text-teal:hover{color:#009688!important}
.i-text-yellow,.i-hover-text-yellow:hover{color:#d2be0e!important}
.i-text-white,.i-hover-text-white:hover{color:#fff!important}
.i-text-black,.i-hover-text-black:hover{color:#000!important}
.i-text-grey,.i-hover-text-grey:hover,.i-text-gray,.i-hover-text-gray:hover{color:#757575!important}
.i-text-light-grey,.i-hover-text-light-grey:hover,.i-text-light-gray,.i-hover-text-light-gray:hover{color:#f1f1f1!important}
.i-text-dark-grey,.i-hover-text-dark-grey:hover,.i-text-dark-gray,.i-hover-text-dark-gray:hover{color:#3a3a3a!important}
.i-border-amber,.i-hover-border-amber:hover{border-color:#ffc107!important}
.i-border-aqua,.i-hover-border-aqua:hover{border-color:#00ffff!important}
.i-border-blue,.i-hover-border-blue:hover{border-color:#2196F3!important}
.i-border-light-blue,.i-hover-border-light-blue:hover{border-color:#87CEEB!important}
.i-border-brown,.i-hover-border-brown:hover{border-color:#795548!important}
.i-border-cyan,.i-hover-border-cyan:hover{border-color:#00bcd4!important}
.i-border-blue-grey,.i-hover-border-blue-grey:hover,.i-border-blue-gray,.i-hover-border-blue-gray:hover{border-color:#607d8b!important}
.i-border-green,.i-hover-border-green:hover{border-color:#4CAF50!important}
.i-border-light-green,.i-hover-border-light-green:hover{border-color:#8bc34a!important}
.i-border-indigo,.i-hover-border-indigo:hover{border-color:#3f51b5!important}
.i-border-khaki,.i-hover-border-khaki:hover{border-color:#f0e68c!important}
.i-border-lime,.i-hover-border-lime:hover{border-color:#cddc39!important}
.i-border-orange,.i-hover-border-orange:hover{border-color:#ff9800!important}
.i-border-deep-orange,.i-hover-border-deep-orange:hover{border-color:#ff5722!important}
.i-border-pink,.i-hover-border-pink:hover{border-color:#e91e63!important}
.i-border-purple,.i-hover-border-purple:hover{border-color:#9c27b0!important}
.i-border-deep-purple,.i-hover-border-deep-purple:hover{border-color:#673ab7!important}
.i-border-red,.i-hover-border-red:hover{border-color:#f44336!important}
.i-border-sand,.i-hover-border-sand:hover{border-color:#fdf5e6!important}
.i-border-teal,.i-hover-border-teal:hover{border-color:#009688!important}
.i-border-yellow,.i-hover-border-yellow:hover{border-color:#ffeb3b!important}
.i-border-white,.i-hover-border-white:hover{border-color:#fff!important}
.i-border-black,.i-hover-border-black:hover{border-color:#000!important}
.i-border-grey,.i-hover-border-grey:hover,.i-border-gray,.i-hover-border-gray:hover{border-color:#9e9e9e!important}
.i-border-light-grey,.i-hover-border-light-grey:hover,.i-border-light-gray,.i-hover-border-light-gray:hover{border-color:#f1f1f1!important}
.i-border-dark-grey,.i-hover-border-dark-grey:hover,.i-border-dark-gray,.i-hover-border-dark-gray:hover{border-color:#616161!important}
.i-border-pale-red,.i-hover-border-pale-red:hover{border-color:#ffe7e7!important}.i-border-pale-green,.i-hover-border-pale-green:hover{border-color:#e7ffe7!important}
.i-border-pale-yellow,.i-hover-border-pale-yellow:hover{border-color:#ffffcc!important}.i-border-pale-blue,.i-hover-border-pale-blue:hover{border-color:#e7ffff!important}

/* tambahan saya sendiri */
.i-card,.i-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)} /* referensi copas dr atas*/
.i-card-4,.i-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)} /* referensi copas dr atas*/
.i-card-q1{box-shadow: 0 5px 10px rgba(0,0,0, 0.1);}
/*.i-background-1{background: #e3f2fd;}*/

