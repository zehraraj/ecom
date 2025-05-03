/* eslint-disable */
import React, { Component } from 'react';
import './Featured.css'
import img1 from '../../../static/User/HomePage/Featured/featured1.jpeg';
import img2 from '../../../static/User/HomePage/Featured/featured2.jpeg';
import img3 from '../../../static/User/HomePage/Featured/featured3.jpeg';
import img4 from '../../../static/User/HomePage/Featured/featured4.jpeg';
import Card from '../Card/Card'

class Featured extends Component {
  state = {}
  render() {
    return (
      <div className="featuredRoot">
        <div className="featuredTitle">Featured</div>
        <div className="featuredContentContainer">
          {[[img1, img2, img3, img4], [img1, img2, img3, img4],].map((item, index) => {
            return <div className="featuredContentRow">
              {item.map((item, index) =>
                <Card image={item} />
              )}
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default Featured;