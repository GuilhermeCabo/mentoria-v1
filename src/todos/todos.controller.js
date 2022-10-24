const Todo = require('./todos.model');

class TodosController {
  constructor(todosRepository) {
    this.todosRepository = todosRepository;
  }

  list = (request, response) => {
    const todos = this.todosRepository.listTodos();

    return response.json(todos);
  };

  findById = (request, response) => {
    const { id } = request.params;

    const todo = this.todosRepository.findTodoById(id);

    if (!todo) return response.status(404).json({ error: 'TODO not found!' });

    return response.json(todo);
  };

  create = (request, response) => {
    const { title, description, status } = request.body;

    const todo = new Todo();

    Object.assign(todo, {
      title,
      description,
      status,
      createdAt: new Date(),
    });

    this.todosRepository.createTodo(todo);

    return response.status(201).json(todo);
  };

  update = (request, response) => {
    const { id } = request.params;
    const { title, description, status } = request.body;

    try {
      const updatedTodo = this.todosRepository.updateTodo({
        id,
        data: {
          title,
          description,
          status,
        },
      });
    } catch {
      return response.json({ error: 'Update failed' });
    }

    return response.json(updatedTodo);
  };

  delete = (request, response) => {
    const { id } = request.params;

    this.todosRepository.deleteTodo(id);

    return response.status(204).json();
  };
}

module.exports = TodosController;
