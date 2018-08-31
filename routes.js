const router = require('express').Router();
const todosController = require('./controllers/todos');

router.get('/todos', todosController.getTodos);
router.post('/todos', todosController.postTodo);

module.exports = router;