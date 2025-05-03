/* eslint-disable */
import React, { Component } from 'react';
// import { render } from 'react-dom';
import './Vouchers.css';
import TextIcon from '../../../components/superAdmin/TextIcon/TextIcon';
import Loading from '../../../components/superAdmin/Loading/Loading';
import pro1 from '../../../static/superAdmin/cart/Cart1.jpeg'
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
import Box2 from '../../../components/superAdmin/Box2/Box2';
import Rectangle from '../../../components/superAdmin/Rectangle/Rectangle';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import { NavLink, Route } from 'react-router-dom';
import Disktexticoncont from '../../../components/superAdmin/Disktexticoncont/Distxtcont';
import VoucherRect from '../../../components/superAdmin/VoucherRect/VoucherRect';
import Blank from '../../../components/superAdmin/Blank/Blank';
import Dasboardpageind from '../../../components/superAdmin/Dashboardpageind/Dashboardpageind';
import config from '../../../middleware/config'
import * as ACTION from '../../../middleware/actions/superAdminActions'
import { connect } from 'react-redux'
import Base from '../../../components/superAdmin/Base/Base'

class Vouchers extends Component {
    state = {
        vouchers: [],
        next: null,
        prev: null,
        current: 0,
        count: 0,
        url: config.baseUrl + config.coupons
    }

    componentDidMount = () => {
        this.props.getVouchers(this.state.url)
    }

    handleUrl = (url) => {
        this.setState({ url: url })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.vouchers !== this.props.vouchers) {
            let data = this.props.vouchers.data
            this.setState({
                vouchers: data.results,
                next: data.links.next,
                prev: data.links.previous,
                count: data.count,
                current: data.current
            })
        }

        if (prevState.url !== this.state.url) {
            this.props.getVouchers(this.state.url)
        }
    }

    search = (searchText) => {
        this.setState({ url: config.baseUrl + config.coupons + `?search=${searchText}` })
    }

    render() {
        const content = (
            <div className="voucherRootContainer">
                {!(this.props.isLoading) ?
                    <div>
                        <div className="headerContainer">
                            <TextIcon text="DISCOUNTS" img={pro1} />
                            <div onClick={() => this.props.history.push('/SuperAdmin/Vouchers/Add/')}>
                                <Box2 text="Add Voucher" />
                            </div>
                        </div>
                        <div className="innerContainer">
                            <VoucherRect history={this.props.history} search={this.search} text="Vouchers" vouchers={this.state.vouchers} current={this.state.current} />
                            <div className="pagination">
                                <Dasboardpageind current={this.state.current} handleUrl={this.handleUrl} next={this.state.next} prev={this.state.prev} />
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
    vouchers: state.superAdminReducer.getVoucherResponse,
})

const mapDispatchToProps = dispatch => ({
    getVouchers: (url) =>
        dispatch(ACTION.getVouchers({ url: url }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Vouchers);