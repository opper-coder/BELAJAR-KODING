/* REST API MIKROTIK 

DAFTAR ISI
-----------------------------------------------------------
   1. MIKROTIK
      - aktifkan service www-ssl
      - mikrotik memiliki IP public
      - mikrotik memiliki domain
      - mikrotik memiliki ssl certificate
      - renew ssl (karena berlaku 90 hari maka, harus ada script memperbarui ssl)
   2. REST API CLIENT
      - client boleh pakai browser (hanya untuk read aja)
      - client yang layak pakai seperti postman atau pakai plugin di vscode
      - auth pakai basic auth 
      - client bisa pakai nodejs, postman, guzzle, fetch(), dll 

aktivasi www-ssl
-----------------------------------------------------------
   ip/services/
      enable layanan
      ssl: true 
      certificate: arahkan ke certificate ke layanan ssl yg kita miliki dari lets encrypt nanti di bawah

ip public
-----------------------------------------------------------
router yang kita miliki harus memiliki ip public ada dua pilihan yang bisa dilakukan:
   1. sewa ddns
      sewa ddns berkualitas, karena ada beberapa keperluan yang penting, maka harus memiliki syarat
      - memiliki domain (ada) 
      - memiliki ip public (ada)
      - memiliki keamanan seperti certificate, ipsec, tunnel dll
      keperluan:
         - remote winbox
         - remote the dude
         - speedtest
         - REST Http
   2. VPS
      install CHR di VPS, agar bisa melakukan
      - generate VPN
      - domain menggunakan ip cloud mikrotik
      - speedtest 
      - REST Http 

LETS ENCRYPT ROS v 7+
-------------------------------------------------------------
- SSL adalah protokol jaringan yang menggunakan encrypsi
- SSL akan membentuk channel server client secara aman (data di distribusikan terencrypsi)
- SSL bisa berjalan membutuhkan Certificate 
- tandanya ada gambar gembok pada url browser
- penggunaan bisa untuk:
   - webfig port 443, 80
   - login page
   - REST API MIKROTIK
- syarat:
   - router memiliki IP Public: baik di interface, VPN, port Forwarding, dll
   - ROS versi 7 keatas
   - Nama domain.(bukan IP langsung), 
     - jika kita tidak punya domain, bisa menggunakan IP CLOUD di mikrotik  
     - ip/cloud > DDNS:true > apply > dapatkan domain dari mikrotik cloud (jk memiliki IP cloud maka kita di kasih domain oleh mikrotik berdasarkan perangkat)
     - dnschecker.org > paste dns dr IP cloud mikrotik tadi di kolom > search > response: 
       jika ada server dan pointing ke IP kita berarti berhasil 
   - jika sudah memiliki IP publik dan domain kita langsung bisa request ke letsencryp ke server nya di terminal
-----
   request let's enscrypt di terminal:
   - new terminal
   - :> certificate/enable-ssl-certificate dns-name=[isi dengan dns mikrotik tadi]
     :> enter > terlihat process validasi sampai terlihat success
   - cek berhasil di:
      - sistem/certificate ada row baru > dblclk > terlihat detil properties ssl nya 
      - di properties terlihat masa aktif 90 hari > 
      - jika sudah habis bisa menggunakan cara di atas kembali atau menggunakan cara scheduler(di citraweb.com ada scriptnya)  
      - coba akses domain name > jika ada gambar gembok berarti bisa > atau bisa juga di ssl checker
      - googling ssl checker > pilih ssl-shopper.com/ssl-checker.html > klik check
   - implementasi:
      - webfig:
         - ip/service/www-ssl > arahkan certicate ke yang kita buat tadi di sistem
      - api-ssl
         - ip/service/api-ssl > arahkan certicate ke yang kita buat tadi di sistem
      - loginpage
         - ip/hotspot/login/ > arahkan ssl-certificate ke yang kita buat tadi di sistem

-------------------------------------------------------------
REST HTTP
   setelah langkah diatas sudah selesai maka tinggal, cara memakainya
   - buat user baru di mikrotik :
      sistem/users/ add : 
         name: restPandawa
         pass: passMikroRest
   - buka browser > akses domain tadi > jika webfig terbuka dg protocol "https" dan ada gambar gemboknya maka sukses. 
POSTMAN
   - create new workspace 
   - new http request
   - authentication > basic auth > isi name, pass > save mikrotik api > 
   - GET > url 
REST DOCUMENTATION
   - get system resource
   - get row id > cara mengetahui id : get dulu maka terlihat id: 1
   - timeout dll ada contohnya 



















REST HTTP 
-------------------------------------------------------------
source: REST API di ROS mikrotik CITRAWEB YOUTUBE
DAFTAR ISI
   - pendahuluan                           -> Pengertian Rest API MIKROTIK
   - syarat penggunaan REST                -> Syarat penggunaan 
   - REST api Dokumentasi                  -> dokumentasi sebagai rujukan URL 
   - penggunaan method REST Mikrotik       -> penggunaan dasar pada mikrotik
   - Rest client POSTMAN, cURL, guzzle.    -> macam rest client
   - terminal Rest                         -> menggunakan terminal pada rest 
   - ssl-sertificate Lets Encrypt          -> cara mendapatkan ssl-certificate
*/

