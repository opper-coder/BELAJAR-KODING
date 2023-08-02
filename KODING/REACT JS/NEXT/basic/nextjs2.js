NEXT.JS 13 DASAR BAHASA INDONESIA

Ringkasan




---------------------------------------
Fahrezi Adha

keunggulan umum: 
- data fetching  
- scalability 
- Routing 
- Rendering
- User interface 
- Developer experience 
- Performance 
- Integration 
- Infrastructur 

keunggulan dibanding react
- config react auto 
- struktur folder auto
- client Server component
- Routing
- fetching
- Api
- Auth

---------------------------------------
Installasi

:> node -v
:> npm -v
:> mkdir fullstack
:> cd fullstack 
:> npx create-next-app@latest --experimental-app . 	: ada titik pakai experimental
:> npx create-next-app@latest belajar 			: biasa
   - name app: my-app
   - typescript: ya  
   - eslint: ya
   - tailwind: ya
   - dst
:> cd my-app
:> code .
:> npm i dependency yg di perlukan (axios, daisyui, prisma, swr, mysql2, dll )
:> npm run dev 

---------------------------------------
Routing
- next < 13 file system routing 			: semua file di folder pages jadi routing, routing utama index.js 
- next > 13 directory system routing 			: karena server component base, maka dibungkus dalam folder/page.js 

---------------------------------------
page dan layout 
- yang jd routing, nama wajib "page"
- ext: js, ts, jsx, tsx
- layout: shared component di semua sibling dan child, sebuah component layout dg menentukan render {children} ya.
  (atau mungkin hanya penyedia data umum ke child dan sibling)  
- urutan:
  - paling atas disebut root layout(wajib ada) dlm folder app (atau pages, src, )
  - halaman selain root boleh memiliki layout sendiri, selain layout di root  
  - harus menerima children prop
  - Layout bisa fetching data sama jg seperti halaman, tapi
  - Tidak menerima oper data dari halaman lain untyuk merubah properti layout
  - layout berada dlm sebuah folder yg sama dg pages.js
- usahakan pakai server komponen jika ada kepeluan state dll barulah client
- selalu bikin client sebagai children saja lalu import ke server comp
- kalau perlu bikin folder sendiri dalam sebuah halaman untuk komponent client (evaluasikan)
- atau bikin komponen bebas tapi saat bikin komponen algoritma dan komponen endpoint pastikan di server

---------------------------------------
Navigation
- selain kita bisa menuju kesebuah halaman dengan menuliskan url di browser, 
  kita juga bisa menuju(navigasi) kesebuah halaman secara kode routing di sisi server dengan link atau router
- Client Side Navigation : 
	- pindah halaman tanpa refresh, jadi jangan gunakan <a></a> //
	- ringan: halaman hanya download komponen yg bersangkutan saja, tidak seluruh halaman
	- ini terjadi karena di server sudah di routing dan cache, jadi client hanya mengambil perubahan saja 
	- setelah melihat beberapa halaman next akan men caching di browser jg komponen yg sudah di render sebelumnya 
	- antara link dan router prilakunya sama saja, bedanya
- <Link href="url"> : 
	- link di letakkan langsung di component
- Router:
	- digunakan dengan trigger
	- supaya reusable taruh di root layout dan trigger dengan mengirim url supaya dinamis
	- contoh:

	"use client" 					// 0. kayaknya wajib client
	import {useRouter} from "next/navigation" 	// 1. 
	const router = useRouter() 			// 2. 
	const arahkanUrl = (url) => { 			// 3. karena trigger kalau bisa dinamis dengan args
		router.push(url) 			// 4. arahkan halaman
	} 
	<onclick="{ () => arahkanUrl() }"> 		// 5. trigger

- dinamic routing: [1] 
	- seperti kita tahu bahwa endpoint itu kirim parameter via url 
	- sedangkan endpoint itu biasanya di simpan dalam sebuah komponent dinamis, seperti detail properties orang dsb 
	- maka komponen dinamis tersebut saat di panggil harus menerima data via url 
	- saat ada pemanggilan berupa url yang mengarah ke dinamic route maka akan tampil 
	- implementasinya nanti di bawah

	saat ada 

- disarankan kalau navigasi halaman pakai <link> karena server component di eksekusi di client
  kalau ada perubahan secara browser barulah di gunakan, misalnya saat post data pakai halaman lain, atau saat loading, upload dst
- dinamic routing kalau bisa di panggil dalam component, bukan di panggil via url (sepertinya begitu)

---------------------------------------
loading page dan error page
- loading:
	- bikin komponent loading berisi skeleton, class loading, lingkaran loading dll
	  lalu dg "state" setelah proses fetching selesai misalnya, classname={ state ? button-loading : button } 
	- loading.js (nama wajib "loading") bisa di terapkan di {children} layout 
	  (yaitu taruh saja di sejajar dg page.ts pada sbuah folder bersangkutan) 
	- copas syntax template di dokumentasi

	  export default function Loading() { return <LoadingSkeleton /> }

