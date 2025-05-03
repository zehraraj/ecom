import React, { Component } from 'react';
import './VoucherLine.css';
import more from '../../../static/superAdmin/more.png'

class VoucherLine extends Component {
    state = {}

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value })
        }
    }

    getDate = (date) => {
        return date.substr(0, 10)
    }

    render() {
        return (
            <div className="Voucherline">
                <h3 className="voucher-txt1">{this.props.id}</h3>
                <h3 className="voucher-txt2">{this.props.voucher.coupon_name}</h3>
                <h3 className="voucher-txt3">{this.getDate(this.props.voucher.coupon_valid_from)}</h3>
                <h3 className="voucher-txt4">{this.getDate(this.props.voucher.coupon_valid_to)}</h3>
                <h3 className="voucher-txt5">{this.props.voucher.coupon_code}</h3>
                <h3 className="voucher-txt6">₹{this.props.voucher.min_spent}</h3>
                {this.props.voucher.discount.discount_type === 'Percentage' ?
                    <h3 className="voucher-txt7">{this.props.voucher.discount.discount_value}%</h3> :
                    <h3 className="voucher-txt7">₹{this.props.voucher.discount.discount_value}</h3>
                }
                <div className="more-icon voucher-8" onClick={() => this.props.history.push(`/SuperAdmin/Vouchers/${this.props.voucher.id}`)}>
                    <img src={more} alt={more} />
                </div>
            </div>
        );
    }
}

export default VoucherLine;