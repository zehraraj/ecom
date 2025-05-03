import React, { Component } from 'react';
import './BusinessInfoTxtIcon.css'

class BusinessInfoTxtIcon extends Component {
    state = {}
    render() {
        return (
            <div className="BI-textIconContainer2">
                <h3 className="txt">{this.props.text}</h3>
                <img src={this.props.img} alt="" className="img" />
            </div>
        );
    }
}

export default BusinessInfoTxtIcon;