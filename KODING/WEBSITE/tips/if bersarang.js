ternyata cara menyusun if bersarang seperti ini sangat efektif coba saja

if(!true){                      // kondisi1 (semua pakai not agar mudah di jalankan)
  if(!true){                    // kondisi2
    if(!true){                  // kondisi3
        echo "satu";            // else (disini sebagai else smua kondisi)
      }else{ echo "dua";}       // aksi kondisi3
    }else{ echo "tiga";}        // aksi kondis12
  }else{echo "empat";}          // aksi kondis11
