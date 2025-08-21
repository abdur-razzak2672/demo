const todoService = require("../services/todoService");

const createTodo = async (req, res) => {
  const userId = req.user.id;
  const todo = await todoService.createTodo(userId, req.body);
  res.status(201).json(todo);
};

const getTodos = async (req, res) => {
  const userId = req.user.id;
  const todos = await todoService.getTodos(userId);
  res.json(todos);
};

const getTodo = async (req, res) => {
  const userId = req.user.id;
  const todo = await todoService.getTodoById(userId, parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  res.json(todo);
};

const updateTodo = async (req, res) => {
  const userId = req.user.id;
  const todo = await todoService.updateTodo(userId, parseInt(req.params.id), req.body);
  res.json(todo);
};

const deleteTodo = async (req, res) => {
  const userId = req.user.id;
  await todoService.deleteTodo(userId, parseInt(req.params.id));
  res.json({ message: "Todo deleted" });
};

module.exports = { createTodo, getTodos, getTodo, updateTodo, deleteTodo };
