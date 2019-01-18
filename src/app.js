const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

//conexion a base de datos
mongoose.connect('mongodb://localhost/kyc')
.then(db=> console.log('Conectado a MongoDB'))
.catch(err => console.log(err));


//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('models', path.join(__dirname, 'models'));

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
//rutas

//conexion al servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});