AMBIL SCRIPT DALAM CONFIGURASI MIKROTIK
1. pada saat kita membuat configurasi dalam mikrotik > sebenarnya di backend di buatkan scripnya juga
2. jika configurasi sudah running maka script tersebut bisa di kita ambil dan configurasi ulang untuk mikrotik lainya dengan 
    konfigurasi yang sama, tinggal export ke notepad > lalu copas ke terminal mikrotik lainya lalu enter > running > configurasi sudah tercopy
3. cara backupnya: 
	- new Terminal :> ip firewall export file=mangle 	> enter	// contoh1
	- new Terminal :> ip firewall export file=raw   	> enter 	// contoh2
	artinya= ( ip:kemenu ip > firewall:kemenu firewall > tab mangle:ke tab mangle > export:backup semua baris row > file:berbentuk file   ) 
4. cara ambil hasilnya : pergi ke mikrotik > file > file teratas > bernama mangle.rsc (nama sesuai tab yang di pilih)(extention .src , penting!)
	saat di buka biasanya di dalam file menyertakan beberapa config sampingan lainya. kita hanya mengambil file yang kita perlukan saja sesuai 
	dengan configurasi yang kita punya saja untuk kita jalankan di terminal kita yang baru 
5. copas file yang terbuat tadi ke notepad lalu baca sesuai config sesuai langkah kita sebelumnya > lalu running di terminal

TIPS.
	1. config sesuai langkah config dasar: membuat bridge > port > IP dst
	2. lakukan backup satu-persatu langkah tiap tab
	3. backup masing-masing script, lalu kumpulkan dalam sebuah file sebagai kombinasi kita sendiri sebagai koleksi
	4. lakukan untuk:
		1. config dasar
		2. security
		3. load balance
		4. sambungkan ke cloud server kita
		5. priority aplikasi dan user
		6. jadwal restart
		7. jadwal hapus data voucher kadaluarsa
		8. speed test internal 
		9. dll
