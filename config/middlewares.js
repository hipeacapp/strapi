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
  {
    name: "strapi::session",
    config: {
      key: "koa.sess",
      maxAge: 86400000, // 1 day in milliseconds
      httpOnly: true,
      secure: env("NODE_ENV") === "production", // Use secure cookies in production
      sameSite: "lax",
    },
  },
  "strapi::favicon",
  "strapi::public",
];
