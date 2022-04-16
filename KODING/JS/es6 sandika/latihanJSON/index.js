$.ajax({
    url: 'http://www.omdbapi.com/?apikey=a8dfa1c0&s=Batman',
    success: result => {
    	const film = result.Search;


/*
// card kosong
// ulang array = card += element
// panggil parent. isi carg
*/





let cards = '';
film.forEach( m => {

cards +=`<div class="col-md-4 my-3">
        <div class="card">
          <img src="${m.Poster}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
            <p class="card-text">Avenger dari tokoh fiksi yang berkumpul, bersatu melawan monster pengacau dari planet lain</p>
            <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#filmDetail" data-imdbid="${m.imdbID}">Tampilkan detail</a>
          </div>
        </div>
     </div>`

});

$('.film-container').html(cards);

// ketika tombol tampilan detil di klik 
// $('.modal-detail-button').on('click', function() {
// 	console.log((this).data('imdbid'))
// })

$('.modal-detail-button').on('click', function() {
	$.ajax({
		url : 'http://www.omdbapi.com/?apikey=a8dfa1c0&i=' + $(this).data('imdbid'),
		success : m => { const movieDetail = `<div class="container fluid">
            <div class="row">
              <div class="row-md-3">
                <img src="${m.Poster}" class="img-fluid">
                <div class="col-md">
<ul class="list-group">
  <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
  <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
  <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li> 
  <li class="list-group-item"><strong>Writter : </strong>${m.Writter}</li>
  <li class="list-group-item"><strong>plot : </strong><br>${m.Plot}</li>
</ul>   
                </div>
              </div>
            </div>
          </div>`
	
$('modal-body').html(movieDetail);

	},

error : e => { console.log(e.responseText);}


});

});

},
    error : e => { console.log(e.responseText);}
}); 


// video menit 29