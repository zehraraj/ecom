import React, { Component } from 'react';
import './Button2.css';
class Button2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Button2">
                <h3 className="btntxt">{this.props.txt}</h3>
            </div>
        );
    }
}
 
export default Button2;