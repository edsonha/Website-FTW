import React, { Component } from "react";
import { getData } from "./seedData";
import Barchart from "./components/Barchart";
import Piechart from "./components/Piechart";
import InputField from "./components/InputField";
import Button from "./components/Button";

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
      apple: this.state.appleInput,
      orange: this.state.orangeInput
    });
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
    foundData.apple = this.state.appleInput;
    foundData.orange = this.state.orangeInput;
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
        <div className="mt-3 mb-3">
          <label htmlFor="sort-by-select">Choose Chart</label>
          <select
            onChange={this.handleSelectChart}
            id="sort-by-select"
            className="btn btn-primary dropdown-toggle mx-2"
          >
            <option value="Bar Chart">Bar Chart</option>
            <option value="Pie Chart">Pie Chart</option>
          </select>
        </div>
        <div className="row">
          <div className="input-group mb-3 col-lg-8">
            <InputField
              name="nameInput"
              placeholder="Enter name..."
              onChange={this.handleChangeInput}
            />
            <InputField
              name="appleInput"
              placeholder="Enter apple quantity..."
              onChange={this.handleChangeInput}
            />
            <InputField
              name="orangeInput"
              placeholder="Enter orange quantity..."
              onChange={this.handleChangeInput}
            />
            <div className="input-group-append">
              <Button
                sign="+"
                color="btn-success"
                onClick={this.handleCreateData}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="input-group mb-3 col-lg-8">
            <InputField
              name="nameInput"
              placeholder="Delete name..."
              onChange={this.handleChangeInput}
            />
            <div className="input-group-append">
              <Button
                sign="-"
                color="btn-danger"
                onClick={this.handleDeleteData}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="input-group mb-3 col-lg-8">
            <InputField
              name="nameInput"
              placeholder="Enter name..."
              onChange={this.handleChangeInput}
            />
            <InputField
              name="appleInput"
              placeholder="Edit apple quantity..."
              onChange={this.handleChangeInput}
            />
            <InputField
              name="orangeInput"
              placeholder="Edit orange quantity..."
              onChange={this.handleChangeInput}
            />
            <div className="input-group-append">
              <Button
                sign="+"
                color="btn-success"
                onClick={this.handleEditData}
              />
            </div>
          </div>
        </div>
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
