NEXTJS 13 mei 2023 CODER MEDIA
------------------------------------------------------

installation 							-> node, npm, next, package, run localhost, vscode, terminal
cleanUp 									-> bersih bersih untuk project kita
LAYOUT, METADATA, PAGES 	-> mengenal, 
Routing 									-> konsep dan cara akses URL component
useRouter 								->  
JSON server  							-> bikin fake API, demonstrasi API
CSS, Bulma, Bootstrap     -> integrasi style
tailwind & daisyUI       	-> ini yang kita pakai
CRUD API       						-> best practice CRUD API di mulai dari sini
SERVER N CLIENT COMPONENTS  -> mengenal 
SERVER COMPONENT       		-> fetch API dari server 
CLIENT COMPONENT       		-> fetch API dari client
DeleteProduct       			-> method DELETE
UpdateProduct       			-> method PATCH

sumber: Fahrezi Adha 

Link & Navigation 				-> tambahan dari fahrezi tentang routing 
Loading Skeleton 					-> asynchronous display
.Error handling 					-> menangani error estimate or unestimete
fetching data	 						-> disini ada patern fetch sebenarnya: parallel, seri, periodic kayaknya


INSTALLATION 	
------------------------------------------------------
- buat folder project kita dimana saja
- buka :> code . di terminal pada folder (vscode)
- pastikan sudah punya nodejs > v16.8 dan npm dengan mengikuti instalasi di react di linux cekidoc 
- buka terminal di vscode :> npx create-next-app --experimental-app boxits (karena masih experimantal) 
  cek saja suatu saat berubah syntaxnya
- typeScript yes, eslint yes, src/ dir no, lalu @ > enter 
- pergi ke package.json periksa, dependencies version > terminal :> "code ."  enter > buka terminal di vscode (yg terminal OS, close sj) 
- :> npm run dev > kita dapatkan runing di localhost:3000 > jalan kan di browser 
- akan tampil wellcome > halaman default

CLEAN UP
------------------------------------------------------
- buka vscode > structur folder lihat di react agak mirip
- pada folder src/app. kita di kasih page.tsx (ini halaman index home kita) > hapus semua isinya > buatkan komponen sendiri:

	export default function Home() { return ( <div> Halo Homepage Pertama </div> ) }  		//

- tampil default bergaris > buka global.css > hapus semua isi css nya > maka halaman bersih dan "hello world!"
- buka folder src/app > di src/app ada structur folder:


LAYOUT, METADATA, PAGES  	
------------------------------------------------------
- bikin folder pertama, kasih nama (mis: about) > masuk dan bikin file page.tsx (sebagai ganti index.js);
  	- berisi componen print: "halo about" (copas componen Home saja barusan lalu edit )  
- kita juga dikasih halaman layout.tsx 
	- layout.tsx adalah file wajib yang di kasih ke folder root src/app. gunanya untuk menuliskan komponen sekali dan akan nempel ke semua halaman child
	- saat kita tempatkan sebuah komponen misalnya navbar pada
      halaman layout.tsx ini maka akan di render sekali dan akan tampil di semua halaman childnya > meskipun nested  
    - metadata,(seperti isi head pada html) favicon, link CSS, title dll bisa di tempatkan disini > coba ganti title: Boxits
    - metadata sebenarnya bisa di simpan di halaman selain layout.tsx, tapi dg catatan harus di "server Components"(penjelasan dibawah)
    - dengan mengetikan export 'const metadata = { title:"coba" }' di halaman bersangkutan
    - layout bisa di buat dalam sub folder dan akan tampil khusus semua komponen dalam sub folder bersangkutan
    	- nama wajib layout.tsx > copas componen layout di root > rename componen jadi Layout() > atur template layout > tempatkan Posisi Children  
    	- contoh penggunaan umum yang tampil di seluruh halaman: navbar, header, footer, menu. 
    	- contoh penggunaan khusus hanya tampil pada sub folder: sidebar. floating menu dll
ROUTING 		
------------------------------------------------------
- routing dasar ----->
	- folder baru dan berisi page.tsx ini yang di buat di root/app ini sudah otomatis terkonstruksi jadi url 
	- coba akses URL localhost:3000/about > maka akan tampil halaman about tanpa script routing seperti di reactJS
