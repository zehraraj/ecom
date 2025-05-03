/* eslint-disable */

import React, { Component } from "react";
import CarouselSlider from "react-carousel-slider";
import "material-icons/iconfont/material-icons.scss";
import one from "../../../static/User/homeimg1/image2/1.png";
import "./Cards.css";
class Cards extends Component {
  state = {
    Scientists: {
      items: [
        {
          imgSrc: "",
        },
        {
          imgSrc: { one },
        },
        {
          imgSrc: { one },
        },
        {
          imgSrc: { one },
        },
        {
          imgSrc: { one },
        },
      ],
    },
  };

  render() {
    let itemsStyle = {
      padding: "0px",
      background: "white",
      margin: "0 30px",
      borderRadius: "4px",
    };

    let imgStyle = {
      height: "100%",
    };

    let scientists = this.state.Scientists.items.map((item, index) => (
      <div key={index}>
        <img style={imgStyle} src={one}></img>
      </div>
    ));

    let btnWrapperStyle = {
      position: "relative",
      borderRadius: "50%",
      height: "50px",
      width: "50px",
      textAlign: "center",
    };

    let btnStyle = {
      display: "inline-block",
      position: "relative",
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "36px",
    };

    let rBtnCpnt = (
      <div style={btnWrapperStyle}>
        <div style={btnStyle} className="material-icons">
          chevron_right
        </div>
      </div>
    );

    let lBtnCpnt = (
      <div style={btnWrapperStyle}>
        <div style={btnStyle} className="material-icons">
          chevron_left
        </div>
      </div>
    );

    let scientistsCard = (
      <CarouselSlider
        autoPlay={true}
        sliderBoxStyle={{
          height: "350px",
          width: "100%",
          background: "transparent",
        }}
        accEle={{ dots: false }}
        slideCpnts={scientists}
        itemsStyle={itemsStyle}
        buttonSetting={{ placeOn: "middle-outside" }}
        rBtnCpnt={rBtnCpnt}
        lBtnCpnt={lBtnCpnt}
      />
    );

    return (
      <div style={{ position: "relative", margin: "0 auto", width: "94%" }}>
        {scientistsCard}
      </div>
    );
  }
}

export default Cards;
