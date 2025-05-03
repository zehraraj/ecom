import React, { Component } from 'react';
import './WishlistPage.css';
import WishlistRect from '../../../components/User/WishlistRect/WishlistRect';
import Header from '../../../components/User/Header/Header';
import Footer from '../../../components/User/Footer/Footer';
class WishlistPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Wishlist-page-container">
                <Header/>
                <div className="content-container">
                    <div className="txt-cont">
                        <h3 className="txt1">My Wishlist</h3>
                        <h3 className="txt2">102 Items</h3>
                    </div>               
                    <WishlistRect/>
                    <WishlistRect/>
                    <Footer/>
                </div>
            </div>
        );
    }
}
 
export default WishlistPage;