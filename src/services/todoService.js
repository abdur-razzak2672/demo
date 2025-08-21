const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createTodo = async (userId, data) => {
  return prisma.todo.create({ data: { ...data, userId } });
};

const getTodos = async (userId) => {
  return prisma.todo.findMany({ where: { userId } });
};

const getTodoById = async (userId, id) => {
  return prisma.todo.findFirst({ where: { id, userId } });
};

const updateTodo = async (userId, id, data) => {
  return prisma.todo.update({ where: { id }, data });
};

const deleteTodo = async (userId, id) => {
  return prisma.todo.delete({ where: { id } });
};

module.exports = { createTodo, getTodos, getTodoById, updateTodo, deleteTodo };
