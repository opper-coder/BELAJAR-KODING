kombinasi failover dan PCC

kombinasi PCC dan fail over
jika PCC adalah membagi bandwidth secara seimbang tapi jika mati salah satunya PCC tidak berjalan
untuk mengatasinya PCC harus di kombinasikan dengan failover Supaya saat PCC mati salah satunya maka tinggal 
ganti rule failover untuk memindahkan semua bandwidthnya ke salah satu ISP yang masih aktif
karena tutorial ini adalah gabungan dari PCC dan fail Over maka lakukan config PCC terlebih dahulu 

config dasar dan config PCC ada di tutorial di file lainya
di sini tinggal fokus ke failovernya:

topologi:

ISP1: ether1 : 192.168.73.1/24
ISP2: ether2 : 172.16.30.1.1/24
LAN: ether3 : 10.1.1.0/24 

- bikin route
	- IP > routes > tab routes > add 
		dst.adress: 8.8.8.8 (ip public internet)
		gateway:  192.168.73.1/24 (ISP1) > apply OK
	- lakukan untuk ISP2 yang sama coba pakai dns 1.1.1.1 ISP2
		dst.adress: 1.1.1.1
- bikin default route ISP
	- IP > routes > tab route > add
		dst.adress: 0.0.0.0/0 (menuju ke internet jg)
		gateway : 8.8.8.8
		check gateway: ping
		distance: biarkan kosong (default)
		scope:30
		target scope:30
		(untuk melihat scoop 30 di ambil dari mana, maka lihat di routelist, tampilkan field "scoop dan target scoop" klik kanan di header table, maka akan terlihat nilai scoop nya)
		- routing mark: to-ISP1 (ini berasal dari config pcc sebelumnya)
		- apply OK
	- lakukan untuk ISP2 
		dst.adress: 1.1.1.1 - selebihnya sama
- tambahkan comment di route list
	- klik 0000/0 8.8.8.8 ISP1 : isp1
	- klik 0000/0 1.1.1.1 ISP2 : isp2
- bikin config failovernya ISP1
	- IP > routes > tab route > add
		dst.adress: 0.0.0.0/0 (menuju ke internet jg)
		gateway : 192.168.73.1 (geteway ISP1)
		check gateway: biarkan kosong(kita tidak perlu)
		distance: 2 (karena rule kita akan jadikan backupnya)
		scope:30 (biarkan)
		target scope:10 (biarkan)
		- routing mark: to-ISP2 (kartena ini adalah ISP1 maka arahkan ke ISP2)
		- apply OK
	- buatkan untuk backup (ISP2) jika ISP1 Bermasalah
		- tinggal gnti gatewai ISP2 dan, routing mark ke-ISP1 selebihnya sama 
		- kasih koment masing2 "backup utk ISP1 dan 2"

- pengujian
	- putus salah satu ISP, maka tunggu 10-30 detik cek ping dan akan mengaktifkan semua bandwidth ke salah satu ISP yang aktif
