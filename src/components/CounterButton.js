import React, { Component } from "react";

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count === nextState.count) {
      return false;
    } else return true;
  }

  updateCount = () => {
    this.setState((prevstate) => ({ count: prevstate.count + 1 }));
  };

  render() {
    console.log("Counter Button");
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count = {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
