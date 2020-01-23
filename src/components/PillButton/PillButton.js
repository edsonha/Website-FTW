import React from "react";

function PillButton({ color, action, name, task }) {
  return (
    <button
      className={`badge badge-pill ${color}`}
      data-testid={`${name.toLowerCase()}button-${task}`}
      onClick={action}
    >
      {name}
    </button>
  );
}

export default PillButton;
