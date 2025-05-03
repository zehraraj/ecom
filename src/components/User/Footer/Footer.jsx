/* eslint-disable */
import React, { Component } from "react";
import "./Footer.css";
import logo from "../../../static/User/Logo/Ui2.png";
import copy from "../../../static/User/Footer/copyright.png";
import twttr from "../../../static/User/SocialLogo/twit.png";
import link from "../../../static/User/SocialLogo/link.png";
import ig from "../../../static/User/SocialLogo/ig.png";
import fb from "../../../static/User/SocialLogo/fb.png";
import pin from "../../../static/User/SocialLogo/pin.png";
import { NavLink, Route } from "react-router-dom";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer-container">
        <div className="cont1">
          <div className="info-container">
            <NavLink className="nav" to="/">
              <img src={logo} alt="masorini" className="logo" />
            </NavLink>
            <img src={copy} alt="" className="copy" />
            <div className="info">
              <h3 className="infotxt">2020 Masorini</h3>
              <h3 className="infotxt1">All Rights Reserved</h3>
            </div>
          </div>
          <div className="about-container">
            <h3 className="txt1">ABOUT</h3>
            <h3 className="txt2">About Us</h3>
            <h3 className="txt2">Location</h3>
            <h3 className="txt2">Contact</h3>
          </div>
          <div className="contact-container">
            <h3 className="txt1">USEFUL LINKS</h3>
            <h3 className="txt2">Terms and Condition</h3>
            <h3 className="txt2">Privacy Policy</h3>
          </div>
          <div className="icon-container">
            <h3 className="txt1">FOLLOW US ON</h3>
            <div className="socialLogoText">
              <img src={ig} alt="masorini" />
              <h3 className="socialText">Instagram</h3>
            </div>
            <div className="socialLogoText">
              <img src={link} alt="masorini" />
              <h3 className="socialText">LinkedIn</h3>
            </div>
            <div className="socialLogoText">
              <img src={fb} alt="masorini" />
              <h3 className="socialText">Facebook</h3>
            </div>
            <div className="socialLogoText">
              <img src={twttr} alt="masorini" />
              <h3 className="socialText">Twitter</h3>
            </div>
            <div className="socialLogoText">
              <img src={pin} alt="masorini" />
              <h3 className="socialText">Pinterest</h3>
            </div>
          </div>
          <div className="feedback-container">
            <h3 className="txt1">LEAVE US A FEEDBACK.</h3>
            <div className="feed-inp">
              <input
                type="text"
                className="inp"
                style={{ background: "#f8f8f8" }}
              />
            </div>
            <div className="feed-sub">
              <input
                type="submit"
                value="  Submit  "
                style={{ width: "70px", height: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
