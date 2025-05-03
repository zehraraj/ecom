import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  state = {}

  render() {
    return (
      <div className="cardRoot">
        <div className="cardImage">
          <img src={this.props.image} alt="" />
          <div className="cardBubbleContainer">
            <div className="cardSaleBubble">
              - 50%
            </div>
            <div className="cardRibbonBubble">
              New
            </div>
          </div>
        </div>
        <div className="cardTitle">
          Denim Jackets
        </div>
        <div className="cardRates">
          <div className="cardRatesSale">Rs. 1500</div>
          <div className="cardRatesPrice">Rs. 1000</div>
        </div>
      </div>
    );
  }
}

export default Card;