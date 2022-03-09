require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();

let server = http.createServer(app);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// calling the controllers to the server
app.use(require('./controllers/index'));

const publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));

// IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');
const URLDB = "mongodb+srv://GersonSEGA:root123@cluster0.cmtby.mongodb.net/TISW_Project?retryWrites=true&w=majority";
const client = new MongoClient(URLDB, { useUnifiedTopology: true });
client.connect(err => {
    if (err) {
        throw err;
    }

    console.log(`Base de Datos ONLINE`);
});

server.listen(process.env.PORT, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);

});

/*mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {

    if (err) {
        throw err
    }

    console.log(`Base de Datos ONLINE`);

});*/