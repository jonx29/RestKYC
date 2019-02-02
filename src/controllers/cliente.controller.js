const express = require('express');
const Cliente = require('../models/cliente.js');


// Creacion de un Cliente
exports.create = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "los datos del cliente estan vacios"
        });
    }
    var cliente = new Cliente({
        'codigo': Math.floor((Math.random() * 1000) + 1),
        'nombres': req.body.nombres,
        'apellidos': req.body.apellidos,
        'fechaNacimiento': req.body.fechaNacimiento,
        'fechaHoraRegistro': req.body.fechaHoraRegistro,
        'correoElectronico': req.body.correoElectronico,
        'nacionalidad': req.body.nacionalidad,
        'pais': req.body.pais,
        'provincia': req.body.provincia,
        'ciudad': req.body.ciudad,
        'paisResidencia': req.body.paisResidencia,
        'provinciaResidencia': req.body.provinciaResidencia,
        'calleResidencia': req.body.calleResidencia,
        'callePrincipal': req.body.callePrincipal,
        'numCasa': req.body.numCasa,
        'calleSecundaria': req.body.calleSecundaria,
        'referenciaResidencia': req.body.referenciaResidencia,
        'numeroCel': req.body.numeroCel,
        'numeroCasa': req.body.numeroCasa,
        'estadoCivil': req.body.estadoCivil,
        'genero': req.body.genero,
        'tipoIdentificacion': req.body.tipoIdentificacion,
        'identificacion': req.body.identificacion,
        'parentescoEmpleados': req.body.parentescoEmpleados,
        'nombreEmpleados': req.body.nombreEmpleados,
        'apellidoEmpleados': req.body.apellidoEmpleados,
        'paisEmpleado': req.body.paisEmpleado,
        'fechaNacimientoEmpleado': req.body.fechaNacimientoEmpleado,
        'profesion': req.body.profesion,
        'cedulaReferncia': req.body.cedulaReferncia,
        'apellidoReferencia': req.body.apellidoReferencia,
        'generoReferencia': req.body.generoReferencia,
        'paisNacimientoReferencia': req.body.paisNacimientoReferencia,
        'estadoCivilReferencia': req.body.estadoCivilReferencia,
        'nombreReferencia': req.body.nombreReferencia,
        'tipoReferencia': req.body.tipoReferencia,
        'personeria': req.body.personeria,
        'cargoPolitico': req.body.cargoPolitico,
        'fechaInicio': req.body.fechaInicio,
        'fechaFin': req.body.fechaFin,
        'egreso': req.body.egreso,
        'ingreso': req.body.ingreso,
        'firma': req.body.firma
    });
    cliente.save()
        .then(cliente => {
            res.send(cliente);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error al ingresar Cliente nuevo."
            });
        });
};

// Muestra de todos los clientes
exports.findAll = (req, res) => {
    Cliente.find({}, function (err, cliente) {
        res.status(200).send(cliente);
    });
};

// Muestra de un solo cliente
exports.findOne = (req, res) => {
    Cliente.findOne({ 'identificacion': req.params.identificacion }).then(cliente => {
        if (!cliente) {
            return res.status(404).send({
                message: "Cliente con cedula " + req.params.identificacion + " no existe"
            });
        }
        res.send(cliente);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Cliente con cedula " + req.params.identificacion + " no existe"
            });
        }
        return res.status(500).send({
            message: "Error al encontrar a cliente con cedula " + req.params.identificacion + " " + err
        });
    })
};

// Actualizacion de datos del alumno
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "los datos del cliente estan vacios"
        });
    }
    Cliente.findOneAndUpdate({ 'identificacion': req.params.identificacion }, req.body)
        .then(cliente => {
            if (!cliente) {
                return res.status(404).send({
                    message: "Cliente con cedula " + req.params.cedula + " no existe"
                });
            }
            res.send("Cliente modificado correctamente");
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Cliente con cedula " + req.params.cedula + " no existe"
                });
            }
            return res.status(500).send({
                message: "Error al modificar al cliente con cedula " + req.params.cedula + " " + err
            });
        })
};

// Eliminacion del cliente
exports.delete = (req, res) => {
    Cliente.deleteOne({ 'identificacion': req.params.identificacion }).then(clienteBorrado => {
        if (!clienteBorrado) {
            return res.status(404).send({
                message: "Cliente con cedula " + req.params.cedula + " no existe"
            });
        }
        res.status(200).json({
            ok: true,
            cliente: clienteBorrado
        });
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Cliente con cedula " + req.params.cedula + " no existe"
            });
        }
        return res.status(500).send({
            message: "Error al eliminar al cliente con cedula " + req.params.cedula + " " + err
        });
    })
};


//SERVICIOS PEDIDOS POR LOS GRUPOS
//solo devolver código, nombres, apellidos, cedula y correo electrónico (clientes/identificacion)
exports.findOneCli = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "los datos del cliente estan vacios"
        });
    }
    Cliente.findOne({ 'identificacion': req.params.identificacion }, ['codigo', 'nombres', 'apellidos', 'identificacion', 'correoElectronico']).then(cliente => {
        if (!cliente) {
            return res.status(404).send({
                message: "Cliente con cedula " + req.params.identificacion + " no existe"
            });
        }
        res.send(cliente);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Cliente con cedula " + req.params.identificacion + " no existe"
            });
        }
        return res.status(500).send({
            message: "Error al encontrar al cliente con cedula " + req.params.identificacion + " " + err
        });
    })
};

//solo devolver código, nombres, apellidos y cedula (prestamo/identificacion)
exports.findOnePres = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "los datos del cliente estan vacios"
        });
    }
    Cliente.findOne({ 'identificacion': req.params.identificacion }, ['codigo', 'nombres', 'apellidos', 'identificacion']).then(cliente => {
        if (!cliente) {
            return res.status(404).send({
                message: "Cliente con cedula " + req.params.identificacion + " no existe"
            });
        }
        res.send(cliente);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Cliente con cedula " + req.params.identificacion + " no existe"
            });
        }
        return res.status(500).send({
            message: "Error al encontrar al cliente con cedula " + req.params.identificacion + " " + err
        });
    })
};

//solo devolver código, nombres, apellidos y firma (firma/identificacion)
exports.findOneFir = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "los datos del cliente estan vacios"
        });
    }
    Cliente.findOne({ 'identificacion': req.params.identificacion }, ['codigo', 'nombres', 'apellidos', 'firma']).then(cliente => {
        if (!cliente) {
            return res.status(404).send({
                message: "Cliente con cedula " + req.params.identificacion + " no existe"
            });
        }
        res.send(cliente);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Cliente con cedula " + req.params.identificacion + " no existe"
            });
        }
        return res.status(500).send({
            message: "Error al encontrar al cliente con cedula " + req.params.identificacion + " " + err
        });
    })
};