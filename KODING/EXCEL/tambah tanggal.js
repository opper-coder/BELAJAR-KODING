cara menambah tanggal dengan integer biasa

- a1: 1/1/2000                                      // kolom berisi tanggal
- b1: 2                                             // kolom nerisi integer
- c1: tahun 2000 + 3 = 2003                         // kolom diisi rumus: tanggal tambah integer (tahun)
- d1: tanggal 1 + 4 = 5                             // kolom diisi rumus: tanggal tambah integer (tanggal)

rumus c1
  =date(year(a1)+3;month(a1);day(a1))               // rumus pakai =date(tambahkan integer pada tahun)
  =date(year(a1);month(a1);day(a1)+5)               // rumus pakai =date(tambahkan integer pada tahun)
  
jam juga sama
  =time(hour(a1);minute(a1)+c1;second(a1))          // tambahkan pada jam menit atau detik
