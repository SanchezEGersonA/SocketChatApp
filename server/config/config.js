require('dotenv').config({ path: "../server/.env" });
/*****************************************************
 * PUERTO
 *****************************************************/
process.env.PORT = process.env.PORT || 3000;

/*****************************************************
 * ENTORNO
 *****************************************************/
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/*****************************************************
 * BASE DA DATOS
 *****************************************************/
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/censure_project';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

/*****************************************************
 * VENCIMIENTO DEL TOKEN
 *****************************************************/
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

/*****************************************************
 * SEED DE AUTENTICACION
 *****************************************************/
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';