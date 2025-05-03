/* eslint-disable */

import React, { Component } from 'react';
import './CouponLine.css';

class CouponLine extends Component {
    state = {}
    render() {
        return (
            <div className="Coupon-line-cont">
                {/* <div className="container1"> */}
                <div className="container2">
                    <div className="blank">
                        <div className="txt-cont">
                            <h3 className="txt1">20%</h3>
                            <h3 className="txt1">OFF</h3>
                        </div>
                    </div>
                    <hr className="hr2" />
                    <div className="txt-cont">
                        <div className="innertxt1">
                            <h3 className="txt1">On Minimum Purchase Of</h3>
                            <h3 className="txt2">Rs. 499</h3>
                        </div>
                        <div className="innertxt2">
                            <h3 className="txt3">CODE:</h3>
                            <h3 className="txt4"></h3>
                        </div>
                    </div>
                </div>

                <div className="container3">
                    <div className="txt-cont">
                        <h3 className="txt1">Expiry:</h3>
                        <h3 className="txt2">29 Jan 2020</h3>
                    </div>
                    {/* <hr className="hr" /> */}
                    <h3 className="txt3">11:59:59</h3>
                </div>
                {/* </div> */}
            </div>
        );
    }
}

export default CouponLine;