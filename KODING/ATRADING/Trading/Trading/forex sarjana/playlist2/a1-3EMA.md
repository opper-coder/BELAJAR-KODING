TEHNIK-1 3EMA (25, 50, 100) 
===============================
Config:
- search indicator: 3EMA, ubah pengaturan jadi 25, 50, 100
- TF 5 menit 
---------
Steps:
1. tentukan arah trend
    - 3 garis harus menuju arah yang sama 
    - arah harus bullish atau bearish, (jangan konsolidasi)
    - 3 garis harus terpisah (tidak menyilang, tidak saling berpotongan )
    - posisi candle sepenuhnya diatas/di bawah EMA-25
2. signal posisi entry
    - perhatikan pullback (perubahan arah)
    - jika pullback menembus di bawah EMA-25 atau EMA-50 (jangan sampai menyentuh EMA-100)
    - tunggu balik arah lagi sampai melewati EMA-25 (bila perlu ada engulfing)
    - engulfing adalah: ekor candle1 di lewati body candle2, 
    atau candle1(beserta ekor) tertutupi sepenuhnya oleh body candle2 
3. Entry
    - SL di bodi candle terbawah atau boleh di EMA-50
    - Entri di posisi engulfing saat ini (karena sudah engulfing)
    - SLTP 1:2
---------
TEHNIK-2 EMA-200, RSI, ENGULFING
===============================
Config:
- search indicator: EMA, ubah ke 200
- search indicator: ENGULFING BEARISH, input detect-trend: no detect
- search indicator: RSI, ubah style ke 50, 50, 50 di 3 kolom (maka RSI menjadi 1 garis di tengah)
- TF 1 menit
---------
Steps:
1. harga (semua candle) berada di atas EMA-200
2. RSI berada di atas 50
3. semua bullish engulfing meskipun banyak, boleh posisi BUY
4. ENTRY:
    - Entry di posisi saat ini
    - SL di ekor terbawah bullish engulfing
    - TP 1:2
5. saat trend bearish tinggal di balik saja

TIPS
1.  - saat scalping biasanya mendapatkan banyak signal, 
    + sikap tidak perlu ambil semua, melainkan sesuai target harian (4-5 entry per session)
    * karena ini termasuk manajemen handling sulit jika terlalu banyak
2.  - jangan terlalu banyak meresikokan modal 
    + saran 0,5% - 1% saja 
3.  - Tahu kapan beristirahat  
    + biasanya saat scalping berjam2 kalau tidak berhenti malah kecapean dan hilang fokus dan produktifitas
    * tidak perlu takut ketinggalan karena kesempatan akan datang terus-menerus
4.  - Pilih broker sepread rendah atau zero spread
    + karena spread di hitung sacara pips sehingga dalam scalping pips itu sangat berarti, sehingga sulit untuk profit
5.  - Fokus 1 pair mata uang
    + karena scalping kita sering mendapatkan signal, tidak perlu khawatir kehilangan signal di pair lain 
6. BACTEST 100x 
7. gabungkan dengan tehnik wyckOff di bawah nanti ya

TEHNIK-3 Pullback + 3-EMA (UPDATE)
===============================
OVERVIEW:
    - kali kita coba di market saham 
    - karakteristik dan keunikan :
        - Tidak 24 jam melainkan ada jam kantor Bursa Effect negara dimana perusahaan bertempat 
        - trend terlihat jelas di TF rendah bagus untuk trader
        - trend terlihat jelas juga di TF tinggi bagus untuk Investor
        - tidak ada/jarang ada Noice oleh market-maker 
        - Data biasanya FIX sehingga harga terlihat sama pada semua broker
KONFIG:
    STRATEGI1 Pullback 3-EMA
    - indicator EMA (by Default TV). buka 3 kali
    - set length=21, 50, 100. dan ubah warna sesuai selera
    cara kerja:
    - jika EMA-21 dan EMA-50 diatas EMA-100 secara berurutan, maka BULLISH, maka hanya FOKUS ke posisi BUY  
    - demikian halnya sebaliknya maka BEARISH
    - Hindari market sideway, dimana satu sama lain saling Crossover
SIGNAL:
    - Saat kondisi di atas terpenuhi 
    - Tunggu momentum ada imbalan(gejolak signifikan) 
    - dan pullback(gelombang balasan sudah terjadi/validasi ) sampai melewati di atas EMA-21
    - maka sudah saatnya entry 
ENTRY:
    - SL di swing terdekat
    - TP 1:1,5 - 1:2
TIPS:

TEHNIK-4 3-EMA + PRICE ACTION (UPDATE) 
===============================
OVERVIEW:
    - saat harga menyentuh zona PULLBACK, tunggu apakah ada MOMENT
    - PULLBACK bisa berbentuk:
        - SnR
        - KeyValue
        - Swing terdekat
        - Fibonacci 
        - dll sesuai teknis yang di pakai
    - MOMENT bisa berbentuk
        - engulfing 
        - head and shoulders
        - double top
        - dll
KONFIG:
    - 
SIGNAL:
ENTRY:
TIPS:


video 12 menit 8 yang ini belum selesai

================================== 
EMA-50 EMA-200 + STRONG ENGULFING

OVERVIEW
    - sebenarnya ada kemiripan saja 
    - pakai EMA-21, EMA-50 atau
    - pakai EMA-50, EMA-200 
    - hanya saja EMA-21, EMA-200 maka peluang lebih "sering" tapi lebih banyak noise (fake signal) juga 

BEHAVIOUR
    - BULLISH = EMA-21 diatas EMA-50
    - BEARISH = EMA-21 diatas EMA-50
    - STRONG-ENGULFING = cari strong bullish engulfing (2 candle berlawanan yang di tutup sempurna oleh candle terakhir)
    - TF Base = saat ada strong engulfing, gambar kotak dari ekor candle1 sampai close body nya
    - TF Kecil = dari kotak tadi buat lagi "beberapa" kotak di candle puncak pada Order-block (key-value), 
        - edit kotak pertama tadi ke harga tertinggi di TF kecil tadi
ENTRY
    - saat harga sudah menyentuh ORDER BLOCK di TF kecil dan membentuk strong engulfing
    - SL: swing terdekat
    - TP: jangan terlalu jauh mengambil TP karena trading ini tidak memperhatikan market struktur di TF-base 
        melainkan memenfaatkan reaksi pasar terhadap ORDER-BLOCK kisaran 1:1,5 sampai 1:2 lah begitu

Yang ini video 13 jika mau main pakai candle cocok saja,
karena di video ini memainkan engulfing yang bervariasi 
tetapi tidak tahu apakah ini memiliki winrate yang baik 
cukup untuk mempertajam analisa kita terhadap engulfing saja 
mungkin ini saya sebut "trading mikro" lah gitu 
