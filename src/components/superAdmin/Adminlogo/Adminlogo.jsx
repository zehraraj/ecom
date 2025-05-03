import React, { Component } from 'react';
import './Adminlogo.css';


class Adminlogo extends Component {
    state = {}
    render() {
        return (
            <img src={this.props.img} alt="" className="img" />
        );
    }
}

export default Adminlogo;