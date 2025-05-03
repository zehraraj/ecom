/* eslint-disable */
import React, { Component } from 'react';
import './UserRect.css';
import UserRect2 from '../UserRect2/UserRect2';

import { connect } from 'react-redux'
import * as ACTION from '../../../middleware/actions/superAdminActions'
import config from '../../../middleware/config'
import TextIcon from '../TextIcon/TextIcon';
import TableTitle from '../TableTitle/TableTitle';

class UserRect extends Component {
    state = {
        addresses: [],
        url: null
    }

    componentDidMount = () => {
        this.props.getAddresses(config.baseUrl + config.addresses + "?customer__user=" + this.props.id)
    }

    handleUrl = (url) => {
        this.setState({ url: url })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.addresses !== this.props.addresses) {
            let data = this.props.addresses.data
            this.setState({
                addresses: data
            })
        }

        if (prevState.url !== this.state.url) {
            this.props.getAddresses(this.state.url)
        }
    }
    render() {
        return (
            <div className="User-rect">
                <div className="header">
                    <TableTitle text="Address" />
                </div>
                <div className="content">
                    {this.state.addresses.map((item, index) => <UserRect2 data={item} />)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.superAdminReducer.isLoading,
    addresses: state.superAdminReducer.getAddressesResponse
})

const mapDispatchToProps = dispatch => ({
    getAddresses: url =>
        dispatch(ACTION.getAddresses({ url: url }))
})


export default connect(mapStateToProps, mapDispatchToProps)(UserRect);