RESPONSIVE
---------------------------------------------------------------------
responsive vs adaptive
- responsive adalah semua tampilan di mobile otomatis 100% saat mobile 
- adaptive adalah kita memiliki desain sendiri saat mobile menggunakan
- keduanya menggunakan @media(breakpoint){css}

---------------------------------------------------------------------
pada HTML wajib ada metatag ini
<meta name="viewport" content="width=device-width, initial-scale=1">

---------------------------------------------------------------------
ada dua tahap saat membuat website responsive:
1. saat mendesain 
2. saat membuat

- saat mendesain maka mobile first, yaitu dahulukan desain untuk mobile, setelah optimal maka lanjutkan ke desktop
- saat membuat kebalikanya
	0. desain kelompok informasi yang dapat dimpailkan w-full
	1. buat semua element di desktop
	2. .w-full, width 100% semua di mobile
	3. .hidden, responsive
	4. .state, .toggle, .action
	5. .jika adaptive juga silahkan terapkan pada step:5

adaptive
---------------------------------------------------------------------