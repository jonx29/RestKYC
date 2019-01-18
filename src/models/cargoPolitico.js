const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CargoPolitico = new Schema({
    descripcion: String 
});

module.exports = mongoose.model('CargoPolitico', CargoPolitico);