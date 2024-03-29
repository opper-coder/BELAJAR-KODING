TIPS PAKAI PRIMEREACT
--------------------------------------------------------
1. bikin satu folder app 
2. pecah folder di dalamnya sesuai service kita
3. bikin masing2 service mandiri tanpa ada keterikatan dengan lainya sebisa mungkin
4. gunakan layout dan thema dari sakai
5. siap di gunakan tinggal menguasai sedikit tentang komponen

LAYOUT
--------------------------------------------------------
1. tulis daftar fungsi utama
2. layout 
3. data tungal
4. data majemuk
5. action/button
6. modals

TABEL
--------------------------------------------------------
tabel pada komponen ada dua type
1. ada 2 jenis tabel di primereact: sederhana dan advanced  
	a. sederhana: menampilkan data dari array object: data:[{field:"ada}]
	b. kompleks: tersedia constrain, filter, global filter, body template  
2. tips menggunakan langsung yang advance
	- siapkan halaman yang memuat tabel
	- copas tabel
	- import database yang di sediakan
3. modifikasi:
	- tampilkan filter global atau tidak(hapus header atau tidak)
	- sesuaikan body templatenya yang di gunakan atau tidak
	- susun field sesuai dengan keperluan kita dengan meminjam field yang ada
	- gunakan objct db yang di sediakan untuk mewadahi db kita
	- atau bikin db yang di sesuaikan dengan db bawaan lalu arahkan import ke db baru
	- lalu ubah satu persatu field yang tidak pakai body template
	- lalu ubah field yang meiliki body template
4. body template:
	- biasanya memiliki satu atau lebih body template
	- telusuri referensi db nya satu persatu
	- perhatikan cara bangun body template, uji manual satu persatu
	- curency:
		- arahkan field ke data angka
		- ganti en-EN = id-ID, USD = IDR
		- pada filter constrain masukkan filter currency
	- date:
		- arahkan field ke data tanggal, tiru cara nulis format di db 
		- ganti en-EN = id-ID, USD = IDR
		- pada filter constrain masukkan filter currency
		- sesuaikan referensi data sesuai field pada body template
	- dst yang lainya gampang
5. tambah fitur lain seperti context, tooltips, event dll

BACKEND
--------------------------------------------------------
kita tinggal membuatkan bebrapa fungsi dasar
1. fungsi pemanggil db yang dapat di filter dengan object, 
	pemanggilya mengirimkan filter dan sumber data secara async
	yang return nya object yang sudah terfilter
2. fungsi mengambil data terakhir sesuai tanggal
3. fungsi konversi dr obj ke array
4. fungsi summary array
5. fungsi itu dapat menampilkan data tunggal atau jamak seperti tabel, atau infosaldo
6. kita dah punya ya itu tinggal pakai

TIPS MEMBUAT APP DASHBOARD
--------------------------------------------------------
- bagi semua service ke dalam alur alur nya
- setiap alur memiliki beberapa page
- breakdown fungsi dalam page 
	- data tunggal
	- data jamak
	- action/button
	- modals
- back endnya sering menggunakan
	- getData({filter}, sumberdata) 
	- getDatas({filter}, sumberdata) 
	- getLastData({filter}, sumberdata)
	- getConvertArr(data)
	- getSumArr(data)

	kalau form 
	- setData()
	- setEdit()
	- setDelete()
- lakukan pada masing2 page 

DATABASE
--------------------------------------------------------
- susunan database pada primereact sudah ada silahkan kopi dan modifikasi
- tinggal atur desain field yang kita punya
- intinya bentuknya adalah array object : [{}], baik bersarang atau tidak
- array adalah merepresentasikan baris pada tabel
- object adalah: desain field pada tabel
- kalau bersarang biasanya berbentuk array object lagi, atau salah satu dari keduanya juga bisa
- intinya kalau bisa tiap service memiliki tabelnya sendiri, kalau terlalu dalam bersarang akan menyulitkan pengelolaan pemanggilan








