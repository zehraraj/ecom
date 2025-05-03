/* eslint-disable */
import React, { Component } from 'react';
import Image from "../../../static/Ladki.png";
import "./ForgotPassword.css";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles'
import * as ACTION from '../../../middleware/actions/commonActions'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'

class ForgotPassword extends Component {
  state = {
    email: "",
    emailError: "",
    success: false
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.forgotPasswordResponse !== this.props.forgotPasswordResponse) {
      let response = this.props.forgotPasswordResponse
      if (response.success) this.setState({ success: true })
      else if (response.code === 404) this.setState({ emailError: 'No Account With Associated With This Email' })
    }
  }

  emailHandleChange = (event) => {
    if (!event.target.value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/))
      this.setState({ emailError: 'Enter A Valid Email' })
    else this.setState({ emailError: '' })

    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = () => {
    if (!this.state.emailError)
      this.props.forgotPassword(this.state.email)
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') this.handleSubmit()
  }

  render() {
    return (
      <div className="rootfds" >
        {/* image */}
        < div className="img-container" >
          <img src={Image} alt="" />
        </div>

        {/* Others */}
        <div className="right-container" >
          {!this.state.success ? <React.Fragment>

            <div className="error">
              {this.state.errorText}
            </div>

            <div className="form-container">
            <h3>CHANGE PASSWORD</h3>
              <TextField
                required
                error={this.state.emailError}
                helperText={this.state.emailError}
                id="email"
                type="email"
                label="email"
                name="email"
                autoComplete="email"
                style={styles.input}
                onBlur={(e) => this.emailHandleChange(e)}
                onKeyPress={(e) => this.handleEnter(e)}
              />

              <div className="bottom-container">
                <div className="submit-button-container" onClick={() => this.handleSubmit()}>
                  <h3>Verify</h3>
                </div>
              </div>
            </div>
          </React.Fragment> : <h2>Check Your Mail</h2>}
        </div >
      </div >
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.commonReducer.isLoading,
  forgotPasswordResponse: state.commonReducer.forgotPasswordResponse
})

const mapDispatchToProps = dispatch => ({
  forgotPassword: (email) =>
    dispatch(ACTION.forgotPassword({ email: email }))
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ForgotPassword));
