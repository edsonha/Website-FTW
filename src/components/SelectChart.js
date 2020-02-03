import React from "react";

function SelectChart({ handleSelectChart }) {
  return (
    <div className="mt-3 mb-3">
      <label>Choose Chart</label>
      <select
        onChange={handleSelectChart}
        className="btn btn-primary dropdown-toggle mx-2"
      >
        <option value="Bar Chart">Bar Chart</option>
        <option value="Pie Chart">Pie Chart</option>
      </select>
    </div>
  );
}

export default SelectChart;
