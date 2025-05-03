import React, { Component } from 'react';
import './OrderAndReturnLine.css';

class OrderAndReturnLine extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="ordr-line-cont">
                <div className="datacont">
                    <h3 className="txt">Order No:</h3>
                </div>
                <div className="container1">
                    <div className="container2">
                        <div className="blank">
                        </div>
                        <hr className="hr"/>
                        <div className="txt-cont">
                            <h3 className="txt1">Tokyo Talkies Mid Rise Jeans</h3>
                            <div className="innertxt">
                                <h3 className="txt2">SIZE: 32</h3>
                                <h3 className="txt3">QTY: 1</h3>
                            </div>
                        </div>
                        <div className="txt-cont2">
                            <h3 className="txt">Rs. 999</h3>
                        </div>
                        <div className="txt-cont3">
                            <h3 className="txt1">₹ 599</h3>
                            <h3 className="txt2">(60% OFF)</h3>
                        </div>
                    </div>

                    <div className="container3">
                        <h3 className="txt1">RETURNED</h3>
                        {/* <hr className="hr"/> */}
                        <h3 className="txt2">20 MAR 2020</h3>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default OrderAndReturnLine;