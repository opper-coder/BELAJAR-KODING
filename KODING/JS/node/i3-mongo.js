MONGODB
-------------------------------------------------
instalasi
	>> https://www.mongodb.com/
	- cara instalasi ada 2:
		1. local		: mongo local
		2. cloud 		: mongo cloud
	- remotenya ada 2
		1. terminal 		: remote 
		2. GUI compass 		: remote 
	- install local ada2 cara (OS win,Mac, linux)
		1. terminal 		: akan ada auto config 		??> 
		2. download GUI 	: nanti akan config manual 	??> 
	??> https://www.mongodb.com/ > tab product > community edition > community server > tentukan parameter download 	: download instal mongo
	??> https://www.mongodb.com/ > tab product > community edition > tools > shell > mongosh > linux 			: install CLI mongo 
	??> https://www.mongodb.com/ > tab product > community edition > compass > download installation  			: install Compass
-------------------------------------------------
run CLI mongosh
	- pastikan envi variabel sudah di setting
	- jika tidak kita harus masuk ke folder root mongo, tinggal jalankan  
	:> mongo 			=> command help, version, sudah bisa di ketik dimanapun
	:> commond 			??> instalasi, koneksi, pengunaan  mudah dibaca cekidoc

run GUI compass
	- install sesui platform
	- jalankan, koneksi, operasi 
	- pakai mongosh lebih cepat
	- pakai GUI mudah di fahami

run CLOUD atlas
	- login 		: with google
	- pilih provider 	: AWS
	- region 		: asia
	- build cluster 	: free prosess di buatkan > di arahkan ke dashboaard
	- craete cluster

contoh command:
	:> db
	:> use mahasiswa
	:> db.mahasiswa.insertOne( { x: 1 } );
	:> db.movies.insertMany([{},{},{}])
	:> db.movies.find({})
	:> db.movies.updateOne( {}, {$set: {}, $currentDate: { lastUpdated: true }} )
	:> db.movies.deleteOne({})

-------------------------------------------------
Atlas
>> dashboaard 
>  database access > addnew db user 
> auth password > user:aqil password:iza123
> connect > pilih remote [shell, aplikasimu, compass]
> nanti di kasih "connection string", copas
> gunakan di shell caranya:
:> mongo <paste connection string> --username aqil enter
:> password: <iza123> 		=> connection success 
:> show dbs 
:> use its-db 			=> switches db its-db
:> db.createCollection('mahasiswa')
:> db.mahasiswa.insertOne({})
:> db.mahasiswa.find()
>> dashboard > tab collection > akan terlihat isi database kita
-> compass > juga bisa connect > tinggal masukkan string connection pada kolom yan g di sediakan 
>> dashboard > connect > pilih compass > lalu sakan settingan yang sesuai dengan GUI kita (versi kita bisa kita akses lewat about GUI)

-------------------------------------------------
