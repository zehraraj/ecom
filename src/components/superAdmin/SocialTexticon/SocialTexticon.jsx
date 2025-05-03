import React, { Component } from 'react';
import './SocialTexticon.css'

class SocialTexticon extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="SocialTexticonContainer"> 
                <h3 className="txt">{this.props.text}</h3>
                <img src={this.props.img} alt="" className="img"/>
            </div>
         );
    }
}
 
export default SocialTexticon;