- dinamic parameter -----> 
	(bisa di gunakan untuk routing kayaknya ini nanti)(mungkin nested URL)
	- masih di dalam folder app kita buat lagi folder bernama "post" berisi "page.tsx" dg componen: 
		export default function Post() { return ( <div> Halo post </div> ) } 				///
	- localhost:3000/post > ini masih biasa > sekarang kita buat dinamic parameter router:
	- masih di dalam folder post > buat folder baru, bernama [postID] (dg dibungkus dalam array), 
	- nama terserah, buatkan file page.tsx di dalamnya berisi fungsi penerima parameter

		export default function PostDetail({params}: { params: {postId: string}}) {   // argumenya isi dengan params 
		  return (
		    <div>
		      Post Detail { params.postId } 											// disini nangkap parameter nya 
		    </div>
		  )
		} 			///

	- cara aksesnya di URL: localhost:3000/post > maka masih muncul "halo post" (url biasa) > tapi jika kita akses dinamic nya dg cara berikut
	- localhost:3000/post/1 maka muncul "post detail 1" > localhost:3000/post/2 maka muncul "post detail 2" sesuai yng dikirim lewat URL
- catch all route ----->
	- bagaimana kalau kita mengakses URL nested seperti misalnya: localhost:3000/post/1/2/5 
	- kita tinggal rename (kasih ...) dengan destructuring array (...nama ) pada folder dinamic tadi: [...postId] 
	- cara nangkapnya tinggal pakai index

		export default function PostDetail({params}: { params : {postId: string}}) {   
		  return (
		    <div>
		      Post Detail { params.postId[0] } 		// kalau tidak pakai index maka akan ketangkap tampil semua arraynya (1,2,5) di halaman,  											
		    </div> 									/// coba lihat di teminal
		  )											/// tapi kalau pakai index nanti yang ketangkap cuma satu sesuai index, meskipun akses post/1/2/5 
		} 											/// 

JSON server 
------------------------------------------------------
(kita akan gunakan fake API)
- installasi json server
	- di vscode > terminal nextjs masih running 
	- add new terminal > pd terminal kedua ini tempat installasi json server dan tempat running json API kita 
		- :> instalasi > npm i -g json-server > enter > selesai > json server -v > version 0.17.2 > selesai
- buat file json
	- add new file name db.json > tempatkan di luar src/app (coba tempatkan saja di root nextjs kita); 
	- lalu buatkan json di dalamnya > gandakan 3 array saja dan ubah namanya
	{
		"product":[
			{
				"id": 1,
				"title": "produt 1"
				"price": 899 
			}
		]
	}

- jalankan db.json > terminal :> json-server db.json -p 5000 (promp, url, port); > enter > dapatkan localhost:5000 
- jalankan di browser: localhost:5000/product > maka data APi akan terlihat

CSS, Bulma, Bootstrap
------------------------------------------------------
:> npm install bulma > pergi ke index.js > import {bulma} from 'bulma/css/bulma.css'
	- di <button className="button" > restart server :> ctrl C :> npm run dev 
	- setelah font nya berubah maka bulma terinstall 
- global.css bisa kita gunekan untuk custom css semua halaman > bikin file globals.css di root app > lalu import di layout umum = import './globals.css'
	- penggunaan persis css yaitu akses class dg className="hijau"
- css.modules
	- bikin file bernama *.module.css > dimanapun bisa (root, sub folder, folder styles) > penggunaan import styles from './about.module.css' kalau folder sejajar
	- cara panggil > <h1 className={styles.merah}></h1> ///

- external css > CDN Bootstrap > copas link di layout.tsx
- inline CSS > contoh: <div style={{margin:"12px"}}>halo</div> /// pakai kutip di nilai saja
- css in js > ini kayaknya susah
- sass > ini juga bisa tapi kita skip dulu
- bulma, Bootstrap juga OK

tailwind & daisyUI
------------------------------------------------------
- install taillwind > situs resmi > doc > installation > framework > nextjs > installasi tailwind CSS > terminal di project kita > 
  - jika terminal dlm keadaan runing 
  	- hentikan dulu > ctrl C > jalan kan satu-satu 
	- npm install -D tailwindcss postcss autoprefixer		// installation
	- npx tailwindcss init -p 								// initialisation
	- kopas PATH > pergi ke file "tailwind.config.js" > paste di content:[disini]
	- copas @tailwind base; @tailwind components; @tailwind utilities; > di global.css > save
