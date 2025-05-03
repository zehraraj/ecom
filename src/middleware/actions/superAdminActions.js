export const Types = {
  // GET
  GET_ORDERS: "@@superAdmin/orders/get",
  GET_ORDERS_RESPONSE: "@@superAdmin/orders/get/response",
  GET_OPTIONS: "@@superAdmin/options/get",
  GET_OPTIONS_RESPONSE: "@@superAdmin/options/get/response",
  GET_OPTION_GROUPS: "@@superAdmin/option/group/get",
  GET_OPTION_GROUPS_RESPONSE: "@@superAdmin/option/group/get/response",
  GET_USERS: "@@superAdmin/users/get",
  GET_USERS_RESPONSE: "@@superAdmin/users/get/response",
  GET_OVERVIEW: "@@superAdmin/overview/get",
  GET_OVERVIEW_RESPONSE: "@@superAdmin/overview/get/response",
  GET_ADDRESSES: "@@superAdmin/addresses/get",
  GET_ADDRESSES_RESPONSE: "@@superAdmin/addresses/get/response",
  GET_COLLECTION: "@@superAdmin/collection/get",
  GET_COLLECTION_RESPONSE: "@@superAdmin/collection/get/response",
  GET_VARIANT: "@@superAdmin/variant/get",
  GET_VARIANT_RESPONSE: "@@superAdmin/variant/get/response",
  GET_CATEGORIES: "@@superAdmin/categories/get",
  GET_CATEGORIES_RESPONSE: "@@superAdmin/categories/get/response",
  GET_CUSTOMERS: "@@superAdmin/customers/get",
  GET_CUSTOMERS_RESPONSE: "@@superAdmin/customers/get/response",
  GET_RECENT_ORDERS: "@@superAdmin/orders/recent/get",
  GET_RECENT_ORDERS_RESPONSE: "@@superAdmin/orders/recent/get/response",
  GET_STORE_INFO: "@@superAdmin/orders/storeInfo/get",
  GET_STORE_INFO_RESPONSE: "@@superAdmin/orders/storeInfo/get/response",
  GET_PRODUCTS: "@@superAdmin/products/get",
  GET_PRODUCTS_RESPONSE: "@@superAdmin/products/get/response",
  GET_INVENTORY: "@@superAdmin/productOptions/get",
  GET_INVENTORY_RESPONSE: "@@superAdmin/productOptions/get/response",
  GET_SOCIAL_MEDIA: "@@superAdmin/socialMedia/get",
  GET_SOCIAL_MEDIA_RESPONSE: "@@superAdmin/socialMedia/get/response",
  GET_VOUCHER: "@@superAdmin/voucher/get",
  GET_VOUCHER_RESPONSE: "@@superAdmin/voucher/get/response",
  GET_SALES: "@@superAdmin/sales/get",
  GET_SALES_RESPONSE: "@@superAdmin/sales/get/response",
  GET_INVOICE: "@@superAdmin/invoice/get",
  GET_INVOICE_RESPONSE: "@@superAdmin/invoice/get/response",
  GET_BUSINESS: "@@superAdmin/business/get",
  GET_BUSINESS_RESPONSE: "@@superAdmin/business/get/response",
  GET_CAROUSEL: "@@superAdmin/carousel/get",
  GET_CAROUSEL_RESPONSE: "@@superAdmin/carousel/get/response",
  GET_PRODUCT_QUESTION: "@@superAdmin/productQuestions/get",
  GET_PRODUCT_QUESTION_RESPONSE: "@@superAdmin/productQuestions/get/response",

  // POST
  POST_PRODUCT: "@@superAdmin/products/post",
  POST_PRODUCT_RESPONSE: "@@superAdmin/products/post/response",
  POST_CAROUSEL: "@@superAdmin/settings/carousel/post",
  POST_CAROUSEL_RESPONSE: "@@superAdmin/settings/carousel/post/response",
  POST_COLLECTION: "@@superAdmin/collection/post",
  POST_COLLECTION_RESPONSE: "@@superAdmin/collection/post/response",
  POST_CATEGORY: "@@superAdmin/category/post",
  POST_CATEGORY_RESPONSE: "@@superAdmin/category/post/response",
  POST_OPTION_GROUP: "@@superAdmin/option/group/post",
  POST_OPTION_GROUP_RESPONSE: "@@superAdmin/option/group/post/response",
  POST_OPTION: "@@superAdmin/options/post",
  POST_OPTION_RESPONSE: "@@superAdmin/options/post/response",
  POST_SALE: "@@superAdmin/sale/post",
  POST_SALE_RESPONSE: "@@superAdmin/sale/post/response",
  POST_VOUCHER: "@@superAdmin/voucher/post",
  POST_VOUCHER_RESPONSE: "@@superAdmin/voucher/post/response",
  POST_DISCOUNT: "@@superAdmin/discount/post",
  POST_DISCOUNT_RESPONSE: "@@superAdmin/discount/post/response",
  POST_VARIANT: "@@superAdmin/variant/post",
  POST_VARIANT_RESPONSE: "@@superAdmin/variant/post/response",
  REGISTER_SUPER_ADMIN: "@@superAdmin/register/post",
  REGISTER_SUPER_ADMIN_RESPONSE: "@@superAdmin/register/post/response",
  FORGOT_PASSWORD: "@@superAdmin/forgotPassword/post",
  FORGOT_PASSWORD_RESPONSE: "@@superAdmin/forgotPassword/post/response",
  POST_PRODUCT_IMAGE: "@@superAdmin/productImage/post",
  POST_PRODUCT_IMAGE_RESPONSE: "@@superAdmin/productImage/post/response",
  POST_PRODUCT_QUESTION: "@@superAdmin/productQuestions/post",
  POST_PRODUCT_QUESTION_RESPONSE: "@@superAdmin/productQuestions/post/response",

  // UPDATE
  UPDATE_COLLECTION: "@@superAdmin/collection/update",
  UPDATE_COLLECTION_RESPONSE: "@@superAdmin/collection/update/response",
  UPDATE_CATEGORY: "@@superAdmin/category/update",
  UPDATE_CATEGORY_RESPONSE: "@@superAdmin/category/update/response",
  UPDATE_SALES: "@@superAdmin/sales/update",
  UPDATE_SALES_RESPONSE: "@@superAdmin/sales/update/response",
  UPDATE_PRODUCT: "@@superAdmin/product/update",
  UPDATE_PRODUCT_RESPONSE: "@@superAdmin/product/update/response",
  UPDATE_OPTION_GROUP: "@@superAdmin/option/group/update",
  UPDATE_OPTION_GROUP_RESPONSE: "@@superAdmin/option/group/update/response",
  UPDATE_OPTION: "@@superAdmin/options/update",
  UPDATE_OPTION_RESPONSE: "@@superAdmin/options/update/response",
  UPDATE_VARIANT: "@@superAdmin/variant/update",
  UPDATE_VARIANT_RESPONSE: "@@superAdmin/variant/update/response",
  UPDATE_VOUCHER: "@@superAdmin/voucher/update",
  UPDATE_VOUCHER_RESPONSE: "@@superAdmin/voucher/update/response",
  UPDATE_SOCIAL_MEDIA: "@@superAdmin/social/media/update",
  UPDATE_SOCIAL_MEDIA_RESPONSE: "@@superAdmin/social/media/update/response",
  UPDATE_OVERVIEW: "@@superAdmin/overview/update",
  UPDATE_OVERVIEW_RESPONSE: "@@superAdmin/overview/update/response",
  UPDATE_BUSINESS: "@@superAdmin/business/update",
  UPDATE_BUSINESS_RESPONSE: "@@superAdmin/business/update/response",
  UPDATE_PRODUCT_IMAGE: "@@superAdmin/productImage/update",
  UPDATE_PRODUCT_IMAGE_RESPONSE: "@@superAdmin/productImage/update/response",

  // DELETE
  DELETE_USER: "@@superAdmin/user/delete",
  DELETE_USER_RESPONSE: "@@superAdmin/user/delete/response",
  DELETE_PRODUCT_IMAGE: "@@superAdmin/productImage/delete",
  DELETE_PRODUCT_IMAGE_RESPONSE: "@@superAdmin/productImage/delete/response",
};

