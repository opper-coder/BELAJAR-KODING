/* RADIUS
------------------------------------------------------------------------------------------------
adalah management user bisa untuk hotspot ppoe wlan dhcp dan semua layanan bisa
terutama pada hotspot bisa di implementasikan  untuk voucher
- langkah install:
	1. download
		- buka mikrotik.com > downloads/atau download archive > pastikan jenis paket dan version sesuai
		  cari versi yang sesuai dengan versi OS yang di gunakan misalnya release 6.36 
		  (cara lihatnya ada di top bar winbox version) 
		  (yang di dlm kurung itu (mipsbe) adalah jenis softwarenya > sekarang pilih all packages-mipsbe-6.36.zip   
		  (karena user manager ada di allpackage) > pilih download > 
	2. extract zip nya > pilih user manager > drag n drop di files (buka files copas aja) > tempatkan di root folder
		bersama folder lain di root 
		- kalau gak bisa drug n drop tinggal di klik tombol upload > pilih file > next2
	3. reboot
	4. cek di > system > package > pastikan user manager sudah masuk 
- langkah akses ke userman 
	0. di browser 
	 	biasanya kita akses ke IP hotspot (misalnya 10.10.10.10) tapi biasanya gak jalan karena userman di bawah hotspot
	1. alternative nya di akses di IP publiknya atau IP DHCP client nya >
		misalnya: 192.168.1.2/userman di browser > jika ada maka ada login page > login saja 
		- user: admin, pass: admin > 
	2. atau alternative kedua: buat bridge1-REMOTEUSRM > berikan IP yang tidak di pakai > misalnya 172.172.172.3/userman
		- yang penting satu mikrotik bisa di akses dari manapun
- langkah konfigurasi:
	0. di winbox
	1. klik radius > general > service: hotspot cek (semua bisa sebenarnya) 
		> address pilih ip adress userman nya > 172.0.0.1 > 
		scret: semacam pass : test123 > apply > OK
	2. klik hotspot > tab server profile > pilih hsprof1 
		- tab RADIUS: centang > apply > OK
- langkah koneksikan radius dengan mikrotik
	1. buka userman via 172.172.172.3/userman di browser
		- pilih router > add new > nama: routerku > Owner: admin > IP address misalnya kita kasih(loopback) 172.0.0.1(dari winbox td)
		- share screet: samakan dengan yg di winbox tadi test123 > add
- langkah bikin profile
	- klik profile > add > nama: > crete
	- kalau mau limit > klik tab limitation > add new >
		- neme: > transfer adalah limit: 20M atau UPtime: 5m (menit)
		- ratelimit : upload / download  512k 512k > add
	- tab profile > addnew limitation > atur waktu > centang limitation yang barusan kta buat > add
- langkah bikin user		
	- users > add > one (untuk 1 orang) batch (untuk multi)(tapi sesuaikan dengan level licensi kalau 4 berarti hanya 20 orng bersamaan)
	- nama: pass: profile: silahkan isi
	- multi user > add > batch > number: 50 orang; prefix vc5zaa panjang nama dan pass, profile, add

*/
