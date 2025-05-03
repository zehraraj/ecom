import TokenInjector from "../../injectors/tokenInjector";
import fetch from "../../fetch";
import config from "../../config";

export const getSocialMedia = () => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.socialMedia, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    resolve({
      success: response.ok,
      code: response.status,
      data: await response.json(),
    });
  });
};

export const register = (payload) => {
  return new Promise(async (resolve) => {
    let admin = payload.admin ? true : false;
    let response = await fetch(config.baseUrl + config.users, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        admin: admin,
      }),
    });

    resolve({
      success: response.ok,
      code: response.status,
      data: await response.json(),
    });
  });
};

export const forgotPassword = (payload) => {
  return new Promise(async (resolve) => {
    let response = await fetch(
      config.baseUrl + config.users + `/${config.forgotPassword}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    resolve({
      success: response.ok,
      code: response.status,
      data: await response.json(),
    });
  });
};

export const forgotChangePassword = (payload) => {
  return new Promise(async (resolve) => {
    let response = await fetch(
      config.baseUrl +
        config.users +
        `/${config.forgotChangePassword}/${payload.token}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.payload),
      }
    );

    resolve({
      success: response.ok,
      code: response.status,
      data: await response.json(),
    });
  });
};
