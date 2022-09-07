// =============================== ringkasan ======================================
Install Docker Di Ubuntu
	:> sudo apt install docker.io -> finish
	:> sudo docker version									// cek v 
	:> sudo docker info										// cek running
	:> sudo systemctl status docker 						// cek running
	:> sudo systemctl enable --now docker 					// starting
Pull Image
	login: 'hub.docker.com'
	:> docker pull mongo:4.1 								// cara pull (narik) image bawaan docker ke localhost, version tag jangan lupa
	:> sudo docker images 									// lihat list image di registry
	:> sudo docker image rm mongo:4.1
Create Image From File
	:> periksa golang terbaru versi akan di catat di-> dan masukan 2 file di bawah ke sebuah folder.(nama terserah)
	di Dockerfile:
		/*
		FROM golang:1.15.6						
		COPY main.go /app/main.go 				
		CMD ["go", "run", "/app/main.go"]
		*/
	di main.go:
		/*
		package main
		import(
			"fmt"
			"net/http"
		)
		func main(){
			http.handleFunc("/",func(w http.responseWriter,r "http.Request"){
				fmt.fprint(w, "Hello World!")
			})
			http.ListenAndServe(":8080",nil)
		}
		*/
		masuk folder main.go di terminal lalu 
			:> docker-app go run main.go
		di browser: ketik url localhost 8080
	lalu create image file dan dependency -> 
	:> docker build --tag appku-golang:1.0 .											// bikin image tag
	- lama >15 menit kalu udah tinggal cek image, create container, running, seperti di bawah.:
Deploy To Docker Registry-(Bikin Image Di Registry)
	:> docker-tag appku-golang:1.0 opperdocker/appku-golang:1.0 	// rename tag
	:> docker login
	:> docker push opperdocker/appku-golang:1.0 -> 
Container
	:> sudo docker container create --name mongoserver1 mongo:4.1
	:> sudo docker container create --name mongoserver2 mongo:4.1
	:> sudo docker container create --name mongoserver1 -p 8080:27017 mongo:latest
	:> sodo docker container rm mongoserver1
	:> sudo docker container start mongoserver1
	:> sudo docker container stop mongoserver1 mongoserver2
	:> sudo docker container ls
	:> sudo docker container --all
	:> sudo docker container -a
Hubungkan Dengan Client Gui Robomongo Cek Keterhubungan Mongodb Client
	- install robomongo robo3t
	- hubungkan conneksi dengan port yang di expose
Docker Compose
	- bikin folder dan isi dengan file: docker-compose.yml -> isinya lihat keterangan di bawah -> 
	  juga lihat isinya di file contoh -> masuk folder open in terminal :> 
	- :> sudo docker-compose [COMMOND]
	- commond : start stop up down
	- :> sudo docker-compose up -d // -d jalan di daemon/background
Volume
	- :> sudo docker container create --name mongo -p 27017:27017 -v mongo_data:/data/db mongo:4-xenial // atau
	- :> sudo docker container create --name mongo -p 27017:27017 -v /desktop/dataku/ mongo:4-xenial
Bersihkan Sampah
	- prune, image, container, network, images
	:> sudo container prune
	:> sudo docker system prune
	:> sudo docker system prune -a --volumes

Contoh File docker-compose.yml:


/*
verion: "3.8"

services:
  mongo: 
    container_name: mongo
    image: mongo:4-xenial
    ports:
      - 27017:27017
    networks:
      - java_network
  redis:
    container_name: redis
    image: redis:5
    ports:
      - 6379:6379
    networks:
      - java_network
  java-docker:
    container_name: java-docker
    image: java-docker:1.0
    ports:
      - 8080:8080
    depends_on:
      - redis
      - mongo
    environment:
      - NAME=Docker 
      - MONGO_HOST=mongo
      - MONGO_PORT=27017
      - REDIS_HOST=redis
      - REDIS_PORT=6379
    networks:
      - java_network
networks:
  java_network:
    name: java_network
*/

