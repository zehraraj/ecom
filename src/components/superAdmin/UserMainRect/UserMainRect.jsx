/* eslint-disable */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './UserMainRect.css';
import { connect } from 'react-redux';
import * as ACTION from '../../../middleware/actions/superAdminActions'
import TextIcon from '../TextIcon/TextIcon';
import TableTitle from '../TableTitle/TableTitle';


class UserMainRect extends Component {
    state = {
        email: "",
        first_name: "",
        last_name: "",
        gender: "",
        contact_no: ""
    }

    componentDidMount() {
        this.props.getCustomer(this.props.id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.customerResponse !== this.props.customerResponse) {
            let data = this.props.customerResponse.data.results[0]

            this.setState({
                email: data.user.email,
                first_name: data.first_name,
                last_name: data.last_name,
                gender: data.gender,
                contact_no: data.customer_phone
            })
        }
    }

    render() {
        return (
            <div className="User-Main-rect">
                <div className="title">
                    <TableTitle text="Details" image="" />
                </div>
                <div className="content">
                    <div className="row">
                        <div className="user-detail-text">First Name</div>
                        <div className="colon">:</div>
                        <div className="result caps">{this.state.first_name}</div>
                    </div>
                    <div className="row">
                        <div className="user-detail-text">Last Name</div>
                        <div className="colon">:</div>
                        <div className="result caps">{this.state.last_name}</div>
                    </div>
                    <div className="row">
                        <div className="user-detail-text">Email</div>
                        <div className="colon">:</div>
                        <div className="result">{this.state.email}</div>
                    </div>
                    <div className="row">
                        <div className="user-detail-text">Contact No</div>
                        <div className="colon">:</div>
                        <div className="result caps">{this.state.contact_no}</div>
                    </div>
                    <div className="row">
                        <div className="user-detail-text">Gender</div>
                        <div className="colon">:</div>
                        <div className="result caps">{this.state.gender}</div>
                    </div>
                </div>
                <div className="addressButton">
                    <div className="box">
                        <NavLink className="nav" to={"/SuperAdmin/Users/" + this.props.id + "/Addresses/"}><h2 className="tt">View All Addresses</h2> </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isLoading: state.superAdminReducer.isLoading,
    customerResponse: state.superAdminReducer.getCustomerResponse
})

const mapDispatchToProps = dispatch => ({
    getCustomer: userId =>
        dispatch(ACTION.getCustomer({ userId: userId }))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserMainRect);