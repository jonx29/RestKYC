const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Egreso = new Schema({
    valor:Number,
    descripcion: String 
});

module.exports = mongoose.model('Egreso', Egreso);
