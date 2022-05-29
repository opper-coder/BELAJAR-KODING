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
