NEXTJS 13 mei 2023 CODER MEDIA sublime text tab 2 spacy
------------------------------------------------------

    "paths": {
      "@/*": ["./src/*"]
    }


installation 							-> node, npm, next, package, run localhost, vscode, terminal
cleanUp 									-> bersih bersih untuk project kita
LAYOUT, METADATA, PAGES 	-> mengenal, 
Routing 									-> konsep dan cara akses URL component
useRouter 								->  
JSON server  							-> bikin fake API, demonstrasi API
CSS, Bulma, Bootstrap     -> integrasi style
react-icons 							-> install dan penggunaan
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
- minimal nodejs > v16.8 > npm dengan mengikuti instalasi di react di linux cekidoc 
- :> mkdir boxits-0.1 :> cd boxits-0.1 :> code . > enter  
- buka terminal di vscode :> npx create-next-app --experimental-app boxits (karena masih experimantal),
  (nama folder jika tidak nested tidak perlu di tulis) cek saja suatu saat berubah syntaxnya
- typeScript: yes, eslint: yes, src/ dir no, lalu @ > enter 
- pergi ke package.json periksa, dependencies version  
- :> npm run dev > kita dapatkan runing di localhost:3000 > buka di browser akan tampil wellcome > halaman default 

CLEAN UP
------------------------------------------------------
- buka vscode > structur folder lihat di react agak mirip
- pada folder src/app. kita di kasih page.tsx (ini halaman index home kita) > hapus semua isinya > buatkan komponen sendiri: > rfc > hapus import react

	export default function Home() { return ( <div> Halo Homepage Pertama </div> ) }  		//

- tampil default bergaris > buka global.css > hapus semua isi css nya > maka halaman bersih dan "hello world!"
- buka folder src/app > di src/app ada structur folder:

LAYOUT, METADATA, PAGES  	
------------------------------------------------------
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
	- new file /coba.tsx > cara ini tidak valid > yaitu bikin file di root/app > yg benar harus dalam folder app 
	- folder baru dan berisi page.tsx ini yang di buat di root/app ini sudah otomatis terkonstruksi jadi url 
	- add new file :app/about/page.tsx > page.tsx (page adalah pengganti index.js, kalau akses tidak perlu tulis page.tsx);
	- berisi componen print: "halo about" (copas componen Home saja barusan lalu edit ) 
	- coba akses URL localhost:3000/about > maka akan tampil halaman about tanpa script routing seperti di reactJS
- menggunakan dan import component 
	- akses component di folder: about/page.tsx > localhost:3000/about > page.tsx tidak perlu ditulis
	- komponen yang halamanya tidak di tulis dg nama page.tsx akan di akses menggunakan import/include > tidak bisa jadi router path
	- include componen dalam folder about: import Halo from "./halo"; ini file sejajar
	- include componen dalam folder lain: import Halo2 from "../folder/halo2"; ini folder sibling
	- include componen dalam folder lain: import {Komponen1, Komponen2} from "../folder/filecomponen"; ini folder sibling komponen lain
	- intinya importnya path nya benar > maka komponen dapat di gunakan di halaman lain 
- menggunakan dan import component pada versi lama (yg masih folder pages)
	- berbeda dengan "versi app", di "versi pages" cara import dan letak komponen lebih ketat
	- component harus di buat diluar pages, misal root
	- component harus dalam folder dan file harus bernama index.js, kemudian di export
	- cara import tidak boleh pakai {}, import Coba from 'url'; (jk gagal coba pakai {})
- dinamic parameter -----> 
	(bisa di gunakan untuk routing kayaknya ini nanti)(mungkin nested URL)
	- kalau kita akan akses halaman dan mengirim url dinamic seperti ID pada db atau nested URL > contoh:
	- add new file /post/page.tsx > open (/disini maksudnya root app/ src kita). karena kita hanya bermain dalam folder ini, tidak di luar /app
		export default function Post() { return ( <div> Halo post </div> ) } 				// bikin componen rfc
	- localhost:3000/post > ini masih biasa > sekarang kita buat halaman yang bersifat dinamic parameter router:
	- add new file /post/[postID]/page.tsx > nama folder dalam array > function di dalamnya menerima params  

		export default function PostDetail({params}: { params: {postId: string}}) {   // argumenya isi dengan params: postID misalnya
		  return (
		    <div>
		      Post Detail { params.postId } 			// disini nangkap parameter nya 
		    </div>
		  )
		} 																				//

	- cara aksesnya di URL: localhost:3000/post > maka masih muncul "halo post" (url biasa) > tapi jika kita akses dinamic nya dg cara berikut
	- localhost:3000/post/1 maka muncul "post detail 1" > localhost:3000/post/2 maka muncul "post detail 2" sesuai yng dikirim lewat URL
	- jadi kita dapat akses endpoint dengan nested apapaun yang tidak ada komponenya seperti  1,2,3, melalui URL sehingga kita dapat tangkap dan manfaatkan
