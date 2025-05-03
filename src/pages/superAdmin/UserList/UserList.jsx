/* eslint-disable */
import React, { Component } from 'react';
import './UserList.css';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
import TextIcon from '../../../components/superAdmin/TextIcon/TextIcon';
import logo1 from '../../../static/superAdmin/User/Adminusers.png';
import UserHomeRect from '../../../components/superAdmin/UserHomeRect/UserHomeRect';
import Box2 from '../../../components/superAdmin/Box2/Box2';
import { connect } from 'react-redux';
import * as ACTION from '../../../middleware/actions/superAdminActions'
import config from '../../../middleware/config'
import Dashboardpageind from '../../../components/superAdmin/Dashboardpageind/Dashboardpageind';
import Loading from '../../../components/superAdmin/Loading/Loading';
import Base from '../../../components/superAdmin/Base/Base'


class UserList extends Component {
    state = {
        users: [],
        next: null,
        prev: null,
        current: 0,
        count: 0,
        url: config.baseUrl + config.users,
        searchText: "",
    }

    componentDidMount = () => {
        this.props.getUsers(this.state.url)
    }

    handleUrl = (url) => {
        this.setState({ url: url })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.users !== this.props.users) {
            let data = this.props.users.data
            this.setState({
                users: data.results,
                next: data.links.next,
                prev: data.links.previous,
                count: data.count,
                current: data.current
            })
        }

        else if (prevState.url !== this.state.url) {
            this.props.getUsers(this.state.url)
        }
    }

    search = (searchText) => {
        switch (searchText) {
            case 'admin':
                this.setState({ url: config.baseUrl + config.users + `?admin=true` })
                break;
            case 'customer':
                this.setState({ url: config.baseUrl + config.users + `?customer=true` })
                break;
            default:
                this.setState({ url: config.baseUrl + config.users + `?search=${searchText}` })
                break;
        }
    }

    render() {
        const content = (
            <div className="userRootContainer">
                {!(this.props.isLoading) ?
                    <div>
                        <div className="userHeaderContainer">
                            <TextIcon text="USERS" img={logo1} />
                            <div onClick={() => this.props.history.push('/SuperAdmin/Users/Create/')}>
                                <Box2 text="Create Admin" />
                            </div>
                        </div>
                        <div className="innerContainer">
                            <UserHomeRect
                                usersData={this.props.users.data.results}
                                current={this.state.current}
                                history={this.props.history}
                                search={this.search}
                            />
                            <div className="pagination">
                                <Dashboardpageind current={this.state.current} handleUrl={this.handleUrl} prev={this.state.prev} next={this.state.next} />
                            </div>
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


const mapStateToProps = state => ({
    isLoading: state.superAdminReducer.isLoading,
    users: state.superAdminReducer.getUsersResponse
})

const mapDispatchToProps = dispatch => ({
    getUsers: (url) =>
        dispatch(ACTION.getUsers({ url: url }))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);