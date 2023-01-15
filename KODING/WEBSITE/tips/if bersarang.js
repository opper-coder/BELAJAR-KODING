ternyata cara menyusun if bersarang seperti ini sangat efektif coba saja

if(!true){                      // kondisi1 (semua pakai not agar mudah di jalankan)
  if(!true){                    // kondisi2
    if(!true){                  // kondisi3
        echo "kondisi else";            // else (disini sebagai else smua kondisi)
      }else{ echo "kondisi3";}       // aksi kondisi3
    }else{ echo "kondisi2";}        // aksi kondis12
  }else{echo "kondisi1";}          // aksi kondis11
