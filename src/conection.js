const mongoose = require('mongoose');

//conexion a base de datos
mongoose.connect('mongodb://localhost/kyc')
    .then(db => console.log('Conectado a MongoDB'))
    .catch(err => console.log(err));

    
module.exports = mongoose;