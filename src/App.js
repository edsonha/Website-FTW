import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoSearchBar from "./components/TodoSearchBar/TodoSearchBar";
import TodoCreationBar from "./components/TodoCreationBar/TodoCreationBar";
import { todos } from "./utils/seedData";
import uuidv1 from "uuid/v1";

class App extends Component {
  state = {
    data: todos,
    searchfield: "",
    newTask: ""
  };

  handleSearchTodo = event => {
    this.setState({ searchfield: event.target.value });
  };

  handleCheckboxTodo = task => {
    const copiedData = [...this.state.data];
    const todoItem = copiedData.find(todo => todo.task === task);
    todoItem.isCompleted = !todoItem.isCompleted;
    this.setState({ data: copiedData });
  };

  findTask = task => {
    return this.state.data.find(
      todo => todo.task.toLowerCase() === task.toLowerCase()
    );
  };

  handleSaveTodo = (oldTodo, edittedTodo) => {
    const isTaskPresent = this.findTask(edittedTodo);
    if (isTaskPresent) {
      alert("Task already exist. Please choose another task");
    } else {
      const copiedData = [...this.state.data];
      const todoItem = copiedData.find(todo => todo.task === oldTodo);
      todoItem.task = edittedTodo;
      this.setState({ data: copiedData });
    }
  };

  handleChangeInput = event => {
    this.setState({
      newTask: event.target.value
    });
  };

  handleCreateTodo = () => {
    const { newTask, data } = this.state;
    const isTaskPresent = this.findTask(newTask);
    if (!newTask) {
      alert("Input field is blank. Please enter task");
    } else if (isTaskPresent) {
      alert("Task already exist. Please choose another task");
    } else {
      const copiedData = [...data];
      copiedData.push({
        id: uuidv1(),
        task: newTask,
        isCompleted: false
      });
      this.setState({
        data: copiedData,
        newTask: ""
      });
    }
  };

  handleDeleteTodo = task => {
    const copiedData = [...this.state.data];
    const filteredTodoList = copiedData.filter(todo => todo.task !== task);
    this.setState({ data: filteredTodoList });
  };

  render() {
    const { data, searchfield, newTask } = this.state;
    const filteredList = data.filter(item => item.task.includes(searchfield));
    return (
      <div className="container">
        <h1>Todo List</h1>
        <TodoSearchBar handleSearchTodo={this.handleSearchTodo} />
        <TodoList
          data={filteredList}
          handleCheckboxTodo={this.handleCheckboxTodo}
          handleSaveTodo={this.handleSaveTodo}
          handleDeleteTodo={this.handleDeleteTodo}
        />
        <TodoCreationBar
          handleCreateTodo={this.handleCreateTodo}
          handleChangeInput={this.handleChangeInput}
          value={newTask}
        />
      </div>
    );
  }
}

export default App;
