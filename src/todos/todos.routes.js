const { Router } = require('express');
const TodosRepository = require('./todos.repository');
const TodosController = require('./todos.controller');
const app = Router();

const todosRepository = new TodosRepository();
const todosController = new TodosController(todosRepository);

const validateTodoCreation = (request, response, next) => {
  const { title, description } = request.body;

  if (!title || !description)
    return response.status(400).json({ error: 'Field is missing' });

  next();
};

/* GET, POST, DELETE, PUT, PATCH */

app.get('/', todosController.list);

app.get('/:id', todosController.findById);

app.post('/', validateTodoCreation, todosController.create);

app.put('/:id', todosController.update);

app.delete('/:id', todosController.delete);

module.exports = app;
