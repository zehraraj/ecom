import React, { Component } from 'react';
import './OrderAndReturn.css';
import Navbar from '../../../components/User/Header/Header';
// import Title from '../../../components/User/Title/Title';
import SideTab from '../../../components/User/SideTab/SideTab';
import OrderAndReturnRect from '../../../components/User/OrderAndReturnRect/OrderAndReturnRect';

class OrderAndReturn extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="OAR-flex-container">
                <Navbar/>
                <div className="content-container">
                    {/* <Title text1="ACCOUNT" text2="zehra6@gmail.com"/> */}
                    {/* <div className="content-container1"> */}
                    <SideTab />    
                    <div className="content-container2">
                        <OrderAndReturnRect/>
                    </div>
                </div>

                <div className="Omob-content-container">
                    <OrderAndReturnRect/>
                </div>
            </div>
            // </div>
        );
    }
}
 
export default OrderAndReturn;