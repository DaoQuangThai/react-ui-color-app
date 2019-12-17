import React, { Component } from "react";
import Palette from "./Palette";
import seedColor from "./seedColors";
import "./App.css";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    // console.log(generatePalette(seedColor[4]));
    return (
      <div>
        <Palette palette={generatePalette(seedColor[4])} />
      </div>
    );
  }
}

export default App;
