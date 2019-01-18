const express = require('express');
const app = express();
const router = express.Router();
var Cliente = require ('../models/cliente');

//Ingreso de los clientes
router.route('/ingresarCliente').post(function (req, res) {
    const cliente = new Cliente(req.body);
    cliente.save()
      .then(cliente => {
      res.status(200).json({'cliente': 'Cliente ingresado correctamente'});
      })
      .catch(err => {
      res.status(400).send("No se pudo ingresar correctamente");
      });
  });

module.exports = router;