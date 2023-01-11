GRID dan FLEX
_____________________________________________________________________
DAFTAR ISI:
	1. breakpoint		-> ukuran layar responsive
	2. container		-> dasar sistem layout
	3. align container	-> justifi horiz 
	4. gridsystem		-> 12 grid
	5. d-grid			-> display grid (opt)
	6. flex				-> representasi flex css
	7. stack			-> shorthand flex
	8. layout sendiri	-> jika mau pakai div biasa manual
	9. helpers			-> fungsionalitas penting sebelum membaca utilitas
	10. utilitas		-> represantasi kebanyakan CSS, rekomended!

BREAKPOINT
---------------------------------------
	: xs,sm,md,lg,xl, xxl, 
WADAH:
---------------------------------------
	ada tiga, untuk wadah centering,sebaiknya di gunakan untuk layout saja, 
	jika ingin bertingkat bisa tapi disarankan pakai css sendiri jika bertingkat  
	- container 		: width 100% mobile (sama dg -sm), 80% di mobile
	- container-md 		: width 100% breakpoint
	- container-fluid  	: width 100% all breakpoint
ALIGN CONTAINER
---------------------------------------
	- text-center 		: 
	- text-right 		: 
	- text-Left 		: 
GRIDSYSTEM (menggunakan sistem flex)
---------------------------------------
	- container 		: sebaiknya menggunakan container, meskipun  -fluid
	- row 				: baris(parent)
	- col 				: kolom(child), jika tak ada satuan maka akan di bagi sama meskipun lebih dari 12 
	- col-3 			: 3 dari 12 grid, jika melebihi 12(pakai satuan) maka akan di jatuh kan ke baris berikutnya
	- col-md-3 			: dengan breakpoint 100% saat md
	- col-sm-6 col-md-3 : kombinasi
	-----
	- gx-0 -> 0-5 		: kasih padding horiz 0-5 tingkat
	- gy-0 -> 0-5 		: kasih margin verti 0-5 tingkat pada saat m,enumpuk jadi verti responsive
	- g-0 -> 0-5 		: kasih padding verti horiz 0-5 tingkat sekaligus
	-----
	- row row-cols-2  	: berapun row akan di jadikan 2 kolom sisanya akan di jatuhkan kebawah, 1-12 kolom mungkin lebih 
	- row row-cols-auto : lebarnya menyesuaikan konten semua di atas lebarnya memenuhi kontainer
	- nested 			: bersarang berati mengulangi row dan col saja
	- '<div class="w-100"></div>' : sama dengan break <br> (yaitu memaksa turun ke baris berikut dalam row col bersangkutan)
	- '<div class="w-100 d-none d-md-block"></div>' : alternative <br>
	- tips  			: buatlah col tanpa breakpoint terlebih dahulu, jika diperlukan nanti baru atur breakpoint 
	-----
	- justify-content-start				: center, end, arround, between, evenly : horiz pada row
	- align-items-start, center, end 	: verti pada row
	- align-self-start, center, end		: pada col
	- offset-md-3 						: offset(desak 3 kolom ke kanan),breakpoint
	-----
	- me-auto 			: saling menjauh satu sama lain (kanan dan kiri)(benggang) pada col
	- ms-auto 			: ?????
	-----
	gap-0 0-5 			: berlaku di grid dan flex
GRID ASLI
---------------------------------------
	penjelasan ada di utility space
	grid gap-3
		g-col-6 
		g-col-6
	grid gap-0 row-gap-3
FLEX
---------------------------------------
	tanpa sitem grid row col juga bisa bikin flex seperti biasa
	- d-flex 			: jadi flex lebar 100%, mirip block
	- d-flex-inline 	: miirip inline-block
	-----
	- d-flex flex-row 				: baris 
	- d-flex flex-row-reverse 		: baris dg urutan sungsang
	- d-flex flex-column 			: kolom
	- d-flex flex-column-reverse 	: kolom sungsang
	- d-flex flex-sm-row 			: dengan responsive
	-----
	- d-flex justify-content-start 	: horiz  start, center, end, arround, between, evenly
	- d-flex align-items-start		: verti start, center, end, baseline, stretch
	- d-flex align-items-sm-start	: kedua v H bisa responsive 
	Child 
	---------------
	- align-self-start 				: pada child horiz  start, center, end, arround, between, evenly
	- align-self-start 		    	: verti child pada kolom perlakuan sama
	-----
	- flex-fill 					: pada masing child memenuhi sisa ruang di bagi rata
	- flex-sm-fill 					: responsive
	- flex-grow-1 					: salah satu child maka memenuhi sisa ruang, membiarkan yg lain sesuai kebutuhan
	-----
	- flex-grow-1 					: melebar 100% (sibling biasa)
	- flex-shrink-1 				: mengecil agar sibling 100%(w-100)
	-----
	- d-flex
		- me-auto 					: (margin-end) saya ke kiri. lainya di desak berlawanan
		- ms-auto 					: (margin-start) saya kekanan. lainya di desak berlawanan
	- d-flex flex-column
		- mb-auto 					: (margin-bottom) saya di atas, lainya kebawah
		- mt-auto					: (margin-top) saya di bawah, lainya ke atas
	wrapper
	---------------
		terkait dengan susunan jatuh ke baris berikutnya serta, order, reverse, content grup align, dll jarang
		mungkin kalau thubnail galery perlu, sorting dll

