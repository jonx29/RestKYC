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

}