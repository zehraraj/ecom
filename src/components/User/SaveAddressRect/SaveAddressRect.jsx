/* eslint-disable */

import React, { Component } from 'react';
import './SaveAddressRect.css';
import SaveAddressCont from '../SaveAddressCont/SaveAddressCont';
import Button2 from '../Button2/Button2';
import Blank from '../../superAdmin/Blank/Blank';
import { NavLink, Route } from 'react-router-dom';

class SaveAddressRect extends Component {
    state = {}
    render() {
        return (
            <div className="SaveAddrect">
                <div className="title">
                    <h3 className="headtitle">Saved Address</h3>
                    <NavLink className="nav" to="/EditAddress/"><Button2 txt="ADD" /></NavLink>
                </div>

                {/*MOBAILE UI*/}
                <div className="title2">
                    <h3 className="headtitle">Saved Address</h3>
                </div>
                {/*MOBAILE UI*/}

                <div className="adsline">
                    <SaveAddressCont />
                </div>
            </div>
        );
    }
}

export default SaveAddressRect;