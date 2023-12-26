-----------------------------------------------------------
Menambah perangkat
	Discovery
		- yaitu menambah perangkat secara otomatis dengan cara di scan pada local jaringan di bawah mikrotik ini 
		- dude client
			sidebar > network maps > pilih local 
			click discover di bar atas:
				scan network: range IP misal 10.10.10.0/24
				klik discover 
				maka otomatis scanning perangkat di range tersebut
	Manual
		- klik kanan > add device 
			address: IP perangkat
			routerOS: true (jika itu perangkat mikrotik, false jk tidak)
			next
			isi service yg akan di monitor > klik discover  pilih layanan yang di monitoring > finish > muncul perangkatnya
-----------------------------------------------------------
menambah link type simple
	- klik kanan di worksheet kosong > add link > pilih perangkat1 koneksikan ke parangkat2 (silahkan pilih saja) > finish
-----------------------------------------------------------
menambah link info type routerOS
	- pada box dialog di atas tadi kita isi satu persatu
			device: IP bersangkutan
			mastering type: simple, snmp, routerOS (pilih routerOS)
				- simple hanya bisa on off saja, 
				- snmp(simple network management protocol) mode informasi general hampir semua perangkat menyediakan ini
				- rOS adalah mode monitoring yg di sediakan mikrotik 
			interface: pilih port yang di monitoring
			Speed: adalah rentang angka yang kita kasih agar saat ukuran mentok di angka itu maka koneksi berwarna merah
				(misalnya: kalau port ini gigabite maka isikan 1000000000 (1milyar))
			type: ini hanya visualisasi line saja 
	- klik finish > maka terlihat rx tx
-----------------------------------------------------------
menambah link info type SNMP
	- sebenarnya hasilnya sama saja tapi informasi SNMP lebih cepat dari routerOS
	- untuk monitoring mikrotik dengan type snmp maka router yang dimonitoring harus aktifkan dulu snmp nya
	- winbox mikrotik yang di monitoring > IP > SNMP > enable > apply ok
	- pada client nya mirip di atas: add link, pilih type: SNMP
	- pada monitoring kali ini kita akan batasi speed ke 10M atau 10juta
	- ini berguna saat kita batasi 3 mb(3jt) pada router maka jika merah berarti sudah terisi target user voucher 
-----------------------------------------------------------
menambah sub map
	- semacam grouping, untuk grup mikrotik, server, lokasi, router, perlengkapan dll 
	- klik kanan di area kosong add submap > newmap: true > name: nama finish
		- ada lingkaran dblklk masuk > dblclk lagi keluar > 
		- di dalamnya bisa kita add device lagi seperti sebelumnya 
		- jika di hover maka hanya ngintip saja secara live tidak benar2 masuk   
-----------------------------------------------------------
