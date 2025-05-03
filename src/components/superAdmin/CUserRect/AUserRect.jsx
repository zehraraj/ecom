/* eslint-disable */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './AUserRect.css';

import Input from "../Input/Input"
import TableTitle from "../TableTitle/TableTitle"
import { connect } from 'react-redux'
import * as ACTION from '../../../middleware/actions/superAdminActions'
import * as validators from '../../../validators'

class AUserRect extends Component {
    state = {
        email: { error: "", value: "" },
        password: { error: "", value: "" },
        rePassword: { error: "", value: "" },
    }

    handleChange = (event, value) => {
        this.setState({ [event.target.name]: value })
    }

    handleSubmit = event => {
        if (this.state.email.error === "" && this.state.password.error === "" && this.state.rePassword.error === "")
            this.props.createUser(this.state.email.value, this.state.password.value)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.createUserResponse !== this.props.createUserResponse) {
            if (this.props.createUserResponse.success)
                this.props.history.push('/SuperAdmin/Users/')
            else if (this.props.createUserResponse.code === 400) {
                this.setState({
                    email: { value: this.state.email.value, error: this.props.createUserResponse.data.email ? this.props.createUserResponse.data.email[0] : "" },
                    password: {
                        value: this.state.password.value, error: this.props.createUserResponse.data.password ? this.props.createUserResponse.data.password[0] : ""
                    }

                })
            }
        }

        else if (prevState.password.value !== this.state.password.value || prevState.rePassword.value !== this.state.rePassword.value) {
            if (this.state.password.value !== this.state.rePassword.value || this.state.rePassword.error) {
                this.setState({ rePassword: { error: "Password Does not match", value: this.state.rePassword.value } })
            }
        }
    }

    render() {
        return (
            <div className="Add-User-Rectangle">
                <div className="headerContainer">
                    <TableTitle text="Create Admin" />
                </div>
                <div className="content">
                    <div className="Inusdfsput">
                        <Input
                            label="EMAIL"
                            required
                            placeholderText="Enter Your Email"
                            name="email"
                            type="text"
                            error={this.state.email.error}
                            value={this.state.email.value}
                            validator={validators.emailValidator}
                            handleChange={this.handleChange}
                        />

                        <Input
                            label="PASSWORD"
                            required
                            placeholderText="Enter Your Password"
                            name="password"
                            type="password"
                            error={this.state.password.error}
                            value={this.state.password.value}
                            handleChange={this.handleChange}
                        />
                        <Input
                            label="CONFIRM PASSWORD"
                            required
                            placeholderText="Comfirm Password"
                            name="rePassword"
                            type="password"
                            error={this.state.rePassword.error}
                            value={this.state.rePassword.value}
                            handleChange={this.handleChange}
                        />
                    </div>
                    <div className="saveDiv" onClick={() => this.handleSubmit()}>
                        <h3 className="txtsave">SAVE CHANGES</h3>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.superAdminReducer.isLoading,
    createUserResponse: state.superAdminReducer.registerSuperAdminResponse,
})

const mapDispatchToProps = dispatch => ({
    createUser: (email, password) =>
        dispatch(ACTION.registerSuperAdmin({ email: email, password: password, admin: true }))
})


export default connect(mapStateToProps, mapDispatchToProps)(AUserRect);

