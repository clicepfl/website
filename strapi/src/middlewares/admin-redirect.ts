/**
 * `admin-redirect` middleware
 */
import { Strapi } from "@strapi/strapi";

export default (config, { strapi }: { strapi: Strapi }) => {
  const redirects = ["/", "/index.html"].map((path) => ({
    method: "GET",
    path,
    handler: (ctx) => ctx.redirect(strapi.config.admin.url),
    config: { auth: false },
  }));

  strapi.server.routes(redirects);
};