// =============================== /ringkasan ======================================





PERKENALAN DENGAN DOCKER
	- adalah sebuah aplikasi "kontainer" atau bundle
	  server, librari, aplikasi, framework, untuk dapat di deploy 
	  ke hosting yang sudah ada OS bawaanya  
	- "container machine"
	- cara kerja -> docker akan membundle aplikasi kita beserta dependenci penjadi sebuah image 
	  yang siap running -> di dalamnya bisa terdapat: 
	  aplikasi, database, dependenci, web server, library, runtime dll -> 
	  lalu image tersebut tinggal di deploy ke dalam OS server di hosting 
	  nanti kalau mau bikin 4 cadangan node tinggal kita deploy image tersebut ke 4 server
	  tinggal ngurus soal load balancer nya gimana ??? 
VM VS CONTAINER
	- dulu vm
		- di dalam nya bisa berisi OS lagi, app dependency, app
		- vm juga di instal under OS
		- jadi double beberapa OS yang besar
	- sekarang containe machine
		- hampir sama bedanya di dalam container tidak ada OS nya, melainkan
		- container menggunakan OS bawaan server aplikasi service kita akan di isolate dari OS nya
		- sehingga tidak akan menyentuh dan mengganggu konfig OS 
		  meski di otak atik sejauh2 nya dlm container
INSTALL DOCKER
	terminal -> docker -> sudo apt  install docker.io -> tunggu 100%
	cek version -> docker version -> 
	cek running -> docker info 
	cek running -> sudo systemctl status docker -> (dead)
	starting -> sudo systemctl enable --now docker
	cek runing -> sudo systemctl status docker -> (running)
	klik "Q" terminal -> clear 
	create aplikasi/image pertama -> sudo docker run hello-world
	cek berhasil -> sudo docker image -> tampil hello-world
ARSITEKTUR DOCKER
	- os linux -> jika di windows -> maka di runing di image linux
	- untuk deploy aplikasi
	- dia hampir sama denga server bukan OS 
	- saat di instal di dalamnya ada 3 bagian: docker client, docker server, registry
		- client untuk commond kontrol perintah ke server biasanya bisa jalan walau tanpa server
		- server di running dulu -> fungsinya container manajer -> 
		  yaitu menagani image, container, -> terhubung ke registri
		- registri
	- klien untuk user
	- server nantinya bisa di remote dari client saat di deploy
	- registry = tempat menyimpan image  
QnA 1
	- cara kerja -> build aplikasi dan dependency menggunakan docker lokal -> hasilnya image ->
	  lalau kita deploy ke docker registry di server
	- bisa menggantikan VM kalau untuk Deploy app , jika mau install OS pilih VM
	- di docker jalanya pakai linux, kalau kita butuh banyak app windows maka ini tidak cocok
	- di install di windows, ios bisa saja namun tetap docker bikin virtual linux 
	- 

CONTAINER REGISTRI
	- tempat menyimpam image docker 
	- contoh saat kita bikin apliksi lalu kita bundle jadi image -> simpan dulu ke docker registri
	- saat di butuhkan di server tinggal load dari docker registry
	- kenapa tidak di simpan alangsung di servernya - jawab: merepotkan jika instal pada masing2 
	  lebih baik simpan satu saja di registri saat bikin node banyak tinggal load dari registri tersebut
	- container registry -
		- bawaan default, gratis-> hub.docker.com
		- google container registri -> bagian dari cloud google
		- aws elastic container registry -> bagian dari aws
		- tergantung mau di deploy dimana
	- bikin akun dan login di hub.docker.com
	- ketik search mongo
	- instal di terminal - copas pull image url -> default lates -> jika pakai versi lain tinggal tambah ":version"
	- :> docker pull mongo:4.1 
