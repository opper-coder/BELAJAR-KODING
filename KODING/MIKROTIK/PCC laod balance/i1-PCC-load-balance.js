/* LOAD BALANCE PCC
---------------------------------------------------------------------------------------------------
DAFTAR ISI:
	- konsep
	- skema
	- role
		1. role1 NAT masquerade ether1,2 isp
		2. role2 action: accept  ether1,2,3
		3. role3 menandai conection WAN ether1,2
		4. role4 memecah traffic di ether3
		5. role5 Untuk jaringan local (ether3)

---------------------------------------------------------------------------------------------------
- PCC: per connection classifier.
- metode membagi traffic untuk dua jalur atau lebih, 
- di bagi secara seimbang, 
- agar traffic bisa optimal dan bandwidth bisa maksimal,
- dan agar tidak overload di salah satu jalur yng kita punya
PCC akan memecah traffic data yg lewat router kedalam beberapa stream. 
dan stream terpecah tsb akan di kirim via jalur yg berbeda
dalam praktek ini kita memiliki 2 jalur yang berbeda menuju ISP: ISP1, ISP2, 
pada ether 3 nya mengarah ke local  
*/

/* SKEMA PEMBAGIAN
---------------------------------------------------------------------------------------------------
- ISP sebagai berikut: ISP1-20M: di ether1 dan ISP2-20M: di ether 2
	rasio bandwidth akan menentukan config nantinya:
	- dengan bandwidth yang sama besar yaitu 20M : 20M seimbang. maka menghasilkan rasio 1:1 
 	- pada kasus yang berbeda jika 2 ISP dengan bandwidth ISP1-10M ISP2-20M maka rasio 1:2
	- 
- pengguna local di ether3
- config IP ethernya seperti ini:
	ether1 = ISP1 = 	IP: 10.10.1.2/24
	ether2 = ISP2 = 	IP: 172.16.2.2/24
	ether3 = USER local = 	IP: 192.168.3.1/24
*/

/* =============================
Pembagian loadbalance Ether dengan gateway DHCP client yang sama 
2 modem memberikan IP yang sama, dan kita tidak mungkin mengubahnya, tidak ada akses, atau modem LTE, maka cara mengatasi seperti langkah berikut

topologi
	- ISP1 : ether1 
	- ISP2 : ether2
	- CLIENT : Bridge > ether 3,4  

- cari tahu dulu IP yang di berikan oleh Profider
	- DHCP Client > Add > ether1 > ISP1
	- lakukan juga untuk ISP2 
	- maka kita akan melihat kita di kasih IP Adress satu segment meski berbeda > problemnya ada di IP > routes > di sana terlihat Gateway yang aktif hanya salah satu ether (keduanya ether2 semua yang aktif) dan DAS nya 0.0.0.0/0
	- dengan kondisi ini kita tidak bisa lakukan loadbalance, karena routenya di anggap satu
	- solusinya adalah kita akan ubah gatewaynya (IP Route) ke arah mana secara statik manual
	- ini di lakukan saat membuat gateway kita akan memberikan spesifik ethernnya 

- langkah
ada dua langkah yang bisa dilakukan yaitu: 1. IP kita buat scara statik 2. kita edit DHCP client

- DHCP client > dblclk di ether1 > tab status > gateway misal: 192.168.100.1 (nanti kita akan gunakan sebagai gateway ke arah intenet)
- kembali ke tab DHCP > add Default Route: no > apply ok
- lakukan untuk ether2 > DHCP > add Default Route: no > apply ok
- kenapa default route:no, hal ini agar bisa memungkinkan IP route di buat secara manual, 
- cek ke IP > routes > sekarang tidak muncul DAS 0.0.0.0/0
- kita arahkan ether secara manual 
	IP > routes > add > dst address:0000/0 
	gateway: 192.168.100.1 (diambil dari status dhcp client tadi ) tap problemnya gatewaynya sama maka tambahkan routing ke arah ether mana caranya
	gateway: 192.168.100.1%ether1 > apply OK > (disinilah intinya)
- untuk ether 2 lakukan hal yang sama yaitu 
	IP > routes > add > dst address:0000/0 > gateway:192.168.100.1%ether2 
- maka kita sudah memiliki 2 port dan langsung berfungsi jadi failover sederhana
- kalau mau load balance PCC tinggal lakukan seperti biasa

ringkasan
0. Interface > rename ether1-ISP1, ether2-ISP2
1. 	- IP > dhcp client > add > ether1-ISP1 > apply ok.
	- IP > dhcp client > add > ether2-ISP2 > apply ok.
2. cek IP > DHCP client > dblclk ether1 > tab status > gateway (gatewaynya sama dengan ISP2)
3. kembali ke tab DHCP > ISP1 > add default route:no (lakukan ISP2 sama)




*/ =============================



