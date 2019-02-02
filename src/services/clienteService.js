module.exports = (app) => {
  const cliente = require('../controllers/cliente.controller.js');

  // Creacion de un cliente
  app.post('/cliente', cliente.create);

  // Muestra de todos los cliente
  app.get('/cliente', cliente.findAll);

  // Muestra de un solo cliente
  app.get('/cliente/:identificacion', cliente.findOne);

  // Actualizacion de datos del cliente
  app.put('/cliente/modificar/:identificacion', cliente.update);

  // Eliminacion del cliente
  app.delete('/cliente/:identificacion', cliente.delete);

  //SERVICIOS PEDIDOS POR LOS GRUPOS
  //solo devolver código, nombres, apellidos, cedula y correo electrónico (clientes/identificacion)
  app.get('/cliente/cedula/:identificacion', cliente.findOneCli);

  //solo devolver código, nombres, apellidos y cedula (prestamo/identificacion)
  app.get('/cliente/prestamo/:identificacion', cliente.findOnePres);

  //solo devolver código, nombres, apellidos y firma (firma/identificacion)
  app.get('/cliente/firma/:identificacion', cliente.findOneFir);




}