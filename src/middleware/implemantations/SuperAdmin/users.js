/* eslint-disable */
import config from "../../config";
import TokenInjector from "../../injectors/tokenInjector";
import fetch from "../../fetch";

export const getUsers = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  // let params = `?`;

  // if (payload.id) {
  //   params += `id=${payload.id}&`;
  // } else if (payload.page) {
  //   params += `page=${payload.page}`;
  // }

  return new Promise(async (resolve) => {
    let response = await fetch(payload.url, {
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

export const getAddresses = (payload) => {
  let token = TokenInjector.getInstance().getToken();

  return new Promise(async (resolve) => {
    let response = await fetch(payload.url, {
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

export const createSuperUser = (payload) => {
  let token = TokenInjector.getInstance().getToken();

  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.users, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    resolve({
      success: response.ok,
      code: response.status,
      data: await response.json(),
    });
  });
};

export const deleteUser = (payload) => {
  let token = TokenInjector.getInstance().getToken();

  return new Promise(async (resolve) => {
    let response = await fetch(payload.url, {
      method: "DELETE",
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
