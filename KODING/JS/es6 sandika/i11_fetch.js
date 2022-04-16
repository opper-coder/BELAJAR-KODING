// =================================== RINGKASAN ===================================
/*
fetch adalah ajax dari vanilla javascript hanya satu baris yang mengembalikan promise
jadi perlakuanya (atau callbac nya/pemanggilanya) sama dengan promise (lihat dulu promise)
yaitu di panggil pakai then dan catch
*/ 
fetch(url)
  .then(response => response.json())
  .then(json => console.log(json))
/*
  BACA BARIS DI BAWAH INI YANG PALING MEWAKILI:
1. pilih tombol search
2. berikan fungsi event click
3. di dalmnya jalankan fetch:
  a. tangkap text
  b. oper dalan fetch
  c. tangkap promise parseke jason (then1) 
  d. then(respons) hasilkan object:
    i. bungkus object ke variabel
    ii. buat wadah kosong
    iii. looping object:
      1. isi wadah kosong dengan: fungsi interface
         (fungsi interface mengkonsumsi data dari object ini)
    iv. hasil pengulangan masukan ke wadah nya di interface
*/
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function(){
  const inputKeyword = document.querySelector('.input-keyword');
  fetch('http://www.omdbapi.com/?apikey=a8dfa1c0&s=' + inputKeyword.value)
    .then(response => response.json())
    .then(response => {
          const movies = response.Search;
          let cards ='';
          movies.forEach( m => cards += showCards(m) );
          const filmContainer = document.querySelector('.film-container')
          filmContainer.innerHTML = cards;
    });
});
function showCards(m){
  return `<div class="col-md-4 my-3">
            <div class="card">
              <img src="${m.Poster}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <p class="card-text">Avenger dari tokoh fiksi yang berkumpul, bersatu melawan monster pengacau dari planet lain</p>
                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#filmDetail" data-imdbid="${m.imdbID}">Tampilkan detail</a>
              </div>
            </div>
         </div>`;
}
// ================================= /Ringkasan =================================
/*
FETCH
 adalah API yng tugasnya mengambil data secara asynchronous ((ajax) pada jquery dan vanilla) 
 dari mdn:
 fetch() adalah sebuah methode pada API javascript untuk mengambil
 "resource" dari jaringan, dan mengembalikannya sebagai "Promise"(tidak langsung json/object) 
 yang selesai (fullfilled)
 ketika ada response yang tersedia.

 fetch( resource, init ); 
 resource bisa berupa : 
 		url = alamat API yng akan di ambil request object = representasi permintaan 
    resource(objec jarang di pakai)(jadi kita bisa nyimpan object dalam resource) 
 init :
 		ini opsional = konfigurasi tambahan pada saebuah request berbentuk object
 					 = opsional, di dalamnya, kita bisa beri konfig tambahan saat kita 
             ngirim request berupa object
					 = pada praktek di sini kita tidak mengisi init nya maka yang di kirim 
             adalah request object defaultnya yaiitu GET 
					 = ada banyak method object pilihan disni seperti:
					 = method, headers, body, mode, chache, referrer, refferer police, 
             integrity, keepalive,signal

sedangkan response nya sendiri yaitu
					= hasil dari fetchnya, berupa promise
					= di dalamnya ada properti dan method "response(property, method)"
					= property ada macam2:
					= headers, ok, redirected, status, statusText, type, url, body
					= method nyua ada macam2:
					= clone(), error(), redirect(), blob(), formData(), json(), text()											

adalah object baru pada javascript yang tugasnya adalah mengambil/koneksi data secara asynchronous 
alternatif ajax.jquery dan ajax.vanilla
coba langsung kita konversi pada latihan 19 dibawah ini:
kelebihan fetch, adalah menghilangkan hell ajax(pada vanilla), namun masih native js, 
bukan library external (spt jquery)
*/
// ====================== ini sintax pakai ajax yang sebelumnya bisa di 
// abaikan dulu karena juga belum selesai latihan ==================
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=a8dfa1c0&s=Batman',
//     success: result => {
//     	const film = result.Search;

