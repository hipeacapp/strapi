// config/plugins.js

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"), // Your Cloudinary cloud name
        api_key: env("CLOUDINARY_API_KEY"), // Your Cloudinary API key
        api_secret: env("CLOUDINARY_API_SECRET"), // Your Cloudinary API secret
      },
    },
  },
});
