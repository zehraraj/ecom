/* eslint-disable */
import React, { Component } from 'react';
import './UserHomeRect.css';
import UserHomeLine from '../../../components/superAdmin/UserHomeLine/UserHomeLine'
import TableTitle from '../TableTitle/TableTitle'
import { connect } from 'react-redux';
import * as ACTION from '../../../middleware/actions/superAdminActions'
import config from '../../../middleware/config'
import icon from '../../../static/superAdmin/User/Adminusers.png';
import TokenInjector from '../../../middleware/injectors/tokenInjector';
import EmptyData from '../EmptyData/EmptyData';

class UserMainRect extends Component {
    state = {}

    render() {
        let idIndex = 1;

        return (
            <div className="root1">
                <div className="header">
                    <TableTitle
                        text="Users"
                        image={icon}
                        search={this.props.search}
                        placeholder="Email, Type"
                        searchRequired
                    />
                </div>
                {this.props.usersData.length ?
                    <React.Fragment>

                        <div className="headingg">
                            <h3 className="user-txt-1">ID</h3>
                            <h3 className="user-txt-2">EMAIL</h3>
                            <h3 className="user-txt-3">TYPE</h3>
                            <div className="user-txt-4"></div>
                        </div>
                        {this.props.usersData.map((item, index) => {
                            if (item.email === TokenInjector.getInstance().getEmail()) {
                                // idIndex--;
                                return <UserHomeLine self id={(index + idIndex) + ((this.props.current - 1) * config.pagination.pageSize)} user={item} history={this.props.history} />
                            } else
                                return <UserHomeLine id={(index + idIndex) + ((this.props.current - 1) * config.pagination.pageSize)} user={item} history={this.props.history} />
                        })}
                    </React.Fragment> :
                    <EmptyData for="Users" />
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})


export default connect(mapStateToProps, mapDispatchToProps)(UserMainRect);