- catch all route ----->
	- bagaimana kalau kita mengakses URL nested seperti misalnya: localhost:3000/post/1/2/5 
	- kita tinggal rename (kasih ...) dengan destructuring array (...nama ) pada folder dinamic tadi: [...postId] 
	- cara nangkapnya tinggal pakai index

		export default function PostDetail({params}: { params : {postId: string}}) {   
		  return (
		    <div>
		      Post Detail { params.postId[0] } 		// kalau tidak pakai index maka akan ketangkap tampil semua arraynya (1,2,5) di halaman,  											
		    </div> 																// coba lihat di teminal
		  )																				// tapi kalau pakai index nanti yang ketangkap cuma satu sesuai index, meskipun akses post/1/2/5 
		} 																				

JSON-SERVER 
------------------------------------------------------
(kita akan gunakan fake API)
- installasi json-server
	- di vscode > terminal nextjs masih running 
	- add new terminal > pd terminal kedua ini tempat installasi json-server dan tempat running json API kita 
		- :> instalasi > npm i -g json-server > enter > selesai > json-server -v > version 0.17.2 > selesai
- buat file json
	- add new file :root/db.json > (di :root) > tempatkan di luar src/app 
	- lalu buatkan json di dalamnya > gandakan 3 array saja dan ubah namanya
	{
		"product":[
			{
				"id": 1,
				"title": "product 1",
				"price": 899 
			}
		]
	}

- jalankan db.json > terminal :> json-server -w db.json -p 5000 (promp, url watch, port); > enter maka >
- kita dapat endpoint product: localhost:5000/product > runing di browser > maka data API akan terlihat

CSS, Bulma, Bootstrap
------------------------------------------------------

- global.css bisa kita gunekan untuk custom css semua halaman > bikin file globals.css di root app > lalu import di layout umum = import './globals.css'
	- penggunaan persis css yaitu akses class dg className="hijau"
- css.modules
	- bikin file bernama coba.module.css > dimanapun bisa (root, sub folder, folder styles) > 
	- penggunaan import styles from './about.module.css' kalau folder sejajar
	- cara panggil > <h1 className={styles.merah}></h1> ///

:> npm install bulma > pergi ke index.js > import {bulma} from 'bulma/css/bulma.css'
	- di <button className="button" > restart server :> ctrl C :> npm run dev 
	- setelah font nya berubah maka bulma terinstall 

- external css > CDN Bootstrap > copas link di layout.tsx
- inline CSS > contoh: <div style={{margin:"12px"}}>halo</div> // pakai kutip di nilai saja
- css in js > ini kayaknya susah
- sass > ini juga bisa tapi kita skip dulu
- bulma, Bootstrap juga OK

tailwind & daisyUI
------------------------------------------------------
- install taillwind > situs resmi > doc > installation > framework > nextjs > installasi tailwind CSS > terminal di project kita > 
  - jika terminal dlm keadaan runing 
  	- hentikan dulu > ctrl C > jalan kan satu-satu 
	- npm install -D tailwindcss postcss autoprefixer		// installation
	- npx tailwindcss init -p 													// initialisation
	- kopas PATH > pergi ke file "tailwind.config.js" > paste di content:[disini]
	- copas @tailwind base; @tailwind components; @tailwind utilities; > di global.css > save
- langkah ini sama persis dengan yang ada di documentasi > lebih disankan melihat langsung aja 
- install DaisyUI > situs resmi > doc > installation > framework > nextjs > installasi tailwind CSS > terminal di project kita > 
	- :> npm i daisyui > enter > selesai
	- pergi ke "tailwind.config.js" > cari object "plugins:[]" > isi di dalamnya: [require("daisyui")] > save
  - jalankan kembali terminal > npm run dev > reload browser > sansserif > siap di gunakan 
  - tinggal gunakan class dari daisyui > dan juga class tailwind > bisa di gunakan semua

PrimeReact
------------------------------------------------------
- https://primereact.org/
- coba kunjungi di atas, open source UI react 

react-icons
------------------------------------------------------
menggunakan impor ES6 yang memungkinkan Anda untuk menyertakan hanya ikon yang digunakan proyek Anda.
untuk menelusuri nama, bentuk dan sumber icon buka https://react-icons.github.io/react-icons 

