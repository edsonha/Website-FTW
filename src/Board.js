import React from "react";
import Square from "./Square";

function Board({ winningSquare, squares, onClick }) {
  return (
    <div>
      {squares.map((square, i) => {
        const isWinningSquare =
          winningSquare && winningSquare.includes(i) ? true : false;
        return (
          <Square
            isWinningSquare={isWinningSquare}
            key={i}
            value={squares[i]}
            onClick={() => onClick(i)}
          />
        );
      })}
    </div>
  );
}

export default Board;
