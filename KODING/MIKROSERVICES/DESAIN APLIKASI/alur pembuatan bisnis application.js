ALUR PEMBUATAN APLIKASI / SOFTWARE DEVELOPMEN LIFECYCLE -:

BRD
	bisnis researc dan develop -> berupa document -> 
	exclusive:
	- pekerjaan apa saja
	- koneksi ke siapa saja
	- keuntungan bagaimana
	inclusive:
	- node obj		= barang/jasa apa saja
	- node subj		= siapa saja
	- node pred 	= pekerjaan apa saja
	- network		= koneksi ke siapa saja(pihak2)
	- prosedur		= aturan: kerjakan, larangan, pilihan dari 4 di atas
	- alur 			= urutan eksekusi
	- problem		= hambatanya apa saja
	- solving		= penyelesaianya gimana saja
	goal:
	- customer		= sistem user 
		daftar
			pakai hp, email, foto, 
		masuk 
		keamanan 
		kustomisasi 
		pengeloalan 
			foto, judul, deskripsi dll
		monitoring 
			notifikasi aktifitas, progress dll
			pertumbuhan, jangkauan, 
		planing
			advertising ke facbook wa dll
			melihat point, downline
	- networking
		API
		MERCHAND
		PORT/terminal/pelabuhan/mobil/ojek/kurir sendiri
	- prosedur
		- perintah
		- larangan
		- pilihan/feature/info 
	- alur
		- happy flow -> alur belanja
		- sad flow -> alur komplain
	- problem solving
	tools:
	- video screeshot alur aplikasi lain
	- pakai figma screeshot atau adobe XD
	- ilmu pattern design problem solving
	- review teknologi. 
		frontend
		backend
		database
		software arsitektur:
			desain arsitektur frontend
			desain arsitektur backend
			desain arsitektur server
			desain arsitektur grouping(penggolongan/pembagian/part management)
			desain arsitektur problem solving
			desain arsitektur team personalia 
UI/UX
	- bikin form dari BRD
		- layout 
		- desain
		- prototype
TEKHNICAL DESAIN 
	- pemetaan frontend
	- pemetaan backend
		- message broker
		- mysql mongodb
		- API 
		- dsb
	- pemetaan networking database
		- pihak 2nd party:
			- API
			- DBASE
			- dll
		- 3rd party:
			- firebase
			- google map
			- jne dsb 
			- payment, mitrans dsb
			- cuaca
		tools:
			- diagram 
			- prototype
			- interaksi
			- tabel dan relasi
			- pakai:
				- adobe xd
				- xmind
				- figma
TEKHNICAL REVIEW
	tentang oleh senior developmen:
	- antisipasi untuk masalah yang bolong
	- dan review cari aturan paling ideal 
	- goal: 
		prosedur 
		alur
		frontend
			performance
			dari sistem UI dan jenis QUERY API atau massege broker dll 
		keamanan
			hash dll
		networking
		server
		arsitektur
		desain UI/UX
		trafic
		pertumbuhan 
		serverlocal
		pc dan hardware
API SPEC
	berdasarkan/base on :  UI/UX -> screen(halaman/fragment)kita bikin :
	- grouping 		= penggolongan : database, tabel, relation, arsitektur : 
	- porting  		= bikin list endpoint response CRUD per halaman dan fragment
						  dan bikin catatan dokumentasi perhalaman
	- izin 			= bagi tema yang akan membuat code harus izin verifikasi pada 
						  team documentasi
	- endpoint API    = satu endpoint bisa mengusung beberapa field dan satu method
	- bikin version = atau belajar github agar bisa melihat dan mengaaawasi perubahan 
DEVELOPMEN
	baseon API spec dan UI/UX yang udah kita buat kita punya modal untuk
	kita bisa bekerja secara paralel(maju bersama) semua pegang modal yang sama
	tidak serial.(maju berurut saling tunggu)
	frontend:
		- koding android studio
		- unit test
	backend:
		- koding kotlin restfull API
		- firebase autentication
		- query, relation, endpoint
		- unit test
		- koding arsitektur
			- message broker
			- micro service
			- API dll
		- maengatur planning scalable maindset
	QA:
		- automation terkait micro server
		- testing performance
		- testing security
NON PROD DEPLOYMEN
	deploy: testing jalan satu persatu 
	deploy: testing gabungin semua
	- uji environtmen baik: QA, Stagging, Dev, Sandbox cari di google
	- tentukan versi environtmen: OS, Framework, Platform, IDE, Package, Plugin dsb
TESTING
	- seperti memberikan stress test secara paralel juga terhadap:
		- end to end test 
		- performing test
		- security
		- tentukan response time : misalnya response time tidak boleh lebih dari 2 detik
		- menemukan bug
		-
PRODUCTION DEPLOYMENT
	launching -> 
	ada beberapa strategi deploymen =
		launching utuh
		launching party
		launching test A/B sebagian user dapat fitur berbeda
	saat ada fitur baru kita mungkin tahapanya tidak sekomplex dari nol
	menemukan hambatan bootlenect antara trafic, server, storage, memory dsb
MAINTENACE/IMPROVEMENT
	improvement:
		biasanya kita ulang siklus dari awal dan bikin perubahan
	maintenance:
		- pentingnya dokumentasi dan grouping listing
		- pentingnya devisi dan team
		- monitoring
			- total database 
			- total trafic
			- respon time
			- biasanya data makin banyak makin lambat 
				perbaiki plugin tracker dan sistem queri pakai API atau lainya 
			- 
END ---


