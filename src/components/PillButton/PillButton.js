import React from "react";

function PillButton({ color, action, name }) {
  return (
    <button className={`badge badge-pill ${color}`} onClick={action}>
      {name}
    </button>
  );
}

export default PillButton;
