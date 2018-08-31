module.exports = {
  getTodos: (req, res) => {
    res.send([{ id: 1, title: 'Test' }])
  },

  postTodo: (req, res) => {
    res.sendStatus(200);
  }
}