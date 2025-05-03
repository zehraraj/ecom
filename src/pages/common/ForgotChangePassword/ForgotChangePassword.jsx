/* eslint-disable */
import React, { Component } from 'react';
import Image from "../../../static/Ladki.png";
import "./ForgotChangePassword.css";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles'
import * as ACTION from '../../../middleware/actions/commonActions'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'

class ForgotChangePassword extends Component {
  state = {
    password: "",
    rePasswordError: "",
    errorText: ''
  };


  componentDidUpdate = (prevProps) => {
    if (prevProps.changePasswordResponse !== this.props.changePasswordResponse) {
      let response = this.props.changePasswordResponse
      if (response.success) this.setState({ success: true })
      else if (response.code === 500) this.setState({ errorText: "Token is invalid or expired" })
    }
  }

  passwordHandleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  rePasswordHandleChange = (event) => {
    if (event.target.value === this.state.password)
      this.setState({ [event.target.name + 'Error']: 'Password Does Not Match' })
    else this.setState({ [event.target.name + 'Error']: '' })

    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = () => {
    if (!this.state.rePasswordError)
      this.props.changePassword(this.props.match.params.token, this.state.password, this.state.password)
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') this.handleSubmit()
  }

  render() {
    console.log('render')
    return (
      <div className="root " >
        {/* image */}
        < div className="img-container" >
          <img src={Image} alt="" />
        </div>

        {/* Others */}
        <div className="right-container" >
          <div className="error">
            {this.state.errorText}
          </div>
          <h3>CHANGE PASSWORD</h3>

          <div className="form-container">

            <TextField
              required
              error={this.state.emailError}
              helperText={this.state.emailError}
              id="password"
              type="password"
              label="Password"
              name="password"
              autoComplete="password"
              style={styles.input}
              onBlur={(e) => this.passwordHandleChange(e)}
              onKeyPress={(e) => this.handleEnter(e)}
            />
            <TextField
              required
              error={this.state.emailError}
              helperText={this.state.emailError}
              id="rePassword"
              type="password"
              label="Retype Password"
              name="rePassword"
              autoComplete="rePassword"
              style={styles.input}
              onBlur={(e) => this.rePasswordHandleChange(e)}
              onKeyPress={(e) => this.handleEnter(e)}
            />

            <div className="bottom-container">
              <div className="submit-button-container" onClick={() => this.handleSubmit()}>
                <h3>Done</h3>
              </div>
            </div>
          </div>
        </div >
      </div >
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.commonReducer.isLoading,
  changePasswordResponse: state.commonReducer.changePasswordResponse
})

const mapDispatchToProps = dispatch => ({
  changePassword: (token, pass, repass) =>
    dispatch(ACTION.changePassword({ token: token, payload: { new_password: pass, confirm_password: repass } }))
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ForgotChangePassword));
