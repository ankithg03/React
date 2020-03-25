import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Click from "./Component/comp/Click";
import Hover from "./Component/comp/Hover";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> ANKITH IS MY NAME </p>{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>{" "}
      </header>{" "} */}
      hii
      <Click></Click>
      <Hover></Hover>
    </div>
  );
}

export default App;
