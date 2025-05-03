import React, { Component } from 'react';
import './Addsaleline2.css';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
class Addsaleline2 extends Component {
    state = {
        startDate: new Date()
    }

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    render() {
        return (
            <div className="addlinesale2">
                <h3 className="text">{this.props.text1}</h3>
                <DatePicker
                    className=""
                    name={this.props.name}
                    onChange={(e) => this.props.handleChange(e)}
                    dateFormat="DD/MM/YYYY"
                />
            </div>
        );
    }
}

export default Addsaleline2;