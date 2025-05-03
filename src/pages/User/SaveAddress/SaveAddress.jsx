import React, { Component } from 'react';
import './SaveAddress.css';
import SideTab from '../../../components/User/SideTab/SideTab';
// import Title from '../../../components/User/Title/Title';
import Navbar from '../../../components/User/Header/Header';
import SaveAddressRect from '../../../components/User/SaveAddressRect/SaveAddressRect';
class SaveAddress extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="saveadd-flex-container">
                <Navbar/>
                <div className="content-container">
                    {/* <Title text1="ACCOUNT" text2="zehra6@gmail.com"/> */}
                    {/* <div className="content-container1"> */}
                    <SideTab />    
                    <div className="content-container2">
                        <SaveAddressRect/>
                    </div>
                </div>

                <div className="Smob-content-container">
                    <SaveAddressRect/>
                </div>
            </div>
            // </div>
        );
    }
}
 
export default SaveAddress;