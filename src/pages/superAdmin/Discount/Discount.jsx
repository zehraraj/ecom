/* eslint-disable */
import React, { Component } from 'react';
import './Discount.css';
import Disktexticoncont from '../../../components/superAdmin/Disktexticoncont/Distxtcont';
import pro1 from '../../../static/superAdmin/cart/Cart1.jpeg';
import { NavLink, Route } from 'react-router-dom';
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
// import Box2 from '../../../components/superAdmin/Box2/Box2';
import Rectangle from '../../../components/superAdmin/Rectangle/Rectangle';
import Loading from '../../../components/superAdmin/Loading/Loading';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import DissRect from '../../../components/superAdmin/DissRect/DissRect';
import Box from '../../../components/superAdmin/Box/Box';
import Box2 from '../../../components/superAdmin/Box2/Box2';
import Blank from '../../../components/superAdmin/Blank/Blank';

import * as ACTION from '../../../middleware/actions/superAdminActions'
import config from '../../../middleware/config'
import { connect } from 'react-redux'
import Dashboardpagrind from '../../../components/superAdmin/Dashboardpageind/Dashboardpageind';
import TextIcon from '../../../components/superAdmin/TextIcon/TextIcon';
import Base from '../../../components/superAdmin/Base/Base';

class Discount extends Component {
    state = {
        sales: [],
        next: null,
        prev: null,
        current: 0,
        count: 0,
        url: config.baseUrl + config.sales,
    }

    componentDidMount = () => {
        this.props.getSales(this.state.url)
    }

    handleUrl = (url) => {
        this.setState({ url: url })
    }

    search = (searchText) => {
        this.setState({ url: config.baseUrl + config.sales + `?search=${searchText}` })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.sales !== this.props.sales) {
            let data = this.props.sales.data
            this.setState({
                sales: data.results,
                next: data.links.next,
                prev: data.links.previous,
                count: data.count,
                current: data.current
            })
        }

        if (prevState.url !== this.state.url) {
            this.props.getSales(this.state.url)
        }
    }

    render() {
        const content = (
            <div className="discountRootContainer">
                {!(this.props.isLoading) ?
                    <div>
                        <div className="headerContainer">
                            <TextIcon text="DISCOUNTS" img={pro1} />
                            <div onClick={() => this.props.history.push('/SuperAdmin/Sales/Add/')}>
                                <Box2 text="Add Sale" />
                            </div>
                        </div>
                        <div className="innerContainer">
                            <DissRect history={this.props.history} search={this.search} sales={this.state.sales} current={this.state.current} />
                            <div className="pagination">
                                <Dashboardpagrind current={this.state.current} handleUrl={this.handleUrl} next={this.state.next} prev={this.state.prev} />
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
    sales: state.superAdminReducer.getSalesResponse
})

const mapDispatchToProps = dispatch => ({
    getSales: url =>
        dispatch(ACTION.getSales({ url: url }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Discount);