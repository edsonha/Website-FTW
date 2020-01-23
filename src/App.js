import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line
} from "recharts";

const data = [
  {
    name: "Page A",
    // uv: 4000,
    // pv: 2400,
    amt: 1000
  },
  {
    name: "Page B",
    // uv: 3000,
    // pv: 1398,
    amt: 1500
  },
  {
    name: "Page C",
    // uv: 2000,
    // pv: 9800,
    amt: 2500
  },
  {
    name: "Page D",
    // uv: 2780,
    // pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    // uv: 1890,
    // pv: 4800,
    amt: 800
  }
];

const options = [
  { name: "Bar Chart", value: "bar" },
  { name: "Pie Chart", value: "pie" }
];

class App extends Component {
  state = {
    selectedChart: "bar",
    nameInput: "",
    amountInput: 0,
    data: data
  };

  handleSelectChart = event => {
    this.setState({ selectedChart: event.target.value });
  };

  handleNameInput = event => {
    this.setState({ nameInput: event.target.value });
  };

  handleAmountInput = event => {
    this.setState({ amountInput: event.target.value });
  };

  handleCreateData = () => {
    const copiedData = [...this.state.data];
    copiedData.push({
      name: this.state.nameInput,
      amt: this.state.amountInput
    });
    this.setState({
      data: copiedData
    });
  };

  handleDeleteData = () => {
    const copiedData = [...this.state.data];
    const filteredData = copiedData.filter(
      data => data.name !== this.state.nameInput
    );
    this.setState({
      data: filteredData
    });
  };

  handleEditData = () => {
    const copiedData = [...this.state.data];
    const foundData = copiedData.find(
      data => data.name === this.state.nameInput
    );
    foundData.amt = this.state.amountInput;
    this.setState({ data: copiedData });
  };

  render() {
    return (
      <div>
        <label htmlFor="sort-by-select">Choose Chart</label>
        <select
          onChange={this.handleSelectChart}
          id="sort-by-select"
          data-testid="sort-by-select"
          className="btn btn-primary dropdown-toggle mx-2"
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <div className="row">
          <div className="input-group mb-3 col-lg-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter name..."
              onChange={this.handleNameInput}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Enter amount..."
              onChange={this.handleAmountInput}
            />
            <div className="input-group-append">
              <button
                className="btn btn-success"
                type="button"
                onClick={this.handleCreateData}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="input-group mb-3 col-lg-4">
            <input
              type="text"
              className="form-control"
              placeholder="Delete name..."
              onChange={this.handleNameInput}
            />
            <div className="input-group-append">
              <button
                className="btn btn-danger"
                type="button"
                onClick={this.handleDeleteData}
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="input-group mb-3 col-lg-4">
            <input
              type="text"
              className="form-control"
              placeholder="Enter name..."
              onChange={this.handleNameInput}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Editted amount..."
              onChange={this.handleAmountInput}
            />
            <div className="input-group-append">
              <button
                className="btn btn-success"
                type="button"
                onClick={this.handleEditData}
              >
                +
              </button>
            </div>
          </div>
        </div>
        {this.state.selectedChart === "bar" ? (
          <BarChart
            width={1000}
            height={500}
            data={this.state.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amt" fill="#8884d8" />
          </BarChart>
        ) : (
          <LineChart
            width={1000}
            height={500}
            data={this.state.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="amt"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        )}
      </div>
    );
  }
}

export default App;
