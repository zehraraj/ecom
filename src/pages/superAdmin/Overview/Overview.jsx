/* eslint-disable */
import React, { Component } from 'react';
import './Overview.css';
import { NavLink } from "react-router-dom";
// import { render } from 'react-dom';
import logo1 from '../../../static/superAdmin/dashboard/bb.png'
import overview from '../../../static/superAdmin/overview.png'
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
// import { connect } from 'react-redux'
// import * as ACTION from '../../../middleware/actions/superAdminActions';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
// import SocialTexticon from '../../../components/superAdmin/SocialTexticon/SocialTexticon';
import Blank from '../../../components/superAdmin/Blank/Blank';
// import Loading from '../../../components/superAdmin/Loading/Loading';
import Box2 from '../../../components/superAdmin/Box2/Box2';
import TexticonProduct from '../../../components/superAdmin/TexttIconProduct/TexticonProduct';
import OverViewRect from '../../../components/superAdmin/OverViewRect/OverViewRect';
import TextIcon from '../../../components/superAdmin/TextIcon/TextIcon';
import { connect } from 'react-redux';
import * as ACTION from '../../../middleware/actions/superAdminActions'
import settingsIcon from '../../../static/superAdmin/settings/settings.png';
import * as validators from '../../../validators'
import Base from '../../../components/superAdmin/Base/Base'

class Overview extends Component {
    state = {
        site_name: { error: '', value: "" },
        site_url: { error: '', value: "" },
        favicon: { error: "", value: "" },
        google_analytic: { error: '', value: "" },
        faviconString: "",
        carousel: [
            { id: 0, name: "", file: null, error: '' },
        ],
        defaultCarousel: { id: 0, name: "", file: null },
        carouselDone: 0,
        carouselId: []
    }

    carouselAddHandleChange = (event, index) => {
        let carousel = this.state.carousel
        carousel[index] = { id: 0, name: event.target.value.substr(12), file: event.target.files[0] }
        if (this.state.carousel[this.state.carousel.length - 1].file) carousel.push(this.state.defaultCarousel)
        this.setState({
            carousel: carousel
        })
    }

    carouselRemoveHandleChange = (event, index) => {
        let carousel = this.state.carousel
        carousel.splice(index, 1)
        this.setState({
            carousel: carousel
        })
    }

    fileHandleChange = (event) => {
        this.setState({
            faviconString: event.target.value.substr(12),
            [event.target.name]: { value: event.target.files[0], error: '' }
        })
    }

    componentDidMount = () => {
        this.props.getOverview()
        // this.props.getCarousel()
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.getOverviewResponse !== this.props.getOverviewResponse) {
            if (this.props.getOverviewResponse.success) {
                let data = this.props.getOverviewResponse.data;
                let carousel = data.carousel.map(item => {
                    return {
                        id: item.id,
                        file: item.image,
                        name: item.image ? item.image.split('/').reverse()[0] : '',
                        error: ''
                    }
                })
                carousel.push(this.state.defaultCarousel)
                this.setState({
                    site_name: data.site_name ? { error: '', value: data.site_name } : { error: '', value: "" },
                    site_url: data.site_address ? { error: '', value: data.site_address } : { error: '', value: "" },
                    favicon: { value: null, error: '' },
                    faviconString: data.fav_icon ? data.fav_icon.split('/').reverse()[0] : "",
                    google_analytic: data.google_analytic ? { error: '', value: data.google_analytic } : { error: '', value: "" },
                    carousel: carousel,
                })
            } else if (this.props.getOverviewResponse.code === 404) {
                // this.setState({
                //     site_name: { error: '', value: "" },
                //     site_url: { error: '', value: "" },
                //     favicon: { value: null, error: '' },
                //     faviconString: "",
                //     google_analytic: { error: '', value: "" },
                // })
                console.log('error in overview')
            }
        }

        else if (prevProps.getCarouselResponse !== this.props.getCarouselResponse) {
            if (this.props.getCarouselResponse.success) {
                let temp = []
                let temp2 = []
                this.props.getCarouselResponse.data.map((item, index) => {
                    temp.push({
                        id: item.id,
                        name: item.image ? item.image.split('/').reverse()[0] : '',
                        file: item.image,
                        error: ''
                    })
                    temp2.push(item.id)
                })
                temp.push({
                    id: 0,
                    name: '',
                    file: null,
                    error: ''
                })
                this.setState({ carousel: temp, carouselId: temp2 })
            }
        }

        else if (prevProps.overviewResponse !== this.props.overviewResponse) {
            if (this.props.overviewResponse.success) {
                this.props.history.push('/SuperAdmin/Settings/')
            } else if (this.props.overviewResponse.code === 400) {
                this.setState({
                    site_name: this.props.overviewResponse.data.site_name ? { value: this.state.site_name.value, error: this.props.overviewResponse.data.site_name[0] } : '',
                    site_url: this.props.overviewResponse.data.site_address ? { value: this.state.site_url.value, error: this.props.overviewResponse.data.site_address[0] } : '',
                    google_analytic: this.props.overviewResponse.data.google_analytic ? { value: this.state.google_analytic.value, error: this.props.overviewResponse.data.google_analytic[0] } : '',
                    favicon: this.props.overviewResponse.data.fav_icon ? { value: this.state.favicon.value, error: this.props.overviewResponse.data.fav_icon[0] } : '',
                    carousel: this.props.overviewResponse.data.carousel
                })
            }
        }

