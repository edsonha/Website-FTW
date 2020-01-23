import React from "react";

function TodoCreationBar({ handleCreateTodo, handleChangeInput, value }) {
  return (
    <div className="row">
      <div className="input-group mb-3 col-lg-4">
        <input
          type="text"
          data-testid="creationbar"
          className="form-control"
          placeholder="Enter new task..."
          value={value}
          onChange={handleChangeInput}
        />
        <div className="input-group-append">
          <button
            data-testid="submitbutton"
            className="btn btn-success"
            type="button"
            onClick={handleCreateTodo}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoCreationBar;
