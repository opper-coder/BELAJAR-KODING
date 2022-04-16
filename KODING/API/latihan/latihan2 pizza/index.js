console.log("BELAJAR REST API PIZZA");

// lakukan ajax jquery dasar ke json lalu looping pakai each

let card;

//--- ajax
$.getJSON('pizza.json', function(hasil){
    let result = hasil.menu;
    $.each(result, function(i,data){
        $('#daftar-menu').append(`
        <div class="col-md-4"><div class="card mb-3" style="width: 18rem;">
            <img src="img/pizza/${data.gambar}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${data.nama}</h5>
                    <p class="card-text"> ${data.deskripsi}</p>
                    <h5 class="card-title">${data.harga}</h5>
                    <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                    </div>
            </div>
        </div>
        `);
    })
});
//--- nav link aktiv dan pindah aktiv
$('.nav-item').on('click', function(){
        // hapus semua aktiv
    $('.nav-item').removeClass('active');
        // pindahkan aktiv
    $(this).addClass('active');
        // ambil tulisan di html kategori
    let kategori = $(this).html();
    $('h1').html(kategori);
        // saat di klik kategori maka tampilkan semua kontent yang kategorinya sesuai 
    $.getJSON('pizza.json', function(data){
        let menu = data.menu;
        let content = '';

        $.each(menu, function(i, data){
            if(data.kategori == kategori.toLowerCase()){
                content += `
                <div class="col-md-4"><div class="card mb-3" style="width: 18rem;">
                    <img src="img/pizza/${data.gambar}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.nama}</h5>
                            <p class="card-text">${data.deskripsi}</p>
                            <h5 class="card-title">${data.harga}</h5>
                            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                            </div>
                    </div>
                </div>
                `;
            }
        })

        $('#daftar-menu').html(content);

    })
})
//---