IMAGE
	- image adalah bundle dari hasil build aplikasi kita berisi aplikasi dan dependenci
	- tidak sama dengan iso/installer yang perlu install -> kalau image running ready tinggal load dan jalan
	- di hub.docker sudah ada repo open source yang banyak di gunakan -> di halaman hub.docker ada tab explor
	  searce image dependenc yang di perlukan -> contoh: mongodb -> baca install doc -> 
	  image beberapa versi bisa install beberapa versi sekaligus ->   
CONTAINER
	- adalah image yang kita running di server hasil instansiasi dari image di docker registri
	- kontainer bisa mati bisa jalan 
	- kontainer bisa di buat bisa di hapus tanpa menggangu image di registri
MENGAMBIL MELIHAT IMAGE DARI REGISTRI
	- :> sudo docker images 					= lihat daftar image terinstall di registry
	- :> sudo docker container ls 		= lihat daftar container yang runing
	- :> sudo docker container --all 	= lihat daftar container yang runing dan yang tidak running
BUAT CONTAINER
	- :> sudo docker container create --name mongoserver1 mongo:4.1 
																		=	bikin container 'mongoserver1' untuk tempat runing image 'mongo' misalkan
																		= bikin container, nama, image dependenci, versi ('latest' jg bisa)-> enter
	- :> sudo docker container create --name mongoserver2 mongo:4.1
																		= kalau mau bikin container kedua dari image yang sama 
																		  maka nama harus unix 
HAPUS CONTAINER
	- :> sudo docker container stop mongoserver1 mongoserver2 = stoping container jika matikan 2 spasi container2
	- :> sodo docker container rm mongoserver1  = hapus container lebih dari satu tinggal spasi nama server     
JALANKAN CONTAINER
	- :> sudo docker container start mongoserver1 
																		= runing container
BIKIN PORT UNTUK CONTAINER
	- :> sudo docker container create --name mongoserver1 -p 8080:27017 mongo:4.1 
														= pembuatan container sebelumnya itu tidak buka port untuk di akses dari laur ->
														  agar bisa di expost kita perlu tambahkan port -p 8080:27017 saat create container ->
														  port-> -p = port -> 8080 = port yang kita mau expose -> 27017 port bawaan. 
														  (bisa dilihat saat kita bikin awal tadi) 
	- :> sudo docker container create --name mongoserver1 -p 8080:27017 mongo:latest 
	- :> sudo docker container create --name mongoserver2 -p 8181:27017 mongo:latest 
														= kalau mau bikin2 portnya harus unix, port internal tetap sama
HUBUNGKAN DENGAN CLIENT GUI 
	- instal dulu 'robomongo' di ubuntu market mongodb manager tool gui
	- coba runing via terminal :> sudo robomongo 
	- pastikan container yang akan di hubungkan dalam kondisi running -> baca port yg di expose
	- bikin nama koneksi sesuai nama container dan isikan portnya
	- koneksi berhasil 
		- klik kanan di koneksi nya -> create database belajar -> klik kanan belajar collection
		  create collection belajar2 -> lalu insert document -> bikin json = { "name" : "eko" } 
HAPUS IMAGE
	- image saat sudah di instanse. (di pakai) oleh container maka tidak bisa di hapus
	- kalau mau hapus image,berarti harus hapus dulu container nya, baru bisa di hapus 
	- :> sudo docker image rm mongo:4.1 = image.(tunggal/bkn images) rm = remove : version
