Firewall

di dalam ada beberapa fitur tetepi disini hanya 3 yang di bahas
1. NAT
2. mangle
3. filter
4. (RAW tambahan)

FIREWALL
-------------------------------------------------
Secara umum (nanti di pakai juga oleh 3 yang di atas tadi)
- semua paket yang melewati ether/interface di router mikrotik pasti akan melewati 5 chain (mata rantai pos pemeriksaan) 
    baik di lakukan proses pada paket atau di biarkan tanpa proses(lewat begitu saja). 5 chain tetap ada:
    1. prerouting
    2. input
    3. forward
    4. output
    5. postrouting

- 5 pos ini adalah "alamat" atau "nama lokasi" dimana paket bisa dapat di lakukan action
- 5 pos ini sudah fix jumlah dan urutan nya, yang dinamis adalah action nya  
- saat paket masuk ke prerouting di router. maka opertama kali yg dilakukan pencatatan kedalam connectiuon tracking terlebih dahulu. 
keperluan ada relate di bagian bawah nanti

NAT (Network Alocation Translation) 
-------------------------------------------------
Perubahan alamat IP di paket header  
header ada 2: 
    1. source       -> source NAT: merubah ip sumber user
    2. destination  -> destination NAT: merubah ip tujuan ke internet atau router extenal
    
Fungsi: 
    NAT hanya untuk mengubah 2 IP tadi di atas 
implementasi:
    di management jaringan internet biasanya yang terjadi 
    - internet berada di IP public yang mahal  
    - sedangkan users berada di jaringan local yang murah, dan berjumlah banyak 
    - sedang users untuk akses internet harus public, padahal biasanya ISP memberikan ip public hanya 1 
    - solusinya 1 itu harus di gunakan untuk semua users di local, maka - 
    - Semua IP local harus di ubah agar nanti di kenali 1 IP oleh internet public (mungkin di tambahin header, atau port atau bagaimana)  
    - karena akses internet itu ada dua jalur, maka NAT harus di lakukan di kedua jalur tersebut
        1. public (Source NAT). requeast local ke -> internet public. NAT ini di lakukan di postrouting (pintu pertama yang di hadapi request)
        2. local (Destination NAT). response public ke -> local. NAT ini di lakukan di prerouting (pintu pertama yang di hadapi response) 
    - sebenarnya perubahan ip bukan hanya dilakuakan dari public ke intrnet biasanya ada beberapa keperluan atas NAT ini: 
        - antar jaringan router
        - server local ke router
        - service internal misalnya: redirect DNS, Proxy, loginpage hotspot(auto dst NAT saat set hotspot jadi banyak role)
    - ada pembaruan NAT yang tidak perlu ubah di 2 sisi SRC maupun DST TIDAK PENGARUH, alias sama saja  
        jadi di ubah di satu sisi saja sudah bisa di pakai di kedua sisi 
        (yang di bisarakan ini jika ip public itu di berikan pakai slash bukan yang tunggal, kalau hanya tunggal pakai masquerade)
        ada dua metode action untuk melakukan ini yaitu: 
        1. netmap   : jika ip public dan ip local harus memiliki segment yang sama banyak misal /24 di kedua sisi
            sehingga ip nya bisa memiliki pasangan yang smaa persis pemetaanya tinggal di pasangkan saja
        2. same     : jika jumlahnya slashnya beda antara public dan local pakailah same, 
            karena same ini menjaga agar tiap ip local akan mendapat IP yang sama saat keluar dan masuk 
        3. beda dengan masquerade. kalau masquerade hanya memiliki 1 IP public untuk semua ip local 
    - kalau sudah masquerade, maka tidak perlu lagi netmap atau same. pilih salah satu saja 
    - meskipun dalam satu router memeiliki 2 jaringan boleh, yang 1 pakai masqurade yang satu pakai netmap. 
        tetapi dalam satu jaringan tetap pilih 1 saja 
    - NAT juga bisa di lakukan pada port. misal kita memiliki 2 port sama-sama :80 di mikrotik kita: 1. webfig 2. webserver local
        kita dapat membikin NAT jika ada yang akses 81 dari luar masuk ke mikrotik. maka NAT akan mengarahkan ke webserver:80 kita 
           
MANGLE
-------------------------------------------------
- fungsi utama untuk menandai atau menamai (marking) 
    mangle dapat menandai di 3 jenis (action): 
    1. mark-connection  : biasanya untuk filter 
    2. mark-packet      : khusus untuk queue 
    3. mark-routing     : khusus untuk routing 
- mark tersebut nantinya akan di gunakan dalam 3 keperluan 
    (di masing masing req dan res nya) : 
    1. queue            : simple queue dan queue tree 
    2. filter           : filter bisa memeilih salah satu dari 3 macam mark
    3. routing          : ISP, ip, subnet, port, ether, app, protocol, layer, addresslist, dll
- marking bisa di lakukan di semua (5) post 
    kenapa harus ada 3 jenis mark. karena ada beberapa keperluan 
    - misalnya saat mark-connection saat akan melakukan queue bisa saja salah baca karena ada req res   
- implementasi 
    untuk NAT(selain masquerade): sebaiknya di tandai di mark-connection supaya tidak harus 
- passtrough
    - fitur ini hanya ada di mangle 
    - passtrough berfungsi semacam break atau continue di javascript, yaitu: 
    - jika passthrough=true maka paket/conn akan mangle kan kan lagi  
    - jika passthrough=false maka paket sudah di lepaskan dari mangle 
