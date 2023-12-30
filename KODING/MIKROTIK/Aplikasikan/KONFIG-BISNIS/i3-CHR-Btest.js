
test kualitas jaringan 

test di terminal

--------------------------------------------------
TEST TERMINAL
    ini di perlukan test mandiri tanpa alat 
    Prinsipnya kita download file dari mikrotik menggunakan terminal menggunakan perintah fetch.
    ketikan saja kata kunci di google “test file download” atau “test file download indonesia”
    misalnya kita punya file ini (kalau tidak ada silahkan cari lainya):
    https://www.dewaweb.com/blog/knowledge-base/test-latency-dan-download-speed-ke-server-dewaweb/
    	test dalam negeri: /tool fetch url="https://dci-speedtest.dewaweb.com/50mb-testfile.zip" output=none
    	test luar negeri : /tool fetch url="https://sg-speedtest.dewaweb.com/50mb-testfile.zip" output=none	    
    praktisnya:
    1. buka interface > tab ethernet > cek bridge-WAN-ISP > cek di bagian RX > saat testing di jalankan disini akanterlihat hasilnya
    2. buka empat jendela terminal di winbox mikrotik yg ditest > tujuanya agar test download file lebih akurat
    3. jalankan test <script di bawah> ini di ke empat terminal
    4. lalu amati traffic yang lewat di interface WAN bagian RX  
--------------------------------------------------
