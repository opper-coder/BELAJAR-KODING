vocher 489956

PRIMEREACT 
---------------------------------------------------------------------
adalah fremework reactjs yang kaya 

---------------------------------------------------------------------
CARA INSTALL DI REACT
go: https://primereact.org/

- :> npx-createReactApp-biasa  :> masuk kefolder project react
- :> npm install primereact primeicons primeflex :> 
- config dasar import di _app.js > packet.json > global.css > pages> index.js dll cekidoc  
- di documentasi > installation > nextjs > kita di arahkan untuk download file config dasar di github > 
- kita di kasih folder halaman config dasar pada example next.js dll > tinggal copas > cekidoc 
- tapi jika mau manual maka import 4 hal wajib di index.js:
	- primereact, primeicon, primeflex, thema, 

import { Button } from 'primereact/button'; // import komponen di halaman bersangkutan
<Button label="Submit" /> 					// gunakan. attribut, prop, event, cekidoc

---------------------------------------------------------------------
CARA INSTALL SAKAI TEMPLATE DI NEXTjs
go: https://primereact.org/templates/ cari sakai download
---------------------------------------------------------------------
SEDERHANANYA untuk nextjs:
- download
- extact
- masuk ke folder > buka terminal > :> code . (buka di vscode)
- buka package.json > buang package yg tidak perlu > oya nextjs harus ada di sana ya (kalau chartjs ganti dengan apex)
	- prettier nanti dulu manual
- jalan kan instal di terminal :> npm i
- lalu buatlah folder komponenmu dan page kamu di app atau pages sesuai ketentuan nextjs
---------------------------------------------------------------------
- install nextjs biasa :> npx-nexjs :> masuk kefolder project nextjs > pakai js tidak typescript > coba running index.js > hentikan > next steps 
- download sakai di https://primereact.org/templates/ > SAKAI > pilih yang js saja
- compare > buka folder project kita di vscode > buka juga folder SAKAI di vscode jg > letakan berdampingan side by side
- sakai kanan project kiri > di sakai kita di kasih 5 folder > pindahkan semua ke project kita > pastikan jangan sampai ada replace dg folder kita
- kalau folder demo jangan di ambil file2 tersebut (di root dan styles) 
- compare package.json > gunakan dependency yang kita perlukan dari sakai > lalu :> npm i :> tunggu selesai
- lalu jalankan :> npm run dev > localhost:3000 > hapus file index bawaan kita agar dipilih running index yg SAKAI punya > hapus atau rename index nextjs

- kita bisa memodifikasi 
	- file index.js tersebut atau kopas dan modifikasi agar file asli tidak hilang
	- sidebar dan topbar bisa di modif di layout
	- kita bisa pilih thema yang di perlukan di > public/themes > juga pilah di layout/images/themes > 
		- banyak themes hasil copas dari node.module/primereact/resource/themes  
	- modifikasi import theme di layout/App/Config.js
	- untuk mengganti theme tinggal jalankan di tombol: PrimeReact.changeTheme > pelajari sendiri ya cara triggernya > cekidoc
	- untuk next yang masih menggunakan pages sudah jalan bagus tidak perlu penyesuaian  
	- kalau atau next versi src maka harus copas pages ke src > pelajari saja (soal penempatan componen )>

- penggunaan css menggunakan primeflex CSS cekidoc mirip dengan bootstrap 
- sebagaimana HTML layout sama dg flex dan grid. terlebih dahulu bikin layout dengan flex ataun GRID
- kemudian gunakan komponen yang disediakan oleh PRIME 
- kalau Prime tidak menyediakan 
- responsive sm: hidden. breakpoint : sm, md, lg, xl. 
- tips: desain untuk mobile first, dengan: sm:w-full, sm:hidden.(ini yang akan terjadi pada smartphone) ada nilai default layar besar
	- cara nulisnya kebalik yaitu nilai default di layar besar, kemudian responsive di tulis belakangan
	- tapi saat desain layout harus memperhatikan yang di HP dulu
	- perubahan yang sering di buat responsive adalah
		- sm:hidden, block 
		- sm:text-sm
		- sm:w-full  
		- sm:row-gap-1

