"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (config, { strapi }) => {
    const redirects = ["/", "/index.html"].map((path) => ({
        method: "GET",
        path,
        handler: (ctx) => ctx.redirect(strapi.config.admin.url),
        config: { auth: false },
    }));
    strapi.server.routes(redirects);
};
