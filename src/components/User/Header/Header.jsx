/* eslint-disable */
import React, { Component } from "react";
import MenueTxt from "../MenueTxt/MenueTxt";
import Search from "../Serach/Search";
import ImgTxt from "../ImgTxt/ImgTxt";
import ImgTxt2 from "../ImgTxt2/ImgTxt2";
import Pro from "../Pro/Pro";
import Pro1 from "../Pro1/Pro1";
import Pro2 from "../Pro2/Pro2";
import ImgTxt3 from "../ImgTxt3/ImgTxt3";
import Prfl from "../../../static/User/Navbar/usr.png";
import Bag from "../../../static/User/Navbar/bag.png";
import Wshlst from "../../../static/User/Navbar/book.png";
import logo1 from "../../../static/superAdmin/sitelogo/Uilogo.png";
import { NavLink, Route } from "react-router-dom";
import "./Header.css";
import UserLogo from "../UserLogo/UserLogo";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="HeaderContainer">
        <div className="logo" onClick={() => this.props.history.replace("/")}>
          <img src={logo1} />
        </div>
        <MenueTxt history={this.props.history} />
        <Search />
        <div className="headerRight">
          <Pro text="PROFILE" img={Prfl} />
          <div onClick={() => this.props.history.push("/Wishlist/")}>
            <Pro1 text="WISHLIST" img={Wshlst} />
          </div>
          <div onClick={() => this.props.history.push("/Cart/")}>
            <Pro2 text="MY CART" img={Bag} />
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
