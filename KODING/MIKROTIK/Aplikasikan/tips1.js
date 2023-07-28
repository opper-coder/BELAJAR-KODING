-----------------------------------------------------------------------------
Burst
-----------------------------------------------------------------------------
burst voucher
	max limit 	: 1,3 M
	burst treshold  : 2 M
	burst limit 	: 3 M
	time 		: 10 		// 8 - 12 (coba atur disini penyesuaian)

-----------------------------------------------------------------------------
sekeduller
-----------------------------------------------------------------------------
- Klik pada menu "System" di Winbox atau ketik perintah berikut di terminal:

/system scheduler add name=scheduler_restart interval=1w start-time=03:00:00 on-event="/system reboot"

- 1d atau 1w (week) start-time dapat di ganti  00:00:00 (default), name= bisa di ganti
- cek status 
Untuk memastikan scheduler telah dibuat dengan benar, Anda dapat memeriksa daftar scheduler yang aktif dengan menjalankan perintah berikut di terminal:
atau cek langsung di system table skeduler row

/system scheduler print

-----------------------------------------------------------------------------
periksa rata rata rx/tx hotspot user lalu tambahkan batasan queue mikrotik
-----------------------------------------------------------------------------
1. Buat Simple Queue Awal (opsional): batas awal 1M/1M untuk setiap pengguna hotspot.
2. Buat Script untuk Memeriksa Rata-Rata Lalu Lintas Pengguna Hotspot:
3. Buat skrip untuk memeriksa rata-rata lalu lintas (rx/tx) dari pengguna hotspot. 
Skrip ini akan mengambil informasi dari Hotspot Active dan menghitung rata-rata lalu lintas (rx dan tx) yang digunakan oleh setiap pengguna.
lalu eksekusi terjadi if else
pembanding di lakukan menggunakan total traffic per satu menit 
lakukan kalkulasi yang tepat penggunaan 1 menit per pengguna ideal dalam MB download uploadnya

:local hotspot_users [/ip hotspot active find]
:foreach user in=$hotspot_users do={
    :local user_ip [/ip hotspot active get $user address];
    :local user_rx [/ip hotspot active get $user bytes-in];
    :local user_tx [/ip hotspot active get $user bytes-out];
    :local total_traffic ($user_rx + $user_tx);
    :local interval 1m; # Interval pengukuran, misalnya 1 menit.
    :local avg_traffic ($total_traffic / ($interval / 60));
    
    :put ("User " . $user_ip . " menggunakan rata-rata lalu lintas " . $avg_traffic . " bytes per menit.");
    # Ganti "bytes" dengan "bits" jika Anda ingin melihat dalam bentuk bit.
    
    :local limit_threshold 100M; # Atur ambang batas lalu lintas, misalnya 100 MB per menit. seperinya 4,5M (750kb * 60 detik = 45000 kb)
    
    :if ($avg_traffic > $limit_threshold) do={
        /queue simple set [find target-addresses=$user_ip] max-limit=1M/1M;
        :put ("User " . $user_ip . " telah mencapai batas rata-rata lalu lintas.");
    }
}
	    
Dalam skrip di atas, kita memeriksa setiap pengguna hotspot aktif dan menghitung rata-rata lalu lintas (rx dan tx) 
dalam interval waktu tertentu (1 menit). 
Jika rata-rata lalu lintas pengguna melebihi ambang batas yang telah ditentukan (misalnya 100 MB per menit), 
maka skrip akan mengatur batas limit Simple Queue menjadi 1M/1M (1 Mbps) untuk pengguna tersebut.
-----
Buat scheduler untuk menjalankan skrip secara berkala untuk memeriksa rata-rata lalu lintas pengguna hotspot. 
name= bisa di ganti:
	
/system scheduler add name=scheduler_check_avg_traffic_hotspot interval=1m on-event=script_name

cara memberi nama script pada mikrotik
ChatGPT
Untuk memberi nama pada script di perangkat MikroTik, 
	Anda dapat menggunakan menu "System Scripts" di Winbox atau menggunakan perintah di terminal. 
	Berikut adalah langkah-langkahnya:

Menggunakan Winbox (GUI):

Buka aplikasi Winbox dan akses perangkat MikroTik dengan hak akses administratif (admin).
Klik pada menu "System" di sisi kiri jendela Winbox.
Pilih "Scripts" di bawah menu "System" untuk membuka jendela "System Scripts".
Klik tombol "+" untuk menambahkan script baru.
Di jendela "New Script", beri script Anda nama pada kolom "Name".
Masukkan kode script yang ingin Anda tambahkan pada kolom "Source".
Klik "OK" untuk menyimpan script.
Menggunakan Terminal (CLI):

Akses perangkat MikroTik melalui terminal dengan hak akses administratif (admin).
Untuk membuat script baru, gunakan perintah berikut:
bash
Copy code
/system script add name=nama_script source="kode_script"
Gantilah "nama_script" dengan nama yang Anda inginkan untuk script, dan "kode_script" dengan kode script yang ingin Anda tambahkan.
Contoh untuk membuat script sederhana dengan nama "contoh_script" di terminal:

sql
Copy code
/system script add name=contoh_script source=":log info \"Ini adalah contoh script.\""
Dengan langkah-langkah di atas, Anda telah berhasil memberi nama pada script di perangkat MikroTik. 
	Nama script ini akan memudahkan Anda dalam mengelola dan mengidentifikasi script yang telah dibuat. 
	Pastikan untuk menggunakan nama yang deskriptif dan mudah diingat agar mudah dikenali nantinya.
-----------------------------------------------------------------------------

-----------------------------------------------------------------------------
