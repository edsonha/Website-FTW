import React, { Component } from "react";
import { getData } from "./seedData";
import Barchart from "./components/Barchart";
import Piechart from "./components/Piechart";
import AddDataConsole from "./components/AddDataConsole";
import DeleteDataConsole from "./components/DeleteDataConsole";
import EditDataConsole from "./components/EditDataConsole";
import SelectChart from "./components/SelectChart";

class App extends Component {
  state = {
    isBarchartDisplayed: true,
    nameInput: "",
    appleInput: "",
    orangeInput: "",
    data: getData()
  };

  handleSelectChart = () => {
    this.setState({ isBarchartDisplayed: !this.state.isBarchartDisplayed });
  };

  handleChangeInput = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  handleCreateData = () => {
    if (!this.state.nameInput) {
      return;
    }
    const copiedData = [...this.state.data];
    copiedData.push({
      name: this.state.nameInput,
      apple: Number(this.state.appleInput),
      orange: Number(this.state.orangeInput)
    });
    console.log(copiedData);
    this.setState({
      data: copiedData,
      nameInput: "",
      appleInput: "",
      orangeInput: ""
    });
  };

  handleDeleteData = () => {
    const copiedData = [...this.state.data];
    const filteredData = copiedData.filter(
      data => data.name.toLowerCase() !== this.state.nameInput.toLowerCase()
    );
    this.setState({
      data: filteredData,
      nameInput: ""
    });
  };

  handleEditData = () => {
    if (!this.state.nameInput) {
      return;
    }
    const copiedData = [...this.state.data];
    const foundData = copiedData.find(
      data => data.name.toLowerCase() === this.state.nameInput.toLowerCase()
    );
    if (!foundData) {
      return;
    }
    foundData.apple = Number(this.state.appleInput);
    foundData.orange = Number(this.state.orangeInput);
    this.setState({
      data: copiedData,
      nameInput: "",
      appleInput: "",
      orangeInput: ""
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <SelectChart handleSelectChart={this.handleSelectChart} />
        <AddDataConsole
          handleChangeInput={this.handleChangeInput}
          handleCreateData={this.handleCreateData}
        />
        <DeleteDataConsole
          handleChangeInput={this.handleChangeInput}
          handleDeleteData={this.handleDeleteData}
        />
        <EditDataConsole
          handleChangeInput={this.handleChangeInput}
          handleEditData={this.handleEditData}
        />
        {this.state.isBarchartDisplayed ? (
          <Barchart data={data} />
        ) : (
          <Piechart data={data} />
        )}
      </div>
    );
  }
}

export default App;
