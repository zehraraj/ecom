/* eslint-disable */
import React, { Component } from "react";
import "./Cart.css";
// import Navbar from "../../../components/User/Header/Header";
import Title from "../../../components/User/Title/Title";
import CartLine from "../../../components/User/CartLine/CartLine";
import CartRect from "../../../components/User/CartRect/CartRect";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div className="Cart-flex-container">
        <div className="content-container">
          <div className="content-container1">
            <div className="titlecontr">
              <div className="txt-cont1">
                <h3 className="first">PRODUCT</h3>
                <h3 className="second">QUANTITY</h3>
                <h3 className="third">TOTAL</h3>
              </div>
            </div>
            <div className="hr-div">
              <hr className="hr-1" />
            </div>
            <div className="inner-cont">
              <CartLine />
              <CartLine />
            </div>
            <div className="checkout">
              <div className="div1">
                <h3 className="ship">SHIPPING:</h3>
                <h3 className="cost">FREE</h3>
              </div>
              <hr className="hr-2" />
              <div className="div2">
                <h3 className="total">TOTAL:</h3>
                <h3 className="amt">Rs 800</h3>
              </div>

              <div className="b1">
                <h3 className="btnn">CHECKOUT NOW</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
