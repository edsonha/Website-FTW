import React from "react";

function TodoSearchBar({ handleSearchTodo }) {
  return (
    <div className="row">
      <div className="input-group mb-3 col-lg-3">
        <input
          type="search"
          className="form-control"
          placeholder="Search tasks..."
          onChange={handleSearchTodo}
        />
      </div>
    </div>
  );
}

export default TodoSearchBar;
