class TodosRepository {
  constructor() {
    this.todos = [];
  }

  listTodos = () => {
    return this.todos;
  };

  findTodoById = (id) => {
    const todo = this.todos.find((todo) => todo.id === id);

    return todo;
  };

  createTodo = (todo) => {
    this.todos.push(todo);
  };

  updateTodo = ({ id, data }) => {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);

    if (todoIndex < 0) throw new Error();

    Object.assign(this.todos[todoIndex], data);

    return this.todos[todoIndex];
  };

  deleteTodo = (id) => {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);

    this.todos.splice(todoIndex, 1);
  };
}

module.exports = TodosRepository;
