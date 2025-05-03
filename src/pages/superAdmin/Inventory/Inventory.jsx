/* eslint-disable */
import React, { Component } from 'react';
// import { render } from 'react-dom';
import './Inventory.css';
import Texticon from '../../../components/superAdmin/TextIcon/TextIcon';
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
// import logo1 from '../../static/bb.jpeg'
import pro1 from '../../../static/superAdmin/inventry/inventory1.png';
import pro2 from '../../../static/superAdmin/inventry/Invrntory0.png';
import InventRect from '../../../components/superAdmin/InventRect/InventRect';
import * as ACTION from '../../../middleware/actions/superAdminActions'
import { connect } from 'react-redux';
import Loading from '../../../components/superAdmin/Loading/Loading';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import TexticonProduct from '../../../components/superAdmin/TexttIconProduct/TexticonProduct';
import InventryTxticon from '../../../components/superAdmin/InventryTxticon/InventryTxticon';
import Blank from '../../../components/superAdmin/Blank/Blank';
import config from '../../../middleware/config'
import Dashboardpageind from '../../../components/superAdmin/Dashboardpageind/Dashboardpageind'

class Inventory extends Component {
    state = {
        inventory: [],
        next: "",
        prev: "",
        count: 0,
        url: config.baseUrl + config.products,
        current: 0
    }

    handleUrl = (url) => {
        this.setState({ url: url })
    }

    componentDidMount = () => {
        this.props.getInventory()
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.inventory !== this.props.inventory) {
            let data = this.props.inventory.data
            console.log(data)
            this.setState({
                inventory: data.results,
                next: data.links.next,
                previous: data.links.previous,
                count: data.count,
                current: data.current
            })
        }
    }

    render() {
        return (
            <div className="i-flex-container">
                <div>
                    <Navbar history={this.props.history} />
                </div>
                <div>
                    <Sidenav />
                </div>
                {!(this.props.isLoading) ?
                    <div className="p-contentContainer">
                        <div className="p-headerContainer">
                            <InventryTxticon text="INVENTORY" img={pro1} />
                        </div>
                        <InventRect text="INVENTORY" inventory={this.state.inventory} img={pro2} text2="PRODUCT NAME" text3="STOCK AVAILABLE" />
                        <Dashboardpageind current={this.state.current} handleUrl={this.handleUrl} />
                        <Blank />
                        <Blank />
                    </div>
                    : <Loading />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.superAdminReducer.isLoading,
    inventory: state.superAdminReducer.getInventoryResponse,
})

const mapDispatchToProps = dispatch => ({
    getInventory: () =>
        dispatch(ACTION.getInventory())
})

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);