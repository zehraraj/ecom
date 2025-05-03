import React, { Component } from 'react';
import './Invoiceline.css';
class Invoiceline extends Component {
    state = {}
    render() {
        return (
            <div className="iline">
                <h3 className="text">{this.props.data.id}</h3>
                <h3 className="text">{this.props.data.productName}</h3>
                <h3 className="text">{this.props.data.id}</h3>
                <h3 className="text">{this.props.data.id}</h3>
                <h3 className="text">{this.props.data.id}</h3>
            </div>
        );
    }
}

export default Invoiceline;