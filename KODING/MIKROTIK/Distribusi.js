HOTSPOT, WLAN, DHCP HAMPIR SAMA
--------------------------------------------------------
RINGKASAN
kita akan setting hotspot yang di bridging dengan wlan
topologinya
ISP : dhcp client
bride hotspot : 10.10.10.0/24

SETTING WLAN
-----------------------
saat mikrotik memiliki port wlan maka cara hidupkanya adalah:
1. tentu semua harus melalui config dasar (lihat dokumentasi)
2. setting wlan access point
	interface > pilih wlan1 > enable > dbclk wlan1 > name: rumah > tab wireless > 
	mode: ap-bridge, band: 2ghz B/G/N, frequensi: 2462 sesuai kondisi lapangan, 
	ssid: hotspot-rumah > apply, ok
BRIDGING
-----------------------
3. Bridging(kalau mau gabungkan dengan ether2 misalnya kemudian kita setting bridgenya)
	bridge > add > name: bridge1-HOTSPOT > tab port masukan ether2 dan wlan tadi > apply
	reconet kalau kita remote dari ether2  
HOTSPOT
-----------------------
4. distribusi hotspot pada "bridge1-HOTSPOT":
	- pastikan bridge ini memiliki IP pada saat config IP
	  IP > address > add >  ip: 10.10.10.0/24, interface: bridge1-HOTSPOT
	- pada setting awal kita tambahkan default gateway kalau kita static IP ISP pada
	  contoh di video kalau DHCP client biasanya default gateway sudah di buatkan auto
	  cara melihat atau buatnya ya di bawah ini :
	  IP > routes > add > tab general > dst address: 0.0.0.0/0, gateway: 192.168.1.1
	  (isi dg alokasi (pilih rentang) yang di berikan ISP) > apply OK 
	- pastikan flag gateway AS dan reachable
	- IP > DNS > add > server:  192.168.1.1 (isi dg alokasi (pilih rentang) yang di berikan ISP)
	  atau DNS tambahkan dg dns public 8.8.8.8, 8.4.4.8, 10.10.10.1 lebih dari 1 tidak apa2 > centang
	  allow remote request > apply OK
5. setting hotspot :
	IP > hotspot > tombol hotspot setup > interface: bridge1-HOTSPOT > next2 apply ok > Rincianya:
	- local Area of network : isi dengan ip bridge1-HOTSPOT sebelumnya ini bersifat rentang. centang masquerade
	- address pool of network : rentang IP dhcp server. kalau yang static keluarkan dari rentang ini
	  misalnya kalu kita kita akan meng alokasikan rooter pelanggan dengan statik maka keluarkan
	  dari rentang ini.IP selebihnya akan di gunakan untuk vocher
	- select sertificate: pilh HTTP atau HTTPS SSL (beli). none saja 
	- SMTP server: integrasi email local. biarkan nol jika tidak perlu
	- DNS server: 8.8.8.8 boleh tambahkan beberapa lainya (biasanya otomatis). atau lihat di IP DNS
	- DNS name: alias dari IP gateway, atau DNS. isikan sesuai kaidah url its.org atau coba.lagi.com
	- user pasword: isikan saja "admin""admin", ini adalah pintu login pertama kali nantinya akan di seting di tempat lain
	- finish - reboot, coba akses browser > youtube.com > maka akan masuk login page user password 
	- status: IP gateway/status atau DNS/status 10.10.10.1/status atau its.org/status
6. utility
	- supaya login pakai password ulang: 
	  hotspot > tab server profile > coockie: uncheck, trial: untuk trial, 
	  https untuk ssl sertificate, Radius untuk userman, kita gantikan dengan mikmon dst
	- melihat user login active
	  hotspot > tab active: melihat user login
	  hotspot > tab host: melihat user login dengan IP terlihat sebagai static/manual lihat di flag ada tooltips
	- kalu kita lihat IP > dhcp, ternyata hostspot kita juga aktif sbg dhcp karena ini milik hotspot jg ternyata
	  saat di dbclk maka akanterlihat IP dan MAC 
7. user profile
	- atau di sebut paket internet 2jam/1mb, 2jam/2mb, 8jam/1mb, tamu, staff dst
	  hotspot > tab userprofile > name: nama, user shared: jumlah pengguna (mis: voucher:1, kantor:20), 
	  rate limit: up/dn per user. 256k/256k (simple queue auto)
	- bisa dilihat di queue simple queue saat orang akses akan terlihat limiternya sama
	- limiter di user profile ada beberapa dibawah (dikosongin juga boleh yg ini):
		- address pool: hanya ip ini yang bisa akses
		- session timeout: sekali login 30 menit, lalu logout automatik, login lagi 30 menit lagi
		- idle timeout: saat idle timeout akan logout auto, argo juga ikut berhenti
		- keeplive timeout: saat terhubung meskipun idle maka dianggap ada, saat lepas dari hospot akan logout auto, argo mati
		- status refresh: refresh asincronus informasi tiap 1 menit terkini pada hotspot.net/status
		- shared user: di gunakan berapa pengguna
		- ratelimit: limit simple queue: format 1m atau 1m/1m atau 1m/1m spasi burst, treshold/ max burst sesuai urutan di simple queue
		- aadress list: jika diisi address maka pengguna IP ini bisa di perlakukan khusus misalnya dengan mangle
		- misalnya: drop mangle blokir youtube
  - dan saat di speed test di fast.com limiternya akan sesuai di 3 settingan tersebut
8.  user
    - adalah yang login akan menggunakan paket dari user profile
      hotspot > tab user > add > name:tamu, pass:tamu1, user profile:pilih paket tadi
      > pada tab limit > kita bisa limit berdasarkan waktu(jam) atau kuota(size)
    
- saat up time dan limit tercapai user password tersebut berati sudah tidak bisa di gunakan lagi
    - kalau mau hidupkan kembali tinggal pilih user di tab user dan klik reset counter
    - menit ke 17 vid 3
	sebenarnya hotspot ini menjadi fitur gabungan dari: ip pool, dhcp server,frewall nat, 
	firewall filter, dll. karena wizzard kita tidak perlu setting satu persatu.
