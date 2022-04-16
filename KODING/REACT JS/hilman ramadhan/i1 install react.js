install react

issue:
single page app, komponen, reaksi antar komponen
cara bikin ada 2 cara yaitu bisa lewat integrasi atau full baru, semua ada di websitenya
 	- dengan include;
 	- atau dengan dengan create new react

langsung ke cara yang ke 2 yaitu dengan terminal
	- go github install react js dengan yarn atau npm (pilih saja yarn)
	- jika sudah install yarn -> create-react-app opperdashboard
	- cd opperdashboard
	- yarn start
	- maka kita akan di buatkan local server kita/ misalnya : localhost 3000
struktur folder:
	- index.html -> disini ada div dengan id="root";
	- index.js -> render app di root(di export di div di index html) di jalan kan -> app di mport dari app.js
	- app.js disini semua deklarasi html/jsx yang di jalankan
	- disini (app.js) ada komponen app :
		class App extends Component {
			render(){
				return(
						<div class = "App">
							disini menulis JSX nya
						</div>
					)
			}
		}
 
 	- lalu 
 		export default App;
 	- app.js hanya mengakses router.js
 	- router membagi navigasi dan akses/import dari pages
 	- pages import dari organism
 	- organism import dari particle
 	- particle import dari atom
	- atom import dari themestyle, props, redux   
JSX
	- kekuatan tambahan untuk javascript mirip dengan tag HTML tapi pada dasarnya dari java scrip
	- contoh:

	tulis di app.js

		const nama = "sekolah koding"; 		// kita punya sabuah variabel 
	 	<H1> HALLO {nama} </H1> 				// kita panggil dalam jsx - oya dalam jsx pemanggilan variabel,function,objec dll menggunakan kurawal

	 	reactDOM.render(element, document.getElementById('contohSatu'));

panggil di index html
		<div id="contohSatu">halo coba</div>

//======

prawito

buka vscode - new terminal masuk dulu ke folder dimana kita akan bikin project
 - cd Documents/project/opperdashboard-
 - ls // unt(msh kosong)
 - bukawebsite-doct-create a new react app
 - copas  npx create-react-app- my-app(ganti dg nama app kita)
 - enter- tunggu
 - ls
 - ada folder app kita - cd app kita-ls -
 - npm start (bagi yg sudah install node js npm sudah terintegrasi di terminal)
 - yarn start bagi byng instal yarn - tumggu dan kita akan menjumpai di browser kita - localhost 3000

PENGALAMAN SENDIRI

- instal node js cari tutorial 
	- instal node js recomended next 3x
- buka vscode - bikin folder app kita - buka di vs code - buka terminal di vscode 
- lalu cpas ini dari id reactjs->doct->creat new-> npx create-react-app my-app
- tunggu sampai selesai
- 