import React, { Component } from 'react';
import './OrderAndReturnRect.css';
import OrderAndReturnLine from '../OrderAndReturnLine/OrderAndReturnLine';
import Blank from '../../superAdmin/Blank/Blank';

class OrderAndReturnRect extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="ordr-rect">
                <div className="title">
                    <h3 className="headtitle">Order & Returns </h3>
                </div>
                {/* <hr className="hr"/> */}
                <div className="orderline">
                    <OrderAndReturnLine/>
                    <OrderAndReturnLine/>
                    <OrderAndReturnLine/>
                    <OrderAndReturnLine/>
                    <OrderAndReturnLine/>
                    <Blank/>
                </div>
            </div>
        );
    }
}
 
export default OrderAndReturnRect;