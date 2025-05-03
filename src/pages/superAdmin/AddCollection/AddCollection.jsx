/* eslint-disable */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import pro1 from '../../../static/superAdmin/Category/c.png';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
import Box2 from '../../../components/superAdmin/Box2/Box2'
import Loading from '../../../components/superAdmin/Loading/Loading';
import './AddCollection.css';
import TextIcon from '../../../components/superAdmin/TextIcon/TextIcon';
import AddCollRect from '../../../components/superAdmin/AddCollRect/AddCollRect';
import * as ACTION from '../../../middleware/actions/superAdminActions'
import { connect } from 'react-redux';
import config from '../../../middleware/config'
import Base from '../../../components/superAdmin/Base/Base'

class Collection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            nameError: "",
            desc: "",
            descError: "",
            imageString: "",
            image: null,
            imageError: "",
            update: false,
        }
    }

    componentDidMount = () => {
        if (!isNaN(this.props.match.params.id)) {
            this.props.getCollection(config.baseUrl + config.collections + "/" + this.props.match.params.id)
            this.setState({ update: true })
        }

        document.addEventListener('keypress', (event) => {
            if (event.key === 'Enter')
                this.state.update ?
                    this.props.updateCollection(this.props.match.params.id, this.state.name, this.state.desc, this.state.image) :
                    this.props.addCollection(this.state.name, this.state.desc, this.state.image)
        })
    }

    // componentWillUnmount = () => {
    //     document.removeEventListener('keypress')
    // }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.collection !== this.props.collection) {
            if (this.props.collection.success) {
                let imageString = this.props.collection.data.collection_image.split('/').reverse()[0]
                this.setState({
                    name: this.props.collection.data.collection_name,
                    desc: this.props.collection.data.collection_desc,
                    imageString: imageString,
                })
            }
        }
        else if (prevProps.collectionResponse !== this.props.collectionResponse) {
            if (this.props.collectionResponse.success) {
                this.props.history.push('/SuperAdmin/Collection')
            } else if (this.props.collectionResponse.code === 400) {
                let data = this.props.collectionResponse.data
                this.setState({
                    nameError: data.collection_name ? data.collection_name[0] : "",
                    imageError: data.collection_image ? data.collection_image[0] : "",
                    descError: data.collection_desc ? data.collection_desc[0] : "",
                })
            }
        }
    }

    handleChange = (event, value) => {
        this.setState({ [event.target.name]: value.value, [event.target.name + "Error"]: value.error })
    }

    handleFileChange = (event) => {
        this.setState({ [event.target.name]: event.target.files[0], imageString: event.target.files[0].name, imageError: '' })
    }

    handleRemoveFileChange = (event) => {
        this.setState({ image: null, imageError: 'Must not be empty', imageString: '' })
    }

    handleSubmit = () => {
        if (
            this.state.descError === "" &&
            this.state.imageError === "" &&
            this.state.nameError === ""
        ) {
            this.state.update ?
                this.props.updateCollection(this.props.match.params.id, this.state.name, this.state.desc, this.state.image) :
                this.props.addCollection(this.state.name, this.state.desc, this.state.image)
        }
    }

    render() {
        const content = (
            <div className="rot">
                {!(this.props.isLoading) ?
                    <div>
                        <div className="headerContainer">
                            <TextIcon text="CATELOG" img={pro1} />
                            <div onClick={() => this.props.history.goBack()}>
                                <Box2 text="Back" />
                            </div>
                        </div>
                        <div className="innerContainer">
                            <AddCollRect
                                update={this.state.update}
                                data={{
                                    name: this.state.name,
                                    desc: this.state.desc,
                                    imageString: this.state.imageString,
                                }}
                                nameError={this.state.nameError}
                                descError={this.state.descError}
                                imageError={this.state.imageError}
                                id={this.props.match.params.id}
                                history={this.props.history}
                                handleChange={this.handleChange}
                                handleFileChange={this.handleFileChange}
                                handleSubmit={this.handleSubmit}
                                handleRemoveFileChange={this.handleRemoveFileChange}
                            />
                        </div>
                    </div>
                    : <Loading />}
            </div>
        )
        return (
            <Base content={content} history={this.props.history} />
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.superAdminReducer.isLoading,
    collection: state.superAdminReducer.getCollectionResponse,
    collectionResponse: state.superAdminReducer.collectionResponse,
})

const mapDispatchToProps = dispatch => ({
    getCollection: (url) =>
        dispatch(ACTION.getCollection({ url: url })),

    addCollection: (name, desc, image) =>
        dispatch(ACTION.addCollection({
            collection_name: name,
            collection_desc: desc,
            collection_image: image,
        })),
    updateCollection: (id, name, desc, image) =>
        dispatch(ACTION.updateCollection({
            id: id,
            payload: {
                collection_name: name,
                collection_desc: desc,
                collection_image: image,
            }
        })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Collection);