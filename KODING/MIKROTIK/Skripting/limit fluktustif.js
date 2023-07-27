Untuk memeriksa rata-rata lalu lintas (rx/tx) dari pengguna hotspot dan menambahkan batasan pada Simple Queue di perangkat MikroTik, 
Anda dapat menggunakan Script untuk memantau lalu lintas dan Scheduler untuk memeriksa secara berkala. 
Berikut adalah langkah-langkahnya:

1. **Buat Simple Queue Awal (opsional)**: 
  Jika Anda belum memiliki Simple Queue yang sesuai, Anda dapat membuatnya terlebih dahulu. 
  Misalnya, Anda dapat membuat Simple Queue dengan batas awal 2M/2M untuk setiap pengguna hotspot.

2. **Buat Script untuk Memeriksa Rata-Rata Lalu Lintas Pengguna Hotspot**:
   Buat skrip untuk memeriksa rata-rata lalu lintas (rx/tx) dari pengguna hotspot. 
  Skrip ini akan mengambil informasi dari Hotspot Active 
  dan menghitung rata-rata lalu lintas (rx dan tx) yang digunakan oleh setiap pengguna.

   ```
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
       
       :local limit_threshold 100M; # Atur ambang batas lalu lintas, misalnya 100 MB per menit.
       
       :if ($avg_traffic > $limit_threshold) do={
           /queue simple set [find target-addresses=$user_ip] max-limit=1M/1M;
           :put ("User " . $user_ip . " telah mencapai batas rata-rata lalu lintas.");
       }
   }
   ```

   Dalam skrip di atas, 
   kita memeriksa setiap pengguna hotspot aktif dan menghitung rata-rata lalu lintas (rx dan tx) 
   dalam interval waktu tertentu (1 menit). 
   Jika rata-rata lalu lintas pengguna melebihi ambang batas yang telah ditentukan (misalnya 100 MB per menit), 
   maka skrip akan mengatur batas limit Simple Queue menjadi 1M/1M (1 Mbps) untuk pengguna tersebut.

3. **Buat Scheduler untuk Menjalankan Script**:
   Buat scheduler untuk menjalankan skrip secara berkala untuk memeriksa rata-rata lalu lintas pengguna hotspot.

   ```
   /system scheduler add name=scheduler_check_avg_traffic_hotspot interval=1m on-event=script_name
   ```

   Gantilah "scheduler_check_avg_traffic_hotspot" dengan nama scheduler yang Anda inginkan, 
   dan "script_name" dengan nama skrip yang telah Anda buat pada langkah sebelumnya.

  Dengan langkah-langkah di atas, perangkat MikroTik akan secara otomatis memeriksa rata-rata lalu lintas dari pengguna hotspot 
  dan mengatur batas limit pada Simple Queue jika rata-rata lalu lintas melebihi ambang batas yang telah ditentukan. 
  Pastikan untuk menyesuaikan interval pengukuran dan ambang batas sesuai dengan kebutuhan jaringan Anda.
