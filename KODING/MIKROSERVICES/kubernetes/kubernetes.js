PERSIAPAN
 - harus tau manager container seperti 'docker'
 - sebab kubernetes memanajement kontainer dsb hasil dari 'docker'
PENGENALAN
	- apa itu kubernetes:
	- adalah aplikasi automation: deployment, scaling, manager container
	- opensouce, alternative gratisan, populer, di pakai unicorn indo dan dunia
	- oleh google- untuk nangani ribuan server nya - asalnya dari 'borg' jadi 'omega' 
	- 2014 sistem kubernetes di buat ulang dari 'omega' dengan bahasa golang
	- konsep kerja:
		- jangan takut mendengar 'managemen ribuan server' begitu kenal kubernetes 
		  semuanya jadi sederhana
		- tugas developer hanya bikin configuration file 
		  selebihnya mesin akan bekerja otomatis menangani semua masalah komplex server node
ARSITEKTUR
	- saat kita runing kubernetes kita sebenarnya manjalankan satu buah kluster besar ->
	  di dalamnya ada dua komponen besar: 1 master (kubernetes master)2 worker (kubernetes node)
	  semacam HTML 'head' dan 'body' -> gambar slide1.png
	1 kubernetes master di dalmnya ada:
		1 kube API server = tugasnya sentral/terminal bagi semua service di master
		2 etcd = sebagai database penyimpan data kubernetes cluster (ya mirip my sql lah)
		3 kube-scheduler = manager penjadwalan node
		4 kube-controler-manager = kontrol seluruh service di cluster terutama node2 di worker
			deteksi node rusak, mati, dll 
		5 cloud-controler-manager = mirip, bedanya manage interaksi cloudnya saja
	2 kubernetes worker di dalamnya ada:
		1 kubelet -> 
			- adalah tempat kontrol memastikan node berjalan atu tidak.
			- aplikasi ini berjalan di setiap node (server)
		2 kube-proxy
			- sebagai proxy arus network(request-response) ke node kita
			- berfungsi sebagai load balancer juga
			- sebagai verifi arus mana yang lolos dan yang tidak boleh
		3 manager container. (docker)
			- seperti docker, containerd, cri-o, rktlet dll
INSTALL DI LOCAL/KOMPUTER
	- di windows di sarankan pakai 'docker desktop' jalankan dan centang enable kubernetes -> 
	  akan download yang di butuhkan otomatis
	- di linux pakai minikube 
		- aplikasi yang di butuhkan adalah:
			di ubuntu 20.04 : 
				- virtualbox
				- minikube
				- minikubectl
			1. install virtual box:
				download dan install di website resmi -> ikuti cara install dan platform os
			2. install minikube -> buka website resmi -> ikuti sesuai platform os anda 
			3. install minikubectl -> 
		- saya install aplikasi 3 app tersebut ada masalah di virtualbox -> atau lebih jelasnya di:
			https://lms.onnocenter.or.id/wiki/index.php/Kubernetes:_Install_MiniKube
		- ada masalah di virtualbox nya kayaknya harus install ulang 
		- beresin dulu .... -
		- kayaknya  masalah vm 
			- karena versi terbaru vm nya pakai bukan virtual box
			- padahal kita install di ubuntu ini virtual box
			- solusinya kita paksa ke virtualbox dengan, ini di bawah 
				:> minikube start --vm-driver=virtualbox
				:> minikube start --vm-driver=virtualbox --cpus=2 --memory=2g --disk-size=20g	

template
	file template silahkan download di ->
		https://github.com/khannedy/belajar-kubernetes
