/* eslint-disable */
import React, { Component } from 'react';
import './AllInvoiceLine.css';
import { NavLink } from 'react-router-dom';
import more from '../../../static/superAdmin/more.png'
class AllInvoiceLine extends Component {

  getOrderId = () => {
    // let id = this.props.invoice.order.razorpay_order_id
    // return id.slice(id.indexOf("_") + 1)
    return this.props.invoice.order.order_ref_id
  }

  getInvoiceId = () => {
    // let id = this.props.invoice.razorpay_invoice_id
    // let id = this.props.invoice.order.razorpay_order_id
    // return id.slice(id.indexOf("_") + 1)
    return this.props.invoice.invoice_ref_id
  }

  getDate = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let timestamp = this.props.invoice.order.created_at
    let date = new Date(timestamp)
    console.log(date)
    return date.getDate() + " " + months[date.getMonth()]
  }

  state = {}
  render() {
    return (
      <div className="root12">
        <h3 className="invoice-txt-1">{this.props.id}</h3>
        <h3 className="invoice-txt-2">{this.getOrderId()}</h3>
        <h3 className="invoice-txt-3">{this.getInvoiceId()}</h3>
        <h3 className="invoice-txt-4">{this.getDate()}</h3>
        <h3 className="invoice-txt-5">{this.props.invoice.payment_method}</h3>
        <div
          className="more-icon invoice-txt-6"
          onClick={() => this.props.history.push('/SuperAdmin/Invoice/' + this.props.invoice.id)}
        >
          <img src={more} />
        </div>
      </div >
    );
  }
}

export default AllInvoiceLine;