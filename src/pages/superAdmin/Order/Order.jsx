/* eslint-disable */
import React, { Component } from 'react';
import './Order.css';
import Texticon from '../../../components/superAdmin/TextIcon/TextIcon';
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
import pro1 from '../../../static/superAdmin/Order/order7.png';
import pro2 from '../../../static/superAdmin/Order/order8.png';
import DashRect from '../../../components/superAdmin/DashRect/DashRect';
import { NavLink, Route } from 'react-router-dom';
import Loading from '../../../components/superAdmin/Loading/Loading';
import * as ACTION from '../../../middleware/actions/superAdminActions';
import { connect } from 'react-redux';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import TexticonOrder from '../../../components/superAdmin/TexticonOrder/TexticonOrder';
import OrderRect from '../../../components/superAdmin/OrderRect/OrderRect';
import Blank from '../../../components/superAdmin/Blank/Blank';
import config from '../../../middleware/config'
import Dashboardpageind from '../../../components/superAdmin/Dashboardpageind/Dashboardpageind';
import Base from '../../../components/superAdmin/Base/Base'

class Order extends Component {
    state = {
        next: null,
        prev: null,
        count: 0,
        url: config.baseUrl + config.orders,
        current: 0,
        searchText: "",
        orders: []
    }

    componentDidMount = () => {
        this.props.getOrders(this.state.url)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.orders !== this.props.orders) {
            let data = this.props.orders.data
            this.setState({
                orders: data.results,
                next: data.links.next,
                previous: data.links.previous,
                count: data.count,
                current: data.current
            })
        }

        else if (prevState.url !== this.state.url) {
            this.props.getOrders(this.state.url)
        }

        else if (prevState.searchText !== this.state.searchText) {
            this.props.getOrders(this.state.url, this.state.searchText)
        }
    }

    searchOrders = (text) => {
        this.setState({ searchText: text })
    }

    handleUrl = (url) => {
        this.setState({ url: url })
    }

    render() {
        const content = (
            <div className="OrderRootContainer">
                {!(this.props.isLoading) ?
                    <div>
                        <div className="headerContainer">
                            <Texticon text="ORDERS" img={pro2} />
                        </div>
                        <div className="innerContainer">
                            <OrderRect text="All Orders" img={pro1} orders={this.state.orders} current={this.state.current} search={this.searchOrders} />
                            <div className="pagination">
                                <Dashboardpageind current={this.state.current} handleUrl={this.handleUrl} />
                            </div>
                        </div>
                    </div>
                    : <Loading />}
            </div>
        )

        return (
            <Base history={this.props.history} content={content}></Base>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.superAdminReducer.isLoading,
    orders: state.superAdminReducer.getOrdersResponse,
})

const mapDispatchToProps = dispatch => ({
    getOrders: (url, search = null) =>
        dispatch(ACTION.getOrders({ url: url, searchText: search })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Order);