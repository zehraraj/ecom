/* eslint-disable */

import React, { Component } from 'react';
import './HomeImgContainer.css'
import one from '../../../static/User/homeimg1/image2/1.png';
import Cards from '../../User/Cards/Cards';
class HomeImgContainer extends Component {
    state = {}
    render() {
        return (
            <div className="img-container">
                <h3 className="img-txt">{this.props.txt}</h3>
                <Cards />
            </div>
        );
    }
}
export default HomeImgContainer;