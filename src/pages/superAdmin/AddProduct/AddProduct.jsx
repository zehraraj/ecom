/* eslint-disable */
import React, { Component } from 'react';
// import { render } from 'react-dom';
import './AddProduct.css';
import TextIcon from '../../../components/superAdmin/TextIcon/TextIcon';
import pro1 from '../../../static/superAdmin/product/product.png'
import pro2 from '../../../static/superAdmin/product/Product3.png'
import Icon from '../../../static/superAdmin/product/product1.png';
import disableAdd from '../../../static/superAdmin/add/disableAdd.png'
import Sidenav from '../../../components/superAdmin/SideNav/SideNav';
import Loading from '../../../components/superAdmin/Loading/Loading';
import Box2 from '../../../components/superAdmin/Box2/Box2';
import { NavLink } from 'react-router-dom';
import AddProductRect from '../../../components/superAdmin/AddProductRect/AddProductRect'
import downArrow from '../../../static/superAdmin/downArrow.png'
import VariantOption from './VariantOption/VariantOption'
import TableTitle from '../../../components/superAdmin/TableTitle/TableTitle'
import Dropdown from '../../../components/superAdmin/Dropdown/Dropdown'
import Input from '../../../components/superAdmin/Input/Input'
import pro from '../../../static/superAdmin/add/add1.png'
import remove from '../../../static/superAdmin/add/remove.png'
import { connect } from 'react-redux';
import config from '../../../middleware/config'
import * as ACTION from '../../../middleware/actions/superAdminActions';
import Navbar from '../../../components/superAdmin/Navbar/Navbar';
import * as validators from '../../../validators'
import Base from '../../../components/superAdmin/Base/Base'

class AddProduct extends Component {
    state = {
        done: false,
        categoryIsLoading: true,
        productQuestionIsLoading: true,
        collectionIsLoading: true,
        salesIsLoading: true,
        addVariant: false,
        variantIndex: 0,
        product: null,
        variantsDone: 0,
        url: config.baseUrl + config.products,
        update: false,
        postProductIsLoading: false,
        postVariantIsLoading: false,
        addQuestions: false,

        // Add Product
        categoryOptions: [],
        collectionOptions: [],
        salesOptions: [],

        category: { id: 0, value: "", error: "" },
        collection: { id: 0, value: "", error: "" },
        sale: { id: 0, value: "", error: "" },
        name: { value: "", error: "" },
        price: { value: "", error: "" },
        desc: { value: "", error: "" },
        weight: { value: "", error: "" },

        variants: [
            {
                id: 0,
                name: { value: "", error: false },
                inventory: { value: "", error: false },
                sku: { value: "", error: false },
                price: { value: "", error: false },
                variantOptions: [
                    {
                        option_group: {},
                        option_value: {}
                    },
                ],
                images_updated: false,
                images: [],
                updated: false,
            },
        ],

        // Add Variant
        optionGroupOptions: [],
        variantOptions: [{}],
        variantSave: false,
        variantError: '',
        addImages: false,


        // Add questions
        productQuestions: [
            {
                question: {
                    value: "",
                    error: ""
                },
                answer: {
                    value: "",
                    error: ""
                },
            },
            {
                question: {
                    value: "",
                    error: ""
                },
                answer: {
                    value: "",
                    error: ""
                },
            },
            {
                question: {
                    value: "",
                    error: ""
                },
                answer: {
                    value: "",
                    error: ""
                },
            },
            {
                question: {
                    value: "",
                    error: ""
                },
                answer: {
                    value: "",
                    error: ""
                },
            },
        ],
    };

    variantHandleChange = (event, value) => {
        let temp = this.state.variants
        temp[this.state.variantIndex][event.target.name] = value
        this.setState({ variants: temp })
    }

    handleChange = (event, value) => {
        // this.setState({ [event.target.name]: event.target.value })
        this.setState({ [event.target.name]: value })

    }

    addVariantOption = () => {
        let temp = this.state.variants
        temp[this.state.variantIndex].variantOptions.push({
            option_group: {},
            option_value: {}
        })
        this.setState({ variants: temp })
    }

    removeVariantOption = () => {
        let temp = this.state.variants
        temp[this.state.variantIndex].variantOptions.pop()
        this.setState({ variants: temp })
    }

