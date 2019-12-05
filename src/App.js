import React, { Component } from "react";
import Palette from "./Palette";
import seedColor from "./seedColors";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedColor[4]} />
      </div>
    );
  }
}

export default App;
