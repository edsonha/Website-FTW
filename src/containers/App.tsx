import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import axios from "axios";
import "./App.css";

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

interface IAppProps {}

interface IAppState {
  robots: Array<IRobot>;
  searchField: string;
}

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount(): void {
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

  searchRobot = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ searchField: event.currentTarget.value });
  };

  render(): JSX.Element {
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
