import config from "../../config";
import TokenInjector from "../../injectors/tokenInjector";

export const getCustomer = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  let params = `?`;

  if (payload.userId) {
    params += `user__id=${payload.userId}`;
  }

  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.customers + params, {
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

export const updateCustomer = (payload) => {
  return new Promise(async (resolve) => {
    let response = await fetch(
      config.baseUrl + config.customers + `/${payload.userId}`,
      {
        method: "PATCH",
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
