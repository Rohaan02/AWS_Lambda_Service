const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "todos.json");

function readTodos() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({ todos: [], currentId: 1 }));
  }
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function writeTodos(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function getTodos() {
  const { todos } = readTodos();
  return todos;
}

function addTodo(title) {
  const data = readTodos();
  const newTodo = {
    id: data.currentId++,
    title,
    completed: false,
  };
  data.todos.push(newTodo);
  writeTodos(data);
  return newTodo;
}

function deleteTodo(id) {
  const data = readTodos();
  const index = data.todos.findIndex((todo) => todo.id === id);
  if (index === -1) return false;
  data.todos.splice(index, 1);
  writeTodos(data);
  return true;
}

function updateTodo(id, title, completed) {
  const data = readTodos();
  const todo = data.todos.find((t) => t.id === id);

  if (!todo) return null;

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  writeTodos(data);
  return todo;
}

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
};
