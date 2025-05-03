/* eslint-disable */
import React, { Component } from 'react';
import './Navbar.css';
import logo1 from '../../../static/superAdmin/sitelogo/Uilogo.png';
import logo2 from '../../../static/superAdmin/User/login3.png';
import Adminlogo from '../../../components/superAdmin/Adminlogo/Adminlogo';
import { connect } from 'react-redux'
import TokenInjector from "../../../middleware/injectors/tokenInjector";

class Navbar extends Component {
    state = {
        email: ""
    }

    logout = () => {
        localStorage.clear()
        this.props.history.push('/login')
    }

    componentDidMount = () => {
        this.setState({ email: TokenInjector.getInstance().getEmail() })
    }

    render() {
        return (
            <div className="Header-Container">
                <div className="icon">
                    <img src={logo1} alt="" />
                </div>

                <div className="right">
                    <h2 className="email">{this.state.email}</h2>
                    <img src={logo2} className="logout" onClick={() => this.logout()} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);