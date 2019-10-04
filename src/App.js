import React, { Component } from 'react';
import './App.css';

class App extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }
  }

  setColor = (colorInput) => {
    this.setState({color: colorInput})
  }

  paintBox = (colorInput, boxInput) => {
    let boxToPaint = document.getElementById(boxInput);
    boxToPaint.style.backgroundColor = colorInput;
  }

  reset = () => {
    let resetBox = document.getElementsByClassName("zone");
    for (let box of resetBox) {
      box.style.backgroundColor = "white"
    }
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
            <button onClick={this.reset}>Reset</button>
          </div>
          <div id="canvas">
            <div className="zone one" id="box-1" onClick={() => this.paintBox(this.state.color, "box-1")}></div>
            <div className="zone" id="box-2" onClick={() => this.paintBox(this.state.color, "box-2")}></div>
            <div className="zone" id="box-3" onClick={() => this.paintBox(this.state.color, "box-3")}></div>
            <div className="zone" id="box-4" onClick={() => this.paintBox(this.state.color, "box-4")}></div>
            <div className="zone two" id="box-5" onClick={() => this.paintBox(this.state.color, "box-5")}></div>
            <div className="zone" id="box-6" onClick={() => this.paintBox(this.state.color, "box-6")}></div>
            <div className="zone" id="box-7" onClick={() => this.paintBox(this.state.color, "box-7")}></div>
            <div className="zone" id="box-8" onClick={() => this.paintBox(this.state.color, "box-8")}></div>
            <div className="zone three" id="box-9" onClick={() => this.paintBox(this.state.color, "box-9")}></div>
            <div className="zone" id="box-10" onClick={() => this.paintBox(this.state.color, "box-10")}></div>
            <div className="zone" id="box-11" onClick={() => this.paintBox(this.state.color, "box-11")}></div>
            <div className="zone" id="box-12" onClick={() => this.paintBox(this.state.color, "box-12")}></div>
            <div className="zone four" id="box-13" onClick={() => this.paintBox(this.state.color, "box-13")}></div>
            <div className="zone" id="box-14" onClick={() => this.paintBox(this.state.color, "box-14")}></div>
            <div className="zone" id="box-15" onClick={() => this.paintBox(this.state.color, "box-15")}></div>
            <div className="zone" id="box-16" onClick={() => this.paintBox(this.state.color, "box-16")}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
