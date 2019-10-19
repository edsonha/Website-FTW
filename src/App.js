import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShakeActivated: false,
      humanHandChoice: "right_fist",
      humanScore: 0,
      computerHandChoice: "left_fist",
      computerScore: 0,
      display: "Choose your weapon"
    }
  }

 startCountdown = () => {
   this.timer = setInterval(() => {
     this.setState(prevState => {return {display: prevState.display - 1}})
   }, 500);
 }

  choose = (item) => {
    this.setState({isShakeActivated: true, humanHandChoice: "right_fist", computerHandChoice: "left_fist", display: 3})
    this.startCountdown();
    const computerChoose = ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
    const humanChoose = item;
    setTimeout (() => this.displayResult(computerChoose, humanChoose), 1500)
  }

  displayResult = (computerChoose, humanChoose) => {
    clearInterval(this.timer)
    this.setState({isShakeActivated: false, humanHandChoice: humanChoose, computerHandChoice: computerChoose})
    if (computerChoose === humanChoose) {
      this.setState({display: "Tie!"})
    } else if ((humanChoose === 'rock' && computerChoose === 'scissors') || (humanChoose === 'paper' && computerChoose === 'rock') || (humanChoose === 'scissors' && computerChoose === 'paper')) {
      this.setState(prevState => { return {humanScore: prevState.humanScore + 1, display: "You Win!"}})
    } else {
      this.setState(prevState => { return {computerScore: prevState.computerScore + 1, display: "You Lose!"}})
    }
  }

  render() {
    const imagesPath = {left_fist: "images/left_fist.png", right_fist: "images/right_fist.png", rock: "images/rock.png", paper: "images/paper.png", scissors: "images/scissors.png"};

    return (
      <div id="container"> 
        <div className="player">
          <div className="title">
            {`Computer Score: ${this.state.computerScore}`}
          </div>
          <div className={this.state.isShakeActivated ? 'hand_container shake' : 'hand_container'}>
           <img src={imagesPath[this.state.computerHandChoice]} alt="scissors, paper, stone or fist" />
          </div>
        </div>

        <div id="score_container">{this.state.display}</div>

        <div className="player">
          <div className="title">
            {`Your Score: ${this.state.humanScore}`}
          </div>
          <div className={this.state.isShakeActivated ? 'hand_container shake' : 'hand_container'}>
            <img src={imagesPath[this.state.humanHandChoice]} alt="scissors, paper, stone or fist" />
          </div>
          <div id="btn_container">
            <div className="button" onClick={() => this.choose("rock")}>
              rock
            </div>
            <div className="button" onClick={() => this.choose("paper")}>
              paper
            </div>
            <div className="button" onClick={() => this.choose("scissors")}>
              scissors
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
