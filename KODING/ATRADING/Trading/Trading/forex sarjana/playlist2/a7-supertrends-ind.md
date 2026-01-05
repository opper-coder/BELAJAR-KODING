SUPERTRENDS INDICATOR
----------------------------------------------------------- 
OVERVIEW:
    - Indicator SUPERTREND (by Kivanc Ozbilgiz) di klaim memiliki winrate tinggi 
    - winrate 55% dengan RR 1:1,5 - 1:2 di market GOLD
    - SUPERTREND adalah Indicator follow trend Overlay mirip dengan MOVING AVERAGE
        dan langsung bereaksi terhadap perubahan trend
    - jika indicator hijau di bawah candle maka Bullish
    - jika indicator merah di atas candle maka Bearish
    - dia juga memberikan signal BUY / SELL

KONFIG:
    - buka dua indicator Supertrend 
    - set1 > ATR-period=10 > ATR-multiplyer=3 warna default
    - set2 > ATR-period=20 > ATR-multiplyer=5 ubah warna (3 hijau tua dan 3 ungu tua)

SIGNAL:
    - dapat kan signal BUY dari ATR-10 
    - konfirmasi signal BUY dari ATR-20
    - urutanya wajib ATR-10 muncul, baru diikuti ATR-20 Segera, atau bersamaan juga bagus 

ENTRY:
    - SL di swing low terdekat 
    - TP 1:1,5 atau 1:2 
    - lakukan single entry jika masih hanging, jangan buru-buru posisi baru jika ada posisi baru  yang searah meskipun valid (Tunggu Close dulu)
    - jika ada pergerakan sangat tajam(candle panjang), sabar dulu, karana biasanya akan ada pullback(hanya cambukan saja) 

-----------------------------------------------------------
SKENARIO 2

OVERVIEW:
    - Skenario 2 mencoba untuk melakukan improve dari winrate di atas
    - Menambahkan Indicator HVI dan QQE MOD
    - Tujuanya adalah untuk mengidentifikasi trend continuation agar lebih baik
KONFIG:
    - Hapus supertrend ATR-10
    - Tambahkan Indicator: HVI (by LazyBear)
        - divisor= ubah dari 3,6 jadi 1,5 > hasilnya warna histogram menjadi berkurang
    - Tambahkan Indicator: QQE MOD (by Mihkel00)
        - tab style > QQE line= uncheck
SIGNAL:
    - Saat Super trend sudah menunjukkan bearish (BUY)
    - tunggu QQE saat menunjukan warna MERAH pertma kali  
    - Di HVI juga menujukan warna MERAH
    - begitu juga saat bullish
    - ringkasan: saat PERTAMA kali SIGNAL ketiganya menunjukan trend yang sama
ENTRY:
    - saat signal tercapai
    - SL: swing terdekat
    - TP: 1:1,5 atau 1:2 tergantung irama sebelumnya pakai multiframe dan SnR dan key level

TIPS:
    - saat sideways histogram HVI abu2 ini signal yang terbaca yaitu hindari sideways
    - tidak semua 3 indicator tersebut koheren maka tunggu golden signal
    - winrate sepertinya meningkat menjadi 66%, di TF 15 menit
    - cara mengubah time zone
        - ubah waktu di bagian kanan bawah ke WIT (+8)
        - indicator timezone ()
            - input= start - stop yang di inginkan
        - ini berguna saat anda memanajemen waktu, jangan sampai overtime
        - back test lakukan di zonawaktu anda saja 
