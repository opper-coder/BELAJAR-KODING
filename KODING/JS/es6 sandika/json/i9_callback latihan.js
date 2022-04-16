// latihan fetch data dari json api lainya
// latihan callback
// latihan asynchronous

/*
persiapan buka omdbapi.com / search OMDb API -> open database movie API
bootstap.com, 
jquery.com, 
aplikasi postman/insomnia
*/
/*
1. lakukan request pada omdbapi.com, dan dapatkan api key nya di email dan verifikasi, klik aktifasi API di email
2. copas api key di postman -> lalu coba searc database : key "s" value "avengers" jika jalan berarti sukses -> post man bisa di tutup
3. buat persiapan dengan 2 file index.html dan index.js
4. di html include bootstrap, jquery minified, dan index.js
	di index.html:
*/

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <title>MOVIE DB</title>
  </head>
  <body>

<div class="container">
    <div class="row">
        <div class="col success alert-primary mt-3">
            <h1>WPU MOVIE</h1>
        </div>
    </div>
    <div class="row">
      
    </div>
</div>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <script src="index.js"> console.log("ada"); </script>
  </body>
</html>

// di index.js:
// tulis ajax sbb :

$.ajax({
    url: 'http://www.omdbapi.com/?apikey=a8dfa1c0&s=avengers',
    success: result => {
    	const film = result.Search;
    	console.log(film);
    },
    error : e => { console.log(e.responseText);}
});

// dan coba console.log
// nah sekarang akan kitalakukan looping htmkl card yang di html kita looping di js
// lalu kita isi url gambar judul dll
// jika sudah coba ganti judul yang ada di url

$.ajax({
    url: 'http://www.omdbapi.com/?apikey=a8dfa1c0&s=harry potter',
    success: result => {
    	const film = result.Search;

let cards = '';
film.forEach( m => {

cards +=`<div class="col-md-4 my-3">
        <div class="card">
          <img src="${m.Poster}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
            <p class="card-text">Avenger dari tokoh fiksi yang berkumpul, bersatu melawan monster pengacau dari planet lain</p>
            <a href="#" class="btn btn-primary">Tampilkan detail</a>
          </div>
        </div>
     </div>`

});

$('.film-container').html(cards);


    },
    error : e => { console.log(e.responseText);}
});

// langkah berikutnya adalah memberi modal dari bootstrap pilih yang paling simpel aja
// lalu gunakan attribut data-toggle="modal" data-target="#filmDetail di js dan yang di html button dihapus
// tempatkan di atas scrip 2 di bawah  

<!-- awal modal -->
<div class="modal fade" id="filmDetail" tabindex="-1" aria-labelledby="filmDetailLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="filmDetailLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <!-- content -->
          <div class="container fluid">
            <div class="row">
              <div class="row-md-3">
                <img src="" class="img-fluid">
                <div class="col-md">
<ul class="list-group">
  <li class="list-group-item"><h4>AVENGERS (2016)</h4></li>
  <li class="list-group-item"><strong>Director : </strong>Aqil Atoillah</li>
  <li class="list-group-item"><strong>Actors : </strong>Doddy, eric</li> 
  <li class="list-group-item"><strong>Writter : </strong>Nofariza</li>
  <li class="list-group-item"><strong>plot : </strong><br> test</li>
</ul>   
                </div>
              </div>
            </div>
          </div>
        <!-- /content -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<!-- akhir modal -->

/// dan hubungkan file js nya seperti ini

$.ajax({
    url: 'http://www.omdbapi.com/?apikey=a8dfa1c0&s=harry potter',
    success: result => {
    	const film = result.Search;

let cards = '';
film.forEach( m => {

cards +=`<div class="col-md-4 my-3">
        <div class="card">
          <img src="${m.Poster}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
            <p class="card-text">Avenger dari tokoh fiksi yang berkumpul, bersatu melawan monster pengacau dari planet lain</p>
            <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#filmDetail">Tampilkan detail</a>
          </div>
        </div>
     </div>`

});

$('.film-container').html(cards);


    },
    error : e => { console.log(e.responseText);}
}); 

