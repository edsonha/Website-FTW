let todos = [
  { id: 1, task: "buy milk", isCompleted: false },
  { id: 2, task: "buy eggs", isCompleted: true },
  { id: 3, task: "learn react", isCompleted: false }
];

function getTodos() {
  return todos;
}

module.exports = { getTodos };
