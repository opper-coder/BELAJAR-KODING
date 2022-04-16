/*
- pada dasarnya komponen reactjs berkonsep single app sehingga menjadi berlaku 
  sistem pembungkusan tunggal dan export import

- jadi komponen atom itu satu kemudian di konsumsi oleh partikel - lalu di konsumsi oleh 
  organisme - lalu di konsumsi oleh page atau halaman - lalu di konsumsi oleh file type
  ada html, js, ada css, semua bisa saling export import,  

- file js bisa di simpan juga dengan jsx itu sama saja berfungsi juga seperti biasa 
  malahan kalau bisa di simpan dalam bentuk jsx sebab lebih spesifik peruntukanya
- struktur folder bisa dilihat pada pembahasan sebelumnya yaitu pada reactnative 
- yang jelas satu komponen atom simpan dalam 1 file yang di export
- komponen stateless di kumpulkan dalam 1 file yang berbeda dengan komponen statefull 

- syarat membuat halaman yang berisi jsx dan komponen maka butuh menginstall react
*/

import React, { Component } from 'react';           // import komponen yg diperlukan

komponenku                                          // lakukan pemanggilan

export default komponenku;                          // lalu juga export untuk siap di gunakan oleh halaman lainya


/*di halaman lain komponenku dapat di import dengan url nya*/

import komponenku from './komponen.js';
import komponenku from './komponen.jsx';      // atau .jsx sama saja dg .js

/*cara menuliskan url ada titik depan slash */

// ------------------- TIPS

/*
- untuk membuat folder komponen di src sebaiknya buatkan 2 folder untuk stateless dan statefull
- untuk masing2 komponen buatkan satu file yang nama nya sama dengan fungsi di dalamnya
- bikin banyak tidak apa2 karena sizenya kecil (170 byte)
- setiap file di komponen langsung bikinkan css nya
- file komponen, file cssnya, bungkus dengan satu folder yang ke tiga2 nya memiliki nama yang sama
*/

/*
STRUKTUR FOLDER MERN

di dalam project kita biasanya focus pada folder src sebagai pembungkus semua aktifitas kita
 
 src
 	register
 	asset
 		image
 		icon
 		font
 	component
 		statefull
 		stateless
 	pages
 	utils
 		routing
 		theme
	 		round
	 		shadow
	 		color
	 		font
	 		margin
	 		padding
*/