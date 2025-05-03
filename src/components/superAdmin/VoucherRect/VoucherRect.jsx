/* eslint-disable */
import React, { Component } from 'react';
import './VoucherRect.css';
import VoucherLine from '../VoucherLine/VoucherLine';
import TableTitle from '../TableTitle/TableTitle';
import icon from '../../../static/superAdmin/cart/Cart2.jpeg'
import config from '../../../middleware/config'
import EmptyData from '../EmptyData/EmptyData'

class VoucherRect extends Component {
    state = {}
    render() {
        return (
            <div className="Main1">
                <div className="header">
                    <TableTitle
                        text="Vouchers"
                        image={icon}
                        search={this.props.search}
                        placeholder="Name, Upto, Value"
                        searchRequired
                    />
                </div>
                {this.props.vouchers.length ?
                    <React.Fragment>
                        <div className="heading">
                            <h3 className="voucher-txt1">ID</h3>
                            <h3 className="voucher-txt2">NAME</h3>
                            <h3 className="voucher-txt3">STARTS</h3>
                            <h3 className="voucher-txt4">ENDS</h3>
                            <h3 className="voucher-txt5">CODE</h3>
                            <h3 className="voucher-txt6">UPTO</h3>
                            <h3 className="voucher-txt7">VALUE</h3>
                            <div className="voucher-8"></div>
                        </div>
                        {this.props.vouchers.map((item, index) => <VoucherLine history={this.props.history} id={((index + 1) + ((this.props.current - 1) * config.pagination.pageSize))} voucher={item} />)}
                    </React.Fragment> :
                    <EmptyData for="Invoice" />
                }
            </div>
        );
    }
}

export default VoucherRect;