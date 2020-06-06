import React from "react";
import "./App.css";

import Page1 from "./components/Page1.jsx";
import Page2 from "./components/Page2.jsx";
import Page3 from "./components/Page3.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "page1",
    };
  }

  onRouteChange = (route) => {
    this.setState({ route });
  };

  render() {
    switch (this.state.route) {
      case "page2":
        return <Page2 onRouteChange={this.onRouteChange} />;
      case "page3":
        return <Page3 onRouteChange={this.onRouteChange} />;
      default:
        return <Page1 onRouteChange={this.onRouteChange} />;
    }
  }
}

export default App;
