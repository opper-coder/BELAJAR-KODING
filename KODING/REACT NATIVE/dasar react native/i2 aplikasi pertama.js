komponen  
komponen ada atom, partikel, organisme, page, ...

- komponen ada banyak tapi 6 bagian dasar yang perlu di kenal
	- View = div bungkus bisa di styling
	- Text = text bisa di style
	- Image = image
	- TextInput = form input / field
		- ScrolView = komponen agar bisa di scrol ke bawah 
		- StyleSheet = tempat css 
- komponen lain di pelajari sambil jalan 

membuat komponen 
	- kita buka App.js = halaman ini juga sudah disebut "sebuah komponen" -> di dalamnya ada beberapa komponen 
	- hapus semua tag komponen sisakan yang lain -> bikin <Text></Text>     // isi di dalamnya dengan HELLO WORLD
	- ini adalah contoh awal

membuat functional componen 
	- hapus all ->
	- syntax  	
		 			const App = () => {}
	atau 	:
		 			function(){}
	return 	:
					const App = () => {
						return <Text>HELLO WORLD</Text>			// belum jalan
					}
	import 	: 		
					import React from 'react';					// import dulu ini (inti) letak di halaman atas
					import{ Text } from 'react-native';			// lalu import komponen Text juga

	bikin lagi function kedua di bawah App	:
					const Aqil = () => {						// bikin lagi di bawah App
						return <Text> AQIL ATOILLAH </Text>		// 
					}
	cara manggil function :
	import di index.js :										// import dulu function App di index.js cara nulisnya :
					import App from './App'						// di index.js 
	panggil :
					const App = () => {							// 
						return (
							<view> 
								<Text>HELLO WORLD</Text>
								<Aqil/>								// panggil komponen aqil di App.js dlm func App (tanpa penutup tag)
								<Text>HELLO ANDROID</Text>			// syarat pemanggilan dlm return function harus hanya ada satu
							</view>									   parent maka di butuhkan pembungkus berupa komponen <view>
						);								   
					}											
											   
	import komponen <view> nya App.js agar dapat di tampilkan : // 
					import{ Text, view } from 'react-native';   // panggil bersama Text

	export ke index.js :
					export default App;							// export hanya App saja ke sana (index.js)
memberi style pada komponen 
					<view style=({ width: 60, height: 80, backgroundColor: 'red' })></view>				//	
bikin <image> : // bisa dibuat langsung di dalam App namun lebih menarik kita buat dengan function di bwah jangan lupa import  
					import{ Text, view, image } from 'react-native';
					
					const Gambar = () => {							// bikin fungsi untuk di panggil nantinya di fun App
						return (
							<image 
								source=({ uri: "/disini.jpg"})			// source nya ambil dari placeimage.com boleh
								style =({ width: 100, height: 60})		// style wajib image 
							/>
						);
					}
bikin text input // langsung saja di App nya bisa
					<TextInput
						style= ({ border: 1 })
					/>

KONKLUSI
	- aturan bikin file CamelCase. di awal juga besar
	- di Index.js hanya import satu App()
	- di App.js hanya export satu App().
	- componen harus di panggil dalam app() ...
	- jangan lupa componen bawaan harus import dulu dari react
	- terusin ...  
- atau export import
	- halaman adalah komponen yang bisa di import 
	- komponen bawaan harus di import dari 'react-native' 
	- komponen bikinan harus di 'panggil' untuk menjalankanya dlm sesama halaman
	- komponen dari sebuah halaman harus di 'export' untuk dapat di import dan di 'panggil' oleh halaman lain
	- export ada 2 "export default" dan "export" cara panggil "tanpa {}" dan "pakai {}"

- struktur dasar export import
	- masing2 halaman import react from 'react'
	- App.js -> biasa import {view, text, textInput, image, ScrolView, StyleSheet} from 'react-native' 
	  kecuali yang tidak digunakan (tanda garis kuning) hapus aja
	- App.js mengambil (import) func componen.js dan style.js dari halaman lain
	- komponen.js dan style.js -> meng "export default" kumpulankomponen() dan kumpulanstyle() 'tanpa kurung'
	- komponen.js dan style.js -> meng "import 'react' dan 'komponen' bawaan"
	- hasil akhir App.js hanya butuh 18 baris dan jangan lupa export default App() 'tanpa kurung'
	- terakhir di index hanya manggil App.js saja dan tidak akan di utak-atik jooos

MERAPIKAN KODE
	- Biasanya latihan kita letakan di folder terluar project android ini karena memudahkan url sehingga kurang rapi
	- oleh karena itu buatkan folder khusus untuk menempatkan semua kode kita di tempat tersendiri
	- buat folder bernama "src" dan biarkan konfigurasi default android apa adanya
	- dalam src buat kan folder "asset/berisi/image dan icon" 
	- lalu buatkan folder pages dan di dalamnya :
	- dan buatkan masing2 file kita folder bernama "file kita tadi"
	- lalu cut file kita kedalam folder tsb dan beri nama index.js sebab default android mecari index dalam folder
	- lalu di App.js import nya di sesuaikan url importnya. -> from ./pages/folderfilekita
	- untuk keluar folder satu langkah ../ dua langkah ../../

	- folder lainya kita bisa buat folder "config" untuk ngumpulin warna dll
	- juga "component" 

TEMPLAT BENTUK DASAR DALAM BUAT HALAMAN COMPONENT

- buat satu file index.js dalam sebuah folder nama komponen bersangkutan
- di dalamnya ada
	---
	import React from 'react';
	import{ View, Text, Image, scrollView, textInput, StyleSheet } from 'react-native';	 // tergantung keperluan

		<COMPONENTANU>

	export default COMPONENTANU;
	---
	ditempat lain yang memanggil
	import COMPONENTANU from '../index.js'
	---
		src
			assets 
				images		-> gambar2 
				icons		-> icon2 
			config			-> warna theme ukuran dll
			components		-> komponen2 
			pages			-> halaman kerja 
				home 		-> index.js 
				halamanAnu  -> index.js

==================== cara dari video lainya atomik
	src
		components -> berisi functional component 	(karena tidak punya state stateless)
			atoms
			molecules
		containers -> berisi class components (karena menggunakan state)		
			organizms	-> thumbnail barang
			templates	-> jumbotron di semua halaman
			pages		-> homepages 
		assets
			styles -> thema, font, warna, margin, padding, garisbawah, radius, border, resizeMode image contain
			fonts
			icons
			images
			dummy
			logo
		config 
			rooting -> rooting
			redux
			service -> calling API
		utils
			convert date
			convert timestamp date
			convert int ke date
			convert rupiah dll