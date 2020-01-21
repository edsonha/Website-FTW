import React from "react";
import TodoItem from "../TodoItem/TodoItem";

function TodoList({ data, handleCheckbox, handleSave, handleDelete }) {
  return data.map(item => {
    return (
      <div key={item.id}>
        <TodoItem
          {...item}
          handleCheckbox={handleCheckbox}
          handleSave={handleSave}
          handleDelete={handleDelete}
        />
      </div>
    );
  });
}

export default TodoList;
