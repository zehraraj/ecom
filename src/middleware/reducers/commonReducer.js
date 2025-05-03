/* eslint-disable */
import { Types } from "../actions/commonActions";
import { responseFormat, responsePost, responseUpdate } from "../structs";

let initialState = {
  isLoading: false,

  // POST
  forgotPasswordResponse: responsePost,
  changePasswordResponse: responsePost,

  // MISC
  redirect: "",

  // Frontend
  toggleNav: false,
};

const commonReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    // POST

    case Types.FORGOT_PASSWORD:
      newState.isLoading = true;
      break;

    case Types.FORGOT_PASSWORD_RESPONSE:
      newState.isLoading = false;
      newState.forgotPasswordResponse = action.response;
      break;

    case Types.CHANGE_PASSWORD:
      newState.isLoading = true;
      break;

    case Types.CHANGE_PASSWORD_RESPONSE:
      newState.isLoading = false;
      newState.changePasswordResponse = action.response;
      break;

    case Types.REDIRECT:
      newState.redirect = action.payload;
      break;

    case Types.TOGGLENAV:
      newState.toggleNav = !newState.toggleNav;

    default:
      newState.test = !newState.test;
      break;
  }

  return newState;
};

export default commonReducer;
