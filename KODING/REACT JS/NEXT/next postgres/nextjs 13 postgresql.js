Tutorial CRUD Next.js 13 dengan Join Table (Prisma + PostgreSQL)
media-coder

----------------------------------------------------------------------------------------
RINGKASAN

1. npx create-next-app@latest
2. npm i -D prisma
3. npm i @prisma/client
4. install postgresql.org
5. DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
6. go schema_prisma > model brand {}, model product {} 
7. npx prisma migrate dev
8. go to pgAdmin 
9. add new app/product/page.tsx 
10. go app/new product/page.tsx 

GET (prisma)
-------------------
11. const prisma = new PrismaClient();  import dulu ya
12. getProduct(){
		prisma.product.findMany()
	}
13. console.log(getProduct());
	
14. {product.map((product, index) => { tr>td })} 				: looping
15. <div>{product.title}</div>

POST (axios > prisma)
-------------------	
	axios.post("/api/products", { body }); 					// body dikirim via	: axios.post(url, body) 	
	---
	/api/product: 
	const POST = (request) => { 		 				// url tujuan		:  
	    prisma.product.create({ data:{} });
	}

16. DELETE (axios > prisma)
-------------------	




17. 
18. 
19. 
20. 
21. 
22. 
23. 



----------------------------------------------------------------------------------------
nextjs 13, postgresql, tailwind, daisyui, 

:> mkdir fullstack
:> cd fullstack 
:> npx create-next-app@latest --experimental-app . 	: ada titik
	- typescript :yes
	- eslint : yes
	- tailwind: yes
	- 'src/' dir : no
	- enter 
:> npm i daisyui axios
- go package.json			: cek di 	
- go tailwind.config.js 		: tambahkan & save di root{ plugins: [require("daisyui")],} 
- go app/#globals.css 			: hapus, sisakan @tailwind base, @tailwind components, @tailwind utilities
---------------------------------------
INDEX
- go page.tsx 				: hapus semua dan bikin component baru
	---
	1. rafce neme "Home" div "halo home page" hapus import react > save
	2. :> npm run dev > ada pesan typescript di vscode: allow
	3. browser: localhost:3000 > halo
:> ctrl + c 				: matikan server dulu
---------------------------------------
INSTALL PRISMA
:> npm i -D prisma 			: install dari sisi Developmen, karena nanti di server hosting sudah di sediakan kayaknya 
:> npm i @prisma/client 		: untuk client
:> npx prisma init 			: lalu init folder
- go prisma/schema.prisma 		: cek, ada tambahan file
- go .env 				: cek, ada tambahan file
- go postgresql.org > download sesuai platform dan install > nanti akan di minta password > passwor ini di gunakan untuk koneksi database
- setelah terinstal nanti di kasih pg admin(seperti php myadmin) > buka > default dikasih db bernama posgresql
---------------------------------------
KONEKSI DB
- go .env 				: DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
- ganti dengan 				: DATABASE_URL="postgresql://postgres:123456@localhost:5432/next_db?schema=public" (name (ganti postgres), password tadi yg di minta, db next_db)
---------------------------------------
MODEL DB
- go schema_prisma 			: bikin model database brand dan product (cek file)

	model Brand {							// 1. nama tabel capital
	  id       Int       @id @default(autoincrement()) 		// 2. field
	  name     String
	  products Product[]
	}

	model Product {
	  id        Int      @id @default(autoincrement())
	  title     String
	  price     Int
	  createdAt DateTime @default(now())
	  updatedAt DateTime @updatedAt
	  brand     Brand    @relation(fields: [brandId], references: [id]) // 4. relasi tabel Brand (B capital) syntax relasi dg "Brand id" 
	  brandId   Int 						// 3. bikin primary key
	}
---------------------------------------
MIGRATE
:> npx prisma migrate dev 
:> enter
	isi nama migrate : 1 	: isi dengan angka 1 
