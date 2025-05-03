/* eslint-disable */
import React, { Component } from 'react';
import Header from '../../../components/User/Header/Header';
import Carousel from '../../../components/User/Carousel/Carousel';
import Footer from '../../../components/User/Footer/Footer';
import './UserHome.css'
import HomeImgContainer from '../../../components/User/HomeImgContainer/HomeImgContainer';
import HomeCollContainer from '../../../components/User/HomeCollContainer/HomeCollContainer';
import { NavLink, Route } from 'react-router-dom';
import UserBase from '../../../components/User/UserBase/UserBase'
import Featured from '../../../components/User/Featured/Featured';
import Collections from '../../../components/User/Collections/Collections';
import Categories from '../../../components/User/Categories/Categories';
import ProductCollection from '../../../components/User/ProductCollection/ProductCollection';
import CategorySlider from '../../../components/User/CategorySlider/CategorySlider';
// import AboutUs from '../../../components/User/AboutUs/AboutUs';


class UserHome extends Component {
    state = {}
    render() {
        const content = (
            <div className="page-container">
                <Carousel />
                <div className="content-container">
                    <CategorySlider />
                    <ProductCollection />
                </div>
            </div>
        )
        return (
            <UserBase content={content} history={this.props.history} />
        );
    }
}

export default UserHome;
