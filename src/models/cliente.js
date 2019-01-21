const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Cliente = new Schema({
    codigo: Number,
    nombres: String,
    apellidos: String,
    fechaNacimiento: Date,
    fechaHoraRegistro: Date,
    correoElectronico: String,
    nacionalidad: String,
    pais: String,
    provincia: String,
    ciudad: String,
    direccion: String,
    //Estado Civil
    //Genero
    identificacion: String,
    //tipo identificacion
    telefono: [{
        tipoTelefono: String,
        numero: Number
    }],
    vinculacion: [{
        nombre: String,
        cargo: String
    }],
    profesion: String,
    referencia: [{
        nombre: String,
        telefono: String
    }],
    actividadEconomica: String,
    //personeria
    cargoPolitico: [{ descripcion: String }],
    egresos: [{
        valor: Number,
        descripcion: String
    }],
    ingresos: [{
        valor: Number,
        descripcion: String
    }],
    firma: String
});

module.exports = mongoose.model('Cliente', Cliente);
