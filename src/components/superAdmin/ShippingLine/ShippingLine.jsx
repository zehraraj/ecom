import React, { Component } from 'react';
import './ShippingLine.css';
class ShippingLines extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="shipline">
                <h3 className="text1">{this.props.data.id}</h3>
                <h3 className="text2">{this.props.data.productName}</h3>
                <h3 className="text3">{this.props.data.id}</h3>
            </div>
         );
    }
}
 
export default ShippingLines;