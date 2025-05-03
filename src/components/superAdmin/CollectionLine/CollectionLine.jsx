/* eslint-disable */
import React, { Component } from 'react';
import './CollectionLine.css';
import more from '../../../static/superAdmin/more.png'
import { NavLink } from 'react-router-dom';
class CollectionLines extends Component {
    state = {}
    render() {
        return (
            <div className="colline">
                <div className="content">
                    <h3 className="collection-text-1">{this.props.id}</h3>
                    <h3 className="collection-text-2">{this.props.collection.collection_name}</h3>
                    <h3 className="collection-text-3 wrap">{this.props.collection.collection_desc ? `${this.props.collection.collection_desc.substr(0, 15)}...` : ''}</h3>
                    <div className="more-icon collection-text-4" onClick={() => this.props.history.push(`/SuperAdmin/Collection/${this.props.collection.id}/`)}>
                        <img src={more} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CollectionLines;