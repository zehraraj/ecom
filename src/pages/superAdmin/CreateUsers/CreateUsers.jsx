/* eslint-disable */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './CreateUsers.css';

import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
import CUserRect from "../../../components/superAdmin/CUserRect/AUserRect";
import Box2 from '../../../components/superAdmin/Box2/Box2';
import pro1 from '../../../static/superAdmin/User/Adminusers.png';
import pro2 from '../../../static/superAdmin/User/Adminusers.png';
import TextIcon from '../../../components/superAdmin/TextIcon/TextIcon';
import { connect } from 'react-redux'
import * as ACTION from '../../../middleware/actions/superAdminActions'

class AddUsers extends Component {

  render() {
    return (
      <div className="AU-Main-Cont">
        <div>
          <Navbar history={this.props.history} />
        </div>
        <div>
          <Sidenav />
        </div>
        <div className='U-contentContainer'>
          <div className='U-headerContainer'>
            <TextIcon text="CREATE USERS" img={pro1} />
            <NavLink className="nav" to="/SuperAdmin/Users/"><Box2 text="Back" /></NavLink>
          </div>
          <div className="innerContainer">
            <CUserRect history={this.props.history} />
          </div>
        </div>
      </div>
    );
  }
}


export default (AddUsers);