RINGKASAN DOM
-------------------------------------------------------------------------------
- TAHAPAN 
	SELEKSI > PERUBAHAN > EVENT (trigger)
- pengganti console.log di halaman html:
	document.write("<p>Tutorial Javascript!</p>");
	document.write("<p style = color:blue; >Tutorial Javascript!</p>");
- untuk operasi dom ini bisa langsung di tulis di console halaman bersangkutan
===============================================================================
DOM SELECTOR: dalam kurung wajib pakai '' atau ""
const coba  = document.getElementById('asa')		// contoh sederhana
const coba2 = document.getElementsByTagName('p')[2]; 	// wajib pakai index, kalau langsung chain			
const coba3 = document.getElementsClassName('ada')[2];	// wajib pakai index, kalau langsung chain
const coba4 = document.querySelector('#ada');		// no index. bisa untuk id, class, html. (pakai seleksi CSS)
const coba5 = document.querySelectorAll('.asa')[0];	// wajib pakai index, kalau langsung chain (pakai seleksi CSS)
-------------------------------------------------------------------------------
// ONCLICK
saat kita punya function di JS, panggil pada button html tambah attribut <onClick="func()"> 
-------------------------------------------------------------------------------
// SELECTOR JAMAK : 
- pilih banyak sekaligus tidak bisa, melainkan pakai perulangan
- bikin dulu banyak p > buat jalan kan function tombol onclick="jalankan()" 
	  function jalankan() {
	        const tulisan = document.getElementsByTagName('p');	// akan diambil length nya 'no index'
	        for (var i=0; i < tulisan.length ; i++) {		// loop style pada element p
	            tulisan[i].style.color = 'blue';
	        }
	   }
-------------------------------------------------------------------------------
// CSS
coba.style.color = 'red';				// chain dalam variabel
document.getElementById('h1').style.color = 'red';	// langsung dan chain
-------------------------------------------------------------------------------
// MENGISI ISI HTML 
const nama = 'aqil'
coba.innerHTML  = `<p>${nama}</p>`; 
// --- alternative
document.getElementById('h1').innerHTML = 'haloo';	// cara ini juga boleh
coba.href = "data/img/gb1.jpg";		
-------------------------------------------------------------------------------
// BACA ISI ELEMEN:
coba.length		// jumlah 'coba' yang dipilih (jika banyak htmlcollection)(juml elemen html sejenis)
coba.innerText		// dibaca oleh js
coba.textContent	// 
-------------------------------------------------------------------------------
===============================================================================
MANIPULATION ELEMEN
menangani class, membaca isi, style CSS, mengani attribut
	- Tulis HTML		: coba.innerHTML = '<p>sebuh paragraf</p>';	// sifatnya menimpa apapun di dalamnya
	- baca HTML 		: coba.innerText				// bisa di console
				  coba.textContent				// kalu perlu simpan di var
				  coba.length
	- CSS			: coba2.style.backgrounColor ='red';		// sifatnya menimpa (chammelCase)
	- Tulis Attribute	: coba3.setAttribute('name','sandhika');	// nambah atribut "name"
	- Baca Attribute	: coba4.getAttribute('href');			// membaca isi attribut "href"
	- Hapus Attribute	: coba5.removeAttribute('href');    		// menghapus sebuah atribut (href)
	- classlist	(bisa di lakukan di attribute tapi ini perlakuan khusus class supaya gak menimpa sebelumnya)
		- add()		: coba6.classlist.add('label');			// tambah class = label
		- remove()	: coba7.classlist.remove('label'); 		// hapus class = label
		- toggle()	: coba8.classlist.toggle('label');		// kalau punya kelas dia akan hapus dan sebaliknya
		- item()	: coba9.classlist.item(2);			// baca class pada index(2). jika punya banyak class
		- contains()	: coba10.classlist.contains('label');		// adakah class bernama label ???
		- replace()	: coba11.classlist.replace('label','tabel');	// ganti class 'label' jadi 'tabel'
