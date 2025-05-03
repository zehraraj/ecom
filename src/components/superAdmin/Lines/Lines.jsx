import React, { Component } from 'react';
import './Lines.css';
class Lines extends Component {
    state = {}
    render() {
        return (
            <div className="line">
                <h3 className="text1">{this.props.data.id}</h3>
                <h3 className="text2">{this.props.data.product_name}</h3>
                <h3 className="text3">{this.props.data.category.category_name}</h3>
                <h3 className="text4">{this.props.data.product_price}</h3>
            </div>
        );
    }
}

export default Lines;