Praktek
-------------------------------------------------------------------------------
- import component sebelum penggunaan 
- prop, event, atribut. ada di dokumentasi asli

LAYOUTING
-------------------------------------------------------------------------------
- margin padding
	- m, -m, p, mt, b, r, l, y, x 
	- m-1, 0-8,
	- p-auto : khusus padding bisa auto alias center 
sizing:
	- w-full,
	- full, auto, screen,
	- min-w-0, full, auto, screen, w-min, w-max(= max-content)
	- w-1, 1-12, 1rem - 30rem
	- h mirip, kecuali h-1 - 12 pakai h-1rem 
	- min-w, min-h, max-h beda cekidoc
border
	- border-1, none, 1-3
	- border-x-1, border-y-1
	- border-top-1, t, r, b, l

	- border-solid, dashed, dotted, double
	- border-500, 0,50,200,300-900
	- border-red-500
	- border-white, transparent, surface-border

	- border-noround
	- border-round-xs, round, xs, sm, md, lg, xl, 1xl, 2xl, 3xl, circle
	- border-round-top-xs

shadow
	- shadow-none, 1-8
	- opacity-0, kelipatan 10-100

display
	- flex
	- grid
	- block
	- inline
	- inline-block
	- inline-flex
	- hidden

layout
	- flex
		- flex-row, flex-column
		- flex-1, flex-auto, flex-none
	- alignment
		- flex-column, row-reverse
		- flex-wrap mirip word-wrap jika melebihi batas lebar parent
		- align horizontal: justify-content-start, end, center, between, arround, evenly
		- flex-grow-1, 0 : mendesak kanan, kiri, kanankiri, bagi flex-none(bukan flex-1) 
		- flex-shrink-1, 0 : menyusut kanan, kiri, kanankiri, bagi flex-grow-1 
		- align vertical: align-content-start, end, center, between, arround, evenly
		- align vertical: align-items-stretch, start, center, end, baseline. 
		- align-self-auto, start, center, end, stretch, baseline
		- flex-gap-1, row-gap-0, 0-8,: mirip margin
	- column 12 grid, 
		- jadi wrap auto jika melebihi 12 kolom 
		- .grid>.col 
		- .grid>.col-6.col-3.col-3
		- .grid>.col-fixed style="width:100px".col (auto)
		- .grid>.col-4+col-offset-2 
		- .grid>.col+grid-nogutter // belum tahu 

position:
	static, relative, absolute, fixed, sticky
	top-auto, 0, 50, 100

TRANSITION, TRANSFORM, ANIMATION
-------------------------------------------------------------------------------
Transition	: adalah, animasi saat perpindahan, hover, klik, cont: tombol, accordion, modal dll
Transform	: adalah, move, resize, rotate, skew 
Animation	: adalah, kondisi awal, endpoint, endpoint, dst

Transition
	- transition-none, all(semua trans), colors(hanya warna), transform(hanya ransform)
	- transition-duration-100, 150, 200-500, 1000-3000
	- butuh 4 class, contoh: .transition-colors .transition-duration-100 .bg-red-500 .hover:bg-yellow-500  
	- kalau mau: transition-linear, ease-in, out, in-out
	- kalau mau: transition-delay-100, 150,200,300,400,1000
Transform
	- translate-x-0, 100 (sejauh 100% dari tempat aslinya), -translate-y-100
	- translate-y-0, 100 (sejauh 100% dari tempat aslinya)
	- origin-center: center, top, l,r,b, tr, tb, dst. berpindah AS dari tempat aslinya
	- rotate-90: 90, -90, 180, -180 
Animation

DI BAWAH ADA TAMBAHAN
-------------------------------------------------------------------------------
- typografi
	- semua ada disana
- interactifity
	- pointer
	- user select
	- focus inputtext
	- dll













