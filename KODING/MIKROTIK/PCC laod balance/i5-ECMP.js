-------------------------------------------------
loadbalance ECMP 
- equal cost multy path
- membagi bandwidth secara seimbang di layer 3 (memainkan IP)
- sederhana mirip basic config
- jika terjadi perubahan kecepatan jumlah ISP 
	- route
	- mangle
	- failover
- atau terkena FUP maka ubah juga parameter berikut ini
	- route ratio, yaitu di route yang ada ISP koma ISP (beberapa ISP dengan Koma)
-------------------------------------------------
topologi
menggunakan rb750 gr3
- ether1	= ISP1
- ether2 	= ISP2
- ether5 	= WAN (DHCP server)

-------------------------------------------------
IP
	- dhcp client ether1, bound
	- dhcp client ether2, bound
	- jika ip sama maka lakukan routing dibawah
	- buat IP 192.168.100.1/28
-----
IP sama tiap ISP
	0. Interface > rename ether1-ISP1, ether2-ISP2 (atau kalau BRIDGing boleh )
	1. DHCP client ether1-ISP1 (dan ISP2 sama)
	2. cek masing IP > DHCP client > dblclk ether1 > tab status > gateway (gatewaynya sama dengan ISP1 dan ISP2)
	3. kembali ke tab DHCP > ISP1 > add default route:no (lakukan ISP2 sama)
	4. IP > routes > add > 
		- dst address:0000/0 
		- gateway: 192.168.100.1%ether1-ISP1 (dan ISP2 jg) > apply OK > (gateway dari status dhcpclient, nama pakai %nama tanpa spasi) 
----
uji IP
	- terminal:> ping masing2 isp ether
---- 
Alternatif 
	jika tidak berhasil maka ubah dhcp server yang ada di indiehome, supaya mendapatkan IP yang berbeda pada ISP 
-------------------------------------------------
DNS
	8.8.8.8 dsan 4.4.4.4 atau tambahkan ip masing2 ISP juga boleh
-------------------------------------------------
NAT
	(PENTING ECMP) masquerade pada masing2 out interface: ISP (dua, tiga, empat, tergantung)
-------------------------------------------------
ROUTE
	general
	- dst adress: 0.0.0.0/0
	- (PENTING ECMP) gateway: isi dua gateway masing2 ISP (dua, tiga, empat)
	- jika ingin rasio kecepatan berbeda(dengan bilangan bulat) bikin dengan gateway ISP yang sama untuk menunjukkan jumlah stream
-------------------------------------------------
MANGLE untuk session ISP
	- sampai disini sudah ecmp, tapi agar setiap aplikasi harus keluar dan masuk pada satu ISP yang sama maka perlu di tandai
	- mangle:
		chain: input
		in interface: ISP1
		action: mark connection
		new mark: ISP1-Con
		pastrhough: true
		- buatkan juga copy ISP2
		---
		chain: output
		connection Mark: ISP1
		action: mark routing
		new mark: ISP1-routing
		pastrhough: false
		- buatkan juga copy ISP2
----
	Default ROUTE
		IP Route add ISP1  
		dst adress: 0.0.0.0/0
		gateway: IP ISP1
		routing mark: ISP1
		copy: untuk ISP2
-------------------------------------------------
FAILOVER
	pada route list pilih IP gateway yang ada routing mark ISP nya(dbl click) lihat di field tabel  
	- check gateway: ping (aktifkan pilih ping)
-------------------------------------------------
TEST
	- buka interface
	- torch arahkan ke LAN > start 
	- buka fast.com > hasilnya akumulasi > jika ingin yg sebenarnya maka config 1 ISP saja MAX: 1 
