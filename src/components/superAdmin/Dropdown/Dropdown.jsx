/* eslint-disable */
import React, { Component } from 'react';
import downArrow from '../../../static/superAdmin/downArrow.png'
import './Dropdrop.css'

class Dropdown extends Component {
  constructor(props) {
    super(props)
    // let options = [
    //   props.defaultValue ? { id: 0, value: props.defaultValue } : { id: 0, value: 'Select A Option' },
    // ];
    // (props.options)
    // if (props.options) options = options.concat(props.options)
    let defaultValue = { id: 0, value: 'Select A Option' }
    this.state = {
      // options: options,
      options: [],
      isOpen: false,
      defaultValue: defaultValue,
      optionSelected: props.value.value ? props.value : defaultValue,
    }
  }

  componentDidMount = () => {
    let options = [this.state.defaultValue]
    this.props.options.map(item => options.push(item))
    this.setState({
      options: options
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.value !== this.props.value) {
      this.setState({ optionSelected: this.props.value.value ? this.props.value : this.state.defaultValue })
    } else if (prevProps.options !== this.props.options) {
      let options = [this.state.defaultValue].concat(this.props.options)
      this.setState({ options: options })
    }
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleOptionClick = (data) => {
    let error = data.id === 0 ? "Select Valid input." : ""
    this.setState({
      optionSelected: data,
      isOpen: false,
    }, () => this.props.handleChange(this.props.name, data, error))
  }

  render() {
    const Option = (props) => {
      return <div className="option" onClick={() => this.handleOptionClick(props.data)}>
        {props.data.value}
      </div>
    }

    return (
      <div className="dropdown-root-div">
        <div className="dropdown-content-div">
          <h3 className="text">{this.props.required ? this.props.label + " *" : this.props.label}</h3>
          <div className="wrapper">
            {/* Input Box */}
            <div className={this.props.error ? "inputIcon error" : 'inputIcon'}>
              <input className="dropdownBox"
                type="text"
                ref={this.inputRef}
                placeholder={this.props.placeholderText}
                value={this.state.optionSelected.value}
                name={this.props.name}
                disabled
                required
              />
              <div className="icon">
                <img src={downArrow} onClick={() => this.toggleOpen()} />
              </div>
            </div>

            {/* Options */}
            <div className={this.state.isOpen ? "optionContainer" : "optionContainer none"}>
              {/* {console.log(this.state.options)} */}
              {this.state.options.map(item => <Option data={item} />)}
            </div>
          </div>
        </div>

        <div className="dropdown-error-div">
          <div className="dropdown-error-text">
            {this.props.error}
          </div>
        </div>

      </div>
    );
  }
}

export default Dropdown;