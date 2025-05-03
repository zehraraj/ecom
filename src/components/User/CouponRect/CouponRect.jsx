/* eslint-disable */

import React, { Component } from 'react';
import './CouponRect.css';
import CouponLine from '../CouponLine/CouponLine';
import Blank from '../../superAdmin/Blank/Blank';

class CouponRect extends Component {
    state = {}
    render() {
        return (
            <div className="Coupon-rect">
                <div className="title">
                    <h3 className="headtitle">Coupon</h3>
                </div>
                <div className="couponline">
                    <CouponLine />
                    <CouponLine />
                    <CouponLine />
                    <CouponLine />
                    <CouponLine />
                </div>
            </div>
        );
    }
}

export default CouponRect;