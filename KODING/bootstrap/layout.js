=========================================================================================================
---------------------------------------------------------------------------------------------------------
CONTAINER
- wadah grid
- container-fluid : memenuhi display
- container : ada white space sekitar 30px
- containear-<break point> > container-md : container-grid akan berlaku 100% selama berada pada break point
COLUMN
- ada 12 column di grid ini
- bisa di merger
- jika kita mau bikin 2 kolom sama lebar berarti 12/2 = 6 dan 6
- kalau beda lebar tinggal ambil bagian tiap kolom pada 12 sesuai porsi yang di inginkan
- jika mau mau maju 2 langkah pakai .offset-2 yang mengambil bagian dari 12 kolom awal
ROW
- adalah baris ini pembungkus kolom
GUTTER
- space antar grid
MARGIN
- adalah white space kanan kiri
OFFSET
- adalah kolom maju yang di matikan dari kiri
NESTED GRID
- di dalam grid boleh bikin grid lagi sebagaimana diatas(di mulai lagi dari awal)
RESPONSIVE BREAKPOINT
- adalah pemberlakuan 
nilai untuk ketiga poin itu 1-5
contoh:
  .container
      .row
          .col-6
          .col-6
contoh2:
          .col-4.offset-2.gutter-2.mb-2 

-----------------------------------------------------------------------------------------------------------------------
ALIGMENT
  - vertikal:
      .row.align-items-start      // 'start,center,end' semua div dalam row
      .col.align-self-start       // 'start,center,end' masing-masing col
  - horizontal
      .row.justify-content-start  // 'start,center,end,arround(space kanan space kiri space),between(kanan, sisa, kiri),
                                    evenly(space sama)' semua dalam row
----------------------------------------------------------------------------------------------------------------------- 
WRAPPING
saat column kedua jumlahnya melebihi 12 maka akan di tempatkan di bawah col-9, col-4  (col-4 akan di jatuhkan kebawah)
-----------------------------------------------------------------------------------------------------------------------
BREAK
  - .w-100 pada div kosong
  - hampir sama dg <br> untuk kolom grid. karena di grid <br> tidak bisa di gunakan 
      <div class="w-100"></div>
  - trik: pada dasarnya smua layar 'break' tapi tidak break saat display md(tablet)
      <div class="w-100 d-none d-md-block"></div>
-----------------------------------------------------------------------------------------------------------------------
ORDER
  - .order-3 
  - memaksa urutan kolom sesuai yang kita tentukan tidak ada batasan angka
-----------------------------------------------------------------------------------------------------------------------
OFFSET

-----------------------------------------------------------------------------------------------------------------------
MARGIN
-----------------------------------------------------------------------------------------------------------------------
STAND ALONE
-----------------------------------------------------------------------------------------------------------------------
=======================================================================================================================
GUTTER
=======================================================================================================================
UTILITIES
=======================================================================================================================
Z-INDEX

_______________________________________________________________________________________________________________________



