sumber: youtube M fikri > tutorial lengkap ReactJS untuk pemula(react hooks);  

REACTJS
---------------------------------------------------------------------------------------------------
apa itu Rect   			-> pengertian dan Plus minus
pola atomic 			-> mengenal pola yang rapi
instal nodejs 			-> node dan npm di linux relatif susah
create reactJs 			-> inisialisi
Struktur Folder 		-> mengenal menyusun folder yang rapi
cleanUp  			-> membersihkan file tidak terpakai
Componen 			-> membuat fungsi dari functional componen
Dinamic Value 			-> penggunaan variabel dalam JSX
Prop 				-> oper data antar komponen 
Event 				-> event handler seperti onclick
useState Hook 			-> gunakan nilai variabel dinamis beserta DOM nya sekalian (mode data pengganti variabel biasa, karena variabel biasa tidak bisa runing saat berubah)
useEffect Hook 			-> lifecycle, onMount, onUpdate, onDestroy
Looping List 			-> menggunakan map();
ReactRouter 			-> metode pindah halaman ala reactjs tanpa reload pastinya
BulmaCSS 			-> cara integrasi CSS atau Framework
JSON Server 			-> bikin API fake demo RESTAPI
Fetch Data 			-> ambil data dari REST via HTTP
Post Data 			-> kirim
Update Data			-> Edit
Delete Data 			-> Delete
Build to Production 		-> file production
tips emmet  			-> tambahan
---------------------------------------------------------------------------------------------------

APA KELEBIHAN DANG KEKURANGAN
-----------------------------
	- Adalah Library JS untuk UI, 
	- single page App
	- perbandingan dengan VUE, Angular
	- cepat dan ringan
	- pindah halaman tidak reload
	- JSX mirip html di PHP yaitu HTML dan java script bisa satu halaman di JS, yg nantinya akan di compile 
	  ke html native (JSX di kembangkan Oleh tim React)
	- DOM nya pakai virtual DOM, yang memungkinkan tanpa reload
	- bisa menggunakan HOOK pada v 16.8 ke atas, memungkinkan penggunaan useState, useEffect dll
	- HOOK hanya bisa di panggil di level tertinggi, tidak bisa pada dalam braket looping, kondisional, function nested lainya
	- HOOK hanya bisa di functional component tidak di class component
	- HOOK hanya di tulis pada pertama kali di dalam function bracket, useState, useEffect, dll
		menyelesaikan banyak masalah diantaranya:
		- statefull sulit untuk di gunakan kembali di antara komponen
		- komponen yg komplek semakin sulit untuk di pahami dan di baca
		- class membuat orang dan mesin bingung

pola atomic
-----------------------------
- karena pada react ini semua elemen html dibangun dengan js maka
- react bisa mengimport komponen di komponen lain sehingga munculah konsep element atomic
- komponen atom, dimport komponen partikle, ke organik, sampai ke page, karena satu page juga sebuah komponen
- maka munculah routing, jadi perpindahan halaman tidak ada reload halaman
- ini lah ide yang mendasari singlepage application yaitu semua hanya terjadi di satu halaman HTML dengan satu div id="root"

install node dan npm di linux
-----------------------------
:> sudo apt-get update  		// 1. update linux dulu
:> sudo apt-get install nodejs  	// 2. langsung install node via terminal tapi biasanya tanpa NPM
:> sudo apt-get install npm 		// 3. maka install juga npm
:> node -v 				// 4. cek versi terinstall
:> npm -v 				// 5. cek npm juga
:> sudo npm install -g n  		// 6. install version manager praktis (sumber: https://nodejs.org/en/download/package-manager#debian-and-ubuntu-based-linux-distributions)
:> sudo n lts  				// 7. update node with npm LTS terbaru
:> node -v 				// 8. coba cek maka versi sudah terbaru (LTS)
:> npm -v 				// 9. otomatis NPM juga ikut di update
:> sudo npm install -g npm@9.6.2  	// 10. kalau perlu update npmnya saja ke version tertentu