// let cards = '';
// film.forEach( m => {
// cards +=`<div class="col-md-4 my-3">
//         <div class="card">
//           <img src="${m.Poster}" class="card-img-top">
//           <div class="card-body">
//             <h5 class="card-title">${m.Title}</h5>
//             <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
//             <p class="card-text">Avenger dari tokoh fiksi yang berkumpul, bersatu melawan monster pengacau dari planet lain</p>
//             <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#filmDetail" data-imdbid="${m.imdbID}">Tampilkan detail</a>
//           </div>
//         </div>
//      </div>`

// });

// $('.film-container').html(cards);

// // ketika tombol tampilan detil di klik 
// // $('.modal-detail-button').on('click', function() {
// // 	console.log((this).data('imdbid'))
// // })

// $('.modal-detail-button').on('click', function() {
// 	$.ajax({
// 		url : 'http://www.omdbapi.com/?apikey=a8dfa1c0&i=' + $(this).data('imdbid'),
// 		success : m => { const movieDetail = `<div class="container fluid">
//             <div class="row">
//               <div class="row-md-3">
//                 <img src="${m.Poster}" class="img-fluid">
//                 <div class="col-md">
// <ul class="list-group">
//   <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
//   <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
//   <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li> 
//   <li class="list-group-item"><strong>Writter : </strong>${m.Writter}</li>
//   <li class="list-group-item"><strong>plot : </strong><br>${m.Plot}</li>
// </ul>   
//                 </div>
//               </div>
//             </div>
//           </div>`
	
// $('modal-body').html(movieDetail);

// 	},

// error : e => { console.log(e.responseText);}


// });

// });

// },
//     error : e => { console.log(e.responseText);}
// }); 

// ====================================================================
// DI ATAS ADALAH PAKAI JQUERY

// SEKARANG MENGGUNAKAN FETCH:

/*
navigasi keterangan: 
1. buat elemenya
2. add event dan function nya pakai function biasa biar bisa pakai this
3. masukan fetch dalam funtion tsb
4. bikin kan const-dom untuk nangkap input user dan pada search url = concate dengan value input
5. sampai disini sebenarnya sudah return tapi belum object(masih promis) 
   maka buat penanganana promise dengan then(menagani kalau berhasil atau gagal)
6. chain dengan then tulis saja di bawah yang di atas jangan titik koma dulu 
7. dengan keyword ini sudah return promise sebenya coba lihat di console tapi masih promise sekarang matikan dulu. lalu -
8. chain lagi dengan then. sampai disini sudah kita dapatkan data berupa object. tinggal data mau di apakan itu adalah tahapan berikutnya

*/

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function(){
  const inputKeyword = document.querySelector('.input-keyword');
  fetch('http://www.omdbapi.com/?apikey=a8dfa1c0&s=' + inputKeyword.value)
    // .then(response => console.log(response.json()))
    .then(response => response.json())
    .then(response => console.log(response));
})

