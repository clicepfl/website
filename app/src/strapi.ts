import Strapi from "strapi-sdk-js";

export const STRAPI_URL = "http://clic-strapi:8001";
export const CLIENT_STRAPI_URL = "http://localhost/strapi";

const strapi = new Strapi({
  url: STRAPI_URL,
  axiosOptions: {
    headers: {
      Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
    },
  },
});
export default strapi;
