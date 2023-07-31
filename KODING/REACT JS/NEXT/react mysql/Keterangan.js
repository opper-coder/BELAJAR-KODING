FULLSTACK REACT CRUD MYSQL

Tutorial LENGKAP CRUD dengan Node JS, Express, React JS, dan MySQL (Full Stack)
oleh: media coder
-------------------------------------------------------------------------------

instalasi dan konfig
------------------- 
:> node -v
:> npm -v
:> mkdir FULLSTACK
:> cd FULLSTACK
:> mkdir backend
:> cd backend
:> npm init -y
:> npm i express mysql2 squelize cors 
	- express 					: framework nodejs 
	- mysql2 					: mysql client 
	- sequelize 					: ORM (object relational mapping)(pembentuk db, tabel dll)(komunikasi db)
	- cors 						: API dapat di akses dari luar domain kita
go package.json 					: cek dan config 
	{"type": "module"} 				: add 
	{"main": "index.js"}				: entry point 
add /index.js 						: (cekifile) di dalamnya koneksi ke express dan server, ada cors dan route 
:> npm i -g nodemon 					: install nodemon secara global bisa di pakai semua project
:> npm nodemon -v 					: cek nodemon		
:> nodemon index  					: jalankan index.js
install xampp, running, browser, phpmyadmin		: create db dg nama "crud_db"

BACKEND
-------------------------------------------------------------------------------
backend kita bangun dengan nodejs msql2 dan Sequelize
add /backend/config/Database.js 			: (cekifile) conn db "crud_db", dg Sequelize 
add /backend/models/UserModel.js 			: (cekifile) im conn, struktur tabel, create tabel dg sequalize.define, (eksekusi di MySQL) 
add /backend/controller/UserController.js 		: (cekifile) im tabel, fungsi getUsers() getUsersById() createUser() updateUser() deleteUser() 
add /backend/routes/UserRoute.js 			: (cekifile) im express, ambil express.Router(), import semua fungsi controller, bikin endpoint, 
- (parameter db) Database.js :
	const db = new Sequelize('crud_db','root','',{ host: 'localhost', dialect: 'mysql' });
- (tabel) UserModel.js:
	const User = db.define('users',{ name, email, gender, });
- (bikin query) UserController.js:
	export const getUsers     = async(req, res) => { try { User.findAll() } catch () {} }		: ambil "data tabel user"
	export const getUsersById = async(req, res) => { try { User.findOne({id}) } catch () {} }	: ambil "data tabel user"
	export const createUsers  = async(req, res) => { try { User.create(req.body) } catch () {} }	: kirim data ke "tabel user"
	export const updateUsers  = async(req, res) => { try { User.update(req.body{id}) } catch () {} }: ubah data ke "tabel user"
	export const deleteUsers  = async(req, res) => { try { User.destroy({id}) } catch () {} }	: hapus data ke "tabel user"
- (bikin endpoint) UserRoute.js: 
	router.get('/users', getUsers); 		// endpoint, panggil query.
	router.get('/users/:id', getUserById); 		// endpoint, panggil query, WHERE id
	router.post('/users', createUser); 		// endpoint, panggil query, POST body
	router.patch('/users/:id', updateUser); 	// endpoint, panggil query, PATCH body, WHERE id
	router.delete('/users/:id', deleteUser); 	// endpoint, panggil query, DELETE WHERE id
- go index.js 
	import UserRoute from "./routes/UserRoute.js"; 	// import UserRoute
	app.use(UserRoute);  				// gunakan sebagai middleware 

rest client
-------------------
- install restclient vscode  				// tool penguji API (by huachao mao)
- add & go /request.rest  				// file restclient (hanya untuk uji, hapus jika sudah)
	GET http://localhost:5000/users  		// ketik endpoint API GET
	klik link "send request" 			// dapat empty array, respon: 200, sukses
- add & go /request.rest  				// uji API restclient 
	###
	GET http://localhost:5000/users/1  		// ketik endpoint API GET, dengan kirim parameter id
	klik link "send request" 			// dapat empty array, respon:200, sukses, 
- add & go /request.rest  				// uji API restclient 
	###
	POST http://localhost:5000/users  		// ketik endpoint API POST
	Content Type: aplication/json 			// type
	{ 						// body 
		"name": "john Doe",
		"email" : "john@gmail.com",
		"gender": "male"
	} 

	klik link "send request" 			// dapat empty array, respon:200, sukses, ada pesan"..."
	klik link "send request" pada GET 		// dapat data sekarang  
- add & go /request.rest  				// uji API restclient 
	###
	UPDATE http://localhost:5000/users/1   		// ketik endpoint API UPDATE parameter id
	Content Type: aplication/json 			// type
	{ 						// body 
		"name": "john Doe2", 			// ubah
		"email" : "john2@gmail.com",
		"gender": "male"
	} 

	klik link "send request" 			// dapat empty array, respon:200, sukses, ada pesan"..."
	klik link "send request" pada GET 		// dapat data sekarang berubah  

- add & go /request.rest  				// uji API restclient 
	###
	DELETE http://localhost:5000/users/2   		// ketik endpoint API DELETE parameter id
-------------------
workflow:
	1. instalasi dan config
	2. db dan conn
	3. tabel 
	4. controller tabel 
	5. endpoint API 
	6. restclient
-------------------

FRONTEND
-------------------------------------------------------------------------------
frontend akan kita bangun dengan reactjs

:> mkdir frontend
:> cd frontend 
:> npm i react-router-dom axios bulma 
:> npm start
- browser: localhost:3000
- go /src/app.css  					: hapus file
- go /src/app.test.js 					: hapus file
- go /src/index.css 					: hapus file
- go /src/logo.svg 					: hapus file
- go /src setupTest.js 					: hapus file
- app.js, index.js 					: sisa 2 file, config (cekidoc) css bulma di import disini





intinya di dalam adalah pengguaan state, axios, navigate
const [users, setUsers] = useState[]
const getUsers = () => { axios, setUsers }

axios.get(`http://localhost:5000/users/`)
axios.get(`http://localhost:5000/users/${id}`)
axios.post("http://localhost:5000/users", { name, email, gender, });
axios.patch(`http://localhost:5000/users/${id}`, { name, email, gender, });
axios.delete(`http://localhost:5000/users/${id}`);

import useNavigate 					: penggunaan navigate import dulu
navigate = useNavigate() 				: variabel berisi function
navigate("/"); 		 				: jalankan variabel redirect ke home





lumayan jelas tinggal teruskan jika mau
-------------------------------------------------------------------------------
menit ke 16 