- langkah ini sama persis dengan yang ada di documentasi > lebih disankan melihat langsung aja 
- install DaisyUI > situs resmi > doc > installation > framework > nextjs > installasi tailwind CSS > terminal di project kita > 
	- :> npm i daisyui > enter > selesai
	- pergi ke "tailwind.config.js" > cari object "plugins:[]" > isi di dalamnya: [require('daisyui')] > save
  - jalankan kembali terminal > npm run dev > reload browser > sansserif > siap di gunakan 

CRUD API
------------------------------------------------------
- skenario kita:
	- bikin penampil data halaman berupa table, dan form input untuk add data di halaman ini jg berbentuk modal  
	- ada 3 component yang akan kita buat yaitu getProducts(fetch data), addProduct(tambah data), ProductList(tampilkan table)
	- yang type component nya berbeda yaitu "server component", dan "client component"

SERVER N CLIENT COMPONENTS 
------------------------------------------------------
untuk tau perbedaan server client component, lihat di dokumentasinya tapi setidaknya kita tahu beberapa perbedaan:
- fetch() dll hanya bisa dlakukan di server component
- onClick(), onChange(), useState(), useEffect() dll hanya di lakukan di client component
- server component: karena code kita pakai javascript untuk di tampilkan kan harus di konversi ke HTML dan dom (ini di sebut render)
	- pada server komponen render ini di lakukan di server dan dapat di gunakan berulang kali oleh jutaan user > efeknya sangat efisien dan cepat
	- soal parameter perbedaan akan di load saat request saja
- client component: rendernya di client, keuntunganya bisa menggunakan HOOK yg interctive 
- tips: gunakan server dulu, jika terpaksa gunakan client(misal: jika perlu menggunakan HOOK)

SERVER COMPONENT
------------------------------------------------------
- ----- bikin getProducts()
- add new folder products (di dalamnya akan banyak komponen nantinya)> add new file page.tsx > new component (rfc) 
- caranya: 

  async function getProducts(){ 								// 1. fetching data di client pakai async 
 // const resp = await fetch('http://localhost:5000/product');	// 2. fetch ini asynchronous promise (ada tambahan di step:3)
  	const resp = await fetch('http://localhost:5000/product', {
  		cache: 'no-store'}										// 3. tambah parameter ke2 cache. keterangan di bawah:
  	); 	
  	return resp.json(); 										// 4. convert ke json
  }
 
// -3. lanjut, fetch() defaultnya "static side generation", (semacam force-cache)
// 	yaitu saat terjadi perubahan pada APInya data di fetch tidak ikut berubah, meskipun di reload 
// 	karena itu kita butuh getServerSideProp seperti di next12  
// 	di nex13 tinggal kasih parameter kedua pada fetch(url, {cache: 'no-store'}); ini sama efeknya 
// 	dengan getServerSideProp di next12, jika itu di terapkan maka akan ada perubahan saat ada update
// 	hal ini terjadi karena cache tidak menyimpan di client melainkan data di ambil tiap request /// 

	const resp = await fetch('http://localhost:5000/product');	// - fetch bentuk biasa (fetch tidak di update meski ada update API kecuali request ulang)
  	const resp = await fetch('http://localhost:5000/product', { // - fetch bentuk getServerSideProp (di update saat ada update pada API)
  		cache: 'no-store', }										
  	) 
  	const resp = await fetch('http://localhost:5000/product', { // - fetch bentuk incremental static regeneration, di update interval kayaknya, seperti next12 cari sendiri fungsinya ...
  		next:  {revalidation: 10}, }							// - cache akan di hit tiap 10 detik (semi-realtime)
  	) 

- ----- bikin ProductList()
- di halaman yang sama dg getProducts > add component > rfc 	

  type Product = { 												// 3. buatkan disini typedata object array nya untuk variabel di tipescript step:2
  	id: number;
  	title:string;
  	price:number;
  }

  export default function ProductList(){ 						// 1. Bentuk dasar komponen ProductList(tampilkan data dalam table) 
  	const products: Product[] = await getProducts(); 			// 2. panggil getProduct() dg await karena async. masukan ke variabel: type data obj arr  
  	return(
  		<div>ProductList</div> 									// 4. di tahap ini coba running dulu. nanti isinya map(data table)
  	)
  } 															// 

