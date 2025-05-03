/* eslint-disable */
import React, { Component } from 'react';
import TableTitle from '../TableTitle/TableTitle';
import overview from '../../../static/superAdmin/overview.png';
import './SettingBox.css'

class SettingBox extends Component {
  state = {}
  render() {
    return (
      <div className="SettingBox" onClick={() => this.props.to()}>
        <div className="content">
          <div className="titeleee">
            <h1 className="text">{this.props.text}</h1>
            {/* <img src={this.props.icon} alt={this.props.icon} /> */}
          </div>
          <hr className="linesdf" />
          <h1 className="value">{this.props.value}</h1>
        </div>
      </div>
    );
  }
}

export default SettingBox;