import {Sequelize} from "sequelize";

const db = new Sequelize('crud_db','root','',{ 	// pakai conn sequelize 'database','user','pass',{ 'server','dbms' }
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
