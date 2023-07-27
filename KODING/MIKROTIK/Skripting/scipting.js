// scripting
- disini adalah cara yang biasa di pakai, pada dasarnya di dokumentasi ada
- kita bisa cek if, function, event, dll ada
- sublime tab4

COMMAND ROUTE
----------------------

add, remove, get, set, enable, disable 				// CRUD row data rules
/ip address							// akses route root pakai slash/: root > ip > address > command isi parameter. masuk menu berikutnya pakai spasi
/ip /address							// sepasi = selanjutnya v6 untuk v7 pakai slash/ meskipun pakai spasi masih bisa, kedepan mungkin pakai slash semua
								// semicolon ";" atau baris baru(newline), adalah di anggap penutup perintah  
								// semua perintah bisa kita lihat di auto complete saat kita masuk ke route misal /ip adressess, lelu tekan "?" 
								   di atas ada auto complete nya tinggal dipilih dan tulis sebagian lalu tab, atau double tab,

								// kalau kepanjangan dan ingin menulis di bawahnya sementara belum mau di tutup maka gunakan \ backslash pada potongan baris  
/ip address add adresses=192.168.10.10/24 interface="ether1" 	// add: tambahkan
/ip address remove 2 						// remove: hapus row ke dua 
/ip address print 						// mirip ls: melihat daftar rules
/ip address remove [find comment="contoh"] 			// eksekusi perintah dalam route ip/address/ hanya satu command kedua harus dalam "[]"
/ip address set [find  interface="ether3"] interface="ether4" 	// set: replace
 
GLOBAL COMMOND :
----------------------
:ping 192.168.10.10						// global command wajib pakai :
:put, :resolve, :delay, :beep, :set,  				// ada beberapa command yang kita kenal
:put "hello world" 						// mirip echo, console.log, print
:put [:resolve www.mikrotik.co.id] 				// :resolve memanggil web site tapi masih dalam memory untuk menampilkan pakai :put 
:beep frequency length 						// menyalakan beep pastikan ada beepernya restart dan ada bunyi startup apa tidak
:global varADA 100 						// bikin variabel global varADA bernilai 100
:put $varADA 							// menmpilkan variabel pakai dolar
:local varASA 200 [put $varASA] 				// untuk menampilkan tidak bisa langsung di tulis di bawahnya (di luar scoop), harus sebaris pakai [] sesama scoop sebaris 
/sistem > script > tab environment 				// cara lihat scoopnya ada disini

CONTROL
looping for, while, do while 					// iterasi
:for i from=1 to=10 do={ /ppp secret add name="user$i" password="aqil$i" } 	// for di gunakan jumlah finisnya
:if ( true ) do={ :put "tralala" }

:global version [/system resource get version ]
:if (version>=6.5) do={
  # Do some stuff
} else={
  # Do some other stuff
}

sebenarnya masih ada if else, event trigger


REPOSITORI
								// biasanya kita nulis di terminal, tapi kita bisa di simpan di repositori dalam mikrotik
								   untuk dapat di panggil dan di jalankan nantinya oleh trigger  
system > script > add > nama file > source silahkan isi kan codenya > 
runscript 							// saat di klik run script maka akan di eksekusi

