const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Telefono = new Schema({
    tipoTelefono: String,
    numero:Number
});

module.exports = mongoose.model('Telefono', Telefono);