- ----- bikin map(data table) disini:
	{ products.map((product, index) => ( 						// 5. looping hasil fetching nya
		<p key={product.id}>{product.title}</p> 				// 6. untuk key looping taruh di atribut (coba pelajari) > coba running dulu
	)}

																// 7. conversi ke table: > caranya buat table dulu > table>thead>tr>td*4 dst > masukan scriptnya variabel dan looping
	<table class="is-table">  									// 8. untuk class sesuaikan dengan bulma
		<thead>
			<tr>
				<td>#</td>
				<td>Product Name</td>
				<td>Price</td>
				<td>Actions</td>
			</tr>
		</thead>
		<tbody>
			{products.map((product, index) => ( 				// 9. maping pada <tr> nya
			<tr key={product.id}>  								// 10. setiap loop membutuhkan key > taruh di atribut sini
				<td>{index + 1}</td>  							// 11. increment index mulai dari 1
				<td>{product.title}</td> 						// 12. ambil hasil data fetching
				<td>{product.price}</td>
				<td></td> 										// 13. (kosongin dulu) tahap pembuatan tombol Edit | Delete menyusul di bawah
			</tr>
			)} 
		</tbody>	
	</table>
	}} 															///

CLIENT COMPONENT
------------------------------------------------------
- karena kita akan memasukan data menggunakan form (berbentuk) dan menggunakan event onClick() onSubmit() maka mengharuskan kita bikin "client component"
- sehingga harus di buat di file yang berbeda dengan file getProducts() di page.tsx  
- kita tahu di folder app, semua page component, secara default menjadi "server component".
- menariknya, next13 bisa membuat "client component" berdampingan dg "server component" di dalam folder yg sama
- nanti tinggal di import di server component,  
- caranya:
- masuk ke folder products > add new file addProduct.tsx berdampingan dg page.tsx, tempat getProducts() dan ProductList() berada 
- tandai sbg client component dg syntax directive 'use client' paling atas pakai petik > add component > ketik rfc vscode

	'use client'
	export default function addProduct(){
		return( <div>Add Product</div> ); 										///
	} 			
yang nanti kontrol modalnya seperti ini:
	
	modal(){
		function toggle(){}
		tombol trigger 
		modal toggle boolean(untuk tampil sembunyi) berbentuk cekbox
		form 
	}

- lalu bikin script modal pada html + bulma biasa, dan masukan ke return addProduct() 
- selanjutnya lakukan tweaking dengan nextjs 