- 1 paket biasanya hanya boleh memiliki 1 mark, maka saat di buat banyak marking maka yang terakhir yang valid  
- mangle juga hanya bisa di terbaca di 1 router bersangkutan saja tidak bisa di lempar markingnya ke router lainya 

FILTER 
-------------------------------------------------
- Fungsi utamanya adalah untuk Block atau Accept paket saja sih, 
- adapun memilih untuk "siapa" saja yang di filter, ini terjadi di mangle tadi

dalam setiap paket data itu pasti di sematkan 4 status otomatis 
hal ini di lakukan oleh  indentificator paket. yang bernama conntrack (connection tracking) 
1. New          : semacam header dia adalah paket pertama yang berjalan (kepala gerbong)(dancok: komandan pucuk)
2. Establish    : paket di belakang New tepat dan belum terpisah oleh paket lainya 
3. Related      : paket yang tepisah oleh paket lain. tetapi masih ada hubungan dengan status dengan paket New atau paket di depanya jika itu mata rantai 
4. Invalid      : Paket yang terputus koneksi, terjadi dengan berbagai alasan, misalnya terlambat masuk saat koneksi sudah di tutup dll

filter hanya bisa di lakukan di 3 chain saja:
1. Input   : filter dari luar ke router  
2. Output  : filter local ke Luar
3. Forward : filter semua yang lewat di router 

best practice
filtering sebaiknya di lakukan di New nya saja karena lebih efisien CPU daripada cek di paket establish, related. caranya:
- buat 3 role sebagai berikut
    1. accept "semua paket" yang memiliki status establish, related. passthrough
    2. drop "semua paket" yang memiliki status Invalid. passthrough
    3. Terakhir lakukan filter di New nya saja, di role tarakhir. !passthrough

RAW
-------------------------------------------------
RAW adalah fitur baru dari filter yang lebih baik  
Sebenarnya fungsi utamanya adalah filter juga, hanya saja:
RAW itu di lakukan di Chain=Prerouiting. dan di lakukan sebelum conntrack.

- dulu sebelum ada RAW saat blokir DDOS misalnya pasti di lakukan di input.
- hasilnya DDOS akan ter BLOKIR memang tetapi masih masuk kedalam daftar contrack 
- artinya masih memakan sumberdaya CPU dan memori ini masih terserang dan menderita. apa gunanya blokir di input
- diisinilah gunanya RAW. karena RAW di lakukan di prerouting dan conntrack 
- tetapi di RAW tidak bisa menggunakan status jadinya ya. (New, Establish, Related, Invalid). sesuaikanh dengan kebutuhan saja  
- perlu diingat lagi DDOS masih bisa masuk ke trafik kita sebelum masuk ke prerouting. memang bisa mengamankan jaringan local kita sehingga
    tetapi trafik ddos masih masih menyerang bagian luarnya yaitu paket sebelum prerouting tadi. akibatnya Bandwidth jadi penuh juga
    solusinya pekerjaan filter ddos harus dilakukan di router atasnya yaitu dari Provider atau dari router uplink tersendiri untuk filter IP ddos ini

FAST PATH dan FAST TRACK
-------------------------------------------------

FASTPATH
- kecepatan tertinggi internet itu lewat kabel saja tanpa processing (disebut wirespeed).
- saat trafik di alirkan melewati router dari interface1 ke interface lain - 
    pasti tidak mungkin mendapatkan kecepatan wirespeed, dikarenakan di dalam routing harus melewati processing pasti ada latency
- tetapi jika ingin melewatkan trafik dan melompati bahkan membypass chain process di jaringan local router, maka solusinya Fastpath=enable ("jalur Cepat")
- ip > setting > allow fastpath 
- jika menggunakan fastpath berarti tidak akan ada pemrosesan firewall, queue, sniffer, torch lagi karena akan di bypass tidak melewati chain dan conntrack sama sekali
- berarti yang bisa dilakaukan ketika fastpath hanya fitur native saja: rotuting, bridging, saja tanpa firewall dan role lainya 
- berarti juga saat menggunakan role sekali saja langsung keluar dari fastpath, jadi tidak boleh menjalankan firewall sama sekali. native lah jadinya  
- berarti lagi maka menghilangkan fungsi besar dari sebuah router mikrotik
- maka dari itu jalan tengah nya muncul lah fitur fasttrack 

FASTTRACK
- di fasttrack ini masih bisa menguntungkan pada kasus ini
- misalnya filter, NAT, dan Mangle saya hanya gunakan untuk yang terkait dengan Internet yg darei public saja, sedang yang di local saya ingin wirespeed 
    kalau pakai fastpath nggak bisa kan karena semua firewall baik secara local maupun public  
- solusinya maka pakai fast track 
- di fasttrack paket tetap di lewatkan ke chain tetapi tetap mem Bypass firewall dan role lainya 
- mangle > action > fasttrack-connection 
- nanti di filter > dinamic role > trafik fasttrack nanti akan kelihatan 
- biasanya di gunakan  local ke local > contoh biasanya antar local ada limit padahal maunya tidak maka pakailah fasttrack
- jadi ingat di fasttrack tidak bisa mainan filter atau firewall lainya 

TAMBAHAN
-------------------------------------------------
ada paket yang tisak bisa di NAT misalnya VOIP karena harus End To End pakilah NAT helper
jump untuk mengumpulkan rule agar efisien 
















