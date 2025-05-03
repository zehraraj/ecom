/* eslint-disable */

import React, { Component } from 'react';
import './InventRect.css';
import inv1 from '../../../static/superAdmin/inventry/Inventry1.png';
import InventLine from '../InventLine/InventLine';
import config from '../../../middleware/config'
import TableTitle from '../TableTitle/TableTitle';
import icon from '../../../static/superAdmin/inventry/Invrntory0.png';
import { connect } from 'react-redux';
import * as ACTION from '../../../middleware/actions/superAdminActions'
import EmptyData from '../EmptyData/EmptyData';


class InventRect extends Component {
    state = {
        inventory: [],
    }

    // componentDidUpdate = (prevProps, prevState) => {
    //     if (prevProps.inventory !== this.props.inventory) {
    //         this.setState({
    //             inventory: this.props.inventory.data.results,
    //         })
    //     }
    // }

    render() {
        return (
            <div className="root2">
                <div className="header">
                    <TableTitle text="Inventory" image={icon} />
                </div>
                {this.props.inventory.length ?
                    <React.Fragment>
                        <div className="heading">
                            <h3 className="inventory-txt-1">id</h3>
                            <h3 className="inventory-txt-2">product name</h3>
                            <h3 className="inventory-txt-3">variant name</h3>
                            <h3 className="inventory-txt-4">sku</h3>
                            <h3 className="inventory-txt-5">qty</h3>
                        </div>
                        <div className="lineContainer">
                            {this.props.inventory.map((item, index) => <InventLine data={item} id={index + 1} />)}
                        </div>
                    </React.Fragment> :
                    <EmptyData for="Inventory" />
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.superAdminReducer.isLoading,
    // inventory: state.superAdminReducer.getInventoryResponse,
})

const mapDispatchToProps = dispatch => ({
    getInventory: () =>
        dispatch(ACTION.getInventory())
})

export default connect(mapStateToProps, mapDispatchToProps)(InventRect);