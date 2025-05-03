import React, { Component } from 'react';
import '../CatRect/CatRect.css';
class CatRect extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="pro-textIconContainer2">
                <h3 className="txt">{this.props.text}</h3>
                <img src={this.props.img} alt="" className="img" />
            </div>
            
         );
    }
}
 
export default CatRect;