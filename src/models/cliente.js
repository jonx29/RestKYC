const mongoose = require('mongoose');
var Referencia = mongoose.model('referencia');
var Ingresos = mongoose.model('ingreso');
var Egresos = mongoose.model('egreso');
var CargoPolitico = mongoose.model('cargoPolitico');
var Telefono = mongoose.model('teledono');
var Vinculacion = mongoose.model('vinculacion');
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
    identificacion:String,
    //tipo identificacion
    telefono : { type: Schema.ObjectId, ref: "Telefono" },
    vinculacion : { type: Schema.ObjectId, ref: "Vinculacion" },    
    profesion: String,
    referencia : { type: Schema.ObjectId, ref: "Referencia" },
    actividadEconomica: String,
    //personeria
    cargoPolitico : { type: Schema.ObjectId, ref: "CargoPolitico" },
    egresos : { type: Schema.ObjectId, ref: "Egresos" },
    ingresos : { type: Schema.ObjectId, ref: "Ingresos" },
    firma:String

    //cargoPolitico: Array<CargoPolitico> 
});

module.exports = mongoose.model('Cliente', Cliente);
