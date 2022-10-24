const { Router } = require('express');
const TodosRepository = require('./todos.repository');
const TodosController = require('./todos.controller');
const app = Router();

const todosRepository = new TodosRepository();
const todosController = new TodosController(todosRepository);

/* GET, POST, DELETE, PUT, PATCH */

app.get('/', todosController.list);

app.get('/:id', todosController.findById);

app.post('/', todosController.create);

app.put('/:id', todosController.update);

app.delete('/:id', todosController.delete);

module.exports = app;
