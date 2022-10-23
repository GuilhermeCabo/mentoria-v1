const { Router } = require('express');
const todosController = require('./todos.controller');
const app = Router();

/* GET, POST, DELETE, PUT, PATCH */

app.get('/', todosController.list);

app.get('/:id', todosController.findById);

app.post('/', todosController.create);

app.put('/:id', todosController.update);

app.delete('/:id', todosController.delete);

module.exports = app;
