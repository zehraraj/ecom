/* eslint-disable */
import React, { Component } from 'react';
import './ProductDetailsImg.css';
import Navbar from '../../../components/User/Header/Header';

class ProductDetailsImg extends Component {
    state = {}
    render() {
        return (
            <div className="ProDImg-flex-container">
                <img src={this.props.img} alt="" className="img" />
                <img src={this.props.img} alt="" className="img" />
            </div>
        );
    }
}

export default ProductDetailsImg;