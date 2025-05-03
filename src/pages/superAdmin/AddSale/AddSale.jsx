/* eslint-disable */
import React, { Component } from "react";
// import { NavLink } from 'react-router-dom';
import "./AddSale.css";
import cart1 from "../../../static/superAdmin/cart/Cart1.jpeg";
import Sidenav from "../../../components/superAdmin/SideNav/SideNav";
import Loading from "../../../components/superAdmin/Loading/Loading";
import Box2 from "../../../components/superAdmin/Box2/Box2";
import Addsalerect from "../../../components/superAdmin/Addsalerect/Addsalerect";
import Disktexticoncont from "../../../components/superAdmin/Disktexticoncont/Distxtcont";
import Navbar from "../../../components/superAdmin/Navbar/Navbar";
// import Box3 from '../../../components/superAdmin/Box3/Box3';
// import Blank from '../../../components/superAdmin/Blank/Blank';
import TextIcon from "../../../components/superAdmin/TextIcon/TextIcon";
import Base from '../../../components/superAdmin/Base/Base'

import { connect } from "react-redux";
import * as ACTION from "../../../middleware/actions/superAdminActions";
import config from "../../../middleware/config";


class AddSale extends Component {
  state = {
    product: "",
    name: { value: "", error: "" },
    discount_value: { value: "", error: "" },
    start_date: "",
    end_date: "",
    update: false,
    url: config.baseUrl + config.sales,
  };

  dateFormat = (data) => {
    let arr = data.split("-");
    arr.reverse();
    return arr.join("-");
  };

  componentDidMount = () => {
    if (isNaN(this.props.match.params.id)) {
      this.setState({ update: false });
    } else {
      this.props.getSales(this.state.url + `/${this.props.match.params.id}`);
      this.setState({ update: true });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.sales !== this.props.sales) {
      if (this.props.sales.success) {
        this.setState({
          name: { value: this.props.sales.data.name, error: '' },
          discount_value: { value: this.props.sales.data.value, error: '' },
          start_date: this.props.sales.data.start_date,
          end_date: this.props.sales.data.end_date,
        });
      }
    } else if (prevProps.saleResponse !== this.props.saleResponse) {
      console.log(this.props.saleResponse)
      if (this.props.saleResponse.success) {
        this.props.history.push("/SuperAdmin/Sales");
      }
    }
  };

  handleChange = (event, value) => {
    this.setState({ [event.target.name]: value })
  }

  startDateHandleChange = (date) => {
    this.setState({ start_date: date });
  };

  endDateHandleChange = (date) => {
    this.setState({ end_date: date });
  };

  handleSubmit = () => {
    if (
      this.state.name.error === "" &&
      this.state.discount_value.error === ""
    ) {
      if (this.state.update) {
        this.props.updateSale(
          this.props.match.params.id,
          this.state.name.value,
          this.state.discount_value.value,
          this.state.start_date,
          this.state.end_date
        )
      } else this.props.addSale(
        this.state.name.value,
        this.state.discount_value.value,
        this.state.start_date,
        this.state.end_date
      )
    }
  }

  render() {
    const content = (
      <div className="rot">
        {!this.props.isLoading ? (
          <div>
            <div className="headerContainer">
              <TextIcon text="DISCOUNTS" img={cart1} />
              <div onClick={() => this.props.history.goBack()}>
                <Box2 text="Back" />
              </div>
            </div>
            <div className="innerContainer">
              <Addsalerect
                history={this.props.history}
                name={this.state.name.value}
                nameError={this.state.name.error}
                discountError={this.state.discount_value.error}
                discount_value={this.state.discount_value.value}
                start_date={this.state.start_date}
                end_date={this.state.end_date}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                endDateHandleChange={this.endDateHandleChange}
                startDateHandleChange={this.startDateHandleChange}
              />
            </div>
          </div>
        ) : (
            <Loading />
          )}
      </div>
    )
    return (
      <Base content={content} history={this.props.history} />
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.superAdminReducer.isLoading,
  sales: state.superAdminReducer.getSalesResponse,
  saleResponse: state.superAdminReducer.saleResponse,
});

const mapDispatchToProps = (dispatch) => ({
  addSale: (name, discount_value, start_date, end_date) =>
    dispatch(
      ACTION.addSale({
        name: name,
        value: discount_value,
        start_date: start_date,
        end_date: end_date,
      })
    ),
  updateSale: (id, name, discount_value, start_date, end_date) =>
    dispatch(
      ACTION.updateSale({
        id: id,
        payload: {
          name: name,
          value: discount_value,
          start_date: start_date,
          end_date: end_date,
        },
      })
    ),
  getSales: (url) => dispatch(ACTION.getSales({ url: url })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSale);
