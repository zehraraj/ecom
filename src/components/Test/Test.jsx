/* eslint-disable */
import React, { Component } from "react";
// import Carousel from '../User/Carousel/Carousel';
// import Categories from '../User/Categories/Categories';
import img1 from '../../static/User/HomePage/Featured/featured1.jpeg'
import ProductCollection from '../User/ProductCollection/ProductCollection';
import './Test.css'

class Test extends Component {
  state = {};
  render() {
    return (
      <div className="testRoot">
        <ProductCollection history={this.props.history} />
      </div>
    );
  }
}

export default Test;
