/* eslint-disable */

import React, { Component } from 'react';
import './ProEditRect.css';
import Button from '../../../components/User/Button1/Button';
import ProEditLine from '../../../components/User/ProEditLine/ProEditLine';
import ProEditLine1 from '../../../components/User/ProEditLine1/ProEditLine1';
import ProEditLine2 from '../../../components/User/ProEditLine2/ProEditLine2';
import ProEditLine3 from '../../../components/User/ProEditLine3/ProEditLine3';
import GenderLine from '../../../components/User/GenderLine/GenderLine';
import Button3 from '../../../components/User/Button3/Button3';
import { NavLink, Route } from 'react-router-dom';
class ProEditRect extends Component {
    state = {}
    render() {
        return (
            <div className="pro-edit-rect">
                <div className="title">
                    <h3 className="headtitle">Edit Profile</h3>
                </div>
                {/* <hr className="hr" /> */}
                <div className="line-container">
                    <ProEditLine/>
                    <ProEditLine1/>
                    <ProEditLine2/>
                    <ProEditLine3/>
                    <GenderLine/>
                </div>
                <NavLink className="nav" to="/ProfileDetails/"><Button3 txt="SAVE" /></NavLink>
            </div>
        );
    }
}

export default ProEditRect;