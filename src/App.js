import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/Aditya1git">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="">
          Aditya Rai
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://github.com/Aditya1git">
          Innovation
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
