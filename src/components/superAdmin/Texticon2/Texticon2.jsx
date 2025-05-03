import React, { Component } from 'react';
import './Texticon2.css'

class Texticon2 extends Component {
    state = {}
    render() {
        return (
            <div className="textIconContainer2">
                <h3 className="txt">{this.props.text}</h3>
                <img src={this.props.img} alt="" className="img" />
            </div>
        );
    }
}

export default Texticon2;