/* eslint-disable */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import pro1 from '../../../static/superAdmin/Category/c.png';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
import Box2 from '../../../components/superAdmin/Box2/Box2'
import Loading from '../../../components/superAdmin/Loading/Loading';
import './AddCategories.css';
import Blank from '../../../components/superAdmin/Blank/Blank';
import ColTxtIcon from '../../../components/superAdmin/ColTxtIcon/ColTxtIcon';
import AddCateRect from '../../../components/superAdmin/AddCateRect/AddCateRect';
import TextIcon from '../../../components/superAdmin/TextIcon/TextIcon';
import { connect } from 'react-redux';
import * as ACTION from '../../../middleware/actions/superAdminActions'
import config from '../../../middleware/config';
import Base from '../../../components/superAdmin/Base/Base'


class AddCategories extends Component {
    state = {
        url: config.baseUrl + config.categories,
        update: false,
        name: { error: "", value: "" },
        desc: { error: "", value: "" },
        image: { error: "", value: "" },
        imageString: '',
        optionGroupOptions: [],
        optionGroupOptionsError: "",
        option_group: [],
    }

    componentDidMount = () => {
        if (!isNaN(this.props.match.params.id)) {
            this.props.getCategory(this.state.url + "/" + this.props.match.params.id)
            this.setState({ update: true })
        } else {
            this.props.getOptionGroup(config.baseUrl + config.option_group)
            this.setState({ update: false })
        }

        document.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') this.handleSubmit()
        })
    }

    // componentWillUnmount = () => {
    //     document.removeEventListener('keypress')
    // }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.getCategoriesResponse !== this.props.getCategoriesResponse) {
            if (this.props.getCategoriesResponse.success) {
                let data = this.props.getCategoriesResponse.data
                let imageString = ""
                if (data.category_image)
                    imageString = data.category_image.split('/').reverse()[0]

                this.setState({
                    name: { value: data.category_name, error: "" },
                    desc: { value: data.category_desc, error: "" },
                    imageString: imageString,
                    option_group: data.option_group,
                }, () => {
                    if (this.state.update) this.props.getOptionGroup(config.baseUrl + config.option_group)
                })
            }
        }

        else if (prevProps.categoryResponse !== this.props.categoryResponse) {
            if (this.props.categoryResponse.success) {
                this.props.history.push('/SuperAdmin/Categories/')
            } else if (this.props.categoryResponse.code === 400) {
                let data = this.props.categoryResponse.data
                this.setState({
                    name: { value: this.state.name.value, error: data.category_name ? data.category_name[0] : "" },
                    desc: { value: this.state.desc.value, error: data.category_desc ? data.category_desc[0] : "" },
                    optionGroupOptionsError: data.option_group ? data.option_group[0] : "",
                    image: { value: this.state.image.value, error: data.category_image ? data.category_image[0] : "" },
                })
            }
        }

        else if (prevProps.optionGroupResponse !== this.props.optionGroupResponse) {
            if (this.props.optionGroupResponse.success) {
                let temp = []
                if (this.state.update) {
                    let selectedOptions = this.state.option_group
                    this.props.optionGroupResponse.data.results.map(item =>
                        temp.push({ id: item.id, value: item.option_group_name, active: false })
                    )

                    selectedOptions.map(item => {
                        let object = temp.find((element) => { return element.id === item.id })
                        if (object) {
                            temp[temp.indexOf(object)].active = true
                        }
                    })
                } else {
                    this.props.optionGroupResponse.data.results.map(item => temp.push({ id: item.id, value: item.option_group_name, active: false }))
                }
                this.setState({
                    optionGroupOptions: temp
                })
            }
        }
    }

    handleChange = (event, value) => {
        this.setState({ [event.target.name]: value })
    }

    handleOptionGroupChange = (data, index, active) => {
        let error = ''
        let temp = this.state.optionGroupOptions
        temp[index].active = active
        for (const item of temp) {
            if (item.active === true) {
                error = '';
                break;
            } else error = 'Must not be empty';
        }
        this.setState({ optionGroupOptions: temp, optionGroupOptionsError: error })
    }

    handleFileChange = (event) => {
        this.setState({
            [event.target.name]: { value: event.target.files[0], error: '' },
            imageString: event.target.files[0].name.split('\\').reverse()[0]
        })
    }

    removeHandleChange = (event) => {
        this.setState({
            image: { value: null, error: 'Must Not Be Empty' },
            imageString: ''
        })
    }

    handleSubmit = () => {
        if (this.state.name.value === "" ||
            this.state.desc.value === "" ||
            this.state.imageString === ""
            // this.state.optionGroupOptionsError === ""
        ) {

            this.setState({
                name: { value: this.state.name.value, error: this.state.name.value ? '' : 'Must not be empty' },
                desc: { value: this.state.desc.value, error: this.state.desc.value ? '' : 'Must not be empty' },
                image: { value: this.state.image.value, error: this.state.image.value || this.state.imageString !== "" ? '' : 'Must not be empty' },
                optionGroupOptionsError: (this.state.optionGroupOptions.filter((element) => element.active === true).length > 0) ? '' : 'Must not be empty',
            })
        } else if (
            this.state.name.error === "" &&
            this.state.desc.error === "" &&
            this.state.image.error === "" &&
            this.state.optionGroupOptionsError === ""
        ) {
            // let optionGroup = []
            // this.state.optionGroupSelected.map(item => optionGroup.push(item.id))
            // this.props.addCategory(this.state.Name, this.state.Desc, this.state.Image, optionGroup)
            let optionGroup = []
            this.state.optionGroupOptions.map(item => {
                if (item.active) optionGroup.push(item.id)
            })
            this.state.update ?
                this.props.updateCategory(this.props.match.params.id, this.state.name.value, this.state.desc.value, this.state.image.value, optionGroup) :
                this.props.addCategory(this.state.name.value, this.state.desc.value, this.state.image.value, optionGroup)
        }
    }

    render() {
        const content = (
            <div className="rot">
                {!(this.props.isLoading) ?
                    <div>
                        <div className="headerContainer">
                            <TextIcon text="CATELOG" img={pro1} />
                            <div onClick={() => this.props.history.replace('/SuperAdmin/Categories/')}>
                                <Box2 text="Back" />
                            </div>
                        </div>
                        <div className="innerContainer">
                            <AddCateRect
                                name={this.state.name.value}
                                nameError={this.state.name.error}
                                image={this.state.imageString}
                                imageError={this.state.image.error}
                                desc={this.state.desc.value}
                                descError={this.state.desc.error}
                                optionGroup={this.state.optionGroupOptions}
                                optionGroupError={this.state.optionGroupOptionsError}
                                handleChange={this.handleChange}
                                handleFileChange={this.handleFileChange}
                                handleOptionGroupChange={this.handleOptionGroupChange}
                                handleSubmit={this.handleSubmit}
                                removeHandleChange={this.removeHandleChange}
                                history={this.props.history}
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
    optionGroupResponse: state.superAdminReducer.getOptionGroupsResponse,
    getCategoriesResponse: state.superAdminReducer.getCategoriesResponse,
    categoryResponse: state.superAdminReducer.categoryResponse,
})

const mapDispatchToProps = dispatch => ({
    getOptionGroup: (url) =>
        dispatch(ACTION.getOptionGroup({ url: url })),
    getCategory: (url) =>
        dispatch(ACTION.getCategories({ url: url })),
    addCategory: (name, desc, image, option_group) =>
        dispatch(ACTION.addCategory({
            category_name: name,
            category_desc: desc,
            category_image: image,
            option_group: option_group
        })),
    updateCategory: (id, name, desc, image, option_group) =>
        dispatch(ACTION.updateCategory({
            id: id,
            payload: {
                category_name: name,
                category_desc: desc,
                category_image: image,
                option_group: option_group
            }
        }))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddCategories);