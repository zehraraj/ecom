/* eslint-disable */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TexticonProduct from '../../../components/superAdmin/TexttIconProduct/TexticonProduct';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
import Box2 from '../../../components/superAdmin/Box2/Box2';
import invoice from '../../../static/superAdmin/invoice/invoice.png'
import InvoiceDRect from '../../../components/superAdmin/InvoiceDRect/InvoiceDRect';
import './Invoice.css';
import Blank from '../../../components/superAdmin/Blank/Blank';
import TextIcon from '../../../components/superAdmin/TextIcon/TextIcon';
import * as ACTION from '../../../middleware/actions/superAdminActions'
import { connect } from 'react-redux';
import config from '../../../middleware/config'
import Loading from '../../../components/superAdmin/Loading/Loading';
import Base from '../../../components/superAdmin/Base/Base';


class Invoice extends Component {
    state = {
        data: {},
        isLoading: true,
    }

    componentDidMount = () => {
        this.props.getInvoiceById(this.props.match.params.id)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.invoice !== this.props.invoice) {
            if (this.props.invoice.success) {
                this.setState({
                    data: this.props.invoice.data,
                    isLoading: false
                })
            }
        }
    }

    render() {
        const content = (
            <div className="rootsdfsing">
                {this.state.isLoading ?
                    <Loading /> :
                    <div>
                        <div className="header">
                            <TextIcon text="INVOICE" img={invoice} />
                            <div onClick={() => this.props.history.goBack()}>
                                <Box2 text="Back" />
                            </div>
                        </div>
                        <div className="inner">
                            <InvoiceDRect invoice={this.state.data} />
                        </div>
                    </div>
                }
            </div>
        )
        return (
            <Base content={content} history={this.props.history} />
        );
    }
}

const mapStateToProps = state => ({
    invoice: state.superAdminReducer.getInvoiceResponse,
    isLoading: state.superAdminReducer.isLoading,
})

const mapDispatchToProps = dispatch => ({
    getInvoiceById: (id) =>
        dispatch(ACTION.getInvoice({ url: config.baseUrl + config.invoices + `/${id}` }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);