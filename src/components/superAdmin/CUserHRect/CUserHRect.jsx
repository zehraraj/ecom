import React, { Component } from 'react';
import './CUserHRect.css';
class CUserHRect extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="user-textIconContainer2">
                <h3 className="txt">{this.props.text}</h3>
                <img src={this.props.img} alt="" className="img" />
            </div>
            
         );
    }
}
 
export default CUserHRect;