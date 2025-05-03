import React, { Component } from "react";
import "./CartLine.css";
import img1 from "../../../static/User/Cart/minus.png";
import img from "../../../static/User/Cart/plus.png";

class CartLine extends Component {
  state = {};
  render() {
    return (
      <div className="cart-line-cont">
        <div className="container1">
          <div className="container2">
            <div className="blank"></div>
            <div className="txt-cont">
              <h3 className="txt1">CARVER JACKET</h3>
              <h3 className="txt11">Light Grey</h3>
              <div className="innertxt">
                <h3 className="txt2">Rs 400</h3>
              </div>
            </div>
            <div className="txt-cont2">
              <div className="blank1">
                <img className="blank1-minus" src={img1} alt='' />
                <h3 className="txt-num">1</h3>
                <img className="blank1-plus" src={img} alt='' />
                <div className="remove">REMOVE</div>
              </div>
            </div>
            <div className="txt-cont3">
              <h3 className="txt-cont3-1">Rs 400</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartLine;
