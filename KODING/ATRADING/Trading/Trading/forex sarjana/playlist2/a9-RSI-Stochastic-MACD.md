STOCHASTIC + RSI + MACD
----------------------------------------------------------- 
OVERVIEW:
    - tehnik ini cukup populer dan winrate tinggi
    - menggunakan Indicator Stochastik sebagai indicator utama, lalu RSI dan  MACD
    - backtest 100 kali AUD/USD TF M15 winrate 55% 
KONFIG:
    Stochastic
        - adalah indicator overbought(terbeli/atas) dan oversold(terjual/bawah)
        - terdiri dua garis: biru=K% oren=D%
        - banyak orang menggunakan entry buy saat oversold, dan sell saat overbought. 
        - tetapi cara ini memiliki winrate rendah, maka di perlukan kombinasi indikator lain:
    RSI (Relative, Strengh and weakness)
        - ini juga memiliki fungsi yang sama dengan stochastic yaitu indicator overbought dan oversold
        - karena dalam kombinasi ini perlu ubahan fungsi dan konfig, yaitu di ubah menjadi indicator trend
        - konfig:
            - RSI > tab style > uncheck=RSI-based-MA (kuning)
            - RSI-Upper-Band=ubah dari 70 ke 50
            - RSI-Lower-Band=ubah dari 30 ke 50
            - hasilnya: kita akan punya garis tengah/garis nol
        - operanya: 
            - jika harga diatas garis tengah berarti bullish/ hanya boleh untuk posisi BUY     
            - jika harga dibwah garis tengah berarti bearish/ hanya boleh untuk posisi SELL     
    MACD (Moving Average Convergence Divergence) 
        - adalah indicator Deteksi Momentum, 
        - Entry BUY : saat MACD crossover di bwah signal
        - Entry SELL: saat MACD crossover di Atas signal
        - Namun MACD hanya bekerja saat trending-market saja, dan tidak saat sideways (false signal) 
SIGNAL:
    - CHART : 
        - menunjukan trend akan naik 
    - Stochastic:
        - Tunggu garis K dan garis D menyentuh oversold
    - RSI:
        - konfirmasi pertama Pastikan RSI berada di atas garis tengah 
    - MACD:
        - konfirmasi kedua tunggu momentum MACD crossover diatas garis SIGNAL 
        - kembali melihat ke stochastic tidak sampai menyentuh atas(overbought)
    - signal BUY tinggal di balik
ENTRY:
    - jika 3 kondisi indicator terpenuhi silahkan entry 
    - SL : di swing terdekat
    - TP : 1:1,5 - 1:2 

TIPS:
    - Boleh di gabung dengan SnR 
    - sebelum setup awal selesai, jangan dulu entry lagi di pair yang sama, 
    karena satu setup bisa saja akan di tutup dengan membutuhkan waktu yang lama 
    - manage lebih dari 1 transaksi itu sulit, mungkin jika ada di pair yang berbeda (mungkin)

-----------------------------------------------------------  