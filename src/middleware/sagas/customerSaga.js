/* eslint-disable */
import { takeLatest, put } from "redux-saga/effects";
import * as ACTION from "../actions/customerActions";

import * as orders from "../implemantations/SuperAdmin/order";
import * as products from "../implemantations/SuperAdmin/products";
import * as common from "../implemantations/SuperAdmin/common";
import * as settings from "../implemantations/SuperAdmin/settings";
import * as coupons from "../implemantations/SuperAdmin/coupons";
import * as users from "../implemantations/SuperAdmin/users";
import * as customers from "../implemantations/SuperAdmin/customers";

function* completeSaga() {
  // POST
  yield takeLatest(ACTION.Types.REGISTER_CUSTOMER, registerCustomer);
  // yield takeLatest(ACTION.Types.FORGOT_PASSWORD, forgotPassword);

  // PATCH
  yield takeLatest(ACTION.Types.PATCH_CUSTOMER, updateCustomer);
}

// GET

// POST

function* registerCustomer(action) {
  let response = yield common.register(action.payload);

  yield put(ACTION.registerCustomerResponse(response));
}

// function* forgotPassword(action) {
//   let response = yield common.forgotPassword(action.payload);

//   yield put(ACTION.forgotPasswordResponse(response));
// }

function* updateCustomer(action) {
  console.log("saga");
  let response = yield customers.updateCustomer(action.payload);

  yield put(ACTION.updateCustomerResponse(response));
}

export { completeSaga };