new terminal :> npm install react-icons --save > 	// 1. cara install
import { FaBeer } from 'react-icons/fa'; 					// 2. import > import { namaicon } from 'codesumbericon'; > buka https://react-icons.github.io/react-icons 		
<FaBeer /> 																				// 3. cara pakai

SERVER N CLIENT COMPONENTS 
------------------------------------------------------
untuk tau perbedaan server client component, lihat di dokumentasinya tapi setidaknya kita tahu beberapa perbedaan:
- fetch() dll hanya bisa dlakukan di server component
- onClick(), onChange(), useState(), useEffect() dll hanya di lakukan di client component
- server component: karena code kita pakai javascript untuk di tampilkan kan harus di konversi ke HTML dan dom (ini di sebut render)
	- pada server komponen render ini di lakukan di server dan dapat di gunakan berulang kali oleh jutaan user > efeknya sangat efisien dan cepat
	- soal parameter perbedaan akan di load saat request saja
- client component: rendernya di client, keuntunganya bisa menggunakan HOOK yg interactive 
- tips: gunakan server dulu, jika terpaksa gunakan client(misal: jika perlu menggunakan HOOK)
- semua komponen di app default server component kecuali kalau di tentukan sebagai client componen

COMPONENT LAIN DI PAGES VERSI LAMA
------------------------------------------------------


CRUD API
------------------------------------------------------
sekenario
- kita akan melakukan CRUD > yaitu melalui URL localhost:3000/products 
- dalam komponen products ini kita mengambil data dari data API yang sudah dipersiapkan di atas dari server yang berbeda (port:5000)
- singkatnya kita akan CRUD menggunakan: getProduct(), addProduct(), deleteProduct(), updateProduct().
- di page.tsx adalah server component  > karena dilakukan fetching data dg getProduct() > lalu di tampilkan dalam tabel dg ProductList()
- di addProduct.tsx adalah client component > dilakukan post data yang di ambil dari form input > lalu di import ke page.tsx 
- di deleteProduct.tsx  
- di updateProduct.tsx

SERVER COMPONENT
------------------------------------------------------
getProduct()
caranya: 
add new file :app/products/page.tsx > isi dengan code di bawah copas aja bisa > tapi baca cara pakainya sesuai nomor urut
import untuk semua data yang diperlukan disini > page.tsx

import AddProduct from "./addProduct";  						// xx. keterangan ada di add product
import DeleteProduct from "./deleteProduct"; 				// xx. keterangan ada di delete product
import UpdateProduct from "./UpdateProduct"; 				// xx. keterangan ada di update product

-----

