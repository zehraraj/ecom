/* eslint-disable */
import React, { Component } from 'react';
import './AddCollRect.css';
import icon from '../../../static/superAdmin/Category/c1.png';
import Input from '../../superAdmin/Input/Input'
import TableTitle from '../../superAdmin/TableTitle/TableTitle'
import { connect } from 'react-redux';
import * as ACTION from '../../../middleware/actions/superAdminActions'
import ProductPage from '../../../pages/User/ProductPage/ProductPage';
import config from '../../../middleware/config';
import * as validators from '../../../validators'


class AddCollRect extends Component {
    render() {
        return (
            <div className="ssdfsdf">
                <div className="header">
                    <TableTitle text="Collection" image={icon} />
                </div>
                <div className="content">
                    <div className="Inusdfsput">
                        <Input
                            required
                            value={this.props.data.name}
                            error={this.props.nameError}
                            label="NAME"
                            validator={validators.textValidator}
                            placeholderText='Enter Collection Name'
                            name="name"
                            type="text"
                            handleChange={this.props.handleChange}
                        />
                        <Input
                            required
                            value={this.props.data.desc}
                            error={this.props.descError}
                            validator={validators.slugValidator}
                            label="DESCRIPTION"
                            placeholderText='Enter Collection Description'
                            name="desc"
                            type="textArea"
                            handleChange={this.props.handleChange}
                        />
                        <Input
                            required
                            value={this.props.data.imageString}
                            error={this.props.imageError}
                            label="IMAGE"
                            placeholderText='Select Collection Image'
                            name="image"
                            type="file"
                            handleChange={this.props.handleFileChange}
                            removeHandleChange={this.props.handleRemoveFileChange}
                        />
                    </div>
                    <div className="saveDiv">
                        <h3 className="txtsave" onClick={() => this.props.handleSubmit()}>SAVE CHANGES</h3>
                    </div>
                </div>
            </div>
        );
    }
}


export default AddCollRect;