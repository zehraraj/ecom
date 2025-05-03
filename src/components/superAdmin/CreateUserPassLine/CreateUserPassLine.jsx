import React, { Component } from 'react';
import './CreateUserPassLine.css';
class CreateUserPassLine extends Component {
    state = {  }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value })
        }
    }
    render() { 
        return ( 
            <div className="adduserpassline2">
                <h3 className="text">{this.props.text1}</h3>
                <input className="pass" type="password" name={this.props.name} onChange={(e) => this.props.handleChange(e)}/>
                
            </div>
         );
    }
}
 
export default CreateUserPassLine;