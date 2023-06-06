bandwidth test
--------------------------------------------------
berguna untuk test bandwidth untuk port apakah fast ethernet, gigabit ethernet, wireless 
karena belum tentu kemampuan fast ethernet 100MBps terus bisa memberikan bandwidth yg sama, 
hal ini tergantung resource CPU dan MEM nya 
demikian halnya saat kita mau pasang wireless ataupun AP, PTP ataupun PTMP
maka kita perlu lakukan testing bandwidth ini  
ada kemungkinan signal bagus tapi data nggak lewat. 
meski trougput 100mbps apakah benar data yang bisa di lewatkan 100mbps
coba test 50mbps sampai maximal berapa (tergantung ISP) 



1. download dulu bandwidth test.exe di mikrotik.com > jalankan di windows
2. buka winbox > config > /tools > bandwidth test server >  enable:yes, autectication:yes (kalau dah g di pakai matikan bahaya)
3. buka system > resource amati port yng di uji
4. pada bandwidth test.exe > tab client> address: IP port yng di uji | protocol tcp | --
	-- local tx:1M | remote tx:1M (1M - 100M atau maximal bw isp kita)| user pass: dari router atau mikrotik | start
5. antara resourch CPU MEM (4%) dan Btest sama stabilnya 1M 
6. saat local tx:1M | remote tx:1M di naikan ke 30M maka CPU naik Bandwidth juga naik
			    
APLIKASI WIFI 
1. moho di https://moho.ruijienetworks.com/static/homepager/en/index.htm
sangant bagus testing wifi
			    
SPEED TEST VIA TERMINAL
sumber: https://www.tembolok.id/cara-speedtest-di-mikrotik/
--------------------------------------------------
Prinsipnya kita download file dari mikrotik menggunakan terminal menggunakan perintah fetch.
ketikan saja kata kunci di google “test file download” atau “test file download indonesia”
misalnya kita punya file ini (kalau tidak ada silahkan cari lainya):
	/tool fetch url="https://dci-speedtest.dewaweb.com/50mb-testfile.zip" output=none
	/tool fetch url="https://sg-speedtest.dewaweb.com/50mb-testfile.zip" output=none	    
Buka tiga sampai empat terminal agar hasilnya lebih pasti
Hasil speedtest download bisa dilihat pada interface WAN di bagian RX.


