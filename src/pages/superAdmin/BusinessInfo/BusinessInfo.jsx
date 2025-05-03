/* eslint-disable */
import React, { Component } from 'react';
import './BusinessInfo.css';
import { NavLink } from "react-router-dom";
import logo1 from '../../../static/superAdmin/socialmedia/social.png'
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
// import { connect } from 'react-redux'
// import * as ACTION from '../../../middleware/actions/superAdminActions';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import Blank from '../../../components/superAdmin/Blank/Blank';
// import Loading from '../../../components/superAdmin/Loading/Loading';
import Box2 from '../../../components/superAdmin/Box2/Box2';
// import TexticonProduct from '../../../components/superAdmin/TexttIconProduct/TexticonProduct';
import BusinessInfoRect from '../../../components/superAdmin/BusinessInfoRect/BusinessInfoRect';
import BusinessInfoTxtIcon from '../../../components/superAdmin/BusinessInfoTxtIcon/BusinessInfoTxtIcon';
import TextIcon from '../../../components/superAdmin/TextIcon/TextIcon';
import settingsIcon from '../../../static/superAdmin/settings/settings.png';
import * as ACTION from '../../../middleware/actions/superAdminActions'
import { connect } from 'react-redux'
import Base from '../../../components/superAdmin/Base/Base'

class BusinessInfo extends Component {
    state = {
        name: { error: '', value: "" },
        address: { error: '', value: "" },
        desc: { error: '', value: "" },
        email: { error: '', value: "" },
        phone: { error: '', value: "" },
        logo: { error: '', value: null },
        logoString: "",
    }

    componentDidMount = () => {
        this.props.getBusiness()
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.getBusinessResponse !== this.props.getBusinessResponse) {
            if (this.props.getBusinessResponse.success) {
                let data = this.props.getBusinessResponse.data
                let logo = data.business_logo ? data.business_logo.split('/').reverse()[0] : ""
                this.setState({
                    name: { error: '', value: data.business_name },
                    email: { error: '', value: data.business_email },
                    address: { error: '', value: data.business_address },
                    desc: { error: '', value: data.business_desc },
                    phone: { error: '', value: data.business_phone },
                    logo: { error: '', value: null },
                    logoString: logo,
                })
            }
        }

        else if (prevProps.businessResponse !== this.props.businessResponse) {
            if (this.props.businessResponse.success) {
                this.props.history.push("/SuperAdmin/Settings/")
            } else if (this.props.businessResponse.code === 400) {
                let data = this.props.businessResponse.data
                this.setState({
                    name: { value: this.state.name.value, error: data.business_name ? data.business_name[0] : '' },
                    address: { value: this.state.address.value, error: data.business_address ? data.business_address[0] : '' },
                    desc: { value: this.state.desc.value, error: data.business_desc ? data.business_desc[0] : '' },
                    email: { value: this.state.email.value, error: data.business_email ? data.business_email[0] : '' },
                    phone: { value: this.state.phone.value, error: data.business_phone ? data.business_phone[0] : '' },
                    logo: { value: this.state.logo.value, error: data.business_logo ? data.business_logo[0] : '' },
                })
            }
        }
    }

    handleChange = (event, value) => {
        this.setState({ [event.target.name]: value })
    }

    fileHandleChange = (event) => {
        this.setState({
            [event.target.name]: { value: event.target.files[0], error: '' },
            logoString: event.target.value,
        })
    }

    handleSubmit = () => {
        if (
            this.state.name.error === '' &&
            this.state.address.error === '' &&
            this.state.desc.error === '' &&
            this.state.email.error === '' &&
            this.state.logo.error === '' &&
            this.state.phone.error === ''
        )
            this.props.updateBusiness(
                this.state.name.value,
                this.state.address.value,
                this.state.desc.value,
                this.state.email.value,
                this.state.phone.value,
                this.state.logo.value,
            )
    }

    render() {
        const content = (
            <div className="BI-flex-container">
                <div>
                    <div className="BI-headerContainer">
                        <TextIcon text="Settings" img={settingsIcon} />
                        <NavLink className="nav" to="/SuperAdmin/Settings/"><Box2 text="Back" /></NavLink>
                    </div>
                    <div className="BI-innerContainer">
                        <BusinessInfoRect
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            fileHandleChange={this.fileHandleChange}
                            name={this.state.name.value}
                            address={this.state.address.value}
                            desc={this.state.desc.value}
                            email={this.state.email.value}
                            phone={this.state.phone.value}
                            logo={this.state.logo}
                            logoString={this.state.logoString}
                            errors={{
                                name: this.state.name.error,
                                address: this.state.address.error,
                                desc: this.state.desc.error,
                                email: this.state.email.error,
                                phone: this.state.phone.error,
                                logo: this.state.logo.error,
                            }}
                        />
                    </div>
                </div>
            </div>
        )
        return (
            <Base content={content} history={this.props.history} />
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.superAdminReducer.isLoading,
    getBusinessResponse: state.superAdminReducer.getBusinessResponse,
    businessResponse: state.superAdminReducer.businessResponse,
})

const mapDispatchToProps = dispatch => ({
    getBusiness: () =>
        dispatch(ACTION.getBusiness()),
    updateBusiness: (name, address, desc, email, phone, logo) =>
        dispatch(ACTION.updateBusiness({
            business_name: name,
            business_address: address,
            business_desc: desc,
            business_address: address,
            business_email: email,
            business_phone: phone,
            business_logo: logo,
        }))
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessInfo);