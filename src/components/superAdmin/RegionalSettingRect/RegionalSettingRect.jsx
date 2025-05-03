import React, { Component } from 'react';
import './RegionalSettingRect.css';
import downArrow from "../../../static/superAdmin/downArrow.png";
class RegionalSettingRect extends Component {
  state = {
    selectedShippingValue: "Select Shipping Region",
    selectedCurrancyValue: "Select Currancy",
    selectedTimeZoneValue: "Select Time Zone",
    isDrop: false,
    isDrop2: false,
    isDrop3: false,
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
  toggleDrop3 = () => {
    this.setState({ isDrop3: !this.state.isDrop3 });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const renderShippingOptions = () => {
      return this.state.options.map((item, index) => {
        return (
          <div
            className="option"
            onClick={() =>
              this.setState({
                selectedShppingValue: item,
                isDrop: !this.state.isDrop
              })
            }
          >
            {item}
          </div>
        );
      });
    };
    const renderCurrancyOptions = () => {
      return this.state.options.map((item, index) => {
        return (
          <div
            className="option"
            onClick={() =>
              this.setState({
                selectedCurrancyValue: item,
                isDrop2: !this.state.isDrop2
              })
            }
          >
            {item}
          </div>
        );
      });
    };

    const renderTimeZoneOptions = () => {
      return this.state.options.map((item, index) => {
        return (
          <div
            className="option"
            onClick={() =>
              this.setState({
                selectedTimeZoneValue: item,
                isDrop2: !this.state.isDrop3
              })
            }
          >
            {item}
          </div>
        );
      });
    };

    // console.log(this.state) 
    return (
      <div className="RS-Rect">
        <div className="inner">
          <div className="custom-drop-container">
            <h3 className="text">SHIPPING</h3>
            <div className="dropdown">
              <div
                className="dropdown-header"
                onClick={() => this.toggleDrop()}>

                {this.state.selectedShippingValue}
                <img src={downArrow} alt="" className="downArrow" />
              </div>
              {this.state.isDrop ? (
                <div className="dropdown-content">{renderShippingOptions()}</div>
              ) : (
                <React.Fragment />
              )}
            </div>
          </div>
          <div className="custom-drop-container2">
            <h3 className="text">CURRANCY</h3>
            <div className="dropdown">
              <div
                className="dropdown-header"
                onClick={() => this.toggleDrop2()}
              >
                {this.state.selectedCurrancyValue}
                <img src={downArrow} alt="" className="downArrow" />
              </div>
              {this.state.isDrop2 ? (
                <div className="dropdown-content">{renderCurrancyOptions()}</div>
              ) : (
                <React.Fragment />
              )}
            </div>
          </div>
          <div className="custom-drop-container3">
            <h3 className="text">Time Zone</h3>
            <div className="dropdown">
              <div
                className="dropdown-header"
                onClick={() => this.toggleDrop3()}>

                {this.state.selectedTimeZoneValue}
                <img src={downArrow} alt="" className="downArrow" />
              </div>
              {this.state.isDrop ? (
                <div className="dropdown-content">{renderTimeZoneOptions()}</div>
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

export default RegionalSettingRect;