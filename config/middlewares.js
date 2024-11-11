module.exports = ({ env }) => [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          // Script sources (allow scripts from self, unsafe-inline)
          "script-src": ["'self'", "'unsafe-inline'"],

          // Image sources (allow images from self, data URIs, cdn.jsdelivr.net, strapi.io, AWS, and Cloudinary)
          "img-src": [
            "'self'",
            "data:",
            "strapi.io",
            "https://res.cloudinary.com",
          ],
        },
      },
    },
  },

  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