    removeVariant = (variantIndex) => {
        let temp = this.state.variants
        temp.splice(variantIndex, 1)
        this.setState({ variants: temp })
    }

    handleDropdownChange = (name, data) => {
        if (name === 'category') {
            if (data.id === 0) {
                this.setState({
                    variants: [
                        {
                            id: 0,
                            name: { value: "", error: false },
                            inventory: { value: "", error: false },
                            sku: { value: "", error: false },
                            price: { value: "", error: false },
                            variantOptions: [
                                {
                                    option_group: {},
                                    option_value: {}
                                },
                            ],
                            images_updated: false,
                            updated: false
                        },
                    ],
                })
            } else {
                let temp = data.option_group.map(item => { return { id: item.id, value: item.option_group_name } })
                this.setState({ optionGroupOptions: temp })
            }
        }
        this.setState({ [name]: data })
    }

    handleVariantOptionDropdownChange = (variantOptionIndex, name, value) => {
        let temp = this.state.variants
        temp[this.state.variantIndex].variantOptions[variantOptionIndex][name] = value
        this.setState({ variants: temp })
    }

    handleSubmit = () => {
        if (
            this.state.category.value === "" ||
            this.state.name.value === "" ||
            this.state.price.value === "" ||
            this.state.desc.value === "" ||
            this.state.weight.value === "" ||
            this.state.variants.length === 1 || this.state.variantError !== ''
        ) {
            this.setState({
                category: this.state.category.value ? this.state.category : { id: 0, value: "", error: "Must not be empty" },
                name: this.state.name.value ? this.state.name : { value: "", error: "Must not be empty" },
                price: this.state.price.value ? this.state.price : { value: "", error: "Must not be empty" },
                desc: this.state.desc.value ? this.state.desc : { value: "", error: "Must not be empty" },
                weight: this.state.weight.value ? this.state.weight : { value: "", error: "Must not be empty" },
                variantError: this.state.variants.length > 1 ? '' : 'Must not be empty'
            })
        } else {
            if (
                this.state.name.error === '' &&
                this.state.price.error === '' &&
                this.state.desc.error === '' &&
                this.state.weight.error === ''
            ) {
                if (this.state.update) {
                    this.props.updateProduct(
                        this.props.match.params.id,
                        this.state.category.id ? this.state.category.id : null,
                        this.state.collection.id ? this.state.collection.id : null,
                        this.state.name.value,
                        this.state.price.value,
                        this.state.desc.value,
                        this.state.weight.value,
                        this.state.sale.id ? this.state.sale.id : null,
                    )
                } else {
                    this.props.addProduct(
                        this.state.category.id ? this.state.category.id : null,
                        this.state.collection.id ? this.state.collection.id : null,
                        this.state.name.value,
                        this.state.price.value,
                        this.state.desc.value,
                        this.state.weight.value,
                        this.state.sale.id ? this.state.sale.id : null,
                    )
                }
            }
        }
    }

    addVariantInput = (temp) => {
        temp.push({
            id: 0,
            name: "",
            inventory: "",
            sku: "",
            price: "",
            variantOptions: [
                {
                    option_group: {},
                    option_value: {}
                },
            ],
            images: [],
            images_updated: false,
            updated: false,
        })
        return temp
    }

    imageHandleSubmit = () => {
        this.setState({ addImages: false })
    }

    variantHandleSubmit = () => {
        let data = this.state.variants[this.state.variantIndex];

        if (data.name.value === '' || data.sku.value === '' || data.inventory.value === '' || data.price.value === '') {
            let newState = data
            newState.name = newState.name.value === '' ? { value: data.name.value, error: 'Must Not be empty' } : ''
            newState.sku = newState.sku.value === '' ? { value: data.sku.value, error: 'Must Not be empty' } : ''
            newState.inventory = newState.inventory.value === '' ? { value: data.inventory.value, error: 'Must Not be empty' } : ''
            newState.price = newState.price.value === '' ? { value: data.price.value, error: 'Must Not be empty' } : ''
            let variants = [...this.state.variants]
            variants[this.state.variantIndex] = newState
            this.setState({
                variants: variants
            })
        } else if (!(data.name.error || data.sku.error || data.inventory.error || data.price.error)) {
            let temp = this.state.variants
            temp[this.state.variantIndex].updated = true

            if (temp.length - 1 === this.state.variantIndex)
                this.addVariantInput(temp)
            this.setState({ variants: temp, addVariant: false })
        }
    }

    questionHandleSubmit = () => {
        let data = this.state.productQuestions
        let isError = false
        data.map((item, index) => {
            if (item.question.value === '') {
                data[index].question.error = "Must Not be empty"
                isError = true
            }
            if (item.answer.value === '') {
                data[index].answer.error = "Must Not be empty"
                isError = true
            }
        })
        if (isError) {
            this.setState({ productQuestions: data })
        } else {
            this.setState({ addQuestions: false })
        }
    }

    componentDidMount = () => {
        // console.log('parent mount')
        switch (isNaN(this.props.match.params.id)) {
            case true:
                this.setState({ update: false })
                this.props.getCategories();
                this.props.getCollections();
                this.props.getSales();
                break
            case false:
                this.setState({ update: true })
                this.props.getProducts(this.state.url + `/${this.props.match.params.id}`)
                this.props.getVariants(config.baseUrl + config.variants + `?parent_product=${this.props.match.params.id}`)
                this.props.getCategories()
                this.props.getCollections()
                this.props.getSales()
                this.props.getProductQuestion(this.props.match.params.id)
                break
            default:
            // console.log('default')
        }

        document.addEventListener('keypress', (event) => {
            if (event.key === 'Enter')
                this.handleSubmit()
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.categories !== prevProps.categories) {
            if (this.props.categories.success) {
                let arr = []
                this.props.categories.data.results.map(item => {
                    arr.push({ id: item.id, value: item.category_name, option_group: item.option_group, error: '' })
                })
                this.setState({ categoryOptions: arr }, () => this.setState({
                    categoryIsLoading: false
                }))
            }
        }

        else if (this.props.getProductQuestionResponse !== prevProps.getProductQuestionResponse) {
            if (this.props.getProductQuestionResponse.success) {
                let arr = this.props.getProductQuestionResponse.data.map(item => {
                    return { question: { value: item.question, error: '' }, answer: { value: item.answer, error: '' } }
                })

                if (arr.length > 0)
                    this.setState({ productQuestions: arr, productQuestionIsLoading: false })
                else
                    this.setState({ productQuestionIsLoading: false })
            }
        }

        else if (this.props.product !== prevProps.product) {
            if (this.props.product.success) {
                let data = this.props.product.data
                this.setState({
                    category: { id: data.category.id, value: data.category.category_name, error: '' },
                    collection: { id: data.collection.id, value: data.collection.collection_name, error: '' },
                    name: { value: data.product_name, error: '' },
                    desc: { value: data.product_desc, error: '' },
                    price: { value: data.product_price, error: '' },
                    weight: { value: data.product_weight, error: '' },
                    optionGroupOptions: data.category.option_group.map(item => {
                        return { id: item.id, value: item.option_group_name }
                    }),
                    sale: data.product_sale ? { id: data.product_sale.id, value: data.product_sale.name, error: '' } : { id: 0, value: '', error: '' }
                })
            }
        }

        else if (this.props.variants !== prevProps.variants) {
            if (this.props.variants.success) {

                let temp = this.props.variants.data.results.map(item => {
                    let images = item.images.map((item) => {
                        return {
                            id: item.id,
                            url: item.url,
                            name: item.url,
                            file: null,
                            deleted: item.deleted
                        }
                    })
                    let variantOptions = item.option_combination.map(item => {
                        return {
                            option_group: { id: item.option_group.id, value: item.option_group.option_group_name },
                            option_value: { id: item.id, value: item.option_name }
                        }
                    })

                    variantOptions.push({
                        option_group: {},
                        option_value: {}
                    })

                    return {
                        id: item.id,
                        name: { value: item.product_option_name, error: false },
                        inventory: { value: item.product_option_inventory, error: false },
                        sku: { value: item.product_option_sku, error: false },
                        price: { value: item.product_option_price, error: false },
                        variantOptions: variantOptions,
                        images: images,
                    }
                })

                this.addVariantInput(temp)

                this.setState({ variants: temp })
            }
        }

        else if (this.props.collections !== prevProps.collections) {
            if (this.props.collections.success) {
                let arr = []
                this.props.collections.data.results.map(item => arr.push({ id: item.id, value: item.collection_name, error: '' }))
                this.setState({ collectionOptions: arr, collectionIsLoading: false })
            }
        }

        else if (this.props.sales !== prevProps.sales) {
            if (this.props.sales.success) {
                let arr = []
                this.props.sales.data.results.map(item => arr.push({ id: item.id, value: item.name, error: '' }))
                this.setState({ salesOptions: arr, salesIsLoading: false })
            }
        }

        else if (this.state.variantsDone !== prevState.variantsDone) {
            this.setState({
                postVariantIsLoading: false
            })
            this.props.history.push('/SuperAdmin/Products')
        }

        else if (this.props.variantsResponse !== prevProps.variantsResponse) {
            if (this.props.variantsResponse.success) {
                this.setState({ variantsDone: this.state.variantsDone + 1 })
            }
        }

        else if (this.props.productResponse !== prevProps.productResponse && this.state.done === false) {
            if (this.props.productResponse.success) {
                this.setState({
                    product: this.props.productResponse.data,
                    noOfVariants: this.state.variants.length - 1,
                    variantsDone: 0,
                    postProductIsLoading: false,
                    postVariantIsLoading: true,
                    done: true,
                }, () => {
                    let variants_updated = 0
                    let variants = [...this.state.variants]
                    variants.pop()
                    variants.map((item, index) => {
                        // if (item.updated) {
                        //     variants_updated++;
                        let variantOptions = item.variantOptions
                        variantOptions.pop()
                        let option_combination = (variantOptions.map(item => item.option_value.id))
                        item.id ?
                            this.props.updateVariant(item.id, this.state.product.id, item.name.value, item.sku.value, item.inventory.value, item.price.value, option_combination) :
                            this.props.addVariant(this.state.product.id, item.name.value, item.sku.value, item.inventory.value, item.price.value, option_combination)

                        item.images.map(_item => {
                            if (_item.action) {
                                let form = new FormData();
                                form.append('images', _item.file)
                                form.append('product', item.id)

                                if (_item.action === 'create') this.props.postProductImage(form)
                                else if (_item.action === 'update') this.props.updateProductImage(_item.id, form)
                                else if (_item.action === 'delete') this.props.deleteProductImage(_item.id)
                            }
                        })
                        // }
                    })

                    let cleanQuestionsData = this.state.productQuestions.map(item => {
                        return {
                            "question": item.question.value,
                            "answer": item.answer.value
                        }
                    })
                    this.props.updateQuestions(this.state.product.id, cleanQuestionsData)
                    // if (variants_updated === 0) {
                    //     this.setState({ postVariantIsLoading: false })
                    // }
                })
            }
        }
    }

    questionHandleChange = (event, index) => {
        let temp = this.state.productQuestions
        temp[index][event.target.name].value = event.target.value
        this.setState({ productQuestions: temp })
    }

    render() {
        const AddProduct = (
            <div className="input">
                <Dropdown
                    label="CATEGORY"
                    defaultValue="Select A Category"
                    options={this.state.categoryOptions}
                    value={this.state.category}
                    error={this.state.category.error}
                    name="category"
                    handleChange={this.handleDropdownChange}
                    required
                />
                <Dropdown
                    label="COLLECTION"
                    defaultValue="Select A Collection"
                    options={this.state.collectionOptions}
                    value={this.state.collection}
                    error={this.state.collection.error}
                    name="collection"
                    handleChange={this.handleDropdownChange}
                />
                <Input
                    label="NAME"
                    placeholderText="Enter Product Name"
                    type="text"
                    name="name"
                    value={this.state.name.value}
                    handleChange={this.handleChange}
                    validator={validators.textValidator}
                    error={this.state.name.error}
                    required
                />
                <Input
                    label="PRICE"
                    placeholderText="Enter Product Price"
                    type="text"
                    name="price"
                    value={this.state.price.value}
                    handleChange={this.handleChange}
                    validator={validators.numberValidator}
                    error={this.state.price.error}
                    required
                />
                <Input
                    label="DESCRIPTION"
                    placeholderText="Enter Product Description"
                    type="textArea"
                    name="desc"
                    value={this.state.desc.value}
                    handleChange={this.handleChange}
                    validator={validators.slugValidator}
                    error={this.state.desc.error}
                    required
                />
                <Input
                    label="WEIGHT"
                    placeholderText="Enter Product Weight"
                    type="text"
                    name="weight"
                    value={this.state.weight.value}
                    handleChange={this.handleChange}
                    validator={validators.numberValidator}
                    error={this.state.weight.error}
                    required
                />
                <Dropdown
                    label="SALE"
                    defaultValue="Select A Sale"
                    options={this.state.salesOptions}
                    error={this.state.sale.error}
                    name="sale"
                    handleChange={this.handleDropdownChange}
                    value={this.state.sale}
                />
                <div className="variantContainer">
                    <h3 className="text">VARIANT *</h3>
                    <div className="variantContent">
                        {this.state.variants.map((item, index) => {
                            return <div className={this.state.variants.length === index + 1 ? "inputIcon" : "inputIcon bottom"}>
                                <input className="inputBox"
                                    type="text"
                                    placeholder="Select A Variant"
                                    value={this.state.variants[index].name.value}
                                    disabled
                                    required
                                />
                                {/* {console.log(this.state.category.id)} */}
                                {this.state.category.id !== 0 ?
                                    <div className="icon1">
                                        {this.state.variants.length > index + 1 ?
                                            <img src={remove} onClick={() => this.removeVariant(index)} /> :
                                            <React.Fragment />
                                        }
                                        <img src={pro} onClick={() => this.setState({ addVariant: true, variantIndex: index })} />
                                    </div> :

                                    <div className="icon1">
                                        {this.state.variants.length > index + 1 ?
                                            <img src={remove} /> :
                                            <React.Fragment />
                                        }
                                        <img src={disableAdd} />
                                    </div>
                                }
                            </div>
                        })}
                        <div className="error">{this.state.variantError}</div>
                    </div>
                </div>
                <div className="variantContainer">
                    <h3 className="text">Questions</h3>
                    <div className="variantContent">
                        <div className="productQuestionsButton" onClick={() => this.setState({ addQuestions: true })}>
                            <h4 className="txtsave">Add Questions</h4>
                        </div>
                    </div>
                </div>
            </div>
        )

        const AddVariant = (
            <div className="AddVariant">
                <Input
                    required
                    label="VARIANT NAME"
                    placeholderText="Enter Variant Name"
                    value={this.state.variants[this.state.variantIndex].name.value}
                    validator={validators.textValidator}
                    type="text"
                    name="name"
                    handleChange={this.variantHandleChange}
                    error={this.state.variants[this.state.variantIndex].name.error}
                />
                <Input
                    required
                    label="SKU"
                    placeholderText="Enter Variant SKU"
                    type="text"
                    value={this.state.variants[this.state.variantIndex].sku.value}
                    validator={validators.textNoSpaceValidator}
                    name="sku"
                    handleChange={this.variantHandleChange}
                    error={this.state.variants[this.state.variantIndex].sku.error}
                />
                <Input
                    required
                    label="INVENTORY"
                    placeholderText="Enter Variant Inventory"
                    value={this.state.variants[this.state.variantIndex].inventory.value}
                    validator={validators.numberValidator}
                    type="text"
                    name="inventory"
                    handleChange={this.variantHandleChange}
                    error={this.state.variants[this.state.variantIndex].inventory.error}
                />
                <Input
                    label="PRICE"
                    placeholderText="Enter Variant Price"
                    type="text"
                    name="price"
                    // value={this.state.price.value}
                    value={this.state.variants[this.state.variantIndex].price.value}
                    handleChange={this.variantHandleChange}
                    validator={validators.numberValidator}
                    error={this.state.variants[this.state.variantIndex].price.error}
                    required
                />
                {/* Images */}
                <div>
                    <div className="variantContainer">
                        <h3 className="text">IMAGES *</h3>
                        <div className="variantContent">
                            <div className="inputIcon">
                                <input className="inputBox"
                                    type="text"
                                    placeholder="Add Images"
                                    disabled
                                    required
                                />
                                <div className="icon1">
                                    <img src={pro} onClick={() => this.setState({ addImages: true })} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Images */}

                <div className="variantOptions">
                    {this.state.variants[this.state.variantIndex].variantOptions.map((item, index) =>
                        <VariantOption
                            index={index}
                            value={this.state.variants[this.state.variantIndex].variantOptions[index]}
                            addVariantOption={this.addVariantOption}
                            removeVariantOption={this.removeVariantOption}
                            groupOptions={this.state.optionGroupOptions}
                            handleDropdownChange={this.handleVariantOptionDropdownChange}
                        />)
                    }
                </div>
            </div>
        )

        const AddImages = (
            <div>
                {this.state.variants[this.state.variantIndex].images.map((item, index) => {
                    if (!item.deleted) {
                        return <Input
                            required
                            label="IMAGE"
                            placeholderText='Select Category Image'
                            name="image"
                            type="file"
                            value={item.name}
                            // error={this.props.imageError}
                            handleChange={(e, args) => {
                                item.file = e.target.file
                                item.name = e.target.name
                                this.state.variants[this.state.variantIndex].images_updated = true
                                if (item.action !== 'create')
                                    item.action = 'update'
                                this.state.variants[this.state.variantIndex].images[index] = item
                                this.setState({ variants: this.state.variants })
                            }}
                            removeHandleChange={(e, args) => {
                                this.state.variants[this.state.variantIndex].images_updated = true
                                if (item.action !== 'create') {
                                    item.action = 'delete'
                                    item.deleted = true
                                    this.state.variants[this.state.variantIndex].images[index] = item
                                } else {
                                    delete this.state.variants[this.state.variantIndex].images[index]
                                }

                                this.setState({ variants: this.state.variants })
                            }}
                        />
                    }
                })
                }

                <div className="inputIcon bottom">
                    <Input
                        required
                        label="IMAGE"
                        placeholderText='Select Category Image'
                        name="image"
                        type="file"
                        handleChange={(e, args) => {
                            console.log(e.target.value, args, this.state.variants[this.state.variantIndex].images)
                            this.state.variants[this.state.variantIndex].images.push({
                                file: e.target.files[0],
                                url: '',
                                name: e.target.name,
                                action: 'create'
                            })
                            this.setState({ variants: this.state.variants })
                        }}
                    // // removeHandleChange={(e, args) => {
                    //     // let temp = this.state.variants[this.state.variantIndex]
                    //     // temp.images[temp.images.length]
                    //     // this.setState({ variants: temp })
                    //     // }}
                    />
                </div>
            </div >
        )

        const AddQuestions = () => {
            return <div className="AddVariant">
                {[1, 2, 3, 4].map((item, index) => {
                    return <div>
                        <Input
                            required
                            label={`Question ${item}`}
                            placeholderText="Enter Question"
                            value={this.state.productQuestions[index].question.value}
                            validator={validators.textValidator}
                            type="text"
                            name="question"
                            handleChange={(e) => this.questionHandleChange(e, index)}
                            error={this.state.productQuestions[index].question.error}
                        />
                        <Input
                            required
                            label={`Answer ${item}`}
                            placeholderText="Enter Answer"
                            type="textArea"
                            value={this.state.productQuestions[index].answer.value}
                            validator={validators.textValidator}
                            name="answer"
                            handleChange={(e) => this.questionHandleChange(e, index)}
                            error={this.state.productQuestions[index].answer.error}
                        />
                    </div>
                })}
            </div>
        }

        const content = (
            <div className="addProductRootContainer" >
                {(
                    !this.state.categoryIsLoading &&
                    !this.state.collectionIsLoading &&
                    !this.state.salesIsLoading &&
                    !this.state.postProductIsLoading &&
                    !this.state.postVariantIsLoading &&
                    !this.state.productQuestionIsLoading
                ) ?
                    <div>
                        <div className="headerContainer">
                            <TextIcon text="CATELOG" img={Icon} />
                            <div onClick={(e) =>
                                this.state.addVariant ?
                                    (this.state.addImages ? this.setState({ addImages: false }) : this.setState({ addVariant: false })) :
                                    (this.state.addQuestions ? this.setState({ addQuestions: false }) : this.props.history.replace('/SuperAdmin/Products/'))}
                            >
                                <Box2 text="BACK" />
                            </div>
                        </div>
                        <div className="innerContainer">
                            <div className="ssdfsdfprodu">
                                <div className="header">
                                    <TableTitle text={this.state.addVariant ? "Create Variant" : "Create Product"} image={pro2} />
                                </div>
                                <div className="content">
                                    <div className="input">
                                        {this.state.addVariant ? (this.state.addImages ? AddImages : AddVariant) : (this.state.addQuestions ? AddQuestions() : AddProduct)}
                                    </div>
                                    <div className="saveDiv" onClick={() => this.state.addVariant ? (this.state.addImages ?
                                        this.imageHandleSubmit() : this.variantHandleSubmit())
                                        : (this.state.addQuestions ? this.questionHandleSubmit() : this.handleSubmit())}>
                                        <h3 className="txtsave">SAVE CHANGES
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <Loading />
                }
            </div >
        )
        return (
            <Base history={this.props.history} content={content} />
        );
    }
}

