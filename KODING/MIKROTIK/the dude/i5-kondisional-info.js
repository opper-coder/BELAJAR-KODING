-----------------------------------------------------------
KONDISIONAL INFORMASI
	pada node yang sudah kita buat kita bisa ubah ubah informasinya
	seperti warna dan widget CPU MEM jumlah pengguna dll  
	pilih node > klik kanan > setting >
		tab general
			Name: kita ubah menjadi nama orang misalnya
			DNS lookup: jika perangkat memiliki DNS misalnya DDNS atau Domain lainya maka akan di tampilkan, kalau tdk punya kembali IP yang terlihat
			Type: ini akan merubah tampilan semacam icon lah
			parents: adalah pengecekan pada IP parent saja, karena itu jk kita punya banyak node maka jadi rootnya adalah parent ini
				jadi jika disini off maka node nya tidak akan memberi notifikasi masing2 melainkan cukup satu saja yaitu parent 
			custom field: ini hanya semacam comment saja (atau catatan tambahan )
---
			agent: adalah the dude server lainya yang akan kita monitoring, ini berguna saat server kita sudah ribuan, (caranya cari tahu nanti yaa)
			snmp profile: pilih saja default (ini tergantung perangkat penyedia snmp ya (routernya))
			username:
			password: ini untuk the dude saja bukan untuk mikrotik, ini pintu lainya yaa jadi kalau jebol tidak sam,pai ke mikrotiknya
		tab pooling:
			interval: default (30 detik kita bisa atur sesuka kita sebenarnya, ini juga kita bisa atur di menu setting)
			timeout: 10 detik (artinya perangkat tidak bisa menjawab setelah 10 detik setelah probe dilakukan)
			probe down count: 5 (tapi tidak langsung dinyatakan down saat time out karena beberapa alasan
				kecuali mengalami timeout 5 kali, barulah dinyatakan down, total 160 detik lah the dude akan dinyatakan down)
		tab services
			pada router yang default biasanya semua service sekitar 6 items kita buka untuk disediakan probing
			saat kita tidak pernah menggunakan servbice tersebut maka dude akan menginformasikan ada layanan yang tikda aktif dan mengirim notifikasi
			untuk mengatasinya hapus lanayanan yg tidak diperlukan atau silahkan menonaktifkan layanann tersebut 
		tab outages 
			semacam history lah
		tab snmp
			ini adalah protokol yang bisa kita baca value yang di dapatkan hasil probing perangkat jika kita probe pada mode snmp lihat ada beberapa tab informasi disitu
		tab routerOS
			- ini mirip dengan SNMP 
			- bedanya jika disini kita bisa melakukan penambahan dan edit parameter seperti mini winbox lah gitu
			- ini nbisa dilakukan jika username password yang dipasang pada perangkat the dude adalah full, maka jangan full ya kalaun bisa read only atau write saja
		tab history
			- menampilkan kondisi latensi probing
		tab tools
			- mirip dengan add tools > tools di ats tadi tapi bedanya kita hanya menerapkan pada device ini saja
			- ini berguna biasanya perangkat non mikrotik, misal menambhakan sebelum nama dan IP pada perangkat bersangkutan
-----------------------------------------------------------
APPEARANCEs
	- klik kanan pada device > appearence > 
		tab general 
			label: secara default berisi nama atau IP pada perangkat tersebut, kalau kita ingin menampilkan beberapa info maka ikuti selanjutnya 
			add variabel: pilih label yang di inginkan misal Device.Type=hasilnya RouterOS
			add function: seperti Device.Performance artinya CPU Device.down artinya berapa yg OFF
			up: pilih warna saat up
			partial: warna saat setengah layanan mati
			down: warna saat down
			fonts: 
			warna ini bisa kita ganti sesuai preferebnsi kita tapi sebaiknya default saja
		tab image:
			- pilih gambar icon perangkat ini terserah kita saja yang penting ada
			- kalau mau kita buatkan sendiri yng kita punya silahkan upload image.png di winbox the dude server > files dudefiless > paste di root dudefiles
				maka saat milih ghambar akan ada pilihan kita sendiri > apply ok
		add function
			- seperti di atas tadi kita sudah menyinggung function widget kita akan menampilkan widget berapa user yang 
			- langkah pertama kita harus mendapatkan oid
					- masuk ke winbox device > terminal 
						:> interface wireless 
						:> print oid > kita akan di kasih value beberapa parameter > pilih client count: ".1.1.2.3" seperti angka ini > kopi
					- the dude client
						klik kanan appearance pada device > klik insert OID > [oid("paste oid disini")] > buang titik paling depan atau isi nol didepanya 
						terus di depan fungsi tulis field nya seperti ini Jumlah client: [oid("")] > apply ok
					- OID bisa juga kita dapatkan dengan download MIB dari vendornya > MIB adalah semacam kamus SNMP perangkat tersebut
-----------------------------------------------------------
						
