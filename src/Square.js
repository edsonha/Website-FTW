import React from "react";

function Square({ isWinningSquare, value, onClick }) {
  const higlightWinner = isWinningSquare ? "yellow" : "";
  return (
    <button
      className="square"
      style={{ backgroundColor: higlightWinner }}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
