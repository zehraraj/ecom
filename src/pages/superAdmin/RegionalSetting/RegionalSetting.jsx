import React, { Component } from 'react';
import './RegionalSetting.css';
import { NavLink } from "react-router-dom";
// import { render } from 'react-dom';
import logo1 from '../../../static/superAdmin/user-clock-solid_2020-04-03/RS2.png'
import regional from '../../../static/superAdmin/regional.png'
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
// import { connect } from 'react-redux'
// import * as ACTION from '../../../middleware/actions/superAdminActions';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
// import SocialTexticon from '../../../components/superAdmin/SocialTexticon/SocialTexticon';
import Blank from '../../../components/superAdmin/Blank/Blank';
// import Loading from '../../../components/superAdmin/Loading/Loading';
import Box2 from '../../../components/superAdmin/Box2/Box2';
// import TexticonProduct from '../../../components/superAdmin/TexttIconProduct/TexticonProduct';
import RegionalSettingRect from '../../../components/superAdmin/RegionalSettingRect/RegionalSettingRect';
import Distxtcont from '../../../components/superAdmin/Disktexticoncont/Distxtcont';

class RegionalSetting extends Component {
    render() {
        return (
            <div className="RS-flex-container">
                <div>
                    <Navbar history={this.props.history} />
                </div>
                <div>
                    <Sidenav />
                </div>
                <div className="RS-contentContainer">
                    <div className="RS-headerContainer">
                        <Distxtcont text="Regional Setting" img={logo1} />
                        <NavLink className="nav" to="/SuperAdmin/Settings/"><Box2 text="Back" /></NavLink>
                    </div>
                    <RegionalSettingRect text="Regional Settings" img={regional} />
                    <Blank />
                    <Blank />
                    <Blank />
                </div>
            </div>
        );
    }
}

export default RegionalSetting;