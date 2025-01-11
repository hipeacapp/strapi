"use strict";

/**
 * building controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::building.building",
  ({ strapi }) => ({
    async create(ctx) {
      // Get the authenticated user
      const { username } = ctx.state.user;

      // Append the owner field to the request body
      ctx.request.body.data.owner = username;

      // Call the default core controller create method
      const response = await super.create(ctx);
      return response;
    },
  })
);
