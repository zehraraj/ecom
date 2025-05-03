/* eslint-disable */
import React, { Component } from 'react';
import './UserMain.css';
import { NavLink } from 'react-router-dom';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
import TextIcon from '../../../components/superAdmin/TextIcon/TextIcon';
import logo1 from '../../../static/superAdmin/User/Adminusers.png';
import Box2 from '../../../components/superAdmin/Box2/Box2';
import UserMainRect from '../../../components/superAdmin/UserMainRect/UserMainRect';
import { connect } from 'react-redux';
import Loading from '../../../components/superAdmin/Loading/Loading';
import Blank from '../../../components/superAdmin/Blank/Blank';
import Base from '../../../components/superAdmin/Base/Base'
class UserMain extends Component {
    state = {}

    render() {
        const content = (
            <div className="UM-flex-container">
                {!(this.props.isLoading) ?
                    <div>
                        <div className="U-headerContainer">
                            <TextIcon text="USER DETAILS" img={logo1} />
                            <div onClick={() => this.props.history.replace('/SuperAdmin/Users/')}>
                                <Box2 text="Back" />
                            </div>
                        </div>
                        <div className="innerContainer">
                            <UserMainRect id={this.props.match.params.id} />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserMain);