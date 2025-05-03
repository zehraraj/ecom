/* eslint-disable */
import React, { Component } from 'react';
import './OrderRect.css';
import OrderLine from '../OrderLine/OrderLIne';
import TableTitle from '../TableTitle/TableTitle'
import config from '../../../middleware/config'
import EmptyData from '../EmptyData/EmptyData';
class OrderRect extends Component {
    state = {}
    render() {
        return (
            <div className="orderrect">
                <div className="header">
                    <TableTitle
                        text="All Orders"
                        image={this.props.img}
                        search={this.props.search}
                        placeholder="Order Id, Email, Status"
                        searchRequired
                    />
                </div>
                {this.props.orders.length ?
                    <React.Fragment>
                        <div className="heading">
                            <h3 className="order-txt1">ID</h3>
                            <h3 className="order-txt2">ORDER ID</h3>
                            <h3 className="order-txt3">E-MAIL</h3>
                            <h3 className="order-txt4">QTY</h3>
                            <h3 className="order-txt5">PRICE</h3>
                            <h3 className="order-txt6">STATUS</h3>
                            <h3 className="order-txt7">DATE</h3>
                        </div>
                        {this.props.orders.map((item, index) => <OrderLine id={(index + 1) + ((this.props.current - 1) * config.pagination.pageSize)} orders={item} />)}
                    </React.Fragment> :
                    <EmptyData for="orders" />
                }
            </div>
        );
    }
}

export default OrderRect;