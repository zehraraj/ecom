/* eslint-disable */
import React, { Component } from 'react';
import './CollectionRect.css';
import CollectionLine from '../CollectionLine/CollectionLine';
import TableTitle from "../TableTitle/TableTitle";
import config from '../../../middleware/config'
import icon from '../../../static/superAdmin/Category/c1.png';
import EmptyData from '../EmptyData/EmptyData';


class CollectionRect extends Component {
    state = {}
    render() {
        return (
            <div className="root">
                <div className="header">
                    <TableTitle
                        text="Collection"
                        image={icon}
                        search={this.props.search}
                        placeholder={this.props.placeholder}
                        searchRequired
                    />
                </div>
                {this.props.collections.length ?
                    <React.Fragment>
                        <div className="coll-headingg">
                            <h3 className="collection-text-1">ID</h3>
                            <h3 className="collection-text-2">COLLECTION NAME</h3>
                            <h3 className="collection-text-3">DESCRIPTION</h3>
                            <h3 className="collection-text-4"></h3>
                        </div>
                        {this.props.collections.map((item, index) =>
                            <CollectionLine
                                history={this.props.history}
                                id={(index + 1) + ((this.props.current - 1) * config.pagination.pageSize)}
                                collection={item}
                            />
                        )}
                    </React.Fragment> :
                    <EmptyData for="Collection" />
                }
            </div>
        );
    }
}

export default CollectionRect;