const mapStateToProps = state => ({
    productResponse: state.superAdminReducer.productResponse,
    categories: state.superAdminReducer.getCategoriesResponse,
    collections: state.superAdminReducer.getCollectionResponse,
    sales: state.superAdminReducer.getSalesResponse,
    product: state.superAdminReducer.getProductsResponse,
    getProductQuestionResponse: state.superAdminReducer.getProductQuestionResponse,
    variants: state.superAdminReducer.getVariantsResponse,
    variantsResponse: state.superAdminReducer.variantResponse,
    productQuestionResponse: state.superAdminReducer.productQuestionResponse
})

const mapDispatchToProps = dispatch => ({
    getCategories: () =>
        dispatch(ACTION.getCategories({ url: config.baseUrl + config.categories })),
    getCollections: () =>
        dispatch(ACTION.getCollection({ url: config.baseUrl + config.collections })),
    getSales: () =>
        dispatch(ACTION.getSales({ url: config.baseUrl + config.sales })),
    postProductImage: (payload) =>
        dispatch(ACTION.postProductImage({
            payload: payload
        })),
    updateProductImage: (id, payload) =>
        dispatch(ACTION.updateProductImage({
            id: id,
            payload: payload
        })),
    deleteProductImage: (id) =>
        dispatch(ACTION.deleteProductImage({
            id: id,
        })),
    addVariant: (product_id, name, sku, inventory, price, option_combination) =>
        dispatch(ACTION.addVariant({
            parent_product: product_id,
            product_option_name: name,
            product_option_sku: sku,
            product_option_inventory: inventory,
            product_option_price: price,
            option_combination: option_combination
        })),
    addProduct: (category, collection, name, price, desc, weight, sale) =>
        dispatch(ACTION.addProduct({
            category: category,
            collection: collection,
            product_name: name,
            product_sale: sale,
            product_price: price,
            product_desc: desc,
            product_weight: weight,
        })),
    updateProduct: (id, category, collection, name, price, desc, weight, sale) =>
        dispatch(ACTION.updateProduct({
            id: id,
            payload: {
                category: category,
                collection: collection,
                product_name: name,
                product_sale: sale,
                product_price: price,
                product_desc: desc,
                product_weight: weight
            }
        })),
    updateQuestions: (product_id, data) =>
        dispatch(ACTION.postProductQuestions({ id: product_id, data: data })),
    getProducts: (url) =>
        dispatch(ACTION.getProducts({ url: url })),
    getVariants: (url) =>
        dispatch(ACTION.getVariant({ url: url })),
    getProductQuestion: (id) =>
        dispatch(ACTION.getProductQuestion({ id: id })),
    updateVariant: (id, product_id, name, sku, inventory, price, option_combination) =>
        dispatch(ACTION.updateVariant({
            id: id,
            payload: {
                parent_product: product_id,
                product_option_name: name,
                product_option_sku: sku,
                product_option_inventory: inventory,
                product_option_price: price,
                option_combination: option_combination
            }
        })),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);