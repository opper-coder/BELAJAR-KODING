PERKENALAN 
	- adalah solusi umum (templat/panduan) dari permasalahan membuat software
	- tidak langsung dapat di traslete ke kode kita karena hanya panduan penyelesaian
	- keuntunganya 
		- desain terstandarisasi
		- lebih cepat
		- lebih tepat karena sudah di desainkan oleh fihak secara khusus
		- biasany kita menyelesaikan masalah sendiri begitu rumit ee padahal dah ada patern nya
		- aplikasi jadi mudah di maintain
		- lebih rapi
		- kalau suka-suka dia akibatnya tidak readable
SINGLETON
	- yaitu bikin satu fungsi dapat kita panggil berkali2 tanpa duplikat perintah
	- kasus koneksi db jangan di buat langsung di (objec query) koneksi harus di buat 
		- sekali diluar (berisi if("ada koneksi/belum"))itu tinggal panggil jika sudah ya kembalikan 
		- koneksi yang sudah ada saja jangan bikin lagi 
		- kalau di php include saja pada halaman khusus koneksi, kalau java pakai method helper sendiri
BUILDER PATTERN
	- cara memisahkan pembuatan class pada object nya / rekayasa flesksibilitas agar 
	  bebas membuat yang properti baru nya pada instanc nya
	- kalau di java scrip mungkin pakai ...array
FACTORY METHOD
	- 
ABSTRAC FACTORY
	-
PROTOTYPE
	- 
OBJECT POOL
ADAPTER
REPOSITORY
FACADE
TEMPLATE METHOD
BRIDGE
COMPOSITE
