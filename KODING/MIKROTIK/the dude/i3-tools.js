-----------------------------------------------------------
- pada monitoring kali ini kita akan perlakukan tiap nodenya lebih advance lagi,
- sebelumnya kan kita sudah bisa melakukan:
	- add node
	- status onoff: akan terlihat hijau merah 
	- link : terlihat koneksi kemana
	- warna link: akan terlihat merah jika memenuhi target
	- traffic: ada rx tx jika kita mau
	- submap: ada folder grouping
-----------------------------------------------------------
TOOLS
nah pada kesempatan kali ini kita akan memperlakukan pada tiap node lebih advance lagi dengan menggunakan tools
	- pada contoh sebelumnya ada beberapa node > klik kanan > tools > disini banyak tool s yang bs kita gunakan seperti:
	- ping
			from: isi IP pemanggil (secara default kita panggil dari server the dude, tp istimewanya qt panggil dr perangkat manapun bisa)
			to: isi IP terpanggil
			klik start: maka akan melakukan ping seperti biasanya 
	- traceroute: 
		  from: IP perangkat
		  to: 8.8.8.8
		  (misalnya kita melakukan pelacakan route dr perangkat ke internet juga bisa seperti di atas)
			- ini kasus dimana jika ada komplen dr pelanggan kenapa tidak bisa konnek ke internet, 
			  tidak perlu di winbox melainkan dari the dude saja tracerootnya 
	- SNMPwalk
			yaitu apakah snmp sudah aktif atau belum > 
			- jika di klik dia akan scan snmp nya
			- jika snmpwalk di pilih dan perangkat belum mengaktifkan maka kotak info kosong
			- jika di aktifkan maka info snmp berisi tree folder informasi snmp
			- oya kalau snmp di aktifkan maka pada node informasi resource terlihat  
			- jika sudah terlihat maka kita dikasih value2 OID yang belum tentu bisa di baca karena masih berupa kode2
				- jalan keluarnya maka kita harus download MIB dari vendornya
				- MIB adalah kamus bahasa OID
	- terminal 
			(terminal remote lah gitu) tidak jauh berbeda dengan telnet yaitu kita bisa mengakses terminal di perangkat termonitoring
			dan melakukan konfigurasi apa saja di terminal ini
	- remote connection
			- mirip dengan terminal kita bisa meremote bukan hanya terminal diisini melainkan: terminal, ssh, MAC telnet
			- tapi lebih fleksibel lagi bukan hanya dari server ke node, melainkan dari node terpilih ke node tujuan lainya
	- torch
			- mirip torch di winbox bedanya kita tidak perlu membuka winboxnya (cari keterangan fungsi torch di mikrotik)  
	- bandwidth test
			- mirip di winbox tapi bedanya kita bisa melakukan bandwidth test dari node terpilih ke node tujuan
			- device from: IP request 
			- device to: IP response
			- rx tx speed: speed testnya
			- start
	- spectral scan
			scanning wifi interferensi di lokasi node bersangkutan
			- device: IP node  
			- interface: pilih ether wlan nya
			- band: pilih scanning hardware dan freq
	- web 
			- ini biasanya pada perangkat non mikrotik (misalnya router). saat kita akan di arahkan ke tool web ini
			  maka kita akan di redirect ke halaman konfigurasi router tersebut
	- dude
			- jika kita punya the dude juga pada perangkat termonitoring maka kita bisa buka dude nya juga disana (membuka dude lain) 
-----------------------------------------------------------
MENAMBAH TOOL EXTERNAL
kita kadang membutuh kan tools lain saat mengakses sebuah node, misalnya buka winbox, SSH, telnet, terminal dll
	SSH
		- misalnya kita akan mengakses SSH pada windows di drive C:\ssh.exe (secure shell, mirip terminal gitu)
		- sidebar > pilih tools (paling bawah)
		- pilih telnet > karena telnet ini tidak bs di pakai (karena 32bit sedang OS 64) > maka dblclk > copy
		- atau langsung di menu ADD di atas
		- isi dialog box dengan 
				type: execute
				Name: SSH (berinama)
				command: (karena kita punya aplikasi SSH.exe berada di drive C maka tulis aksesnya sbb)
					c:\ssh.exe spasi [klik insert variabel: Device.username dan @ Device.FirstAddress]
					Apply Ok
		- saat klik kanan kita sudah ada menu baru di tools > SSH 

	WINBOX
		- add
			- type: execute
			- name: WINBOX
			- command:
				c:/ winbox64.exe [Device.FirstAdress] spasi [Device.UserName] spasi [Device.Password] 
		- saat klik kanan pada device > winbox > otomatis terbuka winbox ke perangkat tersebut masukkan username pass
		- tips jika di mikrotik sudah ada passwordnya maka otomatis login tanpa menulis username password 
		- tips2 atur user previlage supaya read saja atau write, tapi jangan full yaa saat menghidupkan users grup dude pada mikrotik seperti di awal
		-  
-----------------------------------------------------------
UPGRADE ROS DI DUDE ke NODE
	upgrade ROS satu persatu
		winbox
			- syarat nya kita download ROS terbaru > letakkan di filemanager "winbox the dude server" the dude 
				> files > dudefiles > paste disini ROS nya > ingat di root dude > nanti letaknya palingh bawah paling luar di dude files 
			- syarat2 ROS harus sesuai arsitektur perangkat misal MIPSBE maka untuk lebih amanya kita download semua versiaon yang diperlukan nanti
		dude client
			- cek di sidebar > files > maka akan terlihat ROS firmwarenya 
			- kita klik lagi: network map/local : pilih node > klik kanan > upgrade > pilih version yang sesuai
				> saat kita memiliki firmware banyak maka akan terlihat semua version disini 
			- sebelum upgrade coba klik kanan pada node bersangkutan > tools winbox > cek version ros > 
				> jika pilih upgrade maka winbox otomatis restart sendiri > 
				> sekarang login ulang dan cek version maka sudah terupgrade
			- 
	upgrade ROS Bersamaan
		pastikan kita memiliki firmware lengkap sesuai perangkat yang sesuai 
		letakkan firmware semua nya di the dude files seperti diatas
		kemudian buat grup pada the dude client:
		- sidebar > Device > tab RouterOS > tab Group > add > group name: MIPSBE(misalnya kita kasih nama itu) > pilih hardware > crete
		- pilih grup tersebut > klik upgrade > pilih version > tunggu : ini tergantung jaringan jumlah router > dan kualitas hrdware
-----------------------------------------------------------
