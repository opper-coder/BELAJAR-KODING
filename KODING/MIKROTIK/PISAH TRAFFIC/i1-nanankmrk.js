--------------------------------------------------
PISAH TRAFFIC GAME
nanankmrk: Memisahkan Trafik Dengan Mikrotik | Agar Game Jadi Lancar
--------------------------------------------------
SYARAT:
- sudah basic config
--------------------------------------------------
langkah berikutnya 
- addresslist 
- masukkan port di raw
- mangle: 
  - prerouting-mark connection
  - forward-mark packet
--------------------------------------------------
ADDRESS LIST
  ip/firewall/address-list/add
    name: IP-LAN
    address: ip nya LAN/24
    apply ok
--------------------------------------------------
RAW
  ip/firewall/raw/add
    general 
      chain: prerouting 
      protocol: tcp 
      Dst.port: port tcp (silahkan cari di internet dulu daftar port di nanakmrtk.com) 
    advance: 
      src.adres: IP-LAN 
      dst.addrs: !IP-LAN 
    action: add dst to address list 
      adderslis: IP-GAME (name)
      timeout:06.00.00 (refresh ip)
  --
  buatkan tcp lagi kalau masih punya daftarnya lagi pada protocol > copy
  --
  ip/firewall/raw/add
    general 
      chain: prerouting
      protocol: udp
      Dst.port: port udp (silahkan cari di internet dulu) 
    advance: 
      src.adres: IP-LAN
      dst.addrs: !IP-LOCAL
    action: add dst to address list 
      adderslis: IP-GAME (pilih)
      timeout:06.00.00
  --
  buatkan udp lagi kalau masih punya daftarnya lagi pada protocol > copy
  comment: mobile legend
--------------------------------------------------
MANGLE
  ip/firewall/mangle/add
    general 
      chain: prerouting
    advance: 
      src.adres: IP-LAN
      dst.addrs: IP-GAME
    action:
      action: mark-connection 
      new: KONEKSI-GAME
      passtg:true
  ---
  ip/firewall/mangle/add
    general 
      chain: forward
      connection: KONEKSI-GAME
    action:
      action: mark-packet 
      new: PAKET-GAME
      passtg:false
    comment: 
--------------------------------------------------
QUEUE
  queue/simple/add
    general
      name: TRAFFIC-GAME
      target: IP-LAN/24
      max limit: 3M/3M
    advance
      packetmark: PAKET-GAME
      priority:1 (prioritas 1)
      queue type: pcq-upload dan download
    apply ok
--------------------------------------------------
CARI PORT GAME
  di nanakmrk
port game
  mobile legend
  freefire
  pubg mobile
  dota
  coc
  high domino
