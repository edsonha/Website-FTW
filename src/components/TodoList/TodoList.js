import React from "react";
import TodoItem from "../TodoItem/TodoItem";

function TodoList({
  data,
  handleCheckboxTodo,
  handleSaveTodo,
  handleDeleteTodo
}) {
  return data.map(todo => {
    return (
      <div key={todo.id}>
        <TodoItem
          {...todo}
          handleCheckboxTodo={handleCheckboxTodo}
          handleSaveTodo={handleSaveTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      </div>
    );
  });
}

export default TodoList;
