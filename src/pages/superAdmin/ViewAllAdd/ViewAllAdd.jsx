/* eslint-disable */
import React, { Component } from 'react';
import './ViewAllAdd.css';
import Loading from '../../../components/superAdmin/Loading/Loading';
import { NavLink } from 'react-router-dom';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
import TextIcon from '../../../components/superAdmin/TextIcon/TextIcon';
import logo1 from '../../../static/superAdmin/User/Adminusers.png';
import Box2 from '../../../components/superAdmin/Box2/Box2';
import UserRect from '../../../components/superAdmin/UserRect/UserRect';
import { connect } from 'react-redux';
import * as ACTION from '../../../middleware/actions/superAdminActions'
import Base from '../../../components/superAdmin/Base/Base';


class ViewAllAdd extends Component {
    state = {}
    render() {
        const content = (
            <div className="flexContainer">
                {!(this.props.isLoading) ?
                    <div>
                        <div className="headerContainer">
                            <TextIcon text="USER DETAILS" img={logo1} />
                            <NavLink className="nav" to={"/SuperAdmin/Users/" + this.props.match.params.id}><Box2 text="BACK" /></NavLink>
                        </div>
                        <div className="innerContainer">
                            <UserRect id={this.props.match.params.id} />
                        </div>
                    </div>
                    : <Loading />}
            </div>
        )
        return (
            <Base content={content} history={this.props.history} />
        );
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllAdd);