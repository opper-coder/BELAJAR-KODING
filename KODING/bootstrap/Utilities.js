UTILITIES
-----------------------------------------------------------------------------------------------------------------------
BACKGROUND DAN COLOR
  - lihat langsung disana ada gradiens
  - bg-primary
-----------------------------------------------------------------------------------------------------------------------
BORDER
  - border-top = bottom,start,end
  - border-top-0 
  - border border-<color> > border border-primary
  - border-1 = 1-5 size
  - rounded 
  - rounded-0 = 0-3 size
  - rounded-top = bottom, start, end, circle, pill
-----------------------------------------------------------------------------------------------------------------------
TEXT COLOR
  .text-primary
-----------------------------------------------------------------------------------------------------------------------
DISPLAY
.d-none                     // cara menambahkan display
none,block,inline,inline-block,grid,table,table-cell,table-row,flex,inline-flex
.d-md-block                 // display dengan responsive breakpoint
sm, md, lg, xl, dan xxl.
.d-none .d-sm-block         // kombinasi: sembunyikan hanya di sm: 
                            // sembunyikan/tampilkan  hanya di <display tentukan> ada tabel kombinasi di dokumentasi
.d-print-inline             // bahkan hanya tampilkan sembunyikan saat di printer 
-----------------------------------------------------------------------------------------------------------------------
FLOAT
.float-start :start,end,none // untuk mendorong elemen ke sisi kanan kiri atau hapus
.float-sm-start             // responsive
-----------------------------------------------------------------------------------------------------------------------
INTERACTION mouse dan klik
- saat di klik text
- oiya ini hanya berlaku pada mause tidak untuk keyboard harus di tangani dengan disabled HTML
  .user-select-all          // saat paragraf di klik maka akan terseleksi seluruh paragraf
  .user-select-auto         // saat di klik paragraf maka yang terseleksi 1 kata
  .user-select-none         // tak bisa di seleksi sedikitpun
- link saat di klik
  .pe-none                  // link tidak dapat diklik
  .pe-auto                  // default nya bisa di klik
  .pe-none>.pe-auto         // saat container .pe-none maka inheriten pd child kecuali di batalkan oleh .pe-auto 
----------------------------------------------------------------------------------------------------------------------
OVERFLOW
  - .overflow-auto = hidden, visible, scroll
-----------------------------------------------------------------------------------------------------------------------
POSISION
- tersedia posision juga di boot strap silahkan lihat dokumentasi
- posision-absolut : static, relatif, fixed, sticky
-----------------------------------------------------------------------------------------------------------------------
SHADOW
.shadow : shadow-none, sm,lg, .shadow-sm-inset
-----------------------------------------------------------------------------------------------------------------------
SIZING
.w-25 : 25, 50, 75, 100, auto       // lebar %
.h-25 : 25, 50, 75, 100, auto       // 
.mh-100                             // max-height 100
.wh-100                             // 
.vw
.vh
-----------------------------------------------------------------------------------------------------------------------
SPACING
.mt     : t,b,s,e,x,y
.p
.ps-2   : 0-5, auto
.mt-n1  // negatif
-----------------------------------------------------------------------------------------------------------------------
TEXT
.text-start : start, center, end    // aligment
.text-sm-start                      // responsive
.text-wrap
.text-nowrap
.text-break                         // wrapping di 'tengah' kata ATAU afferflow-wrap juga bisa
.text-lowercase : uppercase, capitalize
.fs-1           : 1-6               // efek sama dg h1-6, tapi h1 bisa di beri efek .fs <h1 class="fs-4">coba1</h1>
.fw-bold        : bold,bolder,normal,light,lighter, // bold
.fst-italic     : italic, normal    // italic
.lh-1           : 1, sm, base, lg   // line-hight, kerapatan jarak baris 
.font-monospace                     // monospace
.text-muted     : text-reset        // matikan text button, text-reset (biar sudah di muted link akan biru maka beri 'reset') 
.text-decoration-underline          // underline
.text-decoration-line-through       // through
.text-decoration-none               // hapus
-----------------------------------------------------------------------------------------------------------------------
VERTICAL ALIGN
Ubah perataan elemen pada flex dan grid sudah ada. nah aligmen ini hanya berlaku pada:
elemen sebaris, blok sebaris, tabel sebaris, dan sel tabel
.align-baseline : baseline, top, middle, align-bottom, align-text-bottom, align-text-top
-----------------------------------------------------------------------------------------------------------------------
VISIBILITY
visibility ini tidak mempengaruhi display dan masih menempati ruangan
.visible : .invisible
-----------------------------------------------------------------------------------------------------------------------
gap grid
.gap-3  : 0-5, auto
-----------------------------------------------------------------------------------------------------------------------
ICON

-----------------------------------------------------------------------------------------------------------------------
FONT FAMILY


_______________________________________________________________________________________________________________________
