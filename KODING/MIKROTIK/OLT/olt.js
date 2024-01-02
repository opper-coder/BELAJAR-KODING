setting OLT
----------------------------------------------------
HARDWARE:
skema pengkabelan
1. MIKROTIK     : ether1 ke ISP > ether2 ke OLT dg vlan > buat vlan100,vlan200 > ether 3 untuk remote
2. OLT          : Uplink1 dari MIKROTIK ether2 > PON1 ke ONT/antena 
3. HOTSPOT/antena   : ONU/ONT > pilih mode bridge > setting vlanID ke vlan100
----------------------------------------------------
SETTING MIKROTIK
1. config dasar
    - interface: ether1-ISP, ether2-OLT, ether3-LOCAL
    - ip: 
        - ether1 dapat DHCP client (setting dasar dulu sampai nat masquerade, ada tutorialnya)
        - ether2 tidak ada IP, IP berada di vlan(setting vlan, ada tutorialnya)
        - ether3 kasih IP: 30.30.30.0/24 (setting DHCP server, ada tutorialnya)
    - coba akses internet lewat ether3 > klik dunia > change adapter > pilih eternet > disable dan enable > 
2. bikin vlan (ada tutorialnya silahkan baca) tapi singkatnya disini:
    - ceritanya kita akan bikin VLAN untuk HOTSPOT(vlan100) dan RUMAHAN PPPoE(vlan200) 
    - interface > add > vlan > name: VLAN100, VLAN ID: 100, interface: ether2-OLT
    - interface > add > vlan > name: VLAN200, VLAN ID: 200, interface: ether2-OLT (samakan port ini)
    - kasih address > IP > address > 10.10.10.0/24(VLAN100) dan 20.20.20.0/24 (VLAN200)
    ------
    jadikan HOTSPOT untuk vlan100
    IP > hotspot > tab servers > tombol hotspot setup > interface: VLAN100(jangan ether2-OLT)
    > next2 sampai selesai > oya pada DNS isi ITS-hotspot.net > kalu dah jadi > dclick > adresses per MAC:1
    ------
    jadikan PPPoE untuk vlan200 
3.  kalau mau ke OLT tanpa vlan ya pakai hotspot biasa saja di ether4 misalkan lalu kirim ke OLT di uplink2
    dan keluarkan ke kabel SFP2 jangan di campur dengan vlan tadi maka akan lelet semua
    karena tidak ada hubunganya dengan VLAN diatas tadi ini independen
----------------------------------------------------
CATATAAN OLT
sambungkan dulu OLT dan harus bisa di remote dari LAN (laptop)
- olt sudah punya ip default    - 192.168.0.88. masukkan olt ke ether yang memiliki pool IP - 192.168.0.1/24
  supaya masuk kesegmen local IP ini
- coba ping ke OLT - 192.168.0.88 jika replay maka OK sudah bisa mendistribusikan Layanan
- harusnya OLT juga sudah bisa diremote di dalam LOCAL ini
- keluarkan OLT dan perangkat dari pool IP - 192.168.0.1/24 dan setting OLT dan Perangkat di manual
----------------------------------------------------
SETTING OLT
login ke OLT
    - tancap ether dari laptop ke OLT port MGMT
    - akses OLT di browser dg IP default bawaan di dosbook atau label
    - kalau ada vlan atur vlan kalau tidak ya biarkan saja tidak perlu setting
    - di OLT ada setting bandwidth dan password. tapi cukup di MIKROTIK saja 
----------------------------------------------------
setting HOTSPOT     : ONU/ONT > pilih mode bridge > setting vlanID ke vlan-10