// GET

export const getUsers = (payload) => {
  return {
    type: Types.GET_USERS,
    payload: payload,
  };
};

export const getUsersResponse = (response) => {
  return {
    type: Types.GET_USERS_RESPONSE,
    response: response,
  };
};

export const getCarousel = (payload) => {
  return {
    type: Types.GET_CAROUSEL,
    payload: payload,
  };
};

export const getCarouselResponse = (response) => {
  return {
    type: Types.GET_CAROUSEL_RESPONSE,
    response: response,
  };
};

export const getBusiness = (payload) => {
  return {
    type: Types.GET_BUSINESS,
    payload: payload,
  };
};

export const getBusinessResponse = (response) => {
  return {
    type: Types.GET_BUSINESS_RESPONSE,
    response: response,
  };
};

export const getOverview = (payload) => {
  return {
    type: Types.GET_OVERVIEW,
    payload: payload,
  };
};

export const getOverviewResponse = (response) => {
  return {
    type: Types.GET_OVERVIEW_RESPONSE,
    response: response,
  };
};

export const getOptionGroup = (payload) => {
  return {
    type: Types.GET_OPTION_GROUPS,
    payload: payload,
  };
};

export const getOptionGroupResponse = (response) => {
  return {
    type: Types.GET_OPTION_GROUPS_RESPONSE,
    response: response,
  };
};

