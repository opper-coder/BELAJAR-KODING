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