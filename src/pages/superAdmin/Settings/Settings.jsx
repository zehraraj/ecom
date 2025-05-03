/* eslint-disable */
import React, { Component } from "react";
import "./Settings.css";
import { NavLink } from "react-router-dom";
import Sidenav from "../../../components/superAdmin/SideNav/SideNav";
import Navbar from "../../../components/superAdmin/Navbar/Navbar";
import TexticonProduct from "../../../components/superAdmin/TexttIconProduct/TexticonProduct";
import pro1 from "../../../static/superAdmin/settings/settings.png";
import overview from "../../../static/superAdmin/overview.png";
import business from "../../../static/superAdmin/businessinfo.png";
import regional from "../../../static/superAdmin/regional.png";
import social from "../../../static/superAdmin/saccount.png";
import Blank from "../../../components/superAdmin/Blank/Blank";
import TextIcon from "../../../components/superAdmin/TextIcon/TextIcon";
import SettingBox from "../../../components/superAdmin/SettingBox/SettingBox";
import Base from "../../../components/superAdmin/Base/Base";

class Settings extends Component {
  state = {};
  render() {
    const content = (
      <div className="SettingsRoootContainer">
        <div className="headerContainer">
          <TextIcon text="SETTINGS" img={pro1} />
        </div>
        <div className="innerContainerres">
          <div className="handle">
            <SettingBox
              to={() =>
                this.props.history.push("/SuperAdmin/Settings/Overview")
              }
              text="Overview"
              icon={overview}
              value="Define Your Website"
            />
            <SettingBox
              to={() =>
                this.props.history.push("/SuperAdmin/Settings/SocialMedia")
              }
              text="Social Media"
              icon={social}
              value="Facebook, Instagram, etc"
            />
          </div>

          <div className="handle1">
            {/* <SettingBox to={() => this.props.history.push('/SuperAdmin/Settings/Regional')} text="REGIONAL SETTINGS" icon={regional} value="Set The Currency, Time-Zone, etc" /> */}
            <SettingBox
              to={() =>
                this.props.history.push("/SuperAdmin/Settings/Business")
              }
              text="Business Info"
              icon={business}
              value="Business Name, Address, etc"
            />
          </div>
        </div>
      </div>
    );
    return <Base history={this.props.history} content={content} />;
  }
}

export default Settings;
