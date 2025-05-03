export const Types = {
  FORGOT_PASSWORD: "@@common/forgot/password/post",
  FORGOT_PASSWORD_RESPONSE: "@@common/forgot/password/post/response",

  CHANGE_PASSWORD: "@@common/change/password/post",
  CHANGE_PASSWORD_RESPONSE: "@@common/change/password/post/response",

  REDIRECT: "@@common/redirect",

  TOGGLENAV: "@@frontend/toggle/nav",
};

// POST
export const forgotPassword = (payload) => {
  return {
    type: Types.FORGOT_PASSWORD,
    payload: payload,
  };
};

export const forgotPasswordResponse = (response) => {
  return {
    type: Types.FORGOT_PASSWORD_RESPONSE,
    response: response,
  };
};

export const changePassword = (payload) => {
  return {
    type: Types.CHANGE_PASSWORD,
    payload: payload,
  };
};

export const changePasswordResponse = (response) => {
  return {
    type: Types.CHANGE_PASSWORD_RESPONSE,
    response: response,
  };
};

export const redirect = (payload) => {
  return {
    type: Types.REDIRECT,
    payload: payload,
  };
};

export const toggleNav = () => {
  return {
    type: Types.TOGGLENAV,
  };
};
