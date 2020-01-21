import React from "react";

function TodoSearchBar({ handleSearch }) {
  return (
    <div className="row">
      <div className="input-group ml-1 mb-3 col-lg-4">
        <input
          type="search"
          className="form-control"
          placeholder="Search tasks..."
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default TodoSearchBar;
