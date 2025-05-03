import React, { Component } from 'react';
import './EditProfile.css';
import ProEditRect from '../../../components/User/ProEditRect/ProEditRect';
// import Title from '../../../components/User/Title/Title';
import SideTab from '../../../components/User/SideTab/SideTab';
import Navbar from '../../../components/User/Header/Header';
import Blank from '../../../components/superAdmin/Blank/Blank';
class EditProfile extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="pro-edit-flex-container">
                <Navbar/>
                <div className="content-container">
                    {/* <Title text1="ACCOUNT" text2="zehra6@gmail.com"/> */}
                    {/* <div className="content-container1"> */}
                        <SideTab/>
                        <div className="content-container2">
                            <ProEditRect/>
                            <Blank/>            
                        </div>
                    </div> 
                </div>
            // </div>
        );
    }
}
 
export default EditProfile;