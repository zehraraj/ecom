import React, { Component } from 'react';
import './Text.css';

class Text extends Component {
    state = {}
    render() {
        return (
            <div className="textContainer">
                <h3 className="menu">{this.props.text}</h3>
            </div>

        );
    }
}

export default Text;