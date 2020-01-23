import React, { Component } from "react";
import PillButton from "../PillButton/PillButton";
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

  handleEditTodo = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleChangeTodo = event => {
    this.setState({ editField: event.target.value });
  };

  handleClickSave = () => {
    if (!this.state.editField) return;
    const oldTodo = this.props.task;
    const edittedTodo = this.state.editField;
    this.props.handleSaveTodo(oldTodo, edittedTodo);
    this.setState({ isEditing: !this.state.isEditing });
  };

  renderTodoItem = () => {
    return this.state.isEditing ? (
      <input
        defaultValue={this.props.task}
        className="form-control"
        onChange={this.handleChangeTodo}
      />
    ) : (
      <div className={this.evaluateStyle()}>{this.props.task}</div>
    );
  };

  renderTodoButtons = () => {
    return this.state.isEditing ? (
      <div>
        <PillButton
          color="badge-success"
          action={this.handleClickSave}
          name="SAVE"
        />
        <PillButton
          color="badge-warning"
          action={this.handleEditTodo}
          name="CANCEL"
        />
      </div>
    ) : (
      <div>
        <PillButton
          color="badge-primary"
          action={this.handleEditTodo}
          name="EDIT"
        />
        <PillButton
          color="badge-danger"
          task={this.props.task}
          action={() => this.props.handleDeleteTodo(this.props.task)}
          name="DELETE"
        />
      </div>
    );
  };

  render() {
    const { task, isCompleted, handleCheckboxTodo } = this.props;

    return (
      <div className="input-group mb-3">
        <div className="input-group-text">
          <input
            data-testid={`checkbox-${task}`}
            type="checkbox"
            checked={isCompleted}
            onChange={() => handleCheckboxTodo(task)}
          />
        </div>
        <div>{this.renderTodoItem()}</div>
        <div className="input-group-text">{this.renderTodoButtons()}</div>
      </div>
    );
  }
}

export default TodoItem;
