/* eslint-disable */
import React, { Component } from 'react';
import './Categories.css';
// Images
import line from '../../../static/User/Misc/line.png';
import img1 from '../../../static/User/HomePage/Categories/categories1.jpeg';
import leftArrow from '../../../static/User/Misc/leftArrow.png';
import rightArrow from '../../../static/User/Misc/rightArrow.png';


class Categories extends Component {
  state = {
    page: 1,
    categories: [
      1, 2, 3,
      4, 1, 2,
      // 3, 4
    ],
    lastItemIndex: 2,
  }
  render() {
    const Card = (params) => {
      return <div className="categoriesCard">
        <div className="categoriesCardImage" onClick={() => { }}>
          <img src={img1} alt="" />
        </div>
        <div className="categoriesCardContent">
          <div className="categoriesCardText" onClick={() => { }}>
            Men
          </div>
          <div className="categoriesCardNumberLine">
            <div className="categoriesCardNumberLineContent">
              <svg height="100%" width="4vw">
                <g fill="none">
                  <path stroke-width="0.4" stroke="gray" d="M0 9 l50 0" />
                </g>
              </svg>
              {params.index}
            </div>
          </div>
        </div>
      </div>
    }
    let temp = this.state.lastItemIndex - 2;
    return (
      <div className="categoriesRoot">
        {this.state.lastItemIndex !== 2 ?
          <div className="categoriesLeftArrowContainer"
            onClick={() => this.setState({ page: this.state.page - 1, lastItemIndex: this.state.lastItemIndex - 1 })}
          >
            <img src={leftArrow} alt="" />
          </div>
          :
          <div className="categoriesLeftArrowContainer">
            <img src="" alt="" />
          </div>
        }
        <div className="categoriesContent">
          {this.state.categories.map((item, index) => {
            // if ((index + 1) <= (3 * this.state.page - 3)) {
            if (index < temp) return <div className="categoriesCardPrev">
              <Card index={index + 1} />
            </div>

            if (index > this.state.lastItemIndex) return <div className="categoriesCardNext">
              <Card index={index + 1} />
            </div>

            return <Card index={index + 1} />

            // }
            // if (((index + 1) > (3 * this.state.page - 3)) && ((index + 1) <= (3 * this.state.page))) {
            //   return <Card index={index + 1} />
            // } else { }
          })}
        </div>
        {/* <div className="categoriesContent"> */}
        {this.state.categories.map((item, index) => {
          // if (index < temp) {
          //   return <div className="categoriesCardNo0">
          //     <Card index={index + 1} />
          //   </div>
          // } else if (index === this.state.lastItemIndex + 1) {
          //   return <div className="categoriesCardNo1">
          //     <Card index={index + 1} />
          //   </div>
          // } else if (index === this.state.lastItemIndex + 2) {
          //   return <div className="categoriesCardNo2">
          //     <Card index={index + 1} />
          //   </div>
          // } else if (index === this.state.lastItemIndex + 3) {
          //   return <div className="categoriesCardNo3">
          //     <Card index={index + 1} />
          //   </div>
          // }
          // return <Card index={index + 1} />
        })}
        {/* </div> */}
        {this.state.lastItemIndex !== this.state.categories.length - 1 ?
          <div className="categoriesRightArrowContainer"
            onClick={() => this.setState({ page: this.state.page + 1, lastItemIndex: this.state.lastItemIndex + 1 })}
          >
            <img src={rightArrow} alt="" />
          </div> :
          <div className="categoriesRightArrowContainer">
            <img src="" alt="" />
          </div>
        }
      </div >
    );
  }
}

export default Categories;