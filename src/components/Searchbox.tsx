import React from "react";

interface ISearchBoxProps {
  searchRobot(event: React.SyntheticEvent<HTMLInputElement>): void; //return void or return nothing
}

const SearchBox = ({ searchRobot }: ISearchBoxProps) => {
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
