import React, { Component } from 'react';
import './AddVariantLine.css';
class AddVariantLine extends Component {
    state = {  }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value })
        }
    }
    render() { 
        return ( 
            <div className="addvarline2">
                <h3 className="text">{this.props.text1}</h3>
                <input className="addBox2" type="text" placeholder={this.props.placeholderText} name={this.props.name} onChange={(e) => this.props.handleChange(e)}/>
            </div>
         );
    }
}
 
export default AddVariantLine;