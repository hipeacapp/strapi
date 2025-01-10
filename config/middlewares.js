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
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3000", "https://ariadne-admin.web.app", "*"],
      credentials: true,
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      jsonLimit: "75mb", // Set JSON body size limit
      formLimit: "75mb", // Set form data size limit
      textLimit: "75mb", // Set text body size limit
      formidable: {
        maxFileSize: 75 * 1024 * 1024, // Set file upload size limit to 200MB
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