BIKIN IMAGE DENGAN DOCKER FILE
	- dalam belajar ini saya punya aplikasi bernama "main.go"
	- kalau mau coba install golang di laptop nya lalu jalankan file tadi
		- :> dacker-app go run main.go -> enter
		- buka browser - url :> localhost 8080 -> akan tampil hello-world di browser
		- cara matikan terminal :> ctrl + C -> refresh browser -> matilah dia 
	- sekarang kita bikin 'docker file' dulu -> dokumentasi lengkap di web resmi 
		docker file panjang sekali tapi ini, langsung praktek sederhananya saja 
	- bika sublimetext bikin folder bernama "docker-app"-> berisi file main.go dan bikin 
	  file baru "Dockerfile"
	- buka "hub.docker.com" tab explore -> cari : golang v 1,4 -> script di Dockerfile : 
	  lihat sendiri isinya -> di sana ada 4 langkah keterangan
	  
	  	// 1. download golang dari hub.docker
	  	// 2. kopi aplikasi buatan kita "main.go" dan 
			//    letakkan dalam folder yang kita tentukan 
			//    sendiri
			// 3. tuliskan perintah exekusi applikasi kita 
			//		dalam sebuah array string seperti ini : di filenya
			// 4. langkah selanjutnya adalah build aplikasi kita ini

	- build image -> caranya -> di terminal :> docker build foldernya lalu --tag nama-versi kitasendiri (app-golang:1.0) "."
	- bersihnya ini.: " docker build --tag appku-golang:1.0 . " -> enter
	- pastikan kita berada pada folder file nya ->: buka folder lalu open in terminal
	- tunggu download golang 300 mb -> selesai cukup lama -> jika sudah
	- cek localhost kita dengan -> docker images -> jika dah berhasil akan tampak daftar imagesnya
	- build images golang dan image appku-golang dah berhasil -> maka images golang sudah terbuild 
	  dalam appku sehingga golangnya sudah bisa di hapus nggak apa2 kalau tidak di hapus juga nggak pp
	- sekarang tahap bikin container nya :> docker container create --name app1 -p 8080:8080 appku-golang:1.0
	- setelah berhasil cek -> docker container ls --all
	- jika dah ada jalankan -> docker container start app1
	- coba cek runing -> docker container ls -> jika ada maka tahap selanjutnya upload ke registry
 	- // 
UPLOAD IMAGE KE REGISTRI
	- image yang sudah kita build tadi akan kita upload ke registry -> 
	  registrinya kita buat di hub.docker.com
	- masuk hub.docker.com -> login -> tab repo-> create repo -> 
	  name : sesuai image kita tadi : appku-golang
	- pilih private / public ->  public = boleh di akses siapa saja -> selesai -> 
	  saat ini kita di generate kan image dengan nama repository-:
	  " opperdocker/appku-golang "
	- sekarang bagaimana kita upload image kita (appku-golang:1.0) di laptop tadi ke registry. 
	  (registrinya pakai hub.docker ini)
	  (berdampingan dengan image lain seperti mongo, golang dan ratusan lainya)
	  (bedany pada tab explore dan repository) (semacam di deploy hosting di docker registri gitu)
	  agar dapat di akses nantinya di server server kita atau pengguna lainya secara daring
	  -> buka terminal ketik -> 
	- docker-push copas script kita di hub.docker yang sudah kita generate tadi dan ganti tagname sesuai yg kita punya
	- " docker push opperdocker/appku-golang:1.0 "
	- oya namun saat kita push begitu saja image tidak ditemukan karena: 
		nama yang harus di push adalah " opperdocker/appku-golang " jadi mau tidak mau kita bikin image lagi bernama ini
		yang berisi image kita tadi caranya :> 
	- cek dulu images "sudo docker images" -> bikin images baru (tepatnya tag baru) dengan nama sesuai registry -> 
		:> docker tag local-image:tagname:tagname spasi nama baru sesuai registry -> bersihnya
		:> docker-tag appku-golang:1.0 opperdocker/appku-golang:1.0 -> kalu berhasil cek 
		:> docker images -> akan terlihat di tabel
	- sekarang push images local kita tadi ke docker registry -> 
	  :> docker push opperdocker/appku-golang:1.0 -> enter -> ohh! di suruh login dulu -> 
	  :> docker login -> user name password -> lalu coba push image kita
	  :> docker push opperdocker/appku-golang:1.0 -> enter ->  -> 
	- oiya perlu di ketahui bahwa kita tadi kan push image beserta golang yang saat di cek datanya cukup besar
		karena golang ini "dah ada" di docker kita tidak di pushkan ke registri dengan golangnya melainkan cukup appku-golang
		kecil milik kita saja makanya saat upload tidak terlalu lama  
	- cek images di docker hub -> buka hub.docker.com tab repo -> akan terlihat repo kita yang di upload
	- nanti kalau kita mau menggunakan images kita, ya sama dengan kita ambil mongo dan golang kita di atas 
	  menggunakan docker pull -> lihat di atas 
	- // lanjut
