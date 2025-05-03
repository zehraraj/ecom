import TokenInjector from "../../injectors/tokenInjector";
import config from "../../config";

export const getVoucher = (payload) => {
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

export const getSales = (payload) => {
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

export const addSale = (payload) => {
  let token = TokenInjector.getInstance().getToken();

  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.sales, {
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

export const updateSale = (payload) => {
  let token = TokenInjector.getInstance().getToken();

  return new Promise(async (resolve) => {
    let response = await fetch(
      config.baseUrl + config.sales + `/${payload.id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
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

export const addDiscount = (payload) => {
  let token = TokenInjector.getInstance().getToken();

  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.discounts, {
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

export const addVoucher = (payload) => {
  let token = TokenInjector.getInstance().getToken();

  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.coupons, {
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

export const updateVoucher = (payload) => {
  let token = TokenInjector.getInstance().getToken();

  return new Promise(async (resolve) => {
    let response = await fetch(
      config.baseUrl + config.coupons + `/${payload.id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
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
