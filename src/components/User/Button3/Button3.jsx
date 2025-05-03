import React, { Component } from 'react';
import './Button3.css';
class Button3 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Button3">
                <h3 className="text123">{this.props.txt}</h3>
            </div>
        );
    }
}
 
export default Button3;