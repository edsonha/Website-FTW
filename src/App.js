import React, { Component } from "react";
import Board from "./Board";
import calculateWinner from "./utils/calculateWinner";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      isXNext: true,
      stepNumber: 0
    };
  }

  handleClick = i => {
    const { isXNext, stepNumber } = this.state;
    const history = this.state.history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squaresCopy = current.squares.slice();
    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = isXNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares: squaresCopy }]),
      stepNumber: history.length,
      isXNext: !isXNext
    });
  };

  jumpTo(step) {
    this.setState({ stepNumber: step, isXNext: step % 2 === 0 });
  }

  render() {
    const { history, isXNext, stepNumber } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : `Go to game start`;
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status, winningSquare;
    if (winner) {
      status = `Winner is ${winner[0]}`;
      winningSquare = winner[1];
    } else if (this.state.stepNumber > current.squares.length - 1) {
      status = "Draw";
    } else {
      status = `Next player is ${isXNext ? "X" : "O"}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winningSquare={winningSquare}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default App;
