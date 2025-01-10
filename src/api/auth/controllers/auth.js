const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  // @ts-ignore
  "plugin::users-permissions.auth",
  ({ strapi }) => ({
    async login(ctx) {
      const { identifier, password } = ctx.request.body;

      // Check if identifier and password are provided
      if (!identifier || !password) {
        return ctx.badRequest("Identifier and password are required");
      }

      // Attempt to authenticate the user
      const { user, jwt } = await strapi
        .plugin("users-permissions")
        .service("user")
        .checkCredentials({ identifier, password });

      if (!user) {
        return ctx.unauthorized("Invalid credentials");
      }

      // Set the JWT in an HTTP-only cookie
      ctx.cookies.set("token", jwt, {
        httpOnly: true,
        secure: strapi.config.get("server.ssl"), // Set to true if using HTTPS
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        domain: "yourdomain.com", // Replace with your domain
        sameSite: "strict",
        path: "/",
      });

      // Respond with user information
      ctx.send({
        user: await strapi
          .plugin("users-permissions")
          .service("user")
          .sanitizeUser(user),
      });
    },

    async logout(ctx) {
      // Clear the JWT cookie
      ctx.cookies.set("token", "", {
        httpOnly: true,
        secure: strapi.config.get("server.ssl"), // Set to true if using HTTPS
        maxAge: 0,
        domain: "yourdomain.com", // Replace with your domain
        sameSite: "strict",
        path: "/",
      });

      // Respond with a success message
      ctx.send({ message: "Successfully logged out" });
    },
  })
);
