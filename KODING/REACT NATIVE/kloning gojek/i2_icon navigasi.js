- sebelum memasukkan <image> untuk icon nav bottom kita buatkan warpper nya <view> di atas <text>
- set <view> width 26 height 26/ ini hanya untuk bantuan contoh (jika tidak diperlukan langsung <image> dengan wid heig 26 x 26)
- set <text> size 10 color #545454 MarginTop 4 px
- lalu kumpulkan masing2 gambar icon ada yang aktive dan non aktiv biasanya grey dan warna
- masukkan 
	- cara 1 -> <image source = { require('./icon1.png') } />
	- cara 2 -> <image source = { uri: facebook/image.png } /> 
	- cara 3 -> pada baris import lakukan -> import homeku from './assets/icon/image1.png'
		- lalu pada <image source = homeku />

TIPS
- untuk gambar icon sebaiknya bikin 2 macam yaitu active dan nonactive
- bikin format png agar bisa transparant
- atau dari svg jadi kita tak perlu bikin 2 tinggal ganti warnanya saja