// tahap penggunaan ke dalam interface

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function(){
  const inputKeyword = document.querySelector('.input-keyword');
  fetch('http://www.omdbapi.com/?apikey=a8dfa1c0&s=' + inputKeyword.value)
    // .then(response => console.log(response.json()))
    .then(response => response.json())
    .then(response => console.log(response));
})
// =============================================================================
/*
navigasi keterangan:
1. kita buatkan card berisi thumbnail film yang kita looping, dan masukan ke film container
2. kita lakukan dalam braket callback then ke dua
3. tangkap json pencarianya di var movies
4. bikin variabel kosong untuk menampung card yang akan di tumpuk menggunakan loop
5. looping movies 
6. bikin dom container wadah movies card
7. lalu dom kasi inner html dengan card
8. oya jangan lupa bikin function "showCard" nya dibawah
9. pada tahap ini sudah berhasil fetching, sekarang tinggal lakukan fetching tehap berikutnya
   yaitu ketika tombol di klik tampilkan detail movies dengan fetching data dari tempat lain yang lebih detil

BACA BARIS DI BAWAH INI:
1. pilih tombol search
2. berikan fungsi event click
3. di dalmnya jalankan fetch:
  a. tangkap text
  b. oper dalan fetch
  c. tangkap promise parseke jason (then1) 
  d. then(respons) hasilkan object:
    i. bungkus object ke variabel
    ii. buat wadah kosong
    iii. looping object:
      1. isi wadah kosong dengan: fungsi interface
         (fungsi interface mengkonsumsi data dari object ini)
    iv. hasil pengulangan masukan ke wadah nya di interface
*/
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function(){
  const inputKeyword = document.querySelector('.input-keyword');
  fetch('http://www.omdbapi.com/?apikey=a8dfa1c0&s=' + inputKeyword.value)
    .then(response => response.json())
    .then(response => {
          const movies = response.Search;
          let cards ='';
          movies.forEach( m => cards += showCards(m) );
          const filmContainer = document.querySelector('.film-container')
          filmContainer.innerHTML = cards;
    });
});
function showCards(m){
  return `<div class="col-md-4 my-3">
            <div class="card">
              <img src="${m.Poster}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <p class="card-text">Avenger dari tokoh fiksi yang berkumpul, bersatu melawan monster pengacau dari planet lain</p>
                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#filmDetail" data-imdbid="${m.imdbID}">Tampilkan detail</a>
              </div>
            </div>
         </div>`;
}
/*
TAHAP MODAL:
1. masih di dalam then nya kita bikin modal: saat tombol di klik tampilkan modal detil filem
2. bikin dom untuk semua button
3. lalu add listener pada masing tombol dengan foreach, pada callback addlistener coba consol(this) lihat di consol apakah udah merujuk pada masing2 objec
4. namun sekarang yang kita butuhkan adalah url data API tadi maka yang keywordnya bukan "s" tapi yang pakai "i": (coba periksa di akhir url) 
5. kita bikin const yang merujuk pada this tadi yang berisi data set => console log => coba klik tombolnya dan lihat di consol
6. sekarang tinggal fetch . berhasil ..
*/
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function(){
  const inputKeyword = document.querySelector('.input-keyword');
  fetch('http://www.omdbapi.com/?apikey=a8dfa1c0&s=' + inputKeyword.value)
    .then(response => response.json())
    .then(response => {
          const movies = response.Search;
          let cards ='';
          movies.forEach( m => cards += showCards(m) );
          const filmContainer = document.querySelector('.film-container')
          filmContainer.innerHTML = cards;
// ketika tombol dikli;
    const modalDetailButton = document.querySelectorAll('.modal-detail-button');
    modalDetailButton.forEach(btn => {
      btn.addEventListener('click', function(){
        // console.log(this);
        const imdbid = this.dataset.imdbid;
        // console.log(imdbid);  
        fetch('http://www.omdbapi.com/?apikey=a8dfa1c0&i=' + imdbid)
          .then( response => response.json())
          .then( m => {
            const filmDetail = showFilmDetail(m);
            const modalBody = document.querySelector('.modal-body');
            modalBody.innerHTML = filmDetail;
          })

      } )
    })
    });
});
function showCards(m){
  return `<div class="col-md-4 my-3">
            <div class="card">
              <img src="${m.Poster}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <p class="card-text">Avenger dari tokoh fiksi yang berkumpul, bersatu melawan monster pengacau dari planet lain</p>
                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#filmDetail" data-imdbid="${m.imdbID}">Tampilkan detail</a>
              </div>
            </div>
         </div>`;
}
function showFilmDetail(m){
  return `<div class="container fluid">
            <div class="row">
              <div class="row-md-3">
                <img src="${m.Poster}" class="img-fluid">
                <div class="col-md">
<ul class="list-group">
  <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
  <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
  <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li> 
  <li class="list-group-item"><strong>Writter : </strong>${m.Writer}</li>
  <li class="list-group-item"><strong>plot : </strong><br>${m.Plot}</li>
</ul>   
                </div>
              </div>
            </div>
          </div>`;
}
// ============================= RINGKASAN ===============================

// ============================ /RINGKASAN ===============================