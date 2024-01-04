OTENTIKASI EKSTERNAL
-----------------------------------------------------------
- Izinkan akses langsung ke server eksternal di walled-garden (baik berbasis HTTP, atau berbasis IP)
- Ubah halaman login servlet HotSpot untuk mengarahkan ke server otentikasi eksternal. 
- Server eksternal harus memodifikasi database RADIUS sesuai kebutuhan
- Berikut adalah contoh halaman login untuk dipasang di router HotSpot (dialihkan ke https://auth.example.com/login.php
   lihat templat halaman login cekidoc
- Server eksternal dapat login klien HotSpot dengan mengarahkannya kembali ke halaman login servlet HotSpot asli, 
- menentukan nama pengguna dan kata sandi yang benar, sekaligus mengarahkan ke halaman pilihan lainya(youtube.com)
   lihat template cekidoc
- Hotspot akan menanyakan server apakah mengizinkan login atau tidak. 
   - Jika ya, tampilkan alogin.html
   - Jika tidak, tampilkan flogin.html (atau login.html), 
     yang akan mengarahkan klien kembali ke server otentikasi eksternal.
Catatan: seperti yang ditunjukkan dalam contoh ini, protokol HTTPS dan metode POST dapat digunakan untuk mengamankan komunikasi.

LOGIN PAGE
-----------------------------------------------------------
- serverlet adalah satu paket loginpage yang dapat di edit, dalam folder hotspot, 
- yang asli jangan di ubah2 karena ini adalah redirect kembali ke native nya jika ada error 
- melainkan copy ubah, dan upload di root

ISI HALALAMAN
-----------------------------------------------------------
redirect.html        : mengalihkan pengguna ke url lain (inilah index nya)
login.html           : halaman form login username pass 
   usaername         : string
   kata sandi        : string atau hash MD5 CHAP PAP di centang saja 
   dst               : redirect ke halaman iklan jika berhasil login 
   popup             : apakah akan memunculkan jendela status saat login berhasil
md5.js               : JavaScript untuk hashing kata sandi MD5. Digunakan bersama dengan metode login http-chap
alogin.html          : halaman yang ditampilkan setelah klien login. 
                       Ini memunculkan halaman status dan mengarahkan browser ke halaman yang diminta (sebelum dia diarahkan ke halaman login HotSpot)
status.html          : halaman status
logout.html          : halaman logout, ditampilkan setelah pengguna logout. Menampilkan statistik akhir tentang sesi yang telah selesai. 
   Halaman ini mungkin menggunakan parameter tambahan berikut:
   hapus-cookie - apakah akan menghapus cookie dari server HotSpot saat logout (membuat tidak mungkin untuk masuk dengan cookie di lain waktu dari browser yang sama, mungkin berguna dalam lingkungan multipengguna)
error.html - halaman kesalahan

ISI HALALAMAN TAMBAHAN jika perlu
-----------------------------------------------------------
rlogin.html          : jika ada halaman khusus yang di perlukan relogin ulang(butuh auth lg)
rstatus.html         : jika ada halaman khusus yang tidak di temukan 
radvert.html         : iklan terjadwal bisa di perlihatkan disini
flogin.html          : pengganti login yg di sertai alert "sandi anda salah"
fstatus.html         : pengganti status yng disertai alert "anda belum login untuk akses halaman ini"
flogout.html         : pengganti logout, yg di sertai alert "anda kan belum login"

HALAMAN BOXITS
-----------------------------------------------------------
halaman boxits
-
   - login
   - reg
   - logout
- 
   - home > dan keperluan lain disini (seperti iklan dll)
   - profil 
   - status 

MODIFIKASI REQUEST
-----------------------------------------------------------
- masuk pertama      : redirect ke tampilkan halaman home boxits(baik pakai tombol, kalau bisa auto)
- aktifkan voucher   : redirect ke login sekaligus auto login (gunakan auto login one click login), tapi masuk dulu ke halaman proced
- procced            : disini boxits buatkan user, ambil data user, gunakan auto login, status: menghubungi, tunggu, redirect auto login, 
                       atau alert login gagal menghubungi server, atau login gagal, coba lagi nanti dst
- status             : tampilkan status sekaligus alert: "silahkan gunakan internet dengan bijak"
---
- daftar             : jika jalur daftar
- status             : auto status saat berhasil di tampilkan
- saat voucher       : seperti diatas yaitu
- saat aktifkan      : masuk halaman paket, lalu masuk halaman proced
- halaman paket      : perikasa saldo, mencukupi, tidak mencukupi, redirect ke proced, atau ke alert "isi dulu"
- logout             : halaman logut > status

VARIABEL
-----------------------------------------------------------
- ini bukan variabel javascript, melainkan variabel milik mikrotik
- bisa di gunakan untuk syntax if else, seperti javascript,
- ada daftar variabel yang siap di gunakan, yang berisi kalkulasi oleh mikrotik
- silahkan di gunakan langsung, atau menggunakan if else lagi, if else ada templatnya disana
- cara penggunaan bisa di tulis di dalam file.HTML di hotspot. 
- syntax $(var) atau "$(var)". ditengah sintax html seperti php gitu

ONE CLICK LOGIN CUSTOMIZATION
-----------------------------------------------------------
kita akan memodifikasi loginpage default bawaan untuk fungsi kita sendiri 
kemudian menempatkan ke folder custom, dan mengaarahkan penggunaan loginpage custom ini
- buat user pass di hotspot dengan value yg sama
- buat loginpage custom (jangan yg native: "hotspot" ) 
- letakan folder hotspot(custom) di level root (sebaiknya pakai nama baru: misal "hotspotSaya")
- ganti value dari password == user name (pakai javascript atau dari ui boxits)
- arahkan hotspot folder ke folder baru ini 
   - HTML directory: defaultnya hotspot (milik mikrotik) 
   - caranya ip/hotspot/server profiles/pilih profiles hsprof1/dblclk/HTML directories override: (halaman pengganti default )
     arahkan ke folder custom kita jika custom tidak di temukan atau error maka akan di kembalikan ke hotspot default 
   - untuk RB 750 gr3 harus menyertakan folder di root flash tidak thu kenapa, inilah yang di cari oleh ikul
   - ada mikrotik tertentu jika mengganti loginpage tinggal di copas di root hotspot saja sudah jadi
- itu saja

----- >>>>> ----- >>>>> ----- >>>>> ----- >>>>> ----- >>>>> 
CODE BOXITS CUSTOMIZE
   - copas folder hotspot bawaan > paste di root > beri nama berbeda misal: hotspotKu
   - arahkan pada html directory override : arahkan ke "hotspotKu"
   - edit hanya pada halaman login saja untuk redirect dan menerima kredential user 
   - halaman lainya biarkan apa adanya 
   - PRNYA:
      - buat halaman yang memiliki fungsi yang sama dg native tapi di terapkan pada boxits page dg menggunakan variabel yg tersedia
      - halaman status, di akses saat belum atau sesudah login, misal saat akses status boxits maka redirect ke status hotspot
         lalu status hotspon menngembalikan dengan membawa data yang diperlukan di tampilkan 
      - atau lebih baiknya tinggal tampilkan saja status hotspot apa adanya dengan memodifikasi fungsi2 yang ada di boxits 
         di customisasikan ke halaman native nya 
-----------------------------------------------------------
login page
   - copas template loginpage.html di dokumentasi (sudah ada url redirect dan script redirect() invoke)
   - sembunyikan semua elemen di halaman login 
   - tampilkan satu tombol "sambungkan" atau buat otomatis sekalian
   - cara kerja:
      - saat ada user menggunakan hotspot maka redirect.html di jalankan memenggil login.html
      - login.html otomatis redirect ke halaman boxits
      - halaman boxits memiliki data userpass, di gunakan untuk redirect ulang ke login.html
      - di halaman login.html hanya terlihat tombol "sambungkan ke internet"
      - menampilkan halamaan destination, selamat, internet sudah aktif (halaman ini belum di buat kayaknya)
-----------------------------------------------------------
redirect
   - add wallet garden untuk loginpage boxits
   - di halaman loginpage boxits menrima data post dari loginpage mikrotik, ini bisa di gunakan 
   - pada halaman login dari boxits, isikan unsur redirect template, isikan dengan user dan pass dari db boxits, boxits juga create ke mikrotik bersangkutan 
   - oya modifikasi juga halaman status, dan juga halaman refresh 
   - boxits harus tahu dari server mana login ini di minta

-----------------------------------------------------------
PR
- masih belum tahu kaitanya dengan error dan cara penangananya
- masih cari tahu bagaimana mikrotik mengenali ini permintaan dari mana
   - mungkin mengenali dari DNS, atau dari Identity 
   - variabel yang bisa dipilih:
      - identity
      - hostname
      - server-address dan dns cari tahu saja lagi lainya (kandidat identity : Banggai23 ada sistem penamaan server)

- 
----- >>>>> ----- >>>>> ----- >>>>> ----- >>>>> ----- >>>>> 
>>>>> -----------------------------------------------------------
selesai


