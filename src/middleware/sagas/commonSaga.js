/* eslint-disable */
import { takeLatest, put } from "redux-saga/effects";
import * as ACTION from "../actions/commonActions";

import * as orders from "../implemantations/SuperAdmin/order";
import * as products from "../implemantations/SuperAdmin/products";
import * as common from "../implemantations/SuperAdmin/common";
import * as settings from "../implemantations/SuperAdmin/settings";
import * as coupons from "../implemantations/SuperAdmin/coupons";
import * as users from "../implemantations/SuperAdmin/users";
import * as customers from "../implemantations/SuperAdmin/customers";

function* completeSaga() {
  // POST
  yield takeLatest(ACTION.Types.FORGOT_PASSWORD, forgotPassword);
  yield takeLatest(ACTION.Types.CHANGE_PASSWORD, changePassword);
}

// POST

function* forgotPassword(action) {
  let response = yield common.forgotPassword(action.payload);

  yield put(ACTION.forgotPasswordResponse(response));
}

function* changePassword(action) {
  console.log("saga");
  let response = yield common.forgotChangePassword(action.payload);

  yield put(ACTION.changePasswordResponse(response));
}

export { completeSaga };
