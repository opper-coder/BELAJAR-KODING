bilhanet etting Router ZTE F609 Menjadi Acces Point Hotspot di playlist 100
-------------------------------------------------------
bilhanet etting Router ZTE F609 Menjadi Acces Point Hotspot 
ini hanya prinsip saja

- masuk administrator
- TAB WAN
	- ip version: ipv4
	- type: DHCP (pilih saja DHCP biar gampang, karena nanti akan di disablekan di LAN nya)
	- conn name: create WAN conn
	- service list: internet
	- link type: IP (jika ada)
	- type: DHCP (jika ada lagi)
	- ip : ipv4
	- natL: tercntang tidak apa2 (jika ada)
	- vlan mode: TRANSPARENT (jika ada)
	- create
--------------------------------------------------------
catatan router ada mode type bridge silahkan pilih bridge dan juga port binding sesuaikan dengan connectiuon name yng kita buat ya biasanya otomatis sih 
	- type: ada mode bridge silahkan  
	tab port binding silahkan pilih connection name sepeerti yang kita buat barusan, dan pilih semua ether dan ssid yg di pakai
	- untuk urusan WLAN LAN dll bisanya sama saja kayaknya kecuali urusan DHCP server 
--------------------------------------------------------
- TAB WLAN
	- seperti biasa kita tidak isi
	- jangan lupa ubah nama dan security openSystem 
- TAB LAN
	- LAN IP: ubah satu segmen dengan gateway mikrotik
	- disconnect: konnect kembali dg atur ip laptop anda 
	- kalau g bisa restart router dan login dengan ip baru. kalau https hilangkan s nya
	tab DHCP
	- disable DHCP server (supaya dapat IP dari mikrotik)
	- assign ispDNS: centang (supaya dapat DNS dari mikrotik)
	- simpan/save, tapi biasanya tidak mau simpan, cara mengatasinya dibawah ini
	- atur DHCP start dan end satu segmen dengan LAN IP di atas, meskipun di disable DHCP nya
	- default gateway isikan sesuai gatewai segmen di mikrotik simpan
	- setelah diganti ip satu segmen biasanya bisa di simpan
	tab DHCP portlist
	- centang semua port
	tab DHCP mode
	- semua port ubah ke mode default
	tab IPv6 DHCP 
	- matikan dhcp servernya juga
	tab atas security di atas 
	- firewall di ganti LOW
	tab atas aministration
	- ganti user dan password management
REBOOT
saja langsung login dan speedtest harus sesuai dengan yang di berikan pada voucher
