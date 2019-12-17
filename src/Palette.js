import React, { Component } from "react";
import ColorBox from "./ColorBox.js";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // note as long as down its more power to overwrite
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(newLevel) {
    // console.log(newLevel);
    this.setState({
      level: newLevel
    });
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            onAfterChange={this.changeLevel}
            defaultValue={level}
            min={100}
            max={900}
            step={100}
          />
        </div>
        {/* Navbar goes here */}
        <div className="palette-colors">{colorBoxes}</div>
        {/* footer eventually */}
      </div>
    );
  }
}

export default Palette;