- sekarang import component ini di halaman page.tsx berisi component ProductList() 
- letakkan render tepat di atas table nanti button trigger nya di render di sana 
- dan saat nya tweaking untuk menangani data dari form input. 

	'use client'
	import { SyntheticEvent, useState } from "react"; 							// 20. import SyntheticEvent (librari berfungsi untuk mencegah reload page saat data tersubmit)
	import { useRouter } from "next/navigation"; 								// 27. ----->  step:27 - 30 agar dapat melihat perubahan data table, dan sekaligus menutup modalnya
	export default function AddProduct(){ 										// 1. bikin fungsi add product
		const [title, setTitle] = useState(""); 								// 11. state untuk data title
		const [price, setPrice] = useState(""); 								// 12. state untuk price
		const [modal, setModal] = useState(false); 								// 5. ini state yang di ubah
		const [isMutating, setIsMutating] = useState(false); 					// 31. -----> step:31 agar saat save di klik muncul loading, dan tidak dapat di klik, sampai data terkirim,
		const router = useRouter(); 											// 28. inisialisasi useRouter
		
		function handleChange(){ 												// 4. ini fungsi pengubah state dg value boolean 
			setModal(!modal); 													// 6. pengubah nya
		}

		async function handleSubmit(e: SyntheticEvent) {  						// 18. ini fungsi tangkap, dan send data ke API, async, 19. ada error di argument solusi step 20 
			e.preventDefault(); 												// 21. agar submit tidak reload
			setIsMutating(true);  												// 32. state isMutating diubah jadi true saat akan submit
			await fetch('http://localhost:5000/products',{  					// 22. await fetching data 
				method: 'POST',  												// 23. method kirim 
				headers:{
					'content-type': 'application/json'
				},
				body: JSON.stringify({
					title: title,  												// 24. data diambil dari state dengan keystate
					price: price,
				})
			});
			
			setIsMutating(false); 												// 33. isMutating di ubah false. saat selesai submit step:34 ke tombol save di bawah

			setTitle(""); 														// 25. setelah terjadi pengiriman kembalikan state kemabali ke string kosong
			setPrice(""); 														// 
			router.refresh(); 													// 29. chaing dg refresh, routing untuk kembali ke tabel, data terlihat bertambah, karena sudah ter refresh() 
			setModal(!modal); 													// 30. tutup modal. 
		}

		// 26. agar melihat perubahan, di contoh si ada menggunakan framework, jadi lanjut step 27. 

		return(  																// 2. pada return isi dengan isi modal, berupa form biasa
			<div>

<button class="btn" onClick={handleChange}> Add new </button> 					// 3. ini trigger modalnya onClick nya mentrigger fungsi handleChange(){true/false} 
<input type="checkbox" cheked={modal} onChange={handleChange} class="modal-toggle" >	///  7. ini kontrol CSS saat true tampilkan .modal, false hidden modal. ada event nya juga (periksa)(mendengar state)
<div class="modal"> 															// 8. ini class modalnya yang show/hidden 
	<div class="modal-box">
		<h3>Add new Product</h3> 
		<form onSubmit={handleSubmit} >											// 17. sekarang data tinggal di kirim ke API dengan onSubmit = handleSubmit
			<div class="form-control">
				<label class="label"> Title </label>
				<input 
					type="text" 
					class="input" 
					placeholder="Product Name"
					value={title} 												// 13. tambah atribut value = {state.title}
					onChange={ (e) => setTitle(e.target.value) } 				// 14. tambah juga event onChange = {(setTittle)}
				/>
			</div>
			<div class="form-control">
				<label class="label">Price</label>
				<input 
					type="text" 
					class="input" 
					placeholder="Price"
					value={price} 												// 15. tambah atribut value={state title}
					onChange={ (e) => setPrice(e.target.value) } 				// 16. tambah juga event onChange={(setTittle)}
				/>
			</div>
			<div class="modal-button">
				<button type="button" onClick={handleChange} >Close</button> 	// 9. disini juga mentrigger boolean state, 
				{ !isMutating ? ( 														// 35. menggunakan ternary true ? (render tombol save) : ( render tombol saving... );
				<button type="submit" className="is-primary"> Save </button> 			// 10. pada tombol save onClick = mentrigger fungsi () { tangkap data, dan send data ke API }
				) : (   
				<button type="button" className="is-loading"> Saving... </button> 		// 34. buat tombol loading, duplikat dari tbsave, kasih class loading dari framework Bulma   
				)}
			</div>
		</form>
	</div>
</div>

			</div>  															/// 
		); 
	} 		


DeleteProduct
------------------------------------------------------
- bikin file baru di folder products.tsx deleteProduct.tsx > copas semua halaman addProduct getProducts
- lalu rapikan beberapa hal sesuaikan dengan keperluan delete
- setelah di ubah seperti ini > kemudian import di page.tsx 

	import { useState } from "react"; 						
	import { useRouter } from "next/navigation"; 								// 1. rapikan hingga saeperti ini
  
  type Product = { 																// 5. buatkan disini typedata object array 
  	id: number;
  	title:string;
  	price:number;
  }

	export default function DeleteProduct(product: Product) { 						// 4. ubah nama function dari AddProduct ke DeleteProduct > sisikan argumentasi product :type product 
		const [modal, setModal] = useState(false); 								
		const [isMutating, setIsMutating] = useState(false); 					
		const router = useRouter(); 											
		
		function handleChange(){ 												
			setModal(!modal); 													
		}

		async function handleDelete(product.id) {  								// 7. maka kita tangkap idnya disini 
			setIsMutating(true);  												
			await fetch(`http://localhost:5000/products/${product.id}`,{ 		// 8. id kita taruh di slash terakhir  					
				method: 'DELETE',  												
			});
			
			setIsMutating(false); 												
			router.refresh(); 													  
			setModal(!modal); 													 
		}

		return(  																 
			<div>

<button onClick={handleChange}> 
	product
</button>
<input type="checkbox" cheked={modal} onChange={handleChange} class="modal-toggle" >
<div class="modal"> 															
	<div class="modal-box">
		<h3>Are sure to delete {product.title} ? </h3>  						// 9. taruh nama file (dari prop) di sini untuk konfirmasi 

			<div class="modal-button">
				<button type="button" onClick={() => {handleDelete(product.id)}} >Close</button> /// 6. ubah button delete dan onClick handleDelete(product(dari prop))
				{ !isMutating ? ( 														 
				<button type="button" className="is-primary"> Delete </button> 			  
				) : (   
				<button type="button" className="is-loading"> Deleting... </button> 		  
				)}
			</div>

	</div>
</div>

			</div>  															
		); 
	} 		///