type Product = { 																		// > 6.2. disini deklarasikan bentuk datanya di gunakan di step:6 
    id: number;
    title: string;
    price: number;
  }
  
  async function getProduct() { 										// 1. buat function fetching data dari API > dg async > misalnya nama getProduct
    const res = await fetch('http://localhost:5000/product', { 	// 2. await fetch() disini > bungkus dalam variabel 
        cache: 'no-store' 													// 3. kasih parameter2 ini, berfungsi untuk tidak di simpan di caching 
    })
    return res.json() 															// 4. data sudah dapat di gunakan berupa json
  }
  
  export default async function ProductList() { 		// 5. buat function penampil data berupa table dan export default > async juga
    const products: Product[] = await getProduct(); // 6. ambil data dulu > 6.1. karena type script kita harus tentukan type data > bentuk array karena banyak > 6.2
    return ( 			
      <div className="p-10">
        <table className="table w-full"> 						// 7. return table > 7.1. oya kita sudah bisa menggunakan daisyUI dan tailwind   
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {products.map((product, index) => ( 		// 8. gunakan variabel data disini untuk di map
                <tr>
                    <td>{index+1}</td>
                    <td>{product.title}</td> 				// 9. ambil datanya
                    <td>{product.price}</td>
                    <td className="flex"> 					// 9.3. agar sejajar ganti dengan flex
                    	<DeleteProduct {...product}/> // 9.1. keterangan ada di bagian delete product
                    	<UpdateProduct {...product}/> // 9.2. keterangan ada di bagian edit product
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    );
  }

----- akses komponen product

- browser > localhost:3000/products  								// 10 silahkan akses

CLIENT COMPONENT
------------------------------------------------------
addProduct()
add new file :app/products/addProduct.tsx > componen di bawah sudah di test

-----
'use client' 																				// 1. karena menggunakan useState maka client componen, definisikan di sini
import { SyntheticEvent, useState  } from "react"; 	// 2. SynteticEvent nanti diperlukan (steps: ) untuk agar saat submit tidak reload, useState berguna
import { useRouter } from "next/navigation" 				// 3. nanti berguna (step:8+ )saat submit tanpa refresh langsung melihat perubahan data tabel yang di submit

export default function AddProduct() {  						// 4. export default ya
  const [title, setTitle] = useState(""); 					// 5. state yang akan dikirim untuk POST API, dapat data oleh inputtext (setTitle())
  const [price, setPrice] = useState("");
  const [modal, setModal] = useState(false); 				// 6. current state kondisi modal, di ubah oleh tombol hide/show modal, trigger dan close modal 
  const [isMutating, setIsMutating] = useState(false); // 7. state untuk kontrol stay/loading button
  
  const router = useRouter(); 											// 8. initialisasi, agar bisa di gunakan untuk melihat perubahan tampilan tabel data tanpa refresh halaman 
  
  async function handleSubmit(e: SyntheticEvent){ 	// 22. tangkap parameter event: dengan SynteticEvent > di function ini menangani POST, 
  																									// 		 kondisi tombol Loading, reset state ke kosong, matikan modal, melihat perubahan data
    
    setIsMutating(true); 														// 24. state u menagani sebelum fetch() tampilkan tombol loading  

    e.preventDefault(); 														// 23. penggunaan SynteticEvent disini. agar tidak reload 
    await fetch('http://localhost:5000/product',{ 	// 26. lakukan fetch() dalam async await
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title, 															// 27. data title: diambil dari state > dari input 
        price: price,
      })
    });

    setIsMutating(false); 													// 25. saat selesai fetch() tampilkan tombol stay

    setTitle("");  																	// 28. reset state
    setPrice("");
    router.refresh(); 															// 29. lihat perubahan data dengan refresh background
    setModal(false); 																// 30. tutup modal
  }

  function handleChange(){ 													// 11. fungsi modal hanya mengubah state toggle saja > 
    setModal(!modal);
  }
  return (     																			// 9. bentuk trigger modal dan modal, menangkap value input  
    <div>

      <button className="btn mb-4" onClick={handleChange}>Add new</button> 	// 10. trigger modal, dengan onclick= hide/show modal dengan state 

			// 12. pengontrol modal hanya menggunakan checkbox checked. modal-toggle sudah di tangani oleh daisyui

      <input type="checkbox" checked={modal} onChange={handleChange} id="my-modal" className="modal-toggle" /> 		// 13. coba cek di checked={true} maka modal akan tampil
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Product</h3>
          <form onSubmit={handleSubmit}> 																		// 21. onSubmit disini bukan langsung di tombol nya > trigger ke function POSTING 
            <div className="form-control">
              <label className="label font-bold">Title</label>
              <input 
                type="text" 
                value={title}  																							// 14. state title ini di ambil untuk di tampilkan di input text > nilai awalnya kosong ""
                onChange={(e) => setTitle(e.target.value)} 									// 15. state title di ubah disini dengan menangkap value input text > state berubah siap dikirim 
                className="input w-full input-bordered"  										//     saat ada perubahan state > langsung di tampilkan saja di input text > coba console.log(tittle)
                placeholder="Product Name"/>
            </div>
            <div className="form-control">
              <label className="label font-bold">Price</label>
              <input 
                type="text" 
                value={price}
                onChange={(e) => setPrice(e.target.value)} 									// > 14.1 sama
                className="input w-full input-bordered" 
                placeholder="Price"/>
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>Close</button>  	// 16. sama dengan triger modal ini juga akses pengubah state
              {!isMutating ? ( 																															// 18. maka dengan ternary state kedua tombol di tampilkan sesuai kondisi
                <button type="submit" className="btn btn-primary">Save</button> 						// 17. tombol save dan saving akan di tampilkan bergantian pada kondisi tertentu
              ) : (
                <button type="submit" className="btn loading">Saving...</button> 						// 19. tombol loading selama berlangsung tidak bisa di click
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

/// when the remote gets lost we call it, we are tired now

DeleteProduct
------------------------------------------------------
deleteProduct()
- new file :app/products/deleteProduct.tsx 
- jika sudah jadi import di :app/page.tsx > dan gunakan/tempatkan di table action 
- <DeleteProduct {...product}/> sambil mengirim prop di oper dari map(product) saat looping data table > ada di step:2
- pakai spread operator karena data yang di ambil berupa array/object

'use client' 																										// 1. masih client sebab pakai useState
import { useState  } from "react"; 
import { useRouter } from "next/navigation"

type Product = { 																								// 3. ini type datanya, karena banyak yang di terima maka berbentuk object
    id: number;
    title: string;
    price: number;
  }

export default function DeleteProduct(product: Product) { 			// 2. export default f delete(argument prop product.ID di oper dari page.tsx) > karena type script maka ada type datanya
  
  const [modal, setModal] = useState(false); 										// 4. keterangan mirip di get product 
  const [isMutating, setIsMutating] = useState(false); 					// 5. state untuk kontrol stay/loading button 
  
  const router = useRouter(); 																	
  
  async function handleDelete(productId: number){ 							// 6. param di oper dari button delete
    
    setIsMutating(true);

    await fetch(`http://localhost:5000/product/${productId}`,{ 	// 7. fetch() DELETE > menagkap id dari args > fetch() harus dalam async await
      method: 'DELETE'
    });

    setIsMutating(false);

    router.refresh();
    setModal(false);
  }

  function handleChange(){  																		// 8. func toggle modal
    setModal(!modal);
  }

  return (
    <div>
      {/* <label htmlFor="my-modal" className="btn mb-4">Add new</label> */}
      <button className="btn btn-error btn-sm mb-4" onClick={handleChange}>Delete</button> 											// 9. trigger func toggle

      {/* Put this part before </body> tag */}
      <input type="checkbox" checked={modal} onChange={handleChange} id="my-modal" className="modal-toggle" />  // 10. kondisi tergantung toggle > class=toggle(modal) > action CSS dari daisyUI 
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure to delete {product.title}?</h3>  											// 11. data di oper dari args > args di oper dari tombol delete  

            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>Close</button>
              {!isMutating ? (
                <button type="button" className="btn btn-primary" onClick={()=>handleDelete(product.id)}>Delete</button> 	// 12. di oper dari DeleteProduct(props)(step:2) > ke step:6 
              ) : (   																																													// 13. replace type=button untuk kedua tombol
                <button type="button" className="btn loading">Deleting...</button>
              )}
            </div>
        </div>
      </div>
    </div>
  )
}

///
UpdateProduct
------------------------------------------------------
updateProduct()
- add new file products/updateProduct.tsx > copas semua halaman addProduct.tsx
- lalu rapikan beberapa hal sesuaikan dengan keperluan "update"
	- pertama hapus dulu baris yang tidak di diperlukan
	- ubah kode yang diperlukan lihat steps
	- untuk keterangan pemahaman bisa di telusuri di addProduct.tsx
- setelah di ubah seperti ini > kemudian import di page.tsx
- lalu gunakan component UpdateProduct pada table action 
- dan lakukan pengiriman props yang sama dengan delete {...product}
<UpdateProduct{...product}/> sambil mengirim prop di oper dari map(product) saat looping data table

'use client'
import { SyntheticEvent, useState  } from "react";
import { useRouter } from "next/navigation"

type Product = {
    id: number;
    title: string;
    price: number;
  }

export default function UpdateProduct(product: Product) { 								// 1. ubah nama ke UpdateProduct()
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);
  
  const router = useRouter();
  
  async function handleSubmit(e: SyntheticEvent){
    
    setIsMutating(true);

    e.preventDefault();
    await fetch(`http://localhost:5000/product/${product.id}`,{
      method: 'PATCH', 																										// 2. ganti dengan PATCH 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        price: price,
      })
    });

    setIsMutating(false);

    router.refresh();
    setModal(false);
  }

  function handleChange(){
    setModal(!modal);
  }

  return (
    <div>

      <button className="btn btn-info btn-sm mb-4" onClick={handleChange}>Edit</button>

      {/* Put this part before </body> tag */}
      <input type="checkbox" checked={modal} onChange={handleChange} id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit {product.title}</h3> 		// 3. ubah keterangan dan ambil data 
          <form onSubmit={handleSubmit}>  																// 4. onSubmit=handlesubmit
            <div className="form-control">
              <label className="label font-bold">Title</label>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input w-full input-bordered" 
                placeholder="Product Name"/>
            </div>
            <div className="form-control">
              <label className="label font-bold">Price</label>
              <input 
                type="text" 
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="input w-full input-bordered" 
                placeholder="Price"/>
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>Close</button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">Update</button> 		// 5. ubah nama jadi update
              ) : (
                <button type="button" className="btn loading">Updating...</button> 		// 6. juga disini
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} ///


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
	router.push(/about); 										// ini pakai function. ini lebih tertujukan ke penggunaan redirect (routing secara trigger aplikasi) 
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




---- >>>> Belum selesai
  
  
