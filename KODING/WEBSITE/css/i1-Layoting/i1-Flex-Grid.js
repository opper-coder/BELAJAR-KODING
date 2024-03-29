=====================================================================
FLEX di PARENT
=====================================================================
- Flex itu hanya mengatur satu baris atau satu kolom saja ya
- kita punya beberapa elemen. lalu penempatanya kita "perangkap" dalam flex
- sehingga kita bisa mengatur space, float, dalam baris baik vertical maupun horizontal
- saat 'flex-direction: row' maka justify-content & align-items berlaku 
  normal, tapi pada saat : column maka aturanya akan mengikuti arah 
  sehingga efeknya akan kelihatan terbalik jadi ikuti saja aturan yang 
  berlaku pada row namun mengarah vertikal kebawah 
- default otomatis memenuhi blok horizontal
- default tinggi kedorong contain
- float: right tidak berlaku pada child gantinya margin-left:auto
- float: pada parent akan merusak kelebaran auto/dafault
- min-width ????? sepertinya ada isyu cari pada latihan pertama
---------------------------------------------------------------------
highlight:
1. kolom dan baris
2. wrap nowrap
3. alignment
   a. child action
4. order (mungkin ada karena tidak termasuk di dok ini)
---------------------------------------------------------------------
UTILITY
---------------------------------------------------------------------
	{ display: flex; } 
	{ flex-wrap: wrap, nowrap; }
KOLOM
---------------------------------------------------------------------
	{ flex-direction: column, row; column-reverse; row-reverse }
ALIGNMEN dan FLOAT
---------------------------------------------------------------------
perataan horizontal dalam baris
	{ justify-content: flex-start, center, flex-end, 
	  space-between, space-around, unset; }	// berlaku smua child/content
perataan vertikal dalam baris
	{ align-items: stretch, flex-start, center, flex-end, 
	  unset=stretch=default; }
	{ text-align: left, center, right ; } 
	{ margin-left: auto; }
	{ float: left} berlaku tapi merusak lebar default(memenuhi container)
	
	UKURAN CHILD / di ISI
---------------------------------------------------------------------	
		{ flex: 1 - 12 sesuai framework, tidak ada batasan sebenarnya; }
		{ width: 30%; }
		{ width: 50px; }
		{ order: 1 - tak terbatas; } 	// urutan dalam tampil bisa diatur 
	CHILD ALIGNMEN pada CHILD/ di ISI
---------------------------------------------------------------------
		{ text-align: left, center, right ; }
		{ justify-self: flex-end  } 	// dorong kekiri tidak berlaku, gantinya: >
		{ margin-left: auto; }		// top, bottom, right. alternatifnya: >
		{ align-self: flex-end }  	// ini berlaku
_____________________________________________________________________
GRID DI BAWAH -->













=====================================================================
GRID di PARENT
=====================================================================
- kita memiliki banyak elemen 
- lalu kita tempatkan kedalam grid
- bisa membentuk baris
- bisa membentuk kolom
- bisa membentuk keduanya kolom dan baris seperti tabel
- bisa bersarang bisa parent berarti bisa bersarang
- lalu kita atur sedemikian rupa:
---------------------------------------------------------------------
highlight:
sebelum buat ketiganya buat dulu templat jumlah kolom misalnya 4 kolom
1. dasar ambil porsi dasar dengan : 1fr
2. porsi dengan peta : 1/3 bisa dibuat saling bertumpuk overflow
3. matrix : buatkan peta 2d lalu terapkan
4. order(mungkin ada karena tidak termasuk di dok ini)
---------------------------------------------------------------------
Responsive:
bikin dua atau tiga layout dan tempatkan masing2 pada medianya
pakai dua atau tiga @media 
---------------------------------------------------------------------
UTILITY
---------------------------------------------------------------------
	{ display: grid; }		// aktifkan grid
	{ grid-gap: 1em; }		// gap dengan satuan em cari lainya. 1em = 16px
	{ grid-row-gap: 1em; }	
	{ grid-column-gap: 4px; }

UKURAN / PORSI
---------------------------------------------------------------------
lebar kolom
	{ grid-template-columns: 50% 25% 25%; } // 3 kolom wrap dengan lebar tersebut
	: 1fr 1fr 1fr; 			// 3 kolom wrap dengan lebar masing2 1bagian
	: 2fr 1fr 1fr;			// 3 kolom dg lebar 2:1:1 bagian
	: repeat(3, 1fr);		// 3 kali 1 bagian
	: repeat(3, 1fr 2fr); 		// 3 x (1bag + 2bag) 
 	: 100px, 1fr, 1fr		// fix:1bag:1bag
Tinggi Kolom/baris
	{ grid-auto-rows: minmax(100px, auto); } 
					// minimal 100px, Max sesuai content
					// grid-auto-column tidak ada karena sudah cukup
ALIGN dan JUSTIFY PARENT
---------------------------------------------------------------------
berlaku bagi semua item
	{ justify-items: stretch; } : start, center, end, stretch = horizontal
	{ align-items: start; } : start, center, end, stretch = vertical

	GRID CHILD
	-----------------------------------------------------------------
	berlaku hanya yang bersangkutan bisa kombinasi dg parent
		{ justify-self : start }  : start, center, end, stretch = horizontal
		{ align-self : start }  : start, center, end, stretch = vertical
	GAMBAR GRID MANUAL
	-----------------------------------------------------------------
	- tidak harus urut
	- buat dulu garis kolom hitung mulai 1 bukan 0 di mulai garis pertama dari tepi kiri dan atas
	- kurang jelas lihat contoh grid4
	  pada parent: 
	grid-template-columns: repeat(1fr 1fr 1fr 1fr);	
	  pada child:
	.satu{
            grid-column: 1/3;		// 1 sampai 3 garis gridlines ke kanan (sesuai garis colom repeat)
            grid-row: 1/3;		// 1 sampai 3 ke bawah
        }
        .dua{
            grid-column: 3;
            grid-row: 1/3;
        }
        .tiga{
            grid-column:2/4;
            grid-row: 3;
        }
        .empat{
            grid-column:1;
            grid-row: 2/4;
        }

    PEMETAAN PENEMPATAN PADA GRID YANG DISEDIAKAN 
    -----------------------------------------------------------------
    bikin grid pada parent
.container{
    grid-template-columns: repeat(1fr 1fr 1fr 1fr);	// bikin 4 grid
    grid-template-areas: 
        "satu satu satu satu"				// deklarasi kan tempat pada 4 grid
        "dua dua tiga tiga"				// mirip matrik / kordinat
        "dua dua empat empat"
        "lima enam . tujuh"				// titik untuk kosong
        "delapan delapan delapan sembilan"	
}
.satu{
    grid-area: satu;					// .div satu ambil tempat pada: matrik mana ... 
}
.dua{
    grid-area: dua;
}
.tiga{
    grid-area: tiga;
}
.empat{
    grid-area: empat;
}
.lima{
    grid-area: lima;
}
.enam{
    grid-area: enam;
}
.tujuh{
    grid-area: tujuh;
}
.delapan{
    grid-area: delapan;
}
.sembilan{
    grid-area: sembilan;
}        
_____________________________________________________________________



