/* eslint-disable */
import React from "react";
import img from "../../../static/User/product/p1.png";
import img1 from "../../../static/User/product/heart.png";
import "./ProductImgcont.css";
import { NavLink, Route } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { IconContext } from "react-icons";
import Button from "@material-ui/core/Button";

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const descriptionElementRef = React.useRef(null);

  return (
    <div className="maim-img">
      <Button>
        <div className="img-box1">
          <NavLink className="nav" to="/ProductDetails/">
            <img src={img} className="img"></img>
          </NavLink>
        </div>
      </Button>
      <div className="img-box">
        <div className="btn-cont">
          <div className="bttn1">
            <NavLink className="nav" to="/Cart/">
              <h3 className="btn-txt">ADD TO CART</h3>
            </NavLink>
          </div>
        </div>
        <div className="p-txt-cont">
          <h3 className="txt1">Sanskriti</h3>

          <h3 className="txt2">Women Printed Kurta</h3>

          <div className="iner-txt">
            <h3 className="txt1">Rs. 999</h3>
            <h3 className="txt2">Rs. 599</h3>
            <h3 className="txt3">(60% OFF)</h3>
          </div>
        </div>

        <div className="heart">
          <FiHeart />
        </div>
      </div>
    </div>
  );
}
