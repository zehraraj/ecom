export const Types = {
  // GET
  // POST
  REGISTER_CUSTOMER: "@@customer/register/post",
  REGISTER_CUSTOMER_RESPONSE: "@@customer/register/post/response",

  FORGOT_PASSWORD: "@@customer/forgotPassword/post",
  FORGOT_PASSWORD_RESPONSE: "@@customer/forgotpassword/post/response",

  // PATCH
  PATCH_CUSTOMER: "@@customer/customer/patch",
  PATCH_CUSTOMER_RESPONSE: "@@customer/customer/patch/response",
};

// GET
// POST
export const registerCustomer = (payload) => {
  return {
    type: Types.REGISTER_CUSTOMER,
    payload: payload,
  };
};

export const registerCustomerResponse = (response) => {
  return {
    type: Types.REGISTER_CUSTOMER_RESPONSE,
    response: response,
  };
};

// PATCH
export const updateCustomer = (payload) => {
  return {
    type: Types.PATCH_CUSTOMER,
    payload: payload,
  };
};

export const updateCustomerResponse = (response) => {
  return {
    type: Types.PATCH_CUSTOMER_RESPONSE,
    response: response,
  };
};
