import React, { Component } from 'react';
import './App.css';

class App extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      backgroundColor: ""
    }
  }

  setColor = (input) => {
    this.setState({color: input});
  }

  setBackgroundColor = (input2) => {
    this.setState({backgroundColor: input2})
  }

  render() {
    return (
      <div>
        <h1>Paint a Mondrian</h1>
        <div className="workspace">
          <div id="color_palette">
            <div className="color" id="red" onClick={() => this.setColor("#cc0000")}></div>
            <div className="color" id="yellow" onClick={() => this.setColor("#ffec00")}></div>
            <div className="color" id="blue" onClick={() => this.setColor("#0000cc")}></div>
            <div className="color" id="white" onClick={() => this.setColor("white")}></div>
          </div>
          <div className="canvas">
            <div className="container">
              <div className="zone one" onClick={() => this.setBackgroundColor(this.state.color)} style={{backgroundColor: this.state.backgroundColor}}></div>
              <div className="zone one" onClick={() => this.setBackgroundColor(this.state.color)} style={{backgroundColor: this.state.backgroundColor}}></div>
              <div className="zone one" onClick={() => this.setBackgroundColor(this.state.color)} style={{backgroundColor: this.state.backgroundColor}}></div>
              <div className="zone one" onClick={() => this.setBackgroundColor(this.state.color)} style={{backgroundColor: this.state.backgroundColor}}></div>
              <div className="zone two" onClick={() => this.setBackgroundColor(this.state.color)} style={{backgroundColor: this.state.backgroundColor}}></div>
              <div className="zone two" onClick={() => this.setBackgroundColor(this.state.color)} style={{backgroundColor: this.state.backgroundColor}}></div>
              <div className="zone two" onClick={() => this.setBackgroundColor(this.state.color)} style={{backgroundColor: this.state.backgroundColor}}></div>
              <div className="zone two" onClick={() => this.setBackgroundColor(this.state.color)} style={{backgroundColor: this.state.backgroundColor}}></div>
              <div className="zone three" onClick={() => this.setBackgroundColor(this.state.color)} style={{backgroundColor: this.state.backgroundColor}}></div>
              <div className="zone three" onClick={() => this.setBackgroundColor(this.state.color)} style={{backgroundColor: this.state.backgroundColor}}></div>
              <div className="zone three" onClick={() => this.setBackgroundColor(this.state.color)} style={{backgroundColor: this.state.backgroundColor}}></div>
              <div className="zone three" onClick={() => this.setBackgroundColor(this.state.color)} style={{backgroundColor: this.state.backgroundColor}} ></div>
              <div className="zone four" onClick={() => this.setBackgroundColor(this.state.color)} style={{backgroundColor: this.state.backgroundColor}}></div>
              <div className="zone four" onClick={() => this.setBackgroundColor(this.state.color)} style={{backgroundColor: this.state.backgroundColor}}></div>
              <div className="zone four" onClick={() => this.setBackgroundColor(this.state.color)} style={{backgroundColor: this.state.backgroundColor}}></div>
              <div className="zone four" onClick={() => this.setBackgroundColor(this.state.color)} style={{backgroundColor: this.state.backgroundColor}}></div>
            </div>
          </div>
          </div>
      </div>
    )
  }
}

export default App;