NODE
	- adalah = "worker" di dalam komponen worker simpul berbentuk "mesin server" ataupun "VM" 
	  di dalam lingkungan kubernetes (dulu di sebut minion)
	- di dalam masing2 node selalu ada 3 aplikasi ini: kubelet, kube-proxy, kontainer manager (docker)
	- kelebihan: saat kita deploy di kubernetes, kita sudah tidak perlu berfikir (peduli) berapa ribu mesin/node 
		dan dimana: anggap saja kita sudah mendeploy aplikasi kita di sebuah pc berkekuatan super
	- koding:
		- melihat list node -> terminal :> kubectl get node [atau node, nodes, no] -> // list node
		- melihat detil node -> :> kubectl describe node namanode -> 						// berisi properti informatif

POD
	- kalau di docker kan kita kan dengar ada image ada container nah di kuber netes ada POD
	- pod adalah: unit terkecil yang dapat di deploy di kubernetes
	- pod bisa berisi lebih dari satu container
	- pod hanya akan hidup dalam satu node. tidak bisa share hardware. makanya saat bikin node pod, hardware  harus memadai
	- sederhana nya pod adalah aplikasi kita yang di running di cluster kubernetes
	- sederhana nya lagi pod adalah pembungkus container milik kubernetes
	- kenapa pakai pod tidak langsung container saja:
		- takutnya nanti popularitas docker berganti ke yang lainya
		- antisipasi terhadap bila dalam beberapa container bisa di wadahi dengan satu pod
		- koding:
			cara melihat pod -> terimnal -> :> kubectl get pod // list pod
			detil pod -> kubectl describe pod namapod 			// detil pod
CARA BIKIN POD
	- CARA BIKIN "POD" ATAU "APAPUN" DI KUBERNETES ITU BIASA NYA MENGGUANAKAN: KONFIGURATION FILE YML
	- jadi koding nya hanya di "yaml" dan deploy menggunakan "terminal"
	- cara bikin pod -> bikin file " pod.yaml " -> isinya lihat di file template 
	  di folder ini dah ada template " pod.yaml " -> edit template sesuai preferensi kita-> 
	  seperti nama file, nama container, nama pod, serta port nya dll 
	- dalam kasus ini kita akan buat pod dengan image container NginX alasanya file kecil 
	  (nanti boleh menggunakan image lain yang lbh baik dari NginX juga boleh)
	- setelah itu file tersebut kita deploy ke minikube (nantinya di kubernetes) menggunakan terminal
		:> cubectl create -f nginx.yaml   			// bikin pod, pastikan namanya unix dengan pod lainya
		:> kubectl get pod [ bisa pod,pods,po ]	// melihat list pod
		:> kubectl get pod -o wide						// melihat list pod lebih detil
		:> kubectl discribe pod namapod				// melihat list pod lebih detil lagi
		:> kubectl port-forward namapod [portAkses:portPod]
		:> kubectl port-forward namapod 8888:80	// ini untuk akses port saja (memastikan running atau belum)
		   pada prakteknya kita tidak melakukan forward port seperti ini
