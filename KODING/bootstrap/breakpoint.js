----------------------------------------------------------------------------------------------------------
BREAK POINT
- adalah titik point pada kelebaran layar 
- modal awal untuk responsif
- setting pada titik point tersebut untuk maksimal responsif
- tips: bikin target tampilan misalnya 3 tampilan berbeda 
  </> sm, md, lg, xl, xxl
----------------------------------------------------------------------------------------------------------
CONTAINER
- wadah utama operasi grid sistem dan layout lainya
- bisa bersarang tapi sebaiknya tidak
- ada 3 jenis
  - container = tempat grid sistem
  - container-fluid  = full layar bisa grid system
  - container-sm dst = akan responsif dengan breaaak point
- jika kita akan membuat layar responsif maka kita gunakan container-<brekapoint> 
  - artinya konten akan 100% lebarnya memenuhi layar jika kekecilan layar berada di bawah breka point
  - prakteknya tata jajar ke kanan sampai kekecilan break poin. maka akan ke bawah
  - </>
    <div class="container-sm">100% wide until small breakpoint</div>
    <div class="container-md">100% wide until medium breakpoint</div>
    <div class="container-lg">100% wide until large breakpoint</div>
    <div class="container-xl">100% wide until extra large breakpoint</div>
    <div class="container-xxl">100% wide until extra extra large breakpoint</div>
----------------------------------------------------------------------------------------------------------
RESPONSIVE
  - adalah class yang akan bekerja pada point yang di tentukan
  - misalnya 'grid 4 kolom' hanya akan bekerja di layar besar
  - atau gabungan 'grid 4 kolom' di layar 'besar' dan grid 3 di layar 'tablet' dan grid 2 di layar 'HP'
contoh 1  
  .container.row.col-lg-3     // (12/3)
  .container.row.col-md-4     // (12/4)ini berlaku di medium
  .container.row.col-sm-6     // (12/6)ini berlaku di hp
contoh 2 
  .container
    .row
      .col-lg-4.col-md-3.col-sm-2 // ini kolom akanresponsive di 3 breakpoint sekaligus
contoh 3 
  .mt-3                       // margin top standard                      
  .mt-md-3                    // berlaku juga untuk margin top responsive
contah 4
  .m .offset .














