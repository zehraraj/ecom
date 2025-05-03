
/* eslint-disable */
import React, { Component } from 'react';
import './SaveAddressCont.css';
import { NavLink, Route } from 'react-router-dom';

class SaveAddressCont extends Component {
    state = {}
    render() {
        return (
            <div className="Addresscont">
                <div className="datacont">
                    <div className="namecont">
                        <h3 className="name"> Zehra Rajnagrwala</h3>
                    </div>
                    <div className="addresscont">
                        <h3 className="address"> 115 Sheetal chs,</h3>
                        <h3 className="address"> Room no. 8,</h3>
                        <h3 className="address"> Charkop sec no. 1,</h3>
                        <h3 className="address"> Kanidivali (w)</h3>
                    </div>
                    <div className="numcont">
                        <h3 className="num1">Mobile:</h3>
                        <h3 className="num1">7021648101</h3>
                    </div>
                </div>
                <hr className="hr" />

                <div className="container3">
                    <NavLink className="nav" to="/EditAddress/"> <h3 className="txt1">EDIT</h3></NavLink>
                    <hr className="hr" />
                    <h3 className="txt2">REMOVE</h3>
                </div>

                {/*MOBAILE UI*/}
                <div className="container4">
                    <NavLink className="nav" to="/EditAddress/"> <h3 className="txt1">EDIT</h3></NavLink>
                    <hr className="hr" />
                    <NavLink className="nav" to="/EditAddress/"><h3 className="txt2">ADD NEW ADDRESS</h3></NavLink>
                </div>
                {/*MOBAILE UI*/}
            </div>
        );
    }
}

export default SaveAddressCont;