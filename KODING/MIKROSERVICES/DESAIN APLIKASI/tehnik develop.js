JANGAN PERCAYA DENGAN APLIKASI ORANG

STRATEGI KETERGANTUNGAN PERFORMA 
	apabila tidak mau tergagnggu dengan performa aplikasi orang lain yang
	jadi mitra kita maka request kita ke "tracking pengiriman" misalnya
		-> jangan langsung fire ke api mereka
		-> melainkan kita simpan dulu request ke dt base kita lalu 
		   buatkan antrian secara berkala untuk request ke api mereka
DEBUG MASALAH PADA APLIKASI -:
	supaya memudahkan dalam malakukan maintenance maka tindakan dalam perancangan
	adalah -:
	- bikin log = report error -> 
		ada dua methode menyimpan log: dengan 1file, 2console 
		tempat nyimpen db nya namanya -> log agregator -> ada ELK = Elasticsearch, Logstage, Kibana
		Logstage = query narik data, Elasticsearch = db, Kibana = ui 

	- Monitoring =
		- Restart: 
				penting biasanya untuk ngatasi masalah error kita tinggal restart program
			  tapi ini bukan solusi yang baik sebaik nya kita mesti tahu penyebab nya kenapa
			  bisa berhenti.- biasanya malahan 5 menit mati lagi .- biasanya itu terjadi 
			  karena kita tidak tahu matrik aplikasi kita sendiri 
		- Aplikasi monitoring -: 
				melihat jumlah -:
				- online user
				- trafic
				- connection db healty
				- jumlah connection db
				- jumlah request db
				- contohnya karena ada promo maka request tadinya 1000 meningkat ke 10000
				- aplikasi :
					- promotheus - opensourch
					- datadog, newrelic - berbayar
		- Infrastructur monitoring
			- cpu z
			- promotheus
			- komputer 2 vm(virtual machine), server berapa core unit dsb
	- Alert/ notifikasi
		- di ambil dari log
		- di ambil dari monitoring
		- ke telegram email nelpon sms dsb
		- untuk
			- melihat cpu 5 jam terakhir 100% terus
			- transaksi rata2 1000 tiba2 0, perubahan drastis
			- tiba2 ada login, transaksi, online, cash flow dll turun
			- mungkin ada vm yang rusak
			- promotheus, kibana bisa pakai alert karena pengelolaan log dan monitoring
	- Testing
		- piramida testing sebanyak mungkin
		- unit testing
		- bagiasn piramida
			- end to end = paling berat karena test menyeluruh
			- integration = test khusus API integration
			- unit test = per unit function 
		- sama dengan imunitas pada tubuh
	- Backup data
		- secara berkala
		- terutama saat maintenance dan eksekusi program baru
		- sebagai pengganti data hilang (delta changes) adalah "log"
		- maka penting antara log dan backup data
		- makin sering makin bagus 1 jam sekali atau 1 hari 
		- namun jika sampai se hari sekali kita berarti kehilangan data 1 hari itu 
		- maka log lah tempat pelarian kita asal kita tangkap semua request user
WEB HOOK
- yaitu koneksi integrasi layanan network
- ada 2 methode -:
	- public network
		- kelebihan
		- kekurangan
	- private network
		-	
