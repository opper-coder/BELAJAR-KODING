30 Des 2023
------------------------------------------------------------------
Catatan 
	CHR
		** bikin lingkungan monitoring dude
		** bikin VPN untuk serverlocal yang akan terhubung ke DUDE dan BOXITS 
		** pertimbangkan VPN atau Tunnel (mengingat ini untuk monitoring dan eksekusi aktifkan voucher)
		** speedtest CHR - local

	DUDE
		** cek mana AP sering idle (bisa di pindah lokasi)
		- cek AP sesuai target (apakah kecepatan memenuhi syarat)
		** cek on/off (apakah ada kendala)
		** speedtest antar AP local (periksa kecepatan jaringan AP terganggu tidak)
		** restart AP, MIKROTIK, berkala 2 hari sekali jam 3 malam
		- perhitungan apakah router tersebut memenuhi quota apa tidak sperhitungkan baik baik keperluan dan metodenya
		
		** monitoring semua mikrotik
		** monitoring semua OLT
		** monitoring grup wilayah pada aksespoint (pakai sheet, dan circle bulatan)
		- memiliki 2 CHR cadangan sebagai cadangan monitoring jika terjadi gangguan
		- interval mikrotik, OLT  30 detik sekali
		** interval aksespoint 1 menit sekali
		- monitoring kelambatan pada jaringan akses point bukan hanya mati lampu mati jaringan
		** hidupkan saat di butuhkan saja, apakah berada di CHR atau DUDE, (skeduller mikrotik on off) 

	LOCAL MIKROTIK
		-------------------------------- >>>>>
		- optimasi
			** pisah traffic
			- port port yang di filter
			- pppoe
			- load balance
			- login responsif
			- internet responsif
			- blokir share hotspot
		- konfig dasar
		TARGET HARI RABU MALAM SELESAI
		-------------------------------- >>>>>
		- keamanan
		- konfig dasar
		- user profil 1,2,3,4,5 dalam mbps
		- hapus sampah voucher berkala 2 bulan terakhir terpakai otomatis dan sudah ada pencairan
		- umur cookie 24 jam dalam user profile (kalau sudah punya sistem login sendiri maka sesuaikan dengan umur voucher aja)
		- bikin voucher di boxits. lihat pembatasan umur MAC COOKIE jg bisa di dteksi dari appnya
		- pertimbangkan PPPoE dan Hotspot Voucher

		- voucher kencang di 2 menit pertama dengan ganti user profil ke normal
		- restart mikrotik 2 hari sekali jam 3 malam
		- kasih burst yang baik coba perhitungkan baik baik
		- speedtest mode mikrotik local
		- speedtest mode sendiri local
		- netwatch telegram (indicator pertama)
		- bikin Hotspot IP binding untuk perangkat termonitoring mas danang di bookmark samping ada
		- hapus sampah voucher otomatis 4 bulan lalu
		- gratis WA chat saja (tidak foto, voice, video) bagi login pertama selama 6 bulan pertama

		- monitoring akses point menggunakan telegram
		- melihat mati atau lambat sebuah akses point lokal

		- REST API BOXITS via VPN
		- loginpage
		- refresh connection
		- optimasi 
			- jaringan lambat
			- pisah traffic
			- loadbalance
			- ping lambat
			- traceroute lebih cepat
			- jam ikut jaringan
			- dll 

	APLIKASI
		- boxits, Db, Rest, Auth, Accounting, Hosting
		- boxits mobile 
		- koneksi, dan kaitanya dengan CHR dan SERVER
		- saat ada perangkat baru buatkan secreet VPN baru 
------------------------------------------------------------------
PERANGKAT
	router harga 145 belum ZTE F663
------------------------------------------------------------------
