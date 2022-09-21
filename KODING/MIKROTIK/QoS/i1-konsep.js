/* KONSEP LIMITASI QoS
---------------------------------------------------------------------------------------------------
limitasi bandwidth akan membicarakan sekitaran tema berikut:  
	limit		: membatasi bandwidth
	grouping 	: membatasi berdasarkan group IP, IP slash, port, bridge, vlan, wlan
	burst 		: bonus yang tidak selalu menggunakan bandwidth
	priority 	: dahulukan object tertentu
istilah yang harus di ketahui:
	troughtput		: bandwidth yang kita miliki yang akan kita bagi
	latency 		: makin banyak rool makin lambat
	jitter 			: rata rata fluktuasi latensi (ini harus kita jaga agar jangan terlalu besar)
	paket loss		: adalah kebutuhan lebih besar dari pada bandwidth yg tersedia, 
					  kalau FTP mungkin tidak terasa pengaruhnya paket loss karena ada re transmit
					  tapi kalau UDP tiodak ada retransmit sehingga ada paket yang hilang

*/
