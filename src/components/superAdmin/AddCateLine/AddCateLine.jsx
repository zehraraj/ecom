import React, { Component } from 'react';
import './AddCateLine.css';
class AddCateLine extends Component {
    state = {  }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value })
        }
    }
    render() { 
        return ( 
            <div className="addcateline">
                <h3 className="cate-text">{this.props.text1}</h3>
                <input className="addcateBox2" type="text" placeholder={this.props.placeholderText} name={this.props.name} onChange={(e) => this.props.handleChange(e)}/>
            </div>
         );
    }
}
 
export default AddCateLine;