export const getOptions = (payload) => {
  return {
    type: Types.GET_OPTIONS,
    payload: payload,
  };
};

export const getOptionsResponse = (response) => {
  return {
    type: Types.GET_OPTIONS_RESPONSE,
    response: response,
  };
};

export const getSales = (payload) => {
  return {
    type: Types.GET_SALES,
    payload: payload,
  };
};

export const getSalesResponse = (response) => {
  return {
    type: Types.GET_SALES_RESPONSE,
    response: response,
  };
};

export const getVariant = (payload) => {
  return {
    type: Types.GET_VARIANT,
    payload: payload,
  };
};

export const getVariantResponse = (response) => {
  return {
    type: Types.GET_VARIANT_RESPONSE,
    response: response,
  };
};

export const getAddresses = (payload) => {
  return {
    type: Types.GET_ADDRESSES,
    payload: payload,
  };
};

export const getAddressesResponse = (response) => {
  return {
    type: Types.GET_ADDRESSES_RESPONSE,
    response: response,
  };
};

export const getCollection = (payload) => {
  return {
    type: Types.GET_COLLECTION,
    payload: payload,
  };
};

export const getCollectionResponse = (response) => {
  return {
    type: Types.GET_COLLECTION_RESPONSE,
    response: response,
  };
};

export const getProductQuestion = (payload) => {
  return {
    type: Types.GET_PRODUCT_QUESTION,
    payload: payload,
  };
};

export const getProductQuestionResponse = (response) => {
  return {
    type: Types.GET_PRODUCT_QUESTION_RESPONSE,
    response: response,
  };
};

export const getCategories = (payload) => {
  return {
    type: Types.GET_CATEGORIES,
    payload: payload,
  };
};

export const getCategoriesResponse = (response) => {
  return {
    type: Types.GET_CATEGORIES_RESPONSE,
    response: response,
  };
};

export const getCustomer = (payload) => {
  return {
    type: Types.GET_CUSTOMERS,
    payload: payload,
  };
};

export const getCustomersResponse = (response) => {
  return {
    type: Types.GET_CUSTOMERS_RESPONSE,
    response: response,
  };
};

export const getInvoice = (payload) => {
  return {
    type: Types.GET_INVOICE,
    payload: payload,
  };
};

export const getInvoiceResponse = (response) => {
  return {
    type: Types.GET_INVOICE_RESPONSE,
    response: response,
  };
};

export const getOrders = (payload) => {
  return {
    type: Types.GET_ORDERS,
    payload: payload,
  };
};

export const getOrdersResponse = (response) => {
  return {
    type: Types.GET_ORDERS_RESPONSE,
    response: response,
  };
};

export const getRecentOrders = () => {
  return {
    type: Types.GET_RECENT_ORDERS,
  };
};

export const getRecentOrdersReponse = (response) => {
  return {
    type: Types.GET_RECENT_ORDERS_RESPONSE,
    response: response,
  };
};

export const getStoreInfo = () => {
  return {
    type: Types.GET_STORE_INFO,
  };
};

export const getStoreInfoResponse = (response) => {
  return {
    type: Types.GET_STORE_INFO_RESPONSE,
    response: response,
  };
};

