/* eslint-disable */
import React, { Component } from 'react';
import './InvoiceDRect.css';


class InvoiceDRect extends Component {
    state = {}

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
        return date.getDate() + " " + months[date.getMonth()]
    }

    getAddress = () => {
        let address = this.props.invoice.order.address
        return <React.Fragment>
            {address.address_line_1}<br />
            {address.address_line_2}<br />
            {address.landmark}<br />
            {address.city} - {address.pincode}
        </React.Fragment>
    }

    getTax = () => {
        // return parseFloat(this.props.invoice.order.tax.tax_value);
        return 0.0
    }

    render() {
        return (
            <div className="invoicedrect">
                <div className="title">
                    <div className="div1">
                        <h1>SOLD TO: {this.props.invoice.order.customer.first_name + " " + this.props.invoice.order.customer.last_name}</h1>
                        <h1>INVOICE NO #{this.getInvoiceId()}</h1>
                    </div>
                    <hr />
                </div>


                <div className="div2">
                    <div className="left">
                        <div className="sinner-txt">
                            <h1 className="sleft-txt">ORDER NO</h1>
                            <h1 className="sleft-txt">INVOICE NO</h1>
                            <h1 className="sleft-txt">STATUS</h1>
                            <h1 className="sleft-txt">DATE</h1>
                            <h1 className="sleft-txt">TOTAL ITEMS</h1>
                        </div>
                        <div className="colonContainer">
                            <div className="col">:</div>
                            <div className="col">:</div>
                            <div className="col">:</div>
                            <div className="col">:</div>
                            <div className="col">:</div>
                        </div>
                        <div className="valuedsfs">
                            <div className="val">{this.getOrderId()}</div>
                            <div className="val">{this.getInvoiceId()}</div>
                            <div className="val caps">{this.props.invoice.order.order_status}</div>
                            <div className="val">{this.getDate()}</div>
                            <div className="val">{this.props.invoice.order.order_quantity}</div>
                        </div>
                    </div>

                    <div className="sinner-txt2">
                        <h1 className="middle-txt">SHIP TO</h1>
                        <div className="innerrect">{this.getAddress()}</div>
                    </div>
                </div>

                <div className="div3">
                    <hr />
                    <div className="headers">
                        <h3 className="lower-txt m-r">PRODUCT</h3>
                        <h3 className="lower-txt">QTY</h3>
                        <h3 className="lower-txt">GROSS AMT</h3>
                        <h3 className="lower-txt">% DISCOUNT</h3>
                        <h3 className="lower-txt">DISCOUNT</h3>
                        <h3 className="lower-txt">% IGST</h3>
                        <h3 className="lower-txt">IGST</h3>
                        <h3 className="lower-txt">TOTAL</h3>
                    </div>
                    <hr />
                    {this.props.invoice.order.order_items.map((item, index) => {
                        let sale = item.product_option.parent_product.product_is_sale ? item.product_option.parent_product.product_sale : 0;
                        let gst = item.price;
                        // console.log((sale / 100) * item.gross_amt)
                        // console.log(item)
                        return <div className="values">
                            <h3 className="val1">{item.product_option.parent_product.product_name}</h3>
                            <h3 className="val2">{item.quantity}</h3>
                            <h3 className="val3">{item.gross_amt}</h3>
                            {/* <h3 className="val4">{sale} %</h3> */}
                            <h3 className="val5">{(sale / 100) * item.gross_amt}</h3>
                            <h3 className="val6">{this.getTax()} %</h3>
                            <h3 className="val7">{(this.getTax() / 100) * item.gross_amt}</h3>
                            <h3 className="val8">{((sale / 100) * item.gross_amt) + item.gross_amt + ((this.getTax() / 100) * item.gross_amt)}</h3>
                        </div>
                    })}
                </div>


                <div className="final">
                    <hr />
                    <div className="data">
                        <div className="txt">GRAND TOTAL</div>
                        <div className="val">{this.props.invoice.order.total_price}</div>
                    </div>
                    <hr />
                </div>
            </div>

        );
    }
}



export default InvoiceDRect;