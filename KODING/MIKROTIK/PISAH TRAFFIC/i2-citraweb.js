Prioritas Bandwidth Video Conference Zoom - MIKROTIK TUTORIAL [ENG SUB]
citraweb
-------------------------------------------------------------------------------------------------
kumpulkan 
	ip, port, protocol
addresslist
	tambahkan address list
	tambahkan role auto addresslist jika sudah punya port dan ip dasar
mangle
	mark konneksion
	mark packet
queue
	buat paket semua
	buat paket zoom
	buat paket browsing
-------------------------------------------------------------------------------------------------
ADD IP MANUAL
kita sudah merangkum ip, port, protocol, zoom
tulis dalam bentuk sintax sbb:
	/ip firewall address-list
	add address=10.10.10.10/24 list=zoom_ip
	add address=10.10.10.10/25 list=zoom_ip
	---
add zoom_ip
	new/terminal
		paste zoom_ip
	---
cek 
	ip/firewall/addresslist/ terlihat daftar ip zom tambahan barusan
--------------------------------------------------
AUTO ADD IP
MANGLE
	ip/firewall/mangle/add
		general 
			chain: prerouting
			protocol: 6(tcp)
			Dst.port: port tcp (silahkan cari daftar di internet dulu) 
		action: add dst to address list 
			adderslis: zoom_ip (pilih)
		--
	buatkan udp lagi pada protocol > copy
	comment : add addresslist auto zoom
--------------------------------------------------
MARK KONNECTION ZOOM
	ip/firewall/mangle/add
		general 
			chain: prerouting
			protocol: 6(tcp)
			Dst.port: port tcp (port nya sama dg diatas) 
		advance: 
			dst.addrs: zoom_ip
		action:
		 	action: mark-connection 
		 	new: KONEKSI-ZOOM
		 	passtg:true
	buatkan udp lagi pada protocol > copy
	buatkan juga untuk port yang web > copy
	comment: mark-konnection-zoom
--------------------------------------------------
MARK PACKET ZOOM
	ip/firewall/mangle/add 
		general 
			chain: prerouting 
			connection: KONEKSI-ZOOM (pilih)
		action:
		 	action: mark-packet 
		 	new: PAKET-ZOOM
		 	passtg:false
		comment: mark paket zzom
--------------------------------------------------
SIMPLE QUEUE
	queue/simple/add
		---
		- limitasi umum
		general
			name: total-bandwidth
			target: IP-LAN/24
			max limit: 5M/5M
		---
		- limitasi zoom
		general
			name: zoom-bandwidth
			target: IP-LAN/24
			max limit: 5M/5M
		advance
			packetmark: PAKET-ZOOM(pilih)
			parent: total-bandwidth
		---
		- limitasi lainya(browsing)
		general
			name: browsing-bandwidth
			target: IP-LAN/24
			max limit: 2M/2M
		advance
			packetmark: no-mark
			parent: total-bandwidth
-------------------------------------------------- 
selesai
