/* eslint-disable */
import React, { Component } from 'react';
import './FaviconLine.css';
import { NavLink, Route } from 'react-router-dom';
class FaviconLine extends Component {
    state = {}
    render() {
        return (
            <div className="favline">
                <h3 className="text">{this.props.text1}</h3>
                <div className="inputv">
                    <input className="addBox2" type="text" placeholder={this.props.placeholderText} />
                    <NavLink className="nav" to=""><img src={this.props.img} alt="" className="img" /></NavLink>
                </div>
            </div>
        );
    }
}

export default FaviconLine;