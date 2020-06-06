import React from "react";
import logo from "../logo.svg";
import "../App.css";

const Page1 = ({ onRouteChange }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={() => onRouteChange("page1")}>Page 1</button>
      <button onClick={() => onRouteChange("page2")}>Page 2</button>
      <button className="disabled">Page 3</button>
    </header>
  </div>
);

export default Page1;