/* PENDAHULUAN
-----------------------------------------------------------
pada mikrotik OS v 7.1 beta4 ke atas sudah support REST API*/

syarat: 
   - v 7.1 beta 4 ke atas
   - aktifkan www-ssl di router
   - memiliki ssl certificate terpasang di router supaya koneksinya aman
   - letsencryp masih belum bisa di lakukan di router maka kita gunakan PC linux lalu kita pindah ke router
   - di ROS v7 stable sudah ada layanan ssl-certificate gratis yaitu "Lets Encrypt" tutorial ada di bawah
   - mikrotik juga syaratnya punya IP public sehingga bisa di akses dari internet

AKTIFKAN HTTPS SERVICE
-----------------------------------------------------------
IP/services/
   - cek www-ssl port 443 > dblclk certificate ada yang di generate dari ubuntu (berikutnya)
   - sistem > certificate > juga sudah ada generate dari ubuntu
   - lakukan port forwarding dari 80 ke 443 yang nantinya akan di butuhkan request ssl-certificate oleh ubuntu
   - untuk request ssl-sertificate di ubuntu cari tutorial di internet
   - menit ke 5-8 periksa ........... ???????????????
   - tanda kalau sertificate sudah valid maka url kita, kita bisa di akses via browser dengan protocol https dan ada gembok hijau
   - untuk akses REST API kita bisa buka dokumentasi di mikrotik.com/doc/ > search REST API

REST API DOKUMENTASI
-----------------------------------------------------------
- to start konek ke https://<ip router>/rest
- misalnya rest client pakai curl di terminal >: $curl -k -u admin: https://192.168.50.1/rest/system/resource  
   - jadi di atas menggunakan basic auth mikrotik user:admin, pass: ""
   - oya nantinya di router kita bikin lagi satu admin baru khusus untuk akses REST API (mis: user testapi pass: rahasia)
- cara aksesnya coba di terminal OS kita :
   >: curl -u testapi:rahasia https://coba.com/rest/system/resource   enter: hasilnya ada di bawah enter ini
- method: 
   GET: read: baca record
   PATCH: edit user: edit record
   PUT: tambah user hotspot: tambah record baru
   DELETE: hapus user: hapus record
   POST: ping: menjalankan fungsi

POSTMAN
-----------------------------------------------------------
- kita akan coba akses REST menggunakan postman, belum ke cURL atau Client REST lainya:
   - pakai postman browser > create new > workspace baru > team > create workspace 
   - pada tab collection > new > http request > GET > https://coba.com/rest/system/resource
   - pada tab authorization > type basic > user: testapi, pass: rahasia > save request > kasi nama IP
   mikrotikAPI > create > pilih > save > 
   - lalu pada requestnya kita kasih nama : mikrotikAPI/get sistem resource collection > send
   - maka kita dapat response collection
- di dokumentasi kita bisa lihat contoh2 method requestnya
   - misalnya membaca record semua atau membaca record 1 saja sesuai ID start
   - cara nya agar tahu idnya maka kita get dulu semuya maka dari response nya kita bisa tahu id nya
