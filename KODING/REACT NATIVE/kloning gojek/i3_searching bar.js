bikin search bar berisi icin, input text, tombol promo

- bikin container <view> 
	untuk "text input" dan untuk "promo"
	- di dalamnya <view> text input <TextInput placeholder = 'what do you want to eat'> 
		- beri style ukuran 1, radius 25, warna grey, height: 40, 
		- FontSize: 13, PaddingLeft: 45, PaddingRight: 20
	- dibawah text bikin icon <image source = namaicon.png /> yang sudah di import si atas
		- style = position: 'absolute' di wrappernya 'relative' top: 10 left: 12
		- pada wrap nya marginHorizontal: 16
	- dalam view promo bikin heigtya sama yaitu 40 width: 35 
	- dan dalam parent utama wrapdirection: 'row' align dan justify center paddingtop: 15 
	- beri jarak antara gambar dan text input 18