CARA MEMBUAT FOLDER REACTAPP
-----------------------------
	- masuk ke folder root misalnya document
	- :> npx create-react-app boxits// buatkan folder app boxits, agak lama
	- :> cd boxits 			// masuk ke app
	- :> npm start 			// start, akan tampil default, dan localhost:3000
syarat:
	- koneksi internet untuk installasi reactJs
	- instal dulu nodeJS v10.16 keatas dan npm v 5.6 keatas. cek :> node -v   dan :> npm -v
	- npx bisa di gunakan pada npm v5.6 keatas
	- terminal > masuk ke folder app (boxits) > ketik "code ." untuk masuk ke vscode editor

STRUKTUR FOLDER
-----------------------------
struktur folder bisa di lihat juga pada prawiro hudoro ada di document
Boxits
	> node_modules  		// berisi semua module yang membanguan reactJS, yng nanti akan di import sesuai kebutuhan
	> public package					
		index.html 		// ada banyak file yang terpenting ada index.html dan ada div id="root" inilah gerbang render single page app
		favicon 
		{}manifest readme	// di include ke index
	> src 
		app.css 		// 
		App.js 			// root komponen (paling penting)(disini import: logo, app.css)
					// di dalamnya ada function app(){ return(jsx sintax); }
		index.css 		// 
		index.js		// entri point dari app semua halaman penting di import disini: react, reactDOM, index.css, app.js, dll lalu di oper ke "root"
	<> gitIgnore
	{} package.lock.json
	{} package json
	readme.md

PRAKTEK DAN CLEANUP
-----------------------------
sebelum di praktekan hapus file default agar bersih dan kosong siap untuk di isi dengan aplikasi kita sendiri

	Boxits 							// biarkan folder dan file lainya kecuali:			
		> src 						// pada sourch sisakan dua file ini saja			
			App.js 					// pada sisakan seperti ini saja function app(){ return(<div> <p> haloo coba </p> </div>); } (oya hapus semua import juga di atas app())
			index.js 				// buka halaman ini hapus juga import2 pada halaman yang tadi di hapus sisakan yang penting

	function App(){
		return(
			<div>
				<p>haloo coba</p>
			</div>
		);
	}	

pastikan server sudah running > buka terminal npm start > lihat di browser > hasilnya "haloo coba" > siip sukses

KOMPONEN
-----------------------------
pada folder src buat struktur komponen anda sendiri
susun supaya rapi untuk keperluan organisme: atom, partikel, orghanik, routing, css, variabel alert, error, modal, dll
sebenarnya ada dua jenis komponen yaitu class dan functional. class adalah alternatif dan butuh import, render, stateless dll 
maka fokus saja pada functional

- buat komponen Dasar:
	- nama File.js harus di awali huruf kapital dan nama funtion component harus di samakan dengan dengan nama filenya. JSX tidak case sensitiv (coba huruf kecil tidak jalan)
	- di vscode > ketik rafc (reactArrowFuncComp); maka kita di buatkan template yang namanya di samakan dengan nama filenya
	- return(<div> disini </div>); 				/// harusnya semua dalam div atau hanya bisa return satu saja selebihnya bungkus dalam div 

	const Coba = () => { 					// cara buatnya baik dalam page app atau dalam file yang berbeda sama saja, ini pakai arrow function
		return(
			<div>
				<p>Halo aqil</p>
			</div>
		);
	}
	export default Coba					// jika akan di gunakan pada halaman lain export dulu

- panggil biasa, panggil import, lakukan export
	import Coba from "./component/Coba"  			// tidak perlu extension .js Coba akan di akses secara default
	< Coba />  						// panggil tinggal pakai self close seperti ini 
								// (tentu panggilnya dalam komponen lainya, misalnya dalam app(){ return 	< Coba /> }) return pakai (); boleh tidak juga boleh

	const app = () => {
		return(
			<div>
				<Coba/>
				<p>ini adalah appku</p>
			</div>
		)
	}

