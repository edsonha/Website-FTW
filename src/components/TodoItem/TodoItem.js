import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editField: ""
    };
  }

  evaluateStyle = () => {
    return this.props.isCompleted ? "strike form-control" : "form-control";
  };

  renderTodoItem = () => {
    return this.state.isEditing ? (
      "Hello Change This"
    ) : (
      <input
        value={this.props.name}
        type="text"
        className={this.evaluateStyle()}
        disabled
      />
    );
  };

  renderTodoButtons = () => {
    return this.state.isEditing ? (
      "Hello Change This"
    ) : (
      <div>
        <span
          type="button"
          className="badge badge-pill badge-primary"
          onClick={() => this.props.handleSave(this.props.name)}
        >
          EDIT
        </span>

        <span
          type="button"
          className="badge badge-pill badge-danger"
          onClick={() => this.props.handleDelete(this.props.name)}
        >
          DELETE
        </span>
      </div>
    );
  };

  render() {
    const { name, isCompleted, handleCheckbox } = this.props;

    return (
      <div className="input-group mb-3">
        <div className="input-group-text">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => handleCheckbox(name)}
          />
        </div>
        <div>{this.renderTodoItem()}</div>
        <div className="input-group-text">{this.renderTodoButtons()}</div>
      </div>
    );
  }
}

export default TodoItem;
