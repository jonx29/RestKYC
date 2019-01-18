const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Vinculacion = new Schema({
    nombre: String,
    cargo: String 
});

module.exports = mongoose.model('Vinculacion', Vinculacion);
