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
  cors: {
    origin: [
      "http://localhost:3000", // Your frontend URL (if you're testing locally)
      "https://your-frontend-domain.com", // Your live frontend domain
      "https://res.cloudinary.com", // Allow Cloudinary's domain
    ],
    headers: "*", // Allow all headers
  },
};
