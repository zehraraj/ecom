import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './text.css';
class Text extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="textContainer">
                <h3 className = "menu">{this.props.text}</h3>
            </div>
            
         );
    }
}
 
export default Text;