/* eslint-disable */
import React, { Component } from "react";
import "./AddCateRect.css";
import AddCateLine from "../AddCollLine/AddCollLine";
import icon from "../../../static/superAdmin/Category/c1.png";
import TableTitle from "../TableTitle/TableTitle";
import Input from "../Input/Input";
import { connect } from 'react-redux';
import * as ACTION from '../../../middleware/actions/superAdminActions'
import Loading from '../Loading/Loading';
import * as validators from '../../../validators'

class AddCateRect extends Component {
  render() {
    return (
      <div className="ssdfsdf">
        <div className="header">
          <TableTitle text="Categories" image={icon} />
        </div>
        <div className="content">
          <div className="Inusdfsput">
            <Input
              required
              label="NAME"
              placeholderText='Enter Category Name'
              name="name"
              type="text"
              value={this.props.name}
              handleChange={this.props.handleChange}
              validator={validators.textValidator}
              error={this.props.nameError}
            />
            <Input
              required
              label="DESCRIPTION"
              placeholderText='Enter Category Description'
              name="desc"
              type="textArea"
              value={this.props.desc}
              validator={validators.slugValidator}
              error={this.props.descError}
              handleChange={this.props.handleChange}
            />

            <Input
              required
              label="IMAGE"
              placeholderText='Select Category Image'
              name="image"
              type="file"
              value={this.props.image}
              error={this.props.imageError}
              handleChange={this.props.handleFileChange}
              removeHandleChange={this.props.removeHandleChange}
            />
            <Input
              label="Option Group"
              type="checkbox"
              required
              checkboxOptions={this.props.optionGroup}
              error={this.props.optionGroupError}
              handleChange={this.props.handleOptionGroupChange}
            />
          </div>
          <div className="saveDiv" onClick={() => this.props.handleSubmit()}>
            <h3 className="txtsave">SAVE CHANGES</h3>
          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.superAdminReducer.isLoading,
  categoryResponse: state.superAdminReducer.addCategoryResponse,
});

const mapDispatchToProps = (dispatch) => ({
  addCategory: (name, desc, image, option_group) =>
    dispatch(
      ACTION.addCategory({
        category_name: name,
        category_desc: desc,
        category_image: image,
        option_group: option_group,
      })
    ),
  getOptionGroup: () => dispatch(ACTION.getOptionGroup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCateRect);
