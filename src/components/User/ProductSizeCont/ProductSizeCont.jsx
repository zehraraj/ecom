import React, { Component } from 'react';
import './ProductSizeCont.css';

class ProductSizeCont extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="size-main-cont">
                <h3 className="s-txt">SELECT SIZE</h3>
                <div className="round-cont">
                    <div className="round1"><h3 className="r-txt1">S</h3></div>
                    <div className="round2"><h3 className="r-txt2">M</h3></div>
                    <div className="round2"><h3 className="r-txt3">L</h3></div>
                    <div className="round2"><h3 className="r-txt4">XL</h3></div>
                    <div className="round2"><h3 className="r-txt5">XXL</h3></div>
                </div>
                <div className="s-btn">
                    <h3 className="s-btn-txt">BUY NOW</h3>
                </div>
            </div>
        );
    }
}
 
export default ProductSizeCont;