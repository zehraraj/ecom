/* eslint-disable */
import React, { Component } from "react";
import "./DashRect.css";
import OrderLine from "../OrderLine/OrderLIne";
import TableTitle from "../TableTitle/TableTitle";
import { connect } from "react-redux";
import EmptyData from "../EmptyData/EmptyData";
class DashRect extends Component {
  state = {
    recentOrders: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.recentOrders !== this.props.recentOrders) {
      this.setState({
        recentOrders: this.props.recentOrders.data,
      });
    }
  }

  render() {
    return (
      <div className="DashRect">
        <div className="header">
          <TableTitle text="Recent Orders" image={this.props.img} />
        </div>
        {this.props.recentOrders.length ? (
          <React.Fragment>
            <div className="heading">
              <h3 className="recent-order-txt1">id</h3>
              <h3 className="recent-order-txt2">order id</h3>
              <h3 className="recent-order-txt3">e-mail</h3>
              <h3 className="recent-order-txt4">qty</h3>
              <h3 className="recent-order-txt5">price</h3>
              <h3 className="recent-order-txt6">status</h3>
              <h3 className="recent-order-txt7">date</h3>
            </div>
            {this.props.recentOrders.map((item, index) => (
              <OrderLine id={index + 1} orders={item} />
            ))}
          </React.Fragment>
        ) : (
          <EmptyData for="Recent Orders" />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // recentOrders: state.superAdminReducer.getRecentOrdersResponse,
  isLoading: state.superAdminReducer.isLoading,
});

export default connect(mapStateToProps)(DashRect);
