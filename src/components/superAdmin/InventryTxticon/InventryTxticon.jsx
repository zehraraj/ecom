import React, { Component } from 'react';
import './InventryTxticon.css'

class InventryTxticon extends Component {
    state = {}
    render() {
        return (
            <div className="in-textIconContainer2">
                <h3 className="txt">{this.props.text}</h3>
                <img src={this.props.img} alt="" className="img" />
            </div>
        );
    }
}

export default InventryTxticon;