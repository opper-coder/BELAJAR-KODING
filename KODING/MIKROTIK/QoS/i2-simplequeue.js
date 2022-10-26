/* MIKROTIK SIMPLE QUEUE 
---------------------------------------------------------------------------------------------------------------
- Simple que adalah limitasi sederhana karena tidak harus mengerti firewall, paket,. mangle dll
- simple que dasar hanya menentukan target lalu set max limit tx/rx nya caranya:
	- queue > tab simple queue > add >
		tab general >
			name: beri nama
			target: IP, beberapa IP, IP slash, ether, wlan dengan add (panah bawah) (bisa di gabung atau satu2)
			dst: kosongkan
			max limit: upload 5M  download 5M (aspek clien/user)
			burst: akan di bahas di bawah nanti
			time: skeduler untuk limitasi tertentu pada jam dan hari tertentu
		tab advance >
			paket mark: di gunakan untuk mangle/gabung dengan queue tree, maka keteranganya ada pada queue tree 	

- cara melihat hubungkan perangkat ke IP atau jalur tersebut lalu speed test maka akan kelihatan hasil limitasinya
*/

/* BURST
---------------------------------------------------------------------------------------------------------------
untuk akses terus terusan di limit 1 mb
untuk user yang sekali2 maka di limit 1 mb dan di kasih bonus 2 mb beberapa saat yang dia tinggalkan

default burst 0 alias tidak ada bonus

inilah istilah yang akan kita bahas
	max limit 	: basic limit(pra burst)
	burst treshold	: kalkulasi( > maxlimit sedikit) 
	burst limit 	: bonus( 2x maxlimit )
	time 		: detik(berapa lama)
Rumus: Burst limit / max limit = <> treshold. contoh:
	max limit 	: 8M 		// tanpa burst
	burst treshold	: 10M 		// pada detik ke1 20M/8=2,5 maka dapat burts, detik ke2 20+20=40/8=5, ke3 7,5, 
					// saat ada di bawah 10M maka ini akan di beri bonus
	burst limit 	: 20M 		// dapat bonus
	time 		: 8x 		// detik ke

*/

/* BUCKET
---------------------------------------------------------------------------------------------------------------
selain Burts ada juga bucket mirip dengan burst tapi beda cara kalkulasinya aja caranya:
	seperti langkah di atas tapi di 
		tab advanced:
			bucket size: 0.1 (default)

	tapi efek dan dan experiennya sama maka pilih saja burst
	terus ini hanya akan efektif kalau memamng punya alokasi yang nagnggur kalau tidak punya ya percuma saja
*/

/* HTB SIMPLE QUEUE 1
---------------------------------------------------------------------------------------------------
HTB penjelasan lebih rinci di queue tree. adalh susunan prioritas parent child 
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

/* HTB SIMPLE QUEUE 2
---------------------------------------------------------------------------------------------------
- bikin parent:
	queue > tab simple queue > 
	- tab general
		name: queue1-parent 		// nama
		target: 10.10.10.0/24 		// targetnya subnet
		max limit : 10M/10M  		// bandwidth total yg akan di bagikan
	- tab advanced
		interface: ether2-voucher 	// menuju klien
		apply-ok
- bikin child child nya dulu
	queue > tab simple queue > 
	- tab general
		name: queue1-child 		// nama
		target: 10.10.10.1 		// ip user
		max limit : 5M/5M
	- tab advanced
		interface: ether2-voucher 	// menuju klien
		limit at: 2M/2M 		// bandwitdh terkecil yang akan di dapatkan saat sibuk 
		parent: queue1-parent 		// hubungkan ke parent
		> lalu sorting
*/
