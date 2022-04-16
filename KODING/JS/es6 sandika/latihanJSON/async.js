/* 
MENANGANI ERROR / REJECT 
1. contoh di atas kan kalau "resolve == "true, maka hasilnya akan di tangkap oleh 
	callback "then", yaitu tempat aksi apa saja (termsuk console.log) yang akan 
	dilakukan saat "resolve true"  
2. maka pada saat pemanggilan sebaiknya chaining dengan "then dan catch", 
	maka saat "resolve = false alias reject" maka yang nangkap = adalah catch tersebut 
3. coba chaining di variabel lalu -> panggil dengan chaining,
4. dalam function pembungkus promise nya buat kan kondisi "resolve true false" 
5. sekarang akan kita gunakan try catch
// ---
bikin aplikasi pemanggil cobaPromise() pakai synchronous pakai
"try{}" pengganti "then", dan catch(){} untuk menangani resolve dan catch. 
karena pada then dan catch adalah async
dan async dan await adalah sync namun untuk nagani resolve true dan false nya pakai try dan catch 

*/

function cobaPromise(){
	const delay = 5000;
		return new Promise((resolve, reject) => {
			if( delay < 5000 ){
			setTimeout( ()=>{
			resolve("selesai")
			}, delay); } else { reject('kelamaan!'); }
		});
}
 	// 	.then(()=>{console.log(cobaAsync)})
 	// 	.catch(()=>{console.log(cobaAsync)})
async function cobaAsync(){
	try{
		const coba = await cobaPromise();
		console.log(coba);
	}
	catch(err){
		console.log(err)
		// atau pakai ini biar keren console.error(err)
	}
}
// ---
cobaAsync();
