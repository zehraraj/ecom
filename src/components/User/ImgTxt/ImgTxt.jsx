import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import './ImgTxt.css'
class ImgTxt extends Component {
    state = {  }
    render() { 
        const pro = [
            'My Account', 'Logout'
        ];
        return ( 
            <div className="container">
                
                <img src ={this.props.img} alt="" className="img"/>
                <Dropdown options={pro} onChange={this._onSelect} placeholder="PROFILE" className="text">
                    <h3>{this.props.text}</h3>
                </Dropdown>
            </div>
        );
    }
}
 
export default ImgTxt;
