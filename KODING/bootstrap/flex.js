=====================================================================================================
FLEX
-----------------------------------------------------------------------------------------------------
.d-flex		          // aktifkan
.d-sm-flex		      // aktifkan dg responsive
.d-inline-flex	 	  // flex juga inline
.d-sm-inline-flex   // kombinasi dg responsive
-----------------------------------------------------------------------------------------------------
Direction dan responsive
.flex-row           
.flex-row-reverse   
.flex-column        
.flex-column-reverse  
.flex-sm-row        
.flex-sm-column-reverse 
-----------------------------------------------------------------------------------------------------
Alignmen Row / baris horizontal
.justify-content-start  : start,end,center,arround,between,evenly
.justify-content-sm-start : // ada responsive
Alignmen flex-column-reverse / kolom vertikal
.align-item-start       : start,end,centre,baseline,stretch
.align-item-sm-start    : // responsive
-----------------------------------------------------------------------------------------------------
Self Align / kolom vertikal
- di lakukan pada masing-masing item yang di bungkus dengan container .d-flex
.align-self-start       : start,end,center,baseline,stretch
.align-self-sm-start    : // responsive
-----------------------------------------------------------------------------------------------------
Fill / row baris dalam flex
- akan membagi baris 'sesuai panjang' konten dan membagi sisanya secara 'sama' 
.flex-fill
.flex-sm-fill
-----------------------------------------------------------------------------------------------------
grow dan shrink 1 atau 0 dalam flex
.flex-grow-1   // menggunakan semua ruang yang 'tersedia', dan membiarkan dua item flex lainnya menggunakan ruang yang 'diperlukan' (beda sama fill)
.flex-shrink   // kemampuan item fleksibel untuk menyusut jika perlu. dan membiarkan item lain mengambil sisanya
-----------------------------------------------------------------------------------------------------
Margin auto dalam flex
.me-auto  // margin right auto
.ms-auto  // left
.mt-auto  // top    (tes2 aja nanti salah persepsi)
.mb-auto  // bottom
-----------------------------------------------------------------------------------------------------
wrap(beda dengan responsive: sesuai break point, wrap: sesuai kebutuhan) dan bisa responsive
.flex-nowrap        // default
.flex-wrap          // bisa jatuh kebawah tanpa responsive sesuai kebutuhan
.flex-wrap-reverse  // balik urutan
.flex-sm-wrap       // dengan responsive
.flex-sm-wrap-reverse
-----------------------------------------------------------------------------------------------------
Order urutan dalam flex
.order-1        // 0-5
.order-sm-0     // responsive
.order-first    // first, last
.order-sm-last  // responsive
-----------------------------------------------------------------------------------------------------
align conten
sejajarkan flex bersamaan dalam containaer dg 'start,end,center,between,arround,stretch'
tidak berlaku jika hanya satu batis
.align-content-start      // coba periksa di atas (justify-content)
.align-content-sm-start   // responsive
-----------------------------------------------------------------------------------------------------
Objec Media
ada cara meletakkan gambar dan mendesak tulisan kayak di word tapi lihat sendiri cara kerjanya di dokumentasi
-----------------------------------------------------------------------------------------------------
