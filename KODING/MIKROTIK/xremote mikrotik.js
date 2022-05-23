========================================================================================
REMOTE 
ada beberaaapa cara remote mikrotik 
1. dengan IP public
2. tanpa IP Public
----------------------------------------------------------------------------------------
DENGAN IP PUBLIC
1. pastikan mikrotik sudah jadi clien (punya IP clien) 
   - cek > IP > Adress > pilih IP pada WAN
   - Jika IP nya tidak diawali dengan 192.168. atau 10. dan 172.16. maka anda mendapat IP Public dari ISP.
2. Mengatasi IP Public dari ISP selalu Berubah (IP Public Dynamic)
   - IP > Cloud > centang DDNS enable > update interval isi 00:02:00 > centang juga update time > apply - Ok
   - pada public address kita di kasih IP public (IP ini yang kita kunci) 
   - nah di bawah nya kita di kasih DNS name: randomcharacter.sn.mynetname.n
   - DNS name ini yang kita gunakan untuk login
3. cara akses copas DNS name pada connec to. login: admin pass:""
----------------------------------------------------------------------------------------
TANPA IP PUBLIC MENGGUNAKAN VPN
MASUK KE PENYEDIA DDNS
kita sewa dulu DNS server di freeddns.com > daftar ddns > deposit (Rp 2000/bln)> lalu kita konfig freeddns > di layanan vpn
   kita suruh masukan informasi MIKROTIK spt api port yg di ambil dari mikrotik
   caranya: IP > services
- jika remote untuk winbox pilih port "winbox"
- jika reemote mikmon pilih port "api"

DI MIKROTIK
interface > add > ovpn client > tab general ganti nama: 'terserah'
- tab dial OUT > connect  to : 'DNS server yang di kasih server DNS' > isi user dan password
___________________________________________________________________________________________________________
