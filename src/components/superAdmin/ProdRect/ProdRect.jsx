/* eslint-disable */

import React, { Component } from 'react';
import './ProdRect.css';
import DashLine from '../DashLine/DashLine';
import config from '../../../middleware/config'
import icon from '../../../static/superAdmin/product/Product3.png';
import TableTitle from '../TableTitle/TableTitle'
import Box2 from '../Box2/Box2';
import EmptyData from '../EmptyData/EmptyData'

class ProdRect extends Component {
    state = {}
    render() {
        return (
            <div className="sdf">
                <div className="header">
                    <TableTitle
                        text="All Products"
                        image={icon}
                        placeholder="Name, Collection, Type"
                        search={this.props.search}
                        searchRequired
                    />
                </div>
                {this.props.products.length ?
                    <React.Fragment>
                        <div className="heading">
                            <h3 className="prod-txt1">ID</h3>
                            <h3 className="prod-txt2">NAME</h3>
                            <h3 className="prod-txt3">TYPE</h3>
                            <h3 className="prod-txt4">PRICE</h3>
                            <h3 className="prod-txt5">COLLECTION</h3>
                            <h3 className="prod-txt6">IN STOCK</h3>
                            <h3 className="prod-txt7"></h3>
                        </div>
                        {this.props.products.map((item, index) => <DashLine history={this.props.history} id={((index + 1) + ((this.props.current - 1) * config.pagination.pageSize))} product={item} />)}
                    </React.Fragment> :
                    <EmptyData for="Products" />
                }
            </div>
        );
    }
}

export default ProdRect;