// 2. import componen deleteProduct() di page productList()

	<table class="is-table">  									
		<thead>
			<tr>
				<td>#</td>
				<td>Product Name</td>
				<td>Price</td>
				<td>Actions</td>
			</tr>
		</thead>
		<tbody>
			{products.map((product, index) => ( 				
			<tr key={product.id}>
				<td>{index + 1}</td>
				<td>{product.title}</td> 						
				<td>{product.price}</td>
				<td>
					<deleteProduct {...product}/> 										// 3. setelah di import panggil component disini dan kirimkan data prop menggunakan spread 
				</td> 											// 
			</tr>
			)} 
		</tbody>	
	</table> 	///

UpdateProduct
------------------------------------------------------
- bikin file baru di folder products.tsx UpdateProduct.tsx > copas semua halaman addProduct getProducts
- lalu rapikan beberapa hal sesuaikan dengan keperluan "update"
- setelah di ubah seperti ini > kemudian import di page.tsx 
- lalu gunakan component UpdateProduct pada table action 
- dan lakukan pengiriman props yang sama dengan delete {...product}


	'use client'
	import { SyntheticEvent, useState } from "react"; 							// 
	import { useRouter } from "next/navigation"; 								// 

	type Product = { 															// 7. buatkan disini typedata object array 
  	id: number;
  	title:string;
  	price:number;
  }

	export default function UpdateProduct(product: Product){ 					// 1. ganti nama jadi update  // 6. tangkap prop disini: type definition
		const [title, setTitle] = useState(product.title); 						// 8. default value diambil dari prop
		const [price, setPrice] = useState(product.price); 						// 
		const [modal, setModal] = useState(false); 								// 
		const [isMutating, setIsMutating] = useState(false); 					// 
		const router = useRouter(); 											//  
		
		function handleChange(){ 												//  
			setModal(!modal); 													// 
		}

		async function handleUpdate(e: SyntheticEvent) {  						// 2. rename ke update
			e.preventDefault(); 												// 
			setIsMutating(true);  												// 
			await fetch(`http://localhost:5000/products/${product.id}`,{  					// 9. kasih id di belakang pakai backtic
				method: 'PATCH',  												// 8. method PATCH
				headers:{
					'content-type': 'application/json'
				},
				body: JSON.stringify({
					title: title,  												// 
					price: price,
				})
			});
			
			setIsMutating(false); 												// 

			router.refresh(); 													//   
			setModal(!modal); 													 
		}
 
		return(  																
			<div>

<button class="btn" onClick={handleChange}> edit </button> 						// 11. rename ke edit 
<input type="checkbox" cheked={modal} onChange={handleChange} class="modal-toggle" >	///  
<div class="modal"> 															//  
	<div class="modal-box">
		<h3>Edit Product {product.title}</h3>									// 9. ambil props id disini 
		<form onSubmit={handleUpdate} >											// 3. rename ke update
			<div class="form-control">
				<label class="label"> Title </label>
				<input 
					type="text" 
					class="input" 
					placeholder="Product Name"
					value={title} 												// 
					onChange={ (e) => setTitle(e.target.value) } 				//  
				/>
			</div>
			<div class="form-control">
				<label class="label">Price</label>
				<input 
					type="text" 
					class="input" 
					placeholder="Price"
					value={price} 												//  
					onChange={ (e) => setPrice(number(e.target.value)) } 		// 10. conversi ke number 
				/>
			</div>
			<div class="modal-button">
				<button type="button" onClick={handleChange} >Close</button> 	// 
				{ !isMutating ? ( 														// 
				<button type="submit" className="is-primary"> Update </button> 			// 4. rename ke update
				) : (   
				<button type="button" className="is-loading"> Updating... </button> 	// 5. rename ke update
				)}
			</div>
		</form>
	</div>
</div>

			</div>  															/// 
		); 
	} 		

sumber: Fahrezi Adha 
======================================================================================

Link & Navigation
------------------------------------------------------
- ada next-router methode server-centric-routing > 
	- reactJS vs nextjs router. di nextjs
	- navigasi di client(tanpa refresh) 
	- tapi routing di server(hanya dikirim komponen yang di minta saja) 
	- dan dilakukan catching sehingga lbih ringan lagi
- ada dua cara: 
	import Link from "next/link";
	<Link href=/dashboard>Ke About</Link> 	// lebih di sarankan dan ini mirip <a>, jangan lupa import {Link} from 'next/link';
	router.push(/about); 					// ini pakai function. ini lebih tertujukan ke penggunaan redirect (routing secara trigger aplikasi) 
											// bukan dari klik trigger user > seperti contoh pada saat upload selesai langsung redirect
	'use client' 
	import { useRouter } from "next/navigation";
	export default function page() {
	  const router = useRouter()
	  const arahkan = (url:string) => {
	    router.push(url)
	  }
	  return (
	    <div>
	      <p>halaman post</p>
	      {/* <Link href="/coba">ke coba</Link> */}
	      <p onClick={() => arahkan('/coba') } >Haloo</p>
	    </div>
	  )
	}

Loading Skeleton 
------------------------------------------------------
- saat web pertama kali di load maka akan merender terlebih dahulu componen layout > lalu komponen loading > lalu komponen kita > pindah halaman dll
- selama komponen belum di loading maka yang di tampilkan loading > tapi saat sudah pernah di akses maka memori men save sehingga loading tidak tampil lagi
- caranya: buat satu file component loading di root /app: aplikasi di root itu sbagai children layout
	buat file loading.tsx > isi dengan component Loading() > return Loading() mis: animasi, text loading..., Skeleton loading dll > contoh:
		export default function Loading() { return (<div> Loading... </div> ) } ///

.Error handling
------------------------------------------------------
- mirip loading komponen error juga akan di tampilkan, ketika ada error, baik dari fetching data atau memang alert dari kita yang sudah kita buat
- caranya sama hanya bikin file error() di root app dengn component error(error,reset)
- loading.tsx dan error.tsx ini bisa di buat di masing-masing komponen bersebelahan dengan komponen page.tsx nya jika kita ingin menampilkan error berbeda2
- coba errorkan sebuah halaman page.tsx > dg cara akses somponent tanpa di import contoh: <BukanComponen /> > lalu akses url di browser menuju halaman error tersebut 

'use client'									// 1. karena pakai useEfect
import { useEffect } from "react"; 				// 2. useEfect untuk keperluan console.log kalau sudah tidak dipakai, hapus saja

export default function Error({error, reset}:{ error:Error, reset:() => void; }) { 	// 3. argument ada 2 {error, reset} 
  useEffect(()=>{console.log},[error]) 
  return (
    <div>
        disini ada error... 					// 4. statik saja
    </div>
  )
}  		///

fetching data	
------------------------------------------------------
await fetch(url); 								// karena ini asynchronous harus di panggila dalam function async/await, sekarang masih beta maka masih bisa error
await fetch(url,{next: {revalidation:10});		// (API akan di perbarui tiap 10 detik tapi tanpa cache) 
await fetch(url,{next: {cache: 'no-store'}});	// API tidak di simpan sama sekali sehingga perubahan apapun langsung di update tiap request saja

fetching data bisa di lakukan di client maupun server componen, semua bisa pakai fetch(), 
query data di Server-Component dengan SWR atau third party library dan React-Query di sisi Client-Component
kalau data yang di ambil alngsung ke database sebaiknya pakai yang server-component

praktek fetch ambil data dari github misalnya


























