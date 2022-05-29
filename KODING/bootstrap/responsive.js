----------------------------------------------------------------------------------------------------------
RESPONSIVE
  - karena responsive yang di atur nya adalah 'grid' 
    maka fahami dulu grid, baru responsive
  - responsive adalah class yang akan bekerja pada point yang di tentukan
  - misalnya 'grid 4 kolom' hanya akan bekerja di layar besar
  - atau gabungan 'grid 4 kolom' di layar 'besar' dan grid 3 di layar 'tablet' dan grid 2 di layar 'HP'
----------------------------------------------------------------------------------------------------------
BREAK POINT 
  - adalah tempat berlakunya properti tersebut selama di bawah breakpoint
  - terdiri dari: sm, md, lg, xl, xxl, fluid
contoh 1  
  .container.row.col-lg-3     // (12/3) akan ada col-3 yang akan ada selama display large
  .container.row.col-md-4     // (12/4) akan ada col-3 yang akan ada selama display Tablet
  .container.row.col-sm-6     // (12/6) akan ada col-3 yang akan ada selama display HP
  - tipsnya karena large terakhir maka biasanya tidak di tulis
contoh 2 
  .container
    .row
      .col-lg-4.col-md-3.col-sm-2 // ini kolom akanresponsive di 3 breakpoint sekaligus
contoh 3 
  .mt-3                       // margin top standard                      
  .mt-md-3                    // berlaku juga untuk margin top responsive
contah 4
  .m-md-2 .offset-md-3 .d-md-block .order-md-3
----------------------------------------------------------------------------------------------------------







