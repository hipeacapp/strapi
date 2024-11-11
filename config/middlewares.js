module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

module.exports.settings = {
  security: {
    contentSecurityPolicy: {
      directives: {
        // Allow images from your domain and Cloudinary
        "img-src": ["'self'", "https://res.cloudinary.com"], // Add Cloudinary's domain
        // You can add other resources here, like scripts and styles if needed
        "default-src": ["'self'"], // Allow only the same origin for other resources
        "script-src": ["'self'"], // Allow scripts only from the same origin
        "style-src": ["'self'", "'unsafe-inline'"], // Allow styles from the same origin
      },
    },
  },
};