CONFIG / ENVIRONTMEN REGISTRY / ENVIRONTMEN VARIABLE
	- biasa nya lokasi db, user pass db, setiap server kan berubah2, maka di tangani dengan konfig environtmen
	- saat kita punya aplikasi kita juga biasanya punya konfigurasi -> konfig bisa di simpan di file app image 
	  database dll -> yang perlu di perhatikan adalah konfig harus bisa di setting "dari luar" dan transmisi 
	  harus cepat -> 
	  - jngan dalam image : tidak bisa di ubah 
	  - jngan di satu server : karena akan di konsums semua server node
	  - jngan di satu image khusus : masak harus bikin untuk setiap images produk, user dll
	  - lebih baik catat dalam bentuk "environtmen variable"
	- dalam prakteknya di video 17 milik programmer zaman now ENVIRONTMEN VARIABLE
			ENVIRONTMEN VARIABLE kayaknya mirip dengan VARIABLE GLOBAL di PHP 
	    ini di buat di "java dan spring kayaknya"
	  	perlu di cari itu caranya 
	- kita bikin Dockerfile
INTEGRASI CONTAINER DENGAN NETWORK
	- dengerin aja konsepnya sebab langkah sesungguhnya ada di docker compose di bawah ini
MENGGUNAKAN DOCKER COMPOSE
	- tugasnya otomisasi
		- bikin container dengan image
		- bikin dan build container dengan image dan file
		- koneksi antar kontainer - bikin koneksi
		- konfig environtmen variabel.(variabel global)
	- caranya:
		- bikin file.yml-> versi ringan json -> nama dah standard -> docker-compose.yml
		- gunakan version terbaru -> untuk tau versi -> googling docker version -> klik paling atas 
		- saat ini version 3.8 lihat di file yml nya tersedia di folder latihan
			- services = semua image service di bungkus dengan nama 'services'
			- depends_on = dependency service ini dengan service lainya -> 
			  prioritas starting akan di dahulukan u/ dependency
			- environtmen = adalah environtmen variabel konfig
		- network = nama network. (nama bikin sendiri) -> name samakan -> lalu atribut semua services 
		  berikan network yang sama
	- jalankan docker-compose:
		- masuk ke folder dimana file docker-compose.yml berada
		- :> sudo docker-compose 
		- lalu di ikuti commond di bawah ini:
			- up = create n start containers
			- down = stop n delete containers, network, images, volumes
			- start = starting containers
			- stop = stoping containers
			- tambahkan di belakang ini dengan ini:
				- d = - daemon, running di background
				- ctrl c = untuk stop jalan di logs terminal jika tidak di jalankan di daemon
		- cek jalan -> sudo docker container ls
		- cek log dan data properties -> sudo docker logs java-docker
