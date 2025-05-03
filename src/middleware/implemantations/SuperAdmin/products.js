import config from "../../config";
import fetch from "../../fetch";
import TokenInjector from "../../injectors/tokenInjector";

// Collection
export const getCollections = (payload) => {
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

export const addCollections = (payload) => {
  let token = TokenInjector.getInstance().getToken();

  let data = new FormData();
  data.append("collection_name", payload.collection_name);
  data.append("collection_desc", payload.collection_desc);
  data.append("collection_image", payload.collection_image);

  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.collections, {
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

export const updateCollections = (payload) => {
  let token = TokenInjector.getInstance().getToken();

  let data = new FormData();
  data.append("collection_name", payload.payload.collection_name);
  data.append("collection_desc", payload.payload.collection_desc);

  if (payload.payload.collection_image)
    data.append("collection_image", payload.payload.collection_image);

  return new Promise(async (resolve) => {
    let response = await fetch(
      config.baseUrl + config.collections + `/${payload.id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
        },
        body: data,
      }
    );

    resolve({
      success: response.ok,
      code: response.status,
      data: await response.json(),
    });
  });
};

// Category
export const getCategories = (payload) => {
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

export const addCategory = (payload) => {
  let token = TokenInjector.getInstance().getToken();

  let data = new FormData();
  data.append("category_name", payload.category_name);
  data.append("category_desc", payload.category_desc);
  data.append("category_image", payload.category_image);
  payload.option_group.map((item) => data.append("option_group", item));

  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.categories, {
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

export const updateCategory = (payload) => {
  let token = TokenInjector.getInstance().getToken();

  let data = new FormData();
  data.append("category_name", payload.payload.category_name);
  data.append("category_desc", payload.payload.category_desc);
  payload.payload.option_group.map((item) => data.append("option_group", item));
  if (payload.payload.category_image)
    data.append("category_image", payload.payload.category_image);

  return new Promise(async (resolve) => {
    let response = await fetch(
      config.baseUrl + config.categories + `/${payload.id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
        },
        body: data,
      }
    );

    resolve({
      success: response.ok,
      code: response.status,
      data: await response.json(),
    });
  });
};

// Products
export const addProduct = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.products, {
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

export const getProducts = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  // let searchText = payload.searchText ? payload.searchText : "";

  return new Promise(async (resolve) => {
    // let response = await fetch(payload.url + `?search=${searchText}`, {
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

export const updateProduct = (payload) => {
  let token = TokenInjector.getInstance().getToken();

  return new Promise(async (resolve) => {
    let response = await fetch(
      config.baseUrl + config.products + `/${payload.id}`,
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

export const getInventory = () => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = await fetch(
      config.baseUrl + config.variants + `?inventory=true`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );

    resolve({
      success: response.ok,
      code: response.status,
      data: await response.json(),
    });
  });
};

// Questions
export const addProductQuestions = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = await fetch(
      config.baseUrl + config.products + `/${payload.id}/Questionss`,
      {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload.data),
      }
    );

    resolve({
      success: response.ok,
      code: response.status,
      data: await response.json(),
    });
  });
};

export const getProductQuestions = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = await fetch(
      config.baseUrl + config.products + `/${payload.id}/Questions`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );

    resolve({
      success: response.ok,
      code: response.status,
      data: await response.json(),
    });
  });
};

// Option group
export const getOptionGroup = (payload) => {
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

export const addOptionGroup = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.option_group, {
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

export const updateOptionGroup = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = await fetch(
      config.baseUrl + config.option_group + `/${payload.id}`,
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

// Options
export const getOptions = (payload) => {
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

export const addOption = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.options, {
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

export const updateOption = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = await fetch(
      config.baseUrl + config.options + `/${payload.id}`,
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

// Variants
export const addVariant = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.variants, {
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

export const getVariants = (payload) => {
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

export const updateVariant = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = await fetch(
      config.baseUrl + config.variants + `/${payload.id}`,
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

// Product Images

export const deleteProductImage = (payload) => {
  let token = TokenInjector.getInstance().getToken();

  return new Promise(async (resolve) => {
    let response = await fetch(
      config.baseUrl + config.productImages + `/${payload.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );

    resolve({
      success: response.ok,
      code: response.status,
      data: await response.json(),
    });
  });
};

export const updateProductImage = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  return new Promise(async (resolve) => {
    let response = await fetch(
      config.baseUrl + config.productImages + `/${payload.id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
        body: payload.payload,
      }
    );

    resolve({
      success: response.ok,
      code: response.status,
      data: await response.json(),
    });
  });
};

export const postProductImage = (payload) => {
  let token = TokenInjector.getInstance().getToken();
  console.log(payload);
  return new Promise(async (resolve) => {
    let response = await fetch(config.baseUrl + config.productImages, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: payload.payload,
    });

    resolve({
      success: response.ok,
      code: response.status,
      data: await response.json(),
    });
  });
};
