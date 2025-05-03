import React, { Component } from 'react';
import './ShippingRect.css';
import ShippingLine from '../ShippingLine/ShippingLine';
class ShippingRect extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="ShippingRectangle">
                <div className="headerContainer">
                <h1 className="tt">{this.props.text}</h1>
                <img src={this.props.img} alt="" className="img"/>
                </div>
                <div>
                    <hr className="hr"/>
                </div>
                <div className="heading">
                    <h3 className="txt1">{this.props.text1}</h3>
                    <h3 className="txt2">{this.props.text2}</h3>
                    <h3 className="txt3">{this.props.text3}</h3>
                </div>
                <div className="lineContainer">
                {this.props.Dash.map(item => <ShippingLine data={item} />)}
                </div>
            </div>
          );
    }
}
 
  export default ShippingRect;