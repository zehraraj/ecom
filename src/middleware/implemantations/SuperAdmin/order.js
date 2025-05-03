import config from "../../config";
import fetch from "../../fetch";
import TokenInjector from "../../injectors/tokenInjector";

export const getOrder = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  let searchText = payload.searchText ? payload.searchText : "";
  return new Promise(async (resolve) => {
    let response = await fetch(payload.url + `?search=${searchText}`, {
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

export const getInvoices = (payload) => {
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

export const getRecentOrder = () => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.recentOrders, {
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

export const getInvoice = () => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = fetch(config.baseUrl + config.invoice, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    resolve({
      success: (await response).ok,
      code: (await response).status,
      data: (await response).json(),
    });
  });
};
