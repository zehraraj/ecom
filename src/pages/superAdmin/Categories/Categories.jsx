/* eslint-disable */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CatReact from "../../../components/superAdmin/CatRect/CatRect";
import CatReact2 from "../../../components/superAdmin/CatRect2/CatRect2";
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
import pro1 from '../../../static/superAdmin/Category/c.png';
import Loading from '../../../components/superAdmin/Loading/Loading';
import Box2 from '../../../components/superAdmin/Box2/Box2';
import Dashboardpageind from '../../../components/superAdmin/Dashboardpageind/Dashboardpageind';
import Blank from '../../../components/superAdmin/Blank/Blank';
import './Categories.css';
import TextIcon from '../../../components/superAdmin/TextIcon/TextIcon'
import Base from '../../../components/superAdmin/Base/Base'

import * as ACTION from '../../../middleware/actions/superAdminActions'
import { connect } from 'react-redux';
import config from '../../../middleware/config'

class Categories extends Component {
    state = {
        categories: [],
        next: null,
        prev: null,
        current: 0,
        count: 0,
        url: config.baseUrl + config.categories,
    }

    componentDidMount = () => {
        this.props.getCategories(this.state.url)
    }

    handleUrl = (url) => {
        this.setState({ url: url })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.categories !== this.props.categories) {
            let data = this.props.categories.data
            this.setState({
                categories: data.results,
                next: data.links.next,
                prev: data.links.previous,
                count: data.count,
                current: data.current
            })
        }

        else if (prevState.url !== this.state.url) {
            this.props.getCategories(this.state.url)
        }
    }

    search = (searchText) => {
        this.setState({ url: this.state.url + '?search=' + searchText })
    }

    render() {
        const content = (
            <div className="categoryRootContainer">
                {!(this.props.isLoading) ?
                    <div>
                        {/* <div className="contentContainer"> */}
                        <div className="headerContainer">
                            <TextIcon text="CATELOG" img={pro1} />
                            <div onClick={() => this.props.history.push('/SuperAdmin/Categories/Add/')}>
                                <Box2 text="Add Categories" />
                            </div>
                        </div>
                        <div className="innerContainer">
                            <CatReact2
                                history={this.props.history}
                                text="Categories"
                                categories={this.state.categories}
                                current={this.state.current}
                                search={this.search}
                                placeholder="Name"
                            />
                            <div className="pagination">
                                <Dashboardpageind current={this.state.current} handleUrl={this.handleUrl} prev={this.state.prev} next={this.state.next} />
                            </div>
                        </div>
                        {/* // </div> */}
                    </div>
                    : <Loading />}
            </div>
        )
        return (
            <Base history={this.props.history} content={content} />
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.superAdminReducer.isLoading,
    categories: state.superAdminReducer.getCategoriesResponse
})

const mapDispatchToProps = dispatch => ({
    getCategories: (url, searchText) =>
        dispatch(ACTION.getCategories({ url: url }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);