-------------------------------------------------------------------------------
MANIPULATION NODE
bikin, tambah, hapus, replace, child node, isi konten text 
	- Bikin node <p>	: const baru = document.createElement('p'); 	// langkahnya buat dulu 'wadah' di document sebuah <p>
				  const textBaru = document.createTextNode('isi paragraf');
				  						// lalu buat lagi di document 
				  						   sebuah tulisan untuk 'isi' <p> nantinya
	  baru.appendChild(textBaru);						// masukkan isi kedalam wadah
	  coba1.appendChild(baru)						// posisikan ke dalam html(dalam akhir div a umpamanya)
	- document.createTextNode();
	- node.appendChild();		//
	- node.insertBefore();		// ul.insertBefore(liBaru,li2)		// kita tangkap dulu masing2 'ul', 'liBaru', 'li2' 
										// (ul=parent, liBaru=element baru, li2=li yang sudah ada untuk 
										//	diletakaan sebelunya[before])lakukan pakai seleksi;
	- parentNode.RemoveChild();	// sectionA.removeChild(link)		// "sectionA" dan "link" harus di seleksi dulu pake seleksion
	- parentNode.replaceChild();	// sectionB.replaceChild(link,pBaru)	// ambil parentnya lalu repacechild(NodeBaru,noodeLama) 
										   tentunya 'panggil dan buat' dulu elemen2 nya

yang baru hampir mirip fungsinya namun masih alpha

	parent.append()
	parent.prepend()
	child.after()
	child.before()
	child.remove()
	child.replaceWith()
===============================================================================
EVENT
cara mendengarkkan kejadian dalam DOM:
baik terjadi oleh user atau API
event ada: click, hover, roler, double click, right click disebut 
di bawah ini ada 3 cara :
- Event handler 
	- attribut HTML 		// on<event> onClick, onHover dll, lihat sub judul bagian eventlist
	- elemen methode		// contoh di bawah
- addEventListener()
ada keunggulan dan karakter nya masing2
----------------------------------------
contoh event handler:
- event Handler
 	<p onClick='ubahwarna()'>	// di HTML attribut: onClick="funAksi()" dan di js bikin fungsi aksinya 
 	p2.onclick = ubahwarna;		// di javascript saja: seleksi.onclick = funAksi <tanpa kurung supaya tidak langsung tertrigger sendiri>
 					   sedang funAksi nya buat juga di atas atau di bawahnya terserah
----------------------------------------
- addEventListener('click', callback)	
	p4.addEventListener('click', function(){ // select.addEventListener('<event>', callback){aksi dengan menipulation dll};
					alert(ok);
				     });
	
// perbedaan handler vs listener = 
   - handler 		= saat dua kali hndler di jalan kan akan di eksekusi yang terakhir, tidak memperdulikan sebelumnya
   - addEvenListener 	= dua dua nya di jalankan
// ada banyak event silahkan lihat di documentasi terkait dg trigger mouse, keyboard, API dll
===============================================================================
event list

setidaknya ada beberapa kategori:
- mouse
- keyboard
- resource
- view
- focus 
- form
- CSS animation, transition event
- drag and drop event
- dll 

baca di w3s sangat menarik contoh dan trik
ada banyak di daftar 
??????????????????????????????

















