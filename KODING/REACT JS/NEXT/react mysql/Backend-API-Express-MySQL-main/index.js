import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express(); 					// pakai express
app.use(cors()); 						// akses api dari luar
app.use(express.json()); 					// agar bisa menerima data json
app.use(UserRoute); 						// agar url dapat di akses sesuai folder

app.listen(5000, ()=> console.log('Server up and running...')); // bikin port server
