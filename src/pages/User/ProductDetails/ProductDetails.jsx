import React, { Component } from 'react';
import './ProductDetails.css';
import Navbar from '../../../components/User/Header/Header';
import ProductDetailsImg from '../../../components/User/ProductDetailsImg/ProductDetailsImg';
import img from '../../../static/User/product/p1.png'
import ProductSizeCont from '../../../components/User/ProductSizeCont/ProductSizeCont';

class ProductDetails extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="ProD-flex-container">
                <Navbar/>
                <div className="content-container">
                    <div className="content-container1">
                        <div className="inner-content-container1">
                            <ProductDetailsImg img={img}/>
                        </div>
                        <div className="inner-content-container1">
                            <ProductDetailsImg img={img}/>
                        </div>
                    </div>
                    <div className="content-container2">
                        <div className="main-txt-cont">
                            <h3 className="main-txt1">SANKRITI</h3>
                            <h3 className="main-txt2">Women printed Kurta</h3>
                            <div className="txt-cont1">
                                <h3 className="cont1-txt1">Rs.999</h3>
                                <h3 className="cont1-txt2">Rs.2249</h3>
                                <h3 className="cont1-txt3">(60% OFF)</h3>
                            </div>
                            <h3 className="main-txt3">inclusive of all taxes</h3>
                            <ProductSizeCont/>
                            <div className="txt-cont2">
                                <h3 className="cont2-txt1">PRODUCT DETAILS</h3>
                                <h3 className="cont2-txt2">Maroon and green printed kurta</h3>
                                <h3 className="cont2-txt2">Half length sleeves</h3>
                                <h3 className="cont2-txt2">Round neck</h3>
                            </div>
                            <div className="txt-cont3">
                                <h3 className="cont3-txt1">Material & Care</h3>
                                <h3 className="cont3-txt2">Fabric: Pure Cotton</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ProductDetails;