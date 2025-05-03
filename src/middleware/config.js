let baseUrl = null;
const local = process.env.REACT_APP_LOCAL;

if (local) baseUrl = "http://localhost:8000/api/";
else baseUrl = "https://api.tokike.in/api/";

export default {
  baseUrl: baseUrl,

  users: "Users",
  token: "token",
  refresh: "token/refresh",
  orders: "Orders",
  recentOrders: "Orders/RecentOrders",
  products: "Products",
  productImages: "ProductImages",
  variants: "ProductOptions",
  socialMedia: "SocialMedia",
  overview: "Overview",
  business: "BusinessInfo",
  settings: "Settings",
  info: "Info",
  customers: "Customers",
  collections: "Collections",
  categories: "Categories",
  addresses: "Addresses",
  invoices: "Invoices",
  sales: "Sales",
  discounts: "Discounts",
  coupons: "Coupons",
  options: "Option",
  carousel: "Carousel",
  option_group: "OptionGroup",
  forgotPassword: "ForgotPassword",
  forgotChangePassword: "ChangeForgetPassword",

  adminCredentials: {
    email: "admin@gmail.com",
    password: "admin123",
  },
  pagination: {
    pageSize: 10,
  },
};
