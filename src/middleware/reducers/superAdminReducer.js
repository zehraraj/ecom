/* eslint-disable */
import { Types } from "../actions/superAdminActions";
import * as test from "../test";
import {
  responseFormat,
  responsePost,
  responseUpdate,
  responseDelete,
} from "../structs";

let initialState = {
  isLoading: false,
  test: false,

  getRecentOrdersResponse: responseFormat,
  getOptionsResponse: responseFormat,
  getOptionGroupsResponse: responseFormat,
  getCollectionResponse: responseFormat,
  getCategoriesResponse: responseFormat,
  getUsersResponse: responseFormat,
  getCustomerResponse: responseFormat,
  getInvoiceResponse: responseFormat,
  getStoreInfoResponse: responseFormat,
  getOrdersResponse: responseFormat,
  getSalesResponse: responseFormat,
  getProductsResponse: responseFormat,
  getVariantsResponse: responseFormat,
  getInventoryResponse: responseFormat,
  getVoucherResponse: responseFormat,
  getSocialMediaReponse: responseFormat,
  getAddressesResponse: responseFormat,
  getOverviewResponse: responseFormat,
  getBusinessResponse: responseFormat,
  getProductQuestionResponse: responseFormat,
  getCarouselResponse: {
    success: false,
    code: 0,
    data: [],
  },

  // POST

  registerSuperAdminResponse: responsePost,
  carouselResponse: responsePost,
  forgotPasswordResponse: responsePost,
  productResponse: responsePost,
  collectionResponse: responsePost,
  categoryResponse: responsePost,
  saleResponse: responsePost,
  optionGroupResponse: responsePost,
  optionResponse: responsePost,
  voucherResponse: responsePost,
  addDiscountResponse: responsePost,
  variantResponse: responsePost,
  socialMediaResponse: responsePost,
  productQuestionResponse: responsePost,
  overviewResponse: responsePost,
  businessResponse: responsePost,
  productImageResponse: responsePost,

  // DELETE

  deleteUserResponse: responseDelete,
  deleteProductImageResponse: responseDelete,
};

const superAdminReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    // GET

    case Types.GET_USERS:
      newState.isLoading = true;
      break;

    case Types.GET_USERS_RESPONSE:
      newState.isLoading = false;
      newState.getUsersResponse = action.response;
      break;

    case Types.GET_BUSINESS:
      newState.isLoading = true;
      break;

    case Types.GET_BUSINESS_RESPONSE:
      newState.isLoading = false;
      newState.getBusinessResponse = action.response;
      break;

    case Types.GET_OVERVIEW:
      newState.isLoading = true;
      break;

    case Types.GET_OVERVIEW_RESPONSE:
      newState.isLoading = false;
      newState.getOverviewResponse = action.response;
      break;

    case Types.GET_OPTION_GROUPS:
      newState.isLoading = true;
      break;

    case Types.GET_OPTION_GROUPS_RESPONSE:
      newState.isLoading = false;
      newState.getOptionGroupsResponse = action.response;
      break;

    case Types.GET_OPTIONS:
      newState.isLoading = true;
      break;

    case Types.GET_OPTIONS_RESPONSE:
      newState.isLoading = false;
      newState.getOptionsResponse = action.response;
      break;

    case Types.GET_COLLECTION:
      newState.isLoading = true;
      break;

    case Types.GET_COLLECTION_RESPONSE:
      newState.isLoading = false;
      newState.getCollectionResponse = action.response;
      break;

    case Types.GET_VARIANT:
      newState.isLoading = true;
      break;

    case Types.GET_VARIANT_RESPONSE:
      newState.isLoading = false;
      newState.getVariantsResponse = action.response;
      break;

    case Types.GET_CATEGORIES:
      newState.isLoading = true;
      break;

    case Types.GET_CATEGORIES_RESPONSE:
      newState.isLoading = false;
      newState.getCategoriesResponse = action.response;
      break;

    case Types.GET_ADDRESSES:
      newState.isLoading = true;
      break;

    case Types.GET_ADDRESSES_RESPONSE:
      newState.isLoading = false;
      newState.getAddressesResponse = action.response;
      break;

    case Types.GET_CUSTOMERS:
      newState.isLoading = true;
      break;

    case Types.GET_CUSTOMERS_RESPONSE:
      newState.isLoading = false;
      newState.getCustomerResponse = action.response;
      break;

    case Types.GET_INVOICE:
      newState.isLoading = true;
      break;

    case Types.GET_INVOICE_RESPONSE:
      newState.isLoading = false;
      newState.getInvoiceResponse = action.response;
      break;

    case Types.GET_VOUCHER:
      newState.isLoading = true;
      break;

    case Types.GET_VOUCHER_RESPONSE:
      newState.isLoading = false;
      newState.getVoucherResponse = action.response;
      break;

    case Types.GET_SALES:
      newState.isLoading = true;
      break;

    case Types.GET_SALES_RESPONSE:
      newState.isLoading = false;
      newState.getSalesResponse = action.response;
      break;

    case Types.GET_ORDERS:
      newState.isLoading = true;
      break;

    case Types.GET_ORDERS_RESPONSE:
      newState.isLoading = false;
      newState.getOrdersResponse = action.response;
      break;

    case Types.GET_RECENT_ORDERS:
      newState.isLoading = true;
      break;

    case Types.GET_RECENT_ORDERS_RESPONSE:
      newState.isLoading = false;
      newState.getRecentOrdersResponse = action.response;
      break;

    case Types.GET_PRODUCTS:
      newState.isLoading = true;
      break;

    case Types.GET_PRODUCTS_RESPONSE:
      newState.isLoading = false;
      newState.getProductsResponse = action.response;
      break;

    case Types.GET_INVENTORY:
      newState.isLoading = true;
      break;

    case Types.GET_INVENTORY_RESPONSE:
      newState.isLoading = false;
      newState.getInventoryResponse = action.response;
      break;

    case Types.GET_SOCIAL_MEDIA:
      newState.isLoading = true;
      break;

    case Types.GET_SOCIAL_MEDIA_RESPONSE:
      newState.isLoading = false;
      newState.getSocialMediaReponse = action.response;
      break;

    case Types.GET_CAROUSEL:
      newState.isLoading = true;
      break;

    case Types.GET_CAROUSEL_RESPONSE:
      newState.isLoading = false;
      newState.getCarouselResponse = action.response;
      break;

    case Types.GET_PRODUCT_QUESTION:
      newState.isLoading = true;
      break;

    case Types.GET_PRODUCT_QUESTION_RESPONSE:
      newState.isLoading = false;
      newState.getProductQuestionResponse = action.response;
      break;

    case Types.GET_STORE_INFO:
      newState.isLoading = true;
      break;

    case Types.GET_STORE_INFO_RESPONSE:
      newState.isLoading = false;
      newState.getStoreInfoResponse = action.response;
      break;

    // POST
    case Types.POST_PRODUCT:
      newState.isLoading = true;
      break;

    case Types.POST_PRODUCT_RESPONSE:
      newState.isLoading = false;
      newState.productResponse = action.response;
      break;

    case Types.POST_OPTION_GROUP:
      newState.isLoading = true;
      break;

    case Types.POST_OPTION_GROUP_RESPONSE:
      newState.isLoading = false;
      newState.optionGroupResponse = action.response;
      break;

    case Types.POST_OPTION:
      newState.isLoading = true;
      break;

    case Types.POST_OPTION_RESPONSE:
      newState.isLoading = false;
      newState.optionResponse = action.response;
      break;

    case Types.POST_VARIANT:
      newState.isLoading = true;
      break;

    case Types.POST_VARIANT_RESPONSE:
      newState.isLoading = false;
      newState.variantResponse = action.response;
      break;

    case Types.POST_COLLECTION:
      newState.isLoading = true;
      break;

    case Types.POST_COLLECTION_RESPONSE:
      newState.isLoading = false;
      newState.collectionResponse = action.response;
      break;

    case Types.POST_CATEGORY:
      newState.isLoading = true;
      break;

    case Types.POST_CATEGORY_RESPONSE:
      newState.isLoading = false;
      newState.categoryResponse = action.response;
      break;

    case Types.POST_SALE:
      newState.isLoading = true;
      break;

    case Types.POST_SALE_RESPONSE:
      newState.isLoading = false;
      newState.saleResponse = action.response;
      break;

    case Types.POST_VOUCHER:
      newState.isLoading = true;
      break;

    case Types.POST_VOUCHER_RESPONSE:
      newState.isLoading = false;
      newState.voucherResponse = action.response;
      break;

    case Types.POST_PRODUCT_QUESTION:
      newState.isLoading = true;
      break;

    case Types.POST_PRODUCT_QUESTION_RESPONSE:
      newState.isLoading = false;
      newState.productQuestionResponse = action.response;
      break;

    case Types.POST_CAROUSEL:
      newState.isLoading = true;
      break;

    case Types.POST_CAROUSEL_RESPONSE:
      newState.isLoading = false;
      newState.carouselResponse = action.response;
      break;

    case Types.POST_DISCOUNT:
      newState.isLoading = true;
      break;

    case Types.POST_DISCOUNT_RESPONSE:
      newState.isLoading = false;
      newState.addDiscountResponse = action.response;
      break;

    case Types.REGISTER_SUPER_ADMIN:
      newState.isLoading = true;
      break;

    case Types.REGISTER_SUPER_ADMIN_RESPONSE:
      newState.isLoading = false;
      newState.registerSuperAdminResponse = action.response;
      break;

    case Types.FORGOT_PASSWORD:
      newState.isLoading = true;
      break;

    case Types.FORGOT_PASSWORD_RESPONSE:
      newState.isLoading = false;
      newState.forgotPasswordResponse = action.response;
      break;

    case Types.POST_PRODUCT_IMAGE:
      newState.isLoading = true;
      break;

    case Types.POST_PRODUCT_IMAGE_RESPONSE:
      newState.isLoading = false;
      newState.productImageResponse = action.response;
      break;

    // UPDATE
    case Types.UPDATE_COLLECTION:
      newState.isLoading = true;
      break;

    case Types.UPDATE_COLLECTION_RESPONSE:
      newState.isLoading = false;
      newState.collectionResponse = action.response;
      break;

    case Types.UPDATE_CATEGORY:
      newState.isLoading = true;
      break;

    case Types.UPDATE_CATEGORY_RESPONSE:
      newState.isLoading = false;
      newState.categoryResponse = action.response;
      break;

    case Types.UPDATE_SALES:
      newState.isLoading = true;
      break;

    case Types.UPDATE_SALES_RESPONSE:
      newState.isLoading = false;
      newState.saleResponse = action.response;
      break;

    case Types.UPDATE_VOUCHER:
      newState.isLoading = true;
      break;

    case Types.UPDATE_VOUCHER_RESPONSE:
      newState.isLoading = false;
      newState.voucherResponse = action.response;
      break;

    case Types.UPDATE_SOCIAL_MEDIA:
      newState.isLoading = true;
      break;

    case Types.UPDATE_SOCIAL_MEDIA_RESPONSE:
      newState.isLoading = false;
      newState.socialMediaResponse = action.response;
      break;

    case Types.UPDATE_BUSINESS:
      newState.isLoading = true;
      break;

    case Types.UPDATE_BUSINESS_RESPONSE:
      newState.isLoading = false;
      newState.businessResponse = action.response;
      break;

    case Types.UPDATE_PRODUCT:
      newState.isLoading = true;
      break;

    case Types.UPDATE_PRODUCT_RESPONSE:
      newState.isLoading = false;
      newState.productResponse = action.response;
      break;

    case Types.UPDATE_VARIANT:
      newState.isLoading = true;
      break;

    case Types.UPDATE_VARIANT_RESPONSE:
      newState.isLoading = false;
      newState.variantResponse = action.response;
      break;

    case Types.UPDATE_OPTION_GROUP:
      newState.isLoading = true;
      break;

    case Types.UPDATE_OPTION_GROUP_RESPONSE:
      newState.isLoading = false;
      newState.optionGroupResponse = action.response;
      break;

    case Types.UPDATE_OPTION:
      newState.isLoading = true;
      break;

    case Types.UPDATE_OPTION_RESPONSE:
      newState.isLoading = false;
      newState.optionResponse = action.response;
      break;

    case Types.UPDATE_OVERVIEW:
      newState.isLoading = true;
      break;

    case Types.UPDATE_OVERVIEW_RESPONSE:
      newState.isLoading = false;
      newState.overviewResponse = action.response;
      break;

    case Types.UPDATE_PRODUCT_IMAGE:
      newState.isLoading = true;
      break;

    case Types.UPDATE_PRODUCT_IMAGE_RESPONSE:
      newState.isLoading = false;
      newState.productImageResponse = action.response;
      break;

    // DELETE

    case Types.DELETE_USER:
      newState.isLoading = true;
      break;

    case Types.DELETE_USER_RESPONSE:
      newState.isLoading = false;
      newState.deleteUserResponse = action.response;
      break;

    case Types.DELETE_PRODUCT_IMAGE:
      newState.isLoading = false;
      break;

    case Types.DELETE_PRODUCT_IMAGE_RESPONSE:
      newState.isLoading = false;
      newState.deleteProductImageResponse = action.response;
      break;

    default:
      newState.test = !newState.test;
      break;
  }

  return newState;
};

export default superAdminReducer;
