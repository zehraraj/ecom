/* eslint-disable */
import React, { Component } from 'react';
import './Addsalerect.css';
import icon from '../../../static/superAdmin/cart/Cart2.jpeg';
import Input from '../Input/Input'
import DatePicker from "../DatePicker/DatePicker";
import TableTitle from '../TableTitle/TableTitle';
import * as ACTION from '../../../middleware/actions/superAdminActions'
import { connect } from 'react-redux'
import * as validators from '../../../validators'

class Addsalerect extends Component {
    render() {
        return (
            <div className="ssdfsdf">
                <div className="header">
                    <TableTitle text="Create Sale" image={icon} />
                </div>
                <div className="content">
                    <div className="Inusdfsput">
                        {/* <Input label="PRODUCT" placeholderText="Select Product" name="product" type="text" handleChange={this.handleChange} /> */}
                        <Input
                            value={this.props.name}
                            required
                            label="NAME"
                            placeholderText="Enter Sale Name"
                            error={this.props.nameError}
                            name="name"
                            type="text"
                            validator={validators.slugValidator}
                            handleChange={this.props.handleChange}
                        />
                        <Input
                            value={this.props.discount_value}
                            required
                            error={this.props.discountError}
                            label="DISCOUNT VALUE"
                            placeholderText="Enter Sale Value"
                            name="discount_value"
                            type="text"
                            validator={validators.numberValidator}
                            handleChange={this.props.handleChange}
                        />
                        <DatePicker
                            value={this.props.start_date}
                            name="start_date"
                            label="START DATE"
                            handleClick={this.props.startDateHandleChange}
                        />
                        <DatePicker
                            value={this.props.end_date}
                            required
                            name="end_date"
                            label="END DATE"
                            handleClick={this.props.endDateHandleChange}
                        />
                    </div>
                    <div className="saveDiv">
                        <h3 className="txtsave" onClick={() => this.props.handleSubmit()}>SAVE CHANGES</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default (Addsalerect);