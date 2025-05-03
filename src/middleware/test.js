/* eslint-disable */
import * as products from "./implemantations/SuperAdmin/products";
import { takeLatest, put } from "redux-saga/effects";
import * as ACTION from "./actions/superAdminActions";

export async function updateVariant(action) {
  let response = await products.updateVariant(action.payload);
  await put(ACTION.updateVariantResponse(response));
}
