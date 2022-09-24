/* REMOTE SMART HOME 
---------------------------------------------------------------------------------------------------
daftar isi:
	- arduino
	- radio
	- smarthome arbit (wifi, infrared, google assist, siri) 
	- smarthome bardi
	- smarthome xiaomi

REMOTE ARDUINO
---------------------------------------------------------------------------------------------------
bisa pakai bluetooth
wifi IoT
IR
RF
kombinasi dg alat remote radio di bawah

REMOTE RADIO JARAK 50-100m 4 channel
---------------------------------------------------------------------------------------------------
beli remote radio 4 channel, dengan receiver 4 saklar 5v di CNC STORE

bahan:
	transmit: 1bh remote 4 channel RF transmitter, 
	receiver: 1bh receiver 433mhz 5v YK04 harga Rp 29.000
	resistor: 4bh 110, 220,330, 560ohm (opt)
	LED 	: 4bh led superbright 5mm warna terserah
	mini projectboard : 1bh 400 titik
	modul power: 1bh MB 102(5v boleh pilih lainya)
	kabel jumper male: 2bh

keterangan alat:
	receiver pin:
		GND, 5v, D0, 01, 02, 03, VT 
	konek dengan kabel jamper
		GND -> negatif
		5V	-> positiv
		D0,D1,D2,D3	-> masing2: resistor 330ohm -> led+ <> led- -> negatif 
		antena solder dengan kabel panjang agar jangkauan jauh jarak terimanya
	operasi
		hubungkan adaptor 12v atau 9v
		nyalakan power
		tekan tombol di remote : A, B, C, D
	kelebihan kekurangan
		+ output 5v kompatibel dengan arduino
		+ radio rendah voltasi
		- klik nyala lepas mati

REMOTE RADIO JARAK 50-100m 2 channel
---------------------------------------------------------------------------------------------------
ada juga alternative 2 channel sekaligus 2 receiver sudah dengan switch 220v
operasi 2 tombol untuk 6 mode
	nyala mati, switch, on/off, late 5 detik 10 20

SMARTHOME ARBIT (WIFI, INFRARED, GOOGLE ASSIST, SIRI) 
---------------------------------------------------------------------------------------------------
adalah perangkat support infrared dan internet via wifi
- pasang perangkat 
- install app
- pairing
- control via voice google

install smart life di google play > pairing > berkedip > add > lainya > remote control universal
masukan pass wifi > pilih IR defice > tv > 
tinggal panggil OK google nyalakan TV

SMARTHOME BARDI
---------------------------------------------------------------------------------------------------
- perngertian:adalah product indonesia cek di: bardi.co.id
- support wifi 2.4GHz a/c dan aplikasi di smarthome, google assistance, siri, alexa
	download aplikasi untuk semua perangkat bardi di g0ogle play:
	Bardi Smart Home
	support jaringan local dan internet
	- smart plug: cok listrik smart(favorite) lubagn bulat indonesia, 16A besar, 122rb. 0,02 whatt, wifi 2.4g -20-70 derajat
		support: monitoring konsumsi listrik : ampere, whatt, voltase
	- smart wall plug: mirip smart plug. 16A eropa, 13A indo, harga 199rb,
	- smart extension power strip : stop kontak 4 plug 3 USB 5v 2.1A, fungsi mirip smart plug harg 299rb
	- smart bulb: hrg 107rb - fitting biasa - 9W - 80-810 lumens 
	- smart bulb: hrg 99rb - fitting biasa - 7W - 90-630 lumens
	- smart bulb: hrg 150rb - fitting biasa - 12W - 110-1100 lumens
	- smart IR remote : di hadapkan ke ac, tv, dl. di kontrol via internet jarak jauh. 8m 99rb, 10m 173rb
	- smart light wall switch: saklar touch screen, juga remot internet, ada hitam putih, 1sklar 178rb, 2 185rb, 3 188rb
	- smart doorlock: support, pin, internet wifi, RFid, finger print, bell, ip54 anti air, batrei 6 bulan sehari 10 kali hrg 2jt
	- smart ip camera: support audio 2 arah, night vision, notif alarm mosion detection terjadwal, microsd 128gb, 7hari palyback cloud, hrg 315rb
	- smart ip camera outdoor: hrg 480rb ada 2 type
	- smart led strip RGB: led strip, adaptor, wifi control, 80-300 lumens, 1-5 whatt, 2m harga 125, 4m 130rb, 12m 208rb
	- smart fish feeder: pakan ikan 3,5 whatt, harga 315rb, wifi, terjadwal,
	- smart pet feeder: pakan kucing kabel anti gigitan
	- smart water fountain: kasih minum hewan 
	- smart door sensor
	- smart sirine
	- smart robot vacuum camera
	- smart MCB 
	- smart motor curtain
	- smart air purifier
- OTOMASI BARDI
	berikut beberapa trigger
	- schedule: di trigger oleh time, jam, hari, tanggal delay
	- cuaca: kelembapan, panas, hujan, sunset, sunrise, kecepatan angin, temperatur
	- lokasi: gps smartphones, menjauh atau mendekat perangkat,  
	- status perangkat lain : hidup matinya sebuah perangkat akan mentrigger perangkat lainya (terhubung)
	- motion: gerakan

SMARTHOME xiaomi 
---------------------------------------------------------------------------------------------------
belum baca sih tapi mungkin mirip2 baca langsung di websitenya harganya masih murah bardi kayaknya


*/
