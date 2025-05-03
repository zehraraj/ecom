import React, { Component } from 'react';
import './TexticonProduct.css'

class TexticonProduct extends Component {
    state = {}
    render() {
        return (
            <div className="pr-textIconContainer2">
                <h3 className="txt">{this.props.text}</h3>
                <img src={this.props.img} alt="" className="img" />
            </div>
        );
    }
}

export default TexticonProduct;