export const getProducts = (payload) => {
  return {
    type: Types.GET_PRODUCTS,
    payload: payload,
  };
};

export const getProductsResponse = (response) => {
  return {
    type: Types.GET_PRODUCTS_RESPONSE,
    response: response,
  };
};

export const getInventory = () => {
  return {
    type: Types.GET_INVENTORY,
  };
};

export const getInventoryResponse = (response) => {
  return {
    type: Types.GET_INVENTORY_RESPONSE,
    response: response,
  };
};

export const getSocialMedia = () => {
  return {
    type: Types.GET_SOCIAL_MEDIA,
  };
};

export const getSocialMediaReponse = (response) => {
  return {
    type: Types.GET_SOCIAL_MEDIA_RESPONSE,
    response: response,
  };
};

export const getVouchers = (payload) => {
  return {
    type: Types.GET_VOUCHER,
    payload: payload,
  };
};

export const getVouchersResponse = (response) => {
  return {
    type: Types.GET_VOUCHER_RESPONSE,
    response: response,
  };
};

// POST

export const addOptionGroup = (payload) => {
  return {
    type: Types.POST_OPTION_GROUP,
    payload: payload,
  };
};

export const addOptionGroupResponse = (response) => {
  return {
    type: Types.POST_OPTION_GROUP_RESPONSE,
    response: response,
  };
};

export const addOption = (payload) => {
  return {
    type: Types.POST_OPTION,
    payload: payload,
  };
};

export const addOptionResponse = (response) => {
  return {
    type: Types.POST_OPTION_RESPONSE,
    response: response,
  };
};

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

export const addProduct = (payload) => {
  return {
    type: Types.POST_PRODUCT,
    payload: payload,
  };
};

export const addProductResponse = (response) => {
  return {
    type: Types.POST_PRODUCT_RESPONSE,
    response: response,
  };
};

export const addVariant = (payload) => {
  return {
    type: Types.POST_VARIANT,
    payload: payload,
  };
};

export const addVariantResponse = (response) => {
  return {
    type: Types.POST_VARIANT_RESPONSE,
    response: response,
  };
};

export const addCarousel = (payload) => {
  return {
    type: Types.POST_CAROUSEL,
    payload: payload,
  };
};

export const addCarouselResponse = (response) => {
  return {
    type: Types.POST_CAROUSEL_RESPONSE,
    response: response,
  };
};

export const addCollection = (payload) => {
  return {
    type: Types.POST_COLLECTION,
    payload: payload,
  };
};

export const addCollectionResponse = (response) => {
  return {
    type: Types.POST_COLLECTION_RESPONSE,
    response: response,
  };
};

export const addCategory = (payload) => {
  return {
    type: Types.POST_CATEGORY,
    payload: payload,
  };
};

export const addCategoryResponse = (response) => {
  return {
    type: Types.POST_CATEGORY_RESPONSE,
    response: response,
  };
};

export const addSale = (payload) => {
  return {
    type: Types.POST_SALE,
    payload: payload,
  };
};

export const addSaleResponse = (response) => {
  return {
    type: Types.POST_SALE_RESPONSE,
    response: response,
  };
};

export const addDiscount = (payload) => {
  return {
    type: Types.POST_DISCOUNT,
    payload: payload,
  };
};

export const addDiscountResponse = (response) => {
  return {
    type: Types.POST_DISCOUNT_RESPONSE,
    response: response,
  };
};

export const addVoucher = (payload) => {
  return {
    type: Types.POST_VOUCHER,
    payload: payload,
  };
};

export const addVoucherResponse = (response) => {
  return {
    type: Types.POST_VOUCHER_RESPONSE,
    response: response,
  };
};

export const registerSuperAdmin = (payload) => {
  return {
    type: Types.REGISTER_SUPER_ADMIN,
    payload: payload,
  };
};

export const registerSuperAdminResponse = (response) => {
  return {
    type: Types.REGISTER_SUPER_ADMIN_RESPONSE,
    response: response,
  };
};

export const postProductImage = (payload) => {
  return {
    type: Types.POST_PRODUCT_IMAGE,
    payload: payload,
  };
};

export const postProductImageResponse = (response) => {
  return {
    type: Types.POST_PRODUCT_IMAGE_RESPONSE,
    response: response,
  };
};

