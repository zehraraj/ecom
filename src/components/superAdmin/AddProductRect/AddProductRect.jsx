/* eslint-disable */
import React, { Component } from 'react';
import './AddProductRect.css';
import Descline from '../Descline/Descline';
import pro from '../../../static/superAdmin/add/add1.png'
import Variantline from '../Variantline/Variantline';
import AddProductLine2 from '../AddProductLine2/AddProductLine2';
import Dropdown from '../Dropdown/Dropdown';
import Input from '../Input/Input';
import TableTitle from '../TableTitle/TableTitle'
import * as ACTION from '../../../middleware/actions/commonActions'

class AddProductRect extends Component {
    state = {
        category: null,
        collection: null,
        name: "",
        price: "",
        desc: "",
        variants: [{}],
        addVariant: false,
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleCategoryDropdownChange = (data) => {
        this.setState({ category: data })
    }

    handleCollectionDropdownChange = (data) => {
        this.setState({ collection: data })
    }

    handleSubmit = () => {
        console.log(this.state)
    }

    render() {
        const AddVariant = () => {
            return (
                <div className="ssdfsdf">
                    <div className="header">
                        <TableTitle text="Create Variant" image={pro} />
                    </div>
                    <div className="content">
                        <div className="input">
                            <Dropdown label="CATEGORY" defaultValue="Select A Category" options={[{ id: 1, value: "test" }]} name="category" handleChange={this.handleCategoryDropdownChange} />
                            <Dropdown label="COLLECTION" defaultValue="Select A Collection" name="category" handleChange={this.handleCollectionDropdownChange} />
                            <Input text1="NAME" placeholderText="Enter Product Name" type="text" name="name" handleChange={this.handleChange} />
                            <Input text1="PRICE" placeholderText="Enter Product Price" type="text" name="price" handleChange={this.handleChange} />
                            <Input text1="DESCRIPTION" placeholderText="Enter Product Description" type="text" name="desc" handleChange={this.handleChange} />
                            <Input text1="WEIGHT" placeholderText="Enter Product Weight" type="text" name="weight" handleChange={this.handleChange} />
                            <div className="variantContainer">
                                <h3 className="text">VARIANT</h3>
                                <div className="variantContent">
                                    {/* <Input text1="VARIANT" placeholderText="Enter Product Weight" type="text" name="weight" handleChange={this.handleChange} /> */}
                                    {this.state.variants.map(item =>
                                        <Variant text1="VARIANTS" placeholderText="Select A Variant" img={pro} data={item} />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="saveDiv">
                            <h3 className="txtsave" onClick={() => this.handleSubmit()}>SAVE CHANGES</h3>
                        </div>
                    </div>
                </div>
            )
        }

        const AddProduct = () => {
            return (
                <div className="ssdfsdf">
                    <div className="header">
                        <TableTitle text="Create Products" image={pro} />
                    </div>
                    <div className="content">
                        <div className="input">
                            <Dropdown label="CATEGORY" defaultValue="Select A Category" options={[{ id: 1, value: "test" }]} name="category" handleChange={this.handleCategoryDropdownChange} />
                            <Dropdown label="COLLECTION" defaultValue="Select A Collection" name="category" handleChange={this.handleCollectionDropdownChange} />
                            <Input text1="NAME" placeholderText="Enter Product Name" type="text" name="name" handleChange={this.handleChange} />
                            <Input text1="PRICE" placeholderText="Enter Product Price" type="text" name="price" handleChange={this.handleChange} />
                            <Input text1="DESCRIPTION" placeholderText="Enter Product Description" type="text" name="desc" handleChange={this.handleChange} />
                            <Input text1="WEIGHT" placeholderText="Enter Product Weight" type="text" name="weight" handleChange={this.handleChange} />
                            <div className="variantContainer">
                                <h3 className="text">VARIANT</h3>
                                <div className="variantContent">
                                    {/* <Input text1="VARIANT" placeholderText="Enter Product Weight" type="text" name="weight" handleChange={this.handleChange} /> */}
                                    {this.state.variants.map(item =>
                                        <Variant text1="VARIANTS" placeholderText="Select A Variant" img={pro} data={item} />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="saveDiv">
                            <h3 className="txtsave" onClick={() => this.handleSubmit()}>SAVE CHANGES</h3>
                        </div>
                    </div>
                </div>
            )
        }

        const Variant = (index) => {
            return (
                <div className="inputIcon">
                    <input className="inputBox"
                        type="text"
                        ref={this.inputRef}
                        placeholder="Select A Variant"
                        // value={this.state.variants[0].value}
                        disabled
                        required
                    />
                    <div className="icon">
                        <img src={pro} onClick={() => this.setState({ addVariant: true })} />
                    </div>
                </div>
            )
        }

        return (
            this.state.addVariant ? <AddVariant /> : <AddProduct />
        );
    }
}

// const mapStateToProps = state => ({
//     redirect: state.commonReducer.redirect
// })

// const mapDispatchToProps = dispatch => ({
//     setRedirect: (to) =>
//         dispatch(ACTION.redirect())
// })

export default AddProductRect
// export default connect(mapStateToProps, mapDispatchToProps)(AddProductRect);