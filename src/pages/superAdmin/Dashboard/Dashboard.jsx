/* eslint-disable */
import React, { Component } from "react";
import "./Dashboard.css";
import SideNav from "../../../components/superAdmin/SideNav/SideNav";
import Texticon from "../../../components/superAdmin/TextIcon/TextIcon";
import DashRect from "../../../components/superAdmin/DashRect/DashRect";
import Blank from "../../../components/superAdmin/Blank/Blank";
// static
import logo1 from "../../../static/superAdmin/dashboard/bb.png";
import logo3 from "../../../static/superAdmin/dashboard/asd.jpeg";
import Navbar from "../../../components/superAdmin/Navbar/Navbar";
import Box from "../../../components/superAdmin/Box/Box";
import Loading from "../../../components/superAdmin/Loading/Loading";
import InventRect from "../../../components/superAdmin/InventRect/InventRect";
import { connect } from "react-redux";
import * as ACTION from "../../../middleware/actions/superAdminActions";
import config from "../../../middleware/config";
import Base from "../../../components/superAdmin/Base/Base";

class Dashboard extends Component {
  state = {
    inventory: [],
    recentOrders: [],
    revenue: 0,
    totalSales: 0,
    visitors: 0,
    infoDone: false,
    ordersDone: false,
    inventoryDone: false,
  };

  componentDidMount() {
    this.props.getRecentOrders();
    this.props.getStoreInfo();
    this.props.getInventory();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.storeInfo !== this.props.storeInfo) {
      let data = this.props.storeInfo.data;
      this.setState({
        revenue: data.revenue,
        totalSales: data.total_sales,
        visitors: data.visitors,
        infoDone: true,
      });
    }
    if (prevProps.recentOrders !== this.props.recentOrders) {
      this.setState({
        recentOrders: this.props.recentOrders.data,
        ordersDone: true,
      });
    }
    if (prevProps.inventory !== this.props.inventory) {
      this.setState({
        inventory: this.props.inventory.data.results,
        inventoryDone: true,
      });
    }
  }

  render() {
    const content = (
      <div className="dashboardRootContainer">

        {this.state.infoDone &&
        this.state.inventory &&
        this.state.ordersDone ? (
          <div className="contentContainer1">
            <div className="title">
              <Texticon text="DASHBOARD " img={logo1} />
            </div>

            <div className="innerContainer">
              <Box text="revenue" txt={"₹" + this.state.revenue} />
              <Box text="total sales" txt={this.state.totalSales} />
              <Box text="visitors" txt={this.state.visitors} />
            </div>

            <div className="recentOrders">
              <DashRect
                text="Recent Orders"
                img={logo3}
                recentOrders={this.state.recentOrders}
              />
            </div>
            <div className="inventory">
              <InventRect text="Inventory" inventory={this.state.inventory} />
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
    return <Base history={this.props.history} content={content} />;
  }
}

const mapStateToProps = (state) => ({
  storeInfo: state.superAdminReducer.getStoreInfoResponse,
  recentOrders: state.superAdminReducer.getRecentOrdersResponse,
  inventory: state.superAdminReducer.getInventoryResponse,
  isLoading: state.superAdminReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getRecentOrders: () => dispatch(ACTION.getRecentOrders()),
  getStoreInfo: () => dispatch(ACTION.getStoreInfo()),
  getInventory: () => dispatch(ACTION.getInventory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
