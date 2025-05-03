/* eslint-disable */
import React, { Component } from "react";
import "./CateLine.css";
import more from "../../../static/superAdmin/more.png";
import { NavLink } from "react-router-dom";
class CateLines extends Component {
  state = {};
  render() {
    return (
      <div className="roott">
        <h3 className="category-text-1">{this.props.id}</h3>
        <h3 className="category-text-2">{this.props.data.category_name}</h3>
        <h3 className="category-text-3">{this.props.data.category_desc ? `${this.props.data.category_desc.substr(0, 15)}...` : ''}</h3>
        {/* <h3 className="category-text-3">{}</h3> */}
        <div
          className="more-icon"
          onClick={() =>
            this.props.history.push(
              `/SuperAdmin/Categories/${this.props.data.id}/`
            )
          }
        >
          <img src={more} alt="" />
        </div>
      </div>
    );
  }
}

export default CateLines;
