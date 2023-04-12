
PRIMEREACT
---------------------------------------------------------------------
adalah fremework react js yang kaya 

---------------------------------------------------------------------
CARA INSTALL
go: https://primereact.org/

- :> npx-nexjs-biasa  :> masuk kefolder project
- :> npm install primereact primeicons :> 
- config dasar import di _app.js > packet.json > global.css > pages> index.js dll cekidoc  
- di documentasi kita di arahkan untuk download file config dasar di github > 
- kita di kasih folder halaman config dasar pada example next.js dll > tinggal copas > cekidoc 

import { Button } from 'primereact/button'; // di halaman bersangkutan

---------------------------------------------------------------------
CARA INSTALL SAKAI TEMPLATE
go: https://primereact.org/templates/ cari sakai download

- :> npx-nexjs-biasa  :> masuk kefolder project
- kompar kedua folder di vscode: folder sakai js dan folder nexjs kita :> kopas semua folder yang di berikam sakai ke folder kita
- tapi jangan di replace langsung melaikan pilih isinya masing-masing ke folder kita, agar tidak menghapus file2 di projec kita
- kompar package.json juga gunakan dependency yang kita pelukan > lalu :> npm i :> tunggu selesai
- lalu jalankan :> npm run dev > localhost:3000 > hapus file index bawaan kita agar dipilih running index dia punya 
- kita bisa memodifikasi 
	- file index.js tersebut atau kopas dan modifikasi agar file asli tidak hilang
	- di file _app.js kita bisa pilih thema yang di perlukan

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
		- horizontal: justify-content-start, end, center, between, arround, evenly
		- flex-grow-1, 0 : mendesak kanan, kiri, kanankiri, bagi flex-none(bukan flex-1) 
		- flex-shrink-1, 0 : menyusut kanan, kiri, kanankiri, bagi flex-grow-1 
		- verical: align-content-start, end, center, between, arround, evenly
		- vertical: align-items-stretch, start, center, end, baseline. 
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
-------------------------------------------------------------------------------
lebih disarankan cekidoc
