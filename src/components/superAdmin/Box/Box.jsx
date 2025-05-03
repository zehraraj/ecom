import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    state = {}
    render() {
        return (
            <div className="Box">
                <div className='box-inner'>
                    <h1 className="tt">{this.props.text}</h1>
                    <hr className="hr" />
                    <h1 className="t">{this.props.txt}</h1>
                </div>
            </div>
        );
    }
}

export default Box;