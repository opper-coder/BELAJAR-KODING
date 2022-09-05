/* DESTRUCTURING DATA
	- punya kumpulan data seperti?: array dan obj
	- lalu kita ingin memecah/mebongkar/unpack menjadi variabel yang terpisah?
	daftar isi:
		- array > variabel 			-> bongkar array jadi variabel variabel		
		- object > variabel			-> bongkar object jadi variabel variabel
		- skip items unpack array		-> skip saat bongkar
		- swap items unpack			-> tukar nilai
		- function array > variabel		-> bongkar array dari func 
		- assignmen tanpa declaration		-> bikin variabel banyak sekaligus pakai object
		- assign dengan ...rest object baru	-> bikin variabel banyak sekaligus pakai object dg ...rest
		- assign dengan ...rest array baru	-> bikin variabel banyak sekaligus pakai array dg ...rest
		- assign dg nama beda (nama alternatif)	-> bikin variabel banyak sekaligus dan replace nama var
		- push properti				-> bikin variabel banyak sekaligus pakai object, dan tambahkan dari luar obj
		- push properti dan langsung ganti nama	-> bikin variabel banyak sekaligus pakai object, dan tambahkan dari luar obj, langsung replace nama
		- destructuring return array 		-> mirip item ke2
		- destructuring return object		-> mirip item ke2 jg
		- destructuring object argument		-> oper parameter pakai object defaultnya di bongkar
		- destructuring object bersarang	-> oper parameter pakai object bersarang
		*/

/* array >> variabel */
	const cobaArray = ['satu', 'dua', 'tiga'];
	const [a, b, c] = cobaArray;  	// di masukkan sesuai urutan
	console.log(b, c, a);

/* object >> variabel */
	const cobaObject = {d :'empat', e : 'lima', f : 'enam'};
	const {d, e, f} = cobaObject;	// di masukkan sesuai key
	console.log(f, e, d);

/* skip items unpack array */
	const cobaArray = ['satu', 'dua', 'tiga'];
	const [a, , c] = cobaArray;		// kalau tidak di assign kosongin aja setelah koma
	console.log(b);	

/* swap items unpack */
	let a = 1;
	let b = 2;
	console.log(a);	// sebelum
	[a, b] = [b, a];		
	console.log(a);	// swap

/* function array >> variabel */
	function iniObject(){ return [1, 2, 3]; } 
	const [a, b, c] = iniObject();
	console.log(a);

/* assignmen tanpa declaration */
	({keytiga, keydua, keysatu} = {keysatu : 'empat', keydua : 'lima', keytiga : 'enam'}) // ({assign} = {obj})
	console.log(keydua)

/* assign dengan ...rest object baru */
	({keysatu, ...resq} = {keysatu : 'empat', keydua : 'lima', keytiga : 'enam'})	// rest variabel: resq. (dr object array kay masih kepake)
	console.log(keysatu)
	console.log(resq)
	console.log(resq.keydua)

/* assign dengan ...rest array baru */
	([keysatu, ...values] = ['empat', 'lima', 'enam'])	// rest variabel: values(dr array)
	console.log(keysatu)
	console.log(values)

/* assign dg nama beda (nama alternatif) */
	({keytiga: ada, keydua: apa, keysatu: asa} = {keysatu : 'empat', keydua : 'lima', keytiga : 'enam'}) // 'nama key di ganti: nama baru '
	console.log(apa)

/* push properti */
	const cobaObject = {keysatu : 'empat', keydua : 'lima', keytiga : 'enam'};
	const { keysatu, keydua, keytiga, keyempat = "haloo" } = cobaObject; // push satu properti lagi
	console.log(keyempat);

/* push properti dan langsung ganti nama */ 
	const cobaObject = {keysatu : 'empat', keydua : 'lima', keytiga : 'enam'};
	const {keysatu, keydua, keytiga, keyempat : salam = "haloo bandung"} = cobaObject;
	console.log(salam);

/* destructuring return array */
	function kalkulasi(a, b) { return [ a + b, a * b, a / b, a - b ]; } // func return array
	const [juml, kal] = kalkulasi(3, 4) 	// destructuring model ini: [] = array
	console.log(kal);
	console.log(juml);

/* destructuring return object */
	function kalkulasi2(a, b) {
		return { 							// func return object
			tambah : a + b,
			kali : a * b,
			bagi : a / b,
			kurang : a - b 
		};
	}
	const {kali, bagi} = kalkulasi2(3, 4);	// destructuring model ini: [] = object

	/* destructuring return object */
		const {kali, bagi, kurang, tambah, modulus = "tidak ada"} = kalkulasi2(3, 4);
		console.log(tambah);
		console.log(modulus);

/* object parameter untuk di oper. destructuring object argument */
	function salam({nama, alamat}){ return `halo nama saya ${nama} alamat saya ${alamat} jaya...` }
	const biodata = {nama : "izza", alamat : "banggai"}
	console.log(salam(biodata))

/* destructuring object bersarang */
		const biodata = {nama : "izza", alamat : { kab : "banggai", kec : "nuhon" }}
		function salam({nama, alamat : {kab, kec}}){ return `halo nama saya ${nama} alamat saya kabupaten ${kab} kecamatan ${kec} raya` }
		console.log(salam(biodata));


// Cursor pembahasan ------>>>>>> ------>>>>>> ------>>>>>> ------>>>>>> ------>>>>>> 