===============================================================================
/*
DOM hilman

Interface javascript untuk html: memanipulasi, mengubah struktur html meliputi:

- Html
- Atribut
- teks 
- css
  dll
-------------------------------------------------------------------------------
DAFTAR PELAJARAN

- Dom selection 
- dom manipulasi 
- dom transversal 
- event handling
-------------------------------------------------------------------------------
DOM TREE

- mulai dari html - head - body - h1 - p1 - a - dll disebut simpul (node)
- yang paling atas disebut root.
- Atas html ada root dokumen

Tipe node:
- elemen(HTML)
- atribut
- teks(apa yg di input usr)  
Banyak tipe node tapi pelajaran hanya konsentrasi pada tiga di atas. 
atribut sendiri sudah hampir dihapus oleh javascript karena sudah menyatu dengan elemen
-------------------------------------------------------------------------------
MEMBEDAKAN "NODELIST" DAN "HTML COLLECTION"

- node 				= Jika kita memilih satu node tipe apa saja
- node list 		= memilih lebih dari 1 node tipe apa saja
- html collection 	= memilih lebih dari satu node dengan tipe dokumen

Perbedaan ini diperlukan untuk menangani pengelolaan

Sifat-sifat node vs html collection
- keduanya adalah merupakan kumpulan node
- strukturnya mirip array
- html collection bersifat live sedang nodelist tidak, berguna saat manipulasi dom
-------------------------------------------------------------------------------
STRUKTUR HIRARKI DOM

- ROOT NODE = dokumen
- PARRENT NODE
- CHILD
- Grand parent
- Ansestor
- Sibling
Tapi yang dibutuhkan hanya 3 di atas
-------------------------------------------------------------------------------
DOM SELECTION

.getElementById()				return: satu elemen html
.getElementsByTagName()			return: html collection
.getElementsClassName()			return: html collection
.querySelector()				return: satu elemen html
.querySelectorAll()				return: node list
-------------------------------------------------------------------------------
CARA TANGKAP NYA:
'document' bisa di ganti dengan parent lain 

const coba 	= document.getElementById('h1')
const coba2	= document.getElementsByTagName('p')[2];				
const coba3	= document.getElementsClassName('ada')[2];	
const coba4	= document.querySelector('#ada')					// ('section#a #ada')
const coba5	= document.querySelectorAll('.asa')     			// ('div#a .asa')

selector css bisa pake specificity pake spasi pake 				div:nth-child(2)

/////////////////cari di css??????????
-------------------------------------------------------------------------------
DOM MANIPULATION
-MANIPULLATION ELEMEN

dalam contoh di bawah ini menggunakan selection di atas 
	-innerHTML;			// coba.innerHTML = '<p>sebuh paragraf</p>';// sifatnya menimpa
	-style;				// coba2.style.backgrounColor ='red';		// sifatnya menimpa
	-setAttribute;		// coba3.setAttribute('name','sandhika');	// nambah atribut
	-getAttribute;		// coba4.getAttribute('href');				// membaca isi attribut href
	-removeAttribute;	// coba5.removeAttribute('href');    		// menghapus sebuah atribut
	-classlist								// perlakuan khusus class supaya gak menimpa
		-add()		// coba6.classlist.add('label');		// tambah class = label
		-remove()	// coba7.classlist.remove('label'); 	// hapus class = label
		-toggle()	// coba8.classlist.toggle('label');		// on/off class = label
		-item()		// coba9.classlist.item(2);				// melihat nama class ke dua jika pada 
											// element tersebut punya lebih dari satu class
		-contains()	// coba10.classlist.contins('label');			// nanya adakah class bernama label?
		-replace()	// coba11.classlist.replace('label','tabel');	// ganti class 'label' jadi 'tabel'
-------------------------------------------------------------------------------
// -MANIPULATION NODE

// dalam contoh di bawah ini menggunakan selection di atas
	-document.createElement();	//const pBaru = document.createElement('p');   						// langkahnya buat dulu 'wadah' di document sebuah <p>
								// const textPBaru = document.createTextNode('isi paragraf');	// lalu buat lagi di document sebuah tulisan untuk 'isi' <p> nantinya
								// pBaru.appendChild(textPBaru);									// masukkan isi kedalam wadah
								// coba1.appendChild(pbaru)										// posisikan ke dalam html(dalam akhir div a umpamanya)
	-document.createTextNode();	//
	-node.appendChild();		//
	-node.insertBefore();		// ul.insertBefore(liBaru,li2)		// kita tangkap dulu masing2 'ul', 'liBaru', 'li2' 
																								// (ul=parent, liBaru=element baru, li2=li yang sudah ada untuk 
																								//	diletakaan sebelunya[before])lakukan pakai seleksi;
	-parentNode.RemoveChild();	// sectionA.removeChild(link)		// "sectionA" dan "link" harus di seleksi dulu pake seleksion
	-parentNode.replaceChild();	// sectionB.replaceChild(link,pBaru)	// ambil parentnya lalu repacechild(NodeBaru,noodeLama) tentunya 'panggil dan buat' dulu elemen2 nya

					// yang baru hampir mirip fungsinya namun masih alpha

parent.append()
parent.prepend()
child.after()
child.before()
child.remove()
child.replaceWith()


/*
-EVENT
cara mendengarkkan event atau :
sebuah kejadian yg terjadi dalam DOM oleh user atau API
event ada: click, hover, roler, double click, right click disebut 
di bawah ini ada 3 cara : 
	"attribut HTML", 
	"method onclick", 
	"function". 
ada keunggulan dan karakter nya masing2
*/

function ubahWarna (){}																			// buat dulu sebuah function

-event Handler				// 
 	-inline html attribute 	// <p onclick='ubahwarna()'	>	//  jangan di pakai	// menulis event di 'html' langsung dan menjalan kan function  yang ada di 'js' yg di buat terlebih dahulu
 	-element methode 		// p2.onclick = ubahwarna;				// p2 nya di pnggil duu pake selection lalu.onclick = lalu function tapi tidak pake kurung ini di 'js'
-addEventListener			// p4.addEventListener('click', function(){		// p4 nya panggil dulu via selection
									alert(ok);
									});
	
// ringkasan event : seleksi dulu elemen > masukaan ke method even > jalankan function
// perbedaan handler vs listener = handler bersifat menimpa sedang listener menambah
// ada bayak event silahkan lihat di documentasi terkait dg mouse keyboard API dll
