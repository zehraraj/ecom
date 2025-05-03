import React, { Component } from "react";
import Slider from "react-slick";

import leftArrow from "../../../static/User/Misc/leftArrow.png";
import rightArrow from "../../../static/User/Misc/rightArrow.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CategorySlider.css";

// Images
import img1 from "../../../static/User/HomePage/Carousel/carousel1.jpeg";
import img2 from "../../../static/User/HomePage/Carousel/carousel2.jpeg";
import img3 from "../../../static/User/HomePage/Carousel/carousel3.jpeg";
import img4 from "../../../static/User/HomePage/Carousel/carousel4.jpeg";

class CategorySlider extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.slider = React.createRef();
  }

  render() {
    const prevArrow = (
      <div className="test" onClick={() => this.slider.current.slickPrev()}>
        <img src={leftArrow} alt="" />
      </div>
    );

    const nextArrow = (
      <div
        className="CategorySliderNextArrow"
        onClick={() => this.slider.current.slickNext()}
      >
        <img src={rightArrow} alt="" />
      </div>
    );

    const settings = {
      dots: false,
      infinite: false,
      arrows: true,
      accessibility: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: prevArrow,
      nextArrow: nextArrow,
    };

    return (
      <div className="CategorySliderRoot">
        <Slider ref={this.slider} {...settings}>
          <div className="CategorySliderCard">
            <img src={img1} alt="" />
          </div>
          <div className="CategorySliderCard">
            <img src={img2} alt="" />
          </div>
          <div className="CategorySliderCard">
            <img src={img3} alt="" />
          </div>
          <div className="CategorySliderCard">
            <img src={img4} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default CategorySlider;
