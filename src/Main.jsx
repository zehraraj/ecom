/* eslint-disable */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./Master/master.css";

// Common Import
import Login from "./pages/common/Login/Login";
import Register from "./pages/common/Register/Register";
import ForgotPassword from "./pages/common/ForgotPassword/ForgotPassword";
import ForgotChangePassword from "./pages/common/ForgotChangePassword/ForgotChangePassword";

// SuperAdmin Import
import Categories from "./pages/superAdmin/Categories/Categories";
import Dashboard from "./pages/superAdmin/Dashboard/Dashboard";
import Products from "./pages/superAdmin/Products/Products";
import ViewAllAdd from "./pages/superAdmin/ViewAllAdd/ViewAllAdd";
import UserMain from "./pages/superAdmin/UserDetails2/UserMain";
import UserList from "./pages/superAdmin/UserList/UserList";
import AddProduct from "./pages/superAdmin/AddProduct/AddProduct";
import AddSale from "./pages/superAdmin/AddSale/AddSale";

import Addvoucher from "./pages/superAdmin/Addvouchers/Addvoucher";
import Vouchers from "./pages/superAdmin/Vouchers/Vouchers";
import Order from "./pages/superAdmin/Order/Order";
import Discount from "./pages/superAdmin/Discount/Discount";
import SocialMedia from "./pages/superAdmin/SocialMedia/SocialMedia";
import Collection from "./pages/superAdmin/Collection/Collection";
import AddCollection from "./pages/superAdmin/AddCollection/AddCollection";
import Invoice from "./pages/superAdmin/Invoice/Invoice";
import AllInvoice from "./pages/superAdmin/AllInvoice/AllInvoice";
import AddCategories from "./pages/superAdmin/AddCategories/AddCategories";
import AddVariant from "./pages/superAdmin/AddVariant/AddVariant";
import CreateUsers from "./pages/superAdmin/CreateUsers/CreateUsers";
import Settings from "./pages/superAdmin/Settings/Settings";
import Overview from "./pages/superAdmin/Overview/Overview";
import RegionalSetting from "./pages/superAdmin/RegionalSetting/RegionalSetting";
import BusinessInfo from "./pages/superAdmin/BusinessInfo/BusinessInfo";
import Attributes from "./pages/superAdmin/Attributes/Attributes";
import AttributeType from "./pages/superAdmin/AttributeType/AttributeType";

//Testing
import Test from "./components/Test/Test";

// User
import UserHome from "./pages/User/UserHome/UserHome";
import ProfileDetails from "./pages/User/ProfileDetails/ProfileDetails";
import EditProfile from "./pages/User/EditProfile/EditProfile";
import ProductPage from "./pages/User/ProductPage/ProductPage";
import WishlistPage from "./pages/User/WishlistPage/WishlistPage";
import OrderAndReturn from "./pages/User/OrderAndReturn/OrderAndReturn";
import SaveAddress from "./pages/User/SaveAddress/SaveAddress";
import EditAddress from "./pages/User/EditAddress/EditAddress";
import Coupon from "./pages/User/Coupon/Coupon";
import Cart from "./pages/User/Cart/Cart";
import AboutUs from "./pages/User/AboutUs/AboutUs";
import Location from "./pages/User/Location/Location";

// Injector
import TokenInjector from "./middleware/injectors/tokenInjector";
import ProductDetails from "./pages/User/ProductDetails/ProductDetails";

