import React, { Component } from "react";
import "./ProfileDetails.css";
// import SideTab from "../../../components/User/SideTab/SideTab";
import Rectangle from "../../../components/User/ProfileDetailRect/ProfileDetailRect";
import UBase from "../../../components/User/UBase/UBase";
import Blank from "../../../components/superAdmin/Blank/Blank";
class ProfileDetails extends Component {
  state = {};
  render() {
    const content = (
      <div className="PD-flex-container">
        <div className="content-container">
          <div className="content-container2">
            <Rectangle />
          </div>
        </div>
        <div className="mob-content-container">
          <Rectangle />
        </div>
        <Blank />
        <Blank />
        <Blank />
      </div>
    );
    return <UBase history={this.props.history} content={content} />;
  }
}
export default ProfileDetails;
