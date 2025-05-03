import React, { Component } from 'react';
import './DissRect.css';
import DissLine from '../DissLine/DissLine';
import TableTitle from '../TableTitle/TableTitle';
import icon from '../../../static/superAdmin/cart/Cart2.jpeg'
import config from '../../../middleware/config'
import EmptyData from '../EmptyData/EmptyData'

class DissRect extends Component {
    state = {}
    render() {
        return (
            <div className="Mainn">
                <div className="header">
                    <TableTitle
                        text="Sales"
                        image={icon}
                        placeholder="Value"
                        search={this.props.search}
                        searchRequired
                    />
                </div>
                {this.props.sales.length ?
                    <React.Fragment>
                        <div className="heading">
                            <h3 className="sale-text-1">ID</h3>
                            <h3 className="sale-text-2">VALID FROM</h3>
                            <h3 className="sale-text-3">VALID TO</h3>
                            <h3 className="sale-text-4">% VALUE</h3>
                            <div className="sale-5"></div>
                        </div>
                        {this.props.sales.map((item, index) => <DissLine history={this.props.history} id={((index + 1) + ((this.props.current - 1) * config.pagination.pageSize))} sale={item} />)}
                    </React.Fragment> :
                    <EmptyData for="Sales" />
                }
            </div>
        );
    }
}

export default DissRect;