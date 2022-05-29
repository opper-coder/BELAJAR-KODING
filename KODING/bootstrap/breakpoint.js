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