MANAGE DATA KE DOCKER
	- saat bikin container idealnya 'stateless'(kontainer tidak menyimpan data)
		tapi bagaimana jika kontainer kita itu berupa database, kan ada datanya tuh
		nanti kalau maintenance kan sering 'create delete', ini bahaya
		bagaimana agar stateless - padahal statefull 
	- di dalam docker ada manajemen data -> yaitu di simpan dalam storage 
	- ada banyak type storage di docker, namun kita hanya bicara sedikit aja contohnya ini:
	- volume :
		- problem
			- saat kita bikin kontainer mongodb misalkan-> lalu kita insert data di dalamnya (menggunakan robomongo)->
			  nah saat kita hapus containernya mongodb beserta datanya akan ikut terhapus -> makanya 
				jangan simpan dat di dalam container nya melainkan di volume 
		- solusi
			- volume adalah semacam directory lah gitu -> namun path nya harus sama dengan path yang dibuat
			  saat bikin mongo dimana path mongo menyimpan data caranya:
			- :> sudo mongo volume create mongo_data
			setelah kita bikin volume -> selanjutnya bikin container yang ada volume nya -> 
			pathnya sesuai standard documentasi: hub.docker.com/_/mongo
			- :> sudo docker container create --name mongo -p 27017:27017 -v mongo_data:/data/db mongo:4-xenial 
			- sekarang dah bebas create delete container tanpa menggangu db
	- selain volume:
		- di docker selain volume, menyimpan db itu bayak type yaitu disini:
			- docs.docker.com/storage/volume/ -> disana ada:
			- backup, restore, migrate data volume
		- pertama belajar di sarankan untuk menggunakan volume karena untuk malakukan  backup restore dan pindah volume 
		  bisa dilakukan di volume ini
		- namun volume itu kan di manage oleh docker jadi tidak bisa kita lihat isi scripnya volume itu gimana 
		- kalu mau belajar coba simpan saja db di desktop saja tanpa membuat volume langsung saja
			tadinya:
			- :> sudo docker container create --name mongo -p 27017:27017 -v mongo_data:/data/db mongo:4-xenial 
			jadinya:
			- :> sudo docker container create --name mongo -p 27017:27017 -v /desktop/dataku/ mongo:4-xenial 
			- url path nya lihat pakai terminal
			begini ini bisa saja kita simpan manual tanpa volume namun disini tidak ada backup restore dll seperti di volume
MASUK KE DOCKER CONTAINER 
	- problem:
		- biasa nya kalau image nya hanya versi linux dan tidak bisa di windows sedang OS kita windows
		  padahal kita akan akses image pakai client windows itu gimana?
	- solusi:
		- contoh kita pakai image 'redis'(kan versi windows tidak ada) ->
			OS kita windows nih dan robomongo client kita versi windows ->
		- terpaksa kita masuk ke 'image' lalu kita interkasi client dengan image linux ini
		- caranya lebih lengkap lihat video programmer zaman now docker 21
			- :> docker exec [OPTION] CONTAINER COMMOND [ARGS]
			- :> docker --tty --interactive redis /bin/bash -> maka kita akan di masukan ke redis/data
				- kalau mau lihat isinya :> ls 
				- kalau mau lihat cli image redis :> type redis-cli 
				- mau akses cli nya :> redis-cli
				- akses data :> get nama
				- :> set nama aqil
				- :> get nama
				- :> exit
KITEMATIC
	- problem:
		- ada tools pembuat container namanya KITEMATIC -> www.kitematic.com
	- solusi:
		- hanya untuk windows dan mac 
		- bisa create, delete, start, stop, exec, dll
MEMBERSIHKAN SAMPAH
	- problem:
		- saat create delete container volume network image dll
	- solusi:
	- hapus object yang tak terpakai:
		- clear data 
		- di container: sudo container prune
		- di image: sudo image prune
		- di network: sudo network prune
		- di volume : sudo volume prune
		- atau seluruhnya 
			- docker system -> ada daftr command -> coba -> 
			:> docker system df -> hampir sama dengan ls yaitu tampilkan data yang ada -> 
			sampai dengan size data yang bisa di kembalikan jika di jalankan prune
			:> docker system prune	// ini masih menyisakan volume 
			:> docker system prune -a --volumes // untuk hapus semua 

