/* eslint-disable */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TexticonProduct from '../../../components/superAdmin/TexttIconProduct/TexticonProduct';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
// import Box2 from '../../../components/superAdmin/Box2/Box2';
import invoice from '../../../static/superAdmin/invoice/invoice.png'
import AllInvoiceRect from '../../../components/superAdmin/AllInvoiceRect/AllInvoiceRect';
import './AllInvoice.css';
import Blank from '../../../components/superAdmin/Blank/Blank';
import TexticonOrder from '../../../components/superAdmin/TexticonOrder/TexticonOrder';
import Dashboardpageind from '../../../components/superAdmin/Dashboardpageind/Dashboardpageind';
import Loading from '../../../components/superAdmin/Loading/Loading';

import { connect } from 'react-redux';
import * as ACTION from '../../../middleware/actions/superAdminActions'
import config from '../../../middleware/config'
import TextIcon from '../../../components/superAdmin/TextIcon/TextIcon';
import Base from '../../../components/superAdmin/Base/Base';

class AllInvoice extends Component {
    state = {
        invoices: [],
        next: null,
        prev: null,
        current: 0,
        count: 0,
        url: config.baseUrl + config.invoices,
    }

    componentDidMount = () => {
        this.props.getInvoice(this.state.url)
    }

    handleUrl = (url) => {
        this.setState({ url: url })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.invoices !== this.props.invoices) {
            let data = this.props.invoices.data
            this.setState({
                invoices: data.results,
                next: data.links.next,
                prev: data.links.previous,
                count: data.count,
                current: data.current
            })
        }

        if (prevState.url !== this.state.url) {
            this.props.getInvoice(this.state.url)
        }
    }

    search = (searchText) => {
        this.setState({ url: config.baseUrl + config.invoices + `?search=${searchText}` })
    }

    render() {
        const content = (
            <div className="InvoiceRootContainer">
                {!(this.props.isLoading) ?
                    <div>
                        <div className="headerContainer">
                            <TextIcon text="INVOICE" img={invoice} />
                        </div>
                        <div className="innerContainer">
                            <AllInvoiceRect
                                invoices={this.state.invoices}
                                history={this.props.history}
                                current={this.state.current}
                                search={this.search}
                            />
                            <div className="pagination">
                                <Dashboardpageind current={this.state.current} handleUrl={this.handleUrl} prev={this.state.prev} next={this.state.next} />
                            </div>
                        </div>
                    </div>
                    : <Loading />}
            </div>
        )
        return (
            <Base history={this.props.history} content={content} />
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.superAdminReducer.isLoading,
    invoices: state.superAdminReducer.getInvoiceResponse
})

const mapDispatchToProps = dispatch => ({
    getInvoice: (url) =>
        dispatch(ACTION.getInvoice({ url: url }))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllInvoice);