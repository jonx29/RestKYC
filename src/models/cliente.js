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

    paisResidencia: String,
    provinciaResidencia: String,
    calleResidencia: String,
    callePrincipal: String,
    numCasa: Number,
    calleSecundaria: String,
    ReferenciaResidencia: String,

    numeroCel :Number,
    numeroCasa: Number,

    //Estado Civil
    estadoCivil: String,

    //Genero
    genero: String,

    //tipo identificacion
    tipoIdentificacion: String,
    identificacion: String,

    /* telefono: [{
        tipoTelefono: String,
        numero: Number
    }], */
/*     vinculacion: [{
        nombre: String,
        cargo: String
    }], */

    parentescoEmpleados: String,
    nombreEmpleados: String,
    apellidoEmpleados: String,
    paisEmpleado: String,
    fechaNacimientoEmpleado: String,

    profesion: String,
    //referencia: [{
    cedulaReferncia: String,
    apellidoReferencia: String,
    generoReferencia: String,
    paisNacimientoReferencia: String,
    estadoCivilReferencia: String,
    nombreReferencia: String,
    //  telefono: String,
    tipoReferencia: String,
    //}],

    //actividadEconomica: String,

    //personeria
    personeria: String,

    cargoPolitico: String,
    fechaInicio: Date,
    fechaFin:Date,

    egreso:Number,
    ingreso:  Number,
    firma: String
});

module.exports = mongoose.model('Cliente', Cliente);
