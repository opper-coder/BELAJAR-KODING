isi index.HTML 

1. Buat file CSS biasa yang di tampilkan pada layar browser biasa
2. Buat file CSS untuk di tampilkan pada saat print atau saat save ke PDF
3. load kedua file tesebut dalam halaman HTML secara berurutan CSS biasa, kemudian di bawahnya CSS print

    <link rel="stylesheet" href="style.css" media="all">          // pada CSS yang media all menampilkan layout ke semua screen ataupun print
    <link rel="stylesheet" href="style.css" media="screen">       // pada CSS yang media screen menampilkan layout screen saja
    <link rel="stylesheet" href="print.css" media="print">        // pada CSS yang media print menampilkan hanya ke layout print/PDF saja 
      

isi pada style.CSS
1. atur .container misal width:80%
2. ada .header dan .footer display:block
3. ada background pada container background:red

isi pada print.css > replace CSS di atas dengan ini
1. atur .container misal width:100%
2. ada .header dan .footer display:none
3. ada background pada container background:white 
