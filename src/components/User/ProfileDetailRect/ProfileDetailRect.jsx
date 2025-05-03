/* eslint-disable */

import React, { Component } from 'react';
import './ProfileDetailRect.css'
import { NavLink, Route } from 'react-router-dom';
import Button1 from '../../../components/User/Button1/Button';
class ProductDetailRect extends Component {
    state = {}
    render() {
        return (
            <div className="Prorect">
                <div className="title">
                    <h3 className="headtitle">Profile Details</h3>
                </div>
                {/* <hr className="hr" /> */}
                <div className="Procont">
                    <div className="datacont">
                        <div className="txt1-cont">
                            <h3 className="txt1">Email id </h3>
                            <h3 className="txt2">First Name</h3>
                            <h3 className="txt2">Last Name</h3>
                            <h3 className="txt2">Gender</h3>
                            <h3 className="txt2">Mobile No</h3>
                        </div>
                        <div className="txt2-cont">
                            <h3 className="txt1">Zehraraj6@gmail.com</h3>
                            <h3 className="txt2">Zehra</h3>
                            <h3 className="txt2">Rajnagarwala</h3>
                            <h3 className="txt2"></h3>
                            <h3 className="txt2">7021648101</h3>
                        </div>
                    </div>
                </div>
                <NavLink className="nav" to="/EditProfile/"> <Button1 txt="Edit" /></NavLink>
            </div>
        );
    }
}

export default ProductDetailRect;