LABEL
	- adalah: informasi tambahan pada pod 
	- gunanya : 
		- memberi tanda/identifier pada pod
		- info tambahan seperti version team dll
		- memudahkan pengelolaan pod
		- label bisa digunakan bukan hanya pod di kubernetes tetapi juga pada semua resource di kubernetes
		  seperti: service, replication controler, replica set dll
		- cara bikin configuration file untuk label bisa dilihat pada : " pod-with-label.yaml "
		    - di dalamnya ada atribut berisi key value
		    - biasa nya akan di gunakan untuyk selector pada query
		    - dalam atribut tidak boleh ada spasi (di gantikan dash)
		    di dalam nya file ymel nya ada atribut bernama "labels"
		    contoh 
		    	labels:
		    		- name : NginX
		    		  version : 1.0.4
		    		  team : finance
		    		  ports : 
		    		  environtmen : production
		- :> cubectl create -f pod-with-label.yaml   			// bikin pod beserta label (pod-with-label adalah "nama file")
		- :> cubectl get pods
		- :> cubectl get pods --show-labels
		- :> cubectl.exe label pod namapod key=value				// nambah label saat sudah di deploy(sssangat tidak di sarankan sebab tidak tertulis di file config)
		- :> cubectl.exe label pod namapod key=value --overwrite	// nambah dengan replace (karena kalau nambah dengan key yang sama g boleh/harus uniq)- :> cubectl.exe label pod namapod key=value				// nambah label saat sudah di deploy(sssangat tidak di sarankan sebab tidak tertulis di file config)
		- :> cubectl label pod namapod key=value					// bisa juga begini
		- :> cubectl label pod namapod key=value --overwrite	// bisa juga begini
		- :> cubectl get pods -l team 								// cari pods dengan label yng memiliki key "team"
		- :> cubectl get pods -l team=finance						// cari pods dengan label yng memiliki key "team" dan value "finance"
		- :> cubectl get pods -l '!team=finance'					// cari pods dengan label yng tdk memiliki key "team" dan value "finance" (pakai koma)
		- :> cubectl get pods -l 'environtmen in (production qa developmen)'	// cari pods dengan key mengandung 3 value itu
		- :> cubectl get pods -l environtmen,team					// cari pods dengan 2 key 
		- :> cubectl get pods -l environtmen,team=finance		// cari pods dengan 2 key dan ada value 
		- :> kubectl discribe pod namapod							// melihat list pod lebih detil lagi ada label juga annotation

ANNOTATION
	- annotation mirip dengan label, hanya tidak dapat di filter seperti label
	- biasanya annotation di gunakan untuk menambahkan info tambahandalam ukuran besar
	- annotation bisa menampung info sampai 256 kb
	- kalu di label kan terbatas seperti tidak boleh ada spasi 
	- biasanya di pakai untuk dokumentasi dan juga string jason dll
	- tapi tidak bisa di filter atau di gunakan untuk selector
	- contoh file config nya pod-with-annotation di "template/ pod-with-annotation.yaml "
		metadata:
  			name: pod-name
 		 	labels:
    			label-key1: label-value1
		  	annotations:
		    	annotation-key1: annotation-value
		    	annotation-key2: veri long annotation value, bla bla bla bla bla bla
	- deploy di minikube -> :> kubectl create -f pod-with-annotation.yaml
	- cara melihat listnya sama dengan di atas 
		- :> cubectl get pods
		- :> kubectl discribe pod namapod								// melihat list pod lebih detil lagi ada label juga annotation
		- :> cubectl annotate pod namapod key=value					// cara namabah annotasi mirip dengan nambah labels  
		- :> cubectl annotate pod namapod key=value --overwrite  // cara untuk replace tanpa ini harus uniq

NAMESPACE
	- hampir sama dengan label dan annotation tapi levelnya lebih tinggi lagi
	- kayak folder pembungkus resource gitu : pod yang ada annotation dan label kayak gitu
	- cara melihat listnya sama dengan di atas 
		- :> cubectl get namespace 	// namespace default
		- :> cubectl get namespaces 
		- :> cubectl get ns
		- :> cubectl get --namespace finance		// namespace dengan nama finance
		- :> cubectl get --namespace kube-system	// namespace bawaan system
		- :> cubectl delete --namespace finance 	// PENTING saat hapus namespace resource (pod dll) yang ada didalamnya juga ikut terhapus
		     													// mirip hapus folder
	- ctatan 
		- kalau kita tidak memberi namespace maka kita akan di buatkan nama default
		- kalau kita bikin pod nama harus uniq kalau sama ya bedakan namespace nya  
BIKIN NAMESPACE
	- caranya mirip dengan bikin resource lainya -> untuk template -> "template/namespace.yaml"
		- atributnya cuma name saja nggak ada yang aneh2 lainya
	- deploy
		- cubectl create -f namespace-finace.yaml
	- bikin pod kedalam namespace-finance
		- cubectl create -f nginx.yaml --namespace namespace-finance
	- namespace bukanlah isolasi departemen melainkan hanya gruping karena setiap pod bisa saling komunikasi
	- kalau kita mau isolasi departemen maka kita pisahkan saja menggunakan cluster kubernetes
