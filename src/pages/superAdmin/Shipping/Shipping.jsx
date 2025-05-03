/* eslint-disable */
import React, { Component } from 'react';
import './Shipping.css';
// import { render } from 'react-dom';
import Texticon2 from '../../../components/superAdmin/Texticon2/Texticon2';
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
import pro1 from '../../../static/superAdmin/shipping/s1.png'
import pro2 from '../../../static/superAdmin/shipping/s2.png'
import ShippingRect from '../../../components/superAdmin/ShippingRect/ShippingRect';
import { NavLink, Route } from 'react-router-dom';
import Loading from '../../../components/superAdmin/Loading/Loading';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import TexticonProduct from '../../../components/superAdmin/TexttIconProduct/TexticonProduct';
import Blank from '../../../components/superAdmin/Blank/Blank';
import Dashboardpageind from '../../../components/superAdmin/Dashboardpageind/Dashboardpageind';
class Shipping extends Component {
    state = {
        Dash: []
    }
    render() {
        return (
            <div className="sh-flex-container">
                <div>
                    <Navbar history={this.props.history} />
                </div>
                <div>
                    <Sidenav />
                </div>
                {!(this.props.isLoading) ?
                    <div className="p-contentContainer">
                        <div className="p-headerContainer">
                            <TexticonProduct text="SHIPPING" img={pro1} />
                        </div>
                        <ShippingRect texts={["ID", "NAME", "QTY", "PRICE"]} img={pro2} text="Shipping" text1="SHIPPING ADDRESS" text2="DATE" text3="PRODUCT" Dash={this.state.Dash} />
                        <Dashboardpageind current={this.state.current} handleUrl={this.handleUrl} />
                        <Blank />
                        <Blank />
                        <Blank />
                    </div>
                    : <Loading />}
            </div>
        );
    }
}

export default Shipping;