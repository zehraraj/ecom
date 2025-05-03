import React, { Component } from 'react';
import './ColTxtIcon.css'

class ColTxtIcon extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="ColTxtIconContainer"> 
                <h3 className="txt">{this.props.text}</h3>
                <img src={this.props.img} alt="" className="img"/>
            </div>
         );
    }
}
 
export default ColTxtIcon;