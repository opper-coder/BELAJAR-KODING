GRID di PARENT
- kita memiliki banyak elemen 
- lalu kita tempatkan kedalam grid
- bisa membentuk baris
- bisa membentuk kolom
- bisa membentuk keduanya kolom dan baris seperti tabel
- bisa bersarang bisa parent berarti bisa bersarang
- lalu kita atur sedemikian rupa:

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
	: repeat(3, 1fr 2fr); 	// 3 x (1bag + 2bag) 
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
	=================================================================
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
            grid-column: 1/3;	// 1 sampai 3 garis gridlines ke kanan (sesuai garis colom repeat)
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
        "dua dua tiga tiga"					// mirip matrik / kordinat
        "dua dua empat empat"
        "lima enam . tujuh"					// titik untuk kosong
        "delapan delapan delapan sembilan"	
}
.satu{
    grid-area: satu;				// .div satu ambil tempat pada: matrik mana ... 
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




