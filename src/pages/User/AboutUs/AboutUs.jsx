/* eslint-disable */
import React, { Component } from "react";
import UserBase from "../../../components/User/UserBase/UserBase.jsx";
import "./AboutUs.css";
import { NavLink, Route } from "react-router-dom";
import img from "../../../static/imgg.png";

class AboutUs extends Component {
  state = {};
  render() {
    const content = (
      <div className="AboutUsRoot">
        <div className="aboutUsLeft">
          <div className="img-con">
            <img src={img} />
          </div>
        </div>
        <div className="aboutUsRight">
          <div className="text">About US</div>
          <div className="text1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum libero
            a, debitis tenetur ex consequuntur sit veritatis aliquid minima quae
            fugit laborum molestiae dicta magnam, delectus inventore, excepturi
            voluptates iste dolor sit amet consectetur adipisicing elit. Cum
            libero a, debitis tenetur ex consequuntur sit veritatis aliquid
            minima quae fugit laborum molestiae dicta magnam, delectus
            inventore, excepturi voluptates iste dolor sit amet consectetur
            adipisicing elit. Cum libero a, debitis tenetur ex consequuntur sit
            veritatis aliquid minima quae fugit laborum molestiae dicta magnam,
            delectus inventore, excepturi voluptates iste dolor sit amet
            consectetur adipisicing elit. Cum libero a, debitis tenetur ex
            consequuntur sit veritatis aliquid minima quae fugit laborum iste.
          </div>
        </div>
      </div>
    );
    return <UserBase history={this.props.history} content={content} />;
  }
}

export default AboutUs;