- contoh kita mau kirimkan mehod request untuk create, edit maka:
   - pilih method: PUT akses url > type: raw to: json > pada tab body kita kirimkan json { "name": "aqil", "scret": "rahasia123" } 
   lihat di winbox url nya sesuai di winbox: sedang parameternya kiirim di body, dan tidak harus semua dikirim
   - jangan lupa saat mau edit pastikan id nya tertulis //coba.com/rest/system/resource/*2
   - untuk delete(jngn lupa id) saat di send maka tidak ada response
- kalau ada looping tanpa batas seperti ping dan speedtest maka kita harus batasi misalnya ping 4 kali dst, 
  atau speed test durasi 20 detik cekidoc

TERMINAL
-----------------------------------------------------------
- bonus: antar router bisa saling komunikasi dengan fetch tool sebagaimana akses restapi yaitu menggunakan URL melalui terminal 
   bisa terminal maka gampang bisa juga rest karena tujuan nya sama saja


// -------------------------------------------------------------
SSL SERTIFICATE
   adalah semacam id keamanan untuk jaringan HTTP menjadi HTTPS
   biasanya pengguna menyewa dari penyedia ssl sertificate dan kita pointing ke IP PUBLIK kita
   di mikrotik ada layanan server ssl-sertificate gratis yaitu menggunakan Lets Encrypt
   sumber video:"lets Encrypt di router os v7" citraweb youtube

Lets Encrypt: 
   syaratnya adalah:
   - router harus bisa di akses di internet > dan di akses oleh server lets encript nya
   misalnya sewa VPS > generate VPN > forwarding port ke router > port 443
   - menggunakan ROS v7 keatas
   - memiliki nama domain (tidak bisa IP address langsung) yg di pointing ke IP publik router kita
   atau menggunakan domain gratis dari mikrotik 

// -----------------------
praktek konfigursasi

1. cek IP adress router publik, caranya: IP > Adress: terlihat IP address publik di ether2 (cari tahu alasanya)
2. system > resource : version : 7  keatas 
3. kita akan coba gunakan IP CLOUD supaya dapat domain, caranya: IP > CLOUD > DDNS enable: true > apply > copas DNS name > DOKUMENTASI
   - kita pastikan apakah DNS ini sudah di pointing ke router kita, maka kita gunakan DNS cheker, caranya:
   - buka browser dan akse dnschecker.org > paste di kolom > search > resposnse: jika ada server dan pointing ke IP kita berarti berhasil
   - jadi pastikan jika kita bikin vpn dan DNS(domain) sendiri, itu pastikan sudah di pointing ke IP publik router kita 
   - jika sudah kita request ssl-certificate di lets encryptnya di terminal
4. terminal >: certificate/enable-ssl-certificate dns-name=<dns yang di dapat dari IP cloud tadi><atau domain anda sendiri jika punya> ENTER
   - maka akan terjadi progress generate tunggu beberapa saat: disini melakukan validasi apakah domain valid atu tidak
   - jika di terminal sudah progress succes: update(selesai) maka kita tinggal cek di: 
   system > certificate > maka ada record baru sertificate > dblclk row tersebut untuk detail >
   - sertificate ini di generate dari Lets Encrypt : dan valid 90 hari
   jadi setelah 90 hari maka tinggal renew sertificate dengan script yg sama di atas baik secara manual maupun sekeduler

// -----------------------
implementasi di webfig
1. buka IP > services > aktifkan www-ssl > dblclk > akan terlihat sertificate: terpilih adalah yang dari generate lets-encrypt tadi
2. buka domain name di IP > cloud > copas DNS name > paste di browser > maka setelah terbuka maka sudah ada gemboknya (HTTPS)
3. kemudian kita chek sslnya apakah valid karena di browser sudah ada gemboknya > tapi kita bisa cek dg web cheker: 
   - buka google ssl cheker pilih yg www.sslshopper.com > paste domain tadi > check > terlihat di pointing ke IP publik kita 
   dan terlihat beberapa response lainya