STACK (INSTANCE FLEX)
---------------------------------------
flex versi lebih singkat tapi kalau blm biasa pakai saja flex 
	- vstack 						: = flex-column, width 100%
	- gap-3 						: = margin verti
	- hstack  						: = flex-row, kasih gap seperti margin horiz
		- ms-auto 					: = margin right auto
	- vstack gap-2 col-md-5 mx-auto : contoh vertical kombi dg col dan margin auto

TANPA SISTEM GRID DAN ROW COL
---------------------------------------
jika manual maka perhatikan
	- display, position
	- float, clearfix
	- object-fix
	- vertical align
	- text align
	- sizing
	- overflow 

HELPERS
---------------------------------------
Clearfix		-> container float agar tidak merusak tatanan, lihat:: float
Color & background	-> test-bg-primary. gabungan background dan color (alternatif)
Colored links	-> link-primary. warna pada <a> kombinasikan dengan :: text
Position		-> instant position -> fixed-top, fixed-bottom, sticky-top, sticky-bottom, responsive
Ratio			-> kotak foto dan video 4:3, 16:9 dll (wajib) kombi dengan :: object-fit
Stacks			-> penanganan flex lebih instance. adapembahasan tersendiri :: stack (instance flex)
Stretched link	-> link untuk satu block card atau satu organisme jadi link. tapi ada persayaratan :: cekidoc
Text truncation	-> ellipsis ... (kepanjangan kata di potong dengan "...")
Vertical rule	-> karaketer pipe | : warna inherit, dan setel ketinggian, mirip <hr> jadi: <hr>,<vr>,<br> mirip tapi pake class ya
Visually hidden	-> untuk keperluan screen-reader bagi tuna netra


UTILITAS (representasi css)
- kadang satu class hanya satu properti
kalau mau bikin elemen silahkan gunakan utilitas dulu kalau tidak ada barulah dikin css sendiri
hal ini, menghindari css berulang yang mengakibatkan css membengkak
---------------------------------------
api				-> untuk sass
background		-> warna, opacity, termasuk warna text
colors			-> warna, opacity, 
borders			-> sisi, tebal, warna, round, tambah, hapus,
display			-> d-none: block, inline, flex, grid dll. jg responsive, kombinasi responsive, 
flex			-> ada di atas
float			-> tidak bisa di flex, row col, float-start, end, none, float-md-start
					- usahakan untuk implementasi float, bungkus dengan <div class="bg-info clearfix">.float-right</div> //
interactions	-> selectable, unselectable, select all untuk text. 
object fit		-> untuk foto dan video, agar fit,zoom,fit height, fit width, sesuaikan dg container
opacity			-> 25,50,75,100
overflow		-> x, y, auto, hidden, scroll, visible
position		-> position-static,relative,absolute,fixed,sticky
					- top, bottom, left, right 
					- middle
					- contoh: notifikasi, tooltip, point of progress
shadows			-> shadow, -none, -lg, -sm
sizing			-> lebar, tinggi, fullheight, fullwidth, non grid, flex
					- default auto
					- w-25, 50, 75, 100 : lebar % relatif ke container manapun
					- h-25,50,75,100 untuk height
					- mw-100 : max-width:100%, mh-100 : max-height:100%
					- min-vw-100: Min-width 100 vw
					- min-vh-100: Min-height 100 vh
					- vw-100: Width 100 vw
					- vh-100: Height 100 vh
spacing			-> margin, padding
					- m, p : 0 - 5, auto
					- mt, b, s, e, x, y, mx-auto
					- mt-n1 : margin negative, padding tidak bisa negative
text			-> 
					- perataan horiz, kerapatan baris, 
					- wrap, nowrap, word-break, 
					- case, font-size, h1-h6
					- font-weight, font-style, monospace
					- text-decoration
					- link, muted, reset,
					- ellipsis ada di :: truncate-text
vertical align	-> 
					- text pada: inline, inline-block, inline-table, dan sel tabel.
					- .align-baseline, .align-top, .align-middle, .align-bottom, .align-text-bottom, dan .align-text-top

visibility		-> .visible, .invisible
z-index			-> ini bukan bootstap elemen tapi coba gunakan jika diperlukan
					- z-0 - 5
					- z-n0 -n5
======================================================================