export const postProductQuestions = (payload) => {
  return {
    type: Types.POST_PRODUCT_QUESTION,
    payload: payload,
  };
};

export const postProductQuestionsResponse = (response) => {
  return {
    type: Types.POST_PRODUCT_QUESTION_RESPONSE,
    response: response,
  };
};

// UPDATE

export const updateProductImage = (payload) => {
  return {
    type: Types.UPDATE_PRODUCT_IMAGE,
    payload: payload,
  };
};

export const updateProductImageResponse = (response) => {
  return {
    type: Types.UPDATE_PRODUCT_IMAGE_RESPONSE,
    response: response,
  };
};

export const updateCollection = (payload) => {
  return {
    type: Types.UPDATE_COLLECTION,
    payload: payload,
  };
};

export const updateCollectionResponse = (response) => {
  return {
    type: Types.UPDATE_COLLECTION_RESPONSE,
    response: response,
  };
};

export const updateCategory = (payload) => {
  return {
    type: Types.UPDATE_CATEGORY,
    payload: payload,
  };
};

export const updateCategoryResponse = (response) => {
  return {
    type: Types.UPDATE_CATEGORY_RESPONSE,
    response: response,
  };
};

export const updateProduct = (payload) => {
  return {
    type: Types.UPDATE_PRODUCT,
    payload: payload,
  };
};

export const updateProductResponse = (response) => {
  return {
    type: Types.UPDATE_PRODUCT_RESPONSE,
    response: response,
  };
};

export const updateOptionGroup = (payload) => {
  return {
    type: Types.UPDATE_OPTION_GROUP,
    payload: payload,
  };
};

export const updateOptionGroupResponse = (response) => {
  return {
    type: Types.UPDATE_OPTION_GROUP_RESPONSE,
    response: response,
  };
};

export const updateVariant = (payload) => {
  return {
    type: Types.UPDATE_VARIANT,
    payload: payload,
  };
};

export const updateVariantResponse = (response) => {
  return {
    type: Types.UPDATE_VARIANT_RESPONSE,
    response: response,
  };
};

export const updateBusiness = (payload) => {
  return {
    type: Types.UPDATE_BUSINESS,
    payload: payload,
  };
};

export const updateBusinessResponse = (response) => {
  return {
    type: Types.UPDATE_BUSINESS_RESPONSE,
    response: response,
  };
};

export const updateOption = (payload) => {
  return {
    type: Types.UPDATE_OPTION,
    payload: payload,
  };
};

export const updateOptionResponse = (response) => {
  return {
    type: Types.UPDATE_OPTION_RESPONSE,
    response: response,
  };
};

export const updateSale = (payload) => {
  return {
    type: Types.UPDATE_SALES,
    payload: payload,
  };
};

export const updateSaleResponse = (response) => {
  return {
    type: Types.UPDATE_SALES_RESPONSE,
    response: response,
  };
};

export const updateVoucher = (payload) => {
  return {
    type: Types.UPDATE_VOUCHER,
    payload: payload,
  };
};

export const updateVoucherResponse = (response) => {
  return {
    type: Types.UPDATE_VOUCHER_RESPONSE,
    response: response,
  };
};

export const updateSocialMedia = (payload) => {
  return {
    type: Types.UPDATE_SOCIAL_MEDIA,
    payload: payload,
  };
};

export const updateSocialMediaResponse = (response) => {
  return {
    type: Types.UPDATE_SOCIAL_MEDIA_RESPONSE,
    response: response,
  };
};

export const updateOverview = (payload) => {
  return {
    type: Types.UPDATE_OVERVIEW,
    payload: payload,
  };
};

export const updateOverviewResponse = (response) => {
  return {
    type: Types.UPDATE_OVERVIEW_RESPONSE,
    response: response,
  };
};

// DELETE

export const deleteUser = (payload) => {
  return {
    type: Types.DELETE_USER,
    payload: payload,
  };
};

export const deleteUserResponse = (response) => {
  return {
    type: Types.DELETE_USER_RESPONSE,
    response: response,
  };
};

export const deleteProductImage = (payload) => {
  return {
    type: Types.DELETE_PRODUCT_IMAGE,
    payload: payload,
  };
};

export const deleteProductImageResponse = (response) => {
  return {
    type: Types.DELETE_PRODUCT_IMAGE_RESPONSE,
    response: response,
  };
};
