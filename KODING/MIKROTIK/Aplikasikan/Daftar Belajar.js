==================================================
Keperluan Aplikasi 
- alur login (activasi internet)
- alur refresh
- alur saldo
- alur gratis wa chat (tidak, call, VC )
==================================================
daftar yang harus di pelajari untuk standard RT/RW
--------------------------------------------------
standard 
1. keamanan
2. konfig dasar
3. burst standart
4. kencang di 3 menit pertama
5. user profil 1,2,3,4,5 mbps
6. restart scheduling mikrotik, OLT, aksespoint 3 hari sekali 
7. hapus sampah voucher berkala 2 bulan terakhir terpakai otomatis dan sudah ada pencairan
8. umur cookie 24 jam dalam user profile (kalau sudah punya sistem login sendiri maka sesuaikan dengan umur voucher aja)
9. bikin voucher di boxits. lihat pembatasan umur MAC COOKIE jg bisa di dteksi dari appnya
10. the dude
--------------------------------------------------
monitoring
- speedtest mikrotik jarak jauh
- speedtest aksespoint jarak jauh
- enable/disable mikrotik
- enable/disable aksespoint
- disable/enable OLT
- lambat 
- deteksi mati titik (lokasi)
- deteksi putus kabel (lokasi)
--------------------------------------------------
THE DUDE
- the dude server CHR
- monitoring semua mikrotik
- monitoring semua OLT
- monitoring grup wilayah pada aksespoint
- memiliki 2 CHR cadangan sebagai cadangan monitoring jika terjadi gangguan
- interval mikrotik, OLT  30 detik sekali
- interval aksespoint 1 menit sekali
- monitoring kelambatan pada jaringan akses point bukan hanya mati lampu mati jaringan
--------------------------------------------------
NETWATCH
- monitoring akses point menggunakan telegram
- melihat mati atau lambat sebuah akses point lokal
--------------------------------------------------
KOMBINASI
THE DUDE
- kelebihan:
  - the dude memiliki cara monitoring lebih lengkap dan banyak di server cloud CHR
  - bisa mementau secara masal dan grup monitoring
  - bisa di hidupkan saat di gunakan saja
  - memiliki i8nformasi yang lengkap
  - semua perangkat yang memiliki IP bisa di monitoring bahkan IoT selain mikrotik
  - memiliki datasheet informasi lengkap terhadap perangkat bersangkutan
- kekurangan:
  - harus pakai komputer
  - jika VPN terganggu maka akan terlihat seperti putus pada perangkat bersangkutan
  - membayar hosting
  - memerlukan beberapa VPN cadangan, baik untuk dedude ataupun untuk VPN perangkat
NETWHATCH
- kelebihan
  - langsung bisa di jalankan di mikrotik bersangkutan
  - tidak memerlukan vpn
  - langsung dikirim via telegram HP
  - akurat dan direct untuk informasi pertama
  - selanjutnya di periksa di the dude untuk informasi lebih lanjut
  - 
--------------------------------------------------
PRTG
  ada lagi PRTG aplikasi monitoring mikrotik alternative, cek kalau di perlukan
sniffer
  ada lagi sniffer monitoring bandwidth silahkan googling
--------------------------------------------------
BANDWIDTH TEST
  jangan lupa bisa speedtest di server secara remote
--------------------------------------------------
SETTING AKSESPOINT
- belajar mode voucher pada aksespoint dengan topology OLT
- cari cara agar kita bisa remote AP tersebut
- monitoring on/off AP
- monitoring kecepatan AP
- speed test pada mikrotik
- bikin monitoring pada AP dengan netwatch, traffic monitor, dll dan telegram yang berada di net local
- bikin monitoring pada AP pada the dude cloud
- bisa pakai zabbix atau observium atau lainya cari perbedaanya dulu












