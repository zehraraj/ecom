/* eslint-disable */

import React, { Component } from 'react';
import './Variantline.css';
import { NavLink } from 'react-router-dom';
class Variantline extends Component {
    state = {}
    render() {
        return (
            <div className="varline">
                <h3 className="text">{this.props.text1}</h3>
                <div className="inputv">
                    <input className="addBox2" type="text" placeholder={this.props.placeholderText} />
                    <NavLink className="nav" to="/SuperAdmin/AddVariant/"><img src={this.props.img} alt="" className="img" /></NavLink>
                </div>
            </div>
        );
    }
}

export default Variantline;