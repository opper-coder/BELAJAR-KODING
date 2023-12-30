
test kualitas jaringan 

test di terminal
test cloud ke server ala mikrotik
test antar perangkat di jaringan (dengan dude)

--------------------------------------------------
TUJUAN
    - Terminal 
        + ini mandiri, hasil nya asli dan akurat tanpa tool 
        - hanya bisa di winbox, berarti harus bisa remote IP nya
        - butuh test file yg tersedia
    - Cloud to Server
        + bisa test bertahap 10 - 100 mb (minimal sampai maximal)
        - masih remote winbox bersangkutan
    - antar perangkat the dude
        + tidak perlu winbox
        + bisa antar perangkat di server, antar perangkat di LAN
        - mungkin kalau pakai perangkat non snmp tidak bisa cek nanti yaa
    - dua mikrotik di lapangan 
        + tanpa internet
        + test kualitas jaringan 
        + akurat dan perlu
        - butuh dua mikrotik server dan client yang akan test jaringan kabel atau wifi yang di hasilkan
        - butuh turun lapangan
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
CLOUD to SERVER
--------------------------------------------------
ANTAR PERANGKAT THE DUDE
--------------------------------------------------
DUA MIKROTIK DI LAPANGAN
--------------------------------------------------
selesai

    
