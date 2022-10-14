Pengetahuan dasar:
- router ada yang pakai RJ45 ada yang optik
- yang optik ada epon ada gpon ada xpon
- epon lebih mahal dari epon, tapi OLT epon lebih murah dari Gpon
- mode router ada banyak router, ap, bridge, client, wisp, repeater dll(nanang mrk)
- ada ptp ada ke hp langsung
- ada frequensi 2,4 dan 5,8
- ada channel 1-12 kayak HT
- ada out door ada indoor
- ada tembus tembok ada biasa
- ada merek ada harga
- ada network pakai kabel UTP, HTB, OLT, radio p2p, dst
- 
------------------------------------------------------------------------------------------------------
daftar isi:
	- 
------------------------------------------------------------------------------------------------------
mode router
- router
- bridge
- ap
- client
- wisp
- repeater
- dll lihat di ali mustika sari
------------------------------------------------------------------------------------------------------
cara konfig totolink cp300 akses point voucher

operation mode
	AP next
	ganti nama
network
	lan setting
		ip address: beri alokasi IP static(sesuai segen di mikrotik)
		default gateway: sesuai kita gateway mikrotik
		DNS: LAN-side router IP
		DHCP: disabled
wireless
	advanced setting
		band: 2.4 B/G/N 	// agar dapat di akses di semua jenis HP
		channel width: 20	// 20 agar meminimalisir interferensi
		channel interval: pilih 1-10 // ada hp yng tidak bisa 11, 12. kalau bisa jangan auto
		beacon: 200 // kalau jelek performa kembalikan ke 100
		type : long priamble // sesuai router lama
		protection: disabled
		tx beamforming: enable
		rf output:100%
	wps setting
		wps: disable
sistem setting
	atur timezone, password config, reboot skedule jam 1 malam
------------------------------------------------------------------------------------------------------
cara konfig ONU ZTE f460 v5. sangat support OLT hioso
- koneksi kabel di ONU port1
- koneksi kabel ke laptop
- setting eter laptop dengan IP satu segmen dg ONU/ 192.168.1.10
- akses API standard ONU di browser: 192.168.1.1
- username: superadmin, admin 	(silahkan pilih mana ygng bisa sesuai seller biasanya di kasih sama seller)
- password: kabeliz123, suportadmin(silahkan pilih)
- tab network > tab WAN > 
	mode: bridge( kalau pppoe ya bisa)
	port: ether1234 hidupkan semua
	ssid: ssid1 (ada empat ssid sebenarnya tapi enablekan(munculkan) satu saja, defaultnya juga satu)
	username pass: (isikan jika pppoe, kalau bridge vouceran tidak usah isi nama,pass)
