-----------------------------------------------------------
Introduction
-----------------------------------------------------------
freeware, 
fungsi monitoring jaringan, 
	- on/off			: mesin mati atau hidup   
	- monitoring service 		: ssh, telnet, www, winbox, ssl, dll (ini hidup atau mati semua atau sebagian)
	- graffic  			: laporan ada historycal sesuai waktu
	- bandwidth 			: rx tx dari node satu ke node lainya
	- resource 			: CPU RAM DISK 
	- notifikasi 			: beep, sound, voice, popup, email, sms, telegram, warna pada the dude dll banyak
	- diagram 			: seperti denah skema secara lokasi, dll
software
	- server 			: di mikrotik router servernya atau CHR, (saftware ini akan melakukan monitoring realtime 24 jam)
	- client 			: di install di laptop windows atau linux wine (software ini hanya membaca hasilnya disini)
-----------------------------------------------------------
Installation
	- hardware arsiktur support
		- TILE
		- CCR
		- ARM 
		- MMIPS
		- X86
		- CHR
	- hardware  not support
		- MIPSBE
		- PPC
		- SMIPS
	- tapi perlu di perhatikan 
		- hardware tersebut mencukupi secara CPU dan DISK nya karena monitoring ini membutuhkan keduanya
		- ada hardware khusus yng di buat mikrotik untuk pengawasan yaitu RB1100AHX4 THE DUDE EDITION : 
			hardware memiliki tambahan SSD, untuk menyimpan log
		- kalau software client versinya tidak harus diperhatikan
	- download
		- www.mikrotik.com/download
		- untuk the dude server harus sesuai arsitektur, versi, ROS hardware nya harus sama
			- pilih versi
			- pilih arsitektur
			- pilih file extra package > nanti diberi zip 20mb > disana ada banyak package termasuk the dude server
			- the dude client bisa di download di General paling bawah 
	- install
		- sama dengan saat upgrade downgrade ROS yaitu
		- copas file dude-7.0.4.npk nya di : :/root file manager di winbox router bersangkutan
		- restart
		- ada menu tambahan di sidebar: DUDE > icon merah
		- berikutnya install dude client.exe di windows > next2 finish
	- jalankan 
		- di winbox: sidebar DUDE > settings > enable > apply OK 
		- otoritas:
			- secara default yg bisa masuk the dude itu belum ada, untuk mengaturnya
			- sistem/users>groups:
				full,
				read,
				write > dblclk > centang dude  
			- lakukan jika grup yang lain silahkan pertimbangkan sendiri
		- buka the dude client di windows/linux:
			server: ip mikrotik / atau mungkin ddns
			mode: secure
			username: sama dg di winbox
			pass: sama dg di winbox (sesuai dengan user grup di users ROS)
			klik connect
		- homepage
		akan membuka halaman homepage, ada sidebar dan lembar kerja
-----------------------------------------------------------
