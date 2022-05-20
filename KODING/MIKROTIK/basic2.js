SETTING MIKROTIK DASAR

Kalau kita beli mikrotik di awal tidak langsung bisa di koneksikan, kita mesti config terlebih dahulu
saat kita daftar ISP biasanya kita di kasih IP dari ISP namun IP untuk jaringan lokal kita (LAN)
Kitalah yang tentukan ip private nya ada 3 range yang bisa kita pilih
10.0.0.0/8
172.16.0.0/12
192.168.0.0/16

Untuk tool nya bisa pakai winbox atau web base / webfix milik mikrotik bersangkutan
Kita sekarang pakai winbox aja colokan kabel confignya menggunakan kabel utp rj45 biasa
Di port 2 sampai 10 bisa kalau punya 10 port. Port 1 nya untuk isp 
dan pertama kali masih di protek oleh mikrotiknya



Tapi untuk lebih wizardnya ganti pakai saja dengan 10. 0. 0. 0/24 ini cukup untuk 256 client
- Koneksikan dengan laptop di ether selain 1, sebab di protek oleh pabrik untuk ISP
- gunakan remote mikrotik dengan winbox download yng dulu terbaru atau remot via web alamatnya:
- setelah terkoneksi buka aplikasi winbox dan tampilkan connect to, login, password
	- connec: to pilih MAC address untuk keperluan setting, boleh ip adress tapi lebih disaran
	kan untuk setting di MAC saja (kalau sudah tersetting dan akan beroperasi maka 
	lakukan login dengan koneksi via IP lebih di sarankan supaya tidak putus nyambung)
	- login: default admin
	- password: kosong
	- connect
- akan terbuka halaman awal yang menampilkan default config (IP adress tadi berasal dari sini)
- untuk memulai config ini harap di hapus saja alasanya kita belajar config dari nol saja lagian 
kalau kita biarkan tidak di hapus malah beresiko bentrok dengan konfig kita sendiri 
- caranya klik remove configuration -> tunggu reboot sesaat -> login - > reconect
- maka sudah bersih confignya. Sekarang eteher satu sudah tidak di blok lagi namun tetap jangan
Di gunakan sebab biasanya kita gunakan untuk connect ke sumber

1 GANTI PASSWORD
- lakukan ini dulu karena ip public dari ISP langsung bisa kena attact dari orang jail
- caranya : sistem -> user -> bikin user baru klik + -> nama aqil - > group full -> password isikan ->
-> admin default nonaktifkan dengan klik tombol x. 
- sekarang login ulang dengan user password baru "aqil" 
- jangan sampai lupa ini kalau lupa semua config harus rela di hapus semua

2 GANTI NAMA 
- nama ini sebagai nama MIKROTIK yanagb akan tampil saat login dan tampil di top bar
Atau pas di remote
- caranya : sistem - > identity -> nama nya ROUTER-UTARA 

3 INTERFACE
Kita tahu ada beberapa ether di mikrotik kita (1-10 misalkan sesuai type)  
Nah yang ether 1 itu biasanya di gunakan untuk ISP kalau maunya 3 ISP di gabung
Ya alokasikan 1, 2, 3 untuk ISP WAN, Selebihnya gunakan sebagai LAN

Di interface ini kita perlu menentukan PORT mana yang akan kita gunakan untuk
WAN yaitu ambil sumberdaya internet, dan menentukan mana yanag akan kita konsumsi
Sumberdaya untuk LAN, WAN KELUAR dan LAN MASUK 

4 BRIDGE dan PORT
Trik untuk agar lebih fleksibel jangan setting 1 per 1 tiap port nya secara mandiri
Melainkan masukkan port ke dalam bridge(wadah/rumah). Supaya saat ubah konfig
Maka cukup bridgenya saja yang di setting tidak harus semua port 

Cara bikin bridge : bridge - >tab bridge -> +(add) -> nama misal: bridge-WAN (wadah untuk port2 dari ISP) -> OK
Cara masukan port ke bridge: bridge -> tab ports  -> + -> interface: ether 1 misalnya -> bridge pilih bridge-WAN tadi yg di buat -> OK

Setiap profider memberi sambungan ke kita sebagai klien berbentuk macam2 type client
Bisa (automatic)DHCP, (ada juga static) hotspot, access point, PPPoE dll

5 CLIENT DHCP(automatic)
Sekarang asumsinya type client DHCP ya
Caranya: IP -> DHCP Client -> add -> pilih interface bridge-WAN tadi(jangan ether 1 lagi 
sebab sudah dimasukan ke bridge, meskipun mungkin bisa) -> tunggu status bound(artinya kita dapat IP dari ISP)

Sekarang lihat IP nya : IP -> Address -> pada adress list kita bisa mmelihat 
Ada IP yang…
