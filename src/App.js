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
        <a>
          Cloud Point
        </a>{" "}
        | WeatherApp{" "}
        <a target="_blank" href="">
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://github.com/Aditya1git">
          Adityainnovation
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
