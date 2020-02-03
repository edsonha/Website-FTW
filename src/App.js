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
    nameInputDelete: "",
    nameInputAdd: "",
    appleInputAdd: "",
    orangeInputAdd: "",
    nameInputEdit: "",
    appleInputEdit: "",
    orangeInputEdit: "",
    data: getData()
  };

  handleSelectChart = () => {
    this.setState({ isBarchartDisplayed: !this.state.isBarchartDisplayed });
  };

  handleChangeInput = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  isExistingNamePresent = input =>
    this.state.data.find(
      data => data.name.toLowerCase() === input.toLowerCase()
    );

  handleCreateData = () => {
    if (!this.state.nameInputAdd) {
      return;
    }
    if (this.isExistingNamePresent(this.state.nameInputAdd)) {
      return;
    }
    if (
      isNaN(Number(this.state.appleInputAdd)) ||
      isNaN(Number(this.state.orangeInputAdd))
    ) {
      return;
    }
    const copiedData = [...this.state.data];
    copiedData.push({
      name: this.state.nameInputAdd,
      apple: Number(this.state.appleInputAdd),
      orange: Number(this.state.orangeInputAdd)
    });
    this.setState({
      data: copiedData,
      nameInputAdd: "",
      appleInputAdd: "",
      orangeInputAdd: ""
    });
  };

  handleDeleteData = () => {
    const copiedData = [...this.state.data];
    const filteredData = copiedData.filter(
      data =>
        data.name.toLowerCase() !== this.state.nameInputDelete.toLowerCase()
    );
    this.setState({
      data: filteredData,
      nameInputDelete: ""
    });
  };

  handleEditData = () => {
    if (!this.state.nameInputEdit) {
      return;
    }
    if (
      isNaN(Number(this.state.appleInputEdit)) ||
      isNaN(Number(this.state.orangeInputEdit))
    ) {
      return;
    }
    const copiedData = [...this.state.data];
    const foundData = copiedData.find(
      data => data.name.toLowerCase() === this.state.nameInputEdit.toLowerCase()
    );
    if (!foundData) {
      return;
    }
    foundData.apple = Number(this.state.appleInputEdit);
    foundData.orange = Number(this.state.orangeInputEdit);
    this.setState({
      data: copiedData,
      nameInputEdit: "",
      appleInputEdit: "",
      orangeInputEdit: ""
    });
  };

  render() {
    const {
      data,
      nameInputDelete,
      nameInputAdd,
      appleInputAdd,
      orangeInputAdd,
      nameInputEdit,
      appleInputEdit,
      orangeInputEdit
    } = this.state;
    return (
      <div className="container">
        <SelectChart handleSelectChart={this.handleSelectChart} />
        <AddDataConsole
          handleChangeInput={this.handleChangeInput}
          handleCreateData={this.handleCreateData}
          nameInputAdd={nameInputAdd}
          appleInputAdd={appleInputAdd}
          orangeInputAdd={orangeInputAdd}
        />
        <DeleteDataConsole
          handleChangeInput={this.handleChangeInput}
          handleDeleteData={this.handleDeleteData}
          nameInputDelete={nameInputDelete}
        />
        <EditDataConsole
          handleChangeInput={this.handleChangeInput}
          handleEditData={this.handleEditData}
          nameInputEdit={nameInputEdit}
          appleInputEdit={appleInputEdit}
          orangeInputEdit={orangeInputEdit}
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
