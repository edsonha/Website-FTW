import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: "#9fb8ad",
      color2: "#1fc8db",
      color3: "#2cb5e8"
    }
  }

  setBackgroundColor = () => {
    this.setState({
      color1: "#" + Math.floor(Math.random()*16777215).toString(16),
      color2: "#" + Math.floor(Math.random()*16777215).toString(16),
      color3: "#" + Math.floor(Math.random()*16777215).toString(16),
    })
  }

  render () {
    const { color1, color2, color3 } = this.state;
    return (
      <div className="container" style={{background: `linear-gradient(141deg, ${color1}, ${color2} 51%, ${color3} 75%)`}}>
        <div className="center">
          <h1>RANDOM GRADIENT BACKGROUND GENERATOR</h1>
          <h3>Current CSS background:</h3>
          <p>linear-gradient(141deg, {color1}, {color2} 51%, {color3} 75%)</p>
          <button onClick={this.setBackgroundColor}>Click Me!</button>
        </div>
      </div>
    );
  }
} 

export default App;
