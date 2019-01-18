//const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//coneccion a MongoDB
var mongoose = require('./connection');

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('models', path.join(__dirname, 'models'));

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//conexion al servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});

//servicios - rutas
var clienteService = require('./services/clienteService');

//POST
app.use(bodyParser.json());
app.use('./services/clienteService', clienteService);