- error:
	- error.js (namawajib "error") peletakan sda
	- file error() di root app dengn component error(error,reset)
	- loading.tsx, error.tsx, page.tsx   harus bersebelahan
	- coba errorkan sebuah halaman page.tsx > dg cara akses somponent tanpa di import 
	  contoh: <BukanComponen /> > lalu akses url di browser menuju halaman error tersebut 
	  atau error saat fetch()
	- copas syntax templatenya

	'use client'					// 1. 
	import { useEffect } from "react"; 		// 2. useEfect untuk keperluan console.log kalau sudah tidak dipakai, hapus saja

	export default function Error({error, reset}:{ error:Error, reset:() => void; }) { 	// 3. {error, reset} 2 args wajib
	  useEffect(()=>{console.log},[error]) 		// 4. jika ada error mau lakukan apa berdasarkan args error 
	  return (
	    <div>
	        disini ada error... (default error) 	// 4. statik saja/atau ambil state silahkan
	    </div>
	  )
	}  	///

---------------------------------------
server dan client componen 
- itu di bedakan soal kapan dan dimana di render
- server komponen: komponen saat di minta(request) akan di render dulu di server, lalu "hasilnya" di kirim ke client
- client komponent: saat di minta maka akan di berikan "komponen seutuhnya" nanti di render di client
- default: server component, kecuali di kasih "use client" mk jadi client
- server: fetch data, large dependency(seperti tailwind, axios dll), akses langsung backend algoritma, dll 
- client: jika halaman mebutuhkan state, useEffect, onclick, brouser API,  dll(cekidoc) 
- server: "sensitif"
- client: "interaktif" 

---------------------------------------
fetch data 
- di next13 lebih mudah dan flexibel 
- fetch(axios, endpoint, database) bisa di komponen, page, layout
- SWR(realtime, request API) di client component, 
- async await, saat bikin dan pemanggilan harus pakai: masih experimental, jika error fetch dianggap error component
- cache data default  				: fetch( http: {cache:'force-cache'})
- revalidating cache(set umur cache) 		: fetch( http: next:{revalidate: 10})
- dinamic fetch  				: fetch( http: {cache:'no-store'})

---------------------------------------
contoh fetch(API):  
- kita punya halaman: /cari/page.jsx 
- di dalamnya import component lain getOrang(berisi fetching data dari api (github))
- karena detail orang ini butuh "data" tertentu maka tempatkan komponen ini di dinamic route agar bisa "menerima data"
- /cari/[nama] > page.jsx > getOrang(params:nama){fetch(url/nama)}
- import detail getOrang() di /cari/page.jsx

const async getOrang = (params:string}) => {
	const response = await fetch(`http://api.github.com/users/${params}`)
}

export default async function detailOrang( {params}:{params:{nama:string}} ){
	const data = await getOrang()
	return
	<>
		detail:{params.nama}
		<p>JSON.stringify(data)</p>
	</>
}
---------------------------------------
contoh SWR: 

?????

jenis fetch
---------------------------------------
fetch, prisma, axios, endpoin, SWR 
di prisma fetching ada beberapa keadaan sbb:

1. backend
2. frontend
3. database
4. public API

---------------------------------------
patern fetching
di dalam sebuah halaman biasanya ada beberapa fetching data, 
di next ada 3 patern: jangan lupa pakai loading.jsx
1. paralel 	: cepat(hemat waktu) karena fetch bersamaan (cekidoc) https://nextjs.org/docs/app/building-your-application/data-fetching/patterns
	const [artis,album]= await promise.all(artisData, albumData)
2. sequential 	: berurutan ambil satu2 biasa
	dasar
3. blocking 	: bikin tiap <session> component punya fetch nya sendiri 
	
styles
------------------------------------------------------
global.css 
	- /global.css > import './globals.css' di layout > css native > classname:"merah"     /'
	- /public/coba.css.module > import styles from './public.module.css' > <h1 className={styles.merah}></h1> //
	:> npm install bulma > pergi ke index.js > import {bulma} from 'bulma/css/bulma.css'
	- external css > CDN Bootstrap > copas link di layout.tsx
	- inline CSS > contoh: <div style={{margin:"12px"}}>halo</div> // pakai kutip di nilai saja
	- css in js > ini kayaknya susah
	- sass > ini juga bisa tapi kita skip dulu
	- tailwind & daisyui lihat di doc lainya disini ada 

PrimeReact
------------------------------------------------------
- https://primereact.org/

react-icons
------------------------------------------------------
new terminal :> npm install react-icons --save >
import { FaBeer } from 'react-icons/fa'; 					 		
<FaBeer /> 									


====================
agenda

- fetch, prisma, axios, endpoin, SWR 
- bikin endpoin dea afrizal
- dinamic route fahrezy dan coder media 
- studi kasus mysql ORM fahrezi, db api local media coder
- studi kasus login crud session coder media

- komponen dan data services
- deploy: fahrezy, node, public_folder, vercel
- bikin sendiri 
