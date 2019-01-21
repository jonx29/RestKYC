const express = require('express');
const Cliente = require('../models/cliente.js');
const CargoPolitico = require('../models/cargoPolitico.js');


// Creacion de un Cliente
exports.create = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "los datos del cliente estan vacios"
        });
    }
    var cliente = new Cliente(req.body);
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
        CargoPolitico.populate(cliente, { path: "cargoPolitico" }, function (err, cliente) {
            res.status(200).send(cliente);
        });
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
    Cliente.findOneAndUpdate({ 'identificacion': req.params.identificacion },
        {
            'codigo': req.body.codigo,
            'nombres': req.body.nombres,
            'apellidos': req.body.apellidos,
            'fechaNacimiento': req.body.fechaNacimiento,
            'fechaHoraRegistro': req.body.fechaHoraRegistro,
            'correoElectronico': req.body.correoElectronico,
            'nacionalidad': req.body.nacionalidad,
            'pais': req.body.pais,
            'provincia': req.body.provincia,
            'ciudad': req.body.ciudad,
            'direccion': req.body.direccion,
            //Estado Civil
            //Genero
            'identificacion': req.body.identificacion,
            //tipo identificacion
            'telefono': req.body.telefono,
            'vinculacion': req.body.vinculacion,
            'profesion': req.body.profesion,
            'referencia': req.body.referencia,
            'actividadEconomica': req.body.actividadEconomica,
            //personeria
            'cargoPolitico': req.body.cargoPolitico,
            'egresos': req.body.egresos,
            'ingresos': req.body.ingresos,
            'firma': req.body.firma
        })
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
    Cliente.deleteOne({ 'identificacion': req.params.identificacion }).then(cliente => {
        if (!cliente) {
            return res.status(404).send({
                message: "Cliente con cedula " + req.params.cedula + " no existe"
            });
        }
        res.send("Cliente eliminado correctamente");
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