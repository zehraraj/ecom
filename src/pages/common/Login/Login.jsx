/* eslint-disable */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Image from "../../../static/Ladki.png";
import showPassIcon from "../../../static/eye.png";
import "./Login.css";
import { withStyles } from "@material-ui/core/styles";
import TokenInjector from "../../../middleware/injectors/tokenInjector";
import { styles } from "../styles";

class Login extends Component {
  state = {
    Email: "",
    Password: "",
    errorText: "",
    emailError: "",
    passwordError: "",
    forgotPass: false,
    showPassword: false,
  };

  emailHandleChange = (event) => {
    if (
      !event.target.value.match(
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
      )
    )
      this.setState({ emailError: "Enter A Valid Email" });
    else this.setState({ emailError: "" });

    this.setState({ [event.target.name]: event.target.value });
  };

  passwordHandleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    let instance = TokenInjector.getInstance()
    if (instance.getType() === 'admin' && instance.getToken()) {
      this.props.history.push("/SuperAdmin/");
    }
  }

  successFunction = (data) => {
    localStorage.setItem("email", data.email);
    if (data.type === "admin") {
      localStorage.setItem("type", "admin");
      this.props.history.push("/SuperAdmin/");
    } else {
      localStorage.setItem("type", "customer");
      this.props.history.push("/");
    }
  };

  failFunction = (status, data) => {
    if (status === 401) this.setState({ errorText: data.detail });
  };

  handleForgotPass = () => {
    this.props.history.push("/forgot");
  };

  handleRegister = () => {
    this.props.history.push("/register");
  };

  handleSubmit = () => {
    if (!(this.state.Email || this.state.Password)) {
      this.setState({ errorText: "Both the fields must be filled" });
    } else
      TokenInjector.getInstance().loginToken(
        this.state.Email,
        this.state.Password,
        this.successFunction,
        this.failFunction
      );
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleEnter = (e) => {
    if (e.key === "Enter") this.handleSubmit();
  };

  render() {
    const inputCls = {
      input: {
        '&::placeholder': {
          fontSize: '22vw',
        },
      },
    }
    return (
      <div className="Main3">
        {/* image */}
        <div className="img-container">
          <img src={Image} alt="" />
        </div>

        {/* Others */}
        <div className="rightconsdftainer">
          <div className="loginContent">

            <h3 className="loginTitle">LOGIN</h3>
            <div className="error">{this.state.errorText}</div>

            <div className="form-container">
              <TextField
                required
                error={this.state.emailError}
                helperText={this.state.emailError}
                id="Email"
                type="email"
                label="Email"
                name="Email"
                autoComplete="Email"
                style={styles.input}
                onBlur={(e) => this.emailHandleChange(e)}
                onKeyPress={(e) => this.handleEnter(e)}
              />

              <TextField
                required
                error={this.state.passwordError}
                helperText={this.state.passwordError}
                id="Password"
                type={this.state.showPassword ? "text" : "password"}
                label="Password"
                name="Password"
                autoComplete="Password"
                style={styles.input}
                onBlur={(e) => this.passwordHandleChange(e)}
                onKeyPress={(e) => this.handleEnter(e)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      // onMouseDown={this.handleMouseDownPassword}
                      >
                        {this.state.showPassword ? (
                          <img src={showPassIcon} />
                        ) : (
                          <img src={showPassIcon} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <div className="bottom-container">
                <div
                  className="forgot-password"
                  onClick={() => this.handleForgotPass()}
                >
                  Forgot Password?
                </div>

                <div className="right-bottom">
                  <div className="submit-bc no-select" onClick={() => this.handleSubmit()}>
                    <h3>LOGIN</h3>
                  </div>
                  <div
                    className="not-a-user"
                    onClick={() => this.handleRegister()}
                  >
                    Not a user? Register
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({})

// const mapDispatchToProps = dispatch => ({})

export default withStyles(styles)(Login);
