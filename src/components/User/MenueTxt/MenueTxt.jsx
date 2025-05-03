/* eslint-disable */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './MenueTxt.css';
class MenueTxt extends Component {
    state = {}
    render() {
        return (
            <div className="MenuetxtContainer">
                <div className="" onClick={() => this.props.history.push("/Products/")}>
                    <h3 className="MenueTxt">MEN</h3>
                </div>
                <div className="" onClick={() => this.props.history.push("/Products/")}>
                    <h3 className="MenueTxt">WOMEN</h3>
                </div>

            </div>

        );
    }
}

export default MenueTxt;
