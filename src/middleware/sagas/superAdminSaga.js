import { takeLatest, put } from "redux-saga/effects";
import * as ACTION from "../actions/superAdminActions";

import * as orders from "../implemantations/SuperAdmin/order";
import * as products from "../implemantations/SuperAdmin/products";
import * as common from "../implemantations/SuperAdmin/common";
import * as settings from "../implemantations/SuperAdmin/settings";
import * as coupons from "../implemantations/SuperAdmin/coupons";
import * as users from "../implemantations/SuperAdmin/users";
import * as customers from "../implemantations/SuperAdmin/customers";

function* completeSaga() {
  // GET
  yield takeLatest(ACTION.Types.GET_ORDERS, getOrders);
  yield takeLatest(ACTION.Types.GET_OPTIONS, getOptions);
  yield takeLatest(ACTION.Types.GET_RECENT_ORDERS, getRecentOrders);
  yield takeLatest(ACTION.Types.GET_PRODUCTS, getProducts);
  yield takeLatest(ACTION.Types.GET_INVENTORY, getInventory);
  yield takeLatest(ACTION.Types.GET_SOCIAL_MEDIA, getSocialMedia);
  yield takeLatest(ACTION.Types.GET_STORE_INFO, getStoreInfo);
  yield takeLatest(ACTION.Types.GET_VOUCHER, getVouchers);
  yield takeLatest(ACTION.Types.GET_USERS, getUsers);
  yield takeLatest(ACTION.Types.GET_CUSTOMERS, getCustomers);
  yield takeLatest(ACTION.Types.GET_COLLECTION, getCollections);
  yield takeLatest(ACTION.Types.GET_CATEGORIES, getCategories);
  yield takeLatest(ACTION.Types.GET_ADDRESSES, getAddresses);
  yield takeLatest(ACTION.Types.GET_INVOICE, getInvoices);
  yield takeLatest(ACTION.Types.GET_SALES, getSales);
  yield takeLatest(ACTION.Types.GET_OPTION_GROUPS, getOptionGroup);
  yield takeLatest(ACTION.Types.GET_VARIANT, getVariants);
  yield takeLatest(ACTION.Types.GET_OVERVIEW, getOverview);
  yield takeLatest(ACTION.Types.GET_BUSINESS, getBusiness);
  yield takeLatest(ACTION.Types.GET_CAROUSEL, getCarousel);
  yield takeLatest(ACTION.Types.GET_PRODUCT_QUESTION, getProductQuestions);

  // POST
  yield takeLatest(ACTION.Types.POST_PRODUCT, addProduct);
  yield takeLatest(ACTION.Types.POST_COLLECTION, addCollection);
  yield takeLatest(ACTION.Types.POST_SALE, addSale);
  yield takeLatest(ACTION.Types.POST_VARIANT, addVariant);
  yield takeLatest(ACTION.Types.POST_CATEGORY, addCategory);
  yield takeLatest(ACTION.Types.POST_DISCOUNT, addDiscount);
  yield takeLatest(ACTION.Types.POST_OPTION_GROUP, addOptionGroup);
  yield takeLatest(ACTION.Types.POST_OPTION, addOption);
  yield takeLatest(ACTION.Types.POST_VOUCHER, addVoucher);
  yield takeLatest(ACTION.Types.POST_CAROUSEL, addCarousel);
  yield takeLatest(ACTION.Types.REGISTER_SUPER_ADMIN, registerSuperAdmin);
  yield takeLatest(ACTION.Types.FORGOT_PASSWORD, forgotPassword);
  yield takeLatest(ACTION.Types.POST_PRODUCT_IMAGE, postProductImage);
  yield takeLatest(ACTION.Types.POST_PRODUCT_QUESTION, postProductQuestion);

  // UPDATE
  yield takeLatest(ACTION.Types.UPDATE_COLLECTION, updateCollection);
  yield takeLatest(ACTION.Types.UPDATE_CATEGORY, updateCategory);
  yield takeLatest(ACTION.Types.UPDATE_PRODUCT, updateProduct);
  yield takeLatest(ACTION.Types.UPDATE_OPTION_GROUP, updateOptionGroup);
  yield takeLatest(ACTION.Types.UPDATE_OPTION, updateOption);
  yield takeLatest(ACTION.Types.UPDATE_SALES, updateSale);
  yield takeLatest(ACTION.Types.UPDATE_VARIANT, updateVariant);
  yield takeLatest(ACTION.Types.UPDATE_VOUCHER, updateVoucher);
  yield takeLatest(ACTION.Types.UPDATE_SOCIAL_MEDIA, updateSocialMedia);
  yield takeLatest(ACTION.Types.UPDATE_OVERVIEW, updateOverview);
  yield takeLatest(ACTION.Types.UPDATE_BUSINESS, updateBusiness);
  yield takeLatest(ACTION.Types.UPDATE_PRODUCT_IMAGE, updateProductImage);

  // DELETE
  yield takeLatest(ACTION.Types.DELETE_USER, deleteUser);
  yield takeLatest(ACTION.Types.DELETE_PRODUCT_IMAGE, deleteProductImage);
}

