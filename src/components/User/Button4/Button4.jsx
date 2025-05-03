import React, { Component } from 'react';
import './Botton4.css';

class Button4 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="button4">
                <h3 className="btn4txt">{this.props.txt}</h3>
            </div>
        );
    }
}
 
export default Button4;