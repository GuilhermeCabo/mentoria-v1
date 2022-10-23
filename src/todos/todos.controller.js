const crypto = require('crypto');

const todos = [];

const todosController = {
  list: (request, response) => {
    return response.json(todos);
  },

  findById: (request, response) => {
    const { id } = request.params;

    const todo = todos.find((todo) => todo.id === id);

    if (!todo) return response.status(404).json({ error: 'TODO not found!' });

    return response.json(todo);
  },

  create: (request, response) => {
    const todo = {
      ...request.body,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };

    todos.push(todo);

    return response.status(201).json(todo);
  },

  update: (request, response) => {
    const { id } = request.params;

    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex < 0)
      return response.status(404).json({ error: 'TODO not found!' });

    todos[todoIndex] = {
      ...todos[todoIndex],
      ...request.body,
    };

    return response.json(todos[todoIndex]);
  },

  delete: (request, response) => {
    const { id } = request.params;

    const todoIndex = todos.findIndex((todo) => todo.id === id);

    todos.splice(todoIndex, 1);

    return response.status(204).json();
  },
};

module.exports = todosController;
