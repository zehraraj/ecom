import React, { Component } from 'react';
import './ProductPageRect.css';
import ProductImgcont from '../ProductImgcont/ProductImgcont';

class ProductPageRect extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="main-page-cont">
                <div className="all-img-cont">
                    <ProductImgcont/>
                    <ProductImgcont/>
                    <ProductImgcont/>
                    <ProductImgcont/>
                </div>
                <div className="img-cont2">
                    <ProductImgcont/>
                    <ProductImgcont/>
                </div>
            </div>
        );
    }
}
 
export default ProductPageRect;