import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      robots: []
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users"
    })
      .then(response => {
        this.setState({ robots: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  searchRobot = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1 i">ROBOFRIENDS</h1>
        <SearchBox searchRobot={this.searchRobot} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
