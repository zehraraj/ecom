/* eslint-disable */
import React, { Component } from 'react';
import './BusinessInfoRect.css';
import BusinessInfoLine from '../BusinessInfoLine/BusinessInfoLine';
import pro from '../../../static/superAdmin/add/add1.png'
import FaviconLine from '../FaviconLine/FaviconLine';
import icon from '../../../static/superAdmin/businessinfo.png'
import Input from '../Input/Input';
import TableTitle from '../TableTitle/TableTitle';
import * as validators from '../../../validators'

class BusinessInfoRect extends Component {
    render() {
        return (
            <div className="BI-Rect">
                <div className="header">
                    <TableTitle text="Bussiness Info" image={icon} />
                </div>
                <div className="content">
                    <div className="Inusdfsput">
                        <Input
                            validator={validators.textValidator}
                            label="NAME"
                            type="text"
                            name="name"
                            placeholderText='Enter Business Name'
                            value={this.props.name}
                            handleChange={this.props.handleChange}
                            error={this.props.errors.name}
                        />
                        <Input
                            validator={validators.slugValidator}
                            label="ADDRESS"
                            type="textArea"
                            name="address"
                            placeholderText='Enter Your Business Address'
                            value={this.props.address}
                            handleChange={this.props.handleChange}
                            error={this.props.errors.address}
                        />
                        <Input
                            validator={validators.slugValidator}
                            label="description"
                            type="textArea"
                            name="desc"
                            placeholderText='Enter Your Business Description'
                            value={this.props.desc}
                            handleChange={this.props.handleChange}
                            error={this.props.errors.desc}
                        />
                        <Input
                            validator={validators.emailValidator}
                            label="E-MAIL"
                            type="text"
                            name="email"
                            placeholderText='Enter Your Business E-mail'
                            value={this.props.email}
                            handleChange={this.props.handleChange}
                            error={this.props.errors.email}
                        />
                        <Input
                            label="PHONE"
                            type="text"
                            name="phone"
                            placeholderText='Enter Your Phone Number'
                            value={this.props.phone}
                            validator={validators.numberValidator}
                            handleChange={this.props.handleChange}
                            error={this.props.errors.phone}
                        />
                        <Input
                            label="LOGO"
                            type="file"
                            name="logo"
                            placeholderText='Enter Your Business Logo'
                            value={this.props.logoString}
                            handleChange={this.props.fileHandleChange}
                            error={this.props.errors.logo}
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

export default BusinessInfoRect;