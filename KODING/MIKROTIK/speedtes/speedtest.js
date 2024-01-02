--------------------------------------------------
1. mikrotik to mikrotik 	: test local di lapangan (bisa juga untuk cloud ke server)
2. mikrotik ke non mikrotik 	: test mikrotik ke perangkat lain
3. mikrotik target mikrotik 	: test paling kurat kualitas jaringan di lapangan
4. g tau
5. test terminal download 	: test ISP ke mikrotik bersangkutan 

--------------------------------------------------
BANDWIDTH TEST
--------------------------------------------------
- untuk testing jaringan du a titik perangkat melalui jaringan
- apakah jaringan (kabel, wireless, internet)mampu melewatkan paket yg kita target atau tidak
- kita biasanya menggunakan dua perangkat mikrotik, satu untuk server dua untuk target test
- router yang akan lakukan test harus aktifkan dulu btest
- lalu isi IP target dan lakukan test
- namun jika perangkat sebaliknya yang akan melakukan test bukan perangkat mikrotik
- maka download dulu tool bandwidthtes dari mikrotik.com
- tool ini bisa jadi server btest dengan aktifklan server, dan juga bisa di jadikan target test

MIKROTIK KE MIKROTIK 
- kedua mikrotik harus aktifkan btest server
- testing router ke router target
	tester:
		test target: ip gateway router terget
		protocol: tcp (silahkan test udp nya jg)
		direction: both
		local tx: 20M (besaran test target, dari kecil dulu nanti test ke besar)
		remot tx: 20M 
		user pass: karena sama2 mikrotik isikan saja credential lawan
	start
	lihat hasilnya di grafik (jika tercapai berarti ok, test juga ukuran besarnya)

MIKROTIK KE NON MIKROTIK
- jika clint yang kita test adalah alat non mikrotik 
- server tetap mikrotik aktifkan server btest 
- di router client tancapkan laptop windows  
- di windows install btest dari mikrotik, dan jalankan prosedur berikut:

1. download dulu bandwidth test.exe di mikrotik.com > jalankan di windows
2. buka winbox > config > /tools > bandwidth test server >  enable:yes, autectication:yes (kalau dah g di pakai matikan bahaya)
3. buka system > resource amati port yg di uji
4. pada bandwidth test.exe > tab client> address: IP port yng di uji | protocol tcp | --
	-- local tx:1M | remote tx:1M (1M - 100M atau maximal bw isp kita)| user pass: dari router atau mikrotik | start
5. antara resourch CPU MEM (4%) dan Btest sama stabilnya 1M 
6. saat local tx:1M | remote tx:1M di naikan ke 30M maka CPU naik Bandwidth juga naik

berguna untuk test bandwidth untuk port apakah fast ethernet, gigabit ethernet, wireless 
karena belum tentu kemampuan fast ethernet 100MBps terus bisa memberikan bandwidth yg sama, 
hal ini tergantung resource CPU dan MEM nya 
demikian halnya saat kita mau pasang wireless ataupun AP, PTP ataupun PTMP
maka kita perlu lakukan testing bandwidth ini  
ada kemungkinan signal bagus tapi data nggak lewat. 
meski trougput 100mbps apakah benar data yang bisa di lewatkan 100mbps
coba test 50mbps sampai maximal berapa (tergantung ISP) 

TIPS JALUR KHUSUS
--------------------------------------------------
oya buat ether khusus untuk jalur pengujian
	bridge2-speed: ether5 ip 192.168.5.1/24 ]
	( ether umum: 192.168.50.1/24 ) 
	 
untuk jalur bridge1-LAN buatkan voucher-speed
	user: speedtest123
	pass: speedtest123
	profile: speedtest
	limit: 1gb
	time: no limit

SPEED TEST VIA TERMINAL
sumber: https://www.tembolok.id/cara-speedtest-di-mikrotik/
--------------------------------------------------
Prinsipnya kita download file dari mikrotik menggunakan terminal menggunakan perintah fetch.
ketikan saja kata kunci di google “test file download” atau “test file download indonesia”
misalnya kita punya file ini (kalau tidak ada silahkan cari lainya):
https://www.dewaweb.com/blog/knowledge-base/test-latency-dan-download-speed-ke-server-dewaweb/
	/tool fetch url="https://dci-speedtest.dewaweb.com/50mb-testfile.zip" output=none
	/tool fetch url="https://sg-speedtest.dewaweb.com/50mb-testfile.zip" output=none	    
Buka tiga sampai empat terminal agar hasilnya lebih pasti
Hasil speedtest download bisa dilihat pada interface WAN di bagian RX.
--------------------------------------------------
praktisnya:
1. buka interface > tab ethernet > cek bridge-WAN-ISP > cek di bagian RX > saat testing di jalankan disini akanterlihat hasilnya
2. buka empat jendela terminal di winbox mikrotik yg ditest > tujuanya agar test download file lebih akurat
3. jalankan test <script di bawah> ini di ke empat terminal
4. lalu amati traffic yang lewat di interface WAN bagian RX  

APLIKASI WIFI 
--------------------------------------------------
1. moho di https://moho.ruijienetworks.com/static/homepager/en/index.htm
sangat bagus testing wifi


