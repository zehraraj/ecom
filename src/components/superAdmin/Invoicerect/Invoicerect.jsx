import React, { Component } from 'react';
import './Invoicerect.css';
import Texticon from '../Texticon/texticon';
import logo3 from '../../static/asd.jpeg'
import Invoiceline from '../Invoiceline/Invoiceline';
class Invoicerect extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="InvoiceRectangle">
                <div className="headerContainer">
                <h1 className="tt">{this.props.text}</h1>
                <img src={this.props.img} alt="" className="img"/>
                </div>
                <div>
                    <hr className="hr"/>
                </div>
                <div className="heading">
                    <h3 className="h3">{this.props.text1}</h3>
                    <h3 className="h3">{this.props.text2}</h3>
                    <h3 className="h3">{this.props.text3}</h3>
                    <h3 className="h3">{this.props.text4}</h3>
                    <h3 className="h3">{this.props.text5}</h3>
                </div>
                <div className="lineContainer">
                    {this.props.invoice.map(item => <Invoiceline data={item}/>)}
                    {/* <Invoiceline/>
                    <Invoiceline/>
                    <Invoiceline/>
                    <Invoiceline/>
                    <Invoiceline/>
                    <Invoiceline/>
                    <Invoiceline/>
                    <Invoiceline/> */}

                </div>
            </div>
          );
    }
}
 
  export default Invoicerect;