/* ROLE MANGLE
---------------------------------------------------------------------------------------------------
1. role1 NAT masquerade pada ether1 dan ether2
	- IP > firewall > NAT > add
		tab advanced
			src: srcnat
			out. interface: ether1
		tab action
			action: masquerade 
			apply > ok
	- buat kan juga untuk ether2
------------------
2. role2 mangle action:accept pada semua ether(keluar masuk) yang memakai network load balance ini (ether1,2,3) untuk membuat lingkungan PCC ini
	- IP > firewall > mangle > add
		tab general
			chain: prerouting
			dst address: 10.10.1.0/24 (bikin masing2 ether123/24 bertahap) // tidak tahu kenapa belakangnya pakai nol semua (mungkin di satu segmen)
		tab action 
			action: accept
	- tujuan role ini di buat agar: 
	  network2 DAC yg mengarah ke router kita tidak dikirimkan dg methode PCC
------------------
3. role3 menandai connection dari ISP (WAN) yaitu ether1 dan ether2, sebagai bahan untuk di loadbalance
	- IP > firewall > mangle > add >
		tab general
			chain: prerouting
			in. interface: ether1
		tab action
			action: mark connection
			new connection mark: ISP1-20M > apply OK 	// di video ISP1 saja
	- copy untuk ether2 juga
	- tujuan: request connection dari ether1 dan ether2 akan konsisten di kirim melalui interface yang sama
------------------
4. role4:
	untuk traffic ke ISP1:
   	memecah traffic data yang masuk ke router (ether3(local)) ke stream yang berbeda. 
   	stream tersebut akan dikirim melalui ether1 dan ether2  
	- IP > firewall > mangle > add >
		tab general
			chain: prerouting
			in. interface: ether3 (mengarah ke local)
		tab advance
			per connection classifier: disini ada 3 kolom 
				kolom1(classifier)	: both address 	// ip header bisa dari src. addrs, dst. addrs, port, kombins src & dst
				kolom2(denominator)	: 2 		// karena kita akan bagi 2 stream yg berbeda, maka isi dg 2
				kolom3(reminder)	: 0 		// nilai pembanding
		tab action
			action: mark connection
			new mark connetion: ISP1-20M 			// ini dilakukan: agar connection yg punya reminder 0 akan di kirim di via ISP1 
			passtrhough: yes
	- cara kerjanya :
		- data yang datang dari classifier akan di convert jadi data 32bit dg algorithma HASHing
		- selanjutnya, data 32bit tsb akan di modulasikan dg nilai yang ada di denominator(2)
		- hasilnya, akn di bandingkan dg nilai di kolom reminder(0 dan 1 nantinya sesuai ratio)
------------------
5. role4: (masih role4)
	untuk traffic ke ISP2:
	- IP > firewall > mangle > add >
		tab general
			chain: prerouting
			in. interface: ether3(local)
		tab advanced
			per connection Classifier: 3 kolom
				kolom1: both address
				kolom2: 2
				kolom3: 1
		tab action
			action: mark connection
			new connection Mark: ISP2-20M
			pass trought: yes
			apply OK
	- perhatikan beberapa kasus di bawah ini:
		- kasus1
			ada 2 isp dengan bandwidth yang sama besar
			- ISP1-20M, ISP2-20M. 
			- total: 40Mb
			- rasio 1:2 (1 User, 2 ISP)
			- maka dua bikin 2 stream: pada kolom denominator:2 
				(1 stream lewat ISP1, 1 stream lewat ISP2)
			- reminder: 0 dan 1
		- kasus2
			ada 3 isp dengan bandwidth yang sama besar
			- ISP1-10M, ISP2-10M, ISP3-10M. 
			- total: 30Mb
			- rasio : 1:3 (1 user : 3 ISP)
			- maka 3 stream: pada kolom denominator: 3
				(1 stream lewat ISP1, 1 stream lewat ISP2,1 stream lewat ISP3)
			- reminder: 0,1 dan 2
		- kasus 3
			ada 2 isp dengan bandwidth yang tidak sama besar
			- ISP1-10M, ISP2-20M
			- total: 30Mb
			- rasio : 1:3 
			- maka 3 stream: pada kolom denominator:3
				(1 stream lewat ISP1, 1 stream lewat ISP2,1 stream lewat ISP2 juga)
			- reminder: 0,1 dan 2
------------------
6. role5 mark routing :ke-ISP1
	- IP > firewall > mangle > add >
		tab general
			chain: prerouting
			in. interface: ether3(local)
			connection mark: ISP1-20M
		tab action
			action: mark routing
			new connection Mark: ke-ISP2-20M
			pass trought: yes
			apply OK
	- buatkan juga mark routing: ke-ISP2 untuk traffic ke ISP2 (langkah sama)
------------------
7. role6 tambahkan mark routing di chain output
	- IP > firewall > mangle > add >
		tab general
			chain: output
			connection mark: ISP1-20M
		tab action
			action: mark routing
			new connection Mark: ke-ISP2-20M
			pass trought: yes
			apply OK
	- buatkan juga mark routing di chain output : ke-ISP2 untuk traffic ke ISP2 (langkah sama)

/* CONFIGURATION ROUTING
---------------------------------------------------------------------------------------------------
konfig routing
	- IP > routes > add
		Dst. address: 0.0.0.0/0
		Gateway: 10.10.1.1 			// IP dari gateway ISP1 (buatkan juga ISP2 nantinya 172.16.2.1)
		Check Gateway: ping 			// nyalakan ping 
		Routing mark: ke-ISP1-20M > Apply Ok
	- tambahkan juga untuk role ke-ISP2  
------------------
keperluan fail over
	- IP > routes > add
		Dst. address: 0.0.0.0/0
		Gateway: 172.16.2.1 			// isikan Ip gateway ISP2 (tidak tau kenapa)
		Distance:2 				// isi 2 karena role ini akan di gunakan untuk backup
		Routing mark: ke-ISP1-20M > Apply Ok	// disini ke ISP1 ya (tidak tau kenapa)
------------------
buat lagi role routing backup
	- IP > routes > add
		Dst. address: 0.0.0.0/0
		Gateway: 10.10.1.1 			// isikan Ip gateway ISP1 (sekarang)
		Distance:2 				// isi 2 juga 
		Routing mark: ke-ISP2-20M > Apply Ok	// disini ke ISP2 (dibalik)

*/

/* PENGUJIAN
---------------------------------------------------------------------------------------------------
	- setting sudah selesai tinggal testing
	- pada winbox buka interface untuk monitoring bandwidth nya
	- buka di browser: fast.com\
	- di interface terlihat
		download di lewatkan ke ether1 (ISP)
		upload di lewatkan ke ether2 (ISP2)
	- disini terbukti bahwa: PCC membagi beban traffic(stream) berdasarkan koneksi yg terbentuk
	- kelebihanya:
		- PCC lebih optimal dari metode lainya
		- secure connection lebih baik
		- merupkan metode propietary mikrotik performa lebih baik
		- latency lebih rendah 
		 
*/
