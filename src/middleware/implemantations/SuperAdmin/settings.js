import TokenInjector from "../../injectors/tokenInjector";
import config from "../../config";

export const getStoreInfo = () => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.info, {
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

export const updateSocialMedia = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.socialMedia + `/1`, {
      method: "PATCH",
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

export const updateOverview = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  let data = new FormData();
  data.append("site_name", payload.site_name);
  data.append("site_address", payload.site_url);
  data.append("google_analytic", payload.google_analytic);
  // console.log(payload.carousel[0]);
  payload.carousel.map((item) => {
    return data.append("carousel", item);
  });
  if (payload.fav_icon) data.append("fav_icon", payload.fav_icon);

  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.overview + `/1`, {
      method: "PATCH",
      headers: {
        Authorization: token,
      },
      body: data,
    });

    resolve({
      success: response.ok,
      code: response.status,
      data: await response.json(),
    });
  });
};

export const updateBusiness = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  let data = new FormData();
  data.append("business_name", payload.business_name);
  data.append("business_desc", payload.business_desc);
  data.append("business_email", payload.business_email);
  data.append("business_phone", payload.business_phone);
  data.append("business_address", payload.business_address);

  // data.append("business_fax", payload.business_fax);
  // data.append("business_location", payload.business_location);

  if (payload.business_logo)
    data.append("business_logo", payload.business_logo);

  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.business + `/1`, {
      method: "PATCH",
      headers: {
        Authorization: token,
      },
      body: data,
    });

    resolve({
      success: response.ok,
      code: response.status,
      data: await response.json(),
    });
  });
};

export const getBusiness = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.business + `/1`, {
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

export const getOverview = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.overview + `/1`, {
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

export const getCarousel = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.carousel, {
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

export const addCarousel = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  let data = new FormData();
  data.append("image", payload.image);
  return new Promise(async (resolve) => {
    console.log(payload.image);
    let response = await fetch(config.baseUrl + config.carousel, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: data,
    });
    resolve({
      success: response.ok,
      code: response.status,
      data: await response.json(),
    });
  });
};