// GET

function* getVouchers(action) {
  let response = yield coupons.getVoucher(action.payload);

  yield put(ACTION.getVouchersResponse(response));
}

function* getBusiness(action) {
  let response = yield settings.getBusiness(action.payload);

  yield put(ACTION.getBusinessResponse(response));
}

function* getOverview(action) {
  let response = yield settings.getOverview(action.payload);

  yield put(ACTION.getOverviewResponse(response));
}

function* getOptions(action) {
  let response = yield products.getOptions(action.payload);

  yield put(ACTION.getOptionsResponse(response));
}

function* getSales(action) {
  let response = yield coupons.getSales(action.payload);

  yield put(ACTION.getSalesResponse(response));
}

function* getOptionGroup(action) {
  let response = yield products.getOptionGroup(action.payload);

  yield put(ACTION.getOptionGroupResponse(response));
}

function* getAddresses(action) {
  let response = yield users.getAddresses(action.payload);

  yield put(ACTION.getAddressesResponse(response));
}

function* getCollections(action) {
  let response = yield products.getCollections(action.payload);

  yield put(ACTION.getCollectionResponse(response));
}

function* getInvoices(action) {
  let response = yield orders.getInvoices(action.payload);

  yield put(ACTION.getInvoiceResponse(response));
}

function* getCarousel(action) {
  let response = yield settings.getCarousel(action.payload);

  yield put(ACTION.getCarouselResponse(response));
}

function* getCategories(action) {
  let response = yield products.getCategories(action.payload);

  yield put(ACTION.getCategoriesResponse(response));
}

function* getUsers(action) {
  let response = yield users.getUsers(action.payload);

  yield put(ACTION.getUsersResponse(response));
}

function* getCustomers(action) {
  let response = yield customers.getCustomer(action.payload);

  yield put(ACTION.getCustomersResponse(response));
}

function* getOrders(action) {
  let response = yield orders.getOrder(action.payload);

  yield put(ACTION.getOrdersResponse(response));
}

function* getRecentOrders() {
  let response = yield orders.getRecentOrder();

  yield put(ACTION.getRecentOrdersReponse(response));
}

function* getProducts(action) {
  let response = yield products.getProducts(action.payload);

  yield put(ACTION.getProductsResponse(response));
}

function* getInventory() {
  let response = yield products.getInventory();

  yield put(ACTION.getInventoryResponse(response));
}

function* getSocialMedia() {
  let response = yield common.getSocialMedia();

  yield put(ACTION.getSocialMediaReponse(response));
}

function* getStoreInfo() {
  let response = yield settings.getStoreInfo();

  yield put(ACTION.getStoreInfoResponse(response));
}

function* getVariants(action) {
  let response = yield products.getVariants(action.payload);

  yield put(ACTION.getVariantResponse(response));
}

function* getProductQuestions(action) {
  let response = yield products.getProductQuestions(action.payload);

  yield put(ACTION.getProductQuestionResponse(response));
}

// POST

