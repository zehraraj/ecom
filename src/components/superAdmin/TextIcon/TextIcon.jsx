import React, { Component } from 'react';
import './TextIcon.css'

class TextIcon extends Component {
    state = {}
    render() {
        return (
            <div className="textIconContainer">
                <h3 className="text">{this.props.text}</h3>
                <div className="text-icon-img">
                    {/* <img src={this.props.img} alt="" /> */}
                </div>
            </div>
        );
    }
}

export default TextIcon;