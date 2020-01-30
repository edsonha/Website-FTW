import React from "react";

function Button({ sign, color, onClick }) {
  return (
    <button className={`btn ${color}`} type="button" onClick={onClick}>
      {sign}
    </button>
  );
}

export default Button;
