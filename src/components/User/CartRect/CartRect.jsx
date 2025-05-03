import React, { Component } from 'react';
import './CartRect.css';

class CartRect extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="cart-rect">
                <div className="header">
                    <h3 className="txt">DETAILS</h3>
                </div>
                <hr className="hr"/>
                <div className="bill-cont">
                    <div className="txt-cont1">
                        <h3 className="txt">Cart Total</h3>
                        <h3 className="txt">Cart Discount</h3>
                        <h3 className="txt">Apply Coupons</h3>
                        <h3 className="txt">Delivery Charges</h3>
                    </div>
                    <div className="txt-cont2">
                        <h3 className="txt1">₹1,198</h3>
                        <h3 className="txt1">-₹300</h3>
                        <h3 className="txt2">Coupons</h3>
                        <h3 className="txt1">₹40</h3>
                    </div>
                </div>
                <hr className="hr"/>
                <div className="footer">
                    <h3 className="txt1">TOTAL</h3>
                    <h3 className="txt2">₹1,238</h3>
                </div>
                
            </div>
        );
    }
}
 
export default CartRect;