HAPUS POD
	- satu satu
		:> cubectl delete pod namapod
	- banyak sekaligus
		:> cubectl delete pod namapod1 namapod2 namapod3
	- hapus pod pakai selector label
		:> cubectl delete pod -l key=value
	- hapus semua pod di dalam sebuah namespace / namespace tidak ikut terhapus
		:> cubectl delete pod --all 			// hapus semua pod di namespace default
		:> cubectl delete pod --all --namespace namespace-finance	// di namespace tertentu
	- 
PROBE
	- di materi selanjutnya akan bicara soal replication controler dan replikaset
	  namun sifatnya sangat 'depend terhadap pengecekan', maka pelajari dulu 'pengecekan' -> 
	- pengecekan ada 3 jenis :liveness, readiness,startup probe di kubernetes
		- kubelet menggunakan 'liveness probe' untuk mengecek kapan perlu 'merestart' pod
		- misalnya saat 'liveness probe' pada pod tidak meresponse, kubelet akan scr otomatis merestart pod
		- kubelet menggunakan 'readiness probe' untuk mengecek apakah pod siap menerima traffic
		- kubelet menggunakan 'startup probe' untuk mengecek apakah pod sudah berjalan, jika belum
		  berjalan maka kubelet tidak akan mengerjakan pengecekan liveness dan readiness
		- 'startup probe' cocok untuk pod yang membutuhkan proses startup lama, 
		  ini dapat di gunakan untuk memastikan, pod tidak mati oleh kubelet 
		  sebelum selesai berjalan dengan sempurna
		- method pengecekan menggunakan 3 jenis:
			- 'http GET'
			- 'TCP socket'
			- 'Commond exec'
		- untuk membuat probe -> bikin file config -> ada di " template/ pod-with-probe.yaml "
			- di dalam spec containernya memiliki 3 atribut di bawah:
				livenessProbe, readinessProbe, startupProbe,.- boleh diberikan sebagian atau semua
			- kurang lebih:
spec:
  containers:
    - name: container-name
      image: image-name
      ports:
        - containerPort: 80
      livenessProbe:
        httpGet:
          path: /						// ganti dengan slash aja
          port: 80					// port 80
        initialDelaySeconds: 5	// kalau melakukan pengecakan nunggu sampai berapa detik(default 10)
        periodSeconds: 10			// setip 6 detik cek ulang  (default 0)
        timeoutSeconds: 1			// response >1 maka di anggap 'tidak sehat' (default 1)
        successThreshold: 1		// berapa kali pengecekan 'sehat' (1) maka dianggap sehat (default 1)
        failureThreshold: 3		// berapa kali pengecekan 'gagal' (3) maka dianggap tidak sehat (default 3)
// 
	- setelah itu deploy ke minikube dengan create
	- 	:> kubectl create -f namaFileConfig.yaml
		:> kubectl get pod  
		:> kubectl describe pod namapod // info lengkap ada counter restart success failure
	- di video 13 probe kubernetes -> ada simulasi pengecekan yang gagal dan melakukan restarting counter-> 
REPLICATION CONTROLLER
	- 'replication controller' bertugas untuk memastikan bahwa pod selalu berjalan
	- jika pod tiba2 mati atau hilang, misal ada node yang mati, maka replication controller
	  secara otomatis akan menjalankan pod yang mati atau hilang tersebut
	- replication controller biasanya menjalankan lebih dari satu pod
	- replication controler akan memastikan jumlah pod yang berjalan sejumlah yang telah di tentukan,
	  jika kurang akan menambah pod baru, jika lebih akan menghapus pod yang ada
	- di dalam file config terdapat 3 komponen atribut penting :
		- selector pod pakai label
		- replica count, jumlah pod yang seharusnya running
		- pod template, yaitu template untuk pod yang tiba2 hilang / mati
	- kesimpulan:
		- tadinya kita bikin pod langsung tiga secara manual 
			sekarang tidak perlu karena otomatis di replication controller 
		- tadinya kita bikin pod secara manual
			sekarang kita bikin pod secara template di replication controller
	- file yaml:

