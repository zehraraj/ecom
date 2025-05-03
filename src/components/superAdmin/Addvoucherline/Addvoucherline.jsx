import React, { Component } from 'react';
import './Addvoucherline.css';
import add1 from '../../static/add1.png';
class Addvoucherline extends Component {
    state = {  }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value })
        }
    }
    render() { 
        return ( 
            <div className="addlinevoucher">
                <h3 className="text">{this.props.text1}</h3>
                <input className="addBox2" type="text" name={this.props.name} onChange={(e) => this.props.handleChange(e)}/>
            </div>
         );
    }
}
 
export default Addvoucherline;