const express = require('express');
const app = express();

const todosRoutes = require('./todos/todos.routes');

app.use(express.json());
app.use('/todos', todosRoutes);

app.listen(3000, console.log('Servidor rodando....'));
