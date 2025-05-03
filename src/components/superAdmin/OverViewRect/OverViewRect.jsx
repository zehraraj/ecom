/* eslint-disable */
import React, { Component } from 'react';
import './OverViewRect.css';
import OverViewLine from '../OverViewLine/OverViewLine';
import pro from '../../../static/superAdmin/add/add1.png'
import FaviconLine from '../FaviconLine/FaviconLine';
import Input from '../Input/Input';
import TableTitle from '../TableTitle/TableTitle';
import icon from '../../../static/superAdmin/overview.png'
import * as validators from '../../../validators'

class OverViewRect extends Component {
    render() {
        return (
            <div className="OverRect">
                <div className="header">
                    <TableTitle text="Overview" image={icon} />
                </div>
                <div className="content">
                    <div className="Inusdfsput">
                        <Input
                            required
                            label="SITE NAME"
                            type="text"
                            placeholderText='Enter Site Name'
                            name="site_name"
                            value={this.props.data.site_name}
                            handleChange={this.props.handleChange}
                            validator={validators.textValidator}
                            error={this.props.errors.site_name}
                        />
                        <Input
                            label="ADDRESS"
                            type="text"
                            name="site_url"
                            placeholderText='Enter Site Url'
                            value={this.props.data.site_url}
                            handleChange={this.props.handleChange}
                            validator={validators.urlValidator}
                            error={this.props.errors.site_url}
                        />
                        <Input
                            label="FAVICON"
                            placeholderText='Insert Favicon'
                            value={this.props.data.faviconString}
                            name="favicon"
                            handleChange={this.props.fileHandleChange}
                            type="file"
                            error={this.props.errors.favicon}
                        />
                        <Input
                            label="ANALYTICS"
                            type="text"
                            name="google_analytic"
                            placeholderText='Enter Link'
                            value={this.props.data.google_analytic}
                            handleChange={this.props.handleChange}
                            validator={validators.urlValidator}
                            error={this.props.errors.google_analytic}
                        />
                        {this.props.data.carousel.map((item, index) => {
                            return <Input
                                label={"carousel " + (index + 1)}
                                type="file"
                                name="carousel"
                                placeholderText='Select A Picture'
                                value={item.name}
                                args={index}
                                handleChange={this.props.carouselAddHandleChange}
                                removeHandleChange={this.props.carouselRemoveHandleChange}
                                error={item.error}
                            />
                        })}
                        <div className="saveDiv">
                            <h3 className="txtsave" onClick={() => this.props.handleSubmit()}>SAVE CHANGES</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OverViewRect;