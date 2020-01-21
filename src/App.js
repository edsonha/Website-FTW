import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoSearchBar from "./components/TodoSearchBar/TodoSearchBar";
import { todos } from "./utils/seedData";

class App extends Component {
  state = {
    data: todos,
    searchfield: ""
  };

  handleTodoSearch = event => {
    this.setState({ searchfield: event.target.value });
  };

  handleTodoCheckbox = name => {
    const copiedData = [...this.state.data];
    const todoItem = copiedData.find(item => item.name === name);
    todoItem.isCompleted = !todoItem.isCompleted;
    this.setState({ data: copiedData });
  };

  handleSaveTodo = name => {
    console.log(name);
  };

  handleTodoDelete = name => {
    const copiedData = [...this.state.data];
    const filteredTodoList = copiedData.filter(item => item.name !== name);
    this.setState({ data: filteredTodoList });
  };

  render() {
    const { data, searchfield } = this.state;
    const filteredList = data.filter(item => item.name.includes(searchfield));
    return (
      <div className="container">
        <h1>Todo List</h1>
        <TodoSearchBar handleSearch={this.handleTodoSearch} />
        <TodoList
          data={filteredList}
          handleCheckbox={this.handleTodoCheckbox}
          handleSave={this.handleSaveTodo}
          handleDelete={this.handleTodoDelete}
        />
      </div>
    );
  }
}

export default App;