        else if (prevState.carouselDone !== this.state.carouselDone) {
            console.log('in carousel done')
            console.log(this.state.carouselDone)
            console.log(this.state.carousel.length - 1)
            console.log(this.state.carouselId)
            // let carouselId = []
            // this.state.carousel.map(item => {
            // carouselId.push(this.props.ca)
            // })
            console.log(this.state.carouselDone === (this.state.carousel.length - 1))
            if (this.state.carouselDone === (this.state.carousel.length - 1))
                this.props.updateOverview(
                    this.state.site_name.value,
                    this.state.site_url.value,
                    this.state.favicon.value,
                    this.state.google_analytic.value,
                    this.state.carouselId,
                )
        }

        else if (prevProps.carouselResponse !== this.props.carouselResponse) {
            if (this.props.carouselResponse.success) {
                let carouselId = this.state.carouselId
                console.log('carouselResopnse')
                carouselId.push(this.props.carouselResponse.data.id)
                this.setState({
                    carouselDone: this.state.carouselDone + 1,
                    carouselId: carouselId,
                })
            } else if (this.props.carouselResponse.code === 400) {
                alert('bad request')
            }
        }
    }

    handleChange = (e, value) => {
        this.setState({ [e.target.name]: value })
    }

    handleSubmit = (e) => {
        if (
            this.state.site_name.error === '' &&
            this.state.site_url.error === '' &&
            this.state.google_analytic.error === '' &&
            this.state.favicon.error === ''
        ) {
            let carousel = [...this.state.carousel]
            let carouselId = this.state.carouselId
            carousel.pop()
            console.log(carousel)
            // console.log(this.state.carousel)
            let carouselDone = this.state.carouselDone
            carousel.map(item => {
                if (typeof item.file === 'string') {
                    carouselId.push(item.id)
                    carouselDone++
                }
                else {
                    this.props.addCarousel(item.file)
                }
                this.setState({ carouselDone: carouselDone, carouselId: carouselId })
            })
        } else {
            console.log('error')
            console.log(this.state.site_name.error === '')
            console.log(this.state.site_url.error)
            console.log(this.state.google_analytic.error)
            console.log(this.state.favicon.error === '')
        }
    }

    render() {
        const content = (
            <React.Fragment>
                {!this.props.isLoading ?
                    <div className="OV-flex-container">
                        <div className="OV-contentContainer">
                            <div className="OV-headerContainer">
                                <TextIcon text="Settings" img={settingsIcon} />
                                <div onClick={() => this.props.history.push("/SuperAdmin/Settings/")}><Box2 text="Back" /></div>
                            </div>
                            <div className="OV-innerContainer">
                                <OverViewRect
                                    text="Social Media Accounts"
                                    handleChange={this.handleChange}
                                    handleSubmit={this.handleSubmit}
                                    carouselAddHandleChange={this.carouselAddHandleChange}
                                    carouselRemoveHandleChange={this.carouselRemoveHandleChange}
                                    fileHandleChange={this.fileHandleChange}
                                    data={{
                                        site_name: this.state.site_name.value,
                                        site_url: this.state.site_url.value,
                                        favicon: this.state.favicon.value,
                                        google_analytic: this.state.google_analytic.value,
                                        faviconString: this.state.faviconString,
                                        carousel: this.state.carousel,
                                    }}
                                    errors={{
                                        site_name: this.state.site_name.error,
                                        site_url: this.state.site_url.error,
                                        google_analytic: this.state.google_analytic.error,
                                        favicon: this.state.favicon.error,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    : "Loading"}
            </React.Fragment>
        )

        return (
            <Base content={content} history={this.props.history} />
        );
    }
}

const mapStateToProps = state => ({
    getOverviewResponse: state.superAdminReducer.getOverviewResponse,
    overviewResponse: state.superAdminReducer.overviewResponse,
    getCarouselResponse: state.superAdminReducer.getCarouselResponse,
    carouselResponse: state.superAdminReducer.carouselResponse,
})

const mapDispatchToProps = dispatch => ({
    getOverview: () =>
        dispatch(ACTION.getOverview()),
    updateOverview: (name, url, favicon, analytic, carousel) =>
        dispatch(ACTION.updateOverview({
            site_name: name,
            site_url: url,
            fav_icon: favicon,
            google_analytic: analytic,
            carousel: carousel
        })),
    addCarousel: (image) =>
        dispatch(ACTION.addCarousel({ image: image })),
    getCarousel: () =>
        dispatch(ACTION.getCarousel())
})

export default connect(mapStateToProps, mapDispatchToProps)(Overview);