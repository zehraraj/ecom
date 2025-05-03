import React, { Component } from 'react';
import './Coupon.css';
import Navbar from '../../../components/User/Header/Header';
// import Title from '../../../components/User/Title/Title';
import SideTab from '../../../components/User/SideTab/SideTab';
import CouponRect from '../../../components/User/CouponRect/CouponRect';
import Blank from '../../../components/superAdmin/Blank/Blank';

class Coupon extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Coupon-flex-container">
                <Navbar/>
                <div className="content-container">
                    {/* <Title text1="ACCOUNT" text2="zehra6@gmail.com"/> */}
                    {/* <div className="content-container1"> */}
                    <SideTab />    
                    <div className="content-container2">
                        <CouponRect/>
                        <Blank/>
                    </div>
                </div>

                <div className="Cmob-content-container">
                    <CouponRect/>
                </div>
            </div>
            // </div>
        );
    }
}
 
export default Coupon;