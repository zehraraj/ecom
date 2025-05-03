/* eslint-disable */
import React, { Component } from 'react';
import './Socialrect.css';
import Input from '../Input/Input';
import TableTitle from '../TableTitle/TableTitle';
import icon from '../../../static/superAdmin/socialmedia/social.png'
import * as validator from '../../../validators'

class Socialrect extends Component {
    render() {
        return (
            <div className="s-rect">
                <div className="header">
                    <TableTitle text="Social Media" image={icon} />
                </div>
                <div className="content">
                    <div className="Inusdfsput">
                        <Input error={this.props.errors.facebook} validator={validator.urlValidator} label="FACEBOOK" placeholderText="Enter Facebook Url" value={this.props.data.facebook} handleChange={this.props.handleChange} name="facebook" />
                        <Input error={this.props.errors.instagram} validator={validator.urlValidator} label="INSTAGRAM" placeholderText="Enter Instagram Url" value={this.props.data.instagram} handleChange={this.props.handleChange} name="instagram" />
                        <Input error={this.props.errors.tweeter} validator={validator.urlValidator} label="TWITTER" placeholderText="Enter Tweeter Url" value={this.props.data.tweeter} handleChange={this.props.handleChange} name="tweeter" />
                        <Input error={this.props.errors.linkedin} validator={validator.urlValidator} label="LINKEDIN" placeholderText="Enter linkedin Url" value={this.props.data.linkedin} handleChange={this.props.handleChange} name="linkedin" />
                        <Input error={this.props.errors.pintrest} validator={validator.urlValidator} label="PINTREST" placeholderText="Enter Pinterest Url" value={this.props.data.pintrest} handleChange={this.props.handleChange} name="pintrest" />
                    </div>
                    <div className="saveDiv">
                        <h3 className="txtsave" onClick={() => this.props.handleSubmit()}>SAVE CHANGES</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Socialrect;