- panggil komponen dalam komponen 

????????????????????????????????????? isi nanti ya

DINAMIC VALUE {}
-----------------------------
- dinamic variabel {} bisa di gunakan untuk panggil: variabel, isi atrribut JSX, panggil function dll
- JSX bisa akses variabel dengan { namaVariabel };

	function app(){
		const salam = "selamat datang di channel kami" ; 	// variabel
		return(
			<div>
				<p>{ salam }</p> 			/// panggil variabel dalam jsx
			</div>
		);
	}

variabel juga bisa kalkulasi dalam JSX 
	{ 20 * 2 }
atribut pada JSX juga bisa pakai variabel (link adalah variabel js silahkan buatkan sendiri )
	<a href={ link }></a> 						/// href = tanpa ""

PROP
-----------------------------
- kirim parameter untuk komponen biasa
		const Salam = () => { <p> halo ini aku! </p> } 					// fungsi dasar
		<Salam /> 			 						// panggil biasa
		const Salam = (props) => { <p> halo ini aku! namaku { props.nama } </p> } 	// fungsi dengan argumen props.key pengirim saat banyak kirim ya sesuaikan key
		<Salam nama="aqil" /> 								// panggil dengan kirim parameter props, bisa kirim banyak tinggal tambah k=v

- default props > jika mau boleh pakai default prop mirip alt pada <img> tips di tulis di bwah komponen bersangkutan
		const Salam = (props) => { <p> halo ini namaku: {props.nama} </p> } 		///
		Salam.DefaultProps = {
			nama: "aqil",
			umur: 11
		}
		<Salam /> 									// panggil function dengan prop default (tanpa oper data)
- adalah salah satu cara oper data dari parent ke child komponen
- dan oper data dari child ke parent menggunakan event(mis: onclick)

CLICK EVENT (onclick)
-----------------------------
- onclick pada JSX memilik behavior yang sama dg attribut HTML hanya saja untuk akses function nya tinggal pakai dinamic value {} tanpa()

	const app = () => {
		const clickMe = () => { console.log( "Halooo " ); } 				// ini fungsinya 
		return(
			<div>
				<Coba/>
				<p>ini adalah appku</p>
				<button onclick={ clickMe }> Klik Saja </button>  		// ini panggil namanya dalam {} tanpa () 
			</div>   								///
		)
	}
- onclick dengan oper value
	- saat kita dengan mengirim data {clickMe(aqil)} maka onclick tidak berjalan alias tidak nunggu di klik langsung running 
	- agar nunggu di klik maka masukkan ke dalam anonimous function { () => { clickMe("aqil") } }
	- cara nagkapnya ya biasa saja //
			const clickMe = (name) => { console.log( "Halooo " + name ); } 		// tangkap dengan argument biasa aja

HOOKS useState
-----------------------------
- seperti contoh di atas kita bisa mengganti value JSX dengan variabel menggunakan dinamic value {} 
- misalnya dalam: <p> haloo aqil umurku 12  </p>  
  di ganti dengan: <p> halo{ nama } umurku { umur } </p> ngambil dari var nama, dan var umur
- saat kita mau replace variabel nama dan umur itu ( menggunakan sebuah function trigger ) react tidak langsung mengubah nilainya di render
  (meskipun di console sudah berubah, itu disebabkan belum ada penanganan pada reactDOM nya), jadi tidak asal mereplace variabel
- untuk mereplacenya kita gunakan metode useState Hook yaitu metode ubah nilai variabel dan ubah reactDOM nya
- hooks ada di reactJS v16.8
- dulu komponen ada 2 functional dan class,
- functional = mudah di baca, class = punya state bawaan sehingga mudah di gunakan
- hook hadir = mudah dan flexibel = ini lebih terkait pengelolaan state dalam functional

