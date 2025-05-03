/* eslint-disable */
import React, { Component } from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.css";
import img1 from "../../../static/User/HomePage/Carousel/carousel1.jpeg"
import img2 from "../../../static/User/HomePage/Carousel/carousel2.jpeg";
import img3 from "../../../static/User/HomePage/Carousel/carousel3.jpeg";
import img4 from "../../../static/User/HomePage/Carousel/carousel4.jpeg";
  
class Carousel extends Component {
  handleSize = (component) => {
    let screenWidth = 1200
    component.style = { height: component.offsetHeight * (screenWidth / component.offsetWidth) }
  }

  render() {
    const handleOnDragStart = (e) => e.preventDefault();
    return (
      <AliceCarousel
        mouseTrackingEnabled={true}
        buttonsDisabled
        dotsDisabled
        autoPlay={true}
        autoPlayInterval={3000}
        fadeOutAnimation={true}
        swipeDisabled={true}
        stopAutoPlayOnHover={false}
      >
        <div className="carouselRoot">
          <img
            src={img1}
            ref={component => {
              this.handleSize(component);
            }}
            onDragStart={handleOnDragStart}
            className="carousel"
          />
        </div>
        <div className="carouselRoot">
          <img
            src={img2}
            ref={component => {
              this.handleSize(component);
            }}
            onDragStart={handleOnDragStart}
            className="carousel"
          />
        </div>
        <div className="carouselRoot">
          <img
            src={img3}
            ref={component => {
              this.handleSize(component);
            }}
            onDragStart={handleOnDragStart}
            className="carousel"
          />
        </div>
        <div className="carouselRoot">
          <img
            src={img4}
            ref={component => {
              this.handleSize(component);
            }}
            onDragStart={handleOnDragStart}
            className="carousel"
          />
        </div>
      </AliceCarousel>
    );
  }
};

export default Carousel;