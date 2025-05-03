/* eslint-disable */
import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import pro4 from '../../../static/superAdmin/product/product1.png';
// import pro2 from '../../../static/superAdmin/rightangle.jpeg';
// import pro3 from '../../../static/superAdmin/leftangle.jpeg';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import TextIcon from '../../../components/superAdmin/TextIcon/TextIcon';
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
// import Rectangle from '../../../components/superAdmin/ProdRect/ProdRect';
import Box2 from '../../../components/superAdmin/Box2/Box2';
import Loading from '../../../components/superAdmin/Loading/Loading';
import { connect } from 'react-redux';
import * as ACTION from '../../../middleware/actions/superAdminActions'
import './Products.css';
// import Pagination from '../../../components/superAdmin/Pagination/Pagination';
// import Blank from '../../../components/superAdmin/Blank/Blank';
// import TexticonProduct from '../../../components/superAdmin/TexttIconProduct/TexticonProduct';
import config from '../../../middleware/config';
import Dashboardpageind from '../../../components/superAdmin/Dashboardpageind/Dashboardpageind';
import ProdRect from '../../../components/superAdmin/ProdRect/ProdRect';
import { NavLink } from 'react-router-dom';
import Base from '../../../components/superAdmin/Base/Base'

// import ProductRow from '../ProductRow/ProductRow';
class Products extends Component {
    state = {
        products: [],
        next: "",
        prev: "",
        count: 0,
        url: config.baseUrl + config.products,
        current: 0,
        searchText: "",
    }
    componentDidMount = () => {
        this.props.getProducts(this.state.url)
    }

    handleUrl = (url) => {
        this.setState({ url: url })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.products !== this.props.products) {
            let data = this.props.products.data
            this.setState({
                products: data.results,
                next: data.links.next,
                prev: data.links.previous,
                count: data.count,
                current: data.current
            })
        }

        else if (prevState.url !== this.state.url) {
            this.props.getProducts(this.state.url)
        }

        else if (prevState.searchText !== this.state.searchText) {
            this.props.getProducts(this.state.url, this.state.searchText)
        }
    }

    search = (text) => {
        this.setState({ searchText: text })
    }

    render() {
        const content = (
            <div className="productRootContainer1">
                {!(this.props.isLoading) ?
                    <div>
                        <div className="headerContainer">
                            <TextIcon text="CATELOG" img={pro4} />
                            <div onClick={() => this.props.history.push('/SuperAdmin/Products/Create')}>
                                <Box2 text="Add Product" />
                            </div>
                        </div>
                        <div className="innerContainer">
                            <ProdRect history={this.props.history} search={this.search} current={this.state.current} products={this.state.products} />
                            <div className="pagination">
                                <Dashboardpageind current={this.state.current} handleUrl={this.handleUrl} next={this.state.next} prev={this.state.prev} />
                            </div>
                        </div>
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
    products: state.superAdminReducer.getProductsResponse,
})

const mapDispatchToProps = dispatch => ({
    getProducts: (url, searchText) =>
        dispatch(ACTION.getProducts({ url: url, searchText: searchText }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)