contoh1
	import {useState} from "react"; 							// 1. import dulu useState
	function app(){
		const [nama, setNama] = useState("aqil");	 				// 2. variabel yang mau di ubah2(dinamis) masukkan kedalam array useState[nama var, fungsi perubah] = useState (nilai default)
		const [umur, setUmur] = useState(11);	
		const ubahData = () => {  							// 6. masukan ke dalam trigger
			setNama("silmi"); 							// 5. ini fungsi pengubah yaitu tinggal panggil saja (fungsi sudah di buatkan di react library)
			setUmur(2);
		} 
		return(
			<div>
				<p> haloo nama saya { nama } umurku { umur } tahun </p> 	/// 3. panggil variabel dari useState dengan nilai default 
 				<button onclick="ubahData"> ubah! </button> 			/// 4. saat onclick panggil fungsi pengubah yang di bungkus oleh trigger
			</div>
		);
	} 											///

contoh2 
	import {useState} from "react";  							// 1. import
	const app = () => {
		const [counter, setCounter] = useState(0); 					// 2. bikin useState
		return (
			 <div>
			     <h1>Functional Component</h1>
			     <h2>Counter: {counter}</h2> 					// 3. ambil state 		5. state berubah
			     <button onclick={() => setCounter(counter + 1)}> Click Add </button>  /// 	4. ubah state dengan trigger onclick
			 </div>
		);
	}

///

HOOKS useEffect
----------------------------- ///
- karena sebelumnya life cycle ada pada class component: componentDidMount,componentDidUpdate,componentDidUnmount
- artinya komponen di muat saat komponen di muat(hanya sekali), di update(berkali2 selama ada update), hapus effec
- useEffect adalah lifecycle pada functional: saat komponen di muat, saat di update, saat di close. pengganti lifecycle di class componen lah
- ringkas kata. komponenen akan menmjalankan function useState(berisi aktifitas apasaja), yang di runing sekali saat mount, atau tiap saat update state tertentu
- contoh1 
	const app = () => {
		const [counter, setCounter] = useState(0);

		// useEffect() 											// 0. basic, nanti ada 4 bentuk 
		// useEffect( () => {} ); 									// 1. bentuk1, akan di jalankan saat update komponen di backgroundDOM (seperti tanpa useEffect) 
		// useEffect( () => {}, [] ); 									// 2. bentuk2, ada array kosong, akan di running sekali saja saat onMount 
		// useEffect( () => { console.log("jumlah klik :" counter) }, [counter] ); 			// 3. bentuk3, ada array berisi state, akan di running saat onMount, dan saat update state tersebut, (state boleh banyak)
		// useEffect( () => { umur += 1; return (0)=>{console.log('efek selesai')}; }, [counter] ); 	// 4. bentuk4, jika mau close/cleanUp useEffect kita tinggal kasih return state nilai awal pada anonimouse functionya

		return (
			 <div>
			     <h1>Functional Component</h1>
			     <h2>Counter: {counter}</h2>
			     <button onclick={() => setCounter(counter + 1)}> Click Add </button>
			 </div>
		);
	}

- contoh2
	const app = () => {
		const [counter, setCounter] = useState(0); 							// useState boleh ganda
		const [nama, setNama] = useState("aqil");

		useEffect( () => { console.log("jumlah klik :" counter) }, [counter] ); 			// useEffect jg boleh ganda
		useEffect( () => { console.log("halo namaku :" nama) }, [nama] );

		return (
			 <div>
			     <h1>Functional Component milik {nama} </h1>
			     <h2>Counter: {counter}</h2>
			     <button onclick={() => setCounter(counter + 1)}> Click Add </button>  		///
			     <button onclick={() => setNama("silmi")}> Ubah Nama </button>
			 </div>
		);
	}


LOOPING DATA 
-----------------------------
- biasanya kita dapatkan data dari database berupa object, map, array atau apapun,
- disini kita akan loping data tersebut kedalam JSX berupa list

	import {useState} from "react"; 									
	function app(){
		const [products, setProduct] = useState([  							\// simpan object data dalam useState misalnya ini (misalnya di ambil dari DB)
			{id: 1, title: "product 1", price: 1000 },
			{id: 2, title: "product 2", price: 2000 },
			{id: 3, title: "product 3", price: 3000 },
			{id: 4, title: "product 4", price: 4000 },
			{id: 5, title: "product 5", price: 5000 }
		]);	 					
 
		return(
			<div>
				<ul>
					{ products.map( (product) => (  					// untuk object products nya kita looping ke dalam <li> dengan map dengan oper argumen
						<li key={ product.id } > { product.title } - { product.price } </li>  		// atribut key di gunakan untuk index pengurutan. output item data kita ambil dari argumen.key
					) ) } 									// oya pada anonimouse function ini tidak menggunakan bracket melainkan () kurung bulat,
				</ul> 										// hal ini di maksudkan karena functyion ini akan mereturn JSX tanpa keyword return juga
			</div>
		);
	} 				///


REACT ROUTER
-----------------------------
router memungkinkan kita membuat single apliksi kita seperti multiple app
namun perbedaanya react merender di client dengan spesifik URL 
- pertama kita install di npm :> npm install react-router-dom > lihat di package JSON > pastikan ada routernya terdaftar
- import { BrowserRouter as Router, router, switch } from 'react-router-dom';
	const app = () => {
		return(
			<div> 		 									// di dalam return > div > bungkus semua router seperti ini:  
				<router>
					<switch>
						<route exact path="/">    					// pada route tambah exact juga attribut path sebagai url. jika exact di hapus kita akses dari url akan di tendang
							<Home/> 						// ini yang di render(url hanya penamaan terserah kita. bukan nama komponen ya)
						</route>
						<route path="/about">      					//" dalam contoh exact hanya dai tulis sekali paling atas bisa jalan(periksa)
							<AboutWeb/>
						</route>
						<route path="/account">    					//"
							<Akun/>
						</route>
					</switch>
				<router/>
			</div>
		);
	}
- saat kita akse localhost:8080/about 

BULMA dan CSS umumnya
-----------------------------
:> npm install bulma > pergi ke index.js > import {bulma} from 'bulma/css/bulma.css'
- di <button className="button is-primary"

API server
-----------------------------
- sama dengan API ASLI kita disini akan membuat API FAKE yang akan kita buatkan server localhost lainya
- biasanya kita harus install JSON SERVER tapi di sini hanya menggunakan :> npx
- sebelumnya buatlah file db.json di root saja > berisi data json { "product" : [{,,},{,,},{,,}]} > jangan lupa petik pada key json
>: npx json-server- --watch db.json --port 8080 
enter > kita akan mendapatkan resource http://localhost:8080/product > coba akses resource di browser > maka kita sudah bisa CRUD ke json
- json-server ada di documentasi nextjs

FETCH API dengan HOOKS
-----------------------------
import {useState, useEffect} from 'react';

const productList = () => {
	const [products, setProducts] = useState([]);
	useEffect(() = {
		fetchData();
	},[]);
	const fetchData = async() => {
		const response = await Fetch('http/localhost:8080/product');
		const data = await response.json();
		setProducts(data);
	}
	return(
		<div>
		 	<thead>
				<tr>
					<th>No</th>
					<th>Title</th>
					<th>Price</th>
					<th>Action</th>
				</tr>
			</thead>
			{products.map((product)=>{copas <tr> <td> disini (mudah dilihat) });}
				<tr key={product.id}>
					<td>{index}</td>
		 			<td>{product.title}</td>
		 			<td>{product.price}</td>
		 			<td>{<button>ubah!</button><button>hapus!</button>}</td>
				</tr>
		</div>
	);
}

POST API
-----------------------------
- buat halaman berisi komponen add data lalu export DefaultProps

import { useState } from 'react'								// 3. import
import { useHistory } from 'react-router-dom'							// 20. maka gunakan useHistory
												//
