FLEX di PARENT
- Flex itu hanya mengatur satu baris atau satu kolom saja ya
- jadi pada saat kolom coba justify-content dan align-items
- saat 'flex-direction: row' maka justify-content & align-items berlaku 
  normal, tapi pada saat : column maka aturanya akan mengikuti arah 
  sehingga efeknya akan kelihatan terbalik jadi ikuti saja aturan yang 
  berlaku pada row namun mengarah vertikal kebawah 
- default otomatis memenuhi blok horizontal
- default tinggi kedorong contain
- float: right tidak berlaku pada child
- float: pada parent akan merusak kelebaran auto/dafault
- margin auto ?????

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


