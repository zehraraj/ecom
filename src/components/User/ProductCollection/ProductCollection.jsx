import React, { Component } from 'react';
import './ProductCollection.css';
import Card from '../Card/Card';


class ProductCollection extends Component {
  state = {
    product: [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1],]
  }
  render() {
    return (
      <div className="productCollectionRoot">
        <div className="productCollectionHeading">
          <div className="productCollectionTitle">
            Spring Collection 2020
          </div>
          <div className="productCollectionDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>

        <div className="productCollectionContent">
          {this.state.product.map((item, index) => {
            return <div className="productCollectionContentRow">
              {item.map((item, index) => {
                return <Card image="https://images-na.ssl-images-amazon.com/images/I/51ylk6F0rfL._AC_UY445_.jpg" />
              })}
            </div>
          })}
        </div>

        <div className="productCollectionSeeMore">
          + See More
        </div>
      </div>
    );
  }
}

export default ProductCollection;