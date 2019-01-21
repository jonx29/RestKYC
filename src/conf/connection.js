const mongoose = require('mongoose');

//conexion a base de datos
mongoose.connect('mongodb://localhost/kycNodeJS', {
    useNewUrlParser: true
}).then(db => {
    console.log('Conectado a MongoDB');
}).catch(err => {
    console.log('No se puede conectar a la base de datos'+" "+ err);
    process.exit();
});

module.exports = mongoose;