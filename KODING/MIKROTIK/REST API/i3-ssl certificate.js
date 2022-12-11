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
	- buka browwser dan akse dnschecker.org > paste di kolom > search > resposnse: jika ada server dan pointing ke IP kita berarti berhasil
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

// ------>>>>> ------>>>>> ------>>>>> ------>>>>> ------>>>>> ------>>>>>
