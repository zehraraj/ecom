import React, { Component } from 'react';
// import { render } from 'react-dom';
import { NavLink } from 'react-router-dom';
import './SideNav2.css';
import Text from '../Text/Text' 
   
class menu1 extends Component {
    state = {}
    render() {
        return (
            <div className="sidenavContainer">
               
                <NavLink className="nav" to="/SuperAdmin/Discounts/"><Text text="SALES" /></NavLink>
                <NavLink className="nav" to="/SuperAdmin/Inventory/"><Text text="VOUCHERS" /></NavLink>
              
            </div>
        );
    }
}

export default menu1;
