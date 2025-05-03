import React, { Component } from 'react';
import './Title.css'
class Title extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="titlecontainer">
                <h3 className="first">{this.props.text1}</h3>
                <h3 className="secound">{this.props.text2}</h3>
                {/* <hr className="hr"/> */}
            </div>
        );
    }
}
 
export default Title;