import React, { Component } from 'react';
import './Distxtcont.css';
class Distxtcont extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="diss-textIconContainer2"> 
                <h3 className="txt">{this.props.text}</h3>
                <img src={this.props.img} alt="" className="imgdiss"/>
            </div>
         );
    }
}
 
export default Distxtcont;