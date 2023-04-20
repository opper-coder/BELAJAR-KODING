NEXT-SAKAI
----------------------------------------------------------- 
- mengenal next dan sakai 		-> 
- installasi next js 			-> 
- instalasi sakai js 			-> 

-----------------------------------------------------------
next adalah framework untuk reactjs untuk menangani banyak hal terkait dengan reactjs, antara lain
	- menangani komponen server dan komponen client 
	- menangani route dengan metode folder 
	- lebih siap deploy 
	- untuk komponen dan kemampuan react bisa berjalan normal: redux 
sakai-js 
	- adalah template yang dibuat berdasarkan primereact. 
	- primereact adalah framework seperti tailwind, bootstrap, bulma pada khusus untuk react JSX     
	- primereact tersedia komponen siap pakai 
	- sakai adalah komponen yang sudah disusun sebagai dashboard terdapat banyak komponen, dan juga page
-----------------------------------------------------------
cara install nextjs
	- goto nextjs.org
	- buat folder project dimanapun > buka terminal di folder tersebut 
	- :> npx create-next-app@latest > lalu akan ditanya paket apasaja yang akan disertakan yes/no
	- paket2 bisa di install belakangan tunggu sampai selesai
	- jalankan project :> masuk keproject instalasi :> npm run dev :> akses dibrowser : localhost:3000 
	- matikan kembali :> ctrl+c
	- selesai

-----------------------------------------------------------
- masuk primereact.org > template > sakai > download > extract > pilih saja yang sakai-js 
- buka nextjs di :> code .
- buka sakai-js di :> code . 
- letakkan berdampingan sakai-js kanan, next di kiri
- buka keduanya package.json, copas semua packet di sakai-js ke next > jalankan installasi > npm i 
- copas semua folder di sakai ke next sesuai letak pada nextjs > yang penting jangan sampai menimpa apa yang ada di nextjs cari cara saja
- lalu komponen2 bawaan nexjs yang tidak terpakai bisa di hapus
- termasuk index css bawaan nextjs tidak dipakai (bisa dihapus)  
- selesai
-----------------------------------------------------------
tinggal jalankan
	- :> npm run dev > browser: localhost:3000 > harusnya tampil halaman dashboard sakai 
	- sudah tinggal kita bikin folder diroot untuk project halaman kita sendiri 
	- mungkin kita juga mengedit sebagian layout topnav, sidebar, footer silahkan 
	- happy hack!
	
