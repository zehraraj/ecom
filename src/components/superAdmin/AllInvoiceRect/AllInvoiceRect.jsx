import React, { Component } from 'react';
import './AllInvoiceRect.css';
import AllInvoiceLine from '../AllInvoiceLine/AllInvoiceLine';
import EmptyData from '../EmptyData/EmptyData';
import TableTitle from '../TableTitle/TableTitle';
import icon from '../../../static/superAdmin/invoice/invoice.png'
import config from '../../../middleware/config'

class AllInvoiceRect extends Component {
    state = {}
    render() {
        return (
            <div className="root1">
                <div className="header">
                    <TableTitle
                        text="Invoice"
                        image={icon}
                        placeholder="Order Id, Invoice Id, Payment Method"
                        search={this.props.search}
                        searchRequired
                    />
                </div>
                {this.props.invoices.length ?
                    <React.Fragment>
                        <div className="heading">
                            <h3 className="invoice-txt-1">ID</h3>
                            <h3 className="invoice-txt-2">ORDER ID</h3>
                            <h3 className="invoice-txt-3">INVOICE ID</h3>
                            <h3 className="invoice-txt-4">ISSUE DATE</h3>
                            <h3 className="invoice-txt-5">PAYMENT METHOD</h3>
                            <div className="invoice-txt-6"></div>
                        </div>
                        {this.props.invoices.map((item, index) => <AllInvoiceLine
                            id={(index + 1) + ((this.props.current - 1) * config.pagination.pageSize)}
                            invoice={item} history={this.props.history}
                        />)}
                    </React.Fragment> :
                    <EmptyData for="Invoices" />
                }
            </div>
        );
    }
}

export default AllInvoiceRect;