import React, { Component } from 'react';
import './EditAddress.css';
// import Title from '../../../components/User/Title/Title';
import SideTab from '../../../components/User/SideTab/SideTab';
import Navbar from '../../../components/User/Header/Header';
import EditAddressRect from '../../../components/User/EditAddressRect/EditAddressRect';
import Blank from '../../../components/superAdmin/Blank/Blank';

class EditAddress extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="EditAdd-flex-container">
                <Navbar/>
                <div className="content-container">
                    {/* <Title text1="ACCOUNT" text2="zehra6@gmail.com"/> */}
                    {/* <div className="content-container1"> */}
                        <SideTab/>
                        <div className="content-container2">
                            <EditAddressRect/> 
                            <Blank/>
                        </div>
                    </div>
                </div>
            // </div>
        );
    }
}
 
export default EditAddress;