class Main extends Component {
  render() {
    const AdminProtectedRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) => {
          if (TokenInjector.getInstance().getToken()) {
            if (TokenInjector.getInstance().getType() === "admin")
              return <Component {...props} />;
            else return <Redirect to="/" />;
          } else return <Redirect to="/login" />;
        }}
      />
    );

    const CustomerPrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) => {
          if (TokenInjector.getInstance().getToken()) {
            if (TokenInjector.getInstance().getType() === "customer")
              return <Component {...props} />;
            else return <Redirect to="/SuperAdmin/" />;
          } else return <Redirect to="/login" />;
        }}
      />
    );

    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/test" component={Test} />
            {/* ADMIN */}
            {/* Dashboard */}
            <AdminProtectedRoute
              exact
              path="/SuperAdmin"
              component={Dashboard}
            />

            {/* Users */}
            <AdminProtectedRoute
              exact
              strict
              path="/SuperAdmin/Users/"
              component={UserList}
            />
            <AdminProtectedRoute
              exact
              strict
              path="/SuperAdmin/Users/:id"
              component={UserMain}
            />
            <AdminProtectedRoute
              exact
              strict
              path="/SuperAdmin/Users/:id/Addresses/"
              component={ViewAllAdd}
            />
            <AdminProtectedRoute
              exact
              strict
              path="/SuperAdmin/Users/Create/"
              component={CreateUsers}
            />

            {/* Catelog */}
            <AdminProtectedRoute
              exact
              path="/SuperAdmin/Products/"
              component={Products}
            />
            <AdminProtectedRoute
              exact
              path="/SuperAdmin/Products/:id"
              component={AddProduct}
            />

            {/* <AdminProtectedRoute exact strict path='/SuperAdmin/AddProduct/' component={AddProduct} /> */}
            <AdminProtectedRoute
              exact
              strict
              path="/SuperAdmin/AddVariant/"
              component={AddVariant}
            />
            <AdminProtectedRoute
              exact
              path="/SuperAdmin/Collection/"
              component={Collection}
            />
            <AdminProtectedRoute
              exact
              path="/SuperAdmin/Collection/:id/"
              component={AddCollection}
            />
            <AdminProtectedRoute
              exact
              path="/SuperAdmin/Collection/Create/"
              component={AddCollection}
            />
            <AdminProtectedRoute
              exact
              strict
              path="/SuperAdmin/Categories/"
              component={Categories}
            />
            <AdminProtectedRoute
              exact
              strict
              path="/SuperAdmin/Categories/Create/"
              component={AddCategories}
            />
            <AdminProtectedRoute
              exact
              strict
              path="/SuperAdmin/Categories/:id/"
              component={AddCategories}
            />

            <AdminProtectedRoute
              exact
              path="/SuperAdmin/Attribute/"
              component={Attributes}
            />
            <AdminProtectedRoute
              exact
              path="/SuperAdmin/Attribute/:id/"
              component={Attributes}
            />
            {/* <AdminProtectedRoute exact path='/SuperAdmin/Attribute/Create/' component={Attributes} /> */}

            <AdminProtectedRoute
              exact
              path="/SuperAdmin/AttributeGroup/"
              component={AttributeType}
            />
            <AdminProtectedRoute
              exact
              path="/SuperAdmin/AttributeGroup/:id/"
              component={AttributeType}
            />

            {/* Discount */}
            <AdminProtectedRoute
              exact
              path="/SuperAdmin/Sales/:id"
              component={AddSale}
            />
            <AdminProtectedRoute
              exact
              path="/SuperAdmin/Vouchers/:id"
              component={Addvoucher}
            />
            <AdminProtectedRoute
              exact
              path="/SuperAdmin/Sales/"
              component={Discount}
            />
            <AdminProtectedRoute
              exact
              path="/SuperAdmin/Vouchers/"
              component={Vouchers}
            />

            {/* Orders */}
            <AdminProtectedRoute
              exact
              strict
              path="/SuperAdmin/Orders/"
              component={Order}
            />
            <AdminProtectedRoute
              exact
              strict
              path="/SuperAdmin/Invoice/"
              component={AllInvoice}
            />
            <AdminProtectedRoute
              exact
              strict
              path="/SuperAdmin/Invoice/:id"
              component={Invoice}
            />

            {/* Settings */}
            {/* <AdminProtectedRoute
              exact
              strict
              path="/SuperAdmin/Settings/"
              component={Settings}
            /> */}
            <AdminProtectedRoute
              exact
              path="/SuperAdmin/Settings/SocialMedia/"
              component={SocialMedia}
            />
            <AdminProtectedRoute
              exact
              path="/SuperAdmin/Settings/Overview/"
              component={Overview}
            />
            <AdminProtectedRoute
              exact
              path="/SuperAdmin/Settings/RegionalSetting/"
              component={RegionalSetting}
            />
            <AdminProtectedRoute
              exact
              path="/SuperAdmin/Settings/Business/"
              component={BusinessInfo}
            />

            {/* CUSTOMER */}
            <CustomerPrivateRoute exact strict path="/" component={UserHome} />
            {/* <CustomerPrivateRoute exact strict path="/test/" component={test} /> */}
            {/* <CustomerPrivateRoute
              exact
              strict
              path="/ProfileDetails/"
              component={ProfileDetails}
            />
            <CustomerPrivateRoute
              exact
              strict
              path="/EditProfile/"
              component={EditProfile}
            />
            <CustomerPrivateRoute
              exact
              strict
              path="/Product/"
              component={ProductPage}
            />
            <CustomerPrivateRoute
              exact
              strict
              path="/Wishlist/"
              component={WishlistPage}
            />
            <CustomerPrivateRoute
              exact
              strict
              path="/OrderAndReturn/"
              component={OrderAndReturn}
            />
            <CustomerPrivateRoute
              exact
              strict
              path="/Address/"
              component={SaveAddress}
            />
            <CustomerPrivateRoute
              exact
              strict
              path="/EditAddress/"
              component={EditAddress}
            />
            <CustomerPrivateRoute
              exact
              strict
              path="/Coupon/"
              component={Coupon}
            />
            <CustomerPrivateRoute exact strict path="/Cart/" component={Cart} />
            <CustomerPrivateRoute
              exact
              strict
              path="/ProductDetails/"
              component={ProductDetails}
            />
            <CustomerPrivateRoute
              exact
              strict
              path="/AboutUs/"
              component={AboutUs}
            />
            <CustomerPrivateRoute
              exact
              strict
              path="/Location/"
              component={Location}
            /> */}

            <Route exact path="/login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/forgot" component={ForgotPassword} />
            <Route
              exact
              path="/ChangePassword/:token"
              component={ForgotChangePassword}
            />

            {/* 404 */}
            {/* <Redirect to='/login' /> */}

            {/* <Route exact path='/404' component={() => { return "404" }} />
                        <Redirect to='/404' /> */}
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default Main;
