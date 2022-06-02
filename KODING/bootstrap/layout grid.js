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
  - memaksa urutan kolom sesuai yang kita tentukan tidak ada batasan angka
  - lebih tinggi lebih dulu misal 5 lebih atas dari 1
  - .order-3,order-first,order-last,order-30
-----------------------------------------------------------------------------------------------------------------------
OFFSET
  - menggeser kolom grid kekanan sesuai jumlah langkah 
  - bisa di terapkan di semua kolom manapun dalam grid
  - .offset-2, offset-md-1

-----------------------------------------------------------------------------------------------------------------------
MARGIN
-----------------------------------------------------------------------------------------------------------------------
STAND ALONE
-----------------------------------------------------------------------------------------------------------------------
=======================================================================================================================
GUTTER
- adalah gab antara grid nilai 1-5
.g-2    // xy sama ukuran
.g-0    // tidak ada gap tanpa g-0 masih ada gap rupanya
.gx-2   // gx berjalan normal tapi container harus memiliki .overflow-hidden atau px-4
.gy-2   // gy tetap ada gap pada x nya sulit untuk di kontrol
.row-cols-2.row-cols-lg-5.g-2.g-lg-3">
tips
jika mau bikin gap pakai saja .g-0-1 dan kombinasikan dengan .mx- .my-
-----------------------------------------------------------------------------------------------------------------------
gap grid
.gap-3  : 0-5, auto
=======================================================================================================================
UTILITIES
Untuk seluler responsif, Bootstrap menyertakan class untuk
menampilkan, hidden, menyelaraskan, dan mengatur jarak konten.
- mengubah display ada di utilitas display. blok, hidden, termasuk flex, dan break point
- di utility display juga termasuk spasi gap dan visibilitas
=======================================================================================================================
Z-INDEX
tumpukan elemen pakai saja manual z-index:10;
_______________________________________________________________________________________________________________________



