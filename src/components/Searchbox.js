import React from "react";

const SearchBox = ({ searchRobot }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Enter robot's name"
        onChange={searchRobot}
      />
    </div>
  );
};

export default SearchBox;
