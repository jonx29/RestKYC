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
    estadoCivil:String,

    //Genero
    genero:String,

    //tipo identificacion
    tipoIdentificacion:String,

    identificacion: String,
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
        telefono: String,
        tipoReferencia: String
    }],
    actividadEconomica: String,

    //personeria
    personeria:String,
    
    cargoPolitico: [{ descripcion: String }],
    egreso: [{
        valor: Number,
        descripcion: String
    }],
    ingreso: [{
        valor: Number,
        descripcion: String
    }],
    firma: String
});

module.exports = mongoose.model('Cliente', Cliente);
