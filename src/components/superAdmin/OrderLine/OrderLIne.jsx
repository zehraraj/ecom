import React, { Component } from 'react';
import './OrderLine.css';
class OrderLine extends Component {
    state = {}

    getDate = () => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date(this.props.orders.created_at)
        return date.getDate() + " " + months[date.getMonth()]
    }

    getName = () => {
        let customer = this.props.orders.customer
        return customer.first_name + " " + customer.last_name
    }

    getOrderId = () => {
        // let id = this.props.orders.razorpay_order_id
        // return id.slice(id.indexOf("_") + 1)
        return this.props.orders.id
    }

    render() {
        return (
            <div className="Orderline1">
                <h3 className="recent-order-txt1 order-txt1">{this.props.id}</h3>
                <h3 className="recent-order-txt2 order-txt2">{this.getOrderId()}</h3>
                <h3 className="recent-order-txt3 order-txt3">{this.props.orders.customer.user.email}</h3>
                <h3 className="recent-order-txt4 order-txt4">{this.props.orders.order_quantity}</h3>
                <h3 className="recent-order-txt5 order-txt5">{this.props.orders.total_price}</h3>
                <h3 className="recent-order-txt6 order-txt6 caps">{this.props.orders.order_status}</h3>
                <h3 className="recent-order-txt7 order-txt7">{this.getDate()}</h3>
            </div>
        );
    }
}

export default OrderLine;