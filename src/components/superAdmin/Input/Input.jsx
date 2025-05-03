/* eslint-disable */
import React, { Component } from 'react';
import './Input.css';
import addIcon from "../../../static/superAdmin/add/add1.png"
import removeIcon from "../../../static/superAdmin/add/remove.png"
import showPassword from "../../../static/eye.png"
import Checkbox from './Checkbox/Checkbox';

class Input extends Component {
  constructor(props) {
    super(props);
    this.fileRef = React.createRef();
    this.fileTextRef = React.createRef();
    this.dateRef = React.createRef();
    this.passwordRef = React.createRef();
    this.state = {
      input: () => { },
      datePickerOpen: false,
      buttonStatus: 'add',
      // validator: props.validator ? props.validator : function () { return true },
      // error: this.props.error,
    }
  }

  componentDidMount = () => {
    this.setState({
      validator: this.props.validator ? this.props.validator : function () { return true },
      error: this.props.error,
    })
    if (this.props.type === "text")
      this.setState({ input: () => this.textInput() })
    else if (this.props.type === "file")
      this.setState({ input: () => this.fileInput() })
    else if (this.props.type === "textArea")
      this.setState({ input: () => this.textAreaInput() })
    else if (this.props.type === "date")
      this.setState({ input: () => this.dateInput() })
    else if (this.props.type === "checkbox")
      this.setState({ input: () => this.checkboxInput() })
    else if (this.props.type === "password")
      this.setState({ input: () => this.passwordInput() })
    else this.setState({ input: () => this.textInput() })
  }

  addFile = () => {
    this.setState({ buttonStatus: 'add' })
    this.fileRef.current.click()
  }

  removeIcon = () => {
    this.setState({ value: "", buttonStatus: 'remove' })
    this.fileRef.current.value = null
    if (this.props.removeHandleChange)
      this.props.removeHandleChange(event, this.props.args)
  }

  setValue = (event) => {
    this.setState({ value: event.target.value.substr(12) })
    this.props.handleChange(event, this.props.args)
  }

  showPassword = () => {
    this.passwordRef.current.type = this.passwordRef.current.type === 'password' ? 'text' : 'password'
  }

  handleChange = (e) => {
    if (e.target.value === "") {
      if (this.props.required)
        this.props.handleChange(e, { error: "This field may not be blank", value: e.target.value })
      else
        this.props.handleChange(e, { error: "", value: e.target.value })
      // this.setState({ errorText: "" })
    } else if (this.state.validator(e.target.value)) {
      this.props.handleChange(e, { error: "", value: e.target.value })
      // this.setState({ errorText: "" })
    } else {
      this.props.handleChange(e, { error: "Enter a valid input", value: e.target.value })
      // this.setState({ errorText: "Enter a Valid Input" })
    }
  }

  componentDidUpdate = (prevProps) => {
    // console.log(prevProps.error !== this.props.error)
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value })
    } else if (prevProps.error !== this.props.error) {
      // console.log('in')
      this.setState({ error: this.props.error })
    }
  }

  passwordInput = () => {
    return (
      <React.Fragment>
        <input
          className={this.props.error ? "inputBox error" : "inputBox"}
          type="password"
          value={this.state.value}
          placeholder={this.props.placeholderText}
          name={this.props.name}
          onChange={(e) => this.handleChange(e)}
          required={this.props.required}
          ref={this.passwordRef}
        />
        <div className="show-password-icon">
          <img src={showPassword} onClick={() => this.showPassword()} />
        </div>
      </React.Fragment>
    )
  }

  textAreaInput = () => {
    return (
      <React.Fragment>
        <textarea
          className={this.props.error ? "inputBox error" : "inputBox"}
          name={this.props.name}
          placeholder={this.props.placeholderText}
          onChange={(e) => this.handleChange(e)}
          value={this.props.value}
          required={this.props.required}
        />
      </React.Fragment>
    )
  }

  textInput = () => {
    // console.log(this.props.error)
    return <input
      className={this.props.error ? "inputBox error" : "inputBox"}
      type="text"
      value={this.props.value}
      placeholder={this.props.placeholderText}
      name={this.props.name}
      onChange={(e) => this.handleChange(e)}
      required={this.props.required}
    />
  }

  checkboxInput = () => {
    return <div className="checkboxContainer">
      {this.props.checkboxOptions.map((item, index) =>
        <Checkbox
          data={item}
          index={index}
          handleChange={this.props.handleChange}
          active={item.active}
        />
      )}
    </div>
  }

  fileInput = () => {
    return (
      <React.Fragment>
        <input className={this.props.error ? "inputBox error" : 'inputBox'}
          type="text"
          ref={this.fileTextRef}
          placeholder={this.props.placeholderText}
          // value={this.state.value}
          value={this.props.value ? this.props.value.split('\\').reverse()[0] : ''}
          disabled
        />
        <div className="icon">
          <img src={addIcon} onClick={() => this.addFile()} />
          {this.props.value ?
            <img src={removeIcon} onClick={() => this.removeIcon()} /> :
            <React.Fragment />
          }
        </div>
        <input type="file"
          className="fileInput"
          ref={this.fileRef}
          name={this.props.name}
          accept="image/*"
          onChange={(e) => this.setValue(e)}
        />
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className="Input">
        <div className="input-content">
          <h3 className="input-text">{this.props.required ? this.props.label + " *" : this.props.label}</h3>
          <div className="input-main-div">
            {this.state.input()}
          </div>
        </div>

        <div className="input-error">
          <div className="input-text">
            {this.props.error}
          </div>
        </div>
      </div>
    );
  }
}

export default Input;