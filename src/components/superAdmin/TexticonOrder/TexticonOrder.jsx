import React, { Component } from 'react';
import './TexticonOrder.css'

class TexticonOrder extends Component {
    state = {}
    render() {
        return (
            <div className="or-textIconContainer2">
                <h3 className="txt">{this.props.text}</h3>
                <img src={this.props.img} alt="" className="img" />
            </div>
        );
    }
}

export default TexticonOrder;