/* eslint-disable */
import React, { Component } from 'react';
import img1 from '../../../static/User/HomePage/Collections/collection1.jpeg'
import img2 from '../../../static/User/HomePage/Collections/collection2.jpeg'
import './Collections.css';


class Collections extends Component {
  state = {}
  render() {
    const card = (item) => {
      return <div className="collectionsCardBorder">

        <div className="collectionsCard">
          <img src={img1} alt="" />
          <div className="collectionsCardText">
            Collection {item}
          </div>
        </div>
      </div>
    }

    return (
      <div className="collectionsRoot">
        {[1, 2, 3].map((item, index) =>
          card(item)
        )}
      </div>
    );
  }
}

export default Collections;