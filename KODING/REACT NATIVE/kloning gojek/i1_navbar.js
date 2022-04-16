langkah pertama lihat standard templat
- struktur folder
- struktur export import
- penamaan halaman menggunakan index
- dll

kita akan membuat aplikasi berasarkan "atomik desain"
atom - molekul - organism - template - page

- sebelumnya sudah belajar project init
sekarang process slicing (konversi desain ke koding) 
 
MEMBUAT MENU BOTTOM

- membuat halaman home
	- bikin dulu <view> untuk wrapper (container) dengan display flex 1
	- lalu di dalamnya bagi halaman contain home jadi 2. -> 1. untuk nav buttom 2. untuk layar home
- caranya bikin <view> untuk nav dengan tinggi : 54 
- caranya bikin <view> untuk home style : flex 1 dan bungkus semua elemen 
- lalu di dalam <view> nav bikin 5 view lagi dgn masing masing style flex 1
- bikin parent nya (nav) flexDirection: 'row'
- jangan lupa masing2 dari 5 isi denagn <text> dan <image> dan set AlignItem dan JustifyContent : center;



TIPS

-	tips saat kita scren shoot dengan aplikasi di hp dan di ukur via adobe XD
	maka setting lebar defaul app = 375 px atau iphone x di vivaldy

-	dan cara mengukur text yaitu ketik text yang sama
	lalu letakkan pas di atas tulisan dari screeshoot tersebut lalu samakan tinggi dan lebarnya

-	cara ambil warna pakai pippet

