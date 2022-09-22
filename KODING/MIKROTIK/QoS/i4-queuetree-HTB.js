/* DAFTAR ISI
---------------------------------------------------------------------------------------------------
- konsep 		-> konfig dasar (kombinasi paket mark dan HTB)
- packet mark 		-> disinilah paket di buat
- HTB simple queue 	-> HTB pada simple queue juga bisa
- HTB queue tree 	-> disini 
- HTB 			-> hirarki prioritas (HTB inilah yang jadi perhatian dalam queue tree)

QUEUE TREE DAN HTB
---------------------------------------------------------------------------------------------------
queue tree adalah methode manajemen bandwidth dengan pola hirarchi HTB. issyu umum 
	- queue independen 	: setiap queue bisa di config secara mandiri
	- priority 		: jika di kombinasikan akan ada prioritas
	- parent child		: basic hirarki
	- HTB 			: pola susunan otoritas

config sederhana parent, queue type, limitasi. tapi yang berpengaruh sebenarnya di paket marknya: 
	queue > tab queue tree > add 
		tab general >
			name: terserah
			parent: global
			packet mark: pilih (ada pembahasan di bawah)
			queue type: pilih (ada pembahasan sendiri)
			limtasi: (ada pembahasan di bawah)
      
atau cara sebenarnya adalah bikin dulu packet mark lalu bikin queue tree seperti di bawah ini:
*/

/* PACKET MARK dan HTB queue tree
---------------------------------------------------------------------------------------------------
paket mark adalah cara menentukan paket yang bisa di prioritas sesuai dengan sumbernya
misalnya aplikasi tertentu, ip, dll

HTB adlah implementasi hirarki orang tua, anak, cucu dst untuk mengatur priority

1. cara bikin paket mark:
	firewall > mangle > add > 
		tab general >
			chain: prerouting
			src address: IP client, protocol, interface, port, tcp, dll (disinilah setting untuk prioritas game dll)
		tab action >
			action: mark connection
			new connection mark: (beri nama) conn-client1
			passthrought: true

2. cara tangkap mark connection di atas
	firewall > mangle > add > 
		tab general >
			chain: prerouting
			connection mark: conn-client1
		tab action >
			action: mark packet
			new connection mark: (beri nama2) packet-client1
			passthrought: false

3. saat di apply maka akan ada trafficnya di field bytes nya

4. bikin queue tree untuk upload (jadi child nantinya)
	queue > tab queue tree > add 
		tab general >
			name: queue1-upload 			// nama(terserah) 
			parent: bridge-WAN 			// jalur internet (di ubah ke parent, nantinya)
			packet mark: packet-cliet1 		// (pilih yg sudah di buat) 
			queue type: pilih 			// ada pembahasan sendiri
			max limit: 10M    			// max limit untuk upload
		apply > OK : akan terlihat ada traffic pada field avg. rate 

5. implementasi HTB. yaitu bikin dulu queue yang jadi parent 
	queue > tab queue tree > add 
		tab general 
			name: queue1-upload-parent 		// nama parent(terserah) 
			parent: bridge-WAN 			// jalur internet
			packet mark: 				// kosongkan (yg punya packet adalah childnya)
			queue type: pilih 			// sesuaikan saja
			max limit: 20M    			// max limit untuk upload parent
		apply > OK : akan terlihat ada traffic pada field avg. rate 

6. masukan hirarki parent child
	pada perent di child ubah jadi queue-uopload-parent
		parent: queue1-upload-parent			// ubahan dari bridge-WAN (ganti parent)
		apply > OK 					// akan terlihat hirarkinya

*/

/* HTB SIMPLE QUEUE 
---------------------------------------------------------------------------------------------------
HTB bisa juga pada simple queue langkah2 nya
- bikin child child nya dulu
	queue > tab simple queue > tab general
		name: queue1-child 		// nama terserah
		target: 10.10.10.1 		// client
		max limit : Ul 5M Dl 5M  
- bikin parent:
	queue > tab simple queue > tab general
		name: queue1-parent 		// nama terserah
		target: 10.10.10.0/24 		// client harus di masukkan semua di target pada parent (berbeda dg quetree soal child)
		max limit : Ul 10M Dl 10M  
- bikin HTB child parent. pilih queue child lalu hubungkan ke parent 
	queue > tab simple queue > tab advanced
		parent: queue1-parent 		// pilih parent yang sudah di buat
	lalu sorting di field sesuai urutan parent
*/

/* HTB
---------------------------------------------------------------------------------------------------
pada htb kita bisa membuat hirarki 
berdasarkan: 
	IP client, protocol(pop3,http,ftp,utp dll)
untuk dapat di alokasikan pola pembagianya 
berdasarkan:
	stagged limitation(limitasi bertahap):
	CIR: committed information rate 	// limit at: yaitu semua di kasih limit at kalau memang punya bandwidth
	MIR: maximal information rate 		// max limit: jika ada sisa maka yg masuk prioritas akan di beri bonus: max limit

susunan HTB
leave queue: adalah queue yang langsung di pakai client
inner queue: adalah queue yang jadi parent atau sub parent pemilik total vbandwidth

pada inner queue, hanya butuh limit at(limit dasar)
pada leave queue, butuh limit at dan max limit(limit bonus)

prinsipnya adalah:
- limit-at di prioritaskan secara merata pada lieve queue dan juga inner queue
- limit-at di berikan dahulu, sisanya baru di bagi sesuai priority sebesar max-limit
- parent root tidak butuh max-limit
- max-limit hanya berlaku pada child dan child bersarang lebih rendah
- priority hanya berlaku pada leave queue(child end user)
- max-limit parent harus lebih besar dari max-limit child nya
- max-limit parent harus lebih besar dari total limit-at child nya 
- limit-at lebih tinggi (di dahulukan) dari priority
- priority tertinggi di dahulukan (dari 1-8 terendah 8)

skenario 1: menjaga agar child child selalu mengkonsumsi sebanyak di limit parent
queue-parent-A: 10M 				// total limit at yang di keluarkan parent 10
	queue-child-B: 10M / 5M 		// limit at / max limit saat bandwid ada sisa akan di pakai sampai max limit (10M)
	queue-child-C: 10M / 5M			// saat keduanya mengakses maka hanya kebagian B: 5M dan C: 5M 
								   dan tidak ada sisa karena total A 10M
skenario 2: child tetap mendapatkan limit at penuh meski melampaui limit parent. prioritas limit at pada child
	A: 5M 					// limit parent lebih kecil dari limit child maka yang di dahulukan limit child
		B: 5M/10M 			// dapat 5M atau <5 (kalau >5 tidak bisa karena sudah melebihi limit at parent)
		C: 5M/10M 			// dapat 5M juga total 10M padahal parent cuma 5M
	kita seakan akan kebocoran 5M (ini sebuah kesalahan settingan) 

skenario 3: di kasih priority limit at dulu, sisanya di bagi sesuai priority sebesar limit at
	A: 16 					// limit parent 16M
		B: 5M/10M p:8			// dapat limit at 5M 
		C: 5M/10M p:1			// dapat limit at 5M sisa 6M dimbil sebesar limit at 5M di C dulu karena priority 1 (10M)
						// sedang B mendapat tambahan 1M karena belakangan jadi 5+1 = 6M
skenario 4: jika priority sama (misalnya 8 semua) maka akan di bagi rata sama kayak tidak pakai priority (sekenario 1)

*/
