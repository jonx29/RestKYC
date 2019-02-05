//const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//coneccion a MongoDB
var mongoose = require('./conf/connection');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//inicializacion del servidor
app.set('port', process.env.PORT || 8090);
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});

//servicios de alumno
require('./services/clienteService')(app);

// pagina de inicio
app.get('/', (req, res) => {
    res.json({ "message": "Pagina Principal: Cliente" });
});
