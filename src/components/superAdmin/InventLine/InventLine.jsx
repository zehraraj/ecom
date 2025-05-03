import React, { Component } from 'react';
import './InventLine.css';
class InventLines extends Component {
    state = {}
    render() {
        return (
            <div className="invline">
                {/* <img className="img" src={this.props.img} alt="" /> */}
                <h3 className="inventory-txt-1">{this.props.id}</h3>
                <h3 className="inventory-txt-3">{this.props.data.parent_product.product_name}</h3>
                <h3 className="inventory-txt-3">{this.props.data.product_option_name}</h3>
                <h3 className="inventory-txt-4">{this.props.data.product_option_sku}</h3>
                <h3 className="inventory-txt-5">{this.props.data.product_option_inventory}</h3>
            </div>
        );
    }
}

export default InventLines;