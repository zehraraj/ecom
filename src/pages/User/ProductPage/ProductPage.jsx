import React, { Component } from 'react';
import './ProductPage.css';
import ProductPageRect from '../../../components/User/ProductPageRect/ProductPageRect';
import Header from '../../../components/User/Header/Header';
import Footer from '../../../components/User/Footer/Footer';
class ProductPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Product-page-container">
                <Header/>
                <div className="content-container">             
                    <ProductPageRect/>
                    <ProductPageRect/>
                    <ProductPageRect/>
                    <ProductPageRect/>
                    <Footer/>
                </div>
                {/*  */}
            </div>
        );
    }
}
 
export default ProductPage;