import React, { Component } from "react";
import "./Box2.css";

class Button extends Component {
  state = {};
  render() {
    return (
      <div className="Box2">
        <h3 className="tt noselect">{this.props.text}</h3>
      </div>
    );
  }
}

export default Button;

