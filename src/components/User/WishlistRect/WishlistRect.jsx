import React, { Component } from 'react';
import './WishlistRect.css';
import WishlistImgcont from '../WishlistImgcont/WishlistImgcont';

class WishlistRect extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Wish-page-cont">
                <div className="all-img-cont">
                    <WishlistImgcont/>
                    <WishlistImgcont/>
                    <WishlistImgcont/>
                    <WishlistImgcont/>
                </div>
            </div>
        );
    }
}
 
export default WishlistRect;