/* eslint-disable */

import React, { Component } from 'react';
import './EditAddressRect.css';
import EditAddressLine from '../EditAddressLine/EditAddressLine';
import EditAddressLine1 from '../EditAddressLine1/EditAddressLine1';
import EditAddressLine2 from '../EditAddressLine2/EditAddressLine2';
import EditAddressLine3 from '../EditAddressLine3/EditAddressLine3';
import EditAddressLine4 from '../EditAddressLine4/EditAddressLine4';
import EditAddressLine5 from '../EditAddressLine5/EditAddressLine5';
import EditAddressLine6 from '../EditAddressLine6/EditAddressLine6';
import EditAddressLine7 from '../EditAddressLine7/EditAddressLine7';
import EditAddressLine8 from '../EditAddressLine8/EditAddressLine8';
import EditAddressLine9 from '../EditAddressLine9/EditAddressLine9';
import Button3 from '../Button3/Button3';
import Button4 from '../Button4/Button4';
import { NavLink, Route } from 'react-router-dom';

class EditAddressRect extends Component {
    state = {}
    render() {
        return (
            <div className="editadd-rect">
                <div className="title">
                    <h3 className="headtitle">Edit Address</h3>
                </div>
                {/* <hr className="hr" /> */}
                <div className="EditAdd-line-container">
                    <div className="one">
                        <EditAddressLine txt1="Plot Number" />
                        <EditAddressLine1 txt1="Wing" />
                        <EditAddressLine2 txt1="Street Name" />
                        <EditAddressLine8 txt1="Country" />
                        <EditAddressLine3 txt1="City" />
                    </div>
                    <div className="one">
                        <EditAddressLine4 txt1="Building Name" />
                        <EditAddressLine5 txt1="Room Number" />
                        <EditAddressLine6 txt1="Landmark" />
                        <EditAddressLine9 txt1="State" />
                        <EditAddressLine7 txt1="Pincode" />
                    </div>
                </div>
                <NavLink className="nav" to="/Address/"><Button3 txt="SAVE" /></NavLink>
            </div>
        );
    }
}

export default EditAddressRect;