- go to pgAdmin > refreh > ada db baru next_db > schema > table > 3 table > columsn > terlihat field2nya 
- tutup saja pgAdmin karena kita hanya gunakan prisma kedepan  
- tapi bagusnya kita di kasih prisma studio untuk input data nya
- npx prisma studio 
- browser: localhost:5555 : ada dua tabel kita dan pilih brand, karena product kosongin dulu 
- go to brand > add record > nike, apple, samsung, save masing2 record tadi
- selesai, sampai disini kita tidak membutuhkan prisma studio lagi
- :> ctrl + c : matikan server
---------------------------------------
HALAMAN PRODUCT
add new app/product/page.tsx 
- bikin table crud (lihat halaman)
- gunakan class dari daisyui 
- tabel action text-center
:> npm run dev 						: jalankan
- browser: localhost:3000/product 			: maka akan terlihat tabel product 
go app/new layout.tsx 					: atur title dan children 
goto app/product/page.tsx
---------------------------------------
GET PRISMA
	-  : karena get di "page product" adalah "server component" maka kita tidak harus pakai api melainkan langsung fetch data 
	     disini pakai prismaClint, kecuali fetch data di client component, harus pakai API axios dan prismaCient (nanti)
	     di add, update, delete page component 

	import prismaClient 
	const prisma = new PrismaClient();
	getProduct(){ 				: bikin function 
		prisma.product.findMany()	: prisma di gunakan untuk get data pakai findMany (penulisan lengkapnya ada di code)
	}
	getBrands(){
		prisma.brands.findMany()
	}

	async function product(){ 		: panggil data dalam component product
		const product = await promise(getProduct);  : panggil data disini
		console.log(product);
	}

	- setelah di panggil gunakan datanya di sini
		<div>{product.title}</div> 		: data siap di gunakan

	- juga bisa dilakukan loop tabel 
		{product.map((product, index) => { tr>td })} 	: looping

CATATAN:
pemanggilan table apabila tidak ingin menampilkan semua fieldnya maka pilih yang di tampilkan saja dengan keyword select

const getProducts = async () => {
  const res = await prisma.product.findMany({
    select: { 						// pilih field yg di tampilkan saja(adafield yg tidak ditampilkan)
      id: true,
      title: true,
      price: true,
      brandId: true,
      brand: true,
    },
  });
  return res;
};

---------------------------------------
POST AXIOS > PRISMA
- new /app/products/addProduct.tsx
- rafce AddProduct 
	return .modal>.modal-box>form
	- di dalam form action di hapus di ganti dengan onSubmit={handleUpdate}
- "use client" jangan lupa kasih ini

yg terpenting karena ini client component maka data tidak bisa di kirim langsung ke db
melainkan pakai axios, jadi handleSubmit belum pakai prisma disini, 
nanti prisma di pakai di  API(routes) POST, DELETE, UPDATE  
  
  const router = useRouter(); 				// untuk (steps: 7)  

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();					// 1. cegah saat submit tidak refresh
    setIsLoading(true); 				// 2. set state, nyalakan class loading
    await axios.post("/api/products", { 		// 3. POST API pakai axios (await) yg mengarah ke folder /api/products 
      title: title, 					      (arah url ini mungkin di tangani oleh next atau router (cari tahu)) 
      price: Number(price), 				// Number konversi ts agar type data sesuai 
      brandId: Number(brand),
    }); 						// 4. POST berhasil
    setIsLoading(false); 				// 5. set stete, matikan class loading
    setTitle(""); 					// 6. kosongkan state, agar bisa di gunakan kembali nanti
    setPrice("");
    setBrand("");
    router.refresh(); 					// 7. refresh halaman ini agar bisa melihat perubahan data
    setIsOpen(false); 					// 8. state, tutup modal
  };

--------------------------------------- 
API SET TO DB
	- create /api/products/route.ts 				// create folder nama folder bebas (tp akan mempengaruhi pemanggilan), 
									   kalau nama file wajib "route.ts"

	import { NextResponse } from "next/server";  			// import (yg diperlukan) 
	import { PrismaClient } from "@prisma/client";
	import type { Product } from "@prisma/client"; 			// 6. utk keperluan anotation ts 
	const prisma = new PrismaClient();

	export const POST = async (request: Request) =>{ 		// 1. nama wajib POST, args menangkap "request body"
	    const body: Product = await request.json(); 		// 2. ambil "request body", lalu konversi ke json. 7. anotation product
	    const product = await prisma.product.create({ 		// 3. untuk menyimpan ke db pakai prisma
	        data:{ 							// 4. data body di simpan ke db
	            title: body.title,
	            price: body.price,
	            brandId: body.brandId
	        }
	    });
	    return NextResponse.json(product, {status: 201}); 		// 5. response hasil penyimpanan pakai next response 
	}

- jika udah jadi import di product/page.tsx. tempatkan komponen ini
- oya untuk select di komponent ini data di ambil dari props {brand}
- props dikirim dari page.tsx. yg di dapat dari fetch data dari prisma 
- lalu loop datanya di select 
- ok
---------------------------------------
DELETE AXIOS > PRISMA

- create app/products/deleteProduct.tsx 
- rafce deleteProducts 

	const handleDelete = async (productId: number) => {
	    setIsLoading(true);
	    await axios.delete(`/api/products/${productId}`);
	    setIsLoading(false);
	    router.refresh();
	    setIsOpen(false);
	};

- import deleteProduct di page.tsx dan taruh di td action table
- letakkan dan kirim prop={product}

---------------------------------------
API DELETE to DB








menit 44
