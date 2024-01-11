UPGRADE DAN DOWNGRADE MIKROTIK
- cek dulu versi sekarang
- upgrade dan downgrade ada dua cara: manual drag n drop dan cara automatic
-----------------------------------------------------------
UPGRADE
- cara manual:
	- download di mikrotik.com
	- pilih type OS: berdasarkan versi, arsitektur(arm,x86,mispbe dll), stage(longterm, stable, develeop, testing)
		- recomendasi: versi terbaru, stable, arsitekture sesuaikan perangkat
	- lihat di topbar saat sudah login atau sistem > packages (atau cari lagi di resources) > 
	  pada field version akan terlihat versinya  
	- setelah kita punya filenya (extensi: npk) > 
	  selanjutnya buka file di winbox > drag n drop > atau gunakan upload > atau ftp
	- setelah selasai drag n drop > tinggal soft reboot > maka otomatis paket terbaru yang akan di load
	- cek sistem > packages > akan terlihat > daftar paket berikut versinya > 
	  paket2 tersebut adalah default standard bawaanya > kalau mau cari paket tambahan bisa 
	  download di versi extra packages atau all packages
	- jika kita download berupa file zip maka extrack telebih dahulu sebelum drag n drop dan reboot
- cara automatis (kita tinggal memilih stagenya saja, arsitektur dan versi automatic): 
	- kita akan gunakan router lain yang belum di update (router yg belum di update)
	- syarat pertama router sudah di konfig dasar artinya harus terhubung ke internet karena saat upgrade
	  akan terhubung dengan server di mikrotik.com
	- langkafh pertama: system > package > cek for update. > terlihat versi kita dan versi yg tersedia > beserta changelog
	- tombol download: maka hanya akan download saja
	- tombol download dan install saat selesai download maka router akan reboot automatis (ini direkomendasikan)
-----------------------------------------------------------	
DOWNGRADE
	- untuk downgrade hanya menggunakan cara manual
	- cara nya sama dengan upgrade metode manual
	- yaitu download firmware versi di bawahnya (sesuaikan arsitektur dan stagenya)
	- oya downloadnya pilih yang download archive karena di sana terlihat semua versinya
	- lalu drag n drop (seperti di atas) di files
	- lalu kita masuk ke : system > package list > di sana ada tombol downgrade > soft reboot
-----------------------------------------------------------
tips 
- di sarankan downgrade hanya di 6.43 keatas 
  (karena rentan dan ada routerboard yang hanya support di versi 6.43 keatas)
- changelog: pastikan saat upgrade downgrade melihat perubahan yang ada di change.log karena konfigurasnya 
  mungkin tidak akan jalan pada masing2 versi yang berbeda


------>>>>>> ------>>>>>> ------>>>>>> ------>>>>>> ------>>>>>>
*/
