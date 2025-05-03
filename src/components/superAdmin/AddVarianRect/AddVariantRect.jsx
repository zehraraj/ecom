import React, { Component } from "react";
import "./AddVariantRect.css";
import AddVariantLine from "../AddVariantLine/AddVariantLine";
import Descline from "../Descline/Descline";
import downArrow from "../../../static/superAdmin/downArrow.png";
class AddProductRect extends Component {
  state = {
    Name: "",
    Desc: "",
    Sku: "",
    Inventory: "",
    Varplaceholder1: 'Enter Variant Name',
    Varplaceholder2: 'Enter Variant Description',
    Varplaceholder3: 'Enter Variant SKU',
    Varplaceholder4: 'Enter Variant Inventory',
    selectedGroupValue: "Enter Variant Group",
    selectedVariantValue: "Enter Variant Value",
    isDrop: false,
    isDrop2: false,
    options: [
      "Prateek",
      "Shahbaz",
      "Arfat",
      "Umair",
      "Mohammad",
      "Fahad",
      "Imaad",
      "Gagan",
      "Dipesh"
    ]
  };
  toggleDrop = () => {
    this.setState({ isDrop: !this.state.isDrop });
  };
  toggleDrop2 = () => {
    this.setState({ isDrop2: !this.state.isDrop2 });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const renderGroupOptions = () => {
      return this.state.options.map((item, index) => {
        return (
          <div
            className="option"
            onClick={() =>
              this.setState({
                selectedGroupValue: item,
                isDrop: !this.state.isDrop
              })
            }
          >
            {item}
          </div>
        );
      });
    };
    const renderVariantOptions = () => {
      return this.state.options.map((item, index) => {
        return (
          <div
            className="option"
            onClick={() =>
              this.setState({
                selectedVariantValue: item,
                isDrop2: !this.state.isDrop2
              })
            }
          >
            {item}
          </div>
        );
      });
    };

    return (
      <div className="av-Rectangle">
        <div className="av-headerContainer">
          <h1 className="tt">{this.props.text}</h1>
          <img src={this.props.img} alt="" className="image" />
        </div>
        <div>
          <hr className="hr" />
        </div>
        <div className="av-lineContainer">
          <AddVariantLine
            text1="NAME"
            placeholderText={this.state.Varplaceholder1}
            name="Name"
            handleChange={this.handleChange}
          />
          <Descline
            text1="DESCRIPTION"
            placeholderText={this.state.Varplaceholder2}
            name="Desc"
            handleChange={this.handleChange}
          />
          <AddVariantLine
            text1="SKU"
            placeholderText={this.state.Varplaceholder3}
            name="Sku"
            handleChange={this.handleChange}
          />
          <AddVariantLine
            text1="INVENTORY"
            placeholderText={this.state.Varplaceholder4}
            name="Inventory"
            handleChange={this.handleChange}
          />
          {/* <CustomDropDown text1="GROUP" text2="Enter Variant Group" />
          <CustomDropDown text1="VALUE" text2="Enter Variant Value" /> */}
          <div className="custom-drop-container">
            <h3 className="text">GROUP</h3>
            <div className="dropdown">
              <div
                className="dropdown-header"
                onClick={() => this.toggleDrop()}
              >
                {this.state.selectedGroupValue}
                <img src={downArrow} alt="" className="downArrow" />
              </div>
              {this.state.isDrop ? (
                <div className="dropdown-content">{renderGroupOptions()}</div>
              ) : (
                <React.Fragment />
              )}
            </div>
          </div>
          <div className="custom-drop-container2">
            <h3 className="text">VALUE</h3>
            <div className="dropdown">
              <div
                className="dropdown-header"
                onClick={() => this.toggleDrop2()}
              >
                {this.state.selectedVariantValue}
                <img src={downArrow} alt="" className="downArrow" />
              </div>
              {this.state.isDrop2 ? (
                <div className="dropdown-content">{renderVariantOptions()}</div>
              ) : (
                <React.Fragment />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProductRect;
