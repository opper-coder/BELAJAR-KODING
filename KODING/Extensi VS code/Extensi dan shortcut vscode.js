tambahka -> menu extensi -> cari dan install

------------------------------------------------------
1. ES7/React/Redux/GraphQl/React-Native snippets- by: dsznajder atau pakai di bawah ini
   - ES7/react/Redux/GraphQL/RN snippets
   jika belum hafal snippets -> ctrl + shift + p -> es7 -> snippets search -> tampil daftar
2. ESLint
   - menstandarkan "" / '' outo, titik koma, otomatis ada maka di setting sebelumnya
3. Prettier - merapikan otomatis 
   - config: setting > search: format on save > true (ctrl+, (koma) > user > texteditor > formatting > format on save > true)  
   - buat file di root project: .vscode/settings.json (pakai dot) > buka > copas script ini (di ambil dari halamn prettier extentions > Default Formatter)
   lalu save. maka sudah bisa di gunakan saat save merapikan auto
   {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
   }

4. Bracket Pair Colorizer-
   mewarnai kurawal, kurung kotak, bulat sesuai warna
5. Color Hightlight- preview warna di text editor
6. path intellisense - tinggal tulis ./ sudah ada suggestion
7. gitLens-saat di hover kita akan lihat siapa yang mengerjakan
8. code time-caranya ctrl + shift + p: > code time - > dashboard
angga rizki
9. js css html formater dari lonefi = Prettier
10. live-server dari ritwich dey = html server hot reload
11. Rest CLIENT = pengganti postman, yaitu request HTTP API bahkan di backend halaman local. 
    contoh penggunaanya ada di 
12. bulma snippet > ada banyak trigger misal hero, nav bar, dll menginspirasi
13. auto rename tag (jun han) nulis tag dan edit auto penutup nya
------------------------------------------------------
1. cara menghapus element
import yang tidak terpakai
option + shift + o // o atau nol

tambahan:
    - live server
    seach install vscode extension > open klik kanan with liveserver > stop live server
    enak saat saat save sudah berubah tanpa refresh 
    Plugin Live Server ini bisa digunakan untuk menjalankan local web server, 
    sehingga kita bisa mengakses kode web JavaScript kita menggunakan domain localhost
    - live preview
    search -> install -> open klik kanan show preview 
    alternative dari microsaoft dia lebih baik karena tanpa buka browser karena sudah include 
    dengan vs code, dan tanpa save 
    
    - theme: mayukai
    bagus bikinan indonesia

------------------------------------------------------    
shortcut vs code
tools
   - buka folder project ke vscode via terminal
      buka terminal > super + t / ctrl + alt + t :> cd folder tujuan > ls > .code
   - ctrl+` atau bisa ctrl+j   : terminal. `
   - ctrl+,             : setting vscode, misalnya aktifkan formatter on save
   - ctrl+k+s           : daftar shortcut
text
   - ctrl+shift+p       : ketik uppercase
   - ctrl+shift+p       : ketik lower
   - ctrl+shift+p       : camel
   - ctrl+shift+p       : title case
cursor
   - alt+shift+arrow    : tambah cursor keyboard
   - alt+klik           : tambah cursor mouse
   - ctrl+enter         : enter cursor tanpa jatuhkan baris 
   - ctrl+shift+enter   : cursor naik diatasnya dan bikin baris kosong
   - : home, end 
pindah baris
   - alt+arrow          : pindah baris
   - ctrl+alt+shift     : duplicate
   - ctrl+x             : cut line(empty selection)
   - ctrl+c             : copy line(empty selection)
   - ctrl+delete        : hapus satu kata
   - ctrl+shift+k       : hapus satu baris
selection
   - ctrl+d             : seleksi satu kata di cursor > kalau berulang seleksi kata yang sama
   - ctrl+l             : selecsi satu baris di cursor > kalau berulang seleksi baris berikutnya
Navigasi folder
   - ctrl+shift+e       : membuka file sidebar
   - ctrl+p > nama file : mencari file dari folder2 kita di sidebar
   - ctrl+p > ctrl+shift+o > @nama     : mancari method, variabel, array, obj dll dalam halaman bersangkutan saja
   - ctrl+p+t > #nama   : mancari method, variabel, array, obj dll dalam semua halaman dalam project bahkan dalam framework
   - ctrl+p > :15       : menuju kebaris 15
   - ctrl+tab           : pindah tab
butuh riset lagi dengan vscode> help > keyboard shortcut reference

TIPS EMMET
----------------------------
- cara bikin child 	: section>row
- bikin perkalian	: section>row*3
- bikin gruping		: (section>row*3)*2
- bikin table ada: child, kali gruping, sibling
			: table>(thead>tr>th*4)+(tbody>tr>td*4)
- bikin form 		: form:post.box>input:text.input*3+button

