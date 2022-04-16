ada 3 error yang kita akan coba atasi
1. seach film yang tidak ada
2. search kosong
3. url kita kasih error

-	yang kita tahu kalau kita menggunakan fetch(url).then() dan datanya "tersedia" 
	maka itu kita sebut "resolve" 
- nah yang jadi masalah adalah ketika tearjadi 3 error di atas 
	bagaimana cara mengetahui "reject" nya fetch seperti pada promise
- yang kita lakukan adalah kita cari tahu Response pada api nya,
	biasanya terdapat parameter pada REST API nya atau 
	coba akses console.log(response.Response) pada hasil fetcing nya
	response yang "pertama" adalah response dari pemberian nama kita 
	pada hasil fetch dalam then(). sedang "Response" R besar yang kedua 
	adalah Response "Key dari API OMDB" pada contoh di video
- lalu kita