const AddProduct = () => {									// 1. bikin kompononen di sebuah file dan atur routernya dari home ke halaman ini. import di app.js
	const [title, setTitle] = useState(''); 						// 4. buat state untuk menangkap nilai input 
	const [price, setPrice] = useState('');							//
	const history = useHistory();								// 21. inisialisasi histori

	const saveProduct = async (e) => {							// 9. fun Posting, (ambil event) // 13. sekarang persiapan fetching kasih async, karena fetch adalh asynchronus
		e.preventDefault								// 10. saat submit cegah page reload 
		const product = { title, price } 						// 11. object{ state dari input } 
		console.log(product); 								// 12. cek produk coba jalankan (jika sudah disable) utk memastikan data yg kita kirim valid. data siap di kirim
		await fetch('http://localhost:3000/Product',{ 					// 14. disini await > tentu fetch(url, metode fetching) 
			method: "POST",								// 15. method pakai POST untuk kirim data
			body: JSON.stringify(product),						// 16. data product tidak boleh di kiirim begitu saja karena ini object, konversi dulu ke json
			headers: {								// 17. header dikirim sebagai syarat RESTAPI
				'content-type' : 'application.json'				// 18. parameter wajib di header untuk kirim json
			}
		}); 										// 19. sampai disini data sudah bisa di submit. tapi kita mau saat sudah di submit kita redirect ke halaman home
		history.push('/') 								// 22. gunakan history untuk header ke halaman home
	}

	return(
		<div>
			<form onSubmit={saveProduct} >     										// 8. menggunakan event on submit( running function POSTING saveProduct )
				<input type="text" value={title} onchange={(e) => { setTitle(e.target.value) }} placeholder="tittle"> // 2. berisi inputtext // 5. value=state > maka inputtext berisi value > tapi tdk bs di ubah
				<input type="text" value={price} onchange={(e) => { setPrice(e.target.value) }} placeholder="price"> 	// 6. agar bisa di ubah > onchange={ubah state}
		 		<button onSubmit={saveProduct} > Posting Data </button>	 						// 
			</form> 																																																//
				<p>{title} - {price}</p> 										// 7. lihat hasilnya. saat di ubah lewat inputtext maka state berubah, 
		</div> 															// selanjutnya data state yang kita dapatkan kita POST ke json server menggunakan form
	);
}



EDIT API
-----------------------------
- buat halaman berisi komponen add data lalu export DefaultProps > copas component post API

import { useState, useEffect } from 'react'							// 6. saya ingin fetch ini di muat sekali saat di render kita pakai useEffect 
import { useHistory, useParams } from 'react-router-dom'					// 3. untuk nangkap id kita harus import dulu useParams
																													 
const EditProduct = () => {									// 1. ganti nama file dan functionya, import di productList.js, import, dan atur routernya di app.js dan tambah id pada url router /edit/:id  
	const [title, setTitle] = useState(''); 								  
	const [price, setPrice] = useState('');									
	const history = useHistory();														

	useEffect( () => { 
		getProductById(); 								// 7. akses func dalam useEffect, hanya sekali saat komponen telah di render
	}, []);

	const getProductById = async () => { 							// 4. buatkan fungsi pilih data url
			const response = await fetch(`http://localhost:3000/Product/${id}`); 5. fetch data enpoint
			const data = await response.json();
			setTitle(data.title); 
			setTitle(data.price);  
	}

	const updateProduct = async (e) => {							// 11. ganti dengan const saveProduct ke editProduct
		e.preventDefault																			 
		const product = { title, price } 											  
		console.log(product); 																  
		await fetch(`http://localhost:3000/Product/${id}`,{ 				// 13. tambah id dari params
			method: "PUT", 								// 14. ganti dengan POST dengan PUT
			body: JSON.stringify(product),											  
			headers: {																					  
				'content-type' : 'application.json'								 
			}
		}); 																									  
		history.push('/') 																		
	}

	return(
		<div>
			<form onSubmit={saveProduct} >     					// 12. ganti dengan updateProduct  
				<input type="text" value={title} onchange={(e) => { setTitle(e.target.value) }} placeholder="tittle">   
				<input type="text" value={price} onchange={(e) => { setPrice(e.target.value) }} placeholder="price"> 	  
		 		<button onSubmit={saveProduct} > Posting Data </button>		// 2. ganti label tombol jadi edit
			</form> 																																																
				<p>{title} - {price}</p> 																																							  
		</div> 																																																		 
	);
}

