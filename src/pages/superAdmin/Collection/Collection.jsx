/* eslint-disable */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import pro1 from '../../../static/superAdmin/Category/c.png';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
import Box2 from '../../../components/superAdmin/Box2/Box2'
import Loading from '../../../components/superAdmin/Loading/Loading';
import './Collection.css';
import Blank from '../../../components/superAdmin/Blank/Blank';
import TexticonProduct from '../../../components/superAdmin/TexttIconProduct/TexticonProduct';
import Dashboardpageind from '../../../components/superAdmin/Dashboardpageind/Dashboardpageind';
import CollectionRect from '../../../components/superAdmin/CollectionRect/CollectionRect';
import SocialTexticon from '../../../components/superAdmin/SocialTexticon/SocialTexticon';
import TextIcon from '../../../components/superAdmin/TextIcon/TextIcon';
import ColTxtIcon from '../../../components/superAdmin/ColTxtIcon/ColTxtIcon';
import Base from '../../../components/superAdmin/Base/Base'

import config from '../../../middleware/config'
import * as ACTION from '../../../middleware/actions/superAdminActions'
import { connect } from 'react-redux'

class Collection extends Component {
    state = {
        collections: [],
        next: null,
        prev: null,
        current: 0,
        count: 0,
        url: config.baseUrl + config.collections,
        searchText: "",
    }

    componentDidMount = () => {
        this.props.getCollections(this.state.url)
    }

    handleUrl = (url) => {
        this.setState({ url: url })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.collections !== this.props.collections) {
            let data = this.props.collections.data
            this.setState({
                collections: data.results,
                next: data.links.next,
                prev: data.links.previous,
                count: data.count,
                current: data.current
            })
        }

        else if (prevState.url !== this.state.url) {
            this.props.getCollections(this.state.url)
        }

        else if (prevState.searchText !== this.state.searchText) {
            this.props.getCollections(this.state.url, this.state.searchText)
        }
    }

    search = (searchText) => {
        this.setState({ searchText: searchText })
    }

    render() {
        const content = (
            <div className="collectionRootContainer">
                {!(this.props.isLoading) ?
                    <div>
                        {/* <div className="p-contentContainer"> */}
                        <div className="headerContainer">
                            <TextIcon text="CATELOG" img={pro1} />
                            <div onClick={() => this.props.history.push('/SuperAdmin/Collection/Create/')}>
                                <Box2 text="Add Collection" />
                            </div>
                        </div>
                        <div className="innerContainer">
                            <CollectionRect
                                history={this.props.history}
                                text="All Collections"
                                search={this.search}
                                collections={this.state.collections}
                                current={this.state.current}
                                placeholder="Collection Name"
                            />
                            <div className="col-pagination">
                                <Dashboardpageind current={this.state.current} handleUrl={this.handleUrl} prev={this.state.prev} next={this.state.next} />
                            </div>
                        </div>
                        {/* </div> */}
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
    collections: state.superAdminReducer.getCollectionResponse
})

const mapDispatchToProps = dispatch => ({
    getCollections: (url, searchText) =>
        dispatch(ACTION.getCollection({ url: url, searchText: searchText }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Collection);