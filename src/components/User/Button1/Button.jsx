import React, { Component } from 'react';
import './Button.css';
class Button extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Button">
                <h3 className="txt">{this.props.txt}</h3>
            </div>
        );
    }
}
 
export default Button;