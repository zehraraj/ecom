/* eslint-disable */
import React, { Component } from 'react';
import img from '../../../static/User/product/p1.png'
import './WishlistImgcont.css';
import { NavLink, Route } from 'react-router-dom';

class WishlistImgcont extends Component {
    state = {}
    render() {
        return (
            <div className="Wishlist-img-box">
                <img src={img} className="img"></img>
                <div className="p-txt-cont">
                    <h3 className="txt1">Sanskriti</h3>
                    <h3 className="txt2">Women Printed Kurta</h3>
                    <div className="iner-txt">
                        <h3 className="txt1">Rs. 999</h3>
                        <h3 className="txt2">Rs. 599</h3>
                        <h3 className="txt3">(60% OFF)</h3>
                    </div>
                </div>
                <div className="btn-cont">
                    <div className="bttn1">
                    <NavLink className="nav" to="/Cart/"><h3 className="btn-txt">MOVE TO CART</h3></NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default WishlistImgcont;