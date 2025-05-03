import { Types } from "../actions/customerActions";
import { responseFormat, responsePost, responseUpdate } from "../structs";

let initialState = {
  isLoading: false,
  test: false,

  getRecentOrdersResponse: responseFormat,
  getCollectionResponse: responseFormat,
  getCategoriesResponse: responseFormat,
  getUsersResponse: responseFormat,
  getCustomerResponse: responseFormat,
  getInvoiceResponse: responseFormat,
  getStoreInfoResponse: responseFormat,
  getOrdersResponse: responseFormat,
  getSalesResponse: responseFormat,
  getProductsResponse: responseFormat,
  getInventoryResponse: responseFormat,
  getVoucherResponse: responseFormat,
  getSocialMediaReponse: responseFormat,
  getAddressesResponse: responseFormat,

  // POST
  registerResponse: responsePost,

  // PATCH
  updateCustomerResponse: responseUpdate,
};

const customerReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    // GET
    // POST
    case Types.REGISTER_CUSTOMER:
      newState.isLoading = true;
      break;

    case Types.REGISTER_CUSTOMER_RESPONSE:
      newState.isLoading = false;
      newState.registerResponse = action.response;
      break;

    // case Types.FORGOT_PASSWORD:
    //   newState.isLoading = true;
    //   break;

    // case Types.FORGOT_PASSWORD_RESPONSE:
    //   newState.isLoading = false;
    //   newState.forgotPasswordResponse = action.response;
    //   break;

    // PATCH
    case Types.PATCH_CUSTOMER:
      newState.isLoading = true;
      break;

    case Types.PATCH_CUSTOMER_RESPONSE:
      newState.isLoading = false;
      newState.updateCustomerResponse = action.response;
      break;

    default:
      newState.test = !newState.test;
      break;
  }

  return newState;
};

export default customerReducer;
