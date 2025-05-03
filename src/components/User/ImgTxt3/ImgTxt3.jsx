import React, { Component } from 'react';
import './ImgTxt3.css'
class ImgTxt3 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container3">
                <img src ={this.props.img} alt="" className="img"/>
                <h3 className = "text3">{this.props.text}</h3>
            </div>
        );
    }
}
 
export default ImgTxt3;