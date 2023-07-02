sumber: programming di rumahrafif fetch vs axios


FETCH DASAR DAN AXIOS
daftar isi
---------------------------------------------------------------------
		-> 
		-> 
		-> 

1. 		
---------------------------------------------------------------------
fetch();													// basic
fetch(url); 												// args method GET
fetch(url,{});												// args methode LAINYA

2. 
---------------------------------------------------------------------
fetch().then()  											// hanya menghasilkan readable stream, parameter status request
fetch().then().then()	 									// .then(pertama, conversi json masih promise:reject,resolve) .then(kedua, ambil data json)

3. 
---------------------------------------------------------------------
fetch().then(()=>{ bool ? ok : else }) 						// handle error memanfaatkan promise, dengan then catch

4. 
---------------------------------------------------------------------
konsep untuk menjalankan fetch kita harus jalankan di server oleh karena itu:
	- buat halaman HTML halo coba fetch() > runing di liveserver vscode 
	- ambil data dari 

5. 
---------------------------------------------------------------------
let url = 'http://reqres.in/api/users'; 						
fetch(url + '/1'); 											// basic1
fetch('http://reqres.in/api/users/1'); 						// basic2

fetch().then()  											// basic promise
fetch('http://reqres.in/api/users/1')
	.then((response) => console.log(response)); 			// then untuk ambil response > tapi masih berupa object parameter request (status, ok, url dll) (nama arg bebas)

fetch().then().then() 										// basic data object
fetch('http://reqres.in/api/users/1') 						// best practice
	.then((response) => response.json()); 					// body berbentuk readable stream konversi ke object, konversi ada .json(), .blob(), .text(). tapi masih dlm bentuk promise
	.then((data) => console.log(data)); 					// kalau mau ambil data nya .then() lagi. nama argument bebas
															// fetch().then(konversi dan promise).then(data bukan promise) 
															// sampai sini sudah jalan
	.catch((err) => console.log(err)) 						// .catch langsung tangkap error jg boleh -> tapi best practice error handling ada di bawah

fetch().then().then().catch() 								// basic error
fetch('http://reqres.in/api/users/1') 						// best practice2
	.then((response) => response.json()); 					
	.then((data) => console.log(data)); 					
	.catch((err) => console.log(err)) 						// langsung chain tangkap error promise:reject

6. Handle Error 404 atau promise: reject
---------------------------------------------------------------------
fetch('http://reqres.in/api/users/1') 						// .then() pertama bisa mengembalikan response ok:true, selain resolve, reject
	.then((response) => {  									// cek bool
		if(response.ok){
			console.log("ada data");
		}else{
			console.log("tidak ada data"); 
		}
	});

fetch('http://reqres.in/api/users/1') 
	.then((response) => { 
		if(response.ok){
			return response.json(); 						// return json
		}else{
			return Promise.reject("ada yang tidak sesuai")  // return Promise reject
		}
	});
	.then((data) => console.log(data));
	.catch((err) => console.log('error' + err));

7. handle error dengan status melebihi satu 404, 402, 400 dll
---------------------------------------------------------------------
fetch('http://reqres.in/api/users/1')
	.then(() => { 											// .then() pertama, kembalikan ok:true atau promise, 
		if(response.ok){ 									// bool atau Promise bisa kita manffatkan untuk cek
			return response.json();
		}else{
			return Promise.reject({
				status: response.status 					// di else kita ambil status
			}); 
		}
	});
	.then((data) => console.log(data)); 					// .then() kedua. ambil data
	.catch((err) => {  										// .catch() adalah pengambil peran saat reject
		if( err.status == 404 ){ 				 			// kondisi status			
			console.log("Data tidak di temukan") 
		}
	});

8. POST
---------------------------------------------------------------------
fetch('http://reqres.in/api/users', { 						// id url, hapus > parameter kedua {object method}
	method: 'post',
	header:{
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({ nama: "aqil", alamat: "saiti" })
})
	.then((response) => response.json()); 					// saat kita then kita bisa tahu responya
	.then((data) => console.log(data)); 					// bisa di console hasil sending nya
													
9. PUT
---------------------------------------------------------------------
	- id harap di hapus pada URL karena yang kita kirimkan belum memiliki ID
	- sama dengan post tapi ganti methode nya PUT > data replace nya taruh di body
	- sifatnya replace > data lama apapun akan di ganti dengan data yang baru

10. PATCH
---------------------------------------------------------------------
	- sama dengan PUT > tinggal ganti methode
	- sifatnya menambal yang belum ada saja, atau replace yang bersangkutan saja

11. DELETE 
---------------------------------------------------------------------
	- sama dengan POST dengan id URL > tidak mengirimkan body  

AXIOS
---------------------------------------------------------------------
 	- kita perlu install dulu :> npm i axios > atau :> npm install axios 
	- atau pakai CDN

---------------------------------------------------------------------
let url = 'http://reqres.in/api/users';
axios.get(url +'/1') 
	.then((data) => console.log(data.data)) 				// langsung berupa data object
	.catch((err) => console.log(err)) 						// saat di errorkan misal url dg id=x maka ada tampil error, beda dg fetch tidak tampil error meski detile nya ada 
axios.post(url,{ nama: "aqil", alamat: "saiti" }) 			// untuk post sangat mudah cukup berbeda dg post pada fetch()
	.then((data) => console.log(data.data))


KESIMPULAN
---------------------------------------------------------------------
axios adalah third party tapi lebih mudah disisi:
- kelemahanya dia third party sehingga install dulu. sedang fetch() adalah native
- pada GET lebih pendek. saat then sudah langsung di konversi ke data
- jika salah pada url GET langsung di tampilkan errornya, sedang fetch harus ada if else lebih panjang
- pada post juga sangat mudah beda jauh soal banyak nya kode
- patch sepertinya mudah jg tp belum ada disini, delete apa lagi paling mudah





