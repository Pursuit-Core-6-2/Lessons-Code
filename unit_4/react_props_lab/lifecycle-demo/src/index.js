import React from "react";
import ReactDOM from "react-dom";
import GreetingContainer from "./GreetingContainer.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <GreetingContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