// 8. pada halaman productList.js yang berisi button ganti dengan link
// 9. jangan lupa import dulu import {link} from 'react-router-dom';
// 10. <link to={`/edit/${product.id}`} > > sekarang saat di klik sudah diarahkan ke link product.id 


DELETE API
-----------------------------
pada halaman App nya kita kasih event 
<button > hapus! </button>
///

import {useState, useEffect} from 'react';
import { link } from "react-router-dom"; 							// 2. ini import link nya, agar tidak reload page

const productList = () => {
	const [products, setProducts] = useState([]);
	useEffect(() = {
		fetchData();
	},[]);
	const fetchData = async() => {
		const response = await Fetch('http/localhost:8080/product');
		const data = await response.json();
		setProducts(data);
	}
	const deleteProduct = async () => {							// 4. bikin method delete		// 5. copas perangkat fetching dari updateProduct > hapus preventDefault dan state product				 															  
		await fetch(`http://localhost:3000/Product/${id}`,{ 	
			method: "PUT", 								// 6. method "PUT" ganti dengan "DELETE"
			body: JSON.stringify(product),											  
			headers: {																					  
			'content-type' : 'application.json'								 
			}
		}); 
	fetchData(); 										// saat delete berhasil maka, panggil lagi fetchData(); agar menampilkan data terakhir
	}

	return(
		<div>
		 	<thead>
				<tr>
					<th>No</th>
					<th>Title</th>
					<th>Price</th>
					<th>Action</th>
				</tr>
			</thead>
			{products.map((product)=>{copas <tr> <td> disini (mudah dilihat) });}
				<tr key={product.id}>
					<td>{index}</td>
		 			<td>{product.title}</td>
		 			<td>{product.price}</td>
		 			<td>{ 
		 				<link to={`/edit/${product.id}`} >ubah!</button onclick={()=>{deleteProduct(product.id)}} >	// 1. oya disini hasil perubahan dari <link> tadinya button dari halaman edit
		 				<button onclick={() = deleteProduct(product.id)}>hapus!</button>}     				// 3. pada tombol hapus tdk di ganti link > tambah event  > method deleteProduct() dg parameter
		 			</td>
				</tr>
		</div>
	);
}     //`

DEPLOY BUILD
-----------------------------
- untuk mendeploy ke hosting tidak mungkin kita deploy bersama node_modules dan paket lainya, karena sizenya terlalu besar +- 300 MB >
- melainkan di extrac kode kita saja, menjadi paket build, nah paket inilah yang akan di upload ke server, untuk melakukanya:
- hentikan dulu server develop > :> ctrl C atau exit > lalu lakukan build  dengan
- >: npm run build > nanti di root akan ada tambahan folder build > inilah folder yg akan di upload > untuk menguji apakah build bisa running
- :> install -g serve   // install dulu serve
- :> serve -s build 		// runing build biasanya localhost:5000 > kunjungi testing   


TIPS EMMET
----------------------------

- cara bikin child
		section>row
- bikin perkalian
		section>row*3
- bikin gruping
		(section>row*3)*2
- bikin table ada: child, kali gruping, sibling
		table>(thead>tr>th*4)+(tbody>tr>td*4)
- bikin form 
		form:post.box>input:text.input*3+button

extension
- bulma snippet > ada banyak trigger misal hero, nav bar, dll menginspirasi
- prettier -> merapikan cepat bisa di matikan
- ES7/react/Redux/GraphQL/RN snippets