function* registerSuperAdmin(action) {
  let response = yield users.createSuperUser(action.payload);

  yield put(ACTION.registerSuperAdminResponse(response));
}

function* postProductQuestion(action) {
  let response = yield products.addProductQuestions(action.payload);

  yield put(ACTION.postProductQuestionsResponse(response));
}

function* addVariant(action) {
  let response = yield products.addVariant(action.payload);

  yield put(ACTION.addVariantResponse(response));
}

function* addOptionGroup(action) {
  let response = yield products.addOptionGroup(action.payload);

  yield put(ACTION.addOptionGroupResponse(response));
}

function* addOption(action) {
  let response = yield products.addOption(action.payload);

  yield put(ACTION.addOptionResponse(response));
}

function* forgotPassword(action) {
  let response = yield common.forgotPassword(action.payload);

  yield put(ACTION.forgotPasswordResponse(response));
}

function* addProduct(action) {
  let response = yield products.addProduct(action.payload);

  yield put(ACTION.addProductResponse(response));
}

function* addCollection(action) {
  let response = yield products.addCollections(action.payload);

  yield put(ACTION.addCollectionResponse(response));
}

function* addCategory(action) {
  let response = yield products.addCategory(action.payload);

  yield put(ACTION.addCategoryResponse(response));
}

function* addSale(action) {
  let response = yield coupons.addSale(action.payload);

  yield put(ACTION.addSaleResponse(response));
}

function* addDiscount(action) {
  let response = yield coupons.addDiscount(action.payload);

  yield put(ACTION.addDiscountResponse(response));
}

function* addVoucher(action) {
  let response = yield coupons.addVoucher(action.payload);

  yield put(ACTION.addVoucherResponse(response));
}

function* addCarousel(action) {
  let response = yield settings.addCarousel(action.payload);

  yield put(ACTION.addCarouselResponse(response));
}

function* postProductImage(action) {
  console.log(action);
  let response = yield products.postProductImage(action.payload);

  yield put(ACTION.postProductImageResponse(response));
}

// DELETE

function* deleteUser(action) {
  let response = yield users.deleteUser(action.payload);

  yield put(ACTION.deleteUserResponse(response));
}

function* deleteProductImage(action) {
  let response = yield products.deleteProductImage(action.payload);

  yield put(ACTION.deleteProductImageResponse(response));
}

// UPDATE

function* updateProductImage(action) {
  let response = yield products.updateProductImage(action.payload);

  yield put(ACTION.updateProductImageResponse(response));
}

function* updateCollection(action) {
  let response = yield products.updateCollections(action.payload);

  yield put(ACTION.updateCollectionResponse(response));
}

function* updateCategory(action) {
  let response = yield products.updateCategory(action.payload);

  yield put(ACTION.updateCategoryResponse(response));
}

function* updateProduct(action) {
  let response = yield products.updateProduct(action.payload);

  yield put(ACTION.updateProductResponse(response));
}

function* updateVariant(action) {
  let response = yield products.updateVariant(action.payload);

  yield put(ACTION.updateVariantResponse(response));
}

function* updateSale(action) {
  let response = yield coupons.updateSale(action.payload);

  yield put(ACTION.updateSaleResponse(response));
}

function* updateVoucher(action) {
  let response = yield coupons.updateVoucher(action.payload);

  yield put(ACTION.updateVoucherResponse(response));
}

function* updateSocialMedia(action) {
  let response = yield settings.updateSocialMedia(action.payload);

  yield put(ACTION.updateSocialMediaResponse(response));
}

function* updateOptionGroup(action) {
  let response = yield products.updateOptionGroup(action.payload);

  yield put(ACTION.updateOptionGroupResponse(response));
}

function* updateOption(action) {
  let response = yield products.updateOption(action.payload);

  yield put(ACTION.updateOptionResponse(response));
}

function* updateOverview(action) {
  let response = yield settings.updateOverview(action.payload);

  yield put(ACTION.updateOverviewResponse(response));
}

function* updateBusiness(action) {
  let response = yield settings.updateBusiness(action.payload);

  yield put(ACTION.updateBusinessResponse(response));
}

export { completeSaga };
