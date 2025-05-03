/* eslint-disable */
import React, { Component } from 'react';
// import { render } from 'react-dom';
import './AddVariant.css';
import TexticonProduct from '../../../components/superAdmin/TexttIconProduct/TexticonProduct';
import pro1 from '../../../static/superAdmin/product/product.png'
import pro2 from '../../../static/superAdmin/product/product2.png'
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
import Loading from '../../../components/superAdmin/Loading/Loading';
// import Box from '../../../components/superAdmin/Box/box';
// import Box2 from '../../../components/superAdmin/Box2/Box2';
import { NavLink, Route } from 'react-router-dom';
import AddVariantRect from '../../../components/superAdmin/AddVarianRect/AddVariantRect'

import { connect } from 'react-redux';
import * as ACTION from '../../../middleware/actions/superAdminActions';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import Blank from '../../../components/superAdmin/Blank/Blank';
class AddVariant extends Component {
    state = {}
    render() {
        return (
            <div className="Av-flex-container">
                <div>
                    <Navbar history={this.props.history} />
                </div>
                <div>
                    <Sidenav />
                </div>
                {!(this.props.isLoading) ?
                    <div className="Av-contentContainer">
                        <div className="Av-headerContainer">
                            <TexticonProduct text="PRODUCT" img={pro1} />
                            {/* <NavLink className="nav" to="/SuperAdmin/AddProduct/"><Box2 text="BACK" /></NavLink> */}
                        </div>
                        <AddVariantRect text="PRODUCTS VARIANTS" img={pro2} />
                        <div className="save">
                            <NavLink className="nav" to="/SuperAdmin/AddProduct/"><h3 className="txtsave">SAVE CHANGES</h3></NavLink>
                        </div>
                        <Blank />
                        <Blank />
                        <Blank />
                        <Blank />
                    </div>

                    : <Loading />}
            </div>
        );
    }
}

export default AddVariant;