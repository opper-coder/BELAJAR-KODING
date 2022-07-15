===========================================================================================================
OLT HSGQ tapi pada prinsipnya sama saja dengan HIOSO HA7203CS :   
1. Login Ke Admin Panel OLT  
   - Gunakan Port NMS > OLT hanya bisa diremote melalui port dengan label NMS. 
      atau MGMT
   - Set IP Komputer/Laptop > set IP komputer/laptop yang akan dipakai untuk 
      setting mengugnakan IP 192.168.100.xxx. misalnya: 192.168.100.2 sampai 254
   - Pastikan Laptop/Komputer Terkoneksi ke OLT > ping 92.168.100.1 (IP OLT)
   - Akses Admin Panel Via Browser > IP default OLT 192.168.100.1 
2. Setting Management Access OLT
   - Siapkan VLAN Management di MIKROTIK > 
      interface > tab vlan > add > name: manajemen (mis) > vlan ID : 11 (mis)
      > interface pilih port atau bridge (silahkan) 
      > buatkan IP pada port atau bridge tsb (untuk gateway dan DNS) yg akan kita manage
      > bikin tiga buah : 1 VL-HOTSPOT 2. VL-Management 3. VL-PPPOE > dg id misalnya 11,12,13 di bridge vlan (misalkan) (atau ether2-OLT terserah)
   - Pasang VLAN Management di OLT
      > Kita harus memasang VLAN management (11) pada OLT,
      agar bisa dipakai untuk meremote OLT, serta ONU/ONT/Modem yang ada di client.
      > caranya : tab vlan > vlan list > create vlan >
      vlan id : (ambil dari mikrotik tadi) dan centang pada semua portnya dan GE1
      > 

   - Memasang IP Pada VLAN Management
   - Setting Gateway dan DNS OLT
   - OLT Sudah Bisa Diakses dari LAN
3. Setting VLAN Distribusi di OLT
   - Buat Interface VLAN di Mikrotik
   - Tentukan Uplink Port
   - Tentukan PON port
   - Pasang VLAN pada uplink dan EPON port
4. Management ONU/Modem
   - Mengatur Authentifikasi Modem ONU/ONT
   - Melihat ONU yang Terkoneksi
   - Memberi Label Pada ONU
5. Utility Menu di OLT
   - Menyimpan Settingan OLT
   - Merubah Password admin OLT
   - Merestart OLT
6. KESIMPULAN


belajar pada: https://www.tembolok.id/cara-setting-olt-hsgq-epon/
-----------------------------------------------------------------------------------------------------------
___________________________________________________________________________________________________________
