-----------------------------------------------------------
NOTIFIKASI
pada map kita sudah bisa melihat tanda yang bisa memberikan informasi status perangkat 
tapi kita masih butuh juga notifikasi untuk pemberitahuan saat kita tidak berada di depan monitor,
berupa suara, blink, menjalankan IoT, dll 
ini berguna memberitahukan ke kita akan adanya perubahan status pada perangakat yang kita monitoring
sidebar > notication dblclk > dialog box
	tab general
		name: buatkan name
		enable: true
		type: 
			beep: pada server dan remote
			email: kirim email saja bnukan notif ini
			execute locally: notif pada dude client, untuk komputer monitoring yg selalu hidup memang ini 
			execute on server: pada server the dude misal fetch()
			flash: blink pada icon the dude di taskbar starmenu windows client the dude
			group: menjalankan beberapa action beberapa sekaligus seperti sms, telegram, email sound kita jalankan semua sekaligus
			log: catat pada log local server the dude
			popup: alert pada the dude client laptop monitoring
			sound: memainkan file wav pada client 
			speak: manjalankan windows speak
			syslog: 
	tab schedule:
		- notifikasi boleh tidak realtime 
		- melainkan pakai sekedule tiap jam atau hari tertentu saja
		- matikan dengan cara klik maka warna putih disable, biru berarti enable
	advaced 
		- kita bisa mengatur parameter delay pada notifikasi mirip settingan sebelumnya tentang apa tadi lupa
				delay: 0 (sejak probe terjadi baru mengirim pesan)
				interval: 10 (di ulangi tiap 10 detik)
				repeat count: 3 (akan mengulangi sebanyak 3 kali saja)
				pilih centang status yang di notifikasikan
				contoh: 
					up -> down : dari up ke down  
	notifikasi baru
		kita juga bisa bikin notifikasi type tapi kita jg bisa bikin notif baryu seperi sms
		sidebar > notication dblclk > dialog box
			buat notif email
				klik email : isi dialog box
					name:
					type: email
					pada bodynya kita bisa kita kirim variabel misal status, time, name, dengan add variabel Device.status
					kita bisa atur skedule dan advanced seperti di atas tadi
			notif telegram
				klik telegram
					name: trelegram
					type: execute on server 
					insert variabel
					/tool fetch 
					scripnya bagaimana lihat cara mengirim notifikasi ke telegram lihat din channel ini
			notif sms
				port usb > tancap modem gsm dan setting scripnya caranya cari di video ini
				atau gunakan layanan sms yang sudah tersedia gak perlu repot memasang modem
				layanan ini bisa di cek di www.citrasms.com 
	aktifasi notifikasi per device
		secara default notifikasi itu disable untuk mengaktifkan silahkan klik tomb ol berikut ini
		dblclk device > tab pooling 
			> use notification > centang notifikasi yang di pilih saja misal email, telegram, script IoT dll
		tab services >
			ini di gunakan saat kita butuh menotifikasikan services tertentu misal ssl, web, telnet dll
			> use notification: true > pilih dblclk service > pilih notif yang di gunakan
-----------------------------------------------------------

