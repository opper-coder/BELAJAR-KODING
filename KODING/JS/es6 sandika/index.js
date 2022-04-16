console.log("HALO LATIHAN");
// ========================================

console.log("mulai");
$.ajax({
	url : "json/siswa.json", 
	success : (sis) => { sis.forEach( m => console.log(m.nama)) }, 
	error : (e) => { console.log(e.responseText); }
});
console.log("selesai");


// LATIHAN LAINYA BOLEH HAPUS

const film = new Promise( resolve => {
	setTimeout( () => { resolve( [{judul:'avenger',sutradara:'jeff'}] ) }, 1000)
});

const cuaca = new Promise( resolve => {
	setTimeout( () => { resolve( [{kota: 'bandung', temp:28}] )}, 500)
});
// lalu kita panggil 2 promise dengan 2 cara : (yang muncul cuaca dulu baru film. meskipun di panggil belakangan)
// film.then( response => console.log(response) )
// cuaca.then( response => console.log(response) )
// --- jalankan pakai "promise.all()"
Promise.all([film, cuaca])
	// .then( response => console.log(response) ); // ini akan menampilkan 2 Promise sekaligus dalam array, kalau tampil sendiri2 pakai cara berikut:
	.then( response => {
		const [film, cuaca] = response;
		console.log(film);
		console.log(cuaca); }
		)