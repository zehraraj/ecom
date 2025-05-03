import React, { Component } from 'react';
import './Box3.css'

class Box3 extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="Box3">
                    <h3 className="tt">{this.props.text}</h3>
                </div>
            </div>
        );
    }
}

export default Box3;