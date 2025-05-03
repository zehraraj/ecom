import React, { Component } from 'react';
import './UserLogo.css';


class UserLogo extends Component {
    state = {  }
    render() { 
        return ( 
            // < h3 className="img">MASORINI</h3>
            <img src ={this.props.img} alt="" className="Usrimg"/>
        );
    }
}
 
export default UserLogo;