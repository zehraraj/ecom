/* eslint-disable */
import React, { Component } from 'react';
import './Addvoucherrect.css';
import icon from '../../../static/superAdmin/cart/Cart2.jpeg';
import Input from '../Input/Input'
import DatePicker from "../DatePicker/DatePicker";
import TableTitle from '../TableTitle/TableTitle';
import Dropdown from '../Dropdown/Dropdown';
import * as ACTION from '../../../middleware/actions/superAdminActions'
import { connect } from 'react-redux'
import * as validators from '../../../validators'

class Addvoucherrect extends Component {
    render() {
        return (
            <div className="ssdfsdf">
                <div className="header">
                    <TableTitle text="Create Voucher" image={icon} />
                </div>
                <div className="content">
                    <div className="Inusdfsput">
                        <Dropdown
                            required
                            value={this.props.discount_type}
                            label="DISCOUNT TYPE"
                            placeholderText="Select The Discount Type"
                            name="discount_type"
                            type="text"
                            handleChange={this.props.dropdownHandleChange}
                            options={[
                                { id: 1, value: 'Percentage' },
                                { id: 2, value: 'Cash' }
                            ]}
                        />
                        <Input
                            required
                            validator={validators.numberValidator}
                            value={this.props.discount_value}
                            error={this.props.discount_value_error}
                            handleChange={this.props.handleChange}
                            label="DISCOUNT VALUE"
                            placeholderText="Enter The Discount Value"
                            name="discount_value"
                            type="text"
                        />
                        <Input
                            required
                            validator={validators.textValidator}
                            error={this.props.name_error}
                            value={this.props.name}
                            label="NAME"
                            placeholderText="Enter The Coupon Name"
                            name="name"
                            type="text"
                            handleChange={this.props.handleChange}
                        />
                        <Input
                            required
                            validator={validators.textValidator}
                            error={this.props.code_error}
                            value={this.props.code}
                            label="CODE"
                            placeholderText="Enter The Coupon Code"
                            name="code"
                            type="text"
                            handleChange={this.props.handleChange}
                        />
                        <Input
                            required
                            validator={validators.numberValidator}
                            error={this.props.limit_error}
                            value={this.props.limit}
                            label="LIMITS"
                            placeholderText="Enter The Limits"
                            name="limit"
                            type="text"
                            handleChange={this.props.handleChange}
                        />
                        <DatePicker
                            value={this.props.start_date}
                            label="VALID FROM"
                            placeholderText="Select Valid From"
                            name="valid_from"
                            type="text"
                            handleClick={this.props.startDateHandleChange}
                        />
                        <DatePicker
                            value={this.props.end_date}
                            label="VALID TO"
                            placeholderText="Select Valid To"
                            name="valid_to"
                            type="text"
                            handleClick={this.props.endDateHandleChange}
                        />
                        <Input
                            required
                            validator={validators.numberValidator}
                            error={this.props.min_spent_error}
                            value={this.props.min_spent}
                            label="UPTO"
                            placeholderText="Enter Minimum Spent Required"
                            name="min_spent"
                            type="text"
                            handleChange={this.props.handleChange}
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



export default (Addvoucherrect);