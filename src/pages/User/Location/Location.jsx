/* eslint-disable */
import React, { Component } from "react";
import UserBase from "../../../components/User/UserBase/UserBase.jsx";
import "./Location.css";
import { NavLink, Route } from "react-router-dom";
import img from "../../../static/imgg.png";

class AboutUs extends Component {
  state = {};
  render() {
    const content = (
      <div className="LocationRoot">
        <div className="LocationLeft">
          <div className="con">
            <div className="text">Address</div>
            <div className="text1">
              University Of Southern California, Downtown, Los Angeles,
              California.
            </div>
          </div>
          </div>
        <div className="LocationRight"></div>
      </div>
    );
    return <UserBase history={this.props.history} content={content} />;
  }
}

export default AboutUs;
