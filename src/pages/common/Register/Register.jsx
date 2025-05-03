/* eslint-disable */
import React, { Component } from "react";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Image from "../../../static/Ladki.png";
import showPassIcon from '../../../static/eye.png';
import * as ACTION from '../../../middleware/actions/customerActions';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core";
import { styles } from "../styles";
import './Register.css';

class Register extends Component {
  state = {
    userCreated: false,
    emailError: '',
    passwordError: '',
    email: '',
    password: '',
    rePassword: '',
    errorText: '',
    rePassError: '',
    showPass: false,
    showRePass: false,
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.registerResponse !== this.props.registerResponse) {
      let response = this.props.registerResponse
      if (response.success) {
        this.setState({ userId: response.data.id, userCreated: true })
        // Redirect to login
        this.handleUser()
      }

      else if (response.code === 400) {
        let error = response.data.email[0][0].toUpperCase() + response.data.email[0].slice(1)
        this.setState({ errorText: error })
      }
    }
  }

  handleUser = () => {
    this.props.history.push('/login')
  }

  emailHandleChange = (event) => {
    if (!event.target.value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/))
      this.setState({ emailError: 'Enter A Valid Email' })
    else this.setState({ emailError: '' })

    this.setState({ [event.target.name]: event.target.value })
  }

  passwordHandleChange = (event) => {
    // if (!event.target.value.match(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/))
    //   this.setState({
    //     passwordError: 'Password must be at least 4 characters, \
    //                     no more than 8 characters, and must include at least one upper case letter, \
    //                     one lower case letter, and one numeric digit.'
    //   })
    // else this.setState({ passwordError: '' })
    if (this.state.rePassword !== event.target.value) this.setState({ rePassError: 'Password Does Not Match' })
    else this.setState({ rePassError: '' })
    this.setState({ [event.target.name]: event.target.value })
  }

  rePasswordHandleChange = (event) => {
    if (this.state.password !== event.target.value) this.setState({ rePassError: 'Password Does Not Match' })
    else this.setState({ rePassError: '' })
    this.setState({ [event.target.name]: event.target.value })
  }

  handleForgotPassword = () => {
    this.props.history.push('/forgot')
  }

  handleSubmit = () => {
    if ((this.state.emailError && this.state.passwordError) && this.state.rePassError) {
      this.setState({ errorText: "Both the fields must be filled" })
    } else this.props.registerCustomer(this.state.email, this.state.password)
  }

  handleClickShowPassword = () => {
    this.setState({ showPass: !this.state.showPass })
  }

  handleClickShowRePassword = () => {
    this.setState({ showRePass: !this.state.showRePass })
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') this.handleSubmit()
  }

  render() {
    return (
      <div className="sdfdsfsdf">
        {/* image */}
        <div className="img-container">
          <img src={Image} alt="" />
        </div>

        {/* Others */}
        <div className="right-container">
          <div className="error">
            {this.state.errorText}
          </div>
          <div className="form-container">
            <h3 className="title">REGISTER</h3>

            <TextField
              required
              error={this.state.emailError}
              helperText={this.state.emailError}
              id="email"
              type="email"
              label="Email"
              name="email"
              autoComplete="email"
              style={styles.input}
              onBlur={(e) => this.emailHandleChange(e)}
              onKeyPress={(e) => this.handleEnter(e)}
              autoFocus
            />
            <TextField
              required
              error={this.state.passwordError}
              helperText={this.state.passwordError}
              id="password"
              type={this.state.showPass ? 'text' : 'password'}
              label="Password"
              name="password"
              autoComplete="password"
              style={styles.input}
              onBlur={(e) => this.passwordHandleChange(e)}
              onKeyPress={(e) => this.handleEnter(e)}
              autoFocus
              InputProps={{
                endAdornment:
                  < InputAdornment position="end" >
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {this.state.showPassword ? <img src={showPassIcon} /> : <img src={showPassIcon} />}
                    </IconButton>
                  </InputAdornment>,
              }}
            />
            <TextField
              required
              error={this.state.rePassError}
              helperText={this.state.rePassError}
              id="rePassword"
              type={this.state.showRePass ? 'text' : 'password'}
              label="Retype Password"
              name="rePassword"
              autoComplete="rePassword"
              style={styles.input}
              onBlur={(e) => this.rePasswordHandleChange(e)}
              onKeyPress={(e) => this.handleEnter(e)}
              InputProps={{
                endAdornment:
                  < InputAdornment position="end" >
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.handleClickShowRePassword}
                    >
                      {this.state.showRePass ? <img src={showPassIcon} /> : <img src={showPassIcon} />}
                    </IconButton>
                  </InputAdornment>,
              }}
              autoFocus
            />

            <div className="bottom-container">
              <div className="right-bottom">
                <div className="submit-button-container" onClick={() => this.handleSubmit()}>
                  <h3>REGISTER</h3>
                </div>
                <div className="a-user" onClick={() => this.handleUser()}>Already a user? Login</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.customerReducer.isLoading,
  registerResponse: state.customerReducer.registerResponse,
  customerResponse: state.customerReducer.customerResponse,
});

const mapDispatchToProps = dispatch => ({
  registerCustomer: (email, password) =>
    dispatch(ACTION.registerCustomer({ email: email, password: password })),

  updateCustomer: (id, first_name, last_name, gender, phone_no) =>
    dispatch(ACTION.updateCustomer({ userId: id, payload: { first_name: first_name, last_name: last_name, gender: gender, phone_no: phone_no } }))
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Register));