BIKIN REPLICATION CONTROLLER

gunakan dari template "replication-controller.yaml"

apiVersion: v1
kind: ReplicationController 				// sesuai dengan resource, kalau pod, namespace, dll disini
metadata:
  name: nama-replication-controller		// di dalam contoh beri nama " nginx-rc "
  labels: 										// label dan annotyation bisa di hapus terserah ini kan selector saja
    label-key1: label-value1 
  annotations:
    annotation-key1: annotation-value1
spec:
  replicas: 3									// disini yang penting berapa pod replika yg selalu di running
  selector:
    label-key1: label-value1				// selector ini merujuk ke label di template dan harus match jangan salah
  template:
    metadata:
      name: nama-pod
      labels:
        label-key1: label-value1			// ini label dalam template pod nya yang harus match
    spec:
      containers:
        - name: container-name
          image: image-name
          ports:
            - containerPort: 80
          readinessProbe:
            httpGet:
              path: /health
              port: 80
            initialDelaySeconds: 0		// disini ke bawah boleh hapus dulu
            periodSeconds: 10
            failureThreshold: 3
            successThreshold: 1
            timeoutSeconds: 1 
//

	- deploy 
		kubectl create -f nginx-rc.yaml		// deploy
		kubectl get replicationcontrollers 	// lihat list rc
		kubectl get replicationcontroller 	// atau
		kubectl get rc 							// atau
	- simulasi kita hapus pod nya salah satunya dari tiga yang di generate apa yang terjadi 
	  yang terjadi adalah pod yang di hapus akan terhapus namun rc akan menjenerate lagi pod pengganti
	  praktenya begini:
		kubectl create -f nginx-rc.yaml		// deploy/ buat rc dan generate 3 pod di dalmnya
		kubectl get rc 							// lihat list rc
		kubectl get pod 							// lihat list pod yang dah di generate (tampil 3 buah dengan nomor identifier)
		kubectl delete pod nginx-rc-qfwgs	// coba kita hapus salah satunya
		kubectl get pod 							// sekarang kita lihat kembali pod nya
														// dan lihat "age" nya di consol maka akan tampil usia pod terbaru 
														// mungkin masih hitungan detik


HAPUS REPLICATION CONTROLLER
	- saat kita menghapus Replication Controller, maka secara otomatis Pod yang berada pada label
	  selectornya akan ikut terhapus.-(pod yang di generate di RC ini)
	- jika kita ingin menghapus Replication Controller, tanpa menghapus Pod yang berada pada label
	  selectornya, kita bisa tambahkan opsi " --cascade=false " defaultnya " true "
	- terminal
		:> kubect delete rc namarc 						// hapus RC beserta pod turunanya
		:> kubect delete rc namarc --cascade=false 	// hapus rc tanpa pod nya / hati hati jangan typo bisa hilang semua pod nya
	- 
REPLICA SET
	- pada awalnya replication controller digunakan untuk menjaga jumlah replica pod dan
	  me-reschedule ulang pod yang mati.
	- namun sekarang, telah dikenalkan resource baru yang bernama replica set
	- replika set sebenarnya mirip fungsinya namun ada improvement baru 
	- replica set adalah generasi baru dari replication controller, dan digunakan sebagai pengganti
	  replication controller
	- replication controller sendiri penggunaannya sekarang sudah tidak direkomendasikan
	- replica set memiliki kemampuan hampir mirip dengan replication controller
	  namun replica set memiliki label selector yang lebih expressive dibandingkan replication
     controller yang hanya memiliki fitur label selector secara match
   - prktek pakai templete
   	" replica-set.yml ":

apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      name: nginx
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx
        ports:
        - containerPort: 80
// 

	deploy:
		kubectl create -f namafile.yaml
		kubectl get pod 							// lihat list pod yang dah di generate (tampil 3 buah dengan nomor identifier)
		kubectl get rs 							// lihat list replica set

LABEL SELECTOR MATCH EXPRESSION
	- sebelumnya, jika diperhatikan, untuk selector di replication set kita menggunakan 'matchlabels',
		yang artinya selector tersebut cara kerjanya match (sama seperti di replicationcontroller)
	- selain menggunakan matchlabels, operasi lain yang bisa digunakan pada selector di replication
		set adalah menggunakan 'matchexpression'
	- kalau selector di rc kan pakai matchlabels jadi label dan selector harus sama nah disini pakai operator 
		"in, notin, exist, notexist"
	- file config : " replica-set-match-expression.yaml "

spec:
  replicas: 3
  selector:
    matchLabels: 					// ini sekaranag ga di pakai dulu boleh hapus saja
      app : nginx
    matchExpressions: 			// gunakan yang ini saja
      - key: app 					// key nya disini, dan boleh lebih dari satu
        operator: In
        values:
          - nginx				// value disini
          - prod 				// oleh lebih dari satu nanti di template hanya match kan dengan salah satu disini
          - qa
          - dev
	template:
    metadata:
      name: nginx
      labels:
        app: nginx 			// di template ini key value harus match dengan yang di  matchExpression
    spec:
      containers:
      - name: nginx
        image: nginx
        ports:
        - containerPort: 80
// 

UPGRADE MINIKUBE
	:> minikube update-check				// cek
	:> minikube stop 							// stop dulu
	:> minikube delete						// hapus dulu
	-> download terbaru di web resmi 	// new version 
	-> cd /download/applikasiku			// masuk ke folder
	:> chmod +x minikube 					// lakukan untuk executable (linux dan ios)
	:> minikube update-check				// cek lagi
	:> minikube start 						// jangan langsung start karena defaulnya running di vm apa gitu
	:> minikube start --vm-driver=virtualbox	// maunya kita runnng di virtualbox
	:> minikube start --vm-driver=virtualbox --cpus=2 --memory=2g --disk-size=20g		// kita juga bisa lakukan setting hardware
	- saat di enter maka yang akan terjadi adalah maenjalankan download sebesar 450 mb an lama
	- tunggu sampai selesai
	- 
DAEMON SET
	- saat menggunakan replica set atau replication controller, pod akan dijalankan di node secara
		random oleh si kubernetes
	- jika kita ingin menjalankan pod di setiap node yang ada di kubernetes, dan tiap pod hanya boleh
		jalan 1 di node, kita bisa menggunakan daemon set
	- secara default daemon set akan menjalankan pod di setiap node yang ada di kubernetes cluster,
		kecuali jika kita meminta hanya jalan di node tertentu

JOB
CRON JOB
NODE SELECTOR
ALL
SERVICE
BIKIN SERVICE
AKSES SERVICE
EXTERNAL SERVICE
MENGEXPOSE SERVICE
SERVICE NODE PORT
SERVICE NODE BALANCER
INGRESS
MULTI CONTAINER POD
VOLUME
SHARING VOLUME
ENVIRONTMENT VARIABLE
CONFIG MAP
SECRET
DOWNWARD
MANAGE KUBERNETES OBJECT
DEPLOYMENT
UPDATE DEPLOYMENT
ROLLBACK DEPLOYMENT
PERSISTENT VOLUME
STATEFULL
BIKIN STATEFULL SENDIRI
KUBERNETES DASHBOARD
KOMPUTATIONAL RESOURCE
HORIZONTAL POD AUTOSCALER
SELANJUTNYA
	- prktekin aja
	- pilih cloud
	addon :
	- kubernetes helm
	- kubernetes customize
	- kontak
