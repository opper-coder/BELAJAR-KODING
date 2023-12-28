# Buat skrip yang akan memantau waktu uptime
/system script
add name=switch-profiles source={
  :local uptimeLimit 180; # Waktu dalam detik (180 detik = 3 menit)
  :local currentUptime [:parse [/system resource get uptime]];
  if ($currentUptime >= $uptimeLimit) do={
    /ip hotspot user set [find name="nama_user_hotspot"] profile=profileB;
  }
}

# Atur penjadwalan skrip untuk dijalankan secara berkala
/system scheduler
add name=switch-profiles interval=1m on-event=switch-profiles start-time=startup
