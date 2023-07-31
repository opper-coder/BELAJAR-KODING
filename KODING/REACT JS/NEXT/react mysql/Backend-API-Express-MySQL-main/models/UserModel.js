import {Sequelize} from "sequelize";
import db from "../config/Database.js"; // koneksi

const {DataTypes} = Sequelize;

const User = db.define('users',{    	// koneksi. nama tabel 'users'
    name: DataTypes.STRING, 		// field
    email: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName:true 		// kasih parameter ini 
});

export default User; 

(async()=>{ 				// auto "create tabel users" jika belum ada
    await db.sync();
})();
