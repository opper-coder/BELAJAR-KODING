-----------------------------------------------------------------
BIKIN HOTSPOT SERVICE


-----------------------------------------------------------------
user profile
  tab profile > add
    name: nama profile
    address pool: default none segmen hotspot
    session timeout: default none 
      (
        jatah waktu sekali login, waktu habis akan logout, tapi uptime masih, berarti boleh login lagi 
        kalau "uptime"  di user: total login boleh dicicil sampai besok 
        saran gak ush diisi, kalau di isi samakan saja dengan jumlah uptime atau lebihkan 10 menit lah
      )
    idle timeout: defdault none (saat gak ada traffic logout, supya nggak menghabiskan uptime)
    keep alive: default none (saat gak terkoneksi maka logout, saat diluar jaringan)
    status auto refresh: 1 menit (itu untuk mengupdate halaman status di status.php halaman login page status)
    shared: 1 (jumlah perangkat yg bisa pakai profile ini)
    rate limit: (queue limit bandwith untuk profile ini) 
          1m : berarti nilai upload dan download 
          1m/2m: u/d
          // 1m/2m 10m/10m 1m/1m 40 : u/d limitAt up/dn time
    adresslist: none (ini di gunakan untuk pengelompokan IP tertentu yang menggunakan, ini terkait dengan filter)
    
-----------------------------------------------------------------
user
  name: 
  pass: 
  profile:
  tab limit
    uptime: total waktu  (ini batasan utama pada voucher)
    byte: total bandwidth data (ini batasan jika berbnasis data)
-----------------------------------------------------------------
user loghin by mac
  pada server profile > hsprof1 > 
    login by mac:true
    mac auth mode: mac as name pass 
      - jika mac itu di samakan dengan name dan password, tapi jika password tetap aktif maka bisa di pilih
      - untuk pelanggan auto login tanpa 
      - ini mungkin yang di gunakan untuk login nantinya tanpa username password
-----------------------------------------------------------------
server profile
  dblclk
    login by:
      MAC: false (kalau mau ada binding mac kita hidupkan ini boleh)
      HTTP CHAP: true
      HTTP PAP: true
      MAC cookie: false (kalau mau cek mac saat login ya hidupkan tapi kalau pakai mac acak bisa merepotkan)
      cookie: true (ini agar bisa login dengan menyimpan usernamea password saat login)
-----------------------------------------------------------------      
