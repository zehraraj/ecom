import React, { Component } from 'react';
import './Addvoucherline2.css';
import add1 from '../../static/add1.png';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
class Addvoucherline2 extends Component {
    state = { 
        startDate:new Date()
     }
  
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
    render() { 
        return ( 
            <div className="addlineRectanglevoucher2">
                <h3 className="text">{this.props.text1}</h3>
                <DatePicker
                        className=""
                           selected={this.state.startDate}
                           onChange={this.handleChange}
                        />
            </div>
         );
    }
}
 
export default Addvoucherline2;