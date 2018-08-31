const todosRepository = require('../repositories/todosRepository');
const todoFactory = require('../models/todo');

exports = {
  getTodos: todosRepository.getTodos,

  createTodo: async (todo) => {
    const todo = todoFactory.createTodo(todo);

    return await todosRepository.createTodo(todo);
  },

  updateTodo: (todo) => {

  },

  markDone: (todoId) => {

  },

  deleteTodo: (todoId) => {

  },
};
