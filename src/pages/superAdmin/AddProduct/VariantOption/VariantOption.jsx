/* eslint-disable */
import React, { Component } from 'react';
import Input from '../../../../components/superAdmin/Input/Input'
import TableTitle from '../../../../components/superAdmin/TableTitle/TableTitle'
import downArrow from '../../../../static/superAdmin/downArrow.png'
import pro2 from '../../../../static/superAdmin/product/Product3.png'
import "./VariantOption.css"
import { connect } from 'react-redux'
import * as ACTION from '../../../../middleware/actions/superAdminActions'
import config from '../../../../middleware/config';

class AddVariant extends Component {
  constructor(props) {
    super(props);
    let groupDefaultOption = [{ id: 0, value: "Select A Option Group" }]
    let valueDefaultOption = [{ id: 0, value: "Select A Option Value" }]

    let groupOptions = props.groupOptions ? groupDefaultOption.concat(props.groupOptions) : groupDefaultOption
    let valueOptions = valueDefaultOption

    this.state = {
      groupOptions: groupOptions,
      groupIsOpen: false,
      groupOptionSelected: Object.keys(props.value.option_group).length === 0 && props.value.option_group.constructor === Object ?
        groupOptions[0] : props.value.option_group,
      groupDefaultOption: groupDefaultOption,

      valueOptions: valueOptions,
      valueIsOpen: false,
      valueOptionSelected: Object.keys(props.value.option_value).length === 0 && props.value.option_value.constructor === Object ?
        valueOptions[0] : props.value.option_value,
      valueDefaultOption: valueDefaultOption,

      allowGeneration: true,
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.optionValues !== this.props.optionValues) {
      if (this.props.optionValues.success) {
        let tempArr = []
        this.props.optionValues.data.results.map(item => tempArr.push({ id: item.id, value: item.option_name }))
        let arr = this.state.valueDefaultOption.concat(tempArr)

        this.setState({ valueOptions: arr })
      }
    }
  }

  groupHandleOptionClick = (e, data) => {
    if (data.id !== 0) {
      this.props.getOptionValues(config.baseUrl + config.options + `?option_group=${data.id}`)
    } else {
      this.props.removeVariantOption()
      this.setState({
        allowGeneration: true,
        valueOptions: this.state.valueDefaultOption,
        valueOptionSelected: this.state.valueDefaultOption[0]
      })
    }

    this.props.handleDropdownChange(this.props.index, e.target.getAttribute('name'), JSON.parse(e.target.getAttribute('value')))
    this.setState({
      groupIsOpen: false,
      groupOptionSelected: data
    })
  }

  valueHandleOptionClick = (e, data) => {
    if (this.state.allowGeneration) {
      this.props.addVariantOption()
      this.setState({ allowGeneration: false })
    }
    else if (data.id === 0) {
      this.props.removeVariantOption()
      this.setState({ allowGeneration: true })
    }

    this.props.handleDropdownChange(this.props.index, e.target.getAttribute('name'), JSON.parse(e.target.getAttribute('value')))
    this.setState({
      valueIsOpen: false,
      valueOptionSelected: data
    })
  }

  render() {
    const Option = (props) => {
      return (
        <div className="option" value={JSON.stringify(props.data)} name={props.name} onClick={(e) => props.handleOptionClick(e, props.data)}>
          {props.data.value}
        </div>
      )
    }

    return (
      <div className="variantOptionRoot">
        {/* OPTION GROUP */}
        <div className="optionGroupContainer bottom">
          <h3 className="text">Option Group {this.props.index + 1}</h3>
          <div className="optionWrapper">
            {/* Input Box */}
            <div className="inputIcon">
              <input className="inputBox"
                type="text"
                placeholder={this.props.placeholderText}
                value={this.state.groupOptionSelected.value}
                disabled
                required
              />

              <div className="icon">
                <img src={downArrow} onClick={() => {
                  this.setState({ groupIsOpen: !this.state.groupIsOpen })
                }} />
              </div>
            </div>

            {/* Options */}
            <div className={this.state.groupIsOpen ? "optionContainer" : "optionContainer none"}>
              {this.state.groupOptions.map(item => <Option data={item} name="option_group" handleOptionClick={this.groupHandleOptionClick} />)}
            </div>
          </div>
        </div>

        {/* OPTION VALUE */}
        <div className="optionValueContainer">
          <h3 className="text">Option Value {this.props.index + 1}</h3>
          <div className="optionWrapper">
            {/* Input Box */}
            <div className="inputIcon">
              <input className="inputBox"
                type="text"
                // ref={this.inputRef}
                placeholder={this.props.placeholderText}
                value={this.state.valueOptionSelected.value}
                disabled
                required
              />

              <div className="icon">
                <img src={downArrow} onClick={() => {
                  this.setState({ valueIsOpen: !this.state.valueIsOpen })
                }} />
              </div>
            </div>

            {/* Options */}
            <div className={this.state.valueIsOpen ? "optionContainer" : "optionContainer none"}>
              {this.state.valueOptions.map(item => <Option data={item} name="option_value" handleOptionClick={this.valueHandleOptionClick} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.superAdminReducer.isLoading,
  optionValues: state.superAdminReducer.getOptionsResponse
})

const mapDispatchToProps = dispatch => ({
  getOptionValues: (url) =>
    dispatch(ACTION.